function e(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=new FormData(t.target),n=Number(o.get("delay")),i=Number(o.get("step")),r=Number(o.get("amount"));for(let t=1;t<=r;t++)e(t,n+i*(t-1)).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.6e2a8302.js.map
