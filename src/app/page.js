import MyFormComponment from "./components/MyFormComponent";

export default function Home() {
  async function myServerAction(myData) {
    "use server";
    console.log("Server Action Invoked");
    console.log(myData);
    // here you would handle the form data that you pass in
    // then you would return a 'response' through to the form to handle loading and success states client side for user feedback
  }

  return (
    <div>
      <h1>Form that Resets</h1>
      <MyFormComponment serverAction={myServerAction} />
    </div>
  );
}
