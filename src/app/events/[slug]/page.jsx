import React from "react";
import Script from "next/script";
import EventDetails from "@/components/events/EventDetails";
import ajaxCall from "@/helpers/ajaxCall";

// Generate static params for events
export async function generateStaticParams() {
  return [];
}

export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return {
      title: "Event Not Found | OEC India",
      description: "The requested event was not found on OEC India.",
    };
  }

  try {
    const { data: event } = await ajaxCall(`/events/events/events/${slug}/`, {
      method: "GET",
    });
    return {
      title: event?.meta_title,
      description: event?.meta_description,
      openGraph: {
        title: event?.meta_title,
        description: event?.meta_description,
        images: [
          {
            url: event?.featured_image,
            alt: event?.featured_image || event?.meta_title,
            width: 800,
            height: 600,
          },
        ],
        siteName: "OEC India",
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: event?.meta_title,
        description: event?.meta_description,
        images: [
          {
            url: event?.featured_image,
            alt: event?.featured_image || event?.meta_title,
            width: 800,
            height: 600,
          },
        ],
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      title: "Upcoming Study Abroad Events & Webinars | OEC India",
      description: "Check out our events and webinars for study abroad.",
    };
  }
};

const EventDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return <div>Event Not Found</div>;
  }
  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '864579596089023');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=864579596089023&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <EventDetails slug={slug} />
    </>
  );
};

export default EventDetailPage;
