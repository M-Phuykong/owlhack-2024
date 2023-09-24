// import OpenAI from "openai";
// import { useState } from "react";
// import "./Suggest.css";

// const openai = new OpenAI({
//   apiKey: "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",
//   dangerouslyAllowBrowser: true,
// });

// const places = [
//   {
//     name: "Chu Shang (Food)",
//     address: "925 Arch St, Philadelphia, PA 19107",
//     hours: "Saturday 10:30 AM–10 PM",
//   },
//   {
//     name: "The Cliffs at Callow Hill (Rock Climbing)",
//     address: "1010 Callowhill St, Philadelphia, PA 19123",
//     hours: "Saturday 8 AM–10 PM",
//   },
//   {
//     name: "Matcha Maiko (Drinks)",
//     address: "923 Race St, Philadelphia, PA 19107",
//     hours: "Saturday 11 AM–10 PM",
//   },
// ];

// function Suggest() {
//   const [responsetext, setResponsetext] = useState("SCHEDULE");
//   const [day, setDay] = useState("");

//   const generateText = async (prompt) => {
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//     });
//     console.log(chatCompletion.choices[0].message.content);

//     return chatCompletion.choices[0].message.content;
//   };

//   return (
//     <div className="signup-container h-full w-full max-w-full max-h-full">
//       <div className="left-container">
//         <h1>{responsetext}</h1>
//       </div>
//       <div className="right-container">
//         <header>
//           <h1>Create Your Itenarary</h1>
//           <div className="set"></div>
//         </header>
//         <label for="pets-name">Day</label>
//         <input
//           id="pets-name"
//           placeholder="eg: Monday"
//           type="text"
//           onChange={(e) => {
//             setDay(e.currentTarget.value);
//           }}
//           value={day}
//         />
//         <footer>
//           <div className="set">
//             <button
//               id="next"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setResponsetext("Loading.. Please wait!");

//                 const basePromptPrefix = `Hey I want to create a UNIQUE schedule for these PLACES (I want to go on a ${day} for 5 hours ):\n${places
//                   .map(
//                     (place) =>
//                       `Name: ${place.name}\nAddress: ${place.address}\nHours: ${place.hours}\n\n`
//                   )
//                   .join("")}`;

//                 generateText(basePromptPrefix)
//                   .then((res) => {
//                     setResponsetext(res);
//                   })
//                   .catch((err) => {
//                     alert(err);
//                   });
//               }}
//             >
//               GENERATE
//             </button>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Suggest;
