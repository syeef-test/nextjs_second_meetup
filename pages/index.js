import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "Some address,12345",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://images.pexels.com/photos/3989821/pexels-photo-3989821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "Some address,12322145",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "Some address,12wwdw345",
    description: "This is a third meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
