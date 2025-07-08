"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
const Cheerio = require("cheerio");

const LiveReadingExam = ({ examData }) => {
  const containerRef = useRef(null);
  const [examAnswer, setExamAnswer] = useState([]);
  const [uniqueIdArr, setUniqueIdArr] = useState([]);
  const examId = examData?.id;

  const handleAnswerLinking = (e, questionId, next) => {
    const { value, id, checked, type } = e.target;
    const elementId = id.split("_")[0];
    const temp = [...examAnswer];
    if (!temp[next]) return;

    const isMultiQuestions =
      temp[next]?.answers?.filter((item) => item.questionId === id).length > 1;

    if (!isMultiQuestions) {
      const answer = temp[next].answers.find((item) => item.questionId === id);
      if (answer) {
        if (elementId === "Checkbox") {
          answer.answer = checked ? value : "";
        } else {
          answer.answer = value.trim();
        }
      }
    } else {
      const answerIndex = checked
        ? temp[next].answers.findIndex(
            (item) => item.questionId === id && item.answer === ""
          )
        : temp[next].answers.findIndex(
            (item) => item.questionId === id && item.answer === value
          );

      if (answerIndex !== -1) {
        temp[next].answers[answerIndex].answer = checked ? value : "";
      } else {
        const answeredCount = temp[next].answers.filter(
          (item) => item.questionId === id && item.answer !== ""
        ).length;
        const totalSlots = temp[next].answers.filter(
          (item) => item.questionId === id
        ).length;
        if (answeredCount >= totalSlots) {
          e.target.checked = false;
          console.error(
            "You have already selected the maximum number of options."
          );
        }
      }
    }
    setExamAnswer(temp);
  };

  const htmlContent = useMemo(() => {
    const questionHtml = examData?.question_other;
    if (!questionHtml) return "";

    const $ = Cheerio.load(questionHtml.toString());
    const questionTags = [
      "select",
      "textarea",
      "input[type='text'], input:not([type='radio'], [type='checkbox'])",
      "input[type='radio']",
      "input[type='checkbox']",
    ];
    const tagIds = ["Select", "Textarea", "InputText", "Radio", "Checkbox"];
    const temp = [];

    // Find all question elements and assign them a type and list of IDs.
    questionTags.forEach((tag, tagIndex) => {
      const elements = $(tag);
      if (elements.length === 0) return;

      let tagQuestions = { type: tagIds[tagIndex], paginationsIds: [] };
      const radioCheckboxGroup = {};

      elements.each((index, element) => {
        let uniqueId;
        if (tag === "input[type='radio']" || tag === "input[type='checkbox']") {
          const name = $(element).attr("name");
          if (!radioCheckboxGroup[name]) {
            uniqueId = `${tagIds[tagIndex]}_${
              Object.keys(radioCheckboxGroup).length + 1
            }`;
            radioCheckboxGroup[name] = uniqueId;
            tagQuestions.paginationsIds.push(uniqueId);
          } else {
            uniqueId = radioCheckboxGroup[name];
          }
        } else {
          // Use the existing ID if it has one, otherwise generate a new one.
          uniqueId =
            $(element).attr("id") || `${tagIds[tagIndex]}_${index + 1}`;
          tagQuestions.paginationsIds.push(uniqueId);
        }
        $(element).attr("id", uniqueId);
      });
      temp.push(tagQuestions);
    });

    // Create a flat array of question IDs based on the provided question_structure.
    let paginationsStructure =
      examData?.question_structure?.flatMap((item) => {
        const element = temp.find((el) => el.type === item.type);
        if (!element) return [];

        if (element.type === "Checkbox" && item?.isMultiQuestions) {
          const group = element.paginationsIds.splice(0, 1);
          return Array.from({ length: item.numberOfQuestions }, () => group[0]);
        }
        return element.paginationsIds.splice(0, item.numberOfQuestions);
      }) || [];

    // Replace '++' placeholders with actual question numbers.
    let serialNumber = 1;
    let finalHtml = $.html().replace(/\+{2}/g, () => {
      return `<span class="font-bold mr-2">${serialNumber++}.</span>`;
    });

    setUniqueIdArr(paginationsStructure);

    if (examAnswer.length === 0 && paginationsStructure.length > 0) {
      const tempAnswer = paginationsStructure.map((item) => ({
        questionId: item,
        answer: "",
      }));
      setExamAnswer([{ testId: examId, answers: tempAnswer }]);
    }

    return finalHtml;
  }, [examData]);

  useEffect(() => {
    if (examAnswer[0]?.answers.length > 0 && uniqueIdArr.length > 0) {
      uniqueIdArr.forEach((id, index) => {
        const elements = document.querySelectorAll(`[id="${id}"]`);
        const currentAnswer = examAnswer[0]?.answers[index]?.answer;

        elements.forEach((element) => {
          // Clone the element to avoid duplicate event listeners
          const newElement = element.cloneNode(true);

          // Set the value for input/select elements if answer exists
          if (currentAnswer && currentAnswer.trim() !== "") {
            if (newElement.tagName === "SELECT") {
              Array.from(newElement.options).forEach((option) => {
                if (option.value === currentAnswer) {
                  option.selected = true;
                }
              });
            } else if (newElement.tagName === "INPUT") {
              if (
                newElement.type === "checkbox" ||
                newElement.type === "radio"
              ) {
                newElement.checked = newElement.value === currentAnswer;
              } else {
                newElement.value = currentAnswer;
              }
            } else if (newElement.tagName === "TEXTAREA") {
              newElement.value = currentAnswer;
            }
          }

          // Replace the old element with the new one
          element.parentNode.replaceChild(newElement, element);

          // Add event listener
          newElement.addEventListener("change", (e) =>
            handleAnswerLinking(e, id, 0)
          );
        });
      });
    }
  }, [uniqueIdArr, examAnswer]);

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800 min-h-screen">
      <div className="mx-auto p-4 mt-24 sm:p-6 lg:p-8">
        <main
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          style={{ height: "calc(100vh - 250px)", minHeight: "500px" }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg h-full overflow-y-auto border border-gray-200 prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: examData.passage }} />
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-lg h-full overflow-y-auto border border-gray-200"
            ref={containerRef}
          >
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </main>
        <footer className="bg-white shadow-lg rounded-xl p-4 mt-6 border border-gray-200">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              {uniqueIdArr?.map((item, index) => {
                const isAnswered =
                  examAnswer[0]?.answers[index]?.answer?.trim() !== "";
                return (
                  <div
                    key={index}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
                      isAnswered
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 rounded-lg text-sm font-semibold bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
                Review
              </button>
              <button className="px-6 py-2 rounded-lg text-sm font-semibold bg-green-500 text-white hover:bg-green-600">
                Submit
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LiveReadingExam;