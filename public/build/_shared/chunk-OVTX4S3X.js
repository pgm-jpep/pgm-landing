import{a as I,b as o}from"/build/_shared/chunk-54KC6QHN.js";import{b as x,e as r,f as n}from"/build/_shared/chunk-AKSB5QXU.js";n();var i=x(I());n();var s=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,a=o.div`
    width: 600px;
`,d=o.input`
  ${({color:t})=>t&&`
    background: ${t};
    border: 1px solid ${t}
  `};
  width: 600px;
  border-radius: 4px;
  line-height:28px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: white;
    font-size: 16px;
  }
`,c=o.div`
  height: 32px;
  width: 32px;
  ${({color:t})=>t&&`
  background: ${t};
  border: 1px solid ${t};
  `}
  border-radius: 4px;
`,p=o.div`
  height: 56px;
`;var e={GREEN:"green",PINK:"pink",YELLOW:"yellow"},g=t=>({[e.PINK]:"#443050",[e.YELLOW]:"#485508",[e.GREEN]:"#53702c"})[t],f=t=>({[e.PINK]:"#e3afff",[e.YELLOW]:"#CAD913",[e.GREEN]:"#263A0B"})[t],B=t=>({[e.PINK]:"/left-bracket-pink_6K2LI739qq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916171574",[e.YELLOW]:"/left-bracket-yellow_i0Hxi4GbTw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916234146",[e.GREEN]:"/left-bracket-green_cv5DIzo-6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922205783"})[t],m=t=>({[e.PINK]:"/right-bracket-pink_Vjhzhsrc5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916185573",[e.YELLOW]:"/right-bracket-yellow_7zGMd1buh8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916234119",[e.GREEN]:"/right-bracket-green_MiZlkJC722.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922205791"})[t],E=({variation:t=e.PINK})=>{let u=g(t),l=f(t),k=B(t),h=m(t);return r.createElement(s,null,r.createElement(p,null,r.createElement(i.IKImage,{path:k,transformation:[{height:"56"}]})),r.createElement(a,null,r.createElement(d,{color:u,type:"email",placeholder:"Email address"})),r.createElement(c,{color:l},r.createElement(i.IKImage,{path:"/dotted-arrow_Q-88Z_X2q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647711227720",transformation:[{height:"32"}]})),r.createElement(p,null,r.createElement(i.IKImage,{path:h,transformation:[{height:"56"}]})))},N=E;export{N as a};
