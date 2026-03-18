import { useState } from "react";

/* ─── Wireframe Primitives ─── */
const F = "'Architects Daughter', 'Caveat', cursive";

const Rect = ({ children, className = "", dash = false, fill = false, ...p }) => (
  <div className={`border-2 ${dash ? "border-dashed" : ""} border-stone-400 rounded-lg ${fill ? "bg-stone-100" : "bg-white"} ${className}`} {...p}>
    {children}
  </div>
);

const Pill = ({ children, active = false, sm = false, className = "" }) => (
  <div className={`border-2 border-stone-400 rounded-full text-center ${active ? "bg-stone-400 text-white" : "bg-white text-stone-500"} ${sm ? "px-2 py-0.5 text-[9px]" : "px-3 py-1 text-[10px]"} ${className}`}>
    {children}
  </div>
);

const Btn = ({ children, filled = false, sm = false, className = "" }) => (
  <div className={`border-2 border-stone-400 rounded-lg text-center cursor-default ${filled ? "bg-stone-400 text-white" : "bg-white text-stone-500"} ${sm ? "px-2 py-1 text-[9px]" : "px-3 py-1.5 text-[10px]"} font-semibold ${className}`}>
    {children}
  </div>
);

const O = ({ s = 32, label = "", className = "" }) => (
  <div className={`rounded-full border-2 border-stone-400 flex items-center justify-center shrink-0 bg-stone-100 ${className}`} style={{ width: s, height: s, fontSize: s * 0.35 }}>
    {label}
  </div>
);

const Bar = ({ w = "100%", h = 7, className = "" }) => (
  <div className={`bg-stone-300 rounded ${className}`} style={{ width: w, height: h }} />
);

const BarLight = ({ w = "60%", h = 5, className = "" }) => (
  <div className={`bg-stone-200 rounded ${className}`} style={{ width: w, height: h }} />
);

const XBox = ({ w = 60, h = 60, className = "" }) => (
  <div className={`border-2 border-stone-400 rounded-lg relative overflow-hidden shrink-0 ${className}`} style={{ width: w, height: h }}>
    <svg viewBox={`0 0 ${w} ${h}`} className="absolute inset-0 w-full h-full">
      <line x1="0" y1="0" x2={w} y2={h} stroke="#a8a29e" strokeWidth="1.2" />
      <line x1={w} y1="0" x2="0" y2={h} stroke="#a8a29e" strokeWidth="1.2" />
    </svg>
  </div>
);

const Tog = ({ on = true }) => (
  <div className={`w-8 h-4 rounded-full border-2 border-stone-400 relative ${on ? "bg-stone-300" : "bg-white"}`}>
    <div className={`absolute top-0 w-3 h-3 rounded-full border border-stone-400 bg-white ${on ? "right-0" : "left-0"}`} />
  </div>
);

const Input = ({ ph = "Input...", icon = false }) => (
  <div className="border-2 border-stone-400 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 bg-white">
    {icon && <O s={14} />}
    <span className="text-[9px] text-stone-400">{ph}</span>
  </div>
);

const Dot = ({ n }) => (
  <div className="w-4 h-4 rounded-full bg-stone-400 text-white text-[8px] flex items-center justify-center font-bold shrink-0">{n}</div>
);

/* ─── Desktop Sidebar Wire ─── */
function WireSidebar({ active }) {
  const items = ["Home", "Discover", "Groups", "Messages", "Profile"];
  return (
    <div className="w-44 shrink-0 border-r-2 border-dashed border-stone-300 flex flex-col h-full bg-white">
      <div className="p-3 border-b-2 border-dashed border-stone-300 flex items-center gap-2">
        <XBox w={24} h={24} />
        <div>
          <div className="text-[10px] font-bold text-stone-600">Study Buddy</div>
          <div className="text-[7px] text-stone-400">Learn together</div>
        </div>
      </div>
      <div className="flex-1 p-2 space-y-0.5">
        {items.map(i => (
          <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[9px] ${active === i ? "bg-stone-200 font-bold text-stone-700" : "text-stone-400"}`}>
            <div className={`w-3 h-3 rounded ${active === i ? "bg-stone-400" : "bg-stone-200"}`} />
            {i}
            {i === "Messages" && <Dot n={3} />}
          </div>
        ))}
      </div>
      <div className="p-2 border-t-2 border-dashed border-stone-300 flex items-center gap-2">
        <O s={22} label="AJ" />
        <div className="flex-1 min-w-0">
          <div className="text-[8px] font-bold text-stone-600 truncate">Alex Johnson</div>
          <div className="text-[7px] text-stone-400">@alexj</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Breadcrumb Header ─── */
function BreadcrumbHeader({ items }) {
  return (
    <div className="border-b-2 border-stone-300 px-4 py-2 flex items-center gap-1.5">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="text-stone-300 mx-1">/</span>}
          <span className={`text-[9px] ${i === items.length - 1 ? "text-stone-400" : "font-bold text-stone-600"}`}>{item}</span>
        </span>
      ))}
    </div>
  );
}

/* ─── SCREENS ─── */

function SplashWire() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-stone-100 p-6">
      <XBox w={64} h={64} className="mb-4" />
      <div className="text-xl font-bold text-stone-600 mb-1">Study Buddy</div>
      <div className="text-[10px] text-stone-400 mb-6">Learn Better, Together</div>
      <BarLight w="40%" className="mb-1.5" />
      <BarLight w="30%" />
      <div className="flex gap-1.5 mt-6">{[0,1,2].map(i=><div key={i} className="w-2 h-2 rounded-full bg-stone-400" />)}</div>
    </div>
  );
}

function LoginWire() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-8">
      <Rect className="w-80 overflow-hidden">
        <div className="bg-stone-200 p-5 text-center">
          <XBox w={40} h={40} className="mx-auto mb-2" />
          <div className="text-sm font-bold text-stone-600">Welcome back!</div>
          <div className="text-[9px] text-stone-400">Sign in to continue</div>
        </div>
        <div className="p-5 space-y-2.5">
          <div><div className="text-[8px] text-stone-400 uppercase mb-1">Email</div><Input ph="your@email.com" icon /></div>
          <div><div className="text-[8px] text-stone-400 uppercase mb-1">Password</div><Input ph="••••••••" icon /></div>
          <Btn filled className="w-full mt-2">Sign In</Btn>
          <div className="flex items-center gap-2"><div className="flex-1 h-px bg-stone-200"/><span className="text-[8px] text-stone-400">or</span><div className="flex-1 h-px bg-stone-200"/></div>
          <div className="grid grid-cols-2 gap-1.5"><Btn sm>Google</Btn><Btn sm>Microsoft</Btn></div>
          <div className="text-center text-[8px] text-stone-400 mt-2">No account? <span className="underline">Sign Up</span></div>
        </div>
      </Rect>
    </div>
  );
}

function SignUpWire() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-8">
      <Rect className="w-80 overflow-hidden">
        <div className="bg-stone-200 p-4">
          <div className="text-[9px] text-stone-400 mb-1">← Back</div>
          <div className="text-sm font-bold text-stone-600">Create account</div>
          <div className="text-[9px] text-stone-400">Join students studying together</div>
        </div>
        <div className="p-4 space-y-2">
          {["Full Name","Email","University","Password"].map(f=>(
            <div key={f}><div className="text-[8px] text-stone-400 uppercase mb-0.5">{f}</div><Input ph={f} icon /></div>
          ))}
          <div className="flex gap-1">{[1,2,3,4].map(i=><div key={i} className={`h-1 flex-1 rounded-full ${i<=3?"bg-stone-400":"bg-stone-200"}`}/>)}</div>
          <Btn filled className="w-full mt-1.5">Create Account</Btn>
        </div>
      </Rect>
    </div>
  );
}

function OnbStyleWire() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-8">
      <Rect className="w-80 p-5">
        <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i=><div key={i} className={`h-1 flex-1 rounded-full ${i===1?"bg-stone-500":"bg-stone-200"}`}/>)}</div>
        <div className="text-[8px] text-stone-400 uppercase">Step 1 of 5</div>
        <div className="text-sm font-bold text-stone-600 mb-0.5">How do you learn best?</div>
        <div className="text-[9px] text-stone-400 mb-3">Match with compatible buddies</div>
        <div className="space-y-1.5">
          {["👁️ Visual","🎧 Auditory","📖 Reading","🛠️ Hands-on"].map((s,i)=>(
            <Rect key={s} className={`p-2 flex items-center gap-2 ${i===0?"border-stone-600 bg-stone-50":""}`}>
              <div className="text-base">{s.split(" ")[0]}</div>
              <div className="flex-1"><div className="text-[9px] font-semibold text-stone-600">{s.split(" ").slice(1).join(" ")}</div><BarLight w="70%" className="mt-0.5"/></div>
              <div className={`w-3 h-3 rounded-full border-2 ${i===0?"border-stone-600 bg-stone-400":"border-stone-300"}`}/>
            </Rect>
          ))}
        </div>
        <Btn filled className="w-full mt-3">Continue</Btn>
      </Rect>
    </div>
  );
}

function OnbAvailWire() {
  const days=["Mo","Tu","We","Th","Fr","Sa","Su"];
  const sel=new Set(["Mo-2","We-1","Fr-3","Sa-0"]);
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-8">
      <Rect className="w-80 p-5">
        <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i=><div key={i} className={`h-1 flex-1 rounded-full ${i<=2?"bg-stone-500":"bg-stone-200"}`}/>)}</div>
        <div className="text-[8px] text-stone-400 uppercase">Step 2 of 5</div>
        <div className="text-sm font-bold text-stone-600 mb-0.5">When are you free?</div>
        <div className="text-[9px] text-stone-400 mb-3">Select available time slots</div>
        {days.map(d=>(
          <div key={d} className="flex items-center gap-0.5 mb-0.5">
            <div className="w-5 text-[7px] text-stone-500 font-bold">{d}</div>
            {Array.from({length:7}).map((_,i)=>(
              <div key={i} className={`flex-1 h-4 rounded ${sel.has(`${d}-${i}`)?"bg-stone-400":"bg-stone-100 border border-stone-200"}`}/>
            ))}
          </div>
        ))}
        <div className="flex gap-1.5 mt-3"><Btn className="flex-1">Back</Btn><Btn filled className="flex-[2]">Continue</Btn></div>
      </Rect>
    </div>
  );
}

function OnbSubjectsWire() {
  const subs=["Algorithms","ML","Databases","Web Dev","OS","Networks","Math","Python","Java","C++"];
  const sel=new Set(["Algorithms","ML","Databases","Web Dev"]);
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-8">
      <Rect className="w-80 p-5">
        <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i=><div key={i} className={`h-1 flex-1 rounded-full ${i<=3?"bg-stone-500":"bg-stone-200"}`}/>)}</div>
        <div className="text-[8px] text-stone-400 uppercase">Step 3 of 5</div>
        <div className="text-sm font-bold text-stone-600 mb-0.5">What are you studying?</div>
        <div className="text-[9px] text-stone-400 mb-3">Select subjects</div>
        <div className="flex flex-wrap gap-1">{subs.map(s=><Pill key={s} active={sel.has(s)} sm>{s}</Pill>)}</div>
        <div className="flex gap-1.5 mt-3"><Btn className="flex-1">Back</Btn><Btn filled className="flex-[2]">Continue</Btn></div>
      </Rect>
    </div>
  );
}

function OnbPrivacyWire() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-8">
      <Rect className="w-80 p-5">
        <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(i=><div key={i} className={`h-1 flex-1 rounded-full ${i<=4?"bg-stone-500":"bg-stone-200"}`}/>)}</div>
        <div className="text-[8px] text-stone-400 uppercase">Step 4 of 5</div>
        <div className="text-sm font-bold text-stone-600 mb-0.5">Privacy settings</div>
        <div className="text-[9px] text-stone-400 mb-3">Control your visibility</div>
        <div className="space-y-1.5">
          {["Public Profile","Discoverable","Notifications","Show Uni"].map(s=>(
            <Rect key={s} fill className="p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-stone-200 shrink-0"/>
              <div className="flex-1"><div className="text-[9px] font-semibold text-stone-600">{s}</div><BarLight w="65%" className="mt-0.5"/></div>
              <Tog />
            </Rect>
          ))}
        </div>
        <div className="flex gap-1.5 mt-3"><Btn className="flex-1">Back</Btn><Btn filled className="flex-[2]">Continue</Btn></div>
      </Rect>
    </div>
  );
}

function OnbWelcomeWire() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-100 p-8">
      <Rect className="w-80 bg-stone-200 p-6 text-center overflow-hidden rounded-2xl">
        <XBox w={56} h={56} className="mx-auto mb-3" />
        <div className="text-base font-bold text-stone-600">You're all set!</div>
        <div className="text-[9px] text-stone-400 mb-4">Let's find study partners</div>
        {["Find study buddies","Chat & collaborate","Smart recommendations"].map(f=>(
          <Rect key={f} className="p-2 mb-1.5 flex items-center gap-2 bg-stone-100/50">
            <div className="w-5 h-5 rounded-lg bg-stone-300 shrink-0"/>
            <span className="text-[9px] text-stone-500">{f}</span>
          </Rect>
        ))}
        <Btn filled className="w-full mt-3">Start Exploring</Btn>
      </Rect>
    </div>
  );
}

/* ─── Desktop Layout Screens ─── */

function HomeWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Home" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-stone-200 p-4">
          <div className="flex justify-between items-center mb-3">
            <div><div className="text-[9px] text-stone-400">Good afternoon,</div><div className="text-sm font-bold text-stone-600">Alex 👋</div></div>
            <div className="flex gap-1.5"><O s={24} label="🔔" /><O s={24} label="AJ" /></div>
          </div>
          <div className="flex gap-2 items-center">
            {["24 Sessions","12 Buddies","4.8★"].map(s=>(
              <Rect key={s} dash className="flex-1 py-1.5 text-center bg-stone-100/50"><div className="text-[9px] font-bold text-stone-500">{s}</div></Rect>
            ))}
            <Rect className="flex-1 py-1.5 px-2 bg-white flex items-center justify-center gap-1.5 border-2 border-stone-500" style={{borderStyle:"solid"}}>
              <div className="text-sm">📓</div>
              <div className="text-[9px] font-bold text-stone-600">My Workspace</div>
            </Rect>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-3 gap-3">
            <Rect className="col-span-2 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[9px] font-bold text-stone-600">📅 Upcoming Sessions</div>
                <div className="text-[8px] text-stone-400 underline">See all</div>
              </div>
              {["ML Study Squad — 16:00 Today","Algorithms — 14:00 Tomorrow","Web Dev — 18:00 Fri"].map(s=>(
                <Rect key={s} fill className="p-2 mb-1.5 flex items-center gap-2">
                  <div className="w-1 h-7 bg-stone-400 rounded-full shrink-0" />
                  <div className="flex-1"><Bar w="60%" /><BarLight w="40%" className="mt-0.5" /></div>
                  <div className="text-right shrink-0"><div className="text-[8px] font-bold text-stone-600">{s.split("—")[1]?.trim().split(" ")[0]}</div><div className="text-[7px] text-stone-400">{s.split("—")[1]?.trim().split(" ").slice(1).join(" ")}</div></div>
                  <Btn sm>Join</Btn>
                </Rect>
              ))}
            </Rect>
            <Rect className="p-3">
              <div className="text-[9px] font-bold text-stone-600 mb-2">✨ Suggestions</div>
              {["Maria is a great ML match","Join Database Club","Free Wed 10-14?"].map(s=>(
                <Rect key={s} dash fill className="p-2 mb-1.5">
                  <div className="text-[8px] text-stone-500 mb-1">{s}</div>
                  <Btn sm className="w-fit">View →</Btn>
                </Rect>
              ))}
            </Rect>
            <Rect className="col-span-3 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[9px] font-bold text-stone-600">🔔 Notifications</div>
                <Pill sm active>2 new</Pill>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["Session in 30 min","Buddy request from Maria","New msg in Algorithms","25 sessions achieved!"].map((n,i)=>(
                  <Rect key={n} fill={i<2} className="p-1.5 flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-stone-200 shrink-0"/>
                    <div className="text-[8px] text-stone-500 flex-1">{n}</div>
                    {i<2 && <div className="w-1.5 h-1.5 rounded-full bg-stone-500"/>}
                  </Rect>
                ))}
              </div>
            </Rect>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoverWire() {
  const buddies=[{n:"Maria K.",m:"95%",tags:["ML","Stats"],on:true},{n:"Tomáš N.",m:"88%",tags:["Calc","Algo"],on:true},{n:"Sofia H.",m:"82%",tags:["React","Node"],on:false},{n:"Lukáš K.",m:"74%",tags:["OS","C++"],on:false}];
  return (
    <div className="flex h-full">
      <WireSidebar active="Discover" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b-2 border-stone-300 p-4">
          <div className="flex justify-between items-center mb-2">
            <div><div className="text-sm font-bold text-stone-600">Discover</div><div className="text-[9px] text-stone-400">Find study buddies</div></div>
            <Btn sm>⚙ Filters</Btn>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex-1 max-w-48"><Input ph="Search name or subject..." icon /></div>
            <div className="flex gap-1">{["All","ML","Algo","Web","Math","DB"].map((f,i)=><Pill key={f} active={i===0} sm>{f}</Pill>)}</div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <div className="text-[8px] text-stone-400 uppercase mb-2">{buddies.length} buddies found</div>
          <div className="grid grid-cols-2 gap-2">
            {buddies.map(s=>(
              <Rect key={s.n} className="p-3 flex items-start gap-2.5">
                <div className="relative shrink-0"><O s={36} label={s.n[0]} />{s.on&&<div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-stone-400 rounded-full border-2 border-white"/>}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center"><div className="text-[10px] font-bold text-stone-600">{s.n}</div><Pill sm active>⚡{s.m}</Pill></div>
                  <BarLight w="55%" className="mt-1" />
                  <Bar w="75%" className="mt-1" />
                  <div className="flex gap-1 mt-1.5">{s.tags.map(t=><Pill key={t} sm>{t}</Pill>)}</div>
                  <div className="flex gap-2.5 mt-1.5 pt-1.5 border-t border-stone-100 text-[8px] text-stone-400"><span>⭐ 4.9</span><span>31 sessions</span><span>18 buddies</span></div>
                </div>
              </Rect>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePreviewWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Discover" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BreadcrumbHeader items={["← Back","Discover","Maria K."]} />
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <Rect fill className="p-4 text-center rounded-xl bg-stone-200">
                <O s={44} label="MK" className="mx-auto mb-2"/>
                <div className="text-[10px] font-bold text-stone-600">Maria Kovač</div>
                <div className="text-[8px] text-stone-400">@mariak</div>
                <Pill sm active className="mt-1.5 mx-auto w-fit">⚡ 95% match</Pill>
              </Rect>
              <Rect className="p-2 grid grid-cols-3 divide-x divide-stone-200">
                {["⭐4.9","📚31","👥18"].map(s=><div key={s} className="text-center text-[8px] font-bold text-stone-500">{s}</div>)}
              </Rect>
              <Btn>💬 Message</Btn>
              <Btn filled>＋ Add Buddy</Btn>
            </div>
            <div className="col-span-2 space-y-2">
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1">About</div><Bar w="90%"/><BarLight w="60%" className="mt-1"/></Rect>
              <Rect className="p-3 flex items-center gap-2"><div className="w-5 h-5 rounded bg-stone-200 shrink-0"/><div><div className="text-[9px] font-bold text-stone-600">STU FIIT</div><div className="text-[8px] text-stone-400">3rd Year</div></div></Rect>
              <div className="grid grid-cols-2 gap-2">
                <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1.5">Style</div><Pill sm active>Visual</Pill></Rect>
                <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1.5">Availability</div><div className="text-[8px] text-stone-400 space-y-0.5"><div>Mon 14-18</div><div>Thu 10-14</div></div></Rect>
              </div>
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1.5">Subjects</div><div className="flex flex-wrap gap-1">{["ML","Stats","Python","DataViz"].map(t=><Pill key={t} sm>{t}</Pill>)}</div></Rect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupsWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Groups" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b-2 border-stone-300 p-4">
          <div className="flex justify-between items-center mb-2"><div><div className="text-sm font-bold text-stone-600">Study Groups</div><div className="text-[9px] text-stone-400">Collaborate together</div></div><Btn sm filled>＋ Create</Btn></div>
          <div className="flex gap-0.5 bg-stone-100 p-0.5 rounded-lg w-40"><div className="flex-1 text-center py-1 text-[8px] font-bold bg-white rounded text-stone-600 shadow-sm">My (2)</div><div className="flex-1 text-center py-1 text-[8px] text-stone-400">Discover</div></div>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-2 gap-2">
            {[{n:"ML Study Squad",s:"Machine Learning",b:3,m:"3/5",t:"Today 16:00"},{n:"Algorithms Grind",s:"Algorithms & DS",b:0,m:"2/4",t:"Tomorrow 14:00"}].map(g=>(
              <Rect key={g.n} className="p-3 flex items-start gap-2.5">
                <XBox w={36} h={36} />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between"><div><div className="text-[10px] font-bold text-stone-600">{g.n}</div><div className="text-[8px] text-stone-400">{g.s}</div></div>{g.b>0&&<Dot n={g.b}/>}</div>
                  <BarLight w="70%" className="mt-1"/>
                  <div className="flex gap-1 mt-1.5">{["Weekly","Active"].map(t=><Pill key={t} sm>{t}</Pill>)}</div>
                  <div className="flex gap-3 mt-1.5 pt-1.5 border-t border-stone-100 text-[8px] text-stone-400"><span>👥 {g.m}</span><span>🕐 {g.t}</span></div>
                </div>
              </Rect>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupDetailWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Groups" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BreadcrumbHeader items={["← Back","Groups","ML Study Squad"]} />
        <div className="bg-stone-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3"><XBox w={40} h={40}/><div><div className="text-sm font-bold text-stone-600">ML Study Squad</div><div className="text-[9px] text-stone-400">Machine Learning · 3 members</div></div></div>
          <div className="flex gap-1.5"><Btn sm>💬 Chat</Btn><Btn sm filled>📁 Workspace</Btn></div>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-2">
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1">About</div><Bar w="85%"/><BarLight w="55%" className="mt-1"/></Rect>
              <Rect dash fill className="p-3"><div className="text-[9px] font-bold text-stone-600 mb-1">📅 Next Session</div><div className="text-[10px] font-bold text-stone-700">Today, 16:00</div><div className="text-[8px] text-stone-400">2h · Online</div><Btn sm filled className="mt-1.5 w-fit">Join Session</Btn></Rect>
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1.5">Tags</div><div className="flex gap-1">{["Weekly","Active","Beginner"].map(t=><Pill key={t} sm>{t}</Pill>)}</div></Rect>
            </div>
            <div className="space-y-2">
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-2">Members (3/5)</div>{["AJ Alex","MK Maria","TN Tomáš"].map(m=><div key={m} className="flex items-center gap-1.5 mb-1"><O s={20} label={m.substring(0,2)}/><div className="text-[8px] text-stone-500">{m.substring(3)}</div></div>)}</Rect>
              <Btn>Leave Group</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupChatWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Groups" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b-2 border-stone-300 p-2.5 flex items-center gap-2">
          <O s={22} label="←"/><XBox w={24} h={24}/><div className="flex-1"><div className="text-[9px] font-bold text-stone-600">ML Study Squad</div><div className="text-[7px] text-stone-400">3 members</div></div><O s={22} label="👥"/>
        </div>
        <div className="flex-1 p-3 overflow-auto flex flex-col gap-1.5">
          <div className="text-center text-[7px] text-stone-300">— Today —</div>
          <div className="flex gap-1.5 items-end"><O s={20} label="MK"/><Rect className="px-2 py-1.5 max-w-[60%]"><div className="text-[7px] text-stone-400 mb-0.5">Maria</div><Bar w="85%"/><BarLight w="50%" className="mt-0.5"/></Rect></div>
          <div className="flex gap-1.5 items-end justify-end"><div className="px-2 py-1.5 max-w-[60%] bg-stone-300 rounded-lg rounded-br-sm"><Bar w="75%"/></div></div>
          <div className="flex gap-1.5 items-end"><O s={20} label="TN"/><Rect className="px-2 py-1.5 max-w-[60%]"><div className="text-[7px] text-stone-400 mb-0.5">Tomáš</div><Bar w="90%"/></Rect></div>
          <div className="flex gap-1.5 items-end justify-end"><div className="px-2 py-1.5 max-w-[60%] bg-stone-300 rounded-lg rounded-br-sm"><Bar w="80%"/><BarLight w="40%" className="mt-0.5"/></div></div>
        </div>
        <div className="border-t-2 border-stone-300 p-2 flex items-center gap-1.5">
          <O s={24} label="📎"/><div className="flex-1 border-2 border-stone-300 rounded-full px-2.5 py-1"><span className="text-[8px] text-stone-400">Type a message...</span></div><O s={24} label="→"/>
        </div>
      </div>
    </div>
  );
}

function WorkspaceWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Groups" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BreadcrumbHeader items={["← Groups","ML","Workspace"]} />
        <div className="flex-1 p-4 overflow-auto">
          <Rect className="p-2.5 mb-3"><div className="flex justify-between text-[8px] mb-1"><span className="text-stone-500 font-bold">Storage</span><span className="text-stone-400">15.8 / 100 MB</span></div><div className="h-1.5 bg-stone-100 rounded-full"><div className="h-1.5 bg-stone-400 rounded-full w-[16%]"/></div></Rect>
          <div className="grid grid-cols-4 gap-1.5 mb-3">{["Note","Code","Board","More"].map(a=><Rect key={a} className="py-2 text-center"><div className="w-5 h-5 rounded-lg bg-stone-200 mx-auto mb-0.5"/><div className="text-[7px] text-stone-500">{a}</div></Rect>)}</div>
          <div className="text-[8px] font-bold text-stone-400 uppercase mb-1.5">Shared Files</div>
          {[{n:"ML_Notes.pdf",s:"2.4 MB",b:"Maria"},{n:"gradient.py",s:"4.2 KB",b:"Alex"},{n:"NN_Slides.pptx",s:"8.1 MB",b:"Tomáš"},{n:"Plan.docx",s:"1.1 MB",b:"Alex"}].map(f=>(
            <Rect key={f.n} className="p-2 mb-1 flex items-center gap-2"><div className="w-7 h-7 rounded-lg bg-stone-100 border border-stone-200 shrink-0"/><div className="flex-1 min-w-0"><div className="text-[9px] font-semibold text-stone-600 truncate">{f.n}</div><div className="text-[7px] text-stone-400">{f.s} · {f.b}</div></div><div className="text-stone-300 text-[9px]">⋯</div></Rect>
          ))}
        </div>
      </div>
    </div>
  );
}

function MessagesWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Messages" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b-2 border-stone-300 p-4">
          <div className="flex justify-between items-center mb-2"><div><div className="text-sm font-bold text-stone-600">Messages</div><div className="text-[9px] text-stone-400">3 unread</div></div><Btn sm filled>✏ New</Btn></div>
          <Input ph="Search conversations..." icon />
        </div>
        <div className="border-b-2 border-stone-200 p-3">
          <div className="text-[8px] text-stone-400 uppercase mb-1.5">Online now</div>
          <div className="flex gap-3">{["MK","TN"].map(a=><div key={a} className="flex flex-col items-center gap-0.5"><div className="relative"><O s={26} label={a}/><div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-stone-400 rounded-full border-2 border-white"/></div><div className="text-[7px] text-stone-400">{a}</div></div>)}</div>
        </div>
        <div className="flex-1 overflow-auto">
          {[{n:"Maria K.",m:"ML session today?",t:"2m",u:2,on:true},{n:"Tomáš N.",m:"Shared calculus notes",t:"1h",u:0,on:true},{n:"Sofia H.",m:"Same time next week?",t:"3h",u:0,on:false},{n:"Lukáš K.",m:"Bug in sorting",t:"1d",u:1,on:false}].map(c=>(
            <div key={c.n} className="flex items-center gap-2.5 px-3 py-2.5 border-b border-stone-100">
              <div className="relative shrink-0"><O s={28} label={c.n[0]}/>{c.on&&<div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-stone-400 rounded-full border-2 border-white"/>}</div>
              <div className="flex-1 min-w-0"><div className="flex justify-between"><div className="text-[9px] font-bold text-stone-600">{c.n}</div><div className="text-[7px] text-stone-400">{c.t}</div></div><div className="text-[8px] text-stone-400 truncate">{c.m}</div></div>
              {c.u>0&&<Dot n={c.u}/>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DMWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Messages" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b-2 border-stone-300 p-2.5 flex items-center gap-2">
          <O s={22} label="←"/><O s={26} label="MK"/><div className="flex-1"><div className="text-[9px] font-bold text-stone-600">Maria Kovač</div><div className="text-[7px] text-stone-400">Online</div></div><O s={22} label="📞"/><O s={22} label="📹"/>
        </div>
        <div className="flex-1 p-3 overflow-auto flex flex-col gap-1.5">
          <div className="text-center text-[7px] text-stone-300">— Today —</div>
          <div className="flex justify-start"><Rect className="px-2 py-1.5 max-w-[65%]"><Bar w="85%"/><div className="text-[7px] text-stone-300 mt-0.5">14:20</div></Rect></div>
          <div className="flex justify-end"><div className="px-2 py-1.5 max-w-[65%] bg-stone-300 rounded-lg rounded-br-sm"><Bar w="75%"/><div className="text-[7px] text-stone-400 mt-0.5">14:21</div></div></div>
          <div className="flex justify-start"><Rect className="px-2 py-1.5 max-w-[65%]"><Bar w="90%"/><BarLight w="35%" className="mt-0.5"/><div className="text-[7px] text-stone-300 mt-0.5">14:22</div></Rect></div>
          <div className="flex justify-end"><div className="px-2 py-1.5 max-w-[65%] bg-stone-300 rounded-lg rounded-br-sm"><Bar w="65%"/><div className="text-[7px] text-stone-400 mt-0.5">14:23</div></div></div>
          <div className="flex items-end gap-1"><O s={16} label="M"/><Rect className="px-2 py-1.5"><div className="flex gap-0.5">{[0,1,2].map(i=><div key={i} className="w-1 h-1 rounded-full bg-stone-300"/>)}</div></Rect></div>
        </div>
        <div className="border-t-2 border-stone-300 p-2 flex items-center gap-1.5">
          <O s={24} label="📎"/><div className="flex-1 border-2 border-stone-300 rounded-full px-2.5 py-1"><span className="text-[8px] text-stone-400">Message...</span></div><O s={24} label="→"/>
        </div>
      </div>
    </div>
  );
}

function ProfileWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Profile" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-stone-200 p-4 flex items-center gap-4">
          <O s={44} label="AJ"/>
          <div className="flex-1"><div className="text-sm font-bold text-stone-600">Alex Johnson</div><div className="text-[8px] text-stone-400">@alexj · FIIT STU · 3rd Year</div></div>
          <Btn sm>✏ Edit</Btn><O s={24} label="⚙"/>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <Rect className="p-2.5 grid grid-cols-3 divide-x divide-stone-200 mb-3">{["📚 24 Sessions","👥 12 Buddies","⭐ 4.8"].map(s=><div key={s} className="text-center text-[9px] font-bold text-stone-500">{s}</div>)}</Rect>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 space-y-2">
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1">About Me</div><Bar/><BarLight className="mt-1"/><BarLight w="35%" className="mt-1"/></Rect>
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1.5">Subjects</div><div className="flex flex-wrap gap-1">{["Algorithms","ML","Databases","Web Dev"].map(t=><Pill key={t} sm active>{t}</Pill>)}</div></Rect>
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1.5">Achievements</div><div className="grid grid-cols-4 gap-1">{["🏆","⭐","🔥","👥"].map(e=><Rect key={e} fill className="py-1.5 text-center"><div className="text-sm">{e}</div><BarLight w="50%" className="mx-auto mt-0.5"/></Rect>)}</div></Rect>
            </div>
            <div className="space-y-2">
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1.5">Details</div><div className="space-y-1"><div className="flex justify-between text-[8px]"><span className="text-stone-400">Style</span><Pill sm>Visual</Pill></div><div className="flex justify-between text-[8px]"><span className="text-stone-400">Year</span><Pill sm>3rd</Pill></div></div></Rect>
              <Rect className="p-3"><div className="text-[9px] font-bold text-stone-500 mb-1.5">Availability</div><div className="space-y-0.5 text-[8px] text-stone-400">{["Mon 14-18","Wed 10-14","Fri 16-20"].map(s=><div key={s} className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-stone-400 rounded-full"/>{s}</div>)}</div></Rect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditProfileWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Profile" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b-2 border-stone-300 p-2.5 flex items-center gap-2"><div className="text-[9px] text-stone-400">← Profile /</div><div className="text-[9px] font-bold text-stone-600">Edit</div><div className="flex-1"/><Btn sm filled>Save</Btn></div>
        <div className="flex-1 p-4 overflow-auto max-w-lg mx-auto w-full">
          <div className="flex flex-col items-center mb-3"><div className="relative"><O s={44} label="AJ"/><div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-stone-400 border-2 border-white text-[6px] text-white flex items-center justify-center">📷</div></div><div className="text-[8px] text-stone-400 mt-0.5">Change photo</div></div>
          {["Full Name","University","Bio"].map(f=><div key={f} className="mb-2"><div className="text-[8px] text-stone-400 uppercase mb-0.5">{f}</div>{f==="Bio"?<Rect className="p-1.5 h-12"><Bar w="85%"/><BarLight w="50%" className="mt-1"/></Rect>:<Input ph={f}/>}</div>)}
          <div className="text-[8px] text-stone-400 uppercase mb-1">Year</div>
          <div className="flex gap-0.5 mb-2">{["1st","2nd","3rd","4th","PhD"].map((y,i)=><div key={y} className={`flex-1 text-center py-1 rounded-lg text-[8px] border-2 ${i===2?"bg-stone-400 text-white border-stone-400":"border-stone-300 text-stone-500"}`}>{y}</div>)}</div>
          <div className="text-[8px] text-stone-400 uppercase mb-1">Subjects</div>
          <div className="flex flex-wrap gap-1">{["Algorithms","ML","Databases","Web Dev","OS","Python"].map((s,i)=><Pill key={s} sm active={i<4}>{s}</Pill>)}</div>
        </div>
      </div>
    </div>
  );
}

function SettingsWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Profile" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BreadcrumbHeader items={["← Profile","Settings"]} />
        <div className="flex-1 p-4 overflow-auto max-w-lg mx-auto w-full">
          {[{t:"Preferences",items:[{l:"Notifications",tog:true,on:true},{l:"Dark Mode",tog:true,on:false},{l:"Language",v:"English"}]},{t:"Privacy",items:[{l:"Visibility",v:"Public"},{l:"Password",arr:true},{l:"Blocked",arr:true}]},{t:"Support",items:[{l:"Help Center",arr:true},{l:"Feedback",arr:true}]}].map(sec=>(
            <div key={sec.t} className="mb-3">
              <div className="text-[7px] text-stone-400 uppercase font-bold tracking-wider mb-1">{sec.t}</div>
              <Rect className="overflow-hidden">{sec.items.map((it,i)=>(
                <div key={it.l} className={`flex items-center gap-1.5 px-2.5 py-2 ${i<sec.items.length-1?"border-b border-stone-100":""}`}>
                  <div className="w-5 h-5 rounded-lg bg-stone-100 shrink-0"/>
                  <div className="text-[9px] text-stone-600 flex-1">{it.l}</div>
                  {it.tog&&<Tog on={it.on}/>}
                  {it.v&&<div className="text-[8px] text-stone-400">{it.v} →</div>}
                  {it.arr&&<div className="text-stone-300 text-[9px]">→</div>}
                </div>
              ))}</Rect>
            </div>
          ))}
          <div className="text-[7px] text-stone-400 uppercase font-bold tracking-wider mb-1">Account</div>
          <Rect className="overflow-hidden">
            <div className="flex items-center gap-1.5 px-2.5 py-2 border-b border-stone-100"><div className="w-5 h-5 rounded-lg bg-stone-100 shrink-0"/><div className="text-[9px] text-stone-500">Log Out</div></div>
            <div className="flex items-center gap-1.5 px-2.5 py-2"><div className="w-5 h-5 rounded-lg bg-stone-100 shrink-0"/><div className="text-[9px] text-stone-500">Delete Account</div></div>
          </Rect>
        </div>
      </div>
    </div>
  );
}

/* ─── AI ONBOARDING FEATURE TOUR ─── */

function AIOnboard1() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-6">
      <Rect className="w-96 p-6 text-center">
        <div className="flex gap-1 mb-4 justify-center">{[1,2,3,4].map(i=><div key={i} className={`w-8 h-1 rounded-full ${i===1?"bg-stone-500":"bg-stone-200"}`}/>)}</div>
        <div className="w-14 h-14 bg-stone-200 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl">🧩</div>
        <div className="text-sm font-bold text-stone-700 mb-1">Smart Study Matching</div>
        <div className="text-[10px] text-stone-500 leading-relaxed max-w-xs mx-auto mb-4">
          Study Buddy analyzes your subjects, schedule, and learning preferences to surface the students you're most likely to click with.
        </div>
        <Rect fill className="p-3 rounded-xl mb-4 text-left">
          <div className="text-[8px] text-stone-400 uppercase mb-2">How it works</div>
          <div className="space-y-2">
            {[
              {icon:"📋",title:"You fill in your profile",desc:"Subjects, availability, preferred learning style"},
              {icon:"🔍",title:"We compare patterns",desc:"Your profile is matched against other students"},
              {icon:"⚡",title:"You see a match score",desc:"Percentage showing how compatible you are"},
            ].map(s=>(
              <div key={s.title} className="flex gap-2 items-start">
                <div className="text-base">{s.icon}</div>
                <div><div className="text-[9px] font-bold text-stone-600">{s.title}</div><div className="text-[8px] text-stone-400">{s.desc}</div></div>
              </div>
            ))}
          </div>
        </Rect>
        <div className="flex gap-2"><Btn className="flex-1">Skip tour</Btn><Btn filled className="flex-[2]">Next →</Btn></div>
      </Rect>
    </div>
  );
}

function AIOnboard2() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-6">
      <Rect className="w-96 p-6 text-center">
        <div className="flex gap-1 mb-4 justify-center">{[1,2,3,4].map(i=><div key={i} className={`w-8 h-1 rounded-full ${i<=2?"bg-stone-500":"bg-stone-200"}`}/>)}</div>
        <div className="w-14 h-14 bg-stone-200 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl">💡</div>
        <div className="text-sm font-bold text-stone-700 mb-1">Personalized Suggestions</div>
        <div className="text-[10px] text-stone-500 leading-relaxed max-w-xs mx-auto mb-4">
          Your home feed adapts to your activity. It notices which subjects you study most, who you interact with, and when you're free.
        </div>
        <Rect fill className="p-3 rounded-xl mb-4 text-left">
          <div className="text-[8px] text-stone-400 uppercase mb-2">What you'll see</div>
          <div className="space-y-1.5">
            {[
              {icon:"👤",text:'"Maria is a great match for your ML sessions"'},
              {icon:"📅",text:'"You\'re free Wed 10-14 — schedule a session?"'},
              {icon:"📚",text:'"Join Database Design Club"'},
            ].map(s=>(
              <div key={s.text} className="flex gap-2 items-start">
                <div className="text-sm">{s.icon}</div>
                <div className="text-[8px] text-stone-500 leading-relaxed text-left">{s.text}</div>
              </div>
            ))}
          </div>
        </Rect>
        <div className="flex gap-2"><Btn className="flex-1">Skip tour</Btn><Btn filled className="flex-[2]">Next →</Btn></div>
      </Rect>
    </div>
  );
}

function AIOnboard3() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-6">
      <Rect className="w-96 p-6 text-center">
        <div className="flex gap-1 mb-4 justify-center">{[1,2,3,4].map(i=><div key={i} className={`w-8 h-1 rounded-full ${i<=3?"bg-stone-500":"bg-stone-200"}`}/>)}</div>
        <div className="w-14 h-14 bg-stone-200 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl">🎯</div>
        <div className="text-sm font-bold text-stone-700 mb-1">Scheduling That Thinks Ahead</div>
        <div className="text-[10px] text-stone-500 leading-relaxed max-w-xs mx-auto mb-4">
          When you create or join a study session, the app looks at everyone's availability and finds the time slots where the most members overlap.
        </div>
        <Rect fill className="p-3 rounded-xl mb-4 text-left">
          <div className="text-[8px] text-stone-400 uppercase mb-2">Example</div>
          <div className="space-y-1.5">
            <Rect className="p-2 flex items-center gap-2 bg-white">
              <div className="w-1 h-6 bg-stone-400 rounded-full shrink-0"/>
              <div className="flex-1"><div className="text-[9px] font-bold text-stone-600">ML Study Squad</div><div className="text-[8px] text-stone-400">Wed 16:00 — best overlap for 4/5 members</div></div>
              <Pill sm active>Suggested</Pill>
            </Rect>
            <div className="text-[8px] text-stone-400 italic text-center">↑ The app found the optimal time automatically</div>
          </div>
        </Rect>
        <div className="flex gap-2"><Btn className="flex-1">Skip tour</Btn><Btn filled className="flex-[2]">Next →</Btn></div>
      </Rect>
    </div>
  );
}

function AIOnboard4() {
  return (
    <div className="flex items-center justify-center h-full bg-stone-50 p-6">
      <Rect className="w-96 p-6 text-center">
        <div className="flex gap-1 mb-4 justify-center">{[1,2,3,4].map(i=><div key={i} className={`w-8 h-1 rounded-full bg-stone-500`}/>)}</div>
        <div className="w-14 h-14 bg-stone-200 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl">🔒</div>
        <div className="text-sm font-bold text-stone-700 mb-1">You're Always in Control</div>
        <div className="text-[10px] text-stone-500 leading-relaxed max-w-xs mx-auto mb-4">
          Every recommendation is just a suggestion — you decide who to study with, what groups to join, and when to meet.
        </div>
        <Rect fill className="p-3 rounded-xl mb-4 text-left">
          <div className="text-[8px] text-stone-400 uppercase mb-2">Your control panel</div>
          <div className="space-y-1.5">
            {[
              {l:"Profile visibility",desc:"Choose public, buddies-only, or hidden",tog:true},
              {l:"Suggestion frequency",desc:"Turn nudges on or off for each category",tog:true},
              {l:"Data preferences",desc:"See what's used and delete anytime",tog:false},
            ].map(s=>(
              <div key={s.l} className="flex items-center gap-2">
                <div className="flex-1"><div className="text-[9px] font-bold text-stone-600">{s.l}</div><div className="text-[8px] text-stone-400">{s.desc}</div></div>
                {s.tog?<Tog/>:<div className="text-[8px] text-stone-400 underline">View →</div>}
              </div>
            ))}
          </div>
        </Rect>
        <Btn filled className="w-full">Got it — let's go! →</Btn>
        <div className="text-[8px] text-stone-400 mt-2">You can revisit this anytime in Settings</div>
      </Rect>
    </div>
  );
}

/* ─── MY WORKSPACE ─── */

function MyWorkspaceWire() {
  return (
    <div className="flex h-full">
      <WireSidebar active="Home" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BreadcrumbHeader items={["← Home","My Workspace"]} />
        <div className="flex-1 p-4 overflow-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1"><Input ph="Search your materials..." icon /></div>
            <Btn sm filled>＋ Add Subject</Btn>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[{n:"4",l:"Subjects",ic:"📚"},{n:"23",l:"Materials",ic:"📄"},{n:"87",l:"Flashcards",ic:"🃏"},{n:"12",l:"Practice Tests",ic:"✏️"}].map(s=>(
              <Rect key={s.l} className="p-2.5 text-center">
                <div className="text-base mb-0.5">{s.ic}</div>
                <div className="text-sm font-bold text-stone-700">{s.n}</div>
                <div className="text-[7px] text-stone-400">{s.l}</div>
              </Rect>
            ))}
          </div>
          <div className="text-[8px] font-bold text-stone-400 uppercase mb-1.5">Your Subjects</div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              {name:"Machine Learning",mats:8,cards:32,tests:4,pct:72,color:"bg-stone-300"},
              {name:"Algorithms & DS",mats:6,cards:24,tests:3,pct:58,color:"bg-stone-400"},
              {name:"Databases",mats:5,cards:18,tests:3,pct:85,color:"bg-stone-300"},
              {name:"Web Development",mats:4,cards:13,tests:2,pct:41,color:"bg-stone-200"},
            ].map(s=>(
              <Rect key={s.name} className="p-3 flex items-start gap-2.5">
                <div className={`w-10 h-10 ${s.color} rounded-xl shrink-0 flex items-center justify-center`}>
                  <div className="text-[9px] font-bold text-white">{s.name.substring(0,2)}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-stone-600 mb-0.5">{s.name}</div>
                  <div className="flex gap-2 text-[7px] text-stone-400 mb-1.5">
                    <span>{s.mats} materials</span><span>{s.cards} cards</span><span>{s.tests} tests</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex-1 h-1.5 bg-stone-100 rounded-full">
                      <div className="h-1.5 bg-stone-400 rounded-full" style={{width:`${s.pct}%`}}/>
                    </div>
                    <div className="text-[7px] text-stone-400">{s.pct}%</div>
                  </div>
                </div>
              </Rect>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SCREENS CONFIG ─── */

const SCREENS = [
  { id: "splash", label: "Splash", group: "Auth" },
  { id: "login", label: "Login", group: "Auth" },
  { id: "signup", label: "Sign Up", group: "Auth" },
  { id: "onb-style", label: "Learning Style", group: "Onboarding" },
  { id: "onb-avail", label: "Availability", group: "Onboarding" },
  { id: "onb-subjects", label: "Subjects", group: "Onboarding" },
  { id: "onb-privacy", label: "Privacy", group: "Onboarding" },
  { id: "onb-welcome", label: "Welcome", group: "Onboarding" },
  { id: "ai-onboard-1", label: "AI Tour 1", group: "AI Feature Tour" },
  { id: "ai-onboard-2", label: "AI Tour 2", group: "AI Feature Tour" },
  { id: "ai-onboard-3", label: "AI Tour 3", group: "AI Feature Tour" },
  { id: "ai-onboard-4", label: "AI Tour 4", group: "AI Feature Tour" },
  { id: "home", label: "Home", group: "Main" },
  { id: "discover", label: "Discover", group: "Main" },
  { id: "profile-preview", label: "Profile Preview", group: "Main" },
  { id: "groups", label: "Groups", group: "Main" },
  { id: "group-detail", label: "Group Detail", group: "Main" },
  { id: "group-chat", label: "Group Chat", group: "Main" },
  { id: "workspace", label: "Workspace", group: "Main" },
  { id: "messages", label: "Messages", group: "Main" },
  { id: "dm", label: "Direct Message", group: "Main" },
  { id: "profile", label: "Profile", group: "Main" },
  { id: "edit-profile", label: "Edit Profile", group: "Main" },
  { id: "settings", label: "Settings", group: "Main" },
  { id: "my-workspace", label: "My Workspace", group: "Main" },
];

const SCREEN_COMPONENTS = {
  splash: SplashWire,
  login: LoginWire,
  signup: SignUpWire,
  "onb-style": OnbStyleWire,
  "onb-avail": OnbAvailWire,
  "onb-subjects": OnbSubjectsWire,
  "onb-privacy": OnbPrivacyWire,
  "onb-welcome": OnbWelcomeWire,
  "ai-onboard-1": AIOnboard1,
  "ai-onboard-2": AIOnboard2,
  "ai-onboard-3": AIOnboard3,
  "ai-onboard-4": AIOnboard4,
  home: HomeWire,
  discover: DiscoverWire,
  "profile-preview": ProfilePreviewWire,
  groups: GroupsWire,
  "group-detail": GroupDetailWire,
  "group-chat": GroupChatWire,
  workspace: WorkspaceWire,
  messages: MessagesWire,
  dm: DMWire,
  profile: ProfileWire,
  "edit-profile": EditProfileWire,
  settings: SettingsWire,
  "my-workspace": MyWorkspaceWire,
};

export default function LofiScreen() {
  const [active, setActive] = useState("home");
  const ActiveScreen = SCREEN_COMPONENTS[active] || HomeWire;

  const groups = [...new Set(SCREENS.map(s => s.group))];

  return (
    <div className="flex h-screen bg-stone-50 font-mono overflow-hidden">
      {/* Left nav */}
      <div className="w-48 shrink-0 border-r-2 border-dashed border-stone-300 bg-white flex flex-col overflow-hidden">
        <div className="p-3 border-b-2 border-dashed border-stone-300">
          <div className="text-[10px] font-bold text-stone-600">Lo-fi Wireframes</div>
          <div className="text-[7px] text-stone-400">Study Buddy · {SCREENS.length} screens</div>
        </div>
        <div className="flex-1 overflow-auto p-2">
          {groups.map(group => (
            <div key={group} className="mb-2">
              <div className="text-[7px] text-stone-400 uppercase font-bold tracking-wider px-1 mb-0.5">{group}</div>
              {SCREENS.filter(s => s.group === group).map(s => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full text-left px-2 py-1 rounded text-[9px] ${active === s.id ? "bg-stone-200 font-bold text-stone-700" : "text-stone-400 hover:bg-stone-50"}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Screen preview */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b-2 border-dashed border-stone-300 px-4 py-2 flex items-center gap-2 bg-white">
          <div className="text-[9px] font-bold text-stone-600">{SCREENS.find(s => s.id === active)?.label}</div>
          <div className="text-[8px] text-stone-400">· {SCREENS.find(s => s.id === active)?.group}</div>
        </div>
        <div className="flex-1 overflow-hidden">
          <ActiveScreen />
        </div>
      </div>
    </div>
  );
}
