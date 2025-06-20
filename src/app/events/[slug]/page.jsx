import React from "react";
import EventDetails from "@/components/events/EventDetails";

const EventDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return <div>Blog Not Found</div>;
  }
  return <EventDetails slug={slug} />;
};

export default EventDetailPage;
