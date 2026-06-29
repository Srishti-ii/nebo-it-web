console.log("CHATBOT FILE LOADED");
import React, {
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  X,
  Send,
  Bot,
  Sparkles,
  ChevronDown,
  Loader2,
  RotateCcw
} from "lucide-react";


const BASE_URL =
"https://nebo-ai-server.onrender.com";


interface Message {
  id:string;
  role:"user"|"assistant";
  content:string;
  timestamp:Date;
}
const formatIST = (date:string) => {

  return new Date(date).toLocaleString(
    "en-IN",
    {
      timeZone:"Asia/Kolkata",
      dateStyle:"medium",
      timeStyle:"short"
    }
  );

};

const FAQ_CHIPS = [
"What services does Nebo IT offer?",
"Tell me about your AI products",
"How can AI transform my business?",
"What projects have you delivered?",
"How do I start a project with you?",
"What makes Nebo IT different?",
"Tell me about CogniFlow",
"What is FluentAI?",
"How can I contact Nebo IT?",
"Book a consultation",
];


const WELCOME_MESSAGE:Message = {

id:"welcome",

role:"assistant",

content:
`Hello! I'm your Nebo IT assistant.

I can tell you about our services, projects, and products like **FluentAI**, **CogniFlow**, and **OpticSight**. How can I help you?`,

timestamp:new Date()

};

const getSessionId = () => {

let id =
localStorage.getItem(
"nebo_session"
);


if(!id){

id =
crypto.randomUUID
? crypto.randomUUID()
: Date.now().toString();


localStorage.setItem(
"nebo_session",
id
);

}


return id;

};



const renderMarkdown =
(text:string)=>{

const parts =
text.split(
/(\*\*[^*]+\*\*)/g
);


return parts.map(
(part,i)=>{

if(
part.startsWith("**") &&
part.endsWith("**")
){

return (

<strong
key={i}
className="text-white font-semibold"
>

{part.slice(2,-2)}

</strong>

);

}


return (
<span key={i}>
{part}
</span>
);

});

};



const MessageBubble:
React.FC<{
message:Message;
isLatest:boolean;
}> =
({
message
})=>{


const isUser =
message.role==="user";


return (

<motion.div

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

className={
`flex gap-3 ${
isUser
?"flex-row-reverse"
:"flex-row"
}
items-end`
}

>


{!isUser && (

<div
className="
w-8 h-8 rounded-xl
bg-gradient-to-br
from-purple-500
to-indigo-600
flex items-center justify-center
"
>

<Bot size={15}/>

</div>

)}



<div

className={
`
max-w-[82%]
rounded-2xl
px-4
py-3
text-sm
leading-relaxed

${
isUser

?
"bg-gradient-to-br from-purple-500 to-indigo-600 text-white"

:

"bg-white/[0.05] border border-white/[0.07] text-gray-300"

}

`

}

>


{

isUser

?

<span className="whitespace-pre-wrap">

{message.content}

</span>

:

<span className="whitespace-pre-wrap">

{renderMarkdown(message.content)}

</span>

}


</div>


</motion.div>

);

};



const TypingIndicator =()=> (

<div className="flex gap-3 items-end">

<div
className="
w-8 h-8 rounded-xl
bg-gradient-to-br
from-purple-500
to-indigo-600
flex items-center justify-center
"
>

<Bot size={15}/>

</div>


<div
className="
bg-white/[0.05]
rounded-2xl
px-4 py-3
"
>

<Loader2
size={16}
className="animate-spin"
/>

</div>


</div>

);



async function sendToAgent(
message:string
):Promise<string>{


const res =
await fetch(

`${BASE_URL}/api/agent-chat`,

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},


body:JSON.stringify({

sessionId:
getSessionId(),

message

})

}

);



if(!res.ok){

const err =
await res.json()
.catch(()=>({}));

throw new Error(
err.error ||
`HTTP ${res.status}`
);

}



const data =
await res.json();



if(data.type==="text"){

return data.response;

}



if(data.type==="booking_complete"){

return data.response;

}

if(data.type==="slots"){

return JSON.stringify({
 type:"slots",
 slots:data.slots,
 response:data.response
});

}



return "Something went wrong.";

}
const ChatBot: React.FC = () => {

const [isOpen,setIsOpen] =
useState(false);
const [availableSlots,setAvailableSlots] = useState<
{
 value:string;
 label:string;
}[]
>([]);
const [messages,setMessages] =
useState<Message[]>([
WELCOME_MESSAGE
]);

const [input,setInput] =
useState("");

const [isLoading,setIsLoading] =
useState(false);

const [error,setError] =
useState<string|null>(null);

const [hasUnread,setHasUnread] =
useState(false);


const messagesEndRef =
useRef<HTMLDivElement>(null);

const inputRef =
useRef<HTMLTextAreaElement>(null);



const scrollToBottom =
useCallback(()=>{

messagesEndRef.current
?.scrollIntoView({
behavior:"smooth"
});

},[]);



const addBotMessage =
(content:string)=>{

setMessages(prev=>[
...prev,
{
id:`a-${Date.now()}`,
role:"assistant",
content,
timestamp:new Date()
}
]);

};



useEffect(()=>{

if(isOpen){

scrollToBottom();

setHasUnread(false);

setTimeout(
()=>inputRef.current?.focus(),
300
);

}

},[
isOpen,
scrollToBottom
]);



useEffect(()=>{

if(isOpen)

scrollToBottom();


},[
messages,
isLoading,
isOpen,
scrollToBottom
]);



useEffect(()=>{

const timer =
setTimeout(()=>{

if(!isOpen)

setHasUnread(true);


},5000);


return ()=>clearTimeout(timer);


},[]);





const sendMessage =
useCallback(

async(inputText:any, displayText?:string)=>{


try{


const text =
typeof inputText==="string"

?

inputText

:

"";


const trimmed =
text.trim();



if(
!trimmed ||
isLoading
)

return;



setError(null);



const userMsg:Message={

id:`u-${Date.now()}`,

role:"user",

content:displayText || trimmed,

timestamp:new Date()

};



setMessages(prev=>[
...prev,
userMsg
]);


setInput("");

setIsLoading(true);



const reply =
await sendToAgent(
trimmed
);
let parsed;

try {
 parsed = JSON.parse(reply);
}
catch {}

if(parsed?.type==="slots"){
addBotMessage(
 parsed.response
);
setAvailableSlots([...parsed.slots]);

return;

}


const aiMsg:Message={

id:`a-${Date.now()}`,

role:"assistant",

content:
reply.includes("T")
?
reply.replace(
 /2026.*?Z/,
 (match)=>formatIST(match)
)
:
reply,

timestamp:new Date()

};



setMessages(prev=>[
...prev,
aiMsg
]);



}

catch(err:any){

console.error(err);

setError(
err.message ||
"Something went wrong"
);

}


finally{

setIsLoading(false);

}


},

[
isLoading
]

);





const handleKeyDown =
(e:React.KeyboardEvent<HTMLTextAreaElement>)=>{


if(
e.key==="Enter" &&
!e.shiftKey
){

e.preventDefault();

sendMessage(input);

}

};




const resetChat=()=>{

localStorage.removeItem(
 "nebo_session"
);

setMessages([
 WELCOME_MESSAGE
]);

setAvailableSlots([]);

setError(null);

setInput("");

};





return (

<>


<motion.div

className="
fixed bottom-6 right-6
z-[999]
flex flex-col
items-end gap-3
"

initial={{
scale:0,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

transition={{
delay:2
}}

>


<AnimatePresence>


{!isOpen && (

<div className="relative group">

<div
role="tooltip"
className="
pointer-events-none
absolute
bottom-full
right-0
z-10
mb-2
w-64
max-w-[calc(100vw-3rem)]
rounded-2xl
border
border-purple-500/20
bg-[#0c0c1d]
px-4
py-3
shadow-xl
opacity-0
translate-y-1
transition-all
duration-200
ease-out
hidden
[@media(hover:hover)_and_(pointer:fine)]:block
[@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100
[@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-y-0
"
>

<p className="text-sm font-semibold text-gray-200 mb-1">
Need assistance?
</p>

<p className="text-xs text-gray-400 leading-relaxed">
Ask NeboAI about our services, solutions, or book a consultation.
</p>

<span
aria-hidden="true"
className="
pointer-events-none
absolute
-bottom-[5px]
right-8
z-0
h-2.5
w-2.5
rotate-45
bg-[#0c0c1d]
border-r
border-b
border-purple-500/20
"
/>

</div>

<motion.div

initial={{
opacity:0,
x:20
}}

animate={{
opacity:1,
x:0
}}

className="
bg-[#0c0c1d]
border
border-purple-500/20
rounded-2xl
px-4 py-2.5
shadow-xl
cursor-pointer
"

onClick={()=>setIsOpen(true)}

>


<Sparkles
size={14}
className="text-purple-400"
/>


<span className="
text-sm
text-gray-200
ml-2
">

Ask NeboAI

</span>


</motion.div>

</div>

)}

</AnimatePresence>




<button

onClick={()=>setIsOpen(v=>!v)}

className="
relative
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-purple-500
to-indigo-600
flex items-center justify-center
"

>


{isOpen

?

<X size={22}/>

:

<Bot size={22}/>

}


{hasUnread &&
!isOpen && (

<span

className="
absolute
top-0
right-0
w-4
h-4
rounded-full
bg-red-500
"

/>

)}

</button>


</motion.div>





<AnimatePresence>


{isOpen && (

<motion.div


initial={{
opacity:0,
scale:0.95
}}

animate={{
opacity:1,
scale:1
}}

className="
fixed
bottom-24
right-6
left-auto
z-[998]
w-[420px]
max-h-[80vh]
flex flex-col
rounded-3xl
overflow-hidden
bg-[#12122a]
max-sm:left-4
max-sm:right-4
max-sm:w-auto
max-sm:max-w-none
max-sm:max-h-[calc(100dvh-7rem)]
"


>


<div className="
flex
items-center
justify-between
px-5
py-4
border-b
border-white/[0.06]
">


<div className="flex gap-3 items-center">


<div className="
w-9
h-9
rounded-xl
bg-gradient-to-br
from-purple-500
to-indigo-600
flex
items-center
justify-center
">

<Bot size={18}/>

</div>


<div>

<h3 className="text-white">

NeboAI

</h3>


<p className="
text-emerald-400
text-xs
">

Online

</p>


</div>


</div>




<button

onClick={resetChat}

>

<RotateCcw size={14}/>

</button>


<button

onClick={()=>setIsOpen(false)}

>

<ChevronDown size={16}/>

</button>


</div>





<div className="
flex-1
min-h-0
overflow-y-auto
px-4
py-5
space-y-4
">


{messages.map((msg,i)=>(


<MessageBubble

key={msg.id}

message={msg}

isLatest={
i===messages.length-1
}

/>


))}

{availableSlots.length > 0 && (

<div className="flex flex-col gap-2">

{availableSlots.map(slot => (

<button
key={slot.value}

onClick={() =>
{
setAvailableSlots([]);

sendMessage(
`Book this slot ${slot.value}`,
`Book this slot ${slot.label}`
);
}}

className="
bg-purple-600
text-white
rounded-xl
px-3
py-2
text-sm
"
>

📅 {slot.label}

</button>

))}

</div>

)}


<AnimatePresence>

{isLoading &&
<TypingIndicator/>
}

</AnimatePresence>




{error && (

<div className="
text-red-400
text-xs
text-center
">

⚠️ {error}

</div>

)}


<div ref={messagesEndRef}/>


</div>






{messages.length<=1 && (

<div className="px-4 pb-3">


<div className="flex flex-wrap gap-2">


{FAQ_CHIPS.map(chip=>(


<button

key={chip}

onClick={()=>sendMessage(chip)}

className="
text-xs
px-3
py-1.5
rounded-full
bg-purple-500/10
text-purple-300
"


>

{chip}

</button>


))}


</div>


</div>

)}





<div className="
px-4
pb-4
pt-2
border-t
border-white/[0.06]
">


<div className="
flex
items-end
gap-2
bg-white/[0.04]
rounded-2xl
px-4
py-3
">


<textarea


ref={inputRef}

value={input}

onChange={
e=>setInput(e.target.value)
}


onKeyDown={handleKeyDown}


placeholder="
Ask anything about Nebo IT...
"


rows={1}


className="
flex-1
bg-transparent
text-white
outline-none
resize-none
"


/>




<button


onClick={()=>
sendMessage(input)
}


disabled={
!input.trim() ||
isLoading
}


className="
w-8
h-8
rounded-xl
bg-gradient-to-br
from-purple-500
to-indigo-600
flex
items-center
justify-center
"


>


{isLoading

?

<Loader2
size={14}
className="animate-spin"
/>

:

<Send size={14}/>

}


</button>



</div>


</div>




</motion.div>

)}

</AnimatePresence>



</>

);

};


export default ChatBot;