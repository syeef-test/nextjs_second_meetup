import { Fragment } from "react";
import MeetupDetail from "@/components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="a first meetup"
      title="A first meetup"
      address="Some street 5,Some city"
      description="he meetup description"
    />
  );
}

export default MeetupDetails;
