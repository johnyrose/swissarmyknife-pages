var ad=Object.defineProperty;var ld=(i,e,t)=>e in i?ad(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var L=(i,e,t)=>ld(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Jr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Kt=Jr();function nc(i){Kt=i}const Yn={exec:()=>null};function te(i,e=""){let t=typeof i=="string"?i:i.source;const n={replace:(s,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(Me.caret,"$1"),t=t.replace(s,o),n},getRegex:()=>new RegExp(t,e)};return n}const Me={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},cd=/^(?:[ \t]*(?:\n|$))+/,ud=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,dd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,fi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,hd=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ic=/(?:[*+-]|\d{1,9}[.)])/,sc=te(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ic).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Xr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,fd=/^[^\n]+/,Qr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,pd=te(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),md=te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ic).getRegex(),xs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,gd=te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zr).replace("tag",xs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),rc=te(Xr).replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex(),bd=te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",rc).getRegex(),eo={blockquote:bd,code:ud,def:pd,fences:dd,heading:hd,hr:fi,html:gd,lheading:sc,list:md,newline:cd,paragraph:rc,table:Yn,text:fd},Qo=te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex(),yd={...eo,table:Qo,paragraph:te(Xr).replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Qo).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex()},xd={...eo,html:te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Yn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:te(Xr).replace("hr",fi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",sc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,wd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,oc=/^( {2,}|\\)\n(?!\s*$)/,_d=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vs=/[\p{P}\p{S}]/u,to=/[\s\p{P}\p{S}]/u,ac=/[^\s\p{P}\p{S}]/u,kd=te(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,to).getRegex(),Sd=/(?!~)[\p{P}\p{S}]/u,Ed=/(?!~)[\s\p{P}\p{S}]/u,Td=/(?:[^\s\p{P}\p{S}]|~)/u,Ad=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Cd=te(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,"u").replace(/punct/g,vs).getRegex(),lc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Id=te(lc,"gu").replace(/notPunctSpace/g,ac).replace(/punctSpace/g,to).replace(/punct/g,vs).getRegex(),Nd=te(lc,"gu").replace(/notPunctSpace/g,Td).replace(/punctSpace/g,Ed).replace(/punct/g,Sd).getRegex(),Md=te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ac).replace(/punctSpace/g,to).replace(/punct/g,vs).getRegex(),Od=te(/\\(punct)/,"gu").replace(/punct/g,vs).getRegex(),Ld=te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Dd=te(Zr).replace("(?:-->|$)","-->").getRegex(),Pd=te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Dd).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),is=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Rd=te(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",is).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),cc=te(/^!?\[(label)\]\[(ref)\]/).replace("label",is).replace("ref",Qr).getRegex(),uc=te(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qr).getRegex(),Fd=te("reflink|nolink(?!\\()","g").replace("reflink",cc).replace("nolink",uc).getRegex(),no={_backpedal:Yn,anyPunctuation:Od,autolink:Ld,blockSkip:Ad,br:oc,code:wd,del:Yn,emStrongLDelim:Cd,emStrongRDelimAst:Id,emStrongRDelimUnd:Md,escape:vd,link:Rd,nolink:uc,punctuation:kd,reflink:cc,reflinkSearch:Fd,tag:Pd,text:_d,url:Yn},Bd={...no,link:te(/^!?\[(label)\]\((.*?)\)/).replace("label",is).getRegex(),reflink:te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",is).getRegex()},Er={...no,emStrongRDelimAst:Nd,url:te(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},$d={...Er,br:te(oc).replace("{2,}","*").getRegex(),text:te(Er.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ei={normal:eo,gfm:yd,pedantic:xd},Nn={normal:no,gfm:Er,breaks:$d,pedantic:Bd},zd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zo=i=>zd[i];function rt(i,e){if(e){if(Me.escapeTest.test(i))return i.replace(Me.escapeReplace,Zo)}else if(Me.escapeTestNoEncode.test(i))return i.replace(Me.escapeReplaceNoEncode,Zo);return i}function ea(i){try{i=encodeURI(i).replace(Me.percentDecode,"%")}catch{return null}return i}function ta(i,e){var r;const t=i.replace(Me.findPipe,(o,a,l)=>{let c=!1,u=a;for(;--u>=0&&l[u]==="\\";)c=!c;return c?"|":" |"}),n=t.split(Me.splitPipe);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!((r=n.at(-1))!=null&&r.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(Me.slashPipe,"|");return n}function Mn(i,e,t){const n=i.length;if(n===0)return"";let s=0;for(;s<n&&(i.charAt(n-s-1)===e&&!t);)s++;return i.slice(0,n-s)}function jd(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return-1}function na(i,e,t,n,s){const r=e.href,o=e.title||null,a=i[1].replace(s.other.outputLinkReplace,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:r,title:o,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:r,title:o,text:a}}function Hd(i,e,t){const n=i.match(t.other.indentCodeCompensation);if(n===null)return e;const s=n[1];return e.split(`
`).map(r=>{const o=r.match(t.other.beginningSpace);if(o===null)return r;const[a]=o;return a.length>=s.length?r.slice(s.length):r}).join(`
`)}class ss{constructor(e){L(this,"options");L(this,"rules");L(this,"lexer");this.options=e||Kt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Mn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Hd(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=Mn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Mn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Mn(t[0],`
`).split(`
`),s="",r="";const o=[];for(;n.length>0;){let a=!1;const l=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);const u=l.join(`
`),d=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,r=r?`${r}
${d}`:d;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,o,!0),this.lexer.state.top=h,n.length===0)break;const f=o.at(-1);if((f==null?void 0:f.type)==="code")break;if((f==null?void 0:f.type)==="blockquote"){const g=f,y=g.raw+`
`+n.join(`
`),x=this.blockquote(y);o[o.length-1]=x,s=s.substring(0,s.length-g.raw.length)+x.raw,r=r.substring(0,r.length-g.text.length)+x.text;break}else if((f==null?void 0:f.type)==="list"){const g=f,y=g.raw+`
`+n.join(`
`),x=this.list(y);o[o.length-1]=x,s=s.substring(0,s.length-f.raw.length)+x.raw,r=r.substring(0,r.length-g.raw.length)+x.raw,n=y.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const o=this.rules.other.listItemRegex(n);let a=!1;for(;e;){let c=!1,u="",d="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,S=>" ".repeat(3*S.length)),f=e.split(`
`,1)[0],g=!h.trim(),y=0;if(this.options.pedantic?(y=2,d=h.trimStart()):g?y=t[1].length+1:(y=t[2].search(this.rules.other.nonSpaceChar),y=y>4?1:y,d=h.slice(y),y+=t[1].length),g&&this.rules.other.blankLine.test(f)&&(u+=f+`
`,e=e.substring(f.length+1),c=!0),!c){const S=this.rules.other.nextBulletRegex(y),w=this.rules.other.hrRegex(y),m=this.rules.other.fencesBeginRegex(y),E=this.rules.other.headingBeginRegex(y),O=this.rules.other.htmlBeginRegex(y);for(;e;){const D=e.split(`
`,1)[0];let N;if(f=D,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),N=f):N=f.replace(this.rules.other.tabCharGlobal,"    "),m.test(f)||E.test(f)||O.test(f)||S.test(f)||w.test(f))break;if(N.search(this.rules.other.nonSpaceChar)>=y||!f.trim())d+=`
`+N.slice(y);else{if(g||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||m.test(h)||E.test(h)||w.test(h))break;d+=`
`+f}!g&&!f.trim()&&(g=!0),u+=D+`
`,e=e.substring(D.length+1),h=N.slice(y)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0));let x=null,p;this.options.gfm&&(x=this.rules.other.listIsTask.exec(d),x&&(p=x[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:u,task:!!x,checked:p,loose:!1,text:d,tokens:[]}),r.raw+=u}const l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){const u=r.items[c].tokens.filter(h=>h.type==="space"),d=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));r.loose=d}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var a;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=ta(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(a=t[3])!=null&&a.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const l of s)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(const l of r)o.rows.push(ta(l,o.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[u]})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const o=Mn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=jd(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),na(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return na(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...s[0]].length-1;let a,l,c=o,u=0;const d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+o);(s=d.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const h=[...s[0]][0].length,f=e.slice(0,o+s.index+h+l);if(Math.min(o,l)%2){const y=f.slice(1,-1);return{type:"em",raw:f,text:y,tokens:this.lexer.inlineTokens(y)}}const g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}}class He{constructor(e){L(this,"tokens");L(this,"options");L(this,"state");L(this,"tokenizer");L(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Kt,this.options.tokenizer=this.options.tokenizer||new ss,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:Me,block:Ei.normal,inline:Nn.normal};this.options.pedantic?(t.block=Ei.pedantic,t.inline=Nn.pedantic):this.options.gfm&&(t.block=Ei.gfm,this.options.breaks?t.inline=Nn.breaks:t.inline=Nn.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ei,inline:Nn}}static lex(e,t){return new He(t).lex(e)}static lexInline(e,t){return new He(t).inlineTokens(e)}lex(e){e=e.replace(Me.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){var s,r,o;for(this.options.pedantic&&(e=e.replace(Me.tabCharGlobal,"    ").replace(Me.spaceLine,""));e;){let a;if((r=(s=this.options.extensions)==null?void 0:s.block)!=null&&r.some(c=>(a=c.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const c=t.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let l=e;if((o=this.options.extensions)!=null&&o.startBlock){let c=1/0;const u=e.slice(1);let d;this.options.extensions.startBlock.forEach(h=>{d=h.call({lexer:this},u),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){const c=t.at(-1);n&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a),n=l.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var a,l,c;let n=e,s=null;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)u.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,s.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r=!1,o="";for(;e;){r||(o=""),r=!1;let u;if((l=(a=this.options.extensions)==null?void 0:a.inline)!=null&&l.some(h=>(u=h.call({lexer:this},e,t))?(e=e.substring(u.raw.length),t.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);const h=t.at(-1);u.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=u.raw,h.text+=u.text):t.push(u);continue}if(u=this.tokenizer.emStrong(e,n,o)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.del(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),t.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),t.push(u);continue}let d=e;if((c=this.options.extensions)!=null&&c.startInline){let h=1/0;const f=e.slice(1);let g;this.options.extensions.startInline.forEach(y=>{g=y.call({lexer:this},f),typeof g=="number"&&g>=0&&(h=Math.min(h,g))}),h<1/0&&h>=0&&(d=e.substring(0,h+1))}if(u=this.tokenizer.inlineText(d)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(o=u.raw.slice(-1)),r=!0;const h=t.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=u.raw,h.text+=u.text):t.push(u);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}}class rs{constructor(e){L(this,"options");L(this,"parser");this.options=e||Kt}space(e){return""}code({text:e,lang:t,escaped:n}){var o;const s=(o=(t||"").match(Me.notSpaceStart))==null?void 0:o[0],r=e.replace(Me.endingNewline,"")+`
`;return s?'<pre><code class="language-'+rt(s)+'">'+(n?r:rt(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:rt(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let a=0;a<e.items.length;a++){const l=e.items[a];s+=this.listitem(l)}const r=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(e){var n;let t="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+rt(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){const o=e.rows[r];n="";for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${rt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=ea(e);if(r===null)return s;e=r;let o='<a href="'+e+'"';return t&&(o+=' title="'+rt(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n}){const s=ea(e);if(s===null)return rt(n);e=s;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${rt(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:rt(e.text)}}class io{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Ue{constructor(e){L(this,"options");L(this,"renderer");L(this,"textRenderer");this.options=e||Kt,this.options.renderer=this.options.renderer||new rs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new io}static parse(e,t){return new Ue(t).parse(e)}static parseInline(e,t){return new Ue(t).parseInline(e)}parse(e,t=!0){var s,r;let n="";for(let o=0;o<e.length;o++){const a=e[o];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){n+=u||"";continue}}const l=a;switch(l.type){case"space":{n+=this.renderer.space(l);continue}case"hr":{n+=this.renderer.hr(l);continue}case"heading":{n+=this.renderer.heading(l);continue}case"code":{n+=this.renderer.code(l);continue}case"table":{n+=this.renderer.table(l);continue}case"blockquote":{n+=this.renderer.blockquote(l);continue}case"list":{n+=this.renderer.list(l);continue}case"html":{n+=this.renderer.html(l);continue}case"paragraph":{n+=this.renderer.paragraph(l);continue}case"text":{let c=l,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);t?n+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u,escaped:!0}]}):n+=u;continue}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,t=this.renderer){var s,r;let n="";for(let o=0;o<e.length;o++){const a=e[o];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){n+=c||"";continue}}const l=a;switch(l.type){case"escape":{n+=t.text(l);break}case"html":{n+=t.html(l);break}case"link":{n+=t.link(l);break}case"image":{n+=t.image(l);break}case"strong":{n+=t.strong(l);break}case"em":{n+=t.em(l);break}case"codespan":{n+=t.codespan(l);break}case"br":{n+=t.br(l);break}case"del":{n+=t.del(l);break}case"text":{n+=t.text(l);break}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}}class Jn{constructor(e){L(this,"options");L(this,"block");this.options=e||Kt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?He.lex:He.lexInline}provideParser(){return this.block?Ue.parse:Ue.parseInline}}L(Jn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Ud{constructor(...e){L(this,"defaults",Jr());L(this,"options",this.setOptions);L(this,"parse",this.parseMarkdown(!0));L(this,"parseInline",this.parseMarkdown(!1));L(this,"Parser",Ue);L(this,"Renderer",rs);L(this,"TextRenderer",io);L(this,"Lexer",He);L(this,"Tokenizer",ss);L(this,"Hooks",Jn);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=o;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=o;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=t.renderers[r.name];o?t.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new rs(this.defaults);for(const o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const a=o,l=n.renderer[a],c=r[a];r[a]=(...u)=>{let d=l.apply(r,u);return d===!1&&(d=c.apply(r,u)),d||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new ss(this.defaults);for(const o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=n.tokenizer[a],c=r[a];r[a]=(...u)=>{let d=l.apply(r,u);return d===!1&&(d=c.apply(r,u)),d}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new Jn;for(const o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const a=o,l=n.hooks[a],c=r[a];Jn.passThroughHooks.has(o)?r[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(r,u)).then(h=>c.call(r,h));const d=l.call(r,u);return c.call(r,d)}:r[a]=(...u)=>{let d=l.apply(r,u);return d===!1&&(d=c.apply(r,u)),d}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),r&&(l=l.concat(r.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return He.lex(e,t??this.defaults)}parser(e,t){return Ue.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},o={...this.defaults,...r},a=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const l=o.hooks?o.hooks.provideLexer():e?He.lex:He.lexInline,c=o.hooks?o.hooks.provideParser():e?Ue.parse:Ue.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(u=>l(u,o)).then(u=>o.hooks?o.hooks.processAllTokens(u):u).then(u=>o.walkTokens?Promise.all(this.walkTokens(u,o.walkTokens)).then(()=>u):u).then(u=>c(u,o)).then(u=>o.hooks?o.hooks.postprocess(u):u).catch(a);try{o.hooks&&(n=o.hooks.preprocess(n));let u=l(n,o);o.hooks&&(u=o.hooks.processAllTokens(u)),o.walkTokens&&this.walkTokens(u,o.walkTokens);let d=c(u,o);return o.hooks&&(d=o.hooks.postprocess(d)),d}catch(u){return a(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+rt(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}}const Ht=new Ud;function Q(i,e){return Ht.parse(i,e)}Q.options=Q.setOptions=function(i){return Ht.setOptions(i),Q.defaults=Ht.defaults,nc(Q.defaults),Q};Q.getDefaults=Jr;Q.defaults=Kt;Q.use=function(...i){return Ht.use(...i),Q.defaults=Ht.defaults,nc(Q.defaults),Q};Q.walkTokens=function(i,e){return Ht.walkTokens(i,e)};Q.parseInline=Ht.parseInline;Q.Parser=Ue;Q.parser=Ue.parse;Q.Renderer=rs;Q.TextRenderer=io;Q.Lexer=He;Q.lexer=He.lex;Q.Tokenizer=ss;Q.Hooks=Jn;Q.parse=Q;Q.options;Q.setOptions;Q.use;Q.walkTokens;Q.parseInline;Ue.parse;He.lex;/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */const{entries:dc,setPrototypeOf:ia,isFrozen:Wd,getPrototypeOf:Kd,getOwnPropertyDescriptor:Vd}=Object;let{freeze:Oe,seal:qe,create:hc}=Object,{apply:Tr,construct:Ar}=typeof Reflect<"u"&&Reflect;Oe||(Oe=function(e){return e});qe||(qe=function(e){return e});Tr||(Tr=function(e,t,n){return e.apply(t,n)});Ar||(Ar=function(e,t){return new e(...t)});const Ti=ze(Array.prototype.forEach),sa=ze(Array.prototype.pop),On=ze(Array.prototype.push),Gi=ze(String.prototype.toLowerCase),Vs=ze(String.prototype.toString),ra=ze(String.prototype.match),Ln=ze(String.prototype.replace),qd=ze(String.prototype.indexOf),Gd=ze(String.prototype.trim),Xe=ze(Object.prototype.hasOwnProperty),Ie=ze(RegExp.prototype.test),Dn=Yd(TypeError);function ze(i){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return Tr(i,e,n)}}function Yd(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ar(i,t)}}function V(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gi;ia&&ia(i,null);let n=e.length;for(;n--;){let s=e[n];if(typeof s=="string"){const r=t(s);r!==s&&(Wd(e)||(e[n]=r),s=r)}i[s]=!0}return i}function Jd(i){for(let e=0;e<i.length;e++)Xe(i,e)||(i[e]=null);return i}function Mt(i){const e=hc(null);for(const[t,n]of dc(i))Xe(i,t)&&(Array.isArray(n)?e[t]=Jd(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=Mt(n):e[t]=n);return e}function Pn(i,e){for(;i!==null;){const n=Vd(i,e);if(n){if(n.get)return ze(n.get);if(typeof n.value=="function")return ze(n.value)}i=Kd(i)}function t(){return null}return t}const oa=Oe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),qs=Oe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Gs=Oe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Xd=Oe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ys=Oe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Qd=Oe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),aa=Oe(["#text"]),la=Oe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Js=Oe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ca=Oe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ai=Oe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Zd=qe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),eh=qe(/<%[\w\W]*|[\w\W]*%>/gm),th=qe(/\$\{[\w\W]*}/gm),nh=qe(/^data-[\-\w.\u00B7-\uFFFF]+$/),ih=qe(/^aria-[\-\w]+$/),fc=qe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),sh=qe(/^(?:\w+script|data):/i),rh=qe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),pc=qe(/^html$/i),oh=qe(/^[a-z][.\w]*(-[.\w]+)+$/i);var ua=Object.freeze({__proto__:null,ARIA_ATTR:ih,ATTR_WHITESPACE:rh,CUSTOM_ELEMENT:oh,DATA_ATTR:nh,DOCTYPE_NAME:pc,ERB_EXPR:eh,IS_ALLOWED_URI:fc,IS_SCRIPT_OR_DATA:sh,MUSTACHE_EXPR:Zd,TMPLIT_EXPR:th});const Rn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ah=function(){return typeof window>"u"?null:window},lh=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(n=t.getAttribute(s));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},da=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function mc(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ah();const e=W=>mc(W);if(e.version="3.2.3",e.removed=[],!i||!i.document||i.document.nodeType!==Rn.document)return e.isSupported=!1,e;let{document:t}=i;const n=t,s=n.currentScript,{DocumentFragment:r,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:c,NamedNodeMap:u=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:d,DOMParser:h,trustedTypes:f}=i,g=l.prototype,y=Pn(g,"cloneNode"),x=Pn(g,"remove"),p=Pn(g,"nextSibling"),S=Pn(g,"childNodes"),w=Pn(g,"parentNode");if(typeof o=="function"){const W=t.createElement("template");W.content&&W.content.ownerDocument&&(t=W.content.ownerDocument)}let m,E="";const{implementation:O,createNodeIterator:D,createDocumentFragment:N,getElementsByTagName:k}=t,{importNode:$}=n;let j=da();e.isSupported=typeof dc=="function"&&typeof w=="function"&&O&&O.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:v,ERB_EXPR:A,TMPLIT_EXPR:C,DATA_ATTR:T,ARIA_ATTR:z,IS_SCRIPT_OR_DATA:P,ATTR_WHITESPACE:F,CUSTOM_ELEMENT:U}=ua;let{IS_ALLOWED_URI:ee}=ua,G=null;const we=V({},[...oa,...qs,...Gs,...Ys,...aa]);let se=null;const Be=V({},[...la,...Js,...ca,...Ai]);let X=Object.seal(hc(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ae=null,_=null,b=!0,R=!0,M=!1,J=!0,ie=!1,ce=!0,he=!1,ge=!1,tt=!1,oe=!1,Le=!1,Yt=!1,Tn=!0,Jt=!1;const xi="user-content-";let zs=!0,An=!1,Xt={},Qt=null;const Ro=V({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Fo=null;const Bo=V({},["audio","video","img","source","image","track"]);let js=null;const $o=V({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),vi="http://www.w3.org/1998/Math/MathML",wi="http://www.w3.org/2000/svg",dt="http://www.w3.org/1999/xhtml";let Zt=dt,Hs=!1,Us=null;const ed=V({},[vi,wi,dt],Vs);let _i=V({},["mi","mo","mn","ms","mtext"]),ki=V({},["annotation-xml"]);const td=V({},["title","style","font","a","script"]);let Cn=null;const nd=["application/xhtml+xml","text/html"],id="text/html";let be=null,en=null;const sd=t.createElement("form"),zo=function(I){return I instanceof RegExp||I instanceof Function},Ws=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(en&&en===I)){if((!I||typeof I!="object")&&(I={}),I=Mt(I),Cn=nd.indexOf(I.PARSER_MEDIA_TYPE)===-1?id:I.PARSER_MEDIA_TYPE,be=Cn==="application/xhtml+xml"?Vs:Gi,G=Xe(I,"ALLOWED_TAGS")?V({},I.ALLOWED_TAGS,be):we,se=Xe(I,"ALLOWED_ATTR")?V({},I.ALLOWED_ATTR,be):Be,Us=Xe(I,"ALLOWED_NAMESPACES")?V({},I.ALLOWED_NAMESPACES,Vs):ed,js=Xe(I,"ADD_URI_SAFE_ATTR")?V(Mt($o),I.ADD_URI_SAFE_ATTR,be):$o,Fo=Xe(I,"ADD_DATA_URI_TAGS")?V(Mt(Bo),I.ADD_DATA_URI_TAGS,be):Bo,Qt=Xe(I,"FORBID_CONTENTS")?V({},I.FORBID_CONTENTS,be):Ro,Ae=Xe(I,"FORBID_TAGS")?V({},I.FORBID_TAGS,be):{},_=Xe(I,"FORBID_ATTR")?V({},I.FORBID_ATTR,be):{},Xt=Xe(I,"USE_PROFILES")?I.USE_PROFILES:!1,b=I.ALLOW_ARIA_ATTR!==!1,R=I.ALLOW_DATA_ATTR!==!1,M=I.ALLOW_UNKNOWN_PROTOCOLS||!1,J=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ie=I.SAFE_FOR_TEMPLATES||!1,ce=I.SAFE_FOR_XML!==!1,he=I.WHOLE_DOCUMENT||!1,oe=I.RETURN_DOM||!1,Le=I.RETURN_DOM_FRAGMENT||!1,Yt=I.RETURN_TRUSTED_TYPE||!1,tt=I.FORCE_BODY||!1,Tn=I.SANITIZE_DOM!==!1,Jt=I.SANITIZE_NAMED_PROPS||!1,zs=I.KEEP_CONTENT!==!1,An=I.IN_PLACE||!1,ee=I.ALLOWED_URI_REGEXP||fc,Zt=I.NAMESPACE||dt,_i=I.MATHML_TEXT_INTEGRATION_POINTS||_i,ki=I.HTML_INTEGRATION_POINTS||ki,X=I.CUSTOM_ELEMENT_HANDLING||{},I.CUSTOM_ELEMENT_HANDLING&&zo(I.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(X.tagNameCheck=I.CUSTOM_ELEMENT_HANDLING.tagNameCheck),I.CUSTOM_ELEMENT_HANDLING&&zo(I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(X.attributeNameCheck=I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),I.CUSTOM_ELEMENT_HANDLING&&typeof I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(X.allowCustomizedBuiltInElements=I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ie&&(R=!1),Le&&(oe=!0),Xt&&(G=V({},aa),se=[],Xt.html===!0&&(V(G,oa),V(se,la)),Xt.svg===!0&&(V(G,qs),V(se,Js),V(se,Ai)),Xt.svgFilters===!0&&(V(G,Gs),V(se,Js),V(se,Ai)),Xt.mathMl===!0&&(V(G,Ys),V(se,ca),V(se,Ai))),I.ADD_TAGS&&(G===we&&(G=Mt(G)),V(G,I.ADD_TAGS,be)),I.ADD_ATTR&&(se===Be&&(se=Mt(se)),V(se,I.ADD_ATTR,be)),I.ADD_URI_SAFE_ATTR&&V(js,I.ADD_URI_SAFE_ATTR,be),I.FORBID_CONTENTS&&(Qt===Ro&&(Qt=Mt(Qt)),V(Qt,I.FORBID_CONTENTS,be)),zs&&(G["#text"]=!0),he&&V(G,["html","head","body"]),G.table&&(V(G,["tbody"]),delete Ae.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw Dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=I.TRUSTED_TYPES_POLICY,E=m.createHTML("")}else m===void 0&&(m=lh(f,s)),m!==null&&typeof E=="string"&&(E=m.createHTML(""));Oe&&Oe(I),en=I}},jo=V({},[...qs,...Gs,...Xd]),Ho=V({},[...Ys,...Qd]),rd=function(I){let B=w(I);(!B||!B.tagName)&&(B={namespaceURI:Zt,tagName:"template"});const H=Gi(I.tagName),ae=Gi(B.tagName);return Us[I.namespaceURI]?I.namespaceURI===wi?B.namespaceURI===dt?H==="svg":B.namespaceURI===vi?H==="svg"&&(ae==="annotation-xml"||_i[ae]):!!jo[H]:I.namespaceURI===vi?B.namespaceURI===dt?H==="math":B.namespaceURI===wi?H==="math"&&ki[ae]:!!Ho[H]:I.namespaceURI===dt?B.namespaceURI===wi&&!ki[ae]||B.namespaceURI===vi&&!_i[ae]?!1:!Ho[H]&&(td[H]||!jo[H]):!!(Cn==="application/xhtml+xml"&&Us[I.namespaceURI]):!1},nt=function(I){On(e.removed,{element:I});try{w(I).removeChild(I)}catch{x(I)}},Si=function(I,B){try{On(e.removed,{attribute:B.getAttributeNode(I),from:B})}catch{On(e.removed,{attribute:null,from:B})}if(B.removeAttribute(I),I==="is")if(oe||Le)try{nt(B)}catch{}else try{B.setAttribute(I,"")}catch{}},Uo=function(I){let B=null,H=null;if(tt)I="<remove></remove>"+I;else{const xe=ra(I,/^[\r\n\t ]+/);H=xe&&xe[0]}Cn==="application/xhtml+xml"&&Zt===dt&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");const ae=m?m.createHTML(I):I;if(Zt===dt)try{B=new h().parseFromString(ae,Cn)}catch{}if(!B||!B.documentElement){B=O.createDocument(Zt,"template",null);try{B.documentElement.innerHTML=Hs?E:ae}catch{}}const _e=B.body||B.documentElement;return I&&H&&_e.insertBefore(t.createTextNode(H),_e.childNodes[0]||null),Zt===dt?k.call(B,he?"html":"body")[0]:he?B.documentElement:_e},Wo=function(I){return D.call(I.ownerDocument||I,I,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Ks=function(I){return I instanceof d&&(typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||!(I.attributes instanceof u)||typeof I.removeAttribute!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function")},Ko=function(I){return typeof a=="function"&&I instanceof a};function ht(W,I,B){Ti(W,H=>{H.call(e,I,B,en)})}const Vo=function(I){let B=null;if(ht(j.beforeSanitizeElements,I,null),Ks(I))return nt(I),!0;const H=be(I.nodeName);if(ht(j.uponSanitizeElement,I,{tagName:H,allowedTags:G}),I.hasChildNodes()&&!Ko(I.firstElementChild)&&Ie(/<[/\w]/g,I.innerHTML)&&Ie(/<[/\w]/g,I.textContent)||I.nodeType===Rn.progressingInstruction||ce&&I.nodeType===Rn.comment&&Ie(/<[/\w]/g,I.data))return nt(I),!0;if(!G[H]||Ae[H]){if(!Ae[H]&&Go(H)&&(X.tagNameCheck instanceof RegExp&&Ie(X.tagNameCheck,H)||X.tagNameCheck instanceof Function&&X.tagNameCheck(H)))return!1;if(zs&&!Qt[H]){const ae=w(I)||I.parentNode,_e=S(I)||I.childNodes;if(_e&&ae){const xe=_e.length;for(let De=xe-1;De>=0;--De){const it=y(_e[De],!0);it.__removalCount=(I.__removalCount||0)+1,ae.insertBefore(it,p(I))}}}return nt(I),!0}return I instanceof l&&!rd(I)||(H==="noscript"||H==="noembed"||H==="noframes")&&Ie(/<\/no(script|embed|frames)/i,I.innerHTML)?(nt(I),!0):(ie&&I.nodeType===Rn.text&&(B=I.textContent,Ti([v,A,C],ae=>{B=Ln(B,ae," ")}),I.textContent!==B&&(On(e.removed,{element:I.cloneNode()}),I.textContent=B)),ht(j.afterSanitizeElements,I,null),!1)},qo=function(I,B,H){if(Tn&&(B==="id"||B==="name")&&(H in t||H in sd))return!1;if(!(R&&!_[B]&&Ie(T,B))){if(!(b&&Ie(z,B))){if(!se[B]||_[B]){if(!(Go(I)&&(X.tagNameCheck instanceof RegExp&&Ie(X.tagNameCheck,I)||X.tagNameCheck instanceof Function&&X.tagNameCheck(I))&&(X.attributeNameCheck instanceof RegExp&&Ie(X.attributeNameCheck,B)||X.attributeNameCheck instanceof Function&&X.attributeNameCheck(B))||B==="is"&&X.allowCustomizedBuiltInElements&&(X.tagNameCheck instanceof RegExp&&Ie(X.tagNameCheck,H)||X.tagNameCheck instanceof Function&&X.tagNameCheck(H))))return!1}else if(!js[B]){if(!Ie(ee,Ln(H,F,""))){if(!((B==="src"||B==="xlink:href"||B==="href")&&I!=="script"&&qd(H,"data:")===0&&Fo[I])){if(!(M&&!Ie(P,Ln(H,F,"")))){if(H)return!1}}}}}}return!0},Go=function(I){return I!=="annotation-xml"&&ra(I,U)},Yo=function(I){ht(j.beforeSanitizeAttributes,I,null);const{attributes:B}=I;if(!B||Ks(I))return;const H={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:se,forceKeepAttr:void 0};let ae=B.length;for(;ae--;){const _e=B[ae],{name:xe,namespaceURI:De,value:it}=_e,In=be(xe);let Ce=xe==="value"?it:Gd(it);if(H.attrName=In,H.attrValue=Ce,H.keepAttr=!0,H.forceKeepAttr=void 0,ht(j.uponSanitizeAttribute,I,H),Ce=H.attrValue,Jt&&(In==="id"||In==="name")&&(Si(xe,I),Ce=xi+Ce),ce&&Ie(/((--!?|])>)|<\/(style|title)/i,Ce)){Si(xe,I);continue}if(H.forceKeepAttr||(Si(xe,I),!H.keepAttr))continue;if(!J&&Ie(/\/>/i,Ce)){Si(xe,I);continue}ie&&Ti([v,A,C],Xo=>{Ce=Ln(Ce,Xo," ")});const Jo=be(I.nodeName);if(qo(Jo,In,Ce)){if(m&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!De)switch(f.getAttributeType(Jo,In)){case"TrustedHTML":{Ce=m.createHTML(Ce);break}case"TrustedScriptURL":{Ce=m.createScriptURL(Ce);break}}try{De?I.setAttributeNS(De,xe,Ce):I.setAttribute(xe,Ce),Ks(I)?nt(I):sa(e.removed)}catch{}}}ht(j.afterSanitizeAttributes,I,null)},od=function W(I){let B=null;const H=Wo(I);for(ht(j.beforeSanitizeShadowDOM,I,null);B=H.nextNode();)ht(j.uponSanitizeShadowNode,B,null),Vo(B),Yo(B),B.content instanceof r&&W(B.content);ht(j.afterSanitizeShadowDOM,I,null)};return e.sanitize=function(W){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},B=null,H=null,ae=null,_e=null;if(Hs=!W,Hs&&(W="<!-->"),typeof W!="string"&&!Ko(W))if(typeof W.toString=="function"){if(W=W.toString(),typeof W!="string")throw Dn("dirty is not a string, aborting")}else throw Dn("toString is not a function");if(!e.isSupported)return W;if(ge||Ws(I),e.removed=[],typeof W=="string"&&(An=!1),An){if(W.nodeName){const it=be(W.nodeName);if(!G[it]||Ae[it])throw Dn("root node is forbidden and cannot be sanitized in-place")}}else if(W instanceof a)B=Uo("<!---->"),H=B.ownerDocument.importNode(W,!0),H.nodeType===Rn.element&&H.nodeName==="BODY"||H.nodeName==="HTML"?B=H:B.appendChild(H);else{if(!oe&&!ie&&!he&&W.indexOf("<")===-1)return m&&Yt?m.createHTML(W):W;if(B=Uo(W),!B)return oe?null:Yt?E:""}B&&tt&&nt(B.firstChild);const xe=Wo(An?W:B);for(;ae=xe.nextNode();)Vo(ae),Yo(ae),ae.content instanceof r&&od(ae.content);if(An)return W;if(oe){if(Le)for(_e=N.call(B.ownerDocument);B.firstChild;)_e.appendChild(B.firstChild);else _e=B;return(se.shadowroot||se.shadowrootmode)&&(_e=$.call(n,_e,!0)),_e}let De=he?B.outerHTML:B.innerHTML;return he&&G["!doctype"]&&B.ownerDocument&&B.ownerDocument.doctype&&B.ownerDocument.doctype.name&&Ie(pc,B.ownerDocument.doctype.name)&&(De="<!DOCTYPE "+B.ownerDocument.doctype.name+`>
`+De),ie&&Ti([v,A,C],it=>{De=Ln(De,it," ")}),m&&Yt?m.createHTML(De):De},e.setConfig=function(){let W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ws(W),ge=!0},e.clearConfig=function(){en=null,ge=!1},e.isValidAttribute=function(W,I,B){en||Ws({});const H=be(W),ae=be(I);return qo(H,ae,B)},e.addHook=function(W,I){typeof I=="function"&&On(j[W],I)},e.removeHook=function(W){return sa(j[W])},e.removeHooks=function(W){j[W]=[]},e.removeAllHooks=function(){j=da()},e}var ch=mc();Q.setOptions({breaks:!0,gfm:!0,headerIds:!1});class uh{constructor(){L(this,"id","markdown-editor");L(this,"name","Markdown Editor");L(this,"description","Live Markdown editor with preview");L(this,"seoMetadata",{title:"Free Online Markdown Editor with Live Preview",description:"Write and preview Markdown in real-time with this free online editor. Supports GitHub Flavored Markdown, instant preview, and easy export options.",keywords:["markdown editor","markdown preview","markdown to html","online markdown","live markdown editor","github markdown"]});L(this,"defaultText",`# Welcome to the Markdown Editor

## Features
- Line numbers
- Tab indentation support
- IDE-like interface
- Live preview
- Syntax highlighting

## Code Example
\`\`\`javascript
function example() {
    const x = 10;
    return x * 2;
}
\`\`\`

## Try it out!

The preview updates in real-time`);L(this,"lastContent","");L(this,"lineNumbers",null);L(this,"editor",null)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="markdown-container">
        <div class="toolbar">
          <div class="toolbar-left">
            <button id="copyHtml" class="button">Copy HTML</button>
            <button id="copyMd" class="button">Copy Markdown</button>
            <button id="downloadMd" class="button">Download .md</button>
            <button id="resetContent" class="button">Reset</button>
          </div>
        </div>
        <div class="editor-container">
          <div class="editor-pane">
            <div class="editor-with-lines">
              <div class="line-numbers" id="lineNumbers"></div>
              <textarea id="markdownInput" spellcheck="false" class="editor" wrap="off"></textarea>
            </div>
          </div>
          <div class="preview-pane">
            <div id="preview" class="preview"></div>
          </div>
        </div>
      </div>
    `,this.setupEditor(),this.setupButtons(),this.addStyles())}setupEditor(){this.editor=document.getElementById("markdownInput"),this.lineNumbers=document.getElementById("lineNumbers");const e=document.getElementById("preview");!this.editor||!this.lineNumbers||!e||(this.editor.value=this.lastContent||this.defaultText,this.updateLineNumbers(),this.updatePreview(),this.editor.addEventListener("input",()=>{this.lastContent=this.editor.value,this.updateLineNumbers(),this.updatePreview()}),this.editor.addEventListener("scroll",()=>{this.lineNumbers&&(this.lineNumbers.scrollTop=this.editor.scrollTop)}),this.editor.addEventListener("keydown",t=>{if(t.key==="Tab"){t.preventDefault();const n=this.editor.selectionStart,s=this.editor.selectionEnd;if(n===s){const r=this.editor.value;this.editor.value=r.substring(0,n)+"    "+r.substring(s),this.editor.selectionStart=this.editor.selectionEnd=n+4}else{const r=this.editor.value.slice(n,s).split(`
`);if(t.shiftKey){const a=r.map(l=>l.startsWith("    ")?l.slice(4):l.startsWith("	")?l.slice(1):l).join(`
`);this.editor.value=this.editor.value.slice(0,n)+a+this.editor.value.slice(s),this.editor.selectionStart=n,this.editor.selectionEnd=n+a.length}else{const a=r.map(l=>"    "+l).join(`
`);this.editor.value=this.editor.value.slice(0,n)+a+this.editor.value.slice(s),this.editor.selectionStart=n,this.editor.selectionEnd=n+a.length}}this.lastContent=this.editor.value,this.updateLineNumbers(),this.updatePreview()}}),this.editor.addEventListener("keyup",()=>this.updateLineNumbers()),this.editor.addEventListener("paste",()=>setTimeout(()=>this.updateLineNumbers(),0)),this.editor.addEventListener("cut",()=>setTimeout(()=>this.updateLineNumbers(),0)))}updateLineNumbers(){if(!this.editor||!this.lineNumbers)return;const e=this.editor.value.split(`
`).length,t=Array(e).fill(0).map((n,s)=>`<div class="line-number">${s+1}</div>`).join("");this.lineNumbers.innerHTML=t}updatePreview(){if(!this.editor)return;const e=document.getElementById("preview");if(!e)return;const t=this.editor.value,n=ch.sanitize(Q(t));e.innerHTML=n}setupButtons(){const e=document.getElementById("copyHtml"),t=document.getElementById("copyMd"),n=document.getElementById("downloadMd"),s=document.getElementById("resetContent");!e||!t||!n||!s||!this.editor||(e.addEventListener("click",()=>{const r=document.getElementById("preview");r&&navigator.clipboard.writeText(r.innerHTML).then(()=>this.showToast("HTML copied to clipboard!")).catch(()=>this.showToast("Failed to copy HTML"))}),t.addEventListener("click",()=>{navigator.clipboard.writeText(this.editor.value).then(()=>this.showToast("Markdown copied to clipboard!")).catch(()=>this.showToast("Failed to copy Markdown"))}),n.addEventListener("click",()=>{const r=this.editor.value,o=new Blob([r],{type:"text/markdown"}),a=URL.createObjectURL(o),l=document.createElement("a");l.href=a,l.download="document.md",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a),this.showToast("Markdown file downloaded!")}),s.addEventListener("click",()=>{this.editor.value=this.defaultText,this.lastContent=this.defaultText,this.updateLineNumbers(),this.updatePreview(),this.showToast("Content reset to default")}))}showToast(e){const t=document.querySelector(".markdown-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .markdown-container {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 180px);
        gap: 1rem;
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        width: 100%;
      }

      .toolbar-left {
        display: flex;
        gap: 0.5rem;
      }

      .editor-container {
        display: flex;
        flex: 1;
        gap: 1rem;
        min-height: 0;
      }

      .editor-pane,
      .preview-pane {
        flex: 1;
        overflow: hidden;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
      }

      .editor-with-lines {
        display: flex;
        height: 100%;
        overflow: hidden;
      }

      .line-numbers {
        padding: 1rem 0.5rem;
        background: var(--sidebar-bg);
        border-right: 1px solid var(--border);
        color: var(--text-secondary);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        text-align: right;
        user-select: none;
        overflow-y: hidden;
      }

      .line-number {
        padding: 0 0.5rem;
        min-width: 2.5em;
      }

      .editor {
        flex: 1;
        padding: 1rem;
        border: none;
        background: transparent;
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        resize: none;
        outline: none;
        overflow-y: auto;
      }

      .preview {
        height: 100%;
        padding: 1rem;
        overflow-y: auto;
        color: var(--text);
      }

      .preview h1:first-child {
        margin-top: 0;
      }

      .preview h1,
      .preview h2,
      .preview h3,
      .preview h4,
      .preview h5,
      .preview h6 {
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        line-height: 1.2;
      }

      .preview h1 { font-size: 2em; }
      .preview h2 { font-size: 1.5em; }
      .preview h3 { font-size: 1.25em; }

      .preview p {
        margin: 1em 0;
        line-height: 1.6;
      }

      .preview pre {
        background: var(--sidebar-bg);
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
      }

      .preview code {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        padding: 0.2em 0.4em;
        background: var(--sidebar-bg);
        border-radius: 3px;
      }

      .preview pre code {
        padding: 0;
        background: transparent;
      }

      .preview blockquote {
        margin: 1em 0;
        padding-left: 1em;
        border-left: 4px solid var(--primary);
        color: var(--text-secondary);
      }

      .preview table {
        border-collapse: collapse;
        width: 100%;
        margin: 1em 0;
      }

      .preview th,
      .preview td {
        border: 1px solid var(--border);
        padding: 0.5em;
        text-align: left;
      }

      .preview th {
        background: var(--sidebar-bg);
      }

      .preview img {
        max-width: 100%;
        height: auto;
      }

      .preview ul,
      .preview ol {
        margin: 1em 0;
        padding-left: 2em;
      }

      .preview li {
        margin: 0.5em 0;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
    `,document.head.appendChild(e)}}class dh{constructor(){L(this,"id","json-formatter");L(this,"name","JSON Formatter");L(this,"description","A powerful JSON formatter and validator with support for beautification, minification, and error detection.");L(this,"seoMetadata",{title:"Free Online JSON Formatter and Validator Tool",description:"Format, validate, and beautify your JSON data with this free online JSON formatting tool. Easy to use, instant results, and no installation required.",keywords:["json formatter","json validator","json beautifier","json parser","format json online","validate json"]});L(this,"defaultText",`{
  "example": {
    "number": 42,
    "string": "Hello World",
    "array": [1, 2, 3],
    "nested": {
      "boolean": true,
      "null": null
    }
  }
}`);L(this,"lastContent","")}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="json-container">
        <div class="toolbar">
          <div class="toolbar-left">
            <button id="formatJson" class="button">Format</button>
            <button id="minifyJson" class="button">Minify</button>
            <button id="copyJson" class="button">Copy</button>
            <button id="resetJson" class="button">Reset</button>
          </div>
          <div class="toolbar-right">
            <label class="space-label">Spaces:</label>
            <select id="spaceCount" class="space-select">
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
        <div class="editor-container">
          <div class="editor-with-lines">
            <div class="line-numbers" id="lineNumbers"></div>
            <div class="editor-wrapper">
              <textarea id="jsonInput" spellcheck="false" class="editor" wrap="off"></textarea>
            </div>
          </div>
        </div>
        <div id="errorDisplay" class="error-display"></div>
      </div>
    `,this.setupEditor(),this.setupButtons(),this.addStyles())}setupEditor(){const e=document.getElementById("jsonInput"),t=document.getElementById("lineNumbers");!e||!t||(e.value=this.lastContent||this.defaultText,this.updateLineNumbers(),this.validateJson(),e.addEventListener("input",()=>{this.lastContent=e.value,this.updateLineNumbers(),this.validateJson()}),e.addEventListener("scroll",()=>{t&&(t.scrollTop=e.scrollTop)}),e.addEventListener("keydown",n=>{if(n.key==="Tab"){n.preventDefault();const s=e.selectionStart,r=e.selectionEnd,o=e.value,a="  ";e.value=o.substring(0,s)+a+o.substring(r),e.selectionStart=e.selectionEnd=s+2,this.lastContent=e.value,this.updateLineNumbers(),this.validateJson()}}))}updateLineNumbers(){const e=document.getElementById("jsonInput"),t=document.getElementById("lineNumbers");if(!e||!t)return;const n=e.value.split(`
`).length,s=Array(n).fill(0).map((r,o)=>`<div class="line-number">${o+1}</div>`).join("");t.innerHTML=s}validateJson(){const e=document.getElementById("jsonInput"),t=document.getElementById("errorDisplay");if(!(!e||!t))try{e.value.trim()?(JSON.parse(e.value),t.textContent="Valid JSON ✓",t.className="error-display valid"):(t.textContent="",t.className="error-display")}catch(n){t.textContent=`Invalid JSON: ${n.message}`,t.className="error-display invalid"}}setupButtons(){const e=document.getElementById("formatJson"),t=document.getElementById("minifyJson"),n=document.getElementById("copyJson"),s=document.getElementById("resetJson"),r=document.getElementById("spaceCount"),o=document.getElementById("jsonInput");!e||!t||!n||!s||!r||!o||(e.addEventListener("click",()=>{try{const a=JSON.parse(o.value);o.value=JSON.stringify(a,null,parseInt(r.value)),this.lastContent=o.value,this.updateLineNumbers(),this.validateJson(),this.showToast("JSON formatted successfully!")}catch{this.showToast("Invalid JSON - cannot format")}}),t.addEventListener("click",()=>{try{const a=JSON.parse(o.value);o.value=JSON.stringify(a),this.lastContent=o.value,this.updateLineNumbers(),this.validateJson(),this.showToast("JSON minified successfully!")}catch{this.showToast("Invalid JSON - cannot minify")}}),n.addEventListener("click",()=>{navigator.clipboard.writeText(o.value).then(()=>this.showToast("JSON copied to clipboard!")).catch(()=>this.showToast("Failed to copy JSON"))}),s.addEventListener("click",()=>{o.value=this.defaultText,this.lastContent=this.defaultText,this.updateLineNumbers(),this.validateJson(),this.showToast("Content reset to default")}))}showToast(e){const t=document.querySelector(".json-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .json-container {
        display: flex;
        flex-direction: column;
        height: calc(90vh - 120px);
        gap: 1rem;
        width: 100%;
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        width: 100%;
      }

      .toolbar-left {
        display: flex;
        gap: 0.5rem;
      }

      .toolbar-right {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .space-label {
        color: var(--text);
      }

      .space-select {
        background: var(--background);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 0.25rem;
      }

      .editor-container {
        flex: 1;
        min-height: 0;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        width: 100%;
      }

      .editor-with-lines {
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
      }

      .line-numbers {
        padding: 1rem 0.5rem;
        background: var(--sidebar-bg);
        border-right: 1px solid var(--border);
        color: var(--text-secondary);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        text-align: right;
        user-select: none;
        overflow-y: hidden;
        flex-shrink: 0;
      }

      .line-number {
        padding: 0 0.5rem;
        min-width: 2.5em;
      }

      .editor-wrapper {
        flex: 1;
        min-width: 0;
        width: 100%;
      }

      .editor {
        width: 100%;
        height: 100%;
        padding: 1rem;
        border: none;
        background: transparent;
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        resize: none;
        outline: none;
        overflow: auto;
      }

      .error-display {
        min-height: 2rem;
        padding: 0.5rem;
        border-radius: 4px;
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
      }

      .error-display.valid {
        color: #4caf50;
      }

      .error-display.invalid {
        color: #f44336;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
    `,document.head.appendChild(e)}}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function pi(i){return i+.5|0}const wt=(i,e,t)=>Math.max(Math.min(i,t),e);function Wn(i){return wt(pi(i*2.55),0,255)}function kt(i){return wt(pi(i*255),0,255)}function gt(i){return wt(pi(i/2.55)/100,0,1)}function ha(i){return wt(pi(i*100),0,100)}const je={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Cr=[..."0123456789ABCDEF"],hh=i=>Cr[i&15],fh=i=>Cr[(i&240)>>4]+Cr[i&15],Ci=i=>(i&240)>>4===(i&15),ph=i=>Ci(i.r)&&Ci(i.g)&&Ci(i.b)&&Ci(i.a);function mh(i){var e=i.length,t;return i[0]==="#"&&(e===4||e===5?t={r:255&je[i[1]]*17,g:255&je[i[2]]*17,b:255&je[i[3]]*17,a:e===5?je[i[4]]*17:255}:(e===7||e===9)&&(t={r:je[i[1]]<<4|je[i[2]],g:je[i[3]]<<4|je[i[4]],b:je[i[5]]<<4|je[i[6]],a:e===9?je[i[7]]<<4|je[i[8]]:255})),t}const gh=(i,e)=>i<255?e(i):"";function bh(i){var e=ph(i)?hh:fh;return i?"#"+e(i.r)+e(i.g)+e(i.b)+gh(i.a,e):void 0}const yh=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function gc(i,e,t){const n=e*Math.min(t,1-t),s=(r,o=(r+i/30)%12)=>t-n*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function xh(i,e,t){const n=(s,r=(s+i/60)%6)=>t-t*e*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function vh(i,e,t){const n=gc(i,1,.5);let s;for(e+t>1&&(s=1/(e+t),e*=s,t*=s),s=0;s<3;s++)n[s]*=1-e-t,n[s]+=e;return n}function wh(i,e,t,n,s){return i===s?(e-t)/n+(e<t?6:0):e===s?(t-i)/n+2:(i-e)/n+4}function so(i){const t=i.r/255,n=i.g/255,s=i.b/255,r=Math.max(t,n,s),o=Math.min(t,n,s),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=wh(t,n,s,u,r),l=l*60+.5),[l|0,c||0,a]}function ro(i,e,t,n){return(Array.isArray(e)?i(e[0],e[1],e[2]):i(e,t,n)).map(kt)}function oo(i,e,t){return ro(gc,i,e,t)}function _h(i,e,t){return ro(vh,i,e,t)}function kh(i,e,t){return ro(xh,i,e,t)}function bc(i){return(i%360+360)%360}function Sh(i){const e=yh.exec(i);let t=255,n;if(!e)return;e[5]!==n&&(t=e[6]?Wn(+e[5]):kt(+e[5]));const s=bc(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?n=_h(s,r,o):e[1]==="hsv"?n=kh(s,r,o):n=oo(s,r,o),{r:n[0],g:n[1],b:n[2],a:t}}function Eh(i,e){var t=so(i);t[0]=bc(t[0]+e),t=oo(t),i.r=t[0],i.g=t[1],i.b=t[2]}function Th(i){if(!i)return;const e=so(i),t=e[0],n=ha(e[1]),s=ha(e[2]);return i.a<255?`hsla(${t}, ${n}%, ${s}%, ${gt(i.a)})`:`hsl(${t}, ${n}%, ${s}%)`}const fa={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},pa={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Ah(){const i={},e=Object.keys(pa),t=Object.keys(fa);let n,s,r,o,a;for(n=0;n<e.length;n++){for(o=a=e[n],s=0;s<t.length;s++)r=t[s],a=a.replace(r,fa[r]);r=parseInt(pa[o],16),i[a]=[r>>16&255,r>>8&255,r&255]}return i}let Ii;function Ch(i){Ii||(Ii=Ah(),Ii.transparent=[0,0,0,0]);const e=Ii[i.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Ih=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Nh(i){const e=Ih.exec(i);let t=255,n,s,r;if(e){if(e[7]!==n){const o=+e[7];t=e[8]?Wn(o):wt(o*255,0,255)}return n=+e[1],s=+e[3],r=+e[5],n=255&(e[2]?Wn(n):wt(n,0,255)),s=255&(e[4]?Wn(s):wt(s,0,255)),r=255&(e[6]?Wn(r):wt(r,0,255)),{r:n,g:s,b:r,a:t}}}function Mh(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${gt(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Xs=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,tn=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Oh(i,e,t){const n=tn(gt(i.r)),s=tn(gt(i.g)),r=tn(gt(i.b));return{r:kt(Xs(n+t*(tn(gt(e.r))-n))),g:kt(Xs(s+t*(tn(gt(e.g))-s))),b:kt(Xs(r+t*(tn(gt(e.b))-r))),a:i.a+t*(e.a-i.a)}}function Ni(i,e,t){if(i){let n=so(i);n[e]=Math.max(0,Math.min(n[e]+n[e]*t,e===0?360:1)),n=oo(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function yc(i,e){return i&&Object.assign(e||{},i)}function ma(i){var e={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(e={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(e.a=kt(i[3]))):(e=yc(i,{r:0,g:0,b:0,a:1}),e.a=kt(e.a)),e}function Lh(i){return i.charAt(0)==="r"?Nh(i):Sh(i)}class si{constructor(e){if(e instanceof si)return e;const t=typeof e;let n;t==="object"?n=ma(e):t==="string"&&(n=mh(e)||Ch(e)||Lh(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=yc(this._rgb);return e&&(e.a=gt(e.a)),e}set rgb(e){this._rgb=ma(e)}rgbString(){return this._valid?Mh(this._rgb):void 0}hexString(){return this._valid?bh(this._rgb):void 0}hslString(){return this._valid?Th(this._rgb):void 0}mix(e,t){if(e){const n=this.rgb,s=e.rgb;let r;const o=t===r?.5:t,a=2*o-1,l=n.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*s.r+.5,n.g=255&c*n.g+r*s.g+.5,n.b=255&c*n.b+r*s.b+.5,n.a=o*n.a+(1-o)*s.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=Oh(this._rgb,e._rgb,t)),this}clone(){return new si(this.rgb)}alpha(e){return this._rgb.a=kt(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=pi(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Ni(this._rgb,2,e),this}darken(e){return Ni(this._rgb,2,-e),this}saturate(e){return Ni(this._rgb,1,e),this}desaturate(e){return Ni(this._rgb,1,-e),this}rotate(e){return Eh(this._rgb,e),this}}/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function ft(){}const Dh=(()=>{let i=0;return()=>i++})();function fe(i){return i==null}function me(i){if(Array.isArray&&Array.isArray(i))return!0;const e=Object.prototype.toString.call(i);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Y(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function Te(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function st(i,e){return Te(i)?i:e}function q(i,e){return typeof i>"u"?e:i}const Ph=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*e:+i;function re(i,e,t){if(i&&typeof i.call=="function")return i.apply(t,e)}function Z(i,e,t,n){let s,r,o;if(me(i))for(r=i.length,s=0;s<r;s++)e.call(t,i[s],s);else if(Y(i))for(o=Object.keys(i),r=o.length,s=0;s<r;s++)e.call(t,i[o[s]],o[s])}function os(i,e){let t,n,s,r;if(!i||!e||i.length!==e.length)return!1;for(t=0,n=i.length;t<n;++t)if(s=i[t],r=e[t],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function as(i){if(me(i))return i.map(as);if(Y(i)){const e=Object.create(null),t=Object.keys(i),n=t.length;let s=0;for(;s<n;++s)e[t[s]]=as(i[t[s]]);return e}return i}function xc(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Rh(i,e,t,n){if(!xc(i))return;const s=e[i],r=t[i];Y(s)&&Y(r)?ri(s,r,n):e[i]=as(r)}function ri(i,e,t){const n=me(e)?e:[e],s=n.length;if(!Y(i))return i;t=t||{};const r=t.merger||Rh;let o;for(let a=0;a<s;++a){if(o=n[a],!Y(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)r(l[c],i,o,t)}return i}function Xn(i,e){return ri(i,e,{merger:Fh})}function Fh(i,e,t){if(!xc(i))return;const n=e[i],s=t[i];Y(n)&&Y(s)?Xn(n,s):Object.prototype.hasOwnProperty.call(e,i)||(e[i]=as(s))}const ga={"":i=>i,x:i=>i.x,y:i=>i.y};function Bh(i){const e=i.split("."),t=[];let n="";for(const s of e)n+=s,n.endsWith("\\")?n=n.slice(0,-1)+".":(t.push(n),n="");return t}function $h(i){const e=Bh(i);return t=>{for(const n of e){if(n==="")break;t=t&&t[n]}return t}}function ls(i,e){return(ga[e]||(ga[e]=$h(e)))(i)}function ao(i){return i.charAt(0).toUpperCase()+i.slice(1)}const cs=i=>typeof i<"u",Et=i=>typeof i=="function",ba=(i,e)=>{if(i.size!==e.size)return!1;for(const t of i)if(!e.has(t))return!1;return!0};function zh(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const ye=Math.PI,Ze=2*ye,jh=Ze+ye,us=Number.POSITIVE_INFINITY,Hh=ye/180,Qe=ye/2,Ct=ye/4,ya=ye*2/3,Ir=Math.log10,pn=Math.sign;function Qn(i,e,t){return Math.abs(i-e)<t}function xa(i){const e=Math.round(i);i=Qn(i,e,i/1e3)?e:i;const t=Math.pow(10,Math.floor(Ir(i))),n=i/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function Uh(i){const e=[],t=Math.sqrt(i);let n;for(n=1;n<t;n++)i%n===0&&(e.push(n),e.push(i/n));return t===(t|0)&&e.push(t),e.sort((s,r)=>s-r).pop(),e}function oi(i){return!isNaN(parseFloat(i))&&isFinite(i)}function Wh(i,e){const t=Math.round(i);return t-e<=i&&t+e>=i}function Kh(i,e,t){let n,s,r;for(n=0,s=i.length;n<s;n++)r=i[n][t],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function Pt(i){return i*(ye/180)}function Vh(i){return i*(180/ye)}function va(i){if(!Te(i))return;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}function qh(i,e){const t=e.x-i.x,n=e.y-i.y,s=Math.sqrt(t*t+n*n);let r=Math.atan2(n,t);return r<-.5*ye&&(r+=Ze),{angle:r,distance:s}}function Nr(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function Gh(i,e){return(i-e+jh)%Ze-ye}function lt(i){return(i%Ze+Ze)%Ze}function vc(i,e,t,n){const s=lt(i),r=lt(e),o=lt(t),a=lt(r-s),l=lt(o-s),c=lt(s-r),u=lt(s-o);return s===r||s===o||n&&r===o||a>l&&c<u}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Yh(i){return We(i,-32768,32767)}function rn(i,e,t,n=1e-6){return i>=Math.min(e,t)-n&&i<=Math.max(e,t)+n}function lo(i,e,t){t=t||(o=>i[o]<e);let n=i.length-1,s=0,r;for(;n-s>1;)r=s+n>>1,t(r)?s=r:n=r;return{lo:s,hi:n}}const Rt=(i,e,t,n)=>lo(i,t,n?s=>{const r=i[s][e];return r<t||r===t&&i[s+1][e]===t}:s=>i[s][e]<t),Jh=(i,e,t)=>lo(i,t,n=>i[n][e]>=t);function Xh(i,e,t){let n=0,s=i.length;for(;n<s&&i[n]<e;)n++;for(;s>n&&i[s-1]>t;)s--;return n>0||s<i.length?i.slice(n,s):i}const wc=["push","pop","shift","splice","unshift"];function Qh(i,e){if(i._chartjs){i._chartjs.listeners.push(e);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),wc.forEach(t=>{const n="_onData"+ao(t),s=i[t];Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return i._chartjs.listeners.forEach(a=>{typeof a[n]=="function"&&a[n](...r)}),o}})})}function wa(i,e){const t=i._chartjs;if(!t)return;const n=t.listeners,s=n.indexOf(e);s!==-1&&n.splice(s,1),!(n.length>0)&&(wc.forEach(r=>{delete i[r]}),delete i._chartjs)}function Zh(i){const e=new Set(i);return e.size===i.length?i:Array.from(e)}const _c=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function kc(i,e){let t=[],n=!1;return function(...s){t=s,n||(n=!0,_c.call(window,()=>{n=!1,i.apply(e,t)}))}}function ef(i,e){let t;return function(...n){return e?(clearTimeout(t),t=setTimeout(i,e,n)):i.apply(this,n),e}}const co=i=>i==="start"?"left":i==="end"?"right":"center",ke=(i,e,t)=>i==="start"?e:i==="end"?t:(e+t)/2,tf=(i,e,t,n)=>i===(n?"left":"right")?t:i==="center"?(e+t)/2:e;function nf(i,e,t){const n=e.length;let s=0,r=n;if(i._sorted){const{iScale:o,_parsed:a}=i,l=o.axis,{min:c,max:u,minDefined:d,maxDefined:h}=o.getUserBounds();d&&(s=We(Math.min(Rt(a,l,c).lo,t?n:Rt(e,l,o.getPixelForValue(c)).lo),0,n-1)),h?r=We(Math.max(Rt(a,o.axis,u,!0).hi+1,t?0:Rt(e,l,o.getPixelForValue(u),!0).hi+1),s,n)-s:r=n-s}return{start:s,count:r}}function sf(i){const{xScale:e,yScale:t,_scaleRanges:n}=i,s={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!n)return i._scaleRanges=s,!0;const r=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==t.min||n.ymax!==t.max;return Object.assign(n,s),r}const Mi=i=>i===0||i===1,_a=(i,e,t)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-e)*Ze/t)),ka=(i,e,t)=>Math.pow(2,-10*i)*Math.sin((i-e)*Ze/t)+1,Zn={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*Qe)+1,easeOutSine:i=>Math.sin(i*Qe),easeInOutSine:i=>-.5*(Math.cos(ye*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>Mi(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>Mi(i)?i:_a(i,.075,.3),easeOutElastic:i=>Mi(i)?i:ka(i,.075,.3),easeInOutElastic(i){return Mi(i)?i:i<.5?.5*_a(i*2,.1125,.45):.5+.5*ka(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let e=1.70158;return(i/=.5)<1?.5*(i*i*(((e*=1.525)+1)*i-e)):.5*((i-=2)*i*(((e*=1.525)+1)*i+e)+2)},easeInBounce:i=>1-Zn.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Zn.easeInBounce(i*2)*.5:Zn.easeOutBounce(i*2-1)*.5+.5};function uo(i){if(i&&typeof i=="object"){const e=i.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Sa(i){return uo(i)?i:new si(i)}function Qs(i){return uo(i)?i:new si(i).saturate(.5).darken(.1).hexString()}const rf=["x","y","borderWidth","radius","tension"],of=["color","borderColor","backgroundColor"];function af(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),i.set("animations",{colors:{type:"color",properties:of},numbers:{type:"number",properties:rf}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function lf(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Ea=new Map;function cf(i,e){e=e||{};const t=i+JSON.stringify(e);let n=Ea.get(t);return n||(n=new Intl.NumberFormat(i,e),Ea.set(t,n)),n}function Sc(i,e,t){return cf(e,t).format(i)}const Ec={values(i){return me(i)?i:""+i},numeric(i,e,t){if(i===0)return"0";const n=this.chart.options.locale;let s,r=i;if(t.length>1){const c=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=uf(i,t)}const o=Ir(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Sc(i,n,l)},logarithmic(i,e,t){if(i===0)return"0";const n=t[e].significand||i/Math.pow(10,Math.floor(Ir(i)));return[1,2,3,5,10,15].includes(n)||e>.8*t.length?Ec.numeric.call(this,i,e,t):""}};function uf(i,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&i!==Math.floor(i)&&(t=i-Math.floor(i)),t}var Tc={formatters:Ec};function df(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Tc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Ut=Object.create(null),Mr=Object.create(null);function ei(i,e){if(!e)return i;const t=e.split(".");for(let n=0,s=t.length;n<s;++n){const r=t[n];i=i[r]||(i[r]=Object.create(null))}return i}function Zs(i,e,t){return typeof e=="string"?ri(ei(i,e),t):ri(ei(i,""),e)}class hf{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,s)=>Qs(s.backgroundColor),this.hoverBorderColor=(n,s)=>Qs(s.borderColor),this.hoverColor=(n,s)=>Qs(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return Zs(this,e,t)}get(e){return ei(this,e)}describe(e,t){return Zs(Mr,e,t)}override(e,t){return Zs(Ut,e,t)}route(e,t,n,s){const r=ei(this,e),o=ei(this,n),a="_"+t;Object.defineProperties(r,{[a]:{value:r[t],writable:!0},[t]:{enumerable:!0,get(){const l=this[a],c=o[s];return Y(l)?Object.assign({},c,l):q(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(t=>t(this))}}var pe=new hf({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[af,lf,df]);function ff(i){return!i||fe(i.size)||fe(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Ta(i,e,t,n,s){let r=e[s];return r||(r=e[s]=i.measureText(s).width,t.push(s)),r>n&&(n=r),n}function It(i,e,t){const n=i.currentDevicePixelRatio,s=t!==0?Math.max(t/2,.5):0;return Math.round((e-s)*n)/n+s}function Aa(i,e){!e&&!i||(e=e||i.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,i.width,i.height),e.restore())}function Or(i,e,t,n){Ac(i,e,t,n,null)}function Ac(i,e,t,n,s){let r,o,a,l,c,u,d,h;const f=e.pointStyle,g=e.rotation,y=e.radius;let x=(g||0)*Hh;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){i.save(),i.translate(t,n),i.rotate(x),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(y)||y<=0)){switch(i.beginPath(),f){default:s?i.ellipse(t,n,s/2,y,0,0,Ze):i.arc(t,n,y,0,Ze),i.closePath();break;case"triangle":u=s?s/2:y,i.moveTo(t+Math.sin(x)*u,n-Math.cos(x)*y),x+=ya,i.lineTo(t+Math.sin(x)*u,n-Math.cos(x)*y),x+=ya,i.lineTo(t+Math.sin(x)*u,n-Math.cos(x)*y),i.closePath();break;case"rectRounded":c=y*.516,l=y-c,o=Math.cos(x+Ct)*l,d=Math.cos(x+Ct)*(s?s/2-c:l),a=Math.sin(x+Ct)*l,h=Math.sin(x+Ct)*(s?s/2-c:l),i.arc(t-d,n-a,c,x-ye,x-Qe),i.arc(t+h,n-o,c,x-Qe,x),i.arc(t+d,n+a,c,x,x+Qe),i.arc(t-h,n+o,c,x+Qe,x+ye),i.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*y,u=s?s/2:l,i.rect(t-u,n-l,2*u,2*l);break}x+=Ct;case"rectRot":d=Math.cos(x)*(s?s/2:y),o=Math.cos(x)*y,a=Math.sin(x)*y,h=Math.sin(x)*(s?s/2:y),i.moveTo(t-d,n-a),i.lineTo(t+h,n-o),i.lineTo(t+d,n+a),i.lineTo(t-h,n+o),i.closePath();break;case"crossRot":x+=Ct;case"cross":d=Math.cos(x)*(s?s/2:y),o=Math.cos(x)*y,a=Math.sin(x)*y,h=Math.sin(x)*(s?s/2:y),i.moveTo(t-d,n-a),i.lineTo(t+d,n+a),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o);break;case"star":d=Math.cos(x)*(s?s/2:y),o=Math.cos(x)*y,a=Math.sin(x)*y,h=Math.sin(x)*(s?s/2:y),i.moveTo(t-d,n-a),i.lineTo(t+d,n+a),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o),x+=Ct,d=Math.cos(x)*(s?s/2:y),o=Math.cos(x)*y,a=Math.sin(x)*y,h=Math.sin(x)*(s?s/2:y),i.moveTo(t-d,n-a),i.lineTo(t+d,n+a),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o);break;case"line":o=s?s/2:Math.cos(x)*y,a=Math.sin(x)*y,i.moveTo(t-o,n-a),i.lineTo(t+o,n+a);break;case"dash":i.moveTo(t,n),i.lineTo(t+Math.cos(x)*(s?s/2:y),n+Math.sin(x)*y);break;case!1:i.closePath();break}i.fill(),e.borderWidth>0&&i.stroke()}}function ai(i,e,t){return t=t||.5,!e||i&&i.x>e.left-t&&i.x<e.right+t&&i.y>e.top-t&&i.y<e.bottom+t}function ws(i,e){i.save(),i.beginPath(),i.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),i.clip()}function _s(i){i.restore()}function pf(i,e,t,n,s){if(!e)return i.lineTo(t.x,t.y);if(s==="middle"){const r=(e.x+t.x)/2;i.lineTo(r,e.y),i.lineTo(r,t.y)}else s==="after"!=!!n?i.lineTo(e.x,t.y):i.lineTo(t.x,e.y);i.lineTo(t.x,t.y)}function mf(i,e,t,n){if(!e)return i.lineTo(t.x,t.y);i.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?t.cp2x:t.cp1x,n?t.cp2y:t.cp1y,t.x,t.y)}function gf(i,e){e.translation&&i.translate(e.translation[0],e.translation[1]),fe(e.rotation)||i.rotate(e.rotation),e.color&&(i.fillStyle=e.color),e.textAlign&&(i.textAlign=e.textAlign),e.textBaseline&&(i.textBaseline=e.textBaseline)}function bf(i,e,t,n,s){if(s.strikethrough||s.underline){const r=i.measureText(n),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=t-r.actualBoundingBoxAscent,c=t+r.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=s.decorationWidth||2,i.moveTo(o,u),i.lineTo(a,u),i.stroke()}}function yf(i,e){const t=i.fillStyle;i.fillStyle=e.color,i.fillRect(e.left,e.top,e.width,e.height),i.fillStyle=t}function li(i,e,t,n,s,r={}){const o=me(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(i.save(),i.font=s.string,gf(i,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&yf(i,r.backdrop),a&&(r.strokeColor&&(i.strokeStyle=r.strokeColor),fe(r.strokeWidth)||(i.lineWidth=r.strokeWidth),i.strokeText(c,t,n,r.maxWidth)),i.fillText(c,t,n,r.maxWidth),bf(i,t,n,c,r),n+=Number(s.lineHeight);i.restore()}function Lr(i,e){const{x:t,y:n,w:s,h:r,radius:o}=e;i.arc(t+o.topLeft,n+o.topLeft,o.topLeft,1.5*ye,ye,!0),i.lineTo(t,n+r-o.bottomLeft),i.arc(t+o.bottomLeft,n+r-o.bottomLeft,o.bottomLeft,ye,Qe,!0),i.lineTo(t+s-o.bottomRight,n+r),i.arc(t+s-o.bottomRight,n+r-o.bottomRight,o.bottomRight,Qe,0,!0),i.lineTo(t+s,n+o.topRight),i.arc(t+s-o.topRight,n+o.topRight,o.topRight,0,-Qe,!0),i.lineTo(t+o.topLeft,n)}const xf=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,vf=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function wf(i,e){const t=(""+i).match(xf);if(!t||t[1]==="normal")return e*1.2;switch(i=+t[2],t[3]){case"px":return i;case"%":i/=100;break}return e*i}const _f=i=>+i||0;function Cc(i,e){const t={},n=Y(e),s=n?Object.keys(e):e,r=Y(i)?n?o=>q(i[o],i[e[o]]):o=>i[o]:()=>i;for(const o of s)t[o]=_f(r(o));return t}function kf(i){return Cc(i,{top:"y",right:"x",bottom:"y",left:"x"})}function ti(i){return Cc(i,["topLeft","topRight","bottomLeft","bottomRight"])}function Ge(i){const e=kf(i);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Se(i,e){i=i||{},e=e||pe.font;let t=q(i.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let n=q(i.style,e.style);n&&!(""+n).match(vf)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const s={family:q(i.family,e.family),lineHeight:wf(q(i.lineHeight,e.lineHeight),t),size:t,style:n,weight:q(i.weight,e.weight),string:""};return s.string=ff(s),s}function Oi(i,e,t,n){let s,r,o;for(s=0,r=i.length;s<r;++s)if(o=i[s],o!==void 0&&o!==void 0)return o}function Sf(i,e,t){const{min:n,max:s}=i,r=Ph(e,(s-n)/2),o=(a,l)=>t&&a===0?0:a+l;return{min:o(n,-Math.abs(r)),max:o(s,r)}}function Vt(i,e){return Object.assign(Object.create(i),e)}function ho(i,e=[""],t,n,s=()=>i[0]){const r=t||i;typeof n>"u"&&(n=Oc("_fallback",i));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:r,_fallback:n,_getTarget:s,override:a=>ho([a,...i],e,r,n)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return Nc(a,l,()=>Of(l,e,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return Ia(a).includes(l)},ownKeys(a){return Ia(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function mn(i,e,t,n){const s={_cacheable:!1,_proxy:i,_context:e,_subProxy:t,_stack:new Set,_descriptors:Ic(i,n),setContext:r=>mn(i,r,t,n),override:r=>mn(i.override(r),e,t,n)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete i[o],!0},get(r,o,a){return Nc(r,o,()=>Tf(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(r,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(r,o,a){return i[o]=a,delete r[o],!0}})}function Ic(i,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:n=e.indexable,_allKeys:s=e.allKeys}=i;return{allKeys:s,scriptable:t,indexable:n,isScriptable:Et(t)?t:()=>t,isIndexable:Et(n)?n:()=>n}}const Ef=(i,e)=>i?i+ao(e):e,fo=(i,e)=>Y(e)&&i!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Nc(i,e,t){if(Object.prototype.hasOwnProperty.call(i,e)||e==="constructor")return i[e];const n=t();return i[e]=n,n}function Tf(i,e,t){const{_proxy:n,_context:s,_subProxy:r,_descriptors:o}=i;let a=n[e];return Et(a)&&o.isScriptable(e)&&(a=Af(e,a,i,t)),me(a)&&a.length&&(a=Cf(e,a,i,o.isIndexable)),fo(e,a)&&(a=mn(a,s,r&&r[e],o)),a}function Af(i,e,t,n){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=t;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=e(r,o||n);return a.delete(i),fo(i,l)&&(l=po(s._scopes,s,i,l)),l}function Cf(i,e,t,n){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=t;if(typeof r.index<"u"&&n(i))return e[r.index%e.length];if(Y(e[0])){const l=e,c=s._scopes.filter(u=>u!==l);e=[];for(const u of l){const d=po(c,s,i,u);e.push(mn(d,r,o&&o[i],a))}}return e}function Mc(i,e,t){return Et(i)?i(e,t):i}const If=(i,e)=>i===!0?e:typeof i=="string"?ls(e,i):void 0;function Nf(i,e,t,n,s){for(const r of e){const o=If(t,r);if(o){i.add(o);const a=Mc(o._fallback,t,s);if(typeof a<"u"&&a!==t&&a!==n)return a}else if(o===!1&&typeof n<"u"&&t!==n)return null}return!1}function po(i,e,t,n){const s=e._rootScopes,r=Mc(e._fallback,t,n),o=[...i,...s],a=new Set;a.add(n);let l=Ca(a,o,t,r||t,n);return l===null||typeof r<"u"&&r!==t&&(l=Ca(a,o,r,l,n),l===null)?!1:ho(Array.from(a),[""],s,r,()=>Mf(e,t,n))}function Ca(i,e,t,n,s){for(;t;)t=Nf(i,e,t,n,s);return t}function Mf(i,e,t){const n=i._getTarget();e in n||(n[e]={});const s=n[e];return me(s)&&Y(t)?t:s||{}}function Of(i,e,t,n){let s;for(const r of e)if(s=Oc(Ef(r,i),t),typeof s<"u")return fo(i,s)?po(t,n,i,s):s}function Oc(i,e){for(const t of e){if(!t)continue;const n=t[i];if(typeof n<"u")return n}}function Ia(i){let e=i._keys;return e||(e=i._keys=Lf(i._scopes)),e}function Lf(i){const e=new Set;for(const t of i)for(const n of Object.keys(t).filter(s=>!s.startsWith("_")))e.add(n);return Array.from(e)}const Df=Number.EPSILON||1e-14,gn=(i,e)=>e<i.length&&!i[e].skip&&i[e],Lc=i=>i==="x"?"y":"x";function Pf(i,e,t,n){const s=i.skip?e:i,r=e,o=t.skip?e:t,a=Nr(r,s),l=Nr(o,r);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=n*c,h=n*u;return{previous:{x:r.x-d*(o.x-s.x),y:r.y-d*(o.y-s.y)},next:{x:r.x+h*(o.x-s.x),y:r.y+h*(o.y-s.y)}}}function Rf(i,e,t){const n=i.length;let s,r,o,a,l,c=gn(i,0);for(let u=0;u<n-1;++u)if(l=c,c=gn(i,u+1),!(!l||!c)){if(Qn(e[u],0,Df)){t[u]=t[u+1]=0;continue}s=t[u]/e[u],r=t[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),t[u]=s*o*e[u],t[u+1]=r*o*e[u])}}function Ff(i,e,t="x"){const n=Lc(t),s=i.length;let r,o,a,l=gn(i,0);for(let c=0;c<s;++c){if(o=a,a=l,l=gn(i,c+1),!a)continue;const u=a[t],d=a[n];o&&(r=(u-o[t])/3,a[`cp1${t}`]=u-r,a[`cp1${n}`]=d-r*e[c]),l&&(r=(l[t]-u)/3,a[`cp2${t}`]=u+r,a[`cp2${n}`]=d+r*e[c])}}function Bf(i,e="x"){const t=Lc(e),n=i.length,s=Array(n).fill(0),r=Array(n);let o,a,l,c=gn(i,0);for(o=0;o<n;++o)if(a=l,l=c,c=gn(i,o+1),!!l){if(c){const u=c[e]-l[e];s[o]=u!==0?(c[t]-l[t])/u:0}r[o]=a?c?pn(s[o-1])!==pn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}Rf(i,s,r),Ff(i,r,e)}function Li(i,e,t){return Math.max(Math.min(i,t),e)}function $f(i,e){let t,n,s,r,o,a=ai(i[0],e);for(t=0,n=i.length;t<n;++t)o=r,r=a,a=t<n-1&&ai(i[t+1],e),r&&(s=i[t],o&&(s.cp1x=Li(s.cp1x,e.left,e.right),s.cp1y=Li(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=Li(s.cp2x,e.left,e.right),s.cp2y=Li(s.cp2y,e.top,e.bottom)))}function zf(i,e,t,n,s){let r,o,a,l;if(e.spanGaps&&(i=i.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")Bf(i,s);else{let c=n?i[i.length-1]:i[0];for(r=0,o=i.length;r<o;++r)a=i[r],l=Pf(c,a,i[Math.min(r+1,o-(n?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&$f(i,t)}function mo(){return typeof window<"u"&&typeof document<"u"}function go(i){let e=i.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function ds(i,e,t){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*e.parentNode[t])):n=i,n}const ks=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function jf(i,e){return ks(i).getPropertyValue(e)}const Hf=["top","right","bottom","left"];function zt(i,e,t){const n={};t=t?"-"+t:"";for(let s=0;s<4;s++){const r=Hf[s];n[r]=parseFloat(i[e+"-"+r+t])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const Uf=(i,e,t)=>(i>0||e>0)&&(!t||!t.shadowRoot);function Wf(i,e){const t=i.touches,n=t&&t.length?t[0]:i,{offsetX:s,offsetY:r}=n;let o=!1,a,l;if(Uf(s,r,i.target))a=s,l=r;else{const c=e.getBoundingClientRect();a=n.clientX-c.left,l=n.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Ot(i,e){if("native"in i)return i;const{canvas:t,currentDevicePixelRatio:n}=e,s=ks(t),r=s.boxSizing==="border-box",o=zt(s,"padding"),a=zt(s,"border","width"),{x:l,y:c,box:u}=Wf(i,t),d=o.left+(u&&a.left),h=o.top+(u&&a.top);let{width:f,height:g}=e;return r&&(f-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-d)/f*t.width/n),y:Math.round((c-h)/g*t.height/n)}}function Kf(i,e,t){let n,s;if(e===void 0||t===void 0){const r=i&&go(i);if(!r)e=i.clientWidth,t=i.clientHeight;else{const o=r.getBoundingClientRect(),a=ks(r),l=zt(a,"border","width"),c=zt(a,"padding");e=o.width-c.width-l.width,t=o.height-c.height-l.height,n=ds(a.maxWidth,r,"clientWidth"),s=ds(a.maxHeight,r,"clientHeight")}}return{width:e,height:t,maxWidth:n||us,maxHeight:s||us}}const Di=i=>Math.round(i*10)/10;function Vf(i,e,t,n){const s=ks(i),r=zt(s,"margin"),o=ds(s.maxWidth,i,"clientWidth")||us,a=ds(s.maxHeight,i,"clientHeight")||us,l=Kf(i,e,t);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const h=zt(s,"border","width"),f=zt(s,"padding");c-=f.width+h.width,u-=f.height+h.height}return c=Math.max(0,c-r.width),u=Math.max(0,n?c/n:u-r.height),c=Di(Math.min(c,o,l.maxWidth)),u=Di(Math.min(u,a,l.maxHeight)),c&&!u&&(u=Di(c/2)),(e!==void 0||t!==void 0)&&n&&l.height&&u>l.height&&(u=l.height,c=Di(Math.floor(u*n))),{width:c,height:u}}function Na(i,e,t){const n=e||1,s=Math.floor(i.height*n),r=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const o=i.canvas;return o.style&&(t||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==s||o.width!==r?(i.currentDevicePixelRatio=n,o.height=s,o.width=r,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const qf=function(){let i=!1;try{const e={get passive(){return i=!0,!1}};mo()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return i}();function Ma(i,e){const t=jf(i,e),n=t&&t.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Lt(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:i.y+t*(e.y-i.y)}}function Gf(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:n==="middle"?t<.5?i.y:e.y:n==="after"?t<1?i.y:e.y:t>0?e.y:i.y}}function Yf(i,e,t,n){const s={x:i.cp2x,y:i.cp2y},r={x:e.cp1x,y:e.cp1y},o=Lt(i,s,t),a=Lt(s,r,t),l=Lt(r,e,t),c=Lt(o,a,t),u=Lt(a,l,t);return Lt(c,u,t)}const Jf=function(i,e){return{x(t){return i+i+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,n){return t-n},leftForLtr(t,n){return t-n}}},Xf=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,e){return i+e},leftForLtr(i,e){return i}}};function un(i,e,t){return i?Jf(e,t):Xf()}function Dc(i,e){let t,n;(e==="ltr"||e==="rtl")&&(t=i.canvas.style,n=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),i.prevTextDirection=n)}function Pc(i,e){e!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",e[0],e[1]))}function Rc(i){return i==="angle"?{between:vc,compare:Gh,normalize:lt}:{between:rn,compare:(e,t)=>e-t,normalize:e=>e}}function Oa({start:i,end:e,count:t,loop:n,style:s}){return{start:i%t,end:e%t,loop:n&&(e-i+1)%t===0,style:s}}function Qf(i,e,t){const{property:n,start:s,end:r}=t,{between:o,normalize:a}=Rc(n),l=e.length;let{start:c,end:u,loop:d}=i,h,f;if(d){for(c+=l,u+=l,h=0,f=l;h<f&&o(a(e[c%l][n]),s,r);++h)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:d,style:i.style}}function Fc(i,e,t){if(!t)return[i];const{property:n,start:s,end:r}=t,o=e.length,{compare:a,between:l,normalize:c}=Rc(n),{start:u,end:d,loop:h,style:f}=Qf(i,e,t),g=[];let y=!1,x=null,p,S,w;const m=()=>l(s,w,p)&&a(s,w)!==0,E=()=>a(r,p)===0||l(r,w,p),O=()=>y||m(),D=()=>!y||E();for(let N=u,k=u;N<=d;++N)S=e[N%o],!S.skip&&(p=c(S[n]),p!==w&&(y=l(p,s,r),x===null&&O()&&(x=a(p,s)===0?N:k),x!==null&&D()&&(g.push(Oa({start:x,end:N,loop:h,count:o,style:f})),x=null),k=N,w=p));return x!==null&&g.push(Oa({start:x,end:d,loop:h,count:o,style:f})),g}function Bc(i,e){const t=[],n=i.segments;for(let s=0;s<n.length;s++){const r=Fc(n[s],i.points,e);r.length&&t.push(...r)}return t}function Zf(i,e,t,n){let s=0,r=e-1;if(t&&!n)for(;s<e&&!i[s].skip;)s++;for(;s<e&&i[s].skip;)s++;for(s%=e,t&&(r+=s);r>s&&i[r%e].skip;)r--;return r%=e,{start:s,end:r}}function ep(i,e,t,n){const s=i.length,r=[];let o=e,a=i[e],l;for(l=e+1;l<=t;++l){const c=i[l%s];c.skip||c.stop?a.skip||(n=!1,r.push({start:e%s,end:(l-1)%s,loop:n}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&r.push({start:e%s,end:o%s,loop:n}),r}function tp(i,e){const t=i.points,n=i.options.spanGaps,s=t.length;if(!s)return[];const r=!!i._loop,{start:o,end:a}=Zf(t,s,r,n);if(n===!0)return La(i,[{start:o,end:a,loop:r}],t,e);const l=a<o?a+s:a,c=!!i._fullLoop&&o===0&&a===s-1;return La(i,ep(t,o,l,c),t,e)}function La(i,e,t,n){return!n||!n.setContext||!t?e:np(i,e,t,n)}function np(i,e,t,n){const s=i._chart.getContext(),r=Da(i.options),{_datasetIndex:o,options:{spanGaps:a}}=i,l=t.length,c=[];let u=r,d=e[0].start,h=d;function f(g,y,x,p){const S=a?-1:1;if(g!==y){for(g+=l;t[g%l].skip;)g-=S;for(;t[y%l].skip;)y+=S;g%l!==y%l&&(c.push({start:g%l,end:y%l,loop:x,style:p}),u=p,d=y%l)}}for(const g of e){d=a?d:g.start;let y=t[d%l],x;for(h=d+1;h<=g.end;h++){const p=t[h%l];x=Da(n.setContext(Vt(s,{type:"segment",p0:y,p1:p,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:o}))),ip(x,u)&&f(d,h-1,g.loop,u),y=p,u=x}d<h-1&&f(d,h-1,g.loop,u)}return c}function Da(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function ip(i,e){if(!e)return!1;const t=[],n=function(s,r){return uo(r)?(t.includes(r)||t.push(r),t.indexOf(r)):r};return JSON.stringify(i,n)!==JSON.stringify(e,n)}/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class sp{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,s){const r=t.listeners[s],o=t.duration;r.forEach(a=>a({chart:e,initial:t.initial,numSteps:o,currentStep:Math.min(n-t.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=_c.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,s)=>{if(!n.running||!n.items.length)return;const r=n.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,n,e,"progress")),r.length||(n.running=!1,this._notify(s,n,e,"complete"),n.initial=!1),t+=r.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((n,s)=>Math.max(n,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const n=t.items;let s=n.length-1;for(;s>=0;--s)n[s].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var pt=new sp;const Pa="transparent",rp={boolean(i,e,t){return t>.5?e:i},color(i,e,t){const n=Sa(i||Pa),s=n.valid&&Sa(e||Pa);return s&&s.valid?s.mix(n,t).hexString():e},number(i,e,t){return i+(e-i)*t}};class op{constructor(e,t,n,s){const r=t[n];s=Oi([e.to,s,r,e.from]);const o=Oi([e.from,r,s]);this._active=!0,this._fn=e.fn||rp[e.type||typeof o],this._easing=Zn[e.easing]||Zn.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);const s=this._target[this._prop],r=n-this._start,o=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=Oi([e.to,t,s,e.from]),this._from=Oi([e.from,s,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,n=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||t<n),!this._active){this._target[s]=a,this._notify(!0);return}if(t<0){this._target[s]=r;return}l=t/n%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){const t=e?"res":"rej",n=this._promises||[];for(let s=0;s<n.length;s++)n[s][t]()}}class $c{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!Y(e))return;const t=Object.keys(pe.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!Y(r))return;const o={};for(const a of t)o[a]=r[a];(me(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!n.has(a))&&n.set(a,o)})})}_animateOptions(e,t){const n=t.options,s=lp(e,n);if(!s)return[];const r=this._createAnimations(s,n);return n.$shared&&ap(e.options.$animations,n).then(()=>{e.options=n},()=>{}),r}_createAnimations(e,t){const n=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(t),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,t));continue}const u=t[c];let d=r[c];const h=n.get(c);if(d)if(h&&d.active()){d.update(h,u,a);continue}else d.cancel();if(!h||!h.duration){e[c]=u;continue}r[c]=d=new op(h,e,c,u),s.push(d)}return s}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const n=this._createAnimations(e,t);if(n.length)return pt.add(this._chart,n),!0}}function ap(i,e){const t=[],n=Object.keys(e);for(let s=0;s<n.length;s++){const r=i[n[s]];r&&r.active()&&t.push(r.wait())}return Promise.all(t)}function lp(i,e){if(!e)return;let t=i.options;if(!t){i.options=e;return}return t.$shared&&(i.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function Ra(i,e){const t=i&&i.options||{},n=t.reverse,s=t.min===void 0?e:0,r=t.max===void 0?e:0;return{start:n?r:s,end:n?s:r}}function cp(i,e,t){if(t===!1)return!1;const n=Ra(i,t),s=Ra(e,t);return{top:s.end,right:n.end,bottom:s.start,left:n.start}}function up(i){let e,t,n,s;return Y(i)?(e=i.top,t=i.right,n=i.bottom,s=i.left):e=t=n=s=i,{top:e,right:t,bottom:n,left:s,disabled:i===!1}}function zc(i,e){const t=[],n=i._getSortedDatasetMetas(e);let s,r;for(s=0,r=n.length;s<r;++s)t.push(n[s].index);return t}function Fa(i,e,t,n={}){const s=i.keys,r=n.mode==="single";let o,a,l,c;if(e===null)return;let u=!1;for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===t){if(u=!0,n.all)continue;break}c=i.values[l],Te(c)&&(r||e===0||pn(e)===pn(c))&&(e+=c)}return!u&&!n.all?0:e}function dp(i,e){const{iScale:t,vScale:n}=e,s=t.axis==="x"?"x":"y",r=n.axis==="x"?"x":"y",o=Object.keys(i),a=new Array(o.length);let l,c,u;for(l=0,c=o.length;l<c;++l)u=o[l],a[l]={[s]:u,[r]:i[u]};return a}function er(i,e){const t=i&&i.options.stacked;return t||t===void 0&&e.stack!==void 0}function hp(i,e,t){return`${i.id}.${e.id}.${t.stack||t.type}`}function fp(i){const{min:e,max:t,minDefined:n,maxDefined:s}=i.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:s?t:Number.POSITIVE_INFINITY}}function pp(i,e,t){const n=i[e]||(i[e]={});return n[t]||(n[t]={})}function Ba(i,e,t,n){for(const s of e.getMatchingVisibleMetas(n).reverse()){const r=i[s.index];if(t&&r>0||!t&&r<0)return s.index}return null}function $a(i,e){const{chart:t,_cachedMeta:n}=i,s=t._stacks||(t._stacks={}),{iScale:r,vScale:o,index:a}=n,l=r.axis,c=o.axis,u=hp(r,o,n),d=e.length;let h;for(let f=0;f<d;++f){const g=e[f],{[l]:y,[c]:x}=g,p=g._stacks||(g._stacks={});h=p[c]=pp(s,u,y),h[a]=x,h._top=Ba(h,o,!0,n.type),h._bottom=Ba(h,o,!1,n.type);const S=h._visualValues||(h._visualValues={});S[a]=x}}function tr(i,e){const t=i.scales;return Object.keys(t).filter(n=>t[n].axis===e).shift()}function mp(i,e){return Vt(i,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function gp(i,e,t){return Vt(i,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function Fn(i,e){const t=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){e=e||i._parsed;for(const s of e){const r=s._stacks;if(!r||r[n]===void 0||r[n][t]===void 0)return;delete r[n][t],r[n]._visualValues!==void 0&&r[n]._visualValues[t]!==void 0&&delete r[n]._visualValues[t]}}}const nr=i=>i==="reset"||i==="none",za=(i,e)=>e?i:Object.assign({},i),bp=(i,e,t)=>i&&!e.hidden&&e._stacked&&{keys:zc(t,!0),values:null};class ni{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=er(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Fn(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,n=this.getDataset(),s=(d,h,f,g)=>d==="x"?h:d==="r"?g:f,r=t.xAxisID=q(n.xAxisID,tr(e,"x")),o=t.yAxisID=q(n.yAxisID,tr(e,"y")),a=t.rAxisID=q(n.rAxisID,tr(e,"r")),l=t.indexAxis,c=t.iAxisID=s(l,r,o,a),u=t.vAxisID=s(l,o,r,a);t.xScale=this.getScaleForId(r),t.yScale=this.getScaleForId(o),t.rScale=this.getScaleForId(a),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&wa(this._data,this),e._stacked&&Fn(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),n=this._data;if(Y(t)){const s=this._cachedMeta;this._data=dp(t,s)}else if(n!==t){if(n){wa(n,this);const s=this._cachedMeta;Fn(s),s._parsed=[]}t&&Object.isExtensible(t)&&Qh(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,n=this.getDataset();let s=!1;this._dataCheck();const r=t._stacked;t._stacked=er(t.vScale,t),t.stack!==n.stack&&(s=!0,Fn(t),t.stack=n.stack),this._resyncElements(e),(s||r!==t._stacked)&&($a(this,t._parsed),t._stacked=er(t.vScale,t))}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:n,_data:s}=this,{iScale:r,_stacked:o}=n,a=r.axis;let l=e===0&&t===s.length?!0:n._sorted,c=e>0&&n._parsed[e-1],u,d,h;if(this._parsing===!1)n._parsed=s,n._sorted=!0,h=s;else{me(s[e])?h=this.parseArrayData(n,s,e,t):Y(s[e])?h=this.parseObjectData(n,s,e,t):h=this.parsePrimitiveData(n,s,e,t);const f=()=>d[a]===null||c&&d[a]<c[a];for(u=0;u<t;++u)n._parsed[u+e]=d=h[u],l&&(f()&&(l=!1),c=d);n._sorted=l}o&&$a(this,h)}parsePrimitiveData(e,t,n,s){const{iScale:r,vScale:o}=e,a=r.axis,l=o.axis,c=r.getLabels(),u=r===o,d=new Array(s);let h,f,g;for(h=0,f=s;h<f;++h)g=h+n,d[h]={[a]:u||r.parse(c[g],g),[l]:o.parse(t[g],g)};return d}parseArrayData(e,t,n,s){const{xScale:r,yScale:o}=e,a=new Array(s);let l,c,u,d;for(l=0,c=s;l<c;++l)u=l+n,d=t[u],a[l]={x:r.parse(d[0],u),y:o.parse(d[1],u)};return a}parseObjectData(e,t,n,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,d,h,f;for(u=0,d=s;u<d;++u)h=u+n,f=t[h],c[u]={x:r.parse(ls(f,a),h),y:o.parse(ls(f,l),h)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){const s=this.chart,r=this._cachedMeta,o=t[e.axis],a={keys:zc(s,!0),values:t._stacks[e.axis]._visualValues};return Fa(a,o,r.index,{mode:n})}updateRangeFromParsed(e,t,n,s){const r=n[t.axis];let o=r===null?NaN:r;const a=s&&n._stacks[t.axis];s&&a&&(s.values=a,o=Fa(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,t){const n=this._cachedMeta,s=n._parsed,r=n._sorted&&e===n.iScale,o=s.length,a=this._getOtherScale(e),l=bp(t,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=fp(a);let h,f;function g(){f=s[h];const y=f[a.axis];return!Te(f[e.axis])||u>y||d<y}for(h=0;h<o&&!(!g()&&(this.updateRangeFromParsed(c,e,f,l),r));++h);if(r){for(h=o-1;h>=0;--h)if(!g()){this.updateRangeFromParsed(c,e,f,l);break}}return c}getAllParsedValues(e){const t=this._cachedMeta._parsed,n=[];let s,r,o;for(s=0,r=t.length;s<r;++s)o=t[s][e.axis],Te(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,n=t.iScale,s=t.vScale,r=this.getParsed(e);return{label:n?""+n.getLabelForValue(r[n.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=up(q(this.options.clip,cp(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,n=this._cachedMeta,s=n.data||[],r=t.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(n.dataset&&n.dataset.draw(e,r,a,l),u=a;u<a+l;++u){const d=s[u];d.hidden||(d.active&&c?o.push(d):d.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,t){const n=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=gp(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=mp(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!t,r.mode=n,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",n){const s=t==="active",r=this._cachedDataOpts,o=e+"-"+t,a=r[o],l=this.enableOptionSharing&&cs(n);if(a)return za(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),d=s?[`${e}Hover`,"hover",e,""]:[e,""],h=c.getOptionScopes(this.getDataset(),u),f=Object.keys(pe.elements[e]),g=()=>this.getContext(n,s,t),y=c.resolveNamedOptions(h,f,g,d);return y.$shared&&(y.$shared=l,r[o]=Object.freeze(za(y,l))),y}_resolveAnimations(e,t,n){const s=this.chart,r=this._cachedDataOpts,o=`animation-${t}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,t),h=u.getOptionScopes(this.getDataset(),d);l=u.createResolver(h,this.getContext(e,n,t))}const c=new $c(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||nr(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const n=this.resolveDataElementOptions(e,t),s=this._sharedOptions,r=this.getSharedOptions(n),o=this.includeOptions(t,r)||r!==s;return this.updateSharedOptions(r,t,n),{sharedOptions:r,includeOptions:o}}updateElement(e,t,n,s){nr(s)?Object.assign(e,n):this._resolveAnimations(t,s).update(e,n)}updateSharedOptions(e,t,n){e&&!nr(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,s){e.active=s;const r=this.getStyle(t,s);this._resolveAnimations(t,n,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,t,n){this._setStyle(e,n,"active",!1)}setHoverStyle(e,t,n){this._setStyle(e,n,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,n=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=n.length,r=t.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,t,n=!0){const s=this._cachedMeta,r=s.data,o=e+t;let a;const l=c=>{for(c.length+=t,a=c.length-1;a>=o;a--)c[a]=c[a-t]};for(l(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,t),n&&this.updateElements(r,e,t,"reset")}updateElements(e,t,n,s){}_removeElements(e,t){const n=this._cachedMeta;if(this._parsing){const s=n._parsed.splice(e,t);n._stacked&&Fn(n,s)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,n,s]=e;this[t](n,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const n=arguments.length-2;n&&this._sync(["_insertElements",e,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}L(ni,"defaults",{}),L(ni,"datasetElementType",null),L(ni,"dataElementType",null);class Yi extends ni{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:n,data:s=[],_dataset:r}=t,o=this.chart._animationsDisabled;let{start:a,count:l}=nf(t,s,o);this._drawStart=a,this._drawCount=l,sf(t)&&(a=0,l=s.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!r._decimated,n.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,t,n,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(t,s),h=o.axis,f=a.axis,{spanGaps:g,segment:y}=this.options,x=oi(g)?g:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||r||s==="none",S=t+n,w=e.length;let m=t>0&&this.getParsed(t-1);for(let E=0;E<w;++E){const O=e[E],D=p?O:{};if(E<t||E>=S){D.skip=!0;continue}const N=this.getParsed(E),k=fe(N[f]),$=D[h]=o.getPixelForValue(N[h],E),j=D[f]=r||k?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,N,l):N[f],E);D.skip=isNaN($)||isNaN(j)||k,D.stop=E>0&&Math.abs(N[h]-m[h])>x,y&&(D.parsed=N,D.raw=c.data[E]),d&&(D.options=u||this.resolveDataElementOptions(E,O.active?"active":s)),p||this.updateElement(O,E,D,s),m=N}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,s=e.data||[];if(!s.length)return n;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(n,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}L(Yi,"id","line"),L(Yi,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),L(Yi,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Nt(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class bo{constructor(e){L(this,"options");this.options=e||{}}static override(e){Object.assign(bo.prototype,e)}init(){}formats(){return Nt()}parse(){return Nt()}format(){return Nt()}add(){return Nt()}diff(){return Nt()}startOf(){return Nt()}endOf(){return Nt()}}var yp={_date:bo};function xp(i,e,t,n){const{controller:s,data:r,_sorted:o}=i,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const l=a._reversePixels?Jh:Rt;if(n){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const d=l(r,e,t-u),h=l(r,e,t+u);return{lo:d.lo,hi:h.hi}}}}else return l(r,e,t)}return{lo:0,hi:r.length-1}}function mi(i,e,t,n,s){const r=i.getSortedVisibleDatasetMetas(),o=t[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:u}=r[a],{lo:d,hi:h}=xp(r[a],e,o,s);for(let f=d;f<=h;++f){const g=u[f];g.skip||n(g,c,f)}}}function vp(i){const e=i.indexOf("x")!==-1,t=i.indexOf("y")!==-1;return function(n,s){const r=e?Math.abs(n.x-s.x):0,o=t?Math.abs(n.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function ir(i,e,t,n,s){const r=[];return!s&&!i.isPointInArea(e)||mi(i,t,e,function(a,l,c){!s&&!ai(a,i.chartArea,0)||a.inRange(e.x,e.y,n)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function wp(i,e,t,n){let s=[];function r(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],n),{angle:d}=qh(o,{x:e.x,y:e.y});vc(d,c,u)&&s.push({element:o,datasetIndex:a,index:l})}return mi(i,t,e,r),s}function _p(i,e,t,n,s,r){let o=[];const a=vp(t);let l=Number.POSITIVE_INFINITY;function c(u,d,h){const f=u.inRange(e.x,e.y,s);if(n&&!f)return;const g=u.getCenterPoint(s);if(!(!!r||i.isPointInArea(g))&&!f)return;const x=a(e,g);x<l?(o=[{element:u,datasetIndex:d,index:h}],l=x):x===l&&o.push({element:u,datasetIndex:d,index:h})}return mi(i,t,e,c),o}function sr(i,e,t,n,s,r){return!r&&!i.isPointInArea(e)?[]:t==="r"&&!n?wp(i,e,t,s):_p(i,e,t,n,s,r)}function ja(i,e,t,n,s){const r=[],o=t==="x"?"inXRange":"inYRange";let a=!1;return mi(i,t,e,(l,c,u)=>{l[o]&&l[o](e[t],s)&&(r.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,s))}),n&&!a?[]:r}var kp={evaluateInteractionItems:mi,modes:{index(i,e,t,n){const s=Ot(e,i),r=t.axis||"x",o=t.includeInvisible||!1,a=t.intersect?ir(i,s,r,n,o):sr(i,s,r,!1,n,o),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,d=c.data[u];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:u})}),l):[]},dataset(i,e,t,n){const s=Ot(e,i),r=t.axis||"xy",o=t.includeInvisible||!1;let a=t.intersect?ir(i,s,r,n,o):sr(i,s,r,!1,n,o);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(i,e,t,n){const s=Ot(e,i),r=t.axis||"xy",o=t.includeInvisible||!1;return ir(i,s,r,n,o)},nearest(i,e,t,n){const s=Ot(e,i),r=t.axis||"xy",o=t.includeInvisible||!1;return sr(i,s,r,t.intersect,n,o)},x(i,e,t,n){const s=Ot(e,i);return ja(i,s,"x",t.intersect,n)},y(i,e,t,n){const s=Ot(e,i);return ja(i,s,"y",t.intersect,n)}}};const jc=["left","top","right","bottom"];function Bn(i,e){return i.filter(t=>t.pos===e)}function Ha(i,e){return i.filter(t=>jc.indexOf(t.pos)===-1&&t.box.axis===e)}function $n(i,e){return i.sort((t,n)=>{const s=e?n:t,r=e?t:n;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function Sp(i){const e=[];let t,n,s,r,o,a;for(t=0,n=(i||[]).length;t<n;++t)s=i[t],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:t,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function Ep(i){const e={};for(const t of i){const{stack:n,pos:s,stackWeight:r}=t;if(!n||!jc.includes(s))continue;const o=e[n]||(e[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function Tp(i,e){const t=Ep(i),{vBoxMaxWidth:n,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=i.length;r<o;++r){a=i[r];const{fullSize:l}=a.box,c=t[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*n:l&&e.availableWidth,a.height=s):(a.width=n,a.height=u?u*s:l&&e.availableHeight)}return t}function Ap(i){const e=Sp(i),t=$n(e.filter(c=>c.box.fullSize),!0),n=$n(Bn(e,"left"),!0),s=$n(Bn(e,"right")),r=$n(Bn(e,"top"),!0),o=$n(Bn(e,"bottom")),a=Ha(e,"x"),l=Ha(e,"y");return{fullSize:t,leftAndTop:n.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:Bn(e,"chartArea"),vertical:n.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function Ua(i,e,t,n){return Math.max(i[t],e[t])+Math.max(i[n],e[n])}function Hc(i,e){i.top=Math.max(i.top,e.top),i.left=Math.max(i.left,e.left),i.bottom=Math.max(i.bottom,e.bottom),i.right=Math.max(i.right,e.right)}function Cp(i,e,t,n){const{pos:s,box:r}=t,o=i.maxPadding;if(!Y(s)){t.size&&(i[s]-=t.size);const d=n[t.stack]||{size:0,count:1};d.size=Math.max(d.size,t.horizontal?r.height:r.width),t.size=d.size/d.count,i[s]+=t.size}r.getPadding&&Hc(o,r.getPadding());const a=Math.max(0,e.outerWidth-Ua(o,i,"left","right")),l=Math.max(0,e.outerHeight-Ua(o,i,"top","bottom")),c=a!==i.w,u=l!==i.h;return i.w=a,i.h=l,t.horizontal?{same:c,other:u}:{same:u,other:c}}function Ip(i){const e=i.maxPadding;function t(n){const s=Math.max(e[n]-i[n],0);return i[n]+=s,s}i.y+=t("top"),i.x+=t("left"),t("right"),t("bottom")}function Np(i,e){const t=e.maxPadding;function n(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],t[o])}),r}return n(i?["left","right"]:["top","bottom"])}function Kn(i,e,t,n){const s=[];let r,o,a,l,c,u;for(r=0,o=i.length,c=0;r<o;++r){a=i[r],l=a.box,l.update(a.width||e.w,a.height||e.h,Np(a.horizontal,e));const{same:d,other:h}=Cp(e,t,a,n);c|=d&&s.length,u=u||h,l.fullSize||s.push(a)}return c&&Kn(s,e,t,n)||u}function Pi(i,e,t,n,s){i.top=t,i.left=e,i.right=e+n,i.bottom=t+s,i.width=n,i.height=s}function Wa(i,e,t,n){const s=t.padding;let{x:r,y:o}=e;for(const a of i){const l=a.box,c=n[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const d=e.w*u,h=c.size||l.height;cs(c.start)&&(o=c.start),l.fullSize?Pi(l,s.left,o,t.outerWidth-s.right-s.left,h):Pi(l,e.left+c.placed,o,d,h),c.start=o,c.placed+=d,o=l.bottom}else{const d=e.h*u,h=c.size||l.width;cs(c.start)&&(r=c.start),l.fullSize?Pi(l,r,s.top,h,t.outerHeight-s.bottom-s.top):Pi(l,r,e.top+c.placed,h,d),c.start=r,c.placed+=d,r=l.right}}e.x=r,e.y=o}var Ke={addBox(i,e){i.boxes||(i.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},i.boxes.push(e)},removeBox(i,e){const t=i.boxes?i.boxes.indexOf(e):-1;t!==-1&&i.boxes.splice(t,1)},configure(i,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(i,e,t,n){if(!i)return;const s=Ge(i.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(t-s.height,0),a=Ap(i.boxes),l=a.vertical,c=a.horizontal;Z(i.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const u=l.reduce((y,x)=>x.box.options&&x.box.options.display===!1?y:y+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:t,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),h=Object.assign({},s);Hc(h,Ge(n));const f=Object.assign({maxPadding:h,w:r,h:o,x:s.left,y:s.top},s),g=Tp(l.concat(c),d);Kn(a.fullSize,f,d,g),Kn(l,f,d,g),Kn(c,f,d,g)&&Kn(l,f,d,g),Ip(f),Wa(a.leftAndTop,f,d,g),f.x+=f.w,f.y+=f.h,Wa(a.rightAndBottom,f,d,g),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Z(a.chartArea,y=>{const x=y.box;Object.assign(x,i.chartArea),x.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Uc{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,s){return t=Math.max(0,t||e.width),n=n||e.height,{width:t,height:Math.max(0,s?Math.floor(t/s):n)}}isAttached(e){return!0}updateConfig(e){}}class Mp extends Uc{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ji="$chartjs",Op={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Ka=i=>i===null||i==="";function Lp(i,e){const t=i.style,n=i.getAttribute("height"),s=i.getAttribute("width");if(i[Ji]={initial:{height:n,width:s,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",Ka(s)){const r=Ma(i,"width");r!==void 0&&(i.width=r)}if(Ka(n))if(i.style.height==="")i.height=i.width/(e||2);else{const r=Ma(i,"height");r!==void 0&&(i.height=r)}return i}const Wc=qf?{passive:!0}:!1;function Dp(i,e,t){i&&i.addEventListener(e,t,Wc)}function Pp(i,e,t){i&&i.canvas&&i.canvas.removeEventListener(e,t,Wc)}function Rp(i,e){const t=Op[i.type]||i.type,{x:n,y:s}=Ot(i,e);return{type:t,chart:e,native:i,x:n!==void 0?n:null,y:s!==void 0?s:null}}function hs(i,e){for(const t of i)if(t===e||t.contains(e))return!0}function Fp(i,e,t){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||hs(a.addedNodes,n),o=o&&!hs(a.removedNodes,n);o&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}function Bp(i,e,t){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||hs(a.removedNodes,n),o=o&&!hs(a.addedNodes,n);o&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}const ci=new Map;let Va=0;function Kc(){const i=window.devicePixelRatio;i!==Va&&(Va=i,ci.forEach((e,t)=>{t.currentDevicePixelRatio!==i&&e()}))}function $p(i,e){ci.size||window.addEventListener("resize",Kc),ci.set(i,e)}function zp(i){ci.delete(i),ci.size||window.removeEventListener("resize",Kc)}function jp(i,e,t){const n=i.canvas,s=n&&go(n);if(!s)return;const r=kc((a,l)=>{const c=s.clientWidth;t(a,l),c<s.clientWidth&&t()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),$p(i,r),o}function rr(i,e,t){t&&t.disconnect(),e==="resize"&&zp(i)}function Hp(i,e,t){const n=i.canvas,s=kc(r=>{i.ctx!==null&&t(Rp(r,i))},i);return Dp(n,e,s),s}class Up extends Uc{acquireContext(e,t){const n=e&&e.getContext&&e.getContext("2d");return n&&n.canvas===e?(Lp(e,t),n):null}releaseContext(e){const t=e.canvas;if(!t[Ji])return!1;const n=t[Ji].initial;["height","width"].forEach(r=>{const o=n[r];fe(o)?t.removeAttribute(r):t.setAttribute(r,o)});const s=n.style||{};return Object.keys(s).forEach(r=>{t.style[r]=s[r]}),t.width=t.width,delete t[Ji],!0}addEventListener(e,t,n){this.removeEventListener(e,t);const s=e.$proxies||(e.$proxies={}),o={attach:Fp,detach:Bp,resize:jp}[t]||Hp;s[t]=o(e,t,n)}removeEventListener(e,t){const n=e.$proxies||(e.$proxies={}),s=n[t];if(!s)return;({attach:rr,detach:rr,resize:rr}[t]||Pp)(e,t,s),n[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,s){return Vf(e,t,n,s)}isAttached(e){const t=e&&go(e);return!!(t&&t.isConnected)}}function Wp(i){return!mo()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Mp:Up}class vt{constructor(){L(this,"x");L(this,"y");L(this,"active",!1);L(this,"options");L(this,"$animations")}tooltipPosition(e){const{x:t,y:n}=this.getProps(["x","y"],e);return{x:t,y:n}}hasValue(){return oi(this.x)&&oi(this.y)}getProps(e,t){const n=this.$animations;if(!t||!n)return this;const s={};return e.forEach(r=>{s[r]=n[r]&&n[r].active()?n[r]._to:this[r]}),s}}L(vt,"defaults",{}),L(vt,"defaultRoutes");function Kp(i,e){const t=i.options.ticks,n=Vp(i),s=Math.min(t.maxTicksLimit||n,n),r=t.major.enabled?Gp(e):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return Yp(e,c,r,o/s),c;const u=qp(r,e,s);if(o>0){let d,h;const f=o>1?Math.round((l-a)/(o-1)):null;for(Ri(e,c,u,fe(f)?0:a-f,a),d=0,h=o-1;d<h;d++)Ri(e,c,u,r[d],r[d+1]);return Ri(e,c,u,l,fe(f)?e.length:l+f),c}return Ri(e,c,u),c}function Vp(i){const e=i.options.offset,t=i._tickSize(),n=i._length/t+(e?0:1),s=i._maxLength/t;return Math.floor(Math.min(n,s))}function qp(i,e,t){const n=Jp(i),s=e.length/t;if(!n)return Math.max(s,1);const r=Uh(n);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function Gp(i){const e=[];let t,n;for(t=0,n=i.length;t<n;t++)i[t].major&&e.push(t);return e}function Yp(i,e,t,n){let s=0,r=t[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===r&&(e.push(i[o]),s++,r=t[s*n])}function Ri(i,e,t,n,s){const r=q(n,0),o=Math.min(q(s,i.length),i.length);let a=0,l,c,u;for(t=Math.ceil(t),s&&(l=s-n,t=l/Math.floor(l/t)),u=r;u<0;)a++,u=Math.round(r+a*t);for(c=Math.max(r,0);c<o;c++)c===u&&(e.push(i[c]),a++,u=Math.round(r+a*t))}function Jp(i){const e=i.length;let t,n;if(e<2)return!1;for(n=i[0],t=1;t<e;++t)if(i[t]-i[t-1]!==n)return!1;return n}const Xp=i=>i==="left"?"right":i==="right"?"left":i,qa=(i,e,t)=>e==="top"||e==="left"?i[e]+t:i[e]-t,Ga=(i,e)=>Math.min(e||i,i);function Ya(i,e){const t=[],n=i.length/e,s=i.length;let r=0;for(;r<s;r+=n)t.push(i[Math.floor(r)]);return t}function Qp(i,e,t){const n=i.ticks.length,s=Math.min(e,n-1),r=i._startPixel,o=i._endPixel,a=1e-6;let l=i.getPixelForTick(s),c;if(!(t&&(n===1?c=Math.max(l-r,o-l):e===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function Zp(i,e){Z(i,t=>{const n=t.gc,s=n.length/2;let r;if(s>e){for(r=0;r<s;++r)delete t.data[n[r]];n.splice(0,s)}})}function zn(i){return i.drawTicks?i.tickLength:0}function Ja(i,e){if(!i.display)return 0;const t=Se(i.font,e),n=Ge(i.padding);return(me(i.text)?i.text.length:1)*t.lineHeight+n.height}function em(i,e){return Vt(i,{scale:e,type:"scale"})}function tm(i,e,t){return Vt(i,{tick:t,index:e,type:"tick"})}function nm(i,e,t){let n=co(i);return(t&&e!=="right"||!t&&e==="right")&&(n=Xp(n)),n}function im(i,e,t,n){const{top:s,left:r,bottom:o,right:a,chart:l}=i,{chartArea:c,scales:u}=l;let d=0,h,f,g;const y=o-s,x=a-r;if(i.isHorizontal()){if(f=ke(n,r,a),Y(t)){const p=Object.keys(t)[0],S=t[p];g=u[p].getPixelForValue(S)+y-e}else t==="center"?g=(c.bottom+c.top)/2+y-e:g=qa(i,t,e);h=a-r}else{if(Y(t)){const p=Object.keys(t)[0],S=t[p];f=u[p].getPixelForValue(S)-x+e}else t==="center"?f=(c.left+c.right)/2-x+e:f=qa(i,t,e);g=ke(n,o,s),d=t==="left"?-Qe:Qe}return{titleX:f,titleY:g,maxWidth:h,rotation:d}}class xn extends vt{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:s}=this;return e=st(e,Number.POSITIVE_INFINITY),t=st(t,Number.NEGATIVE_INFINITY),n=st(n,Number.POSITIVE_INFINITY),s=st(s,Number.NEGATIVE_INFINITY),{min:st(e,n),max:st(t,s),minDefined:Te(e),maxDefined:Te(t)}}getMinMax(e){let{min:t,max:n,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:t,max:n};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),s||(t=Math.min(t,o.min)),r||(n=Math.max(n,o.max));return t=r&&t>n?n:t,n=s&&t>n?t:n,{min:st(t,st(n,t)),max:st(n,st(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){re(this.options.beforeUpdate,[this])}update(e,t,n){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Sf(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Ya(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=Kp(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){re(this.options.afterUpdate,[this])}beforeSetDimensions(){re(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){re(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),re(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){re(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let n,s,r;for(n=0,s=e.length;n<s;n++)r=e[n],r.label=re(t.callback,[r.value,n,e],this)}afterTickToLabelConversion(){re(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){re(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,n=Ga(this.ticks.length,e.ticks.maxTicksLimit),s=t.minRotation||0,r=t.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!t.display||s>=r||n<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),d=u.widest.width,h=u.highest.height,f=We(this.chart.width-d,0,this.maxWidth);a=e.offset?this.maxWidth/n:f/(n-1),d+6>a&&(a=f/(n-(e.offset?.5:1)),l=this.maxHeight-zn(e.grid)-t.padding-Ja(e.title,this.chart.options.font),c=Math.sqrt(d*d+h*h),o=Vh(Math.min(Math.asin(We((u.highest.height+6)/a,-1,1)),Math.asin(We(l/c,-1,1))-Math.asin(We(h/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){re(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){re(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:n,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Ja(s,t.options.font);if(a?(e.width=this.maxWidth,e.height=zn(r)+l):(e.height=this.maxHeight,e.width=zn(r)+l),n.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:h}=this._getLabelSizes(),f=n.padding*2,g=Pt(this.labelRotation),y=Math.cos(g),x=Math.sin(g);if(a){const p=n.mirror?0:x*d.width+y*h.height;e.height=Math.min(this.maxHeight,e.height+p+f)}else{const p=n.mirror?0:y*d.width+x*h.height;e.width=Math.min(this.maxWidth,e.width+p+f)}this._calculatePadding(c,u,x,y)}}this._handleMargins(),a?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,f=0;l?c?(h=s*e.width,f=n*t.height):(h=n*e.height,f=s*t.width):r==="start"?f=t.width:r==="end"?h=e.width:r!=="inner"&&(h=e.width/2,f=t.width/2),this.paddingLeft=Math.max((h-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((f-d+o)*this.width/(this.width-d),0)}else{let u=t.height/2,d=e.height/2;r==="start"?(u=0,d=e.height):r==="end"&&(u=t.height,d=0),this.paddingTop=u+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){re(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)fe(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let n=this.ticks;t<n.length&&(n=Ya(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(t/Ga(t,n));let c=0,u=0,d,h,f,g,y,x,p,S,w,m,E;for(d=0;d<t;d+=l){if(g=e[d].label,y=this._resolveTickFontOptions(d),s.font=x=y.string,p=r[x]=r[x]||{data:{},gc:[]},S=y.lineHeight,w=m=0,!fe(g)&&!me(g))w=Ta(s,p.data,p.gc,w,g),m=S;else if(me(g))for(h=0,f=g.length;h<f;++h)E=g[h],!fe(E)&&!me(E)&&(w=Ta(s,p.data,p.gc,w,E),m+=S);o.push(w),a.push(m),c=Math.max(w,c),u=Math.max(m,u)}Zp(r,t);const O=o.indexOf(c),D=a.indexOf(u),N=k=>({width:o[k]||0,height:a[k]||0});return{first:N(0),last:N(t-1),widest:N(O),highest:N(D),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return Yh(this._alignToPixels?It(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const n=t[e];return n.$context||(n.$context=tm(this.getContext(),e,n))}return this.$context||(this.$context=em(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=Pt(this.labelRotation),n=Math.abs(Math.cos(t)),s=Math.abs(Math.sin(t)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*n>a*s?a/n:l/s:l*s<a*n?l/n:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,n=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),h=zn(r),f=[],g=a.setContext(this.getContext()),y=g.display?g.width:0,x=y/2,p=function(z){return It(n,z,y)};let S,w,m,E,O,D,N,k,$,j,v,A;if(o==="top")S=p(this.bottom),D=this.bottom-h,k=S-x,j=p(e.top)+x,A=e.bottom;else if(o==="bottom")S=p(this.top),j=e.top,A=p(e.bottom)-x,D=S+x,k=this.top+h;else if(o==="left")S=p(this.right),O=this.right-h,N=S-x,$=p(e.left)+x,v=e.right;else if(o==="right")S=p(this.left),$=e.left,v=p(e.right)-x,O=S+x,N=this.left+h;else if(t==="x"){if(o==="center")S=p((e.top+e.bottom)/2+.5);else if(Y(o)){const z=Object.keys(o)[0],P=o[z];S=p(this.chart.scales[z].getPixelForValue(P))}j=e.top,A=e.bottom,D=S+x,k=D+h}else if(t==="y"){if(o==="center")S=p((e.left+e.right)/2);else if(Y(o)){const z=Object.keys(o)[0],P=o[z];S=p(this.chart.scales[z].getPixelForValue(P))}O=S-x,N=O-h,$=e.left,v=e.right}const C=q(s.ticks.maxTicksLimit,d),T=Math.max(1,Math.ceil(d/C));for(w=0;w<d;w+=T){const z=this.getContext(w),P=r.setContext(z),F=a.setContext(z),U=P.lineWidth,ee=P.color,G=F.dash||[],we=F.dashOffset,se=P.tickWidth,Be=P.tickColor,X=P.tickBorderDash||[],Ae=P.tickBorderDashOffset;m=Qp(this,w,l),m!==void 0&&(E=It(n,m,U),c?O=N=$=v=E:D=k=j=A=E,f.push({tx1:O,ty1:D,tx2:N,ty2:k,x1:$,y1:j,x2:v,y2:A,width:U,color:ee,borderDash:G,borderDashOffset:we,tickWidth:se,tickColor:Be,tickBorderDash:X,tickBorderDashOffset:Ae}))}return this._ticksLength=d,this._borderValue=S,f}_computeLabelItems(e){const t=this.axis,n=this.options,{position:s,ticks:r}=n,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:d}=r,h=zn(n.grid),f=h+u,g=d?-u:f,y=-Pt(this.labelRotation),x=[];let p,S,w,m,E,O,D,N,k,$,j,v,A="middle";if(s==="top")O=this.bottom-g,D=this._getXAxisLabelAlignment();else if(s==="bottom")O=this.top+g,D=this._getXAxisLabelAlignment();else if(s==="left"){const T=this._getYAxisLabelAlignment(h);D=T.textAlign,E=T.x}else if(s==="right"){const T=this._getYAxisLabelAlignment(h);D=T.textAlign,E=T.x}else if(t==="x"){if(s==="center")O=(e.top+e.bottom)/2+f;else if(Y(s)){const T=Object.keys(s)[0],z=s[T];O=this.chart.scales[T].getPixelForValue(z)+f}D=this._getXAxisLabelAlignment()}else if(t==="y"){if(s==="center")E=(e.left+e.right)/2-f;else if(Y(s)){const T=Object.keys(s)[0],z=s[T];E=this.chart.scales[T].getPixelForValue(z)}D=this._getYAxisLabelAlignment(h).textAlign}t==="y"&&(l==="start"?A="top":l==="end"&&(A="bottom"));const C=this._getLabelSizes();for(p=0,S=a.length;p<S;++p){w=a[p],m=w.label;const T=r.setContext(this.getContext(p));N=this.getPixelForTick(p)+r.labelOffset,k=this._resolveTickFontOptions(p),$=k.lineHeight,j=me(m)?m.length:1;const z=j/2,P=T.color,F=T.textStrokeColor,U=T.textStrokeWidth;let ee=D;o?(E=N,D==="inner"&&(p===S-1?ee=this.options.reverse?"left":"right":p===0?ee=this.options.reverse?"right":"left":ee="center"),s==="top"?c==="near"||y!==0?v=-j*$+$/2:c==="center"?v=-C.highest.height/2-z*$+$:v=-C.highest.height+$/2:c==="near"||y!==0?v=$/2:c==="center"?v=C.highest.height/2-z*$:v=C.highest.height-j*$,d&&(v*=-1),y!==0&&!T.showLabelBackdrop&&(E+=$/2*Math.sin(y))):(O=N,v=(1-j)*$/2);let G;if(T.showLabelBackdrop){const we=Ge(T.backdropPadding),se=C.heights[p],Be=C.widths[p];let X=v-we.top,Ae=0-we.left;switch(A){case"middle":X-=se/2;break;case"bottom":X-=se;break}switch(D){case"center":Ae-=Be/2;break;case"right":Ae-=Be;break;case"inner":p===S-1?Ae-=Be:p>0&&(Ae-=Be/2);break}G={left:Ae,top:X,width:Be+we.width,height:se+we.height,color:T.backdropColor}}x.push({label:m,font:k,textOffset:v,options:{rotation:y,color:P,strokeColor:F,strokeWidth:U,textAlign:ee,textBaseline:A,translation:[E,O],backdrop:G}})}return x}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-Pt(this.labelRotation))return e==="top"?"left":"right";let s="center";return t.align==="start"?s="left":t.align==="end"?s="right":t.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:n,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,l=o.widest.width;let c,u;return t==="left"?s?(u=this.right+r,n==="near"?c="left":n==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,n==="near"?c="right":n==="center"?(c="center",u-=l/2):(c="left",u=this.left)):t==="right"?s?(u=this.left+r,n==="near"?c="right":n==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,n==="near"?c="left":n==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:n,top:s,width:r,height:o}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,s,r,o),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?t.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const t=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(l,c,u)=>{!u.width||!u.color||(n.save(),n.lineWidth=u.width,n.strokeStyle=u.color,n.setLineDash(u.borderDash||[]),n.lineDashOffset=u.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(t.display)for(r=0,o=s.length;r<o;++r){const l=s[r];t.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),t.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:n,grid:s}}=this,r=n.setContext(this.getContext()),o=n.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,d,h;this.isHorizontal()?(c=It(e,this.left,o)-o/2,u=It(e,this.right,a)+a/2,d=h=l):(d=It(e,this.top,o)-o/2,h=It(e,this.bottom,a)+a/2,c=u=l),t.save(),t.lineWidth=r.width,t.strokeStyle=r.color,t.beginPath(),t.moveTo(c,d),t.lineTo(u,h),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const n=this.ctx,s=this._computeLabelArea();s&&ws(n,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,l=o.font,c=o.label,u=o.textOffset;li(n,c,0,u,l,a)}s&&_s(n)}drawTitle(){const{ctx:e,options:{position:t,title:n,reverse:s}}=this;if(!n.display)return;const r=Se(n.font),o=Ge(n.padding),a=n.align;let l=r.lineHeight/2;t==="bottom"||t==="center"||Y(t)?(l+=o.bottom,me(n.text)&&(l+=r.lineHeight*(n.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:d,rotation:h}=im(this,l,t,a);li(e,n.text,0,0,r,{color:n.color,maxWidth:d,rotation:h,textAlign:nm(a,t,s),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,n=q(e.grid&&e.grid.z,-1),s=q(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==xn.prototype.draw?[{z:t,draw:r=>{this.draw(r)}}]:[{z:n,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:t,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[];let r,o;for(r=0,o=t.length;r<o;++r){const a=t[r];a[n]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return Se(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Fi{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let n;om(t)&&(n=this.register(t));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,sm(e,o,n),this.override&&pe.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const t=this.items,n=e.id,s=this.scope;n in t&&delete t[n],s&&n in pe[s]&&(delete pe[s][n],this.override&&delete Ut[n])}}function sm(i,e,t){const n=ri(Object.create(null),[t?pe.get(t):{},pe.get(e),i.defaults]);pe.set(e,n),i.defaultRoutes&&rm(e,i.defaultRoutes),i.descriptors&&pe.describe(e,i.descriptors)}function rm(i,e){Object.keys(e).forEach(t=>{const n=t.split("."),s=n.pop(),r=[i].concat(n).join("."),o=e[t].split("."),a=o.pop(),l=o.join(".");pe.route(r,s,l,a)})}function om(i){return"id"in i&&"defaults"in i}class am{constructor(){this.controllers=new Fi(ni,"datasets",!0),this.elements=new Fi(vt,"elements"),this.plugins=new Fi(Object,"plugins"),this.scales=new Fi(xn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,n){[...t].forEach(s=>{const r=n||this._getRegistryForType(s);n||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):Z(s,o=>{const a=n||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,t,n){const s=ao(e);re(n["before"+s],[],n),t[e](n),re(n["after"+s],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){const s=t.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+n+".");return s}}var at=new am;class lm{constructor(){this._init=[]}notify(e,t,n,s){t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,t,n);return t==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,t,n,s){s=s||{};for(const r of e){const o=r.plugin,a=o[n],l=[t,s,r.options];if(re(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){fe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const n=e&&e.config,s=q(n.options&&n.options.plugins,{}),r=cm(n);return s===!1&&!t?[]:dm(e,r,s,t)}_notifyStateChanges(e){const t=this._oldCache||[],n=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(t,n),e,"stop"),this._notify(s(n,t),e,"start")}}function cm(i){const e={},t=[],n=Object.keys(at.plugins.items);for(let r=0;r<n.length;r++)t.push(at.getPlugin(n[r]));const s=i.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];t.indexOf(o)===-1&&(t.push(o),e[o.id]=!0)}return{plugins:t,localIds:e}}function um(i,e){return!e&&i===!1?null:i===!0?{}:i}function dm(i,{plugins:e,localIds:t},n,s){const r=[],o=i.getContext();for(const a of e){const l=a.id,c=um(n[l],s);c!==null&&r.push({plugin:a,options:hm(i.config,{plugin:a,local:t[l]},c,o)})}return r}function hm(i,{plugin:e,local:t},n,s){const r=i.pluginScopeKeys(e),o=i.getOptionScopes(n,r);return t&&e.defaults&&o.push(e.defaults),i.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Dr(i,e){const t=pe.datasets[i]||{};return((e.datasets||{})[i]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function fm(i,e){let t=i;return i==="_index_"?t=e:i==="_value_"&&(t=e==="x"?"y":"x"),t}function pm(i,e){return i===e?"_index_":"_value_"}function Xa(i){if(i==="x"||i==="y"||i==="r")return i}function mm(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function Pr(i,...e){if(Xa(i))return i;for(const t of e){const n=t.axis||mm(t.position)||i.length>1&&Xa(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Qa(i,e,t){if(t[e+"AxisID"]===i)return{axis:e}}function gm(i,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(t.length)return Qa(i,"x",t[0])||Qa(i,"y",t[0])}return{}}function bm(i,e){const t=Ut[i.type]||{scales:{}},n=e.scales||{},s=Dr(i.type,e),r=Object.create(null);return Object.keys(n).forEach(o=>{const a=n[o];if(!Y(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Pr(o,a,gm(o,i),pe.scales[a.type]),c=pm(l,s),u=t.scales||{};r[o]=Xn(Object.create(null),[{axis:l},a,u[l],u[c]])}),i.data.datasets.forEach(o=>{const a=o.type||i.type,l=o.indexAxis||Dr(a,e),u=(Ut[a]||{}).scales||{};Object.keys(u).forEach(d=>{const h=fm(d,l),f=o[h+"AxisID"]||h;r[f]=r[f]||Object.create(null),Xn(r[f],[{axis:h},n[f],u[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];Xn(a,[pe.scales[a.type],pe.scale])}),r}function Vc(i){const e=i.options||(i.options={});e.plugins=q(e.plugins,{}),e.scales=bm(i,e)}function qc(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function ym(i){return i=i||{},i.data=qc(i.data),Vc(i),i}const Za=new Map,Gc=new Set;function Bi(i,e){let t=Za.get(i);return t||(t=e(),Za.set(i,t),Gc.add(t)),t}const jn=(i,e,t)=>{const n=ls(e,t);n!==void 0&&i.add(n)};class xm{constructor(e){this._config=ym(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=qc(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Vc(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Bi(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return Bi(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return Bi(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,n=this.type;return Bi(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const n=this._scopeCache;let s=n.get(e);return(!s||t)&&(s=new Map,n.set(e,s)),s}getOptionScopes(e,t,n){const{options:s,type:r}=this,o=this._cachedScopes(e,n),a=o.get(t);if(a)return a;const l=new Set;t.forEach(u=>{e&&(l.add(e),u.forEach(d=>jn(l,e,d))),u.forEach(d=>jn(l,s,d)),u.forEach(d=>jn(l,Ut[r]||{},d)),u.forEach(d=>jn(l,pe,d)),u.forEach(d=>jn(l,Mr,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Gc.has(t)&&o.set(t,c),c}chartOptionScopes(){const{options:e,type:t}=this;return[e,Ut[t]||{},pe.datasets[t]||{},{type:t},pe,Mr]}resolveNamedOptions(e,t,n,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=el(this._resolverCache,e,s);let l=o;if(wm(o,t)){r.$shared=!1,n=Et(n)?n():n;const c=this.createResolver(e,n,a);l=mn(o,n,c)}for(const c of t)r[c]=l[c];return r}createResolver(e,t,n=[""],s){const{resolver:r}=el(this._resolverCache,e,n);return Y(t)?mn(r,t,void 0,s):r}}function el(i,e,t){let n=i.get(e);n||(n=new Map,i.set(e,n));const s=t.join();let r=n.get(s);return r||(r={resolver:ho(e,t),subPrefixes:t.filter(a=>!a.toLowerCase().includes("hover"))},n.set(s,r)),r}const vm=i=>Y(i)&&Object.getOwnPropertyNames(i).some(e=>Et(i[e]));function wm(i,e){const{isScriptable:t,isIndexable:n}=Ic(i);for(const s of e){const r=t(s),o=n(s),a=(o||r)&&i[s];if(r&&(Et(a)||vm(a))||o&&me(a))return!0}return!1}var _m="4.4.7";const km=["top","bottom","left","right","chartArea"];function tl(i,e){return i==="top"||i==="bottom"||km.indexOf(i)===-1&&e==="x"}function nl(i,e){return function(t,n){return t[i]===n[i]?t[e]-n[e]:t[i]-n[i]}}function il(i){const e=i.chart,t=e.options.animation;e.notifyPlugins("afterRender"),re(t&&t.onComplete,[i],e)}function Sm(i){const e=i.chart,t=e.options.animation;re(t&&t.onProgress,[i],e)}function Yc(i){return mo()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const Xi={},sl=i=>{const e=Yc(i);return Object.values(Xi).filter(t=>t.canvas===e).pop()};function Em(i,e,t){const n=Object.keys(i);for(const s of n){const r=+s;if(r>=e){const o=i[s];delete i[s],(t>0||r>e)&&(i[r+t]=o)}}}function Tm(i,e,t,n){return!t||i.type==="mouseout"?null:n?e:i}function $i(i,e,t){return i.options.clip?i[t]:e[t]}function Am(i,e){const{xScale:t,yScale:n}=i;return t&&n?{left:$i(t,e,"left"),right:$i(t,e,"right"),top:$i(n,e,"top"),bottom:$i(n,e,"bottom")}:e}class bt{static register(...e){at.add(...e),rl()}static unregister(...e){at.remove(...e),rl()}constructor(e,t){const n=this.config=new xm(t),s=Yc(e),r=sl(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||Wp(s)),this.platform.updateConfig(n);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=Dh(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new lm,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ef(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],Xi[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}pt.listen(this,"complete",il),pt.listen(this,"progress",Sm),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:s,_aspectRatio:r}=this;return fe(e)?t&&r?r:s?n/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return at}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Na(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Aa(this.canvas,this.ctx),this}stop(){return pt.stop(this),this}resize(e,t){pt.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const n=this.options,s=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,t,r),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Na(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),re(n.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};Z(t,(n,s)=>{n.id=s})}buildOrUpdateScales(){const e=this.options,t=e.scales,n=this.scales,s=Object.keys(n).reduce((o,a)=>(o[a]=!1,o),{});let r=[];t&&(r=r.concat(Object.keys(t).map(o=>{const a=t[o],l=Pr(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),Z(r,o=>{const a=o.options,l=a.id,c=Pr(l,a),u=q(a.type,o.dtype);(a.position===void 0||tl(a.position,c)!==tl(o.dposition))&&(a.position=o.dposition),s[l]=!0;let d=null;if(l in n&&n[l].type===u)d=n[l];else{const h=at.getScale(u);d=new h({id:l,type:u,ctx:this.ctx,chart:this}),n[d.id]=d}d.init(a,e)}),Z(s,(o,a)=>{o||delete n[a]}),Z(n,o=>{Ke.configure(this,o,o.options),Ke.addBox(this,o)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((s,r)=>s.index-r.index),n>t){for(let s=t;s<n;++s)this._destroyDatasetMeta(s);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(nl("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((n,s)=>{t.filter(r=>r===n._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let n,s;for(this._removeUnreferencedMetasets(),n=0,s=t.length;n<s;n++){const r=t[n];let o=this.getDatasetMeta(n);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=a,o.indexAxis=r.indexAxis||Dr(a,this.options),o.order=r.order||0,o.index=n,o.label=""+r.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{const l=at.getController(a),{datasetElementType:c,dataElementType:u}=pe.datasets[a];Object.assign(l,{dataElementType:at.getElement(u),datasetElementType:c&&at.getElement(c)}),o.controller=new l(this,n),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){Z(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:d}=this.getDatasetMeta(c),h=!s&&r.indexOf(d)===-1;d.buildOrUpdateElements(h),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),s||Z(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(nl("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Z(this.scales,e=>{Ke.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),n=new Set(e.events);(!ba(t,n)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:n,start:s,count:r}of t){const o=n==="_removeElements"?-r:r;Em(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,n=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=n(0);for(let r=1;r<t;r++)if(!ba(s,n(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Ke.update(this,this.width,this.height,e);const t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],Z(this.boxes,s=>{n&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,n=this.data.datasets.length;t<n;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,Et(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const n=this.getDatasetMeta(e),s={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(n.controller._update(t),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(pt.has(this)?this.attached&&!pt.running(this)&&pt.start(this):(this.draw(),il({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:n,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,n=[];let s,r;for(s=0,r=t.length;s<r;++s){const o=t[s];(!e||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,n=e._clip,s=!n.disabled,r=Am(e,this.chartArea),o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&ws(t,{left:n.left===!1?0:r.left-n.left,right:n.right===!1?this.width:r.right+n.right,top:n.top===!1?0:r.top-n.top,bottom:n.bottom===!1?this.height:r.bottom+n.bottom}),e.controller.draw(),s&&_s(t),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return ai(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,s){const r=kp.modes[t];return typeof r=="function"?r(this,e,n,s):[]}getDatasetMeta(e){const t=this.data.datasets[e],n=this._metasets;let s=n.filter(r=>r&&r._dataset===t).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(s)),s}getContext(){return this.$context||(this.$context=Vt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const n=this.getDatasetMeta(e);return typeof n.hidden=="boolean"?!n.hidden:!t.hidden}setDatasetVisibility(e,t){const n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){const s=n?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);cs(t)?(r.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),o.update(r,{visible:n}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),pt.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Aa(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Xi[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,n=(r,o)=>{t.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Z(this.options.events,r=>n(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,n=(l,c)=>{t.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(t.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),n("resize",r),n("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),n("attach",a)},t.isAttached(this.canvas)?a():o()}unbindEvents(){Z(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},Z(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){const s=n?"set":"remove";let r,o,a,l;for(t==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],n=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!os(n,t)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){const s=this.options.hover,r=(l,c)=>l.filter(u=>!c.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),o=r(t,e),a=n?e:r(e,t);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,t){const n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",n,s)===!1)return;const r=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,s),(r||n.changed)&&this.render(),this}_handleEvent(e,t,n){const{_active:s=[],options:r}=this,o=t,a=this._getActiveElements(e,s,n,o),l=zh(e),c=Tm(e,this._lastEvent,n,l);n&&(this._lastEvent=null,re(r.onHover,[e,a,this],this),l&&re(r.onClick,[e,a,this],this));const u=!os(a,s);return(u||t)&&(this._active=a,this._updateHoverStyles(a,s,t)),this._lastEvent=c,u}_getActiveElements(e,t,n,s){if(e.type==="mouseout")return[];if(!n)return t;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}}L(bt,"defaults",pe),L(bt,"instances",Xi),L(bt,"overrides",Ut),L(bt,"registry",at),L(bt,"version",_m),L(bt,"getChart",sl);function rl(){return Z(bt.instances,i=>i._plugins.invalidate())}function Jc(i,e,t=e){i.lineCap=q(t.borderCapStyle,e.borderCapStyle),i.setLineDash(q(t.borderDash,e.borderDash)),i.lineDashOffset=q(t.borderDashOffset,e.borderDashOffset),i.lineJoin=q(t.borderJoinStyle,e.borderJoinStyle),i.lineWidth=q(t.borderWidth,e.borderWidth),i.strokeStyle=q(t.borderColor,e.borderColor)}function Cm(i,e,t){i.lineTo(t.x,t.y)}function Im(i){return i.stepped?pf:i.tension||i.cubicInterpolationMode==="monotone"?mf:Cm}function Xc(i,e,t={}){const n=i.length,{start:s=0,end:r=n-1}=t,{start:o,end:a}=e,l=Math.max(s,o),c=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:n,start:l,loop:e.loop,ilen:c<l&&!u?n+c-l:c-l}}function Nm(i,e,t,n){const{points:s,options:r}=e,{count:o,start:a,loop:l,ilen:c}=Xc(s,t,n),u=Im(r);let{move:d=!0,reverse:h}=n||{},f,g,y;for(f=0;f<=c;++f)g=s[(a+(h?c-f:f))%o],!g.skip&&(d?(i.moveTo(g.x,g.y),d=!1):u(i,y,g,h,r.stepped),y=g);return l&&(g=s[(a+(h?c:0))%o],u(i,y,g,h,r.stepped)),!!l}function Mm(i,e,t,n){const s=e.points,{count:r,start:o,ilen:a}=Xc(s,t,n),{move:l=!0,reverse:c}=n||{};let u=0,d=0,h,f,g,y,x,p;const S=m=>(o+(c?a-m:m))%r,w=()=>{y!==x&&(i.lineTo(u,x),i.lineTo(u,y),i.lineTo(u,p))};for(l&&(f=s[S(0)],i.moveTo(f.x,f.y)),h=0;h<=a;++h){if(f=s[S(h)],f.skip)continue;const m=f.x,E=f.y,O=m|0;O===g?(E<y?y=E:E>x&&(x=E),u=(d*u+m)/++d):(w(),i.lineTo(m,E),g=O,d=0,y=x=E),p=E}w()}function Rr(i){const e=i.options,t=e.borderDash&&e.borderDash.length;return!i._decimated&&!i._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?Mm:Nm}function Om(i){return i.stepped?Gf:i.tension||i.cubicInterpolationMode==="monotone"?Yf:Lt}function Lm(i,e,t,n){let s=e._path;s||(s=e._path=new Path2D,e.path(s,t,n)&&s.closePath()),Jc(i,e.options),i.stroke(s)}function Dm(i,e,t,n){const{segments:s,options:r}=e,o=Rr(e);for(const a of s)Jc(i,r,a.style),i.beginPath(),o(i,e,a,{start:t,end:t+n-1})&&i.closePath(),i.stroke()}const Pm=typeof Path2D=="function";function Rm(i,e,t,n){Pm&&!e.options.segment?Lm(i,e,t,n):Dm(i,e,t,n)}class _t extends vt{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const s=n.spanGaps?this._loop:this._fullLoop;zf(this._points,n,e,s,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=tp(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){const n=this.options,s=e[t],r=this.points,o=Bc(this,{property:t,start:s,end:s});if(!o.length)return;const a=[],l=Om(n);let c,u;for(c=0,u=o.length;c<u;++c){const{start:d,end:h}=o[c],f=r[d],g=r[h];if(f===g){a.push(f);continue}const y=Math.abs((s-f[t])/(g[t]-f[t])),x=l(f,g,y,n.stepped);x[t]=e[t],a.push(x)}return a.length===1?a[0]:a}pathSegment(e,t,n){return Rr(this)(e,this,t,n)}path(e,t,n){const s=this.segments,r=Rr(this);let o=this._loop;t=t||0,n=n||this.points.length-t;for(const a of s)o&=r(e,this,a,{start:t,end:t+n-1});return!!o}draw(e,t,n,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),Rm(e,this,n,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}L(_t,"id","line"),L(_t,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),L(_t,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),L(_t,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function ol(i,e,t,n){const s=i.options,{[t]:r}=i.getProps([t],n);return Math.abs(e-r)<s.radius+s.hitRadius}class Qi extends vt{constructor(t){super();L(this,"parsed");L(this,"skip");L(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(t-o,2)+Math.pow(n-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(t,n){return ol(this,t,"x",n)}inYRange(t,n){return ol(this,t,"y",n)}getCenterPoint(t){const{x:n,y:s}=this.getProps(["x","y"],t);return{x:n,y:s}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const s=n&&t.borderWidth||0;return(n+s)*2}draw(t,n){const s=this.options;this.skip||s.radius<.1||!ai(this,n,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,Or(t,s,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}L(Qi,"id","point"),L(Qi,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),L(Qi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Fm(i,e,t){const n=i.segments,s=i.points,r=e.points,o=[];for(const a of n){let{start:l,end:c}=a;c=yo(l,c,s);const u=Fr(t,s[l],s[c],a.loop);if(!e.segments){o.push({source:a,target:u,start:s[l],end:s[c]});continue}const d=Bc(e,u);for(const h of d){const f=Fr(t,r[h.start],r[h.end],h.loop),g=Fc(a,s,f);for(const y of g)o.push({source:y,target:h,start:{[t]:al(u,f,"start",Math.max)},end:{[t]:al(u,f,"end",Math.min)}})}}return o}function Fr(i,e,t,n){if(n)return;let s=e[i],r=t[i];return i==="angle"&&(s=lt(s),r=lt(r)),{property:i,start:s,end:r}}function Bm(i,e){const{x:t=null,y:n=null}=i||{},s=e.points,r=[];return e.segments.forEach(({start:o,end:a})=>{a=yo(o,a,s);const l=s[o],c=s[a];n!==null?(r.push({x:l.x,y:n}),r.push({x:c.x,y:n})):t!==null&&(r.push({x:t,y:l.y}),r.push({x:t,y:c.y}))}),r}function yo(i,e,t){for(;e>i;e--){const n=t[e];if(!isNaN(n.x)&&!isNaN(n.y))break}return e}function al(i,e,t,n){return i&&e?n(i[t],e[t]):i?i[t]:e?e[t]:0}function Qc(i,e){let t=[],n=!1;return me(i)?(n=!0,t=i):t=Bm(i,e),t.length?new _t({points:t,options:{tension:0},_loop:n,_fullLoop:n}):null}function ll(i){return i&&i.fill!==!1}function $m(i,e,t){let s=i[e].fill;const r=[e];let o;if(!t)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Te(s))return s;if(o=i[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function zm(i,e,t){const n=Wm(i);if(Y(n))return isNaN(n.value)?!1:n;let s=parseFloat(n);return Te(s)&&Math.floor(s)===s?jm(n[0],e,s,t):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function jm(i,e,t,n){return(i==="-"||i==="+")&&(t=e+t),t===e||t<0||t>=n?!1:t}function Hm(i,e){let t=null;return i==="start"?t=e.bottom:i==="end"?t=e.top:Y(i)?t=e.getPixelForValue(i.value):e.getBasePixel&&(t=e.getBasePixel()),t}function Um(i,e,t){let n;return i==="start"?n=t:i==="end"?n=e.options.reverse?e.min:e.max:Y(i)?n=i.value:n=e.getBaseValue(),n}function Wm(i){const e=i.options,t=e.fill;let n=q(t&&t.target,t);return n===void 0&&(n=!!e.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function Km(i){const{scale:e,index:t,line:n}=i,s=[],r=n.segments,o=n.points,a=Vm(e,t);a.push(Qc({x:null,y:e.bottom},n));for(let l=0;l<r.length;l++){const c=r[l];for(let u=c.start;u<=c.end;u++)qm(s,o[u],a)}return new _t({points:s,options:{}})}function Vm(i,e){const t=[],n=i.getMatchingVisibleMetas("line");for(let s=0;s<n.length;s++){const r=n[s];if(r.index===e)break;r.hidden||t.unshift(r.dataset)}return t}function qm(i,e,t){const n=[];for(let s=0;s<t.length;s++){const r=t[s],{first:o,last:a,point:l}=Gm(r,e,"x");if(!(!l||o&&a)){if(o)n.unshift(l);else if(i.push(l),!a)break}}i.push(...n)}function Gm(i,e,t){const n=i.interpolate(e,t);if(!n)return{};const s=n[t],r=i.segments,o=i.points;let a=!1,l=!1;for(let c=0;c<r.length;c++){const u=r[c],d=o[u.start][t],h=o[u.end][t];if(rn(s,d,h)){a=s===d,l=s===h;break}}return{first:a,last:l,point:n}}class Zc{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){const{x:s,y:r,radius:o}=this;return t=t||{start:0,end:Ze},e.arc(s,r,o,t.end,t.start,!0),!n.bounds}interpolate(e){const{x:t,y:n,radius:s}=this,r=e.angle;return{x:t+Math.cos(r)*s,y:n+Math.sin(r)*s,angle:r}}}function Ym(i){const{chart:e,fill:t,line:n}=i;if(Te(t))return Jm(e,t);if(t==="stack")return Km(i);if(t==="shape")return!0;const s=Xm(i);return s instanceof Zc?s:Qc(s,n)}function Jm(i,e){const t=i.getDatasetMeta(e);return t&&i.isDatasetVisible(e)?t.dataset:null}function Xm(i){return(i.scale||{}).getPointPositionForValue?Zm(i):Qm(i)}function Qm(i){const{scale:e={},fill:t}=i,n=Hm(t,e);if(Te(n)){const s=e.isHorizontal();return{x:s?n:null,y:s?null:n}}return null}function Zm(i){const{scale:e,fill:t}=i,n=e.options,s=e.getLabels().length,r=n.reverse?e.max:e.min,o=Um(t,e,r),a=[];if(n.grid.circular){const l=e.getPointPositionForValue(0,r);return new Zc({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(e.getPointPositionForValue(l,o));return a}function or(i,e,t){const n=Ym(e),{line:s,scale:r,axis:o}=e,a=s.options,l=a.fill,c=a.backgroundColor,{above:u=c,below:d=c}=l||{};n&&s.points.length&&(ws(i,t),eg(i,{line:s,target:n,above:u,below:d,area:t,scale:r,axis:o}),_s(i))}function eg(i,e){const{line:t,target:n,above:s,below:r,area:o,scale:a}=e,l=t._loop?"angle":e.axis;i.save(),l==="x"&&r!==s&&(cl(i,n,o.top),ul(i,{line:t,target:n,color:s,scale:a,property:l}),i.restore(),i.save(),cl(i,n,o.bottom)),ul(i,{line:t,target:n,color:r,scale:a,property:l}),i.restore()}function cl(i,e,t){const{segments:n,points:s}=e;let r=!0,o=!1;i.beginPath();for(const a of n){const{start:l,end:c}=a,u=s[l],d=s[yo(l,c,s)];r?(i.moveTo(u.x,u.y),r=!1):(i.lineTo(u.x,t),i.lineTo(u.x,u.y)),o=!!e.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(d.x,t)}i.lineTo(e.first().x,t),i.closePath(),i.clip()}function ul(i,e){const{line:t,target:n,property:s,color:r,scale:o}=e,a=Fm(t,n,s);for(const{source:l,target:c,start:u,end:d}of a){const{style:{backgroundColor:h=r}={}}=l,f=n!==!0;i.save(),i.fillStyle=h,tg(i,o,f&&Fr(s,u,d)),i.beginPath();const g=!!t.pathSegment(i,l);let y;if(f){g?i.closePath():dl(i,n,d,s);const x=!!n.pathSegment(i,c,{move:g,reverse:!0});y=g&&x,y||dl(i,n,u,s)}i.closePath(),i.fill(y?"evenodd":"nonzero"),i.restore()}}function tg(i,e,t){const{top:n,bottom:s}=e.chart.chartArea,{property:r,start:o,end:a}=t||{};r==="x"&&(i.beginPath(),i.rect(o,n,a-o,s-n),i.clip())}function dl(i,e,t,n){const s=e.interpolate(t,n);s&&i.lineTo(s.x,s.y)}var ng={id:"filler",afterDatasetsUpdate(i,e,t){const n=(i.data.datasets||[]).length,s=[];let r,o,a,l;for(o=0;o<n;++o)r=i.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof _t&&(l={visible:i.isDatasetVisible(o),index:o,fill:zm(a,o,n),chart:i,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<n;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=$m(s,o,t.propagate))},beforeDraw(i,e,t){const n=t.drawTime==="beforeDraw",s=i.getSortedVisibleDatasetMetas(),r=i.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),n&&a.fill&&or(i.ctx,a,r))}},beforeDatasetsDraw(i,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s){const r=n[s].$filler;ll(r)&&or(i.ctx,r,i.chartArea)}},beforeDatasetDraw(i,e,t){const n=e.meta.$filler;!ll(n)||t.drawTime!=="beforeDatasetDraw"||or(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const hl=(i,e)=>{let{boxHeight:t=e,boxWidth:n=e}=i;return i.usePointStyle&&(t=Math.min(t,e),n=i.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:t,itemHeight:Math.max(e,t)}},ig=(i,e)=>i!==null&&e!==null&&i.datasetIndex===e.datasetIndex&&i.index===e.index;class fl extends vt{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=re(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(n=>e.filter(n,this.chart.data))),e.sort&&(t=t.sort((n,s)=>e.sort(n,s,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const n=e.labels,s=Se(n.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=hl(n,r);let c,u;t.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let d=e;r.textAlign="left",r.textBaseline="middle";let h=-1,f=-u;return this.legendItems.forEach((g,y)=>{const x=n+t/2+r.measureText(g.text).width;(y===0||c[c.length-1]+x+2*a>o)&&(d+=u,c[c.length-(y>0?0:1)]=0,f+=u,h++),l[y]={left:0,top:f,row:h,width:x,height:s},c[c.length-1]+=x+a}),d}_fitCols(e,t,n,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let d=a,h=0,f=0,g=0,y=0;return this.legendItems.forEach((x,p)=>{const{itemWidth:S,itemHeight:w}=sg(n,t,r,x,s);p>0&&f+w+2*a>u&&(d+=h+a,c.push({width:h,height:f}),g+=h+a,y++,h=f=0),l[p]={left:g,top:f,col:y,width:S,height:w},h=Math.max(h,S),f+=w+a}),d+=h,c.push({width:h,height:f}),d}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:s},rtl:r}}=this,o=un(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=ke(n,this.left+s,this.right-this.lineWidths[a]);for(const c of t)a!==c.row&&(a=c.row,l=ke(n,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=ke(n,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of t)c.col!==a&&(a=c.col,l=ke(n,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;ws(e,this),this._draw(),_s(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:n,ctx:s}=this,{align:r,labels:o}=e,a=pe.color,l=un(e.rtl,this.left,this.width),c=Se(o.font),{padding:u}=o,d=c.size,h=d/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:g,boxHeight:y,itemHeight:x}=hl(o,d),p=function(O,D,N){if(isNaN(g)||g<=0||isNaN(y)||y<0)return;s.save();const k=q(N.lineWidth,1);if(s.fillStyle=q(N.fillStyle,a),s.lineCap=q(N.lineCap,"butt"),s.lineDashOffset=q(N.lineDashOffset,0),s.lineJoin=q(N.lineJoin,"miter"),s.lineWidth=k,s.strokeStyle=q(N.strokeStyle,a),s.setLineDash(q(N.lineDash,[])),o.usePointStyle){const $={radius:y*Math.SQRT2/2,pointStyle:N.pointStyle,rotation:N.rotation,borderWidth:k},j=l.xPlus(O,g/2),v=D+h;Ac(s,$,j,v,o.pointStyleWidth&&g)}else{const $=D+Math.max((d-y)/2,0),j=l.leftForLtr(O,g),v=ti(N.borderRadius);s.beginPath(),Object.values(v).some(A=>A!==0)?Lr(s,{x:j,y:$,w:g,h:y,radius:v}):s.rect(j,$,g,y),s.fill(),k!==0&&s.stroke()}s.restore()},S=function(O,D,N){li(s,N.text,O,D+x/2,c,{strikethrough:N.hidden,textAlign:l.textAlign(N.textAlign)})},w=this.isHorizontal(),m=this._computeTitleHeight();w?f={x:ke(r,this.left+u,this.right-n[0]),y:this.top+u+m,line:0}:f={x:this.left+u,y:ke(r,this.top+m+u,this.bottom-t[0].height),line:0},Dc(this.ctx,e.textDirection);const E=x+u;this.legendItems.forEach((O,D)=>{s.strokeStyle=O.fontColor,s.fillStyle=O.fontColor;const N=s.measureText(O.text).width,k=l.textAlign(O.textAlign||(O.textAlign=o.textAlign)),$=g+h+N;let j=f.x,v=f.y;l.setWidth(this.width),w?D>0&&j+$+u>this.right&&(v=f.y+=E,f.line++,j=f.x=ke(r,this.left+u,this.right-n[f.line])):D>0&&v+E>this.bottom&&(j=f.x=j+t[f.line].width+u,f.line++,v=f.y=ke(r,this.top+m+u,this.bottom-t[f.line].height));const A=l.x(j);if(p(A,v,O),j=tf(k,j+g+h,w?j+$:this.right,e.rtl),S(l.x(j),v,O),w)f.x+=$+u;else if(typeof O.text!="string"){const C=c.lineHeight;f.y+=eu(O,C)+u}else f.y+=E}),Pc(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,n=Se(t.font),s=Ge(t.padding);if(!t.display)return;const r=un(e.rtl,this.left,this.width),o=this.ctx,a=t.position,l=n.size/2,c=s.top+l;let u,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+c,d=ke(e.align,d,this.right-h);else{const g=this.columnSizes.reduce((y,x)=>Math.max(y,x.height),0);u=c+ke(e.align,this.top,this.bottom-g-e.labels.padding-this._computeTitleHeight())}const f=ke(a,d,d+h);o.textAlign=r.textAlign(co(a)),o.textBaseline="middle",o.strokeStyle=t.color,o.fillStyle=t.color,o.font=n.string,li(o,t.text,f,u,n)}_computeTitleHeight(){const e=this.options.title,t=Se(e.font),n=Ge(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,s,r;if(rn(e,this.left,this.right)&&rn(t,this.top,this.bottom)){for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(s=r[n],rn(e,s.left,s.left+s.width)&&rn(t,s.top,s.top+s.height))return this.legendItems[n]}return null}handleEvent(e){const t=this.options;if(!ag(e.type,t))return;const n=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=ig(s,n);s&&!r&&re(t.onLeave,[e,s,this],this),this._hoveredItem=n,n&&!r&&re(t.onHover,[e,n,this],this)}else n&&re(t.onClick,[e,n,this],this)}}function sg(i,e,t,n,s){const r=rg(n,i,e,t),o=og(s,n,e.lineHeight);return{itemWidth:r,itemHeight:o}}function rg(i,e,t,n){let s=i.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+t.size/2+n.measureText(s).width}function og(i,e,t){let n=i;return typeof e.text!="string"&&(n=eu(e,t)),n}function eu(i,e){const t=i.text?i.text.length:0;return e*t}function ag(i,e){return!!((i==="mousemove"||i==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(i==="click"||i==="mouseup"))}var lg={id:"legend",_element:fl,start(i,e,t){const n=i.legend=new fl({ctx:i.ctx,options:t,chart:i});Ke.configure(i,n,t),Ke.addBox(i,n)},stop(i){Ke.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,e,t){const n=i.legend;Ke.configure(i,n,t),n.options=t},afterUpdate(i){const e=i.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(i,e){e.replay||i.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,e,t){const n=e.datasetIndex,s=t.chart;s.isDatasetVisible(n)?(s.hide(n),e.hidden=!0):(s.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const e=i.data.datasets,{labels:{usePointStyle:t,pointStyle:n,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(t?0:void 0),u=Ge(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class tu extends vt{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const s=me(n.text)?n.text.length:1;this._padding=Ge(n.padding);const r=s*Se(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:n,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,u,d;return this.isHorizontal()?(u=ke(a,n,r),d=t+e,c=r-n):(o.position==="left"?(u=n+e,d=ke(a,s,t),l=ye*-.5):(u=r-e,d=ke(a,t,s),l=ye*.5),c=s-t),{titleX:u,titleY:d,maxWidth:c,rotation:l}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const n=Se(t.font),r=n.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);li(e,t.text,0,0,n,{color:t.color,maxWidth:l,rotation:c,textAlign:co(t.align),textBaseline:"middle",translation:[o,a]})}}function cg(i,e){const t=new tu({ctx:i.ctx,options:e,chart:i});Ke.configure(i,t,e),Ke.addBox(i,t),i.titleBlock=t}var ug={id:"title",_element:tu,start(i,e,t){cg(i,t)},stop(i){const e=i.titleBlock;Ke.removeBox(i,e),delete i.titleBlock},beforeUpdate(i,e,t){const n=i.titleBlock;Ke.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Vn={average(i){if(!i.length)return!1;let e,t,n=new Set,s=0,r=0;for(e=0,t=i.length;e<t;++e){const a=i[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();n.add(l.x),s+=l.y,++r}}return r===0||n.size===0?!1:{x:[...n].reduce((a,l)=>a+l)/n.size,y:s/r}},nearest(i,e){if(!i.length)return!1;let t=e.x,n=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=i.length;r<o;++r){const l=i[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Nr(e,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();t=l.x,n=l.y}return{x:t,y:n}}};function ot(i,e){return e&&(me(e)?Array.prototype.push.apply(i,e):i.push(e)),i}function mt(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function dg(i,e){const{element:t,datasetIndex:n,index:s}=e,r=i.getDatasetMeta(n).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:i,label:o,parsed:r.getParsed(s),raw:i.data.datasets[n].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:n,element:t}}function pl(i,e){const t=i.chart.ctx,{body:n,footer:s,title:r}=i,{boxWidth:o,boxHeight:a}=e,l=Se(e.bodyFont),c=Se(e.titleFont),u=Se(e.footerFont),d=r.length,h=s.length,f=n.length,g=Ge(e.padding);let y=g.height,x=0,p=n.reduce((m,E)=>m+E.before.length+E.lines.length+E.after.length,0);if(p+=i.beforeBody.length+i.afterBody.length,d&&(y+=d*c.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),p){const m=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;y+=f*m+(p-f)*l.lineHeight+(p-1)*e.bodySpacing}h&&(y+=e.footerMarginTop+h*u.lineHeight+(h-1)*e.footerSpacing);let S=0;const w=function(m){x=Math.max(x,t.measureText(m).width+S)};return t.save(),t.font=c.string,Z(i.title,w),t.font=l.string,Z(i.beforeBody.concat(i.afterBody),w),S=e.displayColors?o+2+e.boxPadding:0,Z(n,m=>{Z(m.before,w),Z(m.lines,w),Z(m.after,w)}),S=0,t.font=u.string,Z(i.footer,w),t.restore(),x+=g.width,{width:x,height:y}}function hg(i,e){const{y:t,height:n}=e;return t<n/2?"top":t>i.height-n/2?"bottom":"center"}function fg(i,e,t,n){const{x:s,width:r}=n,o=t.caretSize+t.caretPadding;if(i==="left"&&s+r+o>e.width||i==="right"&&s-r-o<0)return!0}function pg(i,e,t,n){const{x:s,width:r}=t,{width:o,chartArea:{left:a,right:l}}=i;let c="center";return n==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),fg(c,i,e,t)&&(c="center"),c}function ml(i,e,t){const n=t.yAlign||e.yAlign||hg(i,t);return{xAlign:t.xAlign||e.xAlign||pg(i,e,t,n),yAlign:n}}function mg(i,e){let{x:t,width:n}=i;return e==="right"?t-=n:e==="center"&&(t-=n/2),t}function gg(i,e,t){let{y:n,height:s}=i;return e==="top"?n+=t:e==="bottom"?n-=s+t:n-=s/2,n}function gl(i,e,t,n){const{caretSize:s,caretPadding:r,cornerRadius:o}=i,{xAlign:a,yAlign:l}=t,c=s+r,{topLeft:u,topRight:d,bottomLeft:h,bottomRight:f}=ti(o);let g=mg(e,a);const y=gg(e,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(u,h)+s:a==="right"&&(g+=Math.max(d,f)+s),{x:We(g,0,n.width-e.width),y:We(y,0,n.height-e.height)}}function zi(i,e,t){const n=Ge(t.padding);return e==="center"?i.x+i.width/2:e==="right"?i.x+i.width-n.right:i.x+n.left}function bl(i){return ot([],mt(i))}function bg(i,e,t){return Vt(i,{tooltip:e,tooltipItems:t,type:"tooltip"})}function yl(i,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?i.override(t):i}const nu={beforeTitle:ft,title(i){if(i.length>0){const e=i[0],t=e.chart.data.labels,n=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return t[e.dataIndex]}return""},afterTitle:ft,beforeBody:ft,beforeLabel:ft,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let e=i.dataset.label||"";e&&(e+=": ");const t=i.formattedValue;return fe(t)||(e+=t),e},labelColor(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:ft,afterBody:ft,beforeFooter:ft,footer:ft,afterFooter:ft};function Pe(i,e,t,n){const s=i[e].call(t,n);return typeof s>"u"?nu[e].call(t,n):s}class Br extends vt{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,n=this.options.setContext(this.getContext()),s=n.enabled&&t.options.animation&&n.animations,r=new $c(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=bg(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:n}=t,s=Pe(n,"beforeTitle",this,e),r=Pe(n,"title",this,e),o=Pe(n,"afterTitle",this,e);let a=[];return a=ot(a,mt(s)),a=ot(a,mt(r)),a=ot(a,mt(o)),a}getBeforeBody(e,t){return bl(Pe(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:n}=t,s=[];return Z(e,r=>{const o={before:[],lines:[],after:[]},a=yl(n,r);ot(o.before,mt(Pe(a,"beforeLabel",this,r))),ot(o.lines,Pe(a,"label",this,r)),ot(o.after,mt(Pe(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,t){return bl(Pe(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:n}=t,s=Pe(n,"beforeFooter",this,e),r=Pe(n,"footer",this,e),o=Pe(n,"afterFooter",this,e);let a=[];return a=ot(a,mt(s)),a=ot(a,mt(r)),a=ot(a,mt(o)),a}_createItems(e){const t=this._active,n=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=t.length;l<c;++l)a.push(dg(this.chart,t[l]));return e.filter&&(a=a.filter((u,d,h)=>e.filter(u,d,h,n))),e.itemSort&&(a=a.sort((u,d)=>e.itemSort(u,d,n))),Z(a,u=>{const d=yl(e.callbacks,u);s.push(Pe(d,"labelColor",this,u)),r.push(Pe(d,"labelPointStyle",this,u)),o.push(Pe(d,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,t){const n=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Vn[n.position].call(this,s,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const l=this._size=pl(this,n),c=Object.assign({},a,l),u=ml(this.chart,n,c),d=gl(n,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,s){const r=this.getCaretPosition(e,n,s);t.lineTo(r.x1,r.y1),t.lineTo(r.x2,r.y2),t.lineTo(r.x3,r.y3)}getCaretPosition(e,t,n){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:d}=ti(a),{x:h,y:f}=e,{width:g,height:y}=t;let x,p,S,w,m,E;return r==="center"?(m=f+y/2,s==="left"?(x=h,p=x-o,w=m+o,E=m-o):(x=h+g,p=x+o,w=m-o,E=m+o),S=x):(s==="left"?p=h+Math.max(l,u)+o:s==="right"?p=h+g-Math.max(c,d)-o:p=this.caretX,r==="top"?(w=f,m=w-o,x=p-o,S=p+o):(w=f+y,m=w+o,x=p+o,S=p-o),E=w),{x1:x,x2:p,x3:S,y1:w,y2:m,y3:E}}drawTitle(e,t,n){const s=this.title,r=s.length;let o,a,l;if(r){const c=un(n.rtl,this.x,this.width);for(e.x=zi(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline="middle",o=Se(n.titleFont),a=n.titleSpacing,t.fillStyle=n.titleColor,t.font=o.string,l=0;l<r;++l)t.fillText(s[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===r&&(e.y+=n.titleMarginBottom-a)}}_drawColorBox(e,t,n,s,r){const o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=r,u=Se(r.bodyFont),d=zi(this,"left",r),h=s.x(d),f=l<u.lineHeight?(u.lineHeight-l)/2:0,g=t.y+f;if(r.usePointStyle){const y={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},x=s.leftForLtr(h,c)+c/2,p=g+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Or(e,y,x,p),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Or(e,y,x,p)}else{e.lineWidth=Y(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const y=s.leftForLtr(h,c),x=s.leftForLtr(s.xPlus(h,1),c-2),p=ti(o.borderRadius);Object.values(p).some(S=>S!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Lr(e,{x:y,y:g,w:c,h:l,radius:p}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Lr(e,{x,y:g+1,w:c-2,h:l-2,radius:p}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(y,g,c,l),e.strokeRect(y,g,c,l),e.fillStyle=o.backgroundColor,e.fillRect(x,g+1,c-2,l-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=n,d=Se(n.bodyFont);let h=d.lineHeight,f=0;const g=un(n.rtl,this.x,this.width),y=function(N){t.fillText(N,g.x(e.x+f),e.y+h/2),e.y+=h+r},x=g.textAlign(o);let p,S,w,m,E,O,D;for(t.textAlign=o,t.textBaseline="middle",t.font=d.string,e.x=zi(this,x,n),t.fillStyle=n.bodyColor,Z(this.beforeBody,y),f=a&&x!=="right"?o==="center"?c/2+u:c+2+u:0,m=0,O=s.length;m<O;++m){for(p=s[m],S=this.labelTextColors[m],t.fillStyle=S,Z(p.before,y),w=p.lines,a&&w.length&&(this._drawColorBox(t,e,m,g,n),h=Math.max(d.lineHeight,l)),E=0,D=w.length;E<D;++E)y(w[E]),h=d.lineHeight;Z(p.after,y)}f=0,h=d.lineHeight,Z(this.afterBody,y),e.y-=r}drawFooter(e,t,n){const s=this.footer,r=s.length;let o,a;if(r){const l=un(n.rtl,this.x,this.width);for(e.x=zi(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=l.textAlign(n.footerAlign),t.textBaseline="middle",o=Se(n.footerFont),t.fillStyle=n.footerColor,t.font=o.string,a=0;a<r;++a)t.fillText(s[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+n.footerSpacing}}drawBackground(e,t,n,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=n,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:g}=ti(s.cornerRadius);t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.beginPath(),t.moveTo(a+d,l),o==="top"&&this.drawCaret(e,t,n,s),t.lineTo(a+c-h,l),t.quadraticCurveTo(a+c,l,a+c,l+h),o==="center"&&r==="right"&&this.drawCaret(e,t,n,s),t.lineTo(a+c,l+u-g),t.quadraticCurveTo(a+c,l+u,a+c-g,l+u),o==="bottom"&&this.drawCaret(e,t,n,s),t.lineTo(a+f,l+u),t.quadraticCurveTo(a,l+u,a,l+u-f),o==="center"&&r==="left"&&this.drawCaret(e,t,n,s),t.lineTo(a,l+d),t.quadraticCurveTo(a,l,a+d,l),t.closePath(),t.fill(),s.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,n=this.$animations,s=n&&n.x,r=n&&n.y;if(s||r){const o=Vn[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=pl(this,e),l=Object.assign({},o,this._size),c=ml(t,e,l),u=gl(e,l,c,t);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(t);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=Ge(t.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&a&&(e.save(),e.globalAlpha=n,this.drawBackground(r,e,s,t),Dc(e,t.textDirection),r.y+=o.top,this.drawTitle(r,e,t),this.drawBody(r,e,t),this.drawFooter(r,e,t),Pc(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const n=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!os(n,s),o=this._positionChanged(s,t);(r||o)&&(this._active=s,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,t,n),a=this._positionChanged(o,e),l=t||!os(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),l}_getActiveElements(e,t,n,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return t.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,r.mode,r,n);return r.reverse&&o.reverse(),o}_positionChanged(e,t){const{caretX:n,caretY:s,options:r}=this,o=Vn[r.position].call(this,e,t);return o!==!1&&(n!==o.x||s!==o.y)}}L(Br,"positioners",Vn);var yg={id:"tooltip",_element:Br,positioners:Vn,afterInit(i,e,t){t&&(i.tooltip=new Br({chart:i,options:t}))},beforeUpdate(i,e,t){i.tooltip&&i.tooltip.initialize(t)},reset(i,e,t){i.tooltip&&i.tooltip.initialize(t)},afterDraw(i){const e=i.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(i.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",t)}},afterEvent(i,e){if(i.tooltip){const t=e.replay;i.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,e)=>e.bodyFont.size,boxWidth:(i,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:nu},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const xg=(i,e,t,n)=>(typeof e=="string"?(t=i.push(e)-1,n.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function vg(i,e,t,n){const s=i.indexOf(e);if(s===-1)return xg(i,e,t,n);const r=i.lastIndexOf(e);return s!==r?t:s}const wg=(i,e)=>i===null?null:We(Math.round(i),0,e);function xl(i){const e=this.getLabels();return i>=0&&i<e.length?e[i]:i}class $r extends xn{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const n=this.getLabels();for(const{index:s,label:r}of t)n[s]===r&&n.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(fe(e))return null;const n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:vg(n,e,q(t,e),this._addedLabels),wg(t,n.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:n,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(n=0),t||(s=this.getLabels().length-1)),this.min=n,this.max=s}buildTicks(){const e=this.min,t=this.max,n=this.options.offset,s=[];let r=this.getLabels();r=e===0&&t===r.length-1?r:r.slice(e,t+1),this._valueRange=Math.max(r.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=e;o<=t;o++)s.push({value:o});return s}getLabelForValue(e){return xl.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}L($r,"id","category"),L($r,"defaults",{ticks:{callback:xl}});function _g(i,e){const t=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:d,includeBounds:h}=i,f=r||1,g=u-1,{min:y,max:x}=e,p=!fe(o),S=!fe(a),w=!fe(c),m=(x-y)/(d+1);let E=xa((x-y)/g/f)*f,O,D,N,k;if(E<1e-14&&!p&&!S)return[{value:y},{value:x}];k=Math.ceil(x/E)-Math.floor(y/E),k>g&&(E=xa(k*E/g/f)*f),fe(l)||(O=Math.pow(10,l),E=Math.ceil(E*O)/O),s==="ticks"?(D=Math.floor(y/E)*E,N=Math.ceil(x/E)*E):(D=y,N=x),p&&S&&r&&Wh((a-o)/r,E/1e3)?(k=Math.round(Math.min((a-o)/E,u)),E=(a-o)/k,D=o,N=a):w?(D=p?o:D,N=S?a:N,k=c-1,E=(N-D)/k):(k=(N-D)/E,Qn(k,Math.round(k),E/1e3)?k=Math.round(k):k=Math.ceil(k));const $=Math.max(va(E),va(D));O=Math.pow(10,fe(l)?$:l),D=Math.round(D*O)/O,N=Math.round(N*O)/O;let j=0;for(p&&(h&&D!==o?(t.push({value:o}),D<o&&j++,Qn(Math.round((D+j*E)*O)/O,o,vl(o,m,i))&&j++):D<o&&j++);j<k;++j){const v=Math.round((D+j*E)*O)/O;if(S&&v>a)break;t.push({value:v})}return S&&h&&N!==a?t.length&&Qn(t[t.length-1].value,a,vl(a,m,i))?t[t.length-1].value=a:t.push({value:a}):(!S||N===a)&&t.push({value:N}),t}function vl(i,e,{horizontal:t,minRotation:n}){const s=Pt(n),r=(t?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+i).length;return Math.min(e/r,o)}class kg extends xn{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return fe(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=t?s:l,a=l=>r=n?r:l;if(e){const l=pn(s),c=pn(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||o(s-l)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:n}=e,s;return n?(s=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),t=t||11),t&&(s=Math.min(t,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let n=this.getTickLimit();n=Math.max(2,n);const s={maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},r=this._range||this,o=_g(s,r);return e.bounds==="ticks"&&Kh(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){const s=(n-t)/Math.max(e.length-1,1)/2;t-=s,n+=s}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Sc(e,this.chart.options.locale,this.options.ticks.format)}}class zr extends kg{determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=Te(e)?e:0,this.max=Te(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,n=Pt(this.options.ticks.minRotation),s=(e?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}L(zr,"id","linear"),L(zr,"defaults",{ticks:{callback:Tc.formatters.numeric}});const Ss={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Fe=Object.keys(Ss);function wl(i,e){return i-e}function _l(i,e){if(fe(e))return null;const t=i._adapter,{parser:n,round:s,isoWeekday:r}=i._parseOpts;let o=e;return typeof n=="function"&&(o=n(o)),Te(o)||(o=typeof n=="string"?t.parse(o,n):t.parse(o)),o===null?null:(s&&(o=s==="week"&&(oi(r)||r===!0)?t.startOf(o,"isoWeek",r):t.startOf(o,s)),+o)}function kl(i,e,t,n){const s=Fe.length;for(let r=Fe.indexOf(i);r<s-1;++r){const o=Ss[Fe[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((t-e)/(a*o.size))<=n)return Fe[r]}return Fe[s-1]}function Sg(i,e,t,n,s){for(let r=Fe.length-1;r>=Fe.indexOf(t);r--){const o=Fe[r];if(Ss[o].common&&i._adapter.diff(s,n,o)>=e-1)return o}return Fe[t?Fe.indexOf(t):0]}function Eg(i){for(let e=Fe.indexOf(i)+1,t=Fe.length;e<t;++e)if(Ss[Fe[e]].common)return Fe[e]}function Sl(i,e,t){if(!t)i[e]=!0;else if(t.length){const{lo:n,hi:s}=lo(t,e),r=t[n]>=e?t[n]:t[s];i[r]=!0}}function Tg(i,e,t,n){const s=i._adapter,r=+s.startOf(e[0].value,n),o=e[e.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,n))l=t[a],l>=0&&(e[l].major=!0);return e}function El(i,e,t){const n=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,n.push({value:a,major:!1});return r===0||!t?n:Tg(i,n,s,t)}class fs extends xn{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const n=e.time||(e.time={}),s=this._adapter=new yp._date(e.adapters.date);s.init(t),Xn(n.displayFormats,s.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:_l(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,n=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Te(s)&&!isNaN(s)?s:+t.startOf(Date.now(),n),r=Te(r)&&!isNaN(r)?r:+t.endOf(Date.now(),n)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){const e=this.options,t=e.time,n=e.ticks,s=n.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=Xh(s,r,o);return this._unit=t.unit||(n.autoSkip?kl(t.minUnit,this.min,this.max,this._getLabelCapacity(r)):Sg(this,a.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:Eg(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),El(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?t=1-s:t=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?n=r:n=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;t=We(t,0,o),n=We(n,0,o),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){const e=this._adapter,t=this.min,n=this.max,s=this.options,r=s.time,o=r.unit||kl(r.minUnit,t,n,this._getLabelCapacity(t)),a=q(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=oi(l)||l===!0,u={};let d=t,h,f;if(c&&(d=+e.startOf(d,"isoWeek",l)),d=+e.startOf(d,c?"day":o),e.diff(n,t,o)>1e5*a)throw new Error(t+" and "+n+" are too far apart with stepSize of "+a+" "+o);const g=s.ticks.source==="data"&&this.getDataTimestamps();for(h=d,f=0;h<n;h=+e.add(h,a,o),f++)Sl(u,h,g);return(h===n||s.bounds==="ticks"||f===1)&&Sl(u,h,g),Object.keys(u).sort(wl).map(y=>+y)}getLabelForValue(e){const t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){const s=this.options.time.displayFormats,r=this._unit,o=t||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,t,n,s){const r=this.options,o=r.ticks.callback;if(o)return re(o,[e,t,n],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],d=c&&a[c],h=n[t],f=c&&d&&h&&h.major;return this._adapter.format(e,s||(f?d:u))}generateTickLabels(e){let t,n,s;for(t=0,n=e.length;t<n;++t)s=e[t],s.label=this._tickFormatFunction(s.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,n=this.ctx.measureText(e).width,s=Pt(this.isHorizontal()?t.maxRotation:t.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:n*r+a*o,h:n*o+a*r}}_getLabelCapacity(e){const t=this.options.time,n=t.displayFormats,s=n[t.unit]||n.millisecond,r=this._tickFormatFunction(e,0,El(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,n=s.length;t<n;++t)e=e.concat(s[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,n;if(e.length)return e;const s=this.getLabels();for(t=0,n=s.length;t<n;++t)e.push(_l(this,s[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Zh(e.sort(wl))}}L(fs,"id","time"),L(fs,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ji(i,e,t){let n=0,s=i.length-1,r,o,a,l;t?(e>=i[n].pos&&e<=i[s].pos&&({lo:n,hi:s}=Rt(i,"pos",e)),{pos:r,time:a}=i[n],{pos:o,time:l}=i[s]):(e>=i[n].time&&e<=i[s].time&&({lo:n,hi:s}=Rt(i,"time",e)),{time:r,pos:a}=i[n],{time:o,pos:l}=i[s]);const c=o-r;return c?a+(l-a)*(e-r)/c:a}class Tl extends fs{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=ji(t,this.min),this._tableRange=ji(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:n}=this,s=[],r=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=t&&c<=n&&s.push(c);if(s.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],l=s[o-1],c=s[o],Math.round((u+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const e=this.min,t=this.max;let n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((s,r)=>s-r)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),n=this.getLabelTimestamps();return t.length&&n.length?e=this.normalize(t.concat(n)):e=t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(ji(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return ji(this._table,n*this._tableRange+this._minPos,!0)}}L(Tl,"id","timeseries"),L(Tl,"defaults",fs.defaults);bt.register(Yi,_t,Qi,zr,$r,lg,ug,yg,ng);class Ag{constructor(){L(this,"id","compound-interest-calculator");L(this,"name","Compound Interest Calculator");L(this,"description","Calculate compound interest with various compounding frequencies");L(this,"seoMetadata",{title:"Free Compound Interest Calculator Online",description:"Calculate compound interest easily with this free calculator. Features multiple compounding frequencies, detailed results, and investment growth projections.",keywords:["compound interest calculator","investment calculator","interest rate calculator","savings calculator","financial calculator","investment growth calculator"]});L(this,"chart",null)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="calculator-container">
        <div class="calculator-form">
          <div class="form-group">
            <label for="initialAmount">Initial Amount ($)</label>
            <input type="number" id="initialAmount" value="1000" min="0" step="100">
          </div>
          <div class="form-group">
            <label for="periodicInvestment">Periodic Investment ($)</label>
            <input type="number" id="periodicInvestment" value="100" min="0" step="50">
          </div>
          <div class="form-group">
            <label for="interestRate">Interest Rate per <span id="interestRatePeriod">Year</span> (%)</label>
            <input type="number" id="interestRate" value="7" min="0" max="100" step="0.1">
          </div>
          <div class="form-group">
            <label for="periodType">Compound Period</label>
            <select id="periodType">
              <option value="yearly" selected>Yearly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div class="form-group">
            <label for="timeSpan">Time Span (<span id="timeSpanPeriod">Years</span>)</label>
            <input type="number" id="timeSpan" value="10" min="1" max="50" step="1">
          </div>
          <button id="calculateBtn" class="button">Calculate</button>
        </div>
        <div class="results-section">
          <div class="total-amount">
            <h3>Final Amount</h3>
            <p id="finalAmount">$0.00</p>
            <div class="breakdown">
              <p>Initial Investment: <span id="initialInvestmentText">$0.00</span></p>
              <p>Total Contributions: <span id="totalContributionsText">$0.00</span></p>
              <p>Total Interest Earned: <span id="totalInterestText">$0.00</span></p>
            </div>
          </div>
          <div class="chart-container">
            <canvas id="growthChart"></canvas>
          </div>
        </div>
      </div>
    `,this.addStyles(),this.setupCalculator())}setupCalculator(){const e=document.getElementById("calculateBtn"),t=document.getElementById("periodType"),n=document.getElementById("interestRatePeriod"),s=document.getElementById("timeSpanPeriod");!e||!t||!n||!s||(t.addEventListener("change",()=>{const r=t.value==="yearly";n.textContent=r?"Year":"Month",s.textContent=r?"Years":"Months";const o=document.getElementById("interestRate");if(o){const a=parseFloat(o.value);isNaN(a)||(r?o.value=(a*12).toFixed(1):o.value=(a/12).toFixed(1))}e.click()}),e.addEventListener("click",()=>{const r=parseFloat(document.getElementById("initialAmount").value),o=parseFloat(document.getElementById("periodicInvestment").value),a=parseFloat(document.getElementById("interestRate").value),l=t.value,c=parseInt(document.getElementById("timeSpan").value);this.calculateAndDisplayResults(r,o,a,l,c)}),e.click())}calculateAndDisplayResults(e,t,n,s,r){const o=s==="yearly",a=r,l=n/100;let c=e;const u=[{period:0,amount:c,contributions:e,interest:0}];let d=e;for(let h=1;h<=a;h++){const f=c*l;c=c+f+t,d+=t,u.push({period:o?h:h/12,amount:c,contributions:d,interest:c-d})}this.updateDisplay(u[u.length-1],u,o)}updateDisplay(e,t,n){const s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2});document.getElementById("finalAmount").textContent=s.format(e.amount),document.getElementById("initialInvestmentText").textContent=s.format(t[0].amount),document.getElementById("totalContributionsText").textContent=s.format(e.contributions),document.getElementById("totalInterestText").textContent=s.format(e.interest),this.updateChart(t,n)}updateChart(e,t){const n=document.getElementById("growthChart").getContext("2d");if(!n)return;this.chart&&this.chart.destroy();const s=t?"Year":"Month";this.chart=new bt(n,{type:"line",data:{labels:e.map(r=>`${s} ${Math.floor(r.period)}`),datasets:[{label:"Total Amount",data:e.map(r=>r.amount),borderColor:"#646cff",backgroundColor:"#646cff33",fill:!0},{label:"Total Contributions",data:e.map(r=>r.contributions),borderColor:"#64ff7c",backgroundColor:"#64ff7c33",fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{title:{display:!0,text:"Investment Growth Over Time"},tooltip:{callbacks:{label:function(r){const o=r.raw;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(o)}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(r){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",notation:"compact"}).format(r)}}}}}})}addStyles(){const e=document.createElement("style");e.textContent=`
      .calculator-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
      }

      .calculator-form {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .form-group label {
        font-weight: 500;
        color: var(--text);
      }

      .form-group input,
      .form-group select {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 1rem;
      }

      .results-section {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .total-amount {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .total-amount h3 {
        font-size: 1.2rem;
        color: var(--text);
        margin: 0;
      }

      #finalAmount {
        font-size: 2rem;
        font-weight: 600;
        color: var(--primary);
        margin: 0;
      }

      .breakdown {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border);
      }

      .breakdown p {
        display: flex;
        justify-content: space-between;
        margin: 0;
      }

      .chart-container {
        height: 400px;
        position: relative;
      }

      @media (max-width: 768px) {
        .results-section {
          grid-template-columns: 1fr;
        }

        .chart-container {
          height: 300px;
        }
      }
    `,document.head.appendChild(e)}}class Cg{constructor(){L(this,"id","base64-tool");L(this,"name","Base64 Encoder/Decoder");L(this,"description","Convert text to Base64 and decode Base64 to text");L(this,"seoMetadata",{title:"Free Online Base64 Encoder and Decoder Tool",description:"Convert your text to Base64 and decode Base64 strings with this free online tool. Fast, secure, and works directly in your browser.",keywords:["base64 encoder","base64 decoder","base64 converter","text to base64","base64 to text","online base64"]});L(this,"lastInput","");L(this,"lastOutput","");L(this,"currentMode","encode")}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="base64-container">
        <div class="toolbar">
          <div class="toolbar-left">
            <div class="mode-toggle">
              <button id="encodeMode" class="button mode-button active">Encode</button>
              <button id="decodeMode" class="button mode-button">Decode</button>
            </div>
          </div>
          <div class="toolbar-right">
            <button id="copyInput" class="button">Copy Input</button>
            <button id="copyOutput" class="button">Copy Output</button>
            <button id="clearAll" class="button">Clear All</button>
          </div>
        </div>
        <div class="content-container">
          <div class="input-section">
            <div class="section-header">
              <h3 id="inputLabel">Text to Encode</h3>
              <div class="file-input-container">
                <label for="fileInput" class="file-label">
                  Or choose a file
                  <input type="file" id="fileInput" class="file-input">
                </label>
              </div>
            </div>
            <textarea 
              id="inputText" 
              class="text-area" 
              placeholder="Enter text to encode or paste Base64 to decode..."
              spellcheck="false"
            ></textarea>
          </div>
          <div class="output-section">
            <div class="section-header">
              <h3 id="outputLabel">Base64 Output</h3>
            </div>
            <textarea 
              id="outputText" 
              class="text-area" 
              readonly 
              spellcheck="false"
            ></textarea>
          </div>
        </div>
      </div>
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.getElementById("encodeMode"),t=document.getElementById("decodeMode"),n=document.getElementById("inputText"),s=document.getElementById("outputText"),r=document.getElementById("copyInput"),o=document.getElementById("copyOutput"),a=document.getElementById("clearAll"),l=document.getElementById("fileInput"),c=document.getElementById("inputLabel"),u=document.getElementById("outputLabel");!e||!t||!n||!s||!r||!o||!a||!l||!c||!u||(e.addEventListener("click",()=>{this.currentMode="encode",e.classList.add("active"),t.classList.remove("active"),c.textContent="Text to Encode",u.textContent="Base64 Output",this.processInput(n.value)}),t.addEventListener("click",()=>{this.currentMode="decode",t.classList.add("active"),e.classList.remove("active"),c.textContent="Base64 to Decode",u.textContent="Decoded Output",this.processInput(n.value)}),n.addEventListener("input",d=>{const h=d.target.value;this.processInput(h)}),r.addEventListener("click",()=>{navigator.clipboard.writeText(n.value).then(()=>this.showToast("Input copied to clipboard!")).catch(()=>this.showToast("Failed to copy input"))}),o.addEventListener("click",()=>{navigator.clipboard.writeText(s.value).then(()=>this.showToast("Output copied to clipboard!")).catch(()=>this.showToast("Failed to copy output"))}),a.addEventListener("click",()=>{n.value="",s.value="",this.lastInput="",this.lastOutput="",this.showToast("Content cleared")}),l.addEventListener("change",async d=>{var f;const h=(f=d.target.files)==null?void 0:f[0];if(h)try{const g=new FileReader;this.currentMode==="encode"?(h.type.startsWith("text/")||h.name.endsWith(".txt")?g.readAsText(h):g.readAsArrayBuffer(h),g.onload=()=>{let y="";if(typeof g.result=="string")y=g.result;else if(g.result instanceof ArrayBuffer){const x=new Uint8Array(g.result);y=String.fromCharCode(...x)}n.value=y,this.processInput(y)}):(g.readAsText(h),g.onload=()=>{typeof g.result=="string"&&(n.value=g.result,this.processInput(g.result))}),g.onerror=()=>{this.showToast("Error reading file")}}catch(g){this.showToast("Error processing file"),console.error("File processing error:",g)}}))}processInput(e){const t=document.getElementById("outputText");if(t&&e!==this.lastInput){this.lastInput=e;try{if(this.currentMode==="encode")this.lastOutput=btoa(e);else try{this.lastOutput=atob(e)}catch{const n=e.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"");this.lastOutput=atob(n)}t.value=this.lastOutput,this.clearError()}catch{e?this.showError(this.currentMode==="decode"?"Invalid Base64 string":"Text contains invalid characters"):(this.clearError(),t.value="")}}}showError(e){const t=document.getElementById("outputText");t&&(t.classList.add("error"),t.value=`Error: ${e}`)}clearError(){const e=document.getElementById("outputText");e&&e.classList.remove("error")}showToast(e){const t=document.querySelector(".base64-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .base64-container {
        display: flex;
        flex-direction: column;
        height: calc(90vh - 120px);
        gap: 1rem;
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        width: 100%;
      }

      .toolbar-left,
      .toolbar-right {
        display: flex;
        gap: 0.5rem;
      }

      .mode-toggle {
        display: flex;
        gap: 0.5rem;
      }

      .mode-button {
        border-radius: 4px;
        border: 1px solid var(--border);
        position: relative;
        background: var(--background);
      }

      .mode-button:hover {
        border-color: var(--primary);
      }

      .mode-button.active {
        background-color: var(--primary);
        border-color: var(--primary);
        font-weight: 500;
        box-shadow: 0 0 0 1px var(--primary);
      }

      .content-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;
        min-height: 0;
      }

      .input-section,
      .output-section {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      }

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .section-header h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
      }

      .text-area {
        flex: 1;
        min-height: 0;
        padding: 1rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        resize: none;
      }

      .text-area:focus {
        outline: none;
        border-color: var(--primary);
      }

      .text-area.error {
        color: #f44336;
      }

      .file-input-container {
        display: flex;
        align-items: center;
      }

      .file-label {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: border-color 0.2s;
      }

      .file-label:hover {
        border-color: var(--primary);
      }

      .file-input {
        display: none;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
    `,document.head.appendChild(e)}}var Ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ng(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Mg(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var ar={exports:{}};const Og={},Lg=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),ps=Mg(Lg);/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */var Al;function Dg(){return Al||(Al=1,function(i){(function(){var e="input is invalid type",t="finalize already called",n=typeof window=="object",s=n?window:{};s.JS_MD5_NO_WINDOW&&(n=!1);var r=!n&&typeof self=="object",o=!s.JS_MD5_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;o?s=Ig:r&&(s=self);var a=!s.JS_MD5_NO_COMMON_JS&&!0&&i.exports,l=!s.JS_MD5_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",c="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],d=[0,8,16,24],h=["hex","array","digest","buffer","arrayBuffer","base64"],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),g=[],y;if(l){var x=new ArrayBuffer(68);y=new Uint8Array(x),g=new Uint32Array(x)}var p=Array.isArray;(s.JS_MD5_NO_NODE_JS||!p)&&(p=function(v){return Object.prototype.toString.call(v)==="[object Array]"});var S=ArrayBuffer.isView;l&&(s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW||!S)&&(S=function(v){return typeof v=="object"&&v.buffer&&v.buffer.constructor===ArrayBuffer});var w=function(v){var A=typeof v;if(A==="string")return[v,!0];if(A!=="object"||v===null)throw new Error(e);if(l&&v.constructor===ArrayBuffer)return[new Uint8Array(v),!1];if(!p(v)&&!S(v))throw new Error(e);return[v,!1]},m=function(v){return function(A){return new k(!0).update(A)[v]()}},E=function(){var v=m("hex");o&&(v=O(v)),v.create=function(){return new k},v.update=function(T){return v.create().update(T)};for(var A=0;A<h.length;++A){var C=h[A];v[C]=m(C)}return v},O=function(v){var A=ps,C=ps.Buffer,T;C.from&&!s.JS_MD5_NO_BUFFER_FROM?T=C.from:T=function(P){return new C(P)};var z=function(P){if(typeof P=="string")return A.createHash("md5").update(P,"utf8").digest("hex");if(P==null)throw new Error(e);return P.constructor===ArrayBuffer&&(P=new Uint8Array(P)),p(P)||S(P)||P.constructor===C?A.createHash("md5").update(T(P)).digest("hex"):v(P)};return z},D=function(v){return function(A,C){return new $(A,!0).update(C)[v]()}},N=function(){var v=D("hex");v.create=function(T){return new $(T)},v.update=function(T,z){return v.create(T).update(z)};for(var A=0;A<h.length;++A){var C=h[A];v[C]=D(C)}return v};function k(v){if(v)g[0]=g[16]=g[1]=g[2]=g[3]=g[4]=g[5]=g[6]=g[7]=g[8]=g[9]=g[10]=g[11]=g[12]=g[13]=g[14]=g[15]=0,this.blocks=g,this.buffer8=y;else if(l){var A=new ArrayBuffer(68);this.buffer8=new Uint8Array(A),this.blocks=new Uint32Array(A)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}k.prototype.update=function(v){if(this.finalized)throw new Error(t);var A=w(v);v=A[0];for(var C=A[1],T,z=0,P,F=v.length,U=this.blocks,ee=this.buffer8;z<F;){if(this.hashed&&(this.hashed=!1,U[0]=U[16],U[16]=U[1]=U[2]=U[3]=U[4]=U[5]=U[6]=U[7]=U[8]=U[9]=U[10]=U[11]=U[12]=U[13]=U[14]=U[15]=0),C)if(l)for(P=this.start;z<F&&P<64;++z)T=v.charCodeAt(z),T<128?ee[P++]=T:T<2048?(ee[P++]=192|T>>>6,ee[P++]=128|T&63):T<55296||T>=57344?(ee[P++]=224|T>>>12,ee[P++]=128|T>>>6&63,ee[P++]=128|T&63):(T=65536+((T&1023)<<10|v.charCodeAt(++z)&1023),ee[P++]=240|T>>>18,ee[P++]=128|T>>>12&63,ee[P++]=128|T>>>6&63,ee[P++]=128|T&63);else for(P=this.start;z<F&&P<64;++z)T=v.charCodeAt(z),T<128?U[P>>>2]|=T<<d[P++&3]:T<2048?(U[P>>>2]|=(192|T>>>6)<<d[P++&3],U[P>>>2]|=(128|T&63)<<d[P++&3]):T<55296||T>=57344?(U[P>>>2]|=(224|T>>>12)<<d[P++&3],U[P>>>2]|=(128|T>>>6&63)<<d[P++&3],U[P>>>2]|=(128|T&63)<<d[P++&3]):(T=65536+((T&1023)<<10|v.charCodeAt(++z)&1023),U[P>>>2]|=(240|T>>>18)<<d[P++&3],U[P>>>2]|=(128|T>>>12&63)<<d[P++&3],U[P>>>2]|=(128|T>>>6&63)<<d[P++&3],U[P>>>2]|=(128|T&63)<<d[P++&3]);else if(l)for(P=this.start;z<F&&P<64;++z)ee[P++]=v[z];else for(P=this.start;z<F&&P<64;++z)U[P>>>2]|=v[z]<<d[P++&3];this.lastByteIndex=P,this.bytes+=P-this.start,P>=64?(this.start=P-64,this.hash(),this.hashed=!0):this.start=P}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},k.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var v=this.blocks,A=this.lastByteIndex;v[A>>>2]|=u[A&3],A>=56&&(this.hashed||this.hash(),v[0]=v[16],v[16]=v[1]=v[2]=v[3]=v[4]=v[5]=v[6]=v[7]=v[8]=v[9]=v[10]=v[11]=v[12]=v[13]=v[14]=v[15]=0),v[14]=this.bytes<<3,v[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},k.prototype.hash=function(){var v,A,C,T,z,P,F=this.blocks;this.first?(v=F[0]-680876937,v=(v<<7|v>>>25)-271733879<<0,T=(-1732584194^v&2004318071)+F[1]-117830708,T=(T<<12|T>>>20)+v<<0,C=(-271733879^T&(v^-271733879))+F[2]-1126478375,C=(C<<17|C>>>15)+T<<0,A=(v^C&(T^v))+F[3]-1316259209,A=(A<<22|A>>>10)+C<<0):(v=this.h0,A=this.h1,C=this.h2,T=this.h3,v+=(T^A&(C^T))+F[0]-680876936,v=(v<<7|v>>>25)+A<<0,T+=(C^v&(A^C))+F[1]-389564586,T=(T<<12|T>>>20)+v<<0,C+=(A^T&(v^A))+F[2]+606105819,C=(C<<17|C>>>15)+T<<0,A+=(v^C&(T^v))+F[3]-1044525330,A=(A<<22|A>>>10)+C<<0),v+=(T^A&(C^T))+F[4]-176418897,v=(v<<7|v>>>25)+A<<0,T+=(C^v&(A^C))+F[5]+1200080426,T=(T<<12|T>>>20)+v<<0,C+=(A^T&(v^A))+F[6]-1473231341,C=(C<<17|C>>>15)+T<<0,A+=(v^C&(T^v))+F[7]-45705983,A=(A<<22|A>>>10)+C<<0,v+=(T^A&(C^T))+F[8]+1770035416,v=(v<<7|v>>>25)+A<<0,T+=(C^v&(A^C))+F[9]-1958414417,T=(T<<12|T>>>20)+v<<0,C+=(A^T&(v^A))+F[10]-42063,C=(C<<17|C>>>15)+T<<0,A+=(v^C&(T^v))+F[11]-1990404162,A=(A<<22|A>>>10)+C<<0,v+=(T^A&(C^T))+F[12]+1804603682,v=(v<<7|v>>>25)+A<<0,T+=(C^v&(A^C))+F[13]-40341101,T=(T<<12|T>>>20)+v<<0,C+=(A^T&(v^A))+F[14]-1502002290,C=(C<<17|C>>>15)+T<<0,A+=(v^C&(T^v))+F[15]+1236535329,A=(A<<22|A>>>10)+C<<0,v+=(C^T&(A^C))+F[1]-165796510,v=(v<<5|v>>>27)+A<<0,T+=(A^C&(v^A))+F[6]-1069501632,T=(T<<9|T>>>23)+v<<0,C+=(v^A&(T^v))+F[11]+643717713,C=(C<<14|C>>>18)+T<<0,A+=(T^v&(C^T))+F[0]-373897302,A=(A<<20|A>>>12)+C<<0,v+=(C^T&(A^C))+F[5]-701558691,v=(v<<5|v>>>27)+A<<0,T+=(A^C&(v^A))+F[10]+38016083,T=(T<<9|T>>>23)+v<<0,C+=(v^A&(T^v))+F[15]-660478335,C=(C<<14|C>>>18)+T<<0,A+=(T^v&(C^T))+F[4]-405537848,A=(A<<20|A>>>12)+C<<0,v+=(C^T&(A^C))+F[9]+568446438,v=(v<<5|v>>>27)+A<<0,T+=(A^C&(v^A))+F[14]-1019803690,T=(T<<9|T>>>23)+v<<0,C+=(v^A&(T^v))+F[3]-187363961,C=(C<<14|C>>>18)+T<<0,A+=(T^v&(C^T))+F[8]+1163531501,A=(A<<20|A>>>12)+C<<0,v+=(C^T&(A^C))+F[13]-1444681467,v=(v<<5|v>>>27)+A<<0,T+=(A^C&(v^A))+F[2]-51403784,T=(T<<9|T>>>23)+v<<0,C+=(v^A&(T^v))+F[7]+1735328473,C=(C<<14|C>>>18)+T<<0,A+=(T^v&(C^T))+F[12]-1926607734,A=(A<<20|A>>>12)+C<<0,z=A^C,v+=(z^T)+F[5]-378558,v=(v<<4|v>>>28)+A<<0,T+=(z^v)+F[8]-2022574463,T=(T<<11|T>>>21)+v<<0,P=T^v,C+=(P^A)+F[11]+1839030562,C=(C<<16|C>>>16)+T<<0,A+=(P^C)+F[14]-35309556,A=(A<<23|A>>>9)+C<<0,z=A^C,v+=(z^T)+F[1]-1530992060,v=(v<<4|v>>>28)+A<<0,T+=(z^v)+F[4]+1272893353,T=(T<<11|T>>>21)+v<<0,P=T^v,C+=(P^A)+F[7]-155497632,C=(C<<16|C>>>16)+T<<0,A+=(P^C)+F[10]-1094730640,A=(A<<23|A>>>9)+C<<0,z=A^C,v+=(z^T)+F[13]+681279174,v=(v<<4|v>>>28)+A<<0,T+=(z^v)+F[0]-358537222,T=(T<<11|T>>>21)+v<<0,P=T^v,C+=(P^A)+F[3]-722521979,C=(C<<16|C>>>16)+T<<0,A+=(P^C)+F[6]+76029189,A=(A<<23|A>>>9)+C<<0,z=A^C,v+=(z^T)+F[9]-640364487,v=(v<<4|v>>>28)+A<<0,T+=(z^v)+F[12]-421815835,T=(T<<11|T>>>21)+v<<0,P=T^v,C+=(P^A)+F[15]+530742520,C=(C<<16|C>>>16)+T<<0,A+=(P^C)+F[2]-995338651,A=(A<<23|A>>>9)+C<<0,v+=(C^(A|~T))+F[0]-198630844,v=(v<<6|v>>>26)+A<<0,T+=(A^(v|~C))+F[7]+1126891415,T=(T<<10|T>>>22)+v<<0,C+=(v^(T|~A))+F[14]-1416354905,C=(C<<15|C>>>17)+T<<0,A+=(T^(C|~v))+F[5]-57434055,A=(A<<21|A>>>11)+C<<0,v+=(C^(A|~T))+F[12]+1700485571,v=(v<<6|v>>>26)+A<<0,T+=(A^(v|~C))+F[3]-1894986606,T=(T<<10|T>>>22)+v<<0,C+=(v^(T|~A))+F[10]-1051523,C=(C<<15|C>>>17)+T<<0,A+=(T^(C|~v))+F[1]-2054922799,A=(A<<21|A>>>11)+C<<0,v+=(C^(A|~T))+F[8]+1873313359,v=(v<<6|v>>>26)+A<<0,T+=(A^(v|~C))+F[15]-30611744,T=(T<<10|T>>>22)+v<<0,C+=(v^(T|~A))+F[6]-1560198380,C=(C<<15|C>>>17)+T<<0,A+=(T^(C|~v))+F[13]+1309151649,A=(A<<21|A>>>11)+C<<0,v+=(C^(A|~T))+F[4]-145523070,v=(v<<6|v>>>26)+A<<0,T+=(A^(v|~C))+F[11]-1120210379,T=(T<<10|T>>>22)+v<<0,C+=(v^(T|~A))+F[2]+718787259,C=(C<<15|C>>>17)+T<<0,A+=(T^(C|~v))+F[9]-343485551,A=(A<<21|A>>>11)+C<<0,this.first?(this.h0=v+1732584193<<0,this.h1=A-271733879<<0,this.h2=C-1732584194<<0,this.h3=T+271733878<<0,this.first=!1):(this.h0=this.h0+v<<0,this.h1=this.h1+A<<0,this.h2=this.h2+C<<0,this.h3=this.h3+T<<0)},k.prototype.hex=function(){this.finalize();var v=this.h0,A=this.h1,C=this.h2,T=this.h3;return c[v>>>4&15]+c[v&15]+c[v>>>12&15]+c[v>>>8&15]+c[v>>>20&15]+c[v>>>16&15]+c[v>>>28&15]+c[v>>>24&15]+c[A>>>4&15]+c[A&15]+c[A>>>12&15]+c[A>>>8&15]+c[A>>>20&15]+c[A>>>16&15]+c[A>>>28&15]+c[A>>>24&15]+c[C>>>4&15]+c[C&15]+c[C>>>12&15]+c[C>>>8&15]+c[C>>>20&15]+c[C>>>16&15]+c[C>>>28&15]+c[C>>>24&15]+c[T>>>4&15]+c[T&15]+c[T>>>12&15]+c[T>>>8&15]+c[T>>>20&15]+c[T>>>16&15]+c[T>>>28&15]+c[T>>>24&15]},k.prototype.toString=k.prototype.hex,k.prototype.digest=function(){this.finalize();var v=this.h0,A=this.h1,C=this.h2,T=this.h3;return[v&255,v>>>8&255,v>>>16&255,v>>>24&255,A&255,A>>>8&255,A>>>16&255,A>>>24&255,C&255,C>>>8&255,C>>>16&255,C>>>24&255,T&255,T>>>8&255,T>>>16&255,T>>>24&255]},k.prototype.array=k.prototype.digest,k.prototype.arrayBuffer=function(){this.finalize();var v=new ArrayBuffer(16),A=new Uint32Array(v);return A[0]=this.h0,A[1]=this.h1,A[2]=this.h2,A[3]=this.h3,v},k.prototype.buffer=k.prototype.arrayBuffer,k.prototype.base64=function(){for(var v,A,C,T="",z=this.array(),P=0;P<15;)v=z[P++],A=z[P++],C=z[P++],T+=f[v>>>2]+f[(v<<4|A>>>4)&63]+f[(A<<2|C>>>6)&63]+f[C&63];return v=z[P],T+=f[v>>>2]+f[v<<4&63]+"==",T};function $(v,A){var C,T=w(v);if(v=T[0],T[1]){var z=[],P=v.length,F=0,U;for(C=0;C<P;++C)U=v.charCodeAt(C),U<128?z[F++]=U:U<2048?(z[F++]=192|U>>>6,z[F++]=128|U&63):U<55296||U>=57344?(z[F++]=224|U>>>12,z[F++]=128|U>>>6&63,z[F++]=128|U&63):(U=65536+((U&1023)<<10|v.charCodeAt(++C)&1023),z[F++]=240|U>>>18,z[F++]=128|U>>>12&63,z[F++]=128|U>>>6&63,z[F++]=128|U&63);v=z}v.length>64&&(v=new k(!0).update(v).array());var ee=[],G=[];for(C=0;C<64;++C){var we=v[C]||0;ee[C]=92^we,G[C]=54^we}k.call(this,A),this.update(G),this.oKeyPad=ee,this.inner=!0,this.sharedMemory=A}$.prototype=new k,$.prototype.finalize=function(){if(k.prototype.finalize.call(this),this.inner){this.inner=!1;var v=this.array();k.call(this,this.sharedMemory),this.update(this.oKeyPad),this.update(v),k.prototype.finalize.call(this)}};var j=E();j.md5=j,j.md5.hmac=N(),a?i.exports=j:s.md5=j})()}(ar)),ar.exports}var Pg=Dg();const Rg=Ng(Pg);class Fg{constructor(){L(this,"id","hash-generator");L(this,"name","Hash Generator");L(this,"description","Generate various types of hash values from text");L(this,"seoMetadata",{title:"Online Hash Generator Tool - MD5, SHA-1, SHA-256, SHA-512",description:"Generate secure hash values using multiple algorithms including MD5, SHA-1, SHA-256, and SHA-512. Free online tool for all your hashing needs.",keywords:["hash generator","md5 generator","sha1 generator","sha256 generator","sha512 generator","online hash tool"]});L(this,"lastInput","");L(this,"supportedAlgorithms",[{name:"MD5",value:"md5"},{name:"SHA-1",value:"sha-1"},{name:"SHA-256",value:"sha-256"},{name:"SHA-384",value:"sha-384"},{name:"SHA-512",value:"sha-512"}])}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="hash-container">
        <div class="input-section">
          <div class="input-controls">
            <div class="algorithm-selector">
              <label for="hashAlgorithm">Hash Algorithm:</label>
              <select id="hashAlgorithm" class="algorithm-select">
                ${this.supportedAlgorithms.map(t=>`<option value="${t.value}">${t.name}</option>`).join("")}
              </select>
            </div>
            <button id="generateHash" class="button">Generate Hash</button>
          </div>
          <textarea 
            id="inputText" 
            class="input-area" 
            placeholder="Enter text to hash..."
            spellcheck="false"
          ></textarea>
        </div>
        <div class="output-section">
          <div class="output-header">
            <h3>Hash Output</h3>
            <button id="copyHash" class="button">Copy Hash</button>
          </div>
          <div id="hashOutput" class="hash-output"></div>
        </div>
      </div>
    `,this.setupHandlers(),this.addStyles())}async generateHash(e,t){try{if(t==="md5")return Rg(e);const n=new TextEncoder().encode(e),s=await crypto.subtle.digest(t,n);return Array.from(new Uint8Array(s)).map(a=>a.toString(16).padStart(2,"0")).join("")}catch(n){return console.error("Error generating hash:",n),"Error generating hash"}}setupHandlers(){const e=document.getElementById("inputText"),t=document.getElementById("hashAlgorithm"),n=document.getElementById("generateHash"),s=document.getElementById("copyHash"),r=document.getElementById("hashOutput");!e||!t||!n||!s||!r||(n.addEventListener("click",async()=>{if(!e.value.trim()){r.textContent="";return}const o=await this.generateHash(e.value,t.value);r.textContent=o}),s.addEventListener("click",()=>{const o=r.textContent;o&&navigator.clipboard.writeText(o).then(()=>this.showToast("Hash copied to clipboard!")).catch(()=>this.showToast("Failed to copy hash"))}))}formatFileSize(e){const t=["B","KB","MB","GB"];let n=e,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s++;return`${n.toFixed(2)} ${t[s]}`}showToast(e){const t=document.querySelector(".hash-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .hash-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .input-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .input-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .algorithm-selector {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .algorithm-select {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        color: var(--text);
        font-size: 1rem;
        min-width: 120px;
      }

      .file-input-wrapper {
        display: flex;
        align-items: center;
      }

      .file-label {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        cursor: pointer;
        transition: border-color 0.2s;
      }

      .file-label:hover {
        border-color: var(--primary);
      }

      .file-input {
        display: none;
      }

      .input-area {
        width: 100%;
        min-height: 150px;
        padding: 1rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        resize: vertical;
      }

      .input-area:focus {
        outline: none;
        border-color: var(--primary);
      }

      .output-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 1rem;
      }

      .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .output-header h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
      }

      .hash-output {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        word-break: break-all;
        color: var(--primary);
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
    `,document.head.appendChild(e)}}const Bg="00000000-0000-0000-0000-000000000000",ve=[];for(let i=0;i<256;++i)ve.push((i+256).toString(16).slice(1));function iu(i,e=0){return(ve[i[e+0]]+ve[i[e+1]]+ve[i[e+2]]+ve[i[e+3]]+"-"+ve[i[e+4]]+ve[i[e+5]]+"-"+ve[i[e+6]]+ve[i[e+7]]+"-"+ve[i[e+8]]+ve[i[e+9]]+"-"+ve[i[e+10]]+ve[i[e+11]]+ve[i[e+12]]+ve[i[e+13]]+ve[i[e+14]]+ve[i[e+15]]).toLowerCase()}let lr;const $g=new Uint8Array(16);function jr(){if(!lr){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");lr=crypto.getRandomValues.bind(crypto)}return lr($g)}const Hn={};function Cl(i,e,t){var r;let n;const s=(i==null?void 0:i._v6)??!1;if(i){const o=Object.keys(i);o.length===1&&o[0]==="_v6"&&(i=void 0)}if(i)n=Il(i.random??((r=i.rng)==null?void 0:r.call(i))??jr(),i.msecs,i.nsecs,i.clockseq,i.node,e,t);else{const o=Date.now(),a=jr();zg(Hn,o,a),n=Il(a,Hn.msecs,Hn.nsecs,s?void 0:Hn.clockseq,s?void 0:Hn.node,e,t)}return e?n:iu(n)}function zg(i,e,t){return i.msecs??(i.msecs=-1/0),i.nsecs??(i.nsecs=0),e===i.msecs?(i.nsecs++,i.nsecs>=1e4&&(i.node=void 0,i.nsecs=0)):e>i.msecs?i.nsecs=0:e<i.msecs&&(i.node=void 0),i.node||(i.node=t.slice(10,16),i.node[0]|=1,i.clockseq=(t[8]<<8|t[9])&16383),i.msecs=e,i}function Il(i,e,t,n,s,r,o=0){r||(r=new Uint8Array(16),o=0),e??(e=Date.now()),t??(t=0),n??(n=(i[8]<<8|i[9])&16383),s??(s=i.slice(10,16)),e+=122192928e5;const a=((e&268435455)*1e4+t)%4294967296;r[o++]=a>>>24&255,r[o++]=a>>>16&255,r[o++]=a>>>8&255,r[o++]=a&255;const l=e/4294967296*1e4&268435455;r[o++]=l>>>8&255,r[o++]=l&255,r[o++]=l>>>24&15|16,r[o++]=l>>>16&255,r[o++]=n>>>8|128,r[o++]=n&255;for(let c=0;c<6;++c)r[o++]=s[c];return r}const jg=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Nl={randomUUID:jg};function Ml(i,e,t){if(Nl.randomUUID&&!e&&!i)return Nl.randomUUID();i=i||{};const n=i.random||(i.rng||jr)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,iu(n)}function jt(i){var e=new Error(i);return e.source="ulid",e}var Es="0123456789ABCDEFGHJKMNPQRSTVWXYZ",dn=Es.length,Hr=Math.pow(2,48)-1,Ur=10,su=16;function Hg(i){var e=Math.floor(i()*dn);return e===dn&&(e=dn-1),Es.charAt(e)}function Ug(i,e){if(isNaN(i))throw new Error(i+" must be a number");if(i>Hr)throw jt("cannot encode time greater than "+Hr);if(i<0)throw jt("time must be positive");if(Number.isInteger(i)===!1)throw jt("time must be an integer");for(var t=void 0,n="";e>0;e--)t=i%dn,n=Es.charAt(t)+n,i=(i-t)/dn;return n}function Wg(i,e){for(var t="";i>0;i--)t=Hg(e)+t;return t}function Kg(i){if(i.length!==Ur+su)throw jt("malformed ulid");var e=i.substr(0,Ur).split("").reverse().reduce(function(t,n,s){var r=Es.indexOf(n);if(r===-1)throw jt("invalid character found: "+n);return t+=r*Math.pow(dn,s)},0);if(e>Hr)throw jt("malformed ulid, timestamp too large");return e}function Vg(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments[1];e||(e=typeof window<"u"?window:null);var t=e&&(e.crypto||e.msCrypto);if(t)return function(){var s=new Uint8Array(1);return t.getRandomValues(s),s[0]/255};try{var n=require("crypto");return function(){return n.randomBytes(1).readUInt8()/255}}catch{}if(i){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return function(){return Math.random()}}throw jt("secure crypto unusable, insecure Math.random not allowed")}function qg(i){return i||(i=Vg()),function(t){return isNaN(t)&&(t=Date.now()),Ug(t,Ur)+Wg(su,i)}}var Ol=qg();class Gg{constructor(){L(this,"id","uuid-generator");L(this,"name","UUID Generator");L(this,"description","Generate random UUIDs/GUIDs");L(this,"seoMetadata",{title:"Free Online UUID/GUID Generator Tool",description:"Generate random UUID (Universally Unique Identifier) and GUID (Globally Unique Identifier) values instantly. Secure, random, and RFC 4122 compliant.",keywords:["uuid generator","guid generator","random uuid","uuid v4","unique identifier generator","online uuid tool"]});L(this,"supportedTypes",[{value:"uuidv4",name:"UUID v4 (Random)"},{value:"uuidv1",name:"UUID v1 (Time-based)"},{value:"ulid",name:"ULID (Sortable, Time-based)"},{value:"nil",name:"Nil UUID (Zero UUID)"}]);L(this,"lastSettings",{type:"uuidv4",quantity:1,uppercase:!1,includeDashes:!0,useCustomDate:!1,customDate:new Date().toISOString().slice(0,16)})}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="uuid-container">
        <div class="controls-section">
          <div class="main-controls">
            <div class="control-group">
              <label for="idType">Type:</label>
              <select id="idType" class="select-input">
                ${this.supportedTypes.map(t=>`<option value="${t.value}">${t.name}</option>`).join("")}
              </select>
            </div>

            <div class="control-group time-control" style="display: none">
              <label>
                <input type="checkbox" id="useCustomDate">
                Use Custom Timestamp
              </label>
              <input 
                type="datetime-local" 
                id="customDate" 
                class="datetime-input" 
                disabled
                value="${this.lastSettings.customDate}"
              >
            </div>

            <div class="control-group quantity-control">
              <label for="quantity">Quantity:</label>
              <input 
                type="number" 
                id="quantity" 
                class="number-input" 
                value="1" 
                min="1" 
                max="100"
                title="Generate between 1 and 100 IDs"
              >
            </div>
          </div>

          <div class="format-options">
            <label class="checkbox-label">
              <input type="checkbox" id="uppercase">
              Uppercase
            </label>
            <label class="checkbox-label">
              <input type="checkbox" id="includeDashes" checked>
              Include Dashes
            </label>
          </div>

          <button id="generateBtn" class="button generate-btn">Generate</button>
        </div>

        <div class="output-section">
          <div class="output-header">
            <h3>Generated IDs</h3>
            <div class="output-controls">
              <button id="copyAllBtn" class="button">Copy All</button>
              <button id="clearBtn" class="button">Clear</button>
            </div>
          </div>
          <div id="outputList" class="output-list"></div>
        </div>

        <div class="info-section">
          <h3>ID Information</h3>
          <div id="idInfo" class="id-info"></div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("idType"),t=document.getElementById("useCustomDate"),n=document.getElementById("customDate"),s=document.getElementById("quantity"),r=document.getElementById("uppercase"),o=document.getElementById("includeDashes"),a=document.getElementById("generateBtn"),l=document.getElementById("copyAllBtn"),c=document.getElementById("clearBtn"),u=document.getElementById("outputList"),d=document.querySelector(".time-control");!e||!t||!n||!s||!r||!o||!a||!l||!c||!u||!d||(e.addEventListener("change",()=>{const h=["uuidv1","ulid"].includes(e.value);d.style.display=h?"flex":"none",this.lastSettings.type=e.value,this.updateIdInfo(e.value)}),this.updateIdInfo(e.value),t.addEventListener("change",()=>{n.disabled=!t.checked,this.lastSettings.useCustomDate=t.checked}),n.addEventListener("change",()=>{this.lastSettings.customDate=n.value}),r.addEventListener("change",()=>{this.lastSettings.uppercase=r.checked}),o.addEventListener("change",()=>{this.lastSettings.includeDashes=o.checked}),s.addEventListener("change",()=>{const h=parseInt(s.value);h<1&&(s.value="1"),h>100&&(s.value="100"),this.lastSettings.quantity=parseInt(s.value)}),a.addEventListener("click",()=>{var f;u.innerHTML="";const h=Math.min(Math.max(parseInt(s.value)||1,1),100);for(let g=0;g<h;g++){const{id:y,timestamp:x}=this.generateId({type:e.value,useCustomDate:t.checked,customDate:t.checked?new Date(n.value):void 0,uppercase:r.checked,includeDashes:o.checked}),p=document.createElement("div");p.className="id-item",p.innerHTML=`
          <div class="id-content">
            <span class="id-text">${y}</span>
            ${x?`<span class="id-timestamp">Generated at: ${x.toLocaleString()}</span>`:""}
          </div>
          <button class="copy-button" title="Copy ID">Copy</button>
        `,(f=p.querySelector(".copy-button"))==null||f.addEventListener("click",()=>{navigator.clipboard.writeText(y).then(()=>this.showToast("ID copied to clipboard")).catch(()=>this.showToast("Failed to copy ID"))}),u.appendChild(p),g===0&&this.updateIdInfo(e.value,x)}}),l.addEventListener("click",()=>{const h=Array.from(u.querySelectorAll(".id-text")).map(f=>f.textContent).filter(Boolean).join(`
`);h&&navigator.clipboard.writeText(h).then(()=>this.showToast("All IDs copied to clipboard")).catch(()=>this.showToast("Failed to copy IDs"))}),c.addEventListener("click",()=>{u.innerHTML="",this.updateIdInfo(e.value)}))}updateQuantityState(e,t,n){["uuidv1","ulid"].includes(e)&&t?(n.value="1",n.disabled=!0,n.title="Quantity is fixed to 1 when using custom timestamp (all IDs would be identical)"):(n.disabled=!1,n.title="Generate between 1 and 100 IDs")}generateId(e){let t,n;switch(e.type){case"uuidv4":t=Ml();break;case"uuidv1":e.useCustomDate&&e.customDate?(t=Cl({msecs:e.customDate.getTime()}),n=e.customDate):(t=Cl(),n=new Date);break;case"ulid":e.useCustomDate&&e.customDate?(t=Ol(e.customDate.getTime()),n=e.customDate):(t=Ol(),n=new Date(Kg(t)));break;case"nil":t=Bg;break;default:t=Ml()}return e.includeDashes||(t=t.replace(/-/g,"")),e.uppercase&&(t=t.toUpperCase()),{id:t,timestamp:n}}updateIdInfo(e,t){const n=document.getElementById("idInfo");if(!n)return;const s=[];switch(e){case"uuidv4":s.push("UUID Version 4 (Random)"),s.push("• Generated using cryptographically strong random values"),s.push("• Suitable for most use cases"),s.push("• No timestamp or sortable component");break;case"uuidv1":s.push("UUID Version 1 (Time-based)"),s.push("• Contains timestamp and node identifier"),s.push("• Sortable by generation time"),t&&s.push(`• Timestamp: ${t.toLocaleString()}`);break;case"ulid":s.push("ULID (Universally Unique Lexicographically Sortable Identifier)"),s.push("• Timestamp + Random"),s.push("• Lexicographically sortable"),s.push("• Case insensitive"),s.push("• URL-safe (no special characters)"),t&&s.push(`• Timestamp: ${t.toLocaleString()}`);break;case"nil":s.push("Nil UUID (Zero UUID)"),s.push("• Special zero-value UUID"),s.push("• All bits set to zero"),s.push("• Used to represent null or undefined UUID");break}n.innerHTML=s.join(`
`)}showToast(e){const t=document.querySelector(".uuid-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .uuid-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .controls-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .main-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .control-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 200px;
      }

      .time-control {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .select-input,
      .datetime-input,
      .number-input {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 0.9rem;
      }

      .format-options {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .generate-btn {
        margin-left: auto;
        align-self: flex-end;
      }

      .output-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .output-header h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .output-controls {
        display: flex;
        gap: 0.5rem;
      }

      .output-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .id-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        background: var(--sidebar-bg);
        border-radius: 4px;
      }

      .id-content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;
        min-width: 0;
      }

      .id-text {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        word-break: break-all;
      }

      .id-timestamp {
        font-size: 0.8rem;
        color: var(--text-secondary);
      }

      .copy-button {
        padding: 0.25rem 0.75rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        cursor: pointer;
        font-size: 0.9rem;
      }

      .format-options {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .generate-btn {
        margin-left: auto;
        align-self: flex-end;
      }

      .output-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .output-header h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .output-controls {
        display: flex;
        gap: 0.5rem;
      }

      .output-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .id-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        background: var(--sidebar-bg);
        border-radius: 4px;
      }

      .id-content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;
        min-width: 0;
      }

      .id-text {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        word-break: break-all;
      }

      .id-timestamp {
        font-size: 0.8rem;
        color: var(--text-secondary);
      }

      .copy-button {
        padding: 0.25rem 0.75rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        cursor: pointer;
font-size: 0.9rem;
        white-space: nowrap;
        transition: border-color 0.2s;
      }

      .copy-button:hover {
        border-color: var(--primary);
      }

      .info-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .info-section h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .id-info {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.6;
        white-space: pre-line;
        color: var(--text-secondary);
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        z-index: 1000;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }

      @media (max-width: 600px) {
        .controls-section {
          flex-direction: column;
        }

        .generate-btn {
          margin-left: 0;
          align-self: stretch;
        }

        .control-group {
          min-width: 100%;
        }

        .id-item {
          flex-direction: column;
          align-items: stretch;
        }

        .copy-button {
          align-self: flex-end;
        }
      }
    `,document.head.appendChild(e)}}var cr={},ur={},Hi={exports:{}},Ll;function Yg(){return Ll||(Ll=1,function(i,e){var t=ps,n=t.Buffer;function s(o,a){for(var l in o)a[l]=o[l]}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?i.exports=t:(s(t,e),e.Buffer=r);function r(o,a,l){return n(o,a,l)}s(n,r),r.from=function(o,a,l){if(typeof o=="number")throw new TypeError("Argument must not be a number");return n(o,a,l)},r.alloc=function(o,a,l){if(typeof o!="number")throw new TypeError("Argument must be a number");var c=n(o);return a!==void 0?typeof l=="string"?c.fill(a,l):c.fill(a):c.fill(0),c},r.allocUnsafe=function(o){if(typeof o!="number")throw new TypeError("Argument must be a number");return n(o)},r.allocUnsafeSlow=function(o){if(typeof o!="number")throw new TypeError("Argument must be a number");return t.SlowBuffer(o)}}(Hi,Hi.exports)),Hi.exports}var Dl;function Jg(){if(Dl)return ur;Dl=1;var i=Yg().Buffer,e=i.isEncoding||function(p){switch(p=""+p,p&&p.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function t(p){if(!p)return"utf8";for(var S;;)switch(p){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return p;default:if(S)return;p=(""+p).toLowerCase(),S=!0}}function n(p){var S=t(p);if(typeof S!="string"&&(i.isEncoding===e||!e(p)))throw new Error("Unknown encoding: "+p);return S||p}ur.StringDecoder=s;function s(p){this.encoding=n(p);var S;switch(this.encoding){case"utf16le":this.text=d,this.end=h,S=4;break;case"utf8":this.fillLast=l,S=4;break;case"base64":this.text=f,this.end=g,S=3;break;default:this.write=y,this.end=x;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(S)}s.prototype.write=function(p){if(p.length===0)return"";var S,w;if(this.lastNeed){if(S=this.fillLast(p),S===void 0)return"";w=this.lastNeed,this.lastNeed=0}else w=0;return w<p.length?S?S+this.text(p,w):this.text(p,w):S||""},s.prototype.end=u,s.prototype.text=c,s.prototype.fillLast=function(p){if(this.lastNeed<=p.length)return p.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);p.copy(this.lastChar,this.lastTotal-this.lastNeed,0,p.length),this.lastNeed-=p.length};function r(p){return p<=127?0:p>>5===6?2:p>>4===14?3:p>>3===30?4:p>>6===2?-1:-2}function o(p,S,w){var m=S.length-1;if(m<w)return 0;var E=r(S[m]);return E>=0?(E>0&&(p.lastNeed=E-1),E):--m<w||E===-2?0:(E=r(S[m]),E>=0?(E>0&&(p.lastNeed=E-2),E):--m<w||E===-2?0:(E=r(S[m]),E>=0?(E>0&&(E===2?E=0:p.lastNeed=E-3),E):0))}function a(p,S,w){if((S[0]&192)!==128)return p.lastNeed=0,"�";if(p.lastNeed>1&&S.length>1){if((S[1]&192)!==128)return p.lastNeed=1,"�";if(p.lastNeed>2&&S.length>2&&(S[2]&192)!==128)return p.lastNeed=2,"�"}}function l(p){var S=this.lastTotal-this.lastNeed,w=a(this,p);if(w!==void 0)return w;if(this.lastNeed<=p.length)return p.copy(this.lastChar,S,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);p.copy(this.lastChar,S,0,p.length),this.lastNeed-=p.length}function c(p,S){var w=o(this,p,S);if(!this.lastNeed)return p.toString("utf8",S);this.lastTotal=w;var m=p.length-(w-this.lastNeed);return p.copy(this.lastChar,0,m),p.toString("utf8",S,m)}function u(p){var S=p&&p.length?this.write(p):"";return this.lastNeed?S+"�":S}function d(p,S){if((p.length-S)%2===0){var w=p.toString("utf16le",S);if(w){var m=w.charCodeAt(w.length-1);if(m>=55296&&m<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=p[p.length-2],this.lastChar[1]=p[p.length-1],w.slice(0,-1)}return w}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=p[p.length-1],p.toString("utf16le",S,p.length-1)}function h(p){var S=p&&p.length?this.write(p):"";if(this.lastNeed){var w=this.lastTotal-this.lastNeed;return S+this.lastChar.toString("utf16le",0,w)}return S}function f(p,S){var w=(p.length-S)%3;return w===0?p.toString("base64",S):(this.lastNeed=3-w,this.lastTotal=3,w===1?this.lastChar[0]=p[p.length-1]:(this.lastChar[0]=p[p.length-2],this.lastChar[1]=p[p.length-1]),p.toString("base64",S,p.length-w))}function g(p){var S=p&&p.length?this.write(p):"";return this.lastNeed?S+this.lastChar.toString("base64",0,3-this.lastNeed):S}function y(p){return p.toString(this.encoding)}function x(p){return p&&p.length?this.write(p):""}return ur}var Pl;function Xg(){return Pl||(Pl=1,function(i){(function(e){e.parser=function(_,b){return new n(_,b)},e.SAXParser=n,e.SAXStream=u,e.createStream=c,e.MAX_BUFFER_LENGTH=64*1024;var t=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];e.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function n(_,b){if(!(this instanceof n))return new n(_,b);var R=this;r(R),R.q=R.c="",R.bufferCheckPosition=e.MAX_BUFFER_LENGTH,R.opt=b||{},R.opt.lowercase=R.opt.lowercase||R.opt.lowercasetags,R.looseCase=R.opt.lowercase?"toLowerCase":"toUpperCase",R.tags=[],R.closed=R.closedRoot=R.sawRoot=!1,R.tag=R.error=null,R.strict=!!_,R.noscript=!!(_||R.opt.noscript),R.state=k.BEGIN,R.strictEntities=R.opt.strictEntities,R.ENTITIES=R.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),R.attribList=[],R.opt.xmlns&&(R.ns=Object.create(y)),R.opt.unquotedAttributeValues===void 0&&(R.opt.unquotedAttributeValues=!_),R.trackPosition=R.opt.position!==!1,R.trackPosition&&(R.position=R.line=R.column=0),j(R,"onready")}Object.create||(Object.create=function(_){function b(){}b.prototype=_;var R=new b;return R}),Object.keys||(Object.keys=function(_){var b=[];for(var R in _)_.hasOwnProperty(R)&&b.push(R);return b});function s(_){for(var b=Math.max(e.MAX_BUFFER_LENGTH,10),R=0,M=0,J=t.length;M<J;M++){var ie=_[t[M]].length;if(ie>b)switch(t[M]){case"textNode":A(_);break;case"cdata":v(_,"oncdata",_.cdata),_.cdata="";break;case"script":v(_,"onscript",_.script),_.script="";break;default:T(_,"Max buffer length exceeded: "+t[M])}R=Math.max(R,ie)}var ce=e.MAX_BUFFER_LENGTH-R;_.bufferCheckPosition=ce+_.position}function r(_){for(var b=0,R=t.length;b<R;b++)_[t[b]]=""}function o(_){A(_),_.cdata!==""&&(v(_,"oncdata",_.cdata),_.cdata=""),_.script!==""&&(v(_,"onscript",_.script),_.script="")}n.prototype={end:function(){z(this)},write:Ae,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){o(this)}};var a;try{a=ps.Stream}catch{a=function(){}}a||(a=function(){});var l=e.EVENTS.filter(function(_){return _!=="error"&&_!=="end"});function c(_,b){return new u(_,b)}function u(_,b){if(!(this instanceof u))return new u(_,b);a.apply(this),this._parser=new n(_,b),this.writable=!0,this.readable=!0;var R=this;this._parser.onend=function(){R.emit("end")},this._parser.onerror=function(M){R.emit("error",M),R._parser.error=null},this._decoder=null,l.forEach(function(M){Object.defineProperty(R,"on"+M,{get:function(){return R._parser["on"+M]},set:function(J){if(!J)return R.removeAllListeners(M),R._parser["on"+M]=J,J;R.on(M,J)},enumerable:!0,configurable:!1})})}u.prototype=Object.create(a.prototype,{constructor:{value:u}}),u.prototype.write=function(_){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(_)){if(!this._decoder){var b=Jg().StringDecoder;this._decoder=new b("utf8")}_=this._decoder.write(_)}return this._parser.write(_.toString()),this.emit("data",_),!0},u.prototype.end=function(_){return _&&_.length&&this.write(_),this._parser.end(),!0},u.prototype.on=function(_,b){var R=this;return!R._parser["on"+_]&&l.indexOf(_)!==-1&&(R._parser["on"+_]=function(){var M=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);M.splice(0,0,_),R.emit.apply(R,M)}),a.prototype.on.call(R,_,b)};var d="[CDATA[",h="DOCTYPE",f="http://www.w3.org/XML/1998/namespace",g="http://www.w3.org/2000/xmlns/",y={xml:f,xmlns:g},x=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,p=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,S=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,w=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function m(_){return _===" "||_===`
`||_==="\r"||_==="	"}function E(_){return _==='"'||_==="'"}function O(_){return _===">"||m(_)}function D(_,b){return _.test(b)}function N(_,b){return!D(_,b)}var k=0;e.STATE={BEGIN:k++,BEGIN_WHITESPACE:k++,TEXT:k++,TEXT_ENTITY:k++,OPEN_WAKA:k++,SGML_DECL:k++,SGML_DECL_QUOTED:k++,DOCTYPE:k++,DOCTYPE_QUOTED:k++,DOCTYPE_DTD:k++,DOCTYPE_DTD_QUOTED:k++,COMMENT_STARTING:k++,COMMENT:k++,COMMENT_ENDING:k++,COMMENT_ENDED:k++,CDATA:k++,CDATA_ENDING:k++,CDATA_ENDING_2:k++,PROC_INST:k++,PROC_INST_BODY:k++,PROC_INST_ENDING:k++,OPEN_TAG:k++,OPEN_TAG_SLASH:k++,ATTRIB:k++,ATTRIB_NAME:k++,ATTRIB_NAME_SAW_WHITE:k++,ATTRIB_VALUE:k++,ATTRIB_VALUE_QUOTED:k++,ATTRIB_VALUE_CLOSED:k++,ATTRIB_VALUE_UNQUOTED:k++,ATTRIB_VALUE_ENTITY_Q:k++,ATTRIB_VALUE_ENTITY_U:k++,CLOSE_TAG:k++,CLOSE_TAG_SAW_WHITE:k++,SCRIPT:k++,SCRIPT_ENDING:k++},e.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},e.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach(function(_){var b=e.ENTITIES[_],R=typeof b=="number"?String.fromCharCode(b):b;e.ENTITIES[_]=R});for(var $ in e.STATE)e.STATE[e.STATE[$]]=$;k=e.STATE;function j(_,b,R){_[b]&&_[b](R)}function v(_,b,R){_.textNode&&A(_),j(_,b,R)}function A(_){_.textNode=C(_.opt,_.textNode),_.textNode&&j(_,"ontext",_.textNode),_.textNode=""}function C(_,b){return _.trim&&(b=b.trim()),_.normalize&&(b=b.replace(/\s+/g," ")),b}function T(_,b){return A(_),_.trackPosition&&(b+=`
Line: `+_.line+`
Column: `+_.column+`
Char: `+_.c),b=new Error(b),_.error=b,j(_,"onerror",b),_}function z(_){return _.sawRoot&&!_.closedRoot&&P(_,"Unclosed root tag"),_.state!==k.BEGIN&&_.state!==k.BEGIN_WHITESPACE&&_.state!==k.TEXT&&T(_,"Unexpected end"),A(_),_.c="",_.closed=!0,j(_,"onend"),n.call(_,_.strict,_.opt),_}function P(_,b){if(typeof _!="object"||!(_ instanceof n))throw new Error("bad call to strictFail");_.strict&&T(_,b)}function F(_){_.strict||(_.tagName=_.tagName[_.looseCase]());var b=_.tags[_.tags.length-1]||_,R=_.tag={name:_.tagName,attributes:{}};_.opt.xmlns&&(R.ns=b.ns),_.attribList.length=0,v(_,"onopentagstart",R)}function U(_,b){var R=_.indexOf(":"),M=R<0?["",_]:_.split(":"),J=M[0],ie=M[1];return b&&_==="xmlns"&&(J="xmlns",ie=""),{prefix:J,local:ie}}function ee(_){if(_.strict||(_.attribName=_.attribName[_.looseCase]()),_.attribList.indexOf(_.attribName)!==-1||_.tag.attributes.hasOwnProperty(_.attribName)){_.attribName=_.attribValue="";return}if(_.opt.xmlns){var b=U(_.attribName,!0),R=b.prefix,M=b.local;if(R==="xmlns")if(M==="xml"&&_.attribValue!==f)P(_,"xml: prefix must be bound to "+f+`
Actual: `+_.attribValue);else if(M==="xmlns"&&_.attribValue!==g)P(_,"xmlns: prefix must be bound to "+g+`
Actual: `+_.attribValue);else{var J=_.tag,ie=_.tags[_.tags.length-1]||_;J.ns===ie.ns&&(J.ns=Object.create(ie.ns)),J.ns[M]=_.attribValue}_.attribList.push([_.attribName,_.attribValue])}else _.tag.attributes[_.attribName]=_.attribValue,v(_,"onattribute",{name:_.attribName,value:_.attribValue});_.attribName=_.attribValue=""}function G(_,b){if(_.opt.xmlns){var R=_.tag,M=U(_.tagName);R.prefix=M.prefix,R.local=M.local,R.uri=R.ns[M.prefix]||"",R.prefix&&!R.uri&&(P(_,"Unbound namespace prefix: "+JSON.stringify(_.tagName)),R.uri=M.prefix);var J=_.tags[_.tags.length-1]||_;R.ns&&J.ns!==R.ns&&Object.keys(R.ns).forEach(function(xi){v(_,"onopennamespace",{prefix:xi,uri:R.ns[xi]})});for(var ie=0,ce=_.attribList.length;ie<ce;ie++){var he=_.attribList[ie],ge=he[0],tt=he[1],oe=U(ge,!0),Le=oe.prefix,Yt=oe.local,Tn=Le===""?"":R.ns[Le]||"",Jt={name:ge,value:tt,prefix:Le,local:Yt,uri:Tn};Le&&Le!=="xmlns"&&!Tn&&(P(_,"Unbound namespace prefix: "+JSON.stringify(Le)),Jt.uri=Le),_.tag.attributes[ge]=Jt,v(_,"onattribute",Jt)}_.attribList.length=0}_.tag.isSelfClosing=!!b,_.sawRoot=!0,_.tags.push(_.tag),v(_,"onopentag",_.tag),b||(!_.noscript&&_.tagName.toLowerCase()==="script"?_.state=k.SCRIPT:_.state=k.TEXT,_.tag=null,_.tagName=""),_.attribName=_.attribValue="",_.attribList.length=0}function we(_){if(!_.tagName){P(_,"Weird empty close tag."),_.textNode+="</>",_.state=k.TEXT;return}if(_.script){if(_.tagName!=="script"){_.script+="</"+_.tagName+">",_.tagName="",_.state=k.SCRIPT;return}v(_,"onscript",_.script),_.script=""}var b=_.tags.length,R=_.tagName;_.strict||(R=R[_.looseCase]());for(var M=R;b--;){var J=_.tags[b];if(J.name!==M)P(_,"Unexpected close tag");else break}if(b<0){P(_,"Unmatched closing tag: "+_.tagName),_.textNode+="</"+_.tagName+">",_.state=k.TEXT;return}_.tagName=R;for(var ie=_.tags.length;ie-- >b;){var ce=_.tag=_.tags.pop();_.tagName=_.tag.name,v(_,"onclosetag",_.tagName);var he={};for(var ge in ce.ns)he[ge]=ce.ns[ge];var tt=_.tags[_.tags.length-1]||_;_.opt.xmlns&&ce.ns!==tt.ns&&Object.keys(ce.ns).forEach(function(oe){var Le=ce.ns[oe];v(_,"onclosenamespace",{prefix:oe,uri:Le})})}b===0&&(_.closedRoot=!0),_.tagName=_.attribValue=_.attribName="",_.attribList.length=0,_.state=k.TEXT}function se(_){var b=_.entity,R=b.toLowerCase(),M,J="";return _.ENTITIES[b]?_.ENTITIES[b]:_.ENTITIES[R]?_.ENTITIES[R]:(b=R,b.charAt(0)==="#"&&(b.charAt(1)==="x"?(b=b.slice(2),M=parseInt(b,16),J=M.toString(16)):(b=b.slice(1),M=parseInt(b,10),J=M.toString(10))),b=b.replace(/^0+/,""),isNaN(M)||J.toLowerCase()!==b?(P(_,"Invalid character entity"),"&"+_.entity+";"):String.fromCodePoint(M))}function Be(_,b){b==="<"?(_.state=k.OPEN_WAKA,_.startTagPosition=_.position):m(b)||(P(_,"Non-whitespace before first tag."),_.textNode=b,_.state=k.TEXT)}function X(_,b){var R="";return b<_.length&&(R=_.charAt(b)),R}function Ae(_){var b=this;if(this.error)throw this.error;if(b.closed)return T(b,"Cannot write after close. Assign an onready handler.");if(_===null)return z(b);typeof _=="object"&&(_=_.toString());for(var R=0,M="";M=X(_,R++),b.c=M,!!M;)switch(b.trackPosition&&(b.position++,M===`
`?(b.line++,b.column=0):b.column++),b.state){case k.BEGIN:if(b.state=k.BEGIN_WHITESPACE,M==="\uFEFF")continue;Be(b,M);continue;case k.BEGIN_WHITESPACE:Be(b,M);continue;case k.TEXT:if(b.sawRoot&&!b.closedRoot){for(var J=R-1;M&&M!=="<"&&M!=="&";)M=X(_,R++),M&&b.trackPosition&&(b.position++,M===`
`?(b.line++,b.column=0):b.column++);b.textNode+=_.substring(J,R-1)}M==="<"&&!(b.sawRoot&&b.closedRoot&&!b.strict)?(b.state=k.OPEN_WAKA,b.startTagPosition=b.position):(!m(M)&&(!b.sawRoot||b.closedRoot)&&P(b,"Text data outside of root node."),M==="&"?b.state=k.TEXT_ENTITY:b.textNode+=M);continue;case k.SCRIPT:M==="<"?b.state=k.SCRIPT_ENDING:b.script+=M;continue;case k.SCRIPT_ENDING:M==="/"?b.state=k.CLOSE_TAG:(b.script+="<"+M,b.state=k.SCRIPT);continue;case k.OPEN_WAKA:if(M==="!")b.state=k.SGML_DECL,b.sgmlDecl="";else if(!m(M))if(D(x,M))b.state=k.OPEN_TAG,b.tagName=M;else if(M==="/")b.state=k.CLOSE_TAG,b.tagName="";else if(M==="?")b.state=k.PROC_INST,b.procInstName=b.procInstBody="";else{if(P(b,"Unencoded <"),b.startTagPosition+1<b.position){var ie=b.position-b.startTagPosition;M=new Array(ie).join(" ")+M}b.textNode+="<"+M,b.state=k.TEXT}continue;case k.SGML_DECL:if(b.sgmlDecl+M==="--"){b.state=k.COMMENT,b.comment="",b.sgmlDecl="";continue}b.doctype&&b.doctype!==!0&&b.sgmlDecl?(b.state=k.DOCTYPE_DTD,b.doctype+="<!"+b.sgmlDecl+M,b.sgmlDecl=""):(b.sgmlDecl+M).toUpperCase()===d?(v(b,"onopencdata"),b.state=k.CDATA,b.sgmlDecl="",b.cdata=""):(b.sgmlDecl+M).toUpperCase()===h?(b.state=k.DOCTYPE,(b.doctype||b.sawRoot)&&P(b,"Inappropriately located doctype declaration"),b.doctype="",b.sgmlDecl=""):M===">"?(v(b,"onsgmldeclaration",b.sgmlDecl),b.sgmlDecl="",b.state=k.TEXT):(E(M)&&(b.state=k.SGML_DECL_QUOTED),b.sgmlDecl+=M);continue;case k.SGML_DECL_QUOTED:M===b.q&&(b.state=k.SGML_DECL,b.q=""),b.sgmlDecl+=M;continue;case k.DOCTYPE:M===">"?(b.state=k.TEXT,v(b,"ondoctype",b.doctype),b.doctype=!0):(b.doctype+=M,M==="["?b.state=k.DOCTYPE_DTD:E(M)&&(b.state=k.DOCTYPE_QUOTED,b.q=M));continue;case k.DOCTYPE_QUOTED:b.doctype+=M,M===b.q&&(b.q="",b.state=k.DOCTYPE);continue;case k.DOCTYPE_DTD:M==="]"?(b.doctype+=M,b.state=k.DOCTYPE):M==="<"?(b.state=k.OPEN_WAKA,b.startTagPosition=b.position):E(M)?(b.doctype+=M,b.state=k.DOCTYPE_DTD_QUOTED,b.q=M):b.doctype+=M;continue;case k.DOCTYPE_DTD_QUOTED:b.doctype+=M,M===b.q&&(b.state=k.DOCTYPE_DTD,b.q="");continue;case k.COMMENT:M==="-"?b.state=k.COMMENT_ENDING:b.comment+=M;continue;case k.COMMENT_ENDING:M==="-"?(b.state=k.COMMENT_ENDED,b.comment=C(b.opt,b.comment),b.comment&&v(b,"oncomment",b.comment),b.comment=""):(b.comment+="-"+M,b.state=k.COMMENT);continue;case k.COMMENT_ENDED:M!==">"?(P(b,"Malformed comment"),b.comment+="--"+M,b.state=k.COMMENT):b.doctype&&b.doctype!==!0?b.state=k.DOCTYPE_DTD:b.state=k.TEXT;continue;case k.CDATA:M==="]"?b.state=k.CDATA_ENDING:b.cdata+=M;continue;case k.CDATA_ENDING:M==="]"?b.state=k.CDATA_ENDING_2:(b.cdata+="]"+M,b.state=k.CDATA);continue;case k.CDATA_ENDING_2:M===">"?(b.cdata&&v(b,"oncdata",b.cdata),v(b,"onclosecdata"),b.cdata="",b.state=k.TEXT):M==="]"?b.cdata+="]":(b.cdata+="]]"+M,b.state=k.CDATA);continue;case k.PROC_INST:M==="?"?b.state=k.PROC_INST_ENDING:m(M)?b.state=k.PROC_INST_BODY:b.procInstName+=M;continue;case k.PROC_INST_BODY:if(!b.procInstBody&&m(M))continue;M==="?"?b.state=k.PROC_INST_ENDING:b.procInstBody+=M;continue;case k.PROC_INST_ENDING:M===">"?(v(b,"onprocessinginstruction",{name:b.procInstName,body:b.procInstBody}),b.procInstName=b.procInstBody="",b.state=k.TEXT):(b.procInstBody+="?"+M,b.state=k.PROC_INST_BODY);continue;case k.OPEN_TAG:D(p,M)?b.tagName+=M:(F(b),M===">"?G(b):M==="/"?b.state=k.OPEN_TAG_SLASH:(m(M)||P(b,"Invalid character in tag name"),b.state=k.ATTRIB));continue;case k.OPEN_TAG_SLASH:M===">"?(G(b,!0),we(b)):(P(b,"Forward-slash in opening tag not followed by >"),b.state=k.ATTRIB);continue;case k.ATTRIB:if(m(M))continue;M===">"?G(b):M==="/"?b.state=k.OPEN_TAG_SLASH:D(x,M)?(b.attribName=M,b.attribValue="",b.state=k.ATTRIB_NAME):P(b,"Invalid attribute name");continue;case k.ATTRIB_NAME:M==="="?b.state=k.ATTRIB_VALUE:M===">"?(P(b,"Attribute without value"),b.attribValue=b.attribName,ee(b),G(b)):m(M)?b.state=k.ATTRIB_NAME_SAW_WHITE:D(p,M)?b.attribName+=M:P(b,"Invalid attribute name");continue;case k.ATTRIB_NAME_SAW_WHITE:if(M==="=")b.state=k.ATTRIB_VALUE;else{if(m(M))continue;P(b,"Attribute without value"),b.tag.attributes[b.attribName]="",b.attribValue="",v(b,"onattribute",{name:b.attribName,value:""}),b.attribName="",M===">"?G(b):D(x,M)?(b.attribName=M,b.state=k.ATTRIB_NAME):(P(b,"Invalid attribute name"),b.state=k.ATTRIB)}continue;case k.ATTRIB_VALUE:if(m(M))continue;E(M)?(b.q=M,b.state=k.ATTRIB_VALUE_QUOTED):(b.opt.unquotedAttributeValues||T(b,"Unquoted attribute value"),b.state=k.ATTRIB_VALUE_UNQUOTED,b.attribValue=M);continue;case k.ATTRIB_VALUE_QUOTED:if(M!==b.q){M==="&"?b.state=k.ATTRIB_VALUE_ENTITY_Q:b.attribValue+=M;continue}ee(b),b.q="",b.state=k.ATTRIB_VALUE_CLOSED;continue;case k.ATTRIB_VALUE_CLOSED:m(M)?b.state=k.ATTRIB:M===">"?G(b):M==="/"?b.state=k.OPEN_TAG_SLASH:D(x,M)?(P(b,"No whitespace between attributes"),b.attribName=M,b.attribValue="",b.state=k.ATTRIB_NAME):P(b,"Invalid attribute name");continue;case k.ATTRIB_VALUE_UNQUOTED:if(!O(M)){M==="&"?b.state=k.ATTRIB_VALUE_ENTITY_U:b.attribValue+=M;continue}ee(b),M===">"?G(b):b.state=k.ATTRIB;continue;case k.CLOSE_TAG:if(b.tagName)M===">"?we(b):D(p,M)?b.tagName+=M:b.script?(b.script+="</"+b.tagName,b.tagName="",b.state=k.SCRIPT):(m(M)||P(b,"Invalid tagname in closing tag"),b.state=k.CLOSE_TAG_SAW_WHITE);else{if(m(M))continue;N(x,M)?b.script?(b.script+="</"+M,b.state=k.SCRIPT):P(b,"Invalid tagname in closing tag."):b.tagName=M}continue;case k.CLOSE_TAG_SAW_WHITE:if(m(M))continue;M===">"?we(b):P(b,"Invalid characters in closing tag");continue;case k.TEXT_ENTITY:case k.ATTRIB_VALUE_ENTITY_Q:case k.ATTRIB_VALUE_ENTITY_U:var ce,he;switch(b.state){case k.TEXT_ENTITY:ce=k.TEXT,he="textNode";break;case k.ATTRIB_VALUE_ENTITY_Q:ce=k.ATTRIB_VALUE_QUOTED,he="attribValue";break;case k.ATTRIB_VALUE_ENTITY_U:ce=k.ATTRIB_VALUE_UNQUOTED,he="attribValue";break}if(M===";"){var ge=se(b);b.opt.unparsedEntities&&!Object.values(e.XML_ENTITIES).includes(ge)?(b.entity="",b.state=ce,b.write(ge)):(b[he]+=ge,b.entity="",b.state=ce)}else D(b.entity.length?w:S,M)?b.entity+=M:(P(b,"Invalid character in entity name"),b[he]+="&"+b.entity+M,b.entity="",b.state=ce);continue;default:throw new Error(b,"Unknown state: "+b.state)}return b.position>=b.bufferCheckPosition&&s(b),b}/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */String.fromCodePoint||function(){var _=String.fromCharCode,b=Math.floor,R=function(){var M=16384,J=[],ie,ce,he=-1,ge=arguments.length;if(!ge)return"";for(var tt="";++he<ge;){var oe=Number(arguments[he]);if(!isFinite(oe)||oe<0||oe>1114111||b(oe)!==oe)throw RangeError("Invalid code point: "+oe);oe<=65535?J.push(oe):(oe-=65536,ie=(oe>>10)+55296,ce=oe%1024+56320,J.push(ie,ce)),(he+1===ge||J.length>M)&&(tt+=_.apply(null,J),J.length=0)}return tt};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:R,configurable:!0,writable:!0}):String.fromCodePoint=R}()})(i)}(cr)),cr}var dr,Rl;function xo(){return Rl||(Rl=1,dr={isArray:function(i){return Array.isArray?Array.isArray(i):Object.prototype.toString.call(i)==="[object Array]"}}),dr}var hr,Fl;function vo(){if(Fl)return hr;Fl=1;var i=xo().isArray;return hr={copyOptions:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},ensureFlagExists:function(e,t){(!(e in t)||typeof t[e]!="boolean")&&(t[e]=!1)},ensureSpacesExists:function(e){(!("spaces"in e)||typeof e.spaces!="number"&&typeof e.spaces!="string")&&(e.spaces=0)},ensureAlwaysArrayExists:function(e){(!("alwaysArray"in e)||typeof e.alwaysArray!="boolean"&&!i(e.alwaysArray))&&(e.alwaysArray=!1)},ensureKeyExists:function(e,t){(!(e+"Key"in t)||typeof t[e+"Key"]!="string")&&(t[e+"Key"]=t.compact?"_"+e:e)},checkFnExists:function(e,t){return e+"Fn"in t}},hr}var fr,Bl;function ru(){if(Bl)return fr;Bl=1;var i=Xg(),e=vo(),t=xo().isArray,n,s;function r(p){return n=e.copyOptions(p),e.ensureFlagExists("ignoreDeclaration",n),e.ensureFlagExists("ignoreInstruction",n),e.ensureFlagExists("ignoreAttributes",n),e.ensureFlagExists("ignoreText",n),e.ensureFlagExists("ignoreComment",n),e.ensureFlagExists("ignoreCdata",n),e.ensureFlagExists("ignoreDoctype",n),e.ensureFlagExists("compact",n),e.ensureFlagExists("alwaysChildren",n),e.ensureFlagExists("addParent",n),e.ensureFlagExists("trim",n),e.ensureFlagExists("nativeType",n),e.ensureFlagExists("nativeTypeAttributes",n),e.ensureFlagExists("sanitize",n),e.ensureFlagExists("instructionHasAttributes",n),e.ensureFlagExists("captureSpacesBetweenElements",n),e.ensureAlwaysArrayExists(n),e.ensureKeyExists("declaration",n),e.ensureKeyExists("instruction",n),e.ensureKeyExists("attributes",n),e.ensureKeyExists("text",n),e.ensureKeyExists("comment",n),e.ensureKeyExists("cdata",n),e.ensureKeyExists("doctype",n),e.ensureKeyExists("type",n),e.ensureKeyExists("name",n),e.ensureKeyExists("elements",n),e.ensureKeyExists("parent",n),e.checkFnExists("doctype",n),e.checkFnExists("instruction",n),e.checkFnExists("cdata",n),e.checkFnExists("comment",n),e.checkFnExists("text",n),e.checkFnExists("instructionName",n),e.checkFnExists("elementName",n),e.checkFnExists("attributeName",n),e.checkFnExists("attributeValue",n),e.checkFnExists("attributes",n),n}function o(p){var S=Number(p);if(!isNaN(S))return S;var w=p.toLowerCase();return w==="true"?!0:w==="false"?!1:p}function a(p,S){var w;if(n.compact){if(!s[n[p+"Key"]]&&(t(n.alwaysArray)?n.alwaysArray.indexOf(n[p+"Key"])!==-1:n.alwaysArray)&&(s[n[p+"Key"]]=[]),s[n[p+"Key"]]&&!t(s[n[p+"Key"]])&&(s[n[p+"Key"]]=[s[n[p+"Key"]]]),p+"Fn"in n&&typeof S=="string"&&(S=n[p+"Fn"](S,s)),p==="instruction"&&("instructionFn"in n||"instructionNameFn"in n)){for(w in S)if(S.hasOwnProperty(w))if("instructionFn"in n)S[w]=n.instructionFn(S[w],w,s);else{var m=S[w];delete S[w],S[n.instructionNameFn(w,m,s)]=m}}t(s[n[p+"Key"]])?s[n[p+"Key"]].push(S):s[n[p+"Key"]]=S}else{s[n.elementsKey]||(s[n.elementsKey]=[]);var E={};if(E[n.typeKey]=p,p==="instruction"){for(w in S)if(S.hasOwnProperty(w))break;E[n.nameKey]="instructionNameFn"in n?n.instructionNameFn(w,S,s):w,n.instructionHasAttributes?(E[n.attributesKey]=S[w][n.attributesKey],"instructionFn"in n&&(E[n.attributesKey]=n.instructionFn(E[n.attributesKey],w,s))):("instructionFn"in n&&(S[w]=n.instructionFn(S[w],w,s)),E[n.instructionKey]=S[w])}else p+"Fn"in n&&(S=n[p+"Fn"](S,s)),E[n[p+"Key"]]=S;n.addParent&&(E[n.parentKey]=s),s[n.elementsKey].push(E)}}function l(p){if("attributesFn"in n&&p&&(p=n.attributesFn(p,s)),(n.trim||"attributeValueFn"in n||"attributeNameFn"in n||n.nativeTypeAttributes)&&p){var S;for(S in p)if(p.hasOwnProperty(S)&&(n.trim&&(p[S]=p[S].trim()),n.nativeTypeAttributes&&(p[S]=o(p[S])),"attributeValueFn"in n&&(p[S]=n.attributeValueFn(p[S],S,s)),"attributeNameFn"in n)){var w=p[S];delete p[S],p[n.attributeNameFn(S,p[S],s)]=w}}return p}function c(p){var S={};if(p.body&&(p.name.toLowerCase()==="xml"||n.instructionHasAttributes)){for(var w=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,m;(m=w.exec(p.body))!==null;)S[m[1]]=m[2]||m[3]||m[4];S=l(S)}if(p.name.toLowerCase()==="xml"){if(n.ignoreDeclaration)return;s[n.declarationKey]={},Object.keys(S).length&&(s[n.declarationKey][n.attributesKey]=S),n.addParent&&(s[n.declarationKey][n.parentKey]=s)}else{if(n.ignoreInstruction)return;n.trim&&(p.body=p.body.trim());var E={};n.instructionHasAttributes&&Object.keys(S).length?(E[p.name]={},E[p.name][n.attributesKey]=S):E[p.name]=p.body,a("instruction",E)}}function u(p,S){var w;if(typeof p=="object"&&(S=p.attributes,p=p.name),S=l(S),"elementNameFn"in n&&(p=n.elementNameFn(p,s)),n.compact){if(w={},!n.ignoreAttributes&&S&&Object.keys(S).length){w[n.attributesKey]={};var m;for(m in S)S.hasOwnProperty(m)&&(w[n.attributesKey][m]=S[m])}!(p in s)&&(t(n.alwaysArray)?n.alwaysArray.indexOf(p)!==-1:n.alwaysArray)&&(s[p]=[]),s[p]&&!t(s[p])&&(s[p]=[s[p]]),t(s[p])?s[p].push(w):s[p]=w}else s[n.elementsKey]||(s[n.elementsKey]=[]),w={},w[n.typeKey]="element",w[n.nameKey]=p,!n.ignoreAttributes&&S&&Object.keys(S).length&&(w[n.attributesKey]=S),n.alwaysChildren&&(w[n.elementsKey]=[]),s[n.elementsKey].push(w);w[n.parentKey]=s,s=w}function d(p){n.ignoreText||!p.trim()&&!n.captureSpacesBetweenElements||(n.trim&&(p=p.trim()),n.nativeType&&(p=o(p)),n.sanitize&&(p=p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),a("text",p))}function h(p){n.ignoreComment||(n.trim&&(p=p.trim()),a("comment",p))}function f(p){var S=s[n.parentKey];n.addParent||delete s[n.parentKey],s=S}function g(p){n.ignoreCdata||(n.trim&&(p=p.trim()),a("cdata",p))}function y(p){n.ignoreDoctype||(p=p.replace(/^ /,""),n.trim&&(p=p.trim()),a("doctype",p))}function x(p){p.note=p}return fr=function(p,S){var w=i.parser(!0,{}),m={};if(s=m,n=r(S),w.opt={strictEntities:!0},w.onopentag=u,w.ontext=d,w.oncomment=h,w.onclosetag=f,w.onerror=x,w.oncdata=g,w.ondoctype=y,w.onprocessinginstruction=c,w.write(p).close(),m[n.elementsKey]){var E=m[n.elementsKey];delete m[n.elementsKey],m[n.elementsKey]=E,delete m.text}return m},fr}var pr,$l;function Qg(){if($l)return pr;$l=1;var i=vo(),e=ru();function t(n){var s=i.copyOptions(n);return i.ensureSpacesExists(s),s}return pr=function(n,s){var r,o,a,l;return r=t(s),o=e(n,r),l="compact"in r&&r.compact?"_parent":"parent","addParent"in r&&r.addParent?a=JSON.stringify(o,function(c,u){return c===l?"_":u},r.spaces):a=JSON.stringify(o,null,r.spaces),a.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")},pr}var mr,zl;function ou(){if(zl)return mr;zl=1;var i=vo(),e=xo().isArray,t,n;function s(w){var m=i.copyOptions(w);return i.ensureFlagExists("ignoreDeclaration",m),i.ensureFlagExists("ignoreInstruction",m),i.ensureFlagExists("ignoreAttributes",m),i.ensureFlagExists("ignoreText",m),i.ensureFlagExists("ignoreComment",m),i.ensureFlagExists("ignoreCdata",m),i.ensureFlagExists("ignoreDoctype",m),i.ensureFlagExists("compact",m),i.ensureFlagExists("indentText",m),i.ensureFlagExists("indentCdata",m),i.ensureFlagExists("indentAttributes",m),i.ensureFlagExists("indentInstruction",m),i.ensureFlagExists("fullTagEmptyElement",m),i.ensureFlagExists("noQuotesForNativeAttributes",m),i.ensureSpacesExists(m),typeof m.spaces=="number"&&(m.spaces=Array(m.spaces+1).join(" ")),i.ensureKeyExists("declaration",m),i.ensureKeyExists("instruction",m),i.ensureKeyExists("attributes",m),i.ensureKeyExists("text",m),i.ensureKeyExists("comment",m),i.ensureKeyExists("cdata",m),i.ensureKeyExists("doctype",m),i.ensureKeyExists("type",m),i.ensureKeyExists("name",m),i.ensureKeyExists("elements",m),i.checkFnExists("doctype",m),i.checkFnExists("instruction",m),i.checkFnExists("cdata",m),i.checkFnExists("comment",m),i.checkFnExists("text",m),i.checkFnExists("instructionName",m),i.checkFnExists("elementName",m),i.checkFnExists("attributeName",m),i.checkFnExists("attributeValue",m),i.checkFnExists("attributes",m),i.checkFnExists("fullTagEmptyElement",m),m}function r(w,m,E){return(!E&&w.spaces?`
`:"")+Array(m+1).join(w.spaces)}function o(w,m,E){if(m.ignoreAttributes)return"";"attributesFn"in m&&(w=m.attributesFn(w,n,t));var O,D,N,k,$=[];for(O in w)w.hasOwnProperty(O)&&w[O]!==null&&w[O]!==void 0&&(k=m.noQuotesForNativeAttributes&&typeof w[O]!="string"?"":'"',D=""+w[O],D=D.replace(/"/g,"&quot;"),N="attributeNameFn"in m?m.attributeNameFn(O,D,n,t):O,$.push(m.spaces&&m.indentAttributes?r(m,E+1,!1):" "),$.push(N+"="+k+("attributeValueFn"in m?m.attributeValueFn(D,O,n,t):D)+k));return w&&Object.keys(w).length&&m.spaces&&m.indentAttributes&&$.push(r(m,E,!1)),$.join("")}function a(w,m,E){return t=w,n="xml",m.ignoreDeclaration?"":"<?xml"+o(w[m.attributesKey],m,E)+"?>"}function l(w,m,E){if(m.ignoreInstruction)return"";var O;for(O in w)if(w.hasOwnProperty(O))break;var D="instructionNameFn"in m?m.instructionNameFn(O,w[O],n,t):O;if(typeof w[O]=="object")return t=w,n=D,"<?"+D+o(w[O][m.attributesKey],m,E)+"?>";var N=w[O]?w[O]:"";return"instructionFn"in m&&(N=m.instructionFn(N,O,n,t)),"<?"+D+(N?" "+N:"")+"?>"}function c(w,m){return m.ignoreComment?"":"<!--"+("commentFn"in m?m.commentFn(w,n,t):w)+"-->"}function u(w,m){return m.ignoreCdata?"":"<![CDATA["+("cdataFn"in m?m.cdataFn(w,n,t):w.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function d(w,m){return m.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in m?m.doctypeFn(w,n,t):w)+">"}function h(w,m){return m.ignoreText?"":(w=""+w,w=w.replace(/&amp;/g,"&"),w=w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in m?m.textFn(w,n,t):w)}function f(w,m){var E;if(w.elements&&w.elements.length)for(E=0;E<w.elements.length;++E)switch(w.elements[E][m.typeKey]){case"text":if(m.indentText)return!0;break;case"cdata":if(m.indentCdata)return!0;break;case"instruction":if(m.indentInstruction)return!0;break;case"doctype":case"comment":case"element":return!0;default:return!0}return!1}function g(w,m,E){t=w,n=w.name;var O=[],D="elementNameFn"in m?m.elementNameFn(w.name,w):w.name;O.push("<"+D),w[m.attributesKey]&&O.push(o(w[m.attributesKey],m,E));var N=w[m.elementsKey]&&w[m.elementsKey].length||w[m.attributesKey]&&w[m.attributesKey]["xml:space"]==="preserve";return N||("fullTagEmptyElementFn"in m?N=m.fullTagEmptyElementFn(w.name,w):N=m.fullTagEmptyElement),N?(O.push(">"),w[m.elementsKey]&&w[m.elementsKey].length&&(O.push(y(w[m.elementsKey],m,E+1)),t=w,n=w.name),O.push(m.spaces&&f(w,m)?`
`+Array(E+1).join(m.spaces):""),O.push("</"+D+">")):O.push("/>"),O.join("")}function y(w,m,E,O){return w.reduce(function(D,N){var k=r(m,E,O&&!D);switch(N.type){case"element":return D+k+g(N,m,E);case"comment":return D+k+c(N[m.commentKey],m);case"doctype":return D+k+d(N[m.doctypeKey],m);case"cdata":return D+(m.indentCdata?k:"")+u(N[m.cdataKey],m);case"text":return D+(m.indentText?k:"")+h(N[m.textKey],m);case"instruction":var $={};return $[N[m.nameKey]]=N[m.attributesKey]?N:N[m.instructionKey],D+(m.indentInstruction?k:"")+l($,m,E)}},"")}function x(w,m,E){var O;for(O in w)if(w.hasOwnProperty(O))switch(O){case m.parentKey:case m.attributesKey:break;case m.textKey:if(m.indentText||E)return!0;break;case m.cdataKey:if(m.indentCdata||E)return!0;break;case m.instructionKey:if(m.indentInstruction||E)return!0;break;case m.doctypeKey:case m.commentKey:return!0;default:return!0}return!1}function p(w,m,E,O,D){t=w,n=m;var N="elementNameFn"in E?E.elementNameFn(m,w):m;if(typeof w>"u"||w===null||w==="")return"fullTagEmptyElementFn"in E&&E.fullTagEmptyElementFn(m,w)||E.fullTagEmptyElement?"<"+N+"></"+N+">":"<"+N+"/>";var k=[];if(m){if(k.push("<"+N),typeof w!="object")return k.push(">"+h(w,E)+"</"+N+">"),k.join("");w[E.attributesKey]&&k.push(o(w[E.attributesKey],E,O));var $=x(w,E,!0)||w[E.attributesKey]&&w[E.attributesKey]["xml:space"]==="preserve";if($||("fullTagEmptyElementFn"in E?$=E.fullTagEmptyElementFn(m,w):$=E.fullTagEmptyElement),$)k.push(">");else return k.push("/>"),k.join("")}return k.push(S(w,E,O+1,!1)),t=w,n=m,m&&k.push((D?r(E,O,!1):"")+"</"+N+">"),k.join("")}function S(w,m,E,O){var D,N,k,$=[];for(N in w)if(w.hasOwnProperty(N))for(k=e(w[N])?w[N]:[w[N]],D=0;D<k.length;++D){switch(N){case m.declarationKey:$.push(a(k[D],m,E));break;case m.instructionKey:$.push((m.indentInstruction?r(m,E,O):"")+l(k[D],m,E));break;case m.attributesKey:case m.parentKey:break;case m.textKey:$.push((m.indentText?r(m,E,O):"")+h(k[D],m));break;case m.cdataKey:$.push((m.indentCdata?r(m,E,O):"")+u(k[D],m));break;case m.doctypeKey:$.push(r(m,E,O)+d(k[D],m));break;case m.commentKey:$.push(r(m,E,O)+c(k[D],m));break;default:$.push(r(m,E,O)+p(k[D],N,m,E,x(k[D],m)))}O=O&&!$.length}return $.join("")}return mr=function(w,m){m=s(m);var E=[];return t=w,n="_root_",m.compact?E.push(S(w,m,0,!0)):(w[m.declarationKey]&&E.push(a(w[m.declarationKey],m,0)),w[m.elementsKey]&&w[m.elementsKey].length&&E.push(y(w[m.elementsKey],m,0,!E.length))),E.join("")},mr}var gr,jl;function Zg(){if(jl)return gr;jl=1;var i=ou();return gr=function(e,t){e instanceof Buffer&&(e=e.toString());var n=null;if(typeof e=="string")try{n=JSON.parse(e)}catch{throw new Error("The JSON structure is invalid")}else n=e;return i(n,t)},gr}var br,Hl;function eb(){if(Hl)return br;Hl=1;var i=ru(),e=Qg(),t=ou(),n=Zg();return br={xml2js:i,xml2json:e,js2xml:t,json2xml:n},br}var Ul=eb();const wo=Symbol.for("yaml.alias"),Wr=Symbol.for("yaml.document"),St=Symbol.for("yaml.map"),au=Symbol.for("yaml.pair"),ut=Symbol.for("yaml.scalar"),vn=Symbol.for("yaml.seq"),Ye=Symbol.for("yaml.node.type"),qt=i=>!!i&&typeof i=="object"&&i[Ye]===wo,Gt=i=>!!i&&typeof i=="object"&&i[Ye]===Wr,wn=i=>!!i&&typeof i=="object"&&i[Ye]===St,le=i=>!!i&&typeof i=="object"&&i[Ye]===au,ne=i=>!!i&&typeof i=="object"&&i[Ye]===ut,_n=i=>!!i&&typeof i=="object"&&i[Ye]===vn;function ue(i){if(i&&typeof i=="object")switch(i[Ye]){case St:case vn:return!0}return!1}function de(i){if(i&&typeof i=="object")switch(i[Ye]){case wo:case St:case ut:case vn:return!0}return!1}const tb=i=>(ne(i)||ue(i))&&!!i.anchor,Re=Symbol("break visit"),lu=Symbol("skip children"),ct=Symbol("remove node");function Tt(i,e){const t=cu(e);Gt(i)?on(null,i.contents,t,Object.freeze([i]))===ct&&(i.contents=null):on(null,i,t,Object.freeze([]))}Tt.BREAK=Re;Tt.SKIP=lu;Tt.REMOVE=ct;function on(i,e,t,n){const s=uu(i,e,t,n);if(de(s)||le(s))return du(i,n,s),on(i,s,t,n);if(typeof s!="symbol"){if(ue(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const o=on(r,e.items[r],t,n);if(typeof o=="number")r=o-1;else{if(o===Re)return Re;o===ct&&(e.items.splice(r,1),r-=1)}}}else if(le(e)){n=Object.freeze(n.concat(e));const r=on("key",e.key,t,n);if(r===Re)return Re;r===ct&&(e.key=null);const o=on("value",e.value,t,n);if(o===Re)return Re;o===ct&&(e.value=null)}}return s}async function Ts(i,e){const t=cu(e);Gt(i)?await an(null,i.contents,t,Object.freeze([i]))===ct&&(i.contents=null):await an(null,i,t,Object.freeze([]))}Ts.BREAK=Re;Ts.SKIP=lu;Ts.REMOVE=ct;async function an(i,e,t,n){const s=await uu(i,e,t,n);if(de(s)||le(s))return du(i,n,s),an(i,s,t,n);if(typeof s!="symbol"){if(ue(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const o=await an(r,e.items[r],t,n);if(typeof o=="number")r=o-1;else{if(o===Re)return Re;o===ct&&(e.items.splice(r,1),r-=1)}}}else if(le(e)){n=Object.freeze(n.concat(e));const r=await an("key",e.key,t,n);if(r===Re)return Re;r===ct&&(e.key=null);const o=await an("value",e.value,t,n);if(o===Re)return Re;o===ct&&(e.value=null)}}return s}function cu(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function uu(i,e,t,n){var s,r,o,a,l;if(typeof t=="function")return t(i,e,n);if(wn(e))return(s=t.Map)==null?void 0:s.call(t,i,e,n);if(_n(e))return(r=t.Seq)==null?void 0:r.call(t,i,e,n);if(le(e))return(o=t.Pair)==null?void 0:o.call(t,i,e,n);if(ne(e))return(a=t.Scalar)==null?void 0:a.call(t,i,e,n);if(qt(e))return(l=t.Alias)==null?void 0:l.call(t,i,e,n)}function du(i,e,t){const n=e[e.length-1];if(ue(n))n.items[i]=t;else if(le(n))i==="key"?n.key=t:n.value=t;else if(Gt(n))n.contents=t;else{const s=qt(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const nb={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},ib=i=>i.replace(/[!,[\]{}]/g,e=>nb[e]);class Ne{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Ne.defaultYaml,e),this.tags=Object.assign({},Ne.defaultTags,t)}clone(){const e=new Ne(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Ne(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Ne.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Ne.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:Ne.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Ne.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[r,o]=n;return this.tags[r]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=n;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const o=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,o),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const o=e.slice(2,-1);return o==="!"||o==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),o)}const[,n,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[n];if(r)try{return r+decodeURIComponent(s)}catch(o){return t(String(o)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+ib(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&de(e.contents)){const r={};Tt(e.contents,(o,a)=>{de(a)&&a.tag&&(r[a.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,o]of n)r==="!!"&&o==="tag:yaml.org,2002:"||(!e||s.some(a=>a.startsWith(o)))&&t.push(`%TAG ${r} ${o}`);return t.join(`
`)}}Ne.defaultYaml={explicit:!1,version:"1.2"};Ne.defaultTags={"!!":"tag:yaml.org,2002:"};function hu(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(t)}return!0}function fu(i){const e=new Set;return Tt(i,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function pu(i,e){for(let t=1;;++t){const n=`${i}${t}`;if(!e.has(n))return n}}function sb(i,e){const t=[],n=new Map;let s=null;return{onAnchor:r=>{t.push(r),s||(s=fu(i));const o=pu(e,s);return s.add(o),o},setAnchors:()=>{for(const r of t){const o=n.get(r);if(typeof o=="object"&&o.anchor&&(ne(o.node)||ue(o.node)))o.node.anchor=o.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=r,a}}},sourceObjects:n}}function ln(i,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,r=n.length;s<r;++s){const o=n[s],a=ln(i,n,String(s),o);a===void 0?delete n[s]:a!==o&&(n[s]=a)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const r=n.get(s),o=ln(i,n,s,r);o===void 0?n.delete(s):o!==r&&n.set(s,o)}else if(n instanceof Set)for(const s of Array.from(n)){const r=ln(i,n,s,s);r===void 0?n.delete(s):r!==s&&(n.delete(s),n.add(r))}else for(const[s,r]of Object.entries(n)){const o=ln(i,n,s,r);o===void 0?delete n[s]:o!==r&&(n[s]=o)}return i.call(e,t,n)}function Ve(i,e,t){if(Array.isArray(i))return i.map((n,s)=>Ve(n,String(s),t));if(i&&typeof i.toJSON=="function"){if(!t||!tb(i))return i.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(i,n),t.onCreate=r=>{n.res=r,delete t.onCreate};const s=i.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof i=="bigint"&&!(t!=null&&t.keep)?Number(i):i}class _o{constructor(e){Object.defineProperty(this,Ye,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:s,reviver:r}={}){if(!Gt(e))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},a=Ve(this,"",o);if(typeof s=="function")for(const{count:l,res:c}of o.anchors.values())s(c,l);return typeof r=="function"?ln(r,{"":a},"",a):a}}class As extends _o{constructor(e){super(wo),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let t;return Tt(e,{Node:(n,s)=>{if(s===this)return Tt.BREAK;s.anchor===this.source&&(t=s)}}),t}toJSON(e,t){if(!t)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:r}=t,o=this.resolve(s);if(!o){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=n.get(o);if(a||(Ve(o,null,t),a=n.get(o)),!a||a.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(r>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Zi(s,o,n)),a.count*a.aliasCount>r)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(e,t,n){const s=`*${this.source}`;if(e){if(hu(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function Zi(i,e,t){if(qt(e)){const n=e.resolve(i),s=t&&n&&t.get(n);return s?s.count*s.aliasCount:0}else if(ue(e)){let n=0;for(const s of e.items){const r=Zi(i,s,t);r>n&&(n=r)}return n}else if(le(e)){const n=Zi(i,e.key,t),s=Zi(i,e.value,t);return Math.max(n,s)}return 1}const mu=i=>!i||typeof i!="function"&&typeof i!="object";class K extends _o{constructor(e){super(ut),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:Ve(this.value,e,t)}toString(){return String(this.value)}}K.BLOCK_FOLDED="BLOCK_FOLDED";K.BLOCK_LITERAL="BLOCK_LITERAL";K.PLAIN="PLAIN";K.QUOTE_DOUBLE="QUOTE_DOUBLE";K.QUOTE_SINGLE="QUOTE_SINGLE";const rb="tag:yaml.org,2002:";function ob(i,e,t){if(e){const n=t.filter(r=>r.tag===e),s=n.find(r=>!r.format)??n[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(n=>{var s;return((s=n.identify)==null?void 0:s.call(n,i))&&!n.format})}function ui(i,e,t){var d,h,f;if(Gt(i)&&(i=i.contents),de(i))return i;if(le(i)){const g=(h=(d=t.schema[St]).createNode)==null?void 0:h.call(d,t.schema,null,t);return g.items.push(i),g}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:r,schema:o,sourceObjects:a}=t;let l;if(n&&i&&typeof i=="object"){if(l=a.get(i),l)return l.anchor||(l.anchor=s(i)),new As(l.anchor);l={anchor:null,node:null},a.set(i,l)}e!=null&&e.startsWith("!!")&&(e=rb+e.slice(2));let c=ob(i,e,o.tags);if(!c){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const g=new K(i);return l&&(l.node=g),g}c=i instanceof Map?o[St]:Symbol.iterator in Object(i)?o[vn]:o[St]}r&&(r(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,i,t):typeof((f=c==null?void 0:c.nodeClass)==null?void 0:f.from)=="function"?c.nodeClass.from(t.schema,i,t):new K(i);return e?u.tag=e:c.default||(u.tag=c.tag),l&&(l.node=u),u}function ms(i,e,t){let n=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const o=[];o[r]=n,n=o}else n=new Map([[r,n]])}return ui(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const qn=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class gu extends _o{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>de(n)||le(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(qn(e))this.add(t);else{const[n,...s]=e,r=this.get(n,!0);if(ue(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(n,ms(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const s=this.get(t,!0);if(ue(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...s]=e,r=this.get(n,!0);return s.length===0?!t&&ne(r)?r.value:r:ue(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!le(t))return!1;const n=t.value;return n==null||e&&ne(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const s=this.get(t,!0);return ue(s)?s.hasIn(n):!1}setIn(e,t){const[n,...s]=e;if(s.length===0)this.set(n,t);else{const r=this.get(n,!0);if(ue(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(n,ms(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}const ab=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function yt(i,e){return/^\n+$/.test(i)?i.substring(1):e?i.replace(/^(?! *$)/gm,e):i}const Ft=(i,e,t)=>i.endsWith(`
`)?yt(t,e):t.includes(`
`)?`
`+yt(t,e):(i.endsWith(" ")?"":" ")+t,bu="flow",Kr="block",es="quoted";function Cs(i,e,t="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:r=20,onFold:o,onOverflow:a}={}){if(!s||s<0)return i;s<r&&(r=0);const l=Math.max(1+r,1+s-e.length);if(i.length<=l)return i;const c=[],u={};let d=s-e.length;typeof n=="number"&&(n>s-Math.max(2,r)?c.push(0):d=s-n);let h,f,g=!1,y=-1,x=-1,p=-1;t===Kr&&(y=Wl(i,y,e.length),y!==-1&&(d=y+l));for(let w;w=i[y+=1];){if(t===es&&w==="\\"){switch(x=y,i[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}p=y}if(w===`
`)t===Kr&&(y=Wl(i,y,e.length)),d=y+e.length+l,h=void 0;else{if(w===" "&&f&&f!==" "&&f!==`
`&&f!=="	"){const m=i[y+1];m&&m!==" "&&m!==`
`&&m!=="	"&&(h=y)}if(y>=d)if(h)c.push(h),d=h+l,h=void 0;else if(t===es){for(;f===" "||f==="	";)f=w,w=i[y+=1],g=!0;const m=y>p+1?y-2:x-1;if(u[m])return i;c.push(m),u[m]=!0,d=m+l,h=void 0}else g=!0}f=w}if(g&&a&&a(),c.length===0)return i;o&&o();let S=i.slice(0,c[0]);for(let w=0;w<c.length;++w){const m=c[w],E=c[w+1]||i.length;m===0?S=`
${e}${i.slice(0,E)}`:(t===es&&u[m]&&(S+=`${i[m]}\\`),S+=`
${e}${i.slice(m+1,E)}`)}return S}function Wl(i,e,t){let n=e,s=e+1,r=i[s];for(;r===" "||r==="	";)if(e<s+t)r=i[++e];else{do r=i[++e];while(r&&r!==`
`);n=e,s=e+1,r=i[s]}return n}const Is=(i,e)=>({indentAtStart:e?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),Ns=i=>/^(%|---|\.\.\.)/m.test(i);function lb(i,e,t){if(!e||e<0)return!1;const n=e-t,s=i.length;if(s<=n)return!1;for(let r=0,o=0;r<s;++r)if(i[r]===`
`){if(r-o>n)return!0;if(o=r+1,s-o<=n)return!1}return!0}function ii(i,e){const t=JSON.stringify(i);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(Ns(i)?"  ":"");let o="",a=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(o+=t.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{o+=t.slice(a,l);const u=t.substr(l+2,4);switch(u){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:u.substr(0,2)==="00"?o+="\\x"+u.substr(2):o+=t.substr(l,6)}l+=5,a=l+1}break;case"n":if(n||t[l+2]==='"'||t.length<s)l+=1;else{for(o+=t.slice(a,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)o+=`
`,l+=2;o+=r,t[l+2]===" "&&(o+="\\"),l+=1,a=l+1}break;default:l+=1}return o=a?o+t.slice(a):t,n?o:Cs(o,r,es,Is(e,!1))}function Vr(i,e){if(e.options.singleQuote===!1||e.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return ii(i,e);const t=e.indent||(Ns(i)?"  ":""),n="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:Cs(n,t,bu,Is(e,!1))}function cn(i,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=ii;else{const s=i.includes('"'),r=i.includes("'");s&&!r?n=Vr:r&&!s?n=ii:n=t?Vr:ii}return n(i,e)}let qr;try{qr=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{qr=/\n+(?!\n|$)/g}function ts({comment:i,type:e,value:t},n,s,r){const{blockQuote:o,commentString:a,lineWidth:l}=n.options;if(!o||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return cn(t,n);const c=n.indent||(n.forceBlockIndent||Ns(t)?"  ":""),u=o==="literal"?!0:o==="folded"||e===K.BLOCK_FOLDED?!1:e===K.BLOCK_LITERAL?!0:!lb(t,l,c.length);if(!t)return u?`|
`:`>
`;let d,h;for(h=t.length;h>0;--h){const E=t[h-1];if(E!==`
`&&E!=="	"&&E!==" ")break}let f=t.substring(h);const g=f.indexOf(`
`);g===-1?d="-":t===f||g!==f.length-1?(d="+",r&&r()):d="",f&&(t=t.slice(0,-f.length),f[f.length-1]===`
`&&(f=f.slice(0,-1)),f=f.replace(qr,`$&${c}`));let y=!1,x,p=-1;for(x=0;x<t.length;++x){const E=t[x];if(E===" ")y=!0;else if(E===`
`)p=x;else break}let S=t.substring(0,p<x?p+1:x);S&&(t=t.substring(S.length),S=S.replace(/\n+/g,`$&${c}`));let m=(y?c?"2":"1":"")+d;if(i&&(m+=" "+a(i.replace(/ ?[\r\n]+/g," ")),s&&s()),!u){const E=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let O=!1;const D=Is(n,!0);o!=="folded"&&e!==K.BLOCK_FOLDED&&(D.onOverflow=()=>{O=!0});const N=Cs(`${S}${E}${f}`,c,Kr,D);if(!O)return`>${m}
${c}${N}`}return t=t.replace(/\n+/g,`$&${c}`),`|${m}
${c}${S}${t}${f}`}function cb(i,e,t,n){const{type:s,value:r}=i,{actualString:o,implicitKey:a,indent:l,indentStep:c,inFlow:u}=e;if(a&&r.includes(`
`)||u&&/[[\]{},]/.test(r))return cn(r,e);if(!r||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return a||u||!r.includes(`
`)?cn(r,e):ts(i,e,t,n);if(!a&&!u&&s!==K.PLAIN&&r.includes(`
`))return ts(i,e,t,n);if(Ns(r)){if(l==="")return e.forceBlockIndent=!0,ts(i,e,t,n);if(a&&l===c)return cn(r,e)}const d=r.replace(/\n+/g,`$&
${l}`);if(o){const h=y=>{var x;return y.default&&y.tag!=="tag:yaml.org,2002:str"&&((x=y.test)==null?void 0:x.test(d))},{compat:f,tags:g}=e.doc.schema;if(g.some(h)||f!=null&&f.some(h))return cn(r,e)}return a?d:Cs(d,l,bu,Is(e,!1))}function gi(i,e,t,n){const{implicitKey:s,inFlow:r}=e,o=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:a}=i;a!==K.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=K.QUOTE_DOUBLE);const l=u=>{switch(u){case K.BLOCK_FOLDED:case K.BLOCK_LITERAL:return s||r?cn(o.value,e):ts(o,e,t,n);case K.QUOTE_DOUBLE:return ii(o.value,e);case K.QUOTE_SINGLE:return Vr(o.value,e);case K.PLAIN:return cb(o,e,t,n);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:u,defaultStringType:d}=e.options,h=s&&u||d;if(c=l(h),c===null)throw new Error(`Unsupported default string type ${h}`)}return c}function yu(i,e){const t=Object.assign({blockQuote:!0,commentString:ab,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:i,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function ub(i,e){var s;if(e.tag){const r=i.filter(o=>o.tag===e.tag);if(r.length>0)return r.find(o=>o.format===e.format)??r[0]}let t,n;if(ne(e)){n=e.value;let r=i.filter(o=>{var a;return(a=o.identify)==null?void 0:a.call(o,n)});if(r.length>1){const o=r.filter(a=>a.test);o.length>0&&(r=o)}t=r.find(o=>o.format===e.format)??r.find(o=>!o.format)}else n=e,t=i.find(r=>r.nodeClass&&n instanceof r.nodeClass);if(!t){const r=((s=n==null?void 0:n.constructor)==null?void 0:s.name)??typeof n;throw new Error(`Tag not resolved for ${r} value`)}return t}function db(i,e,{anchors:t,doc:n}){if(!n.directives)return"";const s=[],r=(ne(i)||ue(i))&&i.anchor;r&&hu(r)&&(t.add(r),s.push(`&${r}`));const o=i.tag?i.tag:e.default?null:e.tag;return o&&s.push(n.directives.tagString(o)),s.join(" ")}function bn(i,e,t,n){var l;if(le(i))return i.toString(e,t,n);if(qt(i)){if(e.doc.directives)return i.toString(e);if((l=e.resolvedAliases)!=null&&l.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(i):e.resolvedAliases=new Set([i]),i=i.resolve(e.doc)}let s;const r=de(i)?i:e.doc.createNode(i,{onTagObj:c=>s=c});s||(s=ub(e.doc.schema.tags,r));const o=db(r,s,e);o.length>0&&(e.indentAtStart=(e.indentAtStart??0)+o.length+1);const a=typeof s.stringify=="function"?s.stringify(r,e,t,n):ne(r)?gi(r,e,t,n):r.toString(e,t,n);return o?ne(r)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${e.indent}${a}`:a}function hb({key:i,value:e},t,n,s){const{allNullValues:r,doc:o,indent:a,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:d}}=t;let h=de(i)&&i.comment||null;if(d){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(ue(i)||!de(i)&&typeof i=="object"){const D="With simple keys, collection cannot be used as a key value";throw new Error(D)}}let f=!d&&(!i||h&&e==null&&!t.inFlow||ue(i)||(ne(i)?i.type===K.BLOCK_FOLDED||i.type===K.BLOCK_LITERAL:typeof i=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!f&&(d||!r),indent:a+l});let g=!1,y=!1,x=bn(i,t,()=>g=!0,()=>y=!0);if(!f&&!t.inFlow&&x.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(t.inFlow){if(r||e==null)return g&&n&&n(),x===""?"?":f?`? ${x}`:x}else if(r&&!d||e==null&&f)return x=`? ${x}`,h&&!g?x+=Ft(x,t.indent,c(h)):y&&s&&s(),x;g&&(h=null),f?(h&&(x+=Ft(x,t.indent,c(h))),x=`? ${x}
${a}:`):(x=`${x}:`,h&&(x+=Ft(x,t.indent,c(h))));let p,S,w;de(e)?(p=!!e.spaceBefore,S=e.commentBefore,w=e.comment):(p=!1,S=null,w=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!f&&!h&&ne(e)&&(t.indentAtStart=x.length+1),y=!1,!u&&l.length>=2&&!t.inFlow&&!f&&_n(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let m=!1;const E=bn(e,t,()=>m=!0,()=>y=!0);let O=" ";if(h||p||S){if(O=p?`
`:"",S){const D=c(S);O+=`
${yt(D,t.indent)}`}E===""&&!t.inFlow?O===`
`&&(O=`

`):O+=`
${t.indent}`}else if(!f&&ue(e)){const D=E[0],N=E.indexOf(`
`),k=N!==-1,$=t.inFlow??e.flow??e.items.length===0;if(k||!$){let j=!1;if(k&&(D==="&"||D==="!")){let v=E.indexOf(" ");D==="&"&&v!==-1&&v<N&&E[v+1]==="!"&&(v=E.indexOf(" ",v+1)),(v===-1||N<v)&&(j=!0)}j||(O=`
${t.indent}`)}}else(E===""||E[0]===`
`)&&(O="");return x+=O+E,t.inFlow?m&&n&&n():w&&!m?x+=Ft(x,t.indent,c(w)):y&&s&&s(),x}function xu(i,e){(i==="debug"||i==="warn")&&console.warn(e)}const Ui="<<",xt={identify:i=>i===Ui||typeof i=="symbol"&&i.description===Ui,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new K(Symbol(Ui)),{addToJSMap:vu}),stringify:()=>Ui},fb=(i,e)=>(xt.identify(e)||ne(e)&&(!e.type||e.type===K.PLAIN)&&xt.identify(e.value))&&(i==null?void 0:i.doc.schema.tags.some(t=>t.tag===xt.tag&&t.default));function vu(i,e,t){if(t=i&&qt(t)?t.resolve(i.doc):t,_n(t))for(const n of t.items)yr(i,e,n);else if(Array.isArray(t))for(const n of t)yr(i,e,n);else yr(i,e,t)}function yr(i,e,t){const n=i&&qt(t)?t.resolve(i.doc):t;if(!wn(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,i,Map);for(const[r,o]of s)e instanceof Map?e.has(r)||e.set(r,o):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function wu(i,e,{key:t,value:n}){if(de(t)&&t.addToJSMap)t.addToJSMap(i,e,n);else if(fb(i,t))vu(i,e,n);else{const s=Ve(t,"",i);if(e instanceof Map)e.set(s,Ve(n,s,i));else if(e instanceof Set)e.add(s);else{const r=pb(t,s,i),o=Ve(n,r,i);r in e?Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[r]=o}}return e}function pb(i,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(de(i)&&(t!=null&&t.doc)){const n=yu(t.doc,{});n.anchors=new Set;for(const r of t.anchors.keys())n.anchors.add(r.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=i.toString(n);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),xu(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function ko(i,e,t){const n=ui(i,void 0,t),s=ui(e,void 0,t);return new Ee(n,s)}class Ee{constructor(e,t=null){Object.defineProperty(this,Ye,{value:au}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return de(t)&&(t=t.clone(e)),de(n)&&(n=n.clone(e)),new Ee(t,n)}toJSON(e,t){const n=t!=null&&t.mapAsMap?new Map:{};return wu(t,n,this)}toString(e,t,n){return e!=null&&e.doc?hb(this,e,t,n):JSON.stringify(this)}}function _u(i,e,t){return(e.inFlow??i.flow?gb:mb)(i,e,t)}function mb({comment:i,items:e},t,{blockItemPrefix:n,flowChars:s,itemIndent:r,onChompKeep:o,onComment:a}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:r,type:null});let d=!1;const h=[];for(let g=0;g<e.length;++g){const y=e[g];let x=null;if(de(y))!d&&y.spaceBefore&&h.push(""),gs(t,h,y.commentBefore,d),y.comment&&(x=y.comment);else if(le(y)){const S=de(y.key)?y.key:null;S&&(!d&&S.spaceBefore&&h.push(""),gs(t,h,S.commentBefore,d))}d=!1;let p=bn(y,u,()=>x=null,()=>d=!0);x&&(p+=Ft(p,r,c(x))),d&&x&&(d=!1),h.push(n+p)}let f;if(h.length===0)f=s.start+s.end;else{f=h[0];for(let g=1;g<h.length;++g){const y=h[g];f+=y?`
${l}${y}`:`
`}}return i?(f+=`
`+yt(c(i),l),a&&a()):d&&o&&o(),f}function gb({items:i},e,{flowChars:t,itemIndent:n}){const{indent:s,indentStep:r,flowCollectionPadding:o,options:{commentString:a}}=e;n+=r;const l=Object.assign({},e,{indent:n,inFlow:!0,type:null});let c=!1,u=0;const d=[];for(let g=0;g<i.length;++g){const y=i[g];let x=null;if(de(y))y.spaceBefore&&d.push(""),gs(e,d,y.commentBefore,!1),y.comment&&(x=y.comment);else if(le(y)){const S=de(y.key)?y.key:null;S&&(S.spaceBefore&&d.push(""),gs(e,d,S.commentBefore,!1),S.comment&&(c=!0));const w=de(y.value)?y.value:null;w?(w.comment&&(x=w.comment),w.commentBefore&&(c=!0)):y.value==null&&(S!=null&&S.comment)&&(x=S.comment)}x&&(c=!0);let p=bn(y,l,()=>x=null);g<i.length-1&&(p+=","),x&&(p+=Ft(p,n,a(x))),!c&&(d.length>u||p.includes(`
`))&&(c=!0),d.push(p),u=d.length}const{start:h,end:f}=t;if(d.length===0)return h+f;if(!c){const g=d.reduce((y,x)=>y+x.length+2,2);c=e.options.lineWidth>0&&g>e.options.lineWidth}if(c){let g=h;for(const y of d)g+=y?`
${r}${s}${y}`:`
`;return`${g}
${s}${f}`}else return`${h}${o}${d.join(" ")}${o}${f}`}function gs({indent:i,options:{commentString:e}},t,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const r=yt(e(n),i);t.push(r.trimStart())}}function Bt(i,e){const t=ne(e)?e.value:e;for(const n of i)if(le(n)&&(n.key===e||n.key===t||ne(n.key)&&n.key.value===t))return n}class $e extends gu{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(St,e),this.items=[]}static from(e,t,n){const{keepUndefined:s,replacer:r}=n,o=new this(e),a=(l,c)=>{if(typeof r=="function")c=r.call(t,l,c);else if(Array.isArray(r)&&!r.includes(l))return;(c!==void 0||s)&&o.items.push(ko(l,c,n))};if(t instanceof Map)for(const[l,c]of t)a(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))a(l,t[l]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){var o;let n;le(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new Ee(e,e==null?void 0:e.value):n=new Ee(e.key,e.value);const s=Bt(this.items,n.key),r=(o=this.schema)==null?void 0:o.sortMapEntries;if(s){if(!t)throw new Error(`Key ${n.key} already set`);ne(s.value)&&mu(n.value)?s.value.value=n.value:s.value=n.value}else if(r){const a=this.items.findIndex(l=>r(n,l)<0);a===-1?this.items.push(n):this.items.splice(a,0,n)}else this.items.push(n)}delete(e){const t=Bt(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const n=Bt(this.items,e),s=n==null?void 0:n.value;return(!t&&ne(s)?s.value:s)??void 0}has(e){return!!Bt(this.items,e)}set(e,t){this.add(new Ee(e,t),!0)}toJSON(e,t,n){const s=n?new n:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items)wu(t,s,r);return s}toString(e,t,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!le(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),_u(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const kn={collection:"map",default:!0,nodeClass:$e,tag:"tag:yaml.org,2002:map",resolve(i,e){return wn(i)||e("Expected a mapping for this tag"),i},createNode:(i,e,t)=>$e.from(i,e,t)};class At extends gu{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(vn,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Wi(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Wi(e);if(typeof n!="number")return;const s=this.items[n];return!t&&ne(s)?s.value:s}has(e){const t=Wi(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Wi(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];ne(s)&&mu(t)?s.value=t:this.items[n]=t}toJSON(e,t){const n=[];t!=null&&t.onCreate&&t.onCreate(n);let s=0;for(const r of this.items)n.push(Ve(r,String(s++),t));return n}toString(e,t,n){return e?_u(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let a of t){if(typeof s=="function"){const l=t instanceof Set?a:String(o++);a=s.call(t,l,a)}r.items.push(ui(a,void 0,n))}}return r}}function Wi(i){let e=ne(i)?i.value:i;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Sn={collection:"seq",default:!0,nodeClass:At,tag:"tag:yaml.org,2002:seq",resolve(i,e){return _n(i)||e("Expected a sequence for this tag"),i},createNode:(i,e,t)=>At.from(i,e,t)},Ms={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,e,t,n){return e=Object.assign({actualString:!0},e),gi(i,e,t,n)}},Os={identify:i=>i==null,createNode:()=>new K(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new K(null),stringify:({source:i},e)=>typeof i=="string"&&Os.test.test(i)?i:e.options.nullStr},So={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new K(i[0]==="t"||i[0]==="T"),stringify({source:i,value:e},t){if(i&&So.test.test(i)){const n=i[0]==="t"||i[0]==="T";if(e===n)return i}return e?t.options.trueStr:t.options.falseStr}};function et({format:i,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=JSON.stringify(n);if(!i&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(r)){let o=r.indexOf(".");o<0&&(o=r.length,r+=".");let a=e-(r.length-o-1);for(;a-- >0;)r+="0"}return r}const ku={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:et},Su={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():et(i)}},Eu={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const e=new K(parseFloat(i)),t=i.indexOf(".");return t!==-1&&i[i.length-1]==="0"&&(e.minFractionDigits=i.length-t-1),e},stringify:et},Ls=i=>typeof i=="bigint"||Number.isInteger(i),Eo=(i,e,t,{intAsBigInt:n})=>n?BigInt(i):parseInt(i.substring(e),t);function Tu(i,e,t){const{value:n}=i;return Ls(n)&&n>=0?t+n.toString(e):et(i)}const Au={identify:i=>Ls(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,e,t)=>Eo(i,2,8,t),stringify:i=>Tu(i,8,"0o")},Cu={identify:Ls,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,e,t)=>Eo(i,0,10,t),stringify:et},Iu={identify:i=>Ls(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,e,t)=>Eo(i,2,16,t),stringify:i=>Tu(i,16,"0x")},bb=[kn,Sn,Ms,Os,So,Au,Cu,Iu,ku,Su,Eu];function Kl(i){return typeof i=="bigint"||Number.isInteger(i)}const Ki=({value:i})=>JSON.stringify(i),yb=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:Ki},{identify:i=>i==null,createNode:()=>new K(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ki},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:Ki},{identify:Kl,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,e,{intAsBigInt:t})=>t?BigInt(i):parseInt(i,10),stringify:({value:i})=>Kl(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:Ki}],xb={default:!0,tag:"",test:/^/,resolve(i,e){return e(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},vb=[kn,Sn].concat(yb,xb),To={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,e){if(typeof atob=="function"){const t=atob(i.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:e,value:t},n,s,r){const o=t;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e||(e=K.BLOCK_LITERAL),e!==K.QUOTE_DOUBLE){const l=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),c=Math.ceil(a.length/l),u=new Array(c);for(let d=0,h=0;d<c;++d,h+=l)u[d]=a.substr(h,l);a=u.join(e===K.BLOCK_LITERAL?`
`:" ")}return gi({comment:i,type:e,value:a},n,s,r)}};function Nu(i,e){if(_n(i))for(let t=0;t<i.items.length;++t){let n=i.items[t];if(!le(n)){if(wn(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const s=n.items[0]||new Ee(new K(null));if(n.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${n.commentBefore}
${s.key.commentBefore}`:n.commentBefore),n.comment){const r=s.value??s.key;r.comment=r.comment?`${n.comment}
${r.comment}`:n.comment}n=s}i.items[t]=le(n)?n:new Ee(n)}}else e("Expected a sequence for this tag");return i}function Mu(i,e,t){const{replacer:n}=t,s=new At(i);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof n=="function"&&(o=n.call(e,String(r++),o));let a,l;if(Array.isArray(o))if(o.length===2)a=o[0],l=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length===1)a=c[0],l=o[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=o;s.items.push(ko(a,l,t))}return s}const Ao={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Nu,createNode:Mu};class hn extends At{constructor(){super(),this.add=$e.prototype.add.bind(this),this.delete=$e.prototype.delete.bind(this),this.get=$e.prototype.get.bind(this),this.has=$e.prototype.has.bind(this),this.set=$e.prototype.set.bind(this),this.tag=hn.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t!=null&&t.onCreate&&t.onCreate(n);for(const s of this.items){let r,o;if(le(s)?(r=Ve(s.key,"",t),o=Ve(s.value,r,t)):r=Ve(s,"",t),n.has(r))throw new Error("Ordered maps must not include duplicate keys");n.set(r,o)}return n}static from(e,t,n){const s=Mu(e,t,n),r=new this;return r.items=s.items,r}}hn.tag="tag:yaml.org,2002:omap";const Co={collection:"seq",identify:i=>i instanceof Map,nodeClass:hn,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,e){const t=Nu(i,e),n=[];for(const{key:s}of t.items)ne(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new hn,t)},createNode:(i,e,t)=>hn.from(i,e,t)};function Ou({value:i,source:e},t){return e&&(i?Lu:Du).test.test(e)?e:i?t.options.trueStr:t.options.falseStr}const Lu={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new K(!0),stringify:Ou},Du={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new K(!1),stringify:Ou},wb={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:et},_b={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():et(i)}},kb={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const e=new K(parseFloat(i.replace(/_/g,""))),t=i.indexOf(".");if(t!==-1){const n=i.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:et},bi=i=>typeof i=="bigint"||Number.isInteger(i);function Ds(i,e,t,{intAsBigInt:n}){const s=i[0];if((s==="-"||s==="+")&&(e+=1),i=i.substring(e).replace(/_/g,""),n){switch(t){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const o=BigInt(i);return s==="-"?BigInt(-1)*o:o}const r=parseInt(i,t);return s==="-"?-1*r:r}function Io(i,e,t){const{value:n}=i;if(bi(n)){const s=n.toString(e);return n<0?"-"+t+s.substr(1):t+s}return et(i)}const Sb={identify:bi,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,e,t)=>Ds(i,2,2,t),stringify:i=>Io(i,2,"0b")},Eb={identify:bi,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,e,t)=>Ds(i,1,8,t),stringify:i=>Io(i,8,"0")},Tb={identify:bi,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,e,t)=>Ds(i,0,10,t),stringify:et},Ab={identify:bi,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,e,t)=>Ds(i,2,16,t),stringify:i=>Io(i,16,"0x")};class fn extends $e{constructor(e){super(e),this.tag=fn.tag}add(e){let t;le(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new Ee(e.key,null):t=new Ee(e,null),Bt(this.items,t.key)||this.items.push(t)}get(e,t){const n=Bt(this.items,e);return!t&&le(n)?ne(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=Bt(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new Ee(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof s=="function"&&(o=s.call(t,o,o)),r.items.push(ko(o,null,n));return r}}fn.tag="tag:yaml.org,2002:set";const No={collection:"map",identify:i=>i instanceof Set,nodeClass:fn,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,e,t)=>fn.from(i,e,t),resolve(i,e){if(wn(i)){if(i.hasAllNullValues(!0))return Object.assign(new fn,i);e("Set items must all have null values")}else e("Expected a mapping for this tag");return i}};function Mo(i,e){const t=i[0],n=t==="-"||t==="+"?i.substring(1):i,s=o=>e?BigInt(o):Number(o),r=n.replace(/_/g,"").split(":").reduce((o,a)=>o*s(60)+s(a),s(0));return t==="-"?s(-1)*r:r}function Pu(i){let{value:e}=i,t=o=>o;if(typeof e=="bigint")t=o=>BigInt(o);else if(isNaN(e)||!isFinite(e))return et(i);let n="";e<0&&(n="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),n+r.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Ru={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,e,{intAsBigInt:t})=>Mo(i,t),stringify:Pu},Fu={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>Mo(i,!1),stringify:Pu},Ps={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const e=i.match(Ps.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,s,r,o,a]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,n-1,s,r||0,o||0,a||0,l);const u=e[8];if(u&&u!=="Z"){let d=Mo(u,!1);Math.abs(d)<30&&(d*=60),c-=6e4*d}return new Date(c)},stringify:({value:i})=>i.toISOString().replace(/(T00:00:00)?\.000Z$/,"")},Vl=[kn,Sn,Ms,Os,Lu,Du,Sb,Eb,Tb,Ab,wb,_b,kb,To,xt,Co,Ao,No,Ru,Fu,Ps],ql=new Map([["core",bb],["failsafe",[kn,Sn,Ms]],["json",vb],["yaml11",Vl],["yaml-1.1",Vl]]),Gl={binary:To,bool:So,float:Eu,floatExp:Su,floatNaN:ku,floatTime:Fu,int:Cu,intHex:Iu,intOct:Au,intTime:Ru,map:kn,merge:xt,null:Os,omap:Co,pairs:Ao,seq:Sn,set:No,timestamp:Ps},Cb={"tag:yaml.org,2002:binary":To,"tag:yaml.org,2002:merge":xt,"tag:yaml.org,2002:omap":Co,"tag:yaml.org,2002:pairs":Ao,"tag:yaml.org,2002:set":No,"tag:yaml.org,2002:timestamp":Ps};function xr(i,e,t){const n=ql.get(e);if(n&&!i)return t&&!n.includes(xt)?n.concat(xt):n.slice();let s=n;if(!s)if(Array.isArray(i))s=[];else{const r=Array.from(ql.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(i))for(const r of i)s=s.concat(r);else typeof i=="function"&&(s=i(s.slice()));return t&&(s=s.concat(xt)),s.reduce((r,o)=>{const a=typeof o=="string"?Gl[o]:o;if(!a){const l=JSON.stringify(o),c=Object.keys(Gl).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return r.includes(a)||r.push(a),r},[])}const Ib=(i,e)=>i.key<e.key?-1:i.key>e.key?1:0;class Rs{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:s,schema:r,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(e)?xr(e,"compat"):e?xr(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?Cb:{},this.tags=xr(t,this.name,n),this.toStringOptions=a??null,Object.defineProperty(this,St,{value:kn}),Object.defineProperty(this,ut,{value:Ms}),Object.defineProperty(this,vn,{value:Sn}),this.sortMapEntries=typeof o=="function"?o:o===!0?Ib:null}clone(){const e=Object.create(Rs.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Nb(i,e){var l;const t=[];let n=e.directives===!0;if(e.directives!==!1&&i.directives){const c=i.directives.toString(i);c?(t.push(c),n=!0):i.directives.docStart&&(n=!0)}n&&t.push("---");const s=yu(i,e),{commentString:r}=s.options;if(i.commentBefore){t.length!==1&&t.unshift("");const c=r(i.commentBefore);t.unshift(yt(c,""))}let o=!1,a=null;if(i.contents){if(de(i.contents)){if(i.contents.spaceBefore&&n&&t.push(""),i.contents.commentBefore){const d=r(i.contents.commentBefore);t.push(yt(d,""))}s.forceBlockIndent=!!i.comment,a=i.contents.comment}const c=a?void 0:()=>o=!0;let u=bn(i.contents,s,()=>a=null,c);a&&(u+=Ft(u,"",r(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(bn(i.contents,s));if((l=i.directives)!=null&&l.docEnd)if(i.comment){const c=r(i.comment);c.includes(`
`)?(t.push("..."),t.push(yt(c,""))):t.push(`... ${c}`)}else t.push("...");else{let c=i.comment;c&&o&&(c=c.replace(/^\n+/,"")),c&&((!o||a)&&t[t.length-1]!==""&&t.push(""),t.push(yt(r(c),"")))}return t.join(`
`)+`
`}class En{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Ye,{value:Wr});let s=null;typeof t=="function"||Array.isArray(t)?s=t:n===void 0&&t&&(n=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=r;let{version:o}=r;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new Ne({version:o}),this.setSchema(o,n),this.contents=e===void 0?null:this.createNode(e,s,n)}clone(){const e=Object.create(En.prototype,{[Ye]:{value:Wr}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=de(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){nn(this.contents)&&this.contents.add(e)}addIn(e,t){nn(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=fu(this);e.anchor=!t||n.has(t)?pu(t||"a",n):t}return new As(e.anchor)}createNode(e,t,n){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const x=S=>typeof S=="number"||S instanceof String||S instanceof Number,p=t.filter(x).map(String);p.length>0&&(t=t.concat(p)),s=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:o,flow:a,keepUndefined:l,onTagObj:c,tag:u}=n??{},{onAnchor:d,setAnchors:h,sourceObjects:f}=sb(this,o||"a"),g={aliasDuplicateObjects:r??!0,keepUndefined:l??!1,onAnchor:d,onTagObj:c,replacer:s,schema:this.schema,sourceObjects:f},y=ui(e,u,g);return a&&ue(y)&&(y.flow=!0),h(),y}createPair(e,t,n={}){const s=this.createNode(e,null,n),r=this.createNode(t,null,n);return new Ee(s,r)}delete(e){return nn(this.contents)?this.contents.delete(e):!1}deleteIn(e){return qn(e)?this.contents==null?!1:(this.contents=null,!0):nn(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return ue(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return qn(e)?!t&&ne(this.contents)?this.contents.value:this.contents:ue(this.contents)?this.contents.getIn(e,t):void 0}has(e){return ue(this.contents)?this.contents.has(e):!1}hasIn(e){return qn(e)?this.contents!==void 0:ue(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=ms(this.schema,[e],t):nn(this.contents)&&this.contents.set(e,t)}setIn(e,t){qn(e)?this.contents=t:this.contents==null?this.contents=ms(this.schema,Array.from(e),t):nn(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Ne({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Ne({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new Rs(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:s,onAnchor:r,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},l=Ve(this.contents,t??"",a);if(typeof r=="function")for(const{count:c,res:u}of a.anchors.values())r(u,c);return typeof o=="function"?ln(o,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Nb(this,e)}}function nn(i){if(ue(i))return!0;throw new Error("Expected a YAML collection as document contents")}class Oo extends Error{constructor(e,t,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=t}}class $t extends Oo{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class Bu extends Oo{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const bs=(i,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:n,col:s}=t.linePos[0];t.message+=` at line ${n}, column ${s}`;let r=s-1,o=i.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&o.length>80){const a=Math.min(r-39,o.length-79);o="…"+o.substring(a),r-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),n>1&&/^ *$/.test(o.substring(0,r))){let a=i.substring(e.lineStarts[n-2],e.lineStarts[n-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const l=t.linePos[1];l&&l.line===n&&l.col>s&&(a=Math.max(1,Math.min(l.col-s,80-r)));const c=" ".repeat(r)+"^".repeat(a);t.message+=`:

${o}
${c}
`}};function yn(i,{flow:e,indicator:t,next:n,offset:s,onError:r,parentIndent:o,startOnNewline:a}){let l=!1,c=a,u=a,d="",h="",f=!1,g=!1,y=null,x=null,p=null,S=null,w=null,m=null,E=null;for(const N of i)switch(g&&(N.type!=="space"&&N.type!=="newline"&&N.type!=="comma"&&r(N.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g=!1),y&&(c&&N.type!=="comment"&&N.type!=="newline"&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),N.type){case"space":!e&&(t!=="doc-start"||(n==null?void 0:n.type)!=="flow-collection")&&N.source.includes("	")&&(y=N),u=!0;break;case"comment":{u||r(N,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const k=N.source.substring(1)||" ";d?d+=h+k:d=k,h="",c=!1;break}case"newline":c?d?d+=N.source:(!m||t!=="seq-item-ind")&&(l=!0):h+=N.source,c=!0,f=!0,(x||p)&&(S=N),u=!0;break;case"anchor":x&&r(N,"MULTIPLE_ANCHORS","A node can have at most one anchor"),N.source.endsWith(":")&&r(N.offset+N.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),x=N,E===null&&(E=N.offset),c=!1,u=!1,g=!0;break;case"tag":{p&&r(N,"MULTIPLE_TAGS","A node can have at most one tag"),p=N,E===null&&(E=N.offset),c=!1,u=!1,g=!0;break}case t:(x||p)&&r(N,"BAD_PROP_ORDER",`Anchors and tags must be after the ${N.source} indicator`),m&&r(N,"UNEXPECTED_TOKEN",`Unexpected ${N.source} in ${e??"collection"}`),m=N,c=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(e){w&&r(N,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),w=N,c=!1,u=!1;break}default:r(N,"UNEXPECTED_TOKEN",`Unexpected ${N.type} token`),c=!1,u=!1}const O=i[i.length-1],D=O?O.offset+O.source.length:s;return g&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(c&&y.indent<=o||(n==null?void 0:n.type)==="block-map"||(n==null?void 0:n.type)==="block-seq")&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:w,found:m,spaceBefore:l,comment:d,hasNewline:f,anchor:x,tag:p,newlineAfterProp:S,end:D,start:E??D}}function di(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const e of i.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of i.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(di(e.key)||di(e.value))return!0}return!1;default:return!0}}function Gr(i,e,t){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===i&&(n.source==="]"||n.source==="}")&&di(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function $u(i,e,t){const{uniqueKeys:n}=i.options;if(n===!1)return!1;const s=typeof n=="function"?n:(r,o)=>r===o||ne(r)&&ne(o)&&r.value===o.value;return e.some(r=>s(r.key,t))}const Yl="All mapping items must start at the same column";function Mb({composeNode:i,composeEmptyNode:e},t,n,s,r){var u;const o=(r==null?void 0:r.nodeClass)??$e,a=new o(t.schema);t.atRoot&&(t.atRoot=!1);let l=n.offset,c=null;for(const d of n.items){const{start:h,key:f,sep:g,value:y}=d,x=yn(h,{indicator:"explicit-key-ind",next:f??(g==null?void 0:g[0]),offset:l,onError:s,parentIndent:n.indent,startOnNewline:!0}),p=!x.found;if(p){if(f&&(f.type==="block-seq"?s(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==n.indent&&s(l,"BAD_INDENT",Yl)),!x.anchor&&!x.tag&&!g){c=x.end,x.comment&&(a.comment?a.comment+=`
`+x.comment:a.comment=x.comment);continue}(x.newlineAfterProp||di(f))&&s(f??h[h.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=x.found)==null?void 0:u.indent)!==n.indent&&s(l,"BAD_INDENT",Yl);t.atKey=!0;const S=x.end,w=f?i(t,f,x,s):e(t,S,h,null,x,s);t.schema.compat&&Gr(n.indent,f,s),t.atKey=!1,$u(t,a.items,w)&&s(S,"DUPLICATE_KEY","Map keys must be unique");const m=yn(g??[],{indicator:"map-value-ind",next:y,offset:w.range[2],onError:s,parentIndent:n.indent,startOnNewline:!f||f.type==="block-scalar"});if(l=m.end,m.found){p&&((y==null?void 0:y.type)==="block-map"&&!m.hasNewline&&s(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&x.start<m.found.offset-1024&&s(w.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const E=y?i(t,y,m,s):e(t,l,g,null,m,s);t.schema.compat&&Gr(n.indent,y,s),l=E.range[2];const O=new Ee(w,E);t.options.keepSourceTokens&&(O.srcToken=d),a.items.push(O)}else{p&&s(w.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),m.comment&&(w.comment?w.comment+=`
`+m.comment:w.comment=m.comment);const E=new Ee(w);t.options.keepSourceTokens&&(E.srcToken=d),a.items.push(E)}}return c&&c<l&&s(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[n.offset,l,c??l],a}function Ob({composeNode:i,composeEmptyNode:e},t,n,s,r){const o=(r==null?void 0:r.nodeClass)??At,a=new o(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=n.offset,c=null;for(const{start:u,value:d}of n.items){const h=yn(u,{indicator:"seq-item-ind",next:d,offset:l,onError:s,parentIndent:n.indent,startOnNewline:!0});if(!h.found)if(h.anchor||h.tag||d)d&&d.type==="block-seq"?s(h.end,"BAD_INDENT","All sequence items must start at the same column"):s(l,"MISSING_CHAR","Sequence item without - indicator");else{c=h.end,h.comment&&(a.comment=h.comment);continue}const f=d?i(t,d,h,s):e(t,h.end,u,null,h,s);t.schema.compat&&Gr(n.indent,d,s),l=f.range[2],a.items.push(f)}return a.range=[n.offset,l,c??l],a}function yi(i,e,t,n){let s="";if(i){let r=!1,o="";for(const a of i){const{source:l,type:c}=a;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&n(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=l.substring(1)||" ";s?s+=o+u:s=u,o="";break}case"newline":s&&(o+=l),r=!0;break;default:n(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:s,offset:e}}const vr="Block collections are not allowed within flow collections",wr=i=>i&&(i.type==="block-map"||i.type==="block-seq");function Lb({composeNode:i,composeEmptyNode:e},t,n,s,r){const o=n.start.source==="{",a=o?"flow map":"flow sequence",l=(r==null?void 0:r.nodeClass)??(o?$e:At),c=new l(t.schema);c.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let d=n.offset+n.start.source.length;for(let x=0;x<n.items.length;++x){const p=n.items[x],{start:S,key:w,sep:m,value:E}=p,O=yn(S,{flow:a,indicator:"explicit-key-ind",next:w??(m==null?void 0:m[0]),offset:d,onError:s,parentIndent:n.indent,startOnNewline:!1});if(!O.found){if(!O.anchor&&!O.tag&&!m&&!E){x===0&&O.comma?s(O.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):x<n.items.length-1&&s(O.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),O.comment&&(c.comment?c.comment+=`
`+O.comment:c.comment=O.comment),d=O.end;continue}!o&&t.options.strict&&di(w)&&s(w,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(x===0)O.comma&&s(O.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(O.comma||s(O.start,"MISSING_CHAR",`Missing , between ${a} items`),O.comment){let D="";e:for(const N of S)switch(N.type){case"comma":case"space":break;case"comment":D=N.source.substring(1);break e;default:break e}if(D){let N=c.items[c.items.length-1];le(N)&&(N=N.value??N.key),N.comment?N.comment+=`
`+D:N.comment=D,O.comment=O.comment.substring(D.length+1)}}if(!o&&!m&&!O.found){const D=E?i(t,E,O,s):e(t,O.end,m,null,O,s);c.items.push(D),d=D.range[2],wr(E)&&s(D.range,"BLOCK_IN_FLOW",vr)}else{t.atKey=!0;const D=O.end,N=w?i(t,w,O,s):e(t,D,S,null,O,s);wr(w)&&s(N.range,"BLOCK_IN_FLOW",vr),t.atKey=!1;const k=yn(m??[],{flow:a,indicator:"map-value-ind",next:E,offset:N.range[2],onError:s,parentIndent:n.indent,startOnNewline:!1});if(k.found){if(!o&&!O.found&&t.options.strict){if(m)for(const v of m){if(v===k.found)break;if(v.type==="newline"){s(v,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}O.start<k.found.offset-1024&&s(k.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else E&&("source"in E&&E.source&&E.source[0]===":"?s(E,"MISSING_CHAR",`Missing space after : in ${a}`):s(k.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const $=E?i(t,E,k,s):k.found?e(t,k.end,m,null,k,s):null;$?wr(E)&&s($.range,"BLOCK_IN_FLOW",vr):k.comment&&(N.comment?N.comment+=`
`+k.comment:N.comment=k.comment);const j=new Ee(N,$);if(t.options.keepSourceTokens&&(j.srcToken=p),o){const v=c;$u(t,v.items,N)&&s(D,"DUPLICATE_KEY","Map keys must be unique"),v.items.push(j)}else{const v=new $e(t.schema);v.flow=!0,v.items.push(j);const A=($??N).range;v.range=[N.range[0],A[1],A[2]],c.items.push(v)}d=$?$.range[2]:k.end}}const h=o?"}":"]",[f,...g]=n.end;let y=d;if(f&&f.source===h)y=f.offset+f.source.length;else{const x=a[0].toUpperCase()+a.substring(1),p=u?`${x} must end with a ${h}`:`${x} in block collection must be sufficiently indented and end with a ${h}`;s(d,u?"MISSING_CHAR":"BAD_INDENT",p),f&&f.source.length!==1&&g.unshift(f)}if(g.length>0){const x=yi(g,y,t.options.strict,s);x.comment&&(c.comment?c.comment+=`
`+x.comment:c.comment=x.comment),c.range=[n.offset,y,x.offset]}else c.range=[n.offset,y,y];return c}function _r(i,e,t,n,s,r){const o=t.type==="block-map"?Mb(i,e,t,n,r):t.type==="block-seq"?Ob(i,e,t,n,r):Lb(i,e,t,n,r),a=o.constructor;return s==="!"||s===a.tagName?(o.tag=a.tagName,o):(s&&(o.tag=s),o)}function Db(i,e,t,n,s){var h;const r=n.tag,o=r?e.directives.tagName(r.source,f=>s(r,"TAG_RESOLVE_FAILED",f)):null;if(t.type==="block-seq"){const{anchor:f,newlineAfterProp:g}=n,y=f&&r?f.offset>r.offset?f:r:f??r;y&&(!g||g.offset<y.offset)&&s(y,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!o||o==="!"||o===$e.tagName&&a==="map"||o===At.tagName&&a==="seq")return _r(i,e,t,s,o);let l=e.schema.tags.find(f=>f.tag===o&&f.collection===a);if(!l){const f=e.schema.knownTags[o];if(f&&f.collection===a)e.schema.tags.push(Object.assign({},f,{default:!1})),l=f;else return f!=null&&f.collection?s(r,"BAD_COLLECTION_TYPE",`${f.tag} used for ${a} collection, but expects ${f.collection}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),_r(i,e,t,s,o)}const c=_r(i,e,t,s,o,l),u=((h=l.resolve)==null?void 0:h.call(l,c,f=>s(r,"TAG_RESOLVE_FAILED",f),e.options))??c,d=de(u)?u:new K(u);return d.range=c.range,d.tag=o,l!=null&&l.format&&(d.format=l.format),d}function zu(i,e,t){const n=e.offset,s=Pb(e,i.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const r=s.mode===">"?K.BLOCK_FOLDED:K.BLOCK_LITERAL,o=e.source?Rb(e.source):[];let a=o.length;for(let y=o.length-1;y>=0;--y){const x=o[y][1];if(x===""||x==="\r")a=y;else break}if(a===0){const y=s.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let x=n+s.length;return e.source&&(x+=e.source.length),{value:y,type:r,comment:s.comment,range:[n,x,x]}}let l=e.indent+s.indent,c=e.offset+s.length,u=0;for(let y=0;y<a;++y){const[x,p]=o[y];if(p===""||p==="\r")s.indent===0&&x.length>l&&(l=x.length);else{x.length<l&&t(c+x.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(l=x.length),u=y,l===0&&!i.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=x.length+p.length+1}for(let y=o.length-1;y>=a;--y)o[y][0].length>l&&(a=y+1);let d="",h="",f=!1;for(let y=0;y<u;++y)d+=o[y][0].slice(l)+`
`;for(let y=u;y<a;++y){let[x,p]=o[y];c+=x.length+p.length+1;const S=p[p.length-1]==="\r";if(S&&(p=p.slice(0,-1)),p&&x.length<l){const m=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(c-p.length-(S?2:1),"BAD_INDENT",m),x=""}r===K.BLOCK_LITERAL?(d+=h+x.slice(l)+p,h=`
`):x.length>l||p[0]==="	"?(h===" "?h=`
`:!f&&h===`
`&&(h=`

`),d+=h+x.slice(l)+p,h=`
`,f=!0):p===""?h===`
`?d+=`
`:h=`
`:(d+=h+p,h=" ",f=!1)}switch(s.chomp){case"-":break;case"+":for(let y=a;y<o.length;++y)d+=`
`+o[y][0].slice(l);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}const g=n+s.length+e.source.length;return{value:d,type:r,comment:s.comment,range:[n,g,g]}}function Pb({offset:i,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let o=0,a="",l=-1;for(let h=1;h<s.length;++h){const f=s[h];if(!a&&(f==="-"||f==="+"))a=f;else{const g=Number(f);!o&&g?o=g:l===-1&&(l=i+h)}}l!==-1&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let c=!1,u="",d=s.length;for(let h=1;h<e.length;++h){const f=e[h];switch(f.type){case"space":c=!0;case"newline":d+=f.source.length;break;case"comment":t&&!c&&n(f,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=f.source.length,u=f.source.substring(1);break;case"error":n(f,"UNEXPECTED_TOKEN",f.message),d+=f.source.length;break;default:{const g=`Unexpected token in block scalar header: ${f.type}`;n(f,"UNEXPECTED_TOKEN",g);const y=f.source;y&&typeof y=="string"&&(d+=y.length)}}}return{mode:r,indent:o,chomp:a,comment:u,length:d}}function Rb(i){const e=i.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),r=[n!=null&&n[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let o=1;o<e.length;o+=2)r.push([e[o],e[o+1]]);return r}function ju(i,e,t){const{offset:n,type:s,source:r,end:o}=i;let a,l;const c=(h,f,g)=>t(n+h,f,g);switch(s){case"scalar":a=K.PLAIN,l=Fb(r,c);break;case"single-quoted-scalar":a=K.QUOTE_SINGLE,l=Bb(r,c);break;case"double-quoted-scalar":a=K.QUOTE_DOUBLE,l=$b(r,c);break;default:return t(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const u=n+r.length,d=yi(o,u,e,t);return{value:l,type:a,comment:d.comment,range:[n,u,d.offset]}}function Fb(i,e){let t="";switch(i[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${i[0]}`;break}case"@":case"`":{t=`reserved character ${i[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Hu(i)}function Bb(i,e){return(i[i.length-1]!=="'"||i.length===1)&&e(i.length,"MISSING_CHAR","Missing closing 'quote"),Hu(i.slice(1,-1)).replace(/''/g,"'")}function Hu(i){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(i);if(!n)return i;let s=n[1],r=" ",o=e.lastIndex;for(t.lastIndex=o;n=t.exec(i);)n[1]===""?r===`
`?s+=r:r=`
`:(s+=r+n[1],r=" "),o=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,n=a.exec(i),s+r+((n==null?void 0:n[1])??"")}function $b(i,e){let t="";for(let n=1;n<i.length-1;++n){const s=i[n];if(!(s==="\r"&&i[n+1]===`
`))if(s===`
`){const{fold:r,offset:o}=zb(i,n);t+=r,n=o}else if(s==="\\"){let r=i[++n];const o=jb[r];if(o)t+=o;else if(r===`
`)for(r=i[n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="\r"&&i[n+1]===`
`)for(r=i[++n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="x"||r==="u"||r==="U"){const a={x:2,u:4,U:8}[r];t+=Hb(i,n+1,a,e),n+=a}else{const a=i.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(s===" "||s==="	"){const r=n;let o=i[n+1];for(;o===" "||o==="	";)o=i[++n+1];o!==`
`&&!(o==="\r"&&i[n+2]===`
`)&&(t+=n>r?i.slice(r,n+1):s)}else t+=s}return(i[i.length-1]!=='"'||i.length===1)&&e(i.length,"MISSING_CHAR",'Missing closing "quote'),t}function zb(i,e){let t="",n=i[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&i[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=i[e+1];return t||(t=" "),{fold:t,offset:e}}const jb={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Hb(i,e,t,n){const s=i.substr(e,t),o=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(o)){const a=i.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(o)}function Uu(i,e,t,n){const{value:s,type:r,comment:o,range:a}=e.type==="block-scalar"?zu(i,e,n):ju(e,i.options.strict,n),l=t?i.directives.tagName(t.source,d=>n(t,"TAG_RESOLVE_FAILED",d)):null;let c;i.options.stringKeys&&i.atKey?c=i.schema[ut]:l?c=Ub(i.schema,s,l,t,n):e.type==="scalar"?c=Wb(i,s,e,n):c=i.schema[ut];let u;try{const d=c.resolve(s,h=>n(t??e,"TAG_RESOLVE_FAILED",h),i.options);u=ne(d)?d:new K(d)}catch(d){const h=d instanceof Error?d.message:String(d);n(t??e,"TAG_RESOLVE_FAILED",h),u=new K(s)}return u.range=a,u.source=s,r&&(u.type=r),l&&(u.tag=l),c.format&&(u.format=c.format),o&&(u.comment=o),u}function Ub(i,e,t,n,s){var a;if(t==="!")return i[ut];const r=[];for(const l of i.tags)if(!l.collection&&l.tag===t)if(l.default&&l.test)r.push(l);else return l;for(const l of r)if((a=l.test)!=null&&a.test(e))return l;const o=i.knownTags[t];return o&&!o.collection?(i.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),i[ut])}function Wb({atKey:i,directives:e,schema:t},n,s,r){const o=t.tags.find(a=>{var l;return(a.default===!0||i&&a.default==="key")&&((l=a.test)==null?void 0:l.test(n))})||t[ut];if(t.compat){const a=t.compat.find(l=>{var c;return l.default&&((c=l.test)==null?void 0:c.test(n))})??t[ut];if(o.tag!==a.tag){const l=e.tagString(o.tag),c=e.tagString(a.tag),u=`Value may be parsed as either ${l} or ${c}`;r(s,"TAG_RESOLVE_FAILED",u,!0)}}return o}function Kb(i,e,t){if(e){t===null&&(t=e.length);for(let n=t-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":i-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)i+=s.source.length,s=e[++n];break}}return i}const Vb={composeNode:Wu,composeEmptyNode:Lo};function Wu(i,e,t,n){const s=i.atKey,{spaceBefore:r,comment:o,anchor:a,tag:l}=t;let c,u=!0;switch(e.type){case"alias":c=qb(i,e,n),(a||l)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Uu(i,e,l,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=Db(Vb,i,e,t,n),a&&(c.anchor=a.source.substring(1));break;default:{const d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",d),c=Lo(i,e.offset,void 0,null,t,n),u=!1}}return a&&c.anchor===""&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&i.options.stringKeys&&(!ne(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&n(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),o&&(e.type==="scalar"&&e.source===""?c.comment=o:c.commentBefore=o),i.options.keepSourceTokens&&u&&(c.srcToken=e),c}function Lo(i,e,t,n,{spaceBefore:s,comment:r,anchor:o,tag:a,end:l},c){const u={type:"scalar",offset:Kb(e,t,n),indent:-1,source:""},d=Uu(i,u,a,c);return o&&(d.anchor=o.source.substring(1),d.anchor===""&&c(o,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(d.spaceBefore=!0),r&&(d.comment=r,d.range[2]=l),d}function qb({options:i},{offset:e,source:t,end:n},s){const r=new As(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=e+t.length,a=yi(n,o,i.strict,s);return r.range=[e,o,a.offset],a.comment&&(r.comment=a.comment),r}function Gb(i,e,{offset:t,start:n,value:s,end:r},o){const a=Object.assign({_directives:e},i),l=new En(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},u=yn(n,{indicator:"doc-start",next:s??(r==null?void 0:r[0]),offset:t,onError:o,parentIndent:0,startOnNewline:!0});u.found&&(l.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!u.hasNewline&&o(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=s?Wu(c,s,u,o):Lo(c,u.end,n,null,u,o);const d=l.contents.range[2],h=yi(r,d,!1,o);return h.comment&&(l.comment=h.comment),l.range=[t,d,h.offset],l}function Un(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:e,source:t}=i;return[e,e+(typeof t=="string"?t.length:1)]}function Jl(i){var s;let e="",t=!1,n=!1;for(let r=0;r<i.length;++r){const o=i[r];switch(o[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(o.substring(1)||" "),t=!0,n=!1;break;case"%":((s=i[r+1])==null?void 0:s[0])!=="#"&&(r+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class Do{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,s,r)=>{const o=Un(t);r?this.warnings.push(new Bu(o,n,s)):this.errors.push(new $t(o,n,s))},this.directives=new Ne({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:s}=Jl(this.prelude);if(n){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!r)e.commentBefore=n;else if(ue(r)&&!r.flow&&r.items.length>0){let o=r.items[0];le(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${n}
${a}`:n}else{const o=r.commentBefore;r.commentBefore=o?`${n}
${o}`:n}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Jl(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,s)=>{const r=Un(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Gb(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new $t(Un(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new $t(Un(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=yi(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new $t(Un(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new En(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}function Yb(i,e=!0,t){if(i){const n=(s,r,o)=>{const a=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(t)t(a,r,o);else throw new $t([a,a+1],r,o)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return ju(i,e,n);case"block-scalar":return zu({options:{strict:e}},i,n)}}return null}function Jb(i,e){const{implicitKey:t=!1,indent:n,inFlow:s=!1,offset:r=-1,type:o="PLAIN"}=e,a=gi({type:o,value:i},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),l=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(a[0]){case"|":case">":{const c=a.indexOf(`
`),u=a.substring(0,c),d=a.substring(c+1)+`
`,h=[{type:"block-scalar-header",offset:r,indent:n,source:u}];return Ku(h,l)||h.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:r,indent:n,props:h,source:d}}case'"':return{type:"double-quoted-scalar",offset:r,indent:n,source:a,end:l};case"'":return{type:"single-quoted-scalar",offset:r,indent:n,source:a,end:l};default:return{type:"scalar",offset:r,indent:n,source:a,end:l}}}function Xb(i,e,t={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:r=!1,type:o}=t,a="indent"in i?i.indent:null;if(n&&typeof a=="number"&&(a+=2),!o)switch(i.type){case"single-quoted-scalar":o="QUOTE_SINGLE";break;case"double-quoted-scalar":o="QUOTE_DOUBLE";break;case"block-scalar":{const c=i.props[0];if(c.type!=="block-scalar-header")throw new Error("Invalid block scalar header");o=c.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:o="PLAIN"}const l=gi({type:o,value:e},{implicitKey:s||a===null,indent:a!==null&&a>0?" ".repeat(a):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(l[0]){case"|":case">":Qb(i,l);break;case'"':kr(i,l,"double-quoted-scalar");break;case"'":kr(i,l,"single-quoted-scalar");break;default:kr(i,l,"scalar")}}function Qb(i,e){const t=e.indexOf(`
`),n=e.substring(0,t),s=e.substring(t+1)+`
`;if(i.type==="block-scalar"){const r=i.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=n,i.source=s}else{const{offset:r}=i,o="indent"in i?i.indent:-1,a=[{type:"block-scalar-header",offset:r,indent:o,source:n}];Ku(a,"end"in i?i.end:void 0)||a.push({type:"newline",offset:-1,indent:o,source:`
`});for(const l of Object.keys(i))l!=="type"&&l!=="offset"&&delete i[l];Object.assign(i,{type:"block-scalar",indent:o,props:a,source:s})}}function Ku(i,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":i.push(t);break;case"newline":return i.push(t),!0}return!1}function kr(i,e,t){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=t,i.source=e;break;case"block-scalar":{const n=i.props.slice(1);let s=e.length;i.props[0].type==="block-scalar-header"&&(s-=i.props[0].source.length);for(const r of n)r.offset+=s;delete i.props,Object.assign(i,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{const s={type:"newline",offset:i.offset+e.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:t,source:e,end:[s]});break}default:{const n="indent"in i?i.indent:-1,s="end"in i&&Array.isArray(i.end)?i.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(i))r!=="type"&&r!=="offset"&&delete i[r];Object.assign(i,{type:t,indent:n,source:e,end:s})}}}const Zb=i=>"type"in i?ys(i):ns(i);function ys(i){switch(i.type){case"block-scalar":{let e="";for(const t of i.props)e+=ys(t);return e+i.source}case"block-map":case"block-seq":{let e="";for(const t of i.items)e+=ns(t);return e}case"flow-collection":{let e=i.start.source;for(const t of i.items)e+=ns(t);for(const t of i.end)e+=t.source;return e}case"document":{let e=ns(i);if(i.end)for(const t of i.end)e+=t.source;return e}default:{let e=i.source;if("end"in i&&i.end)for(const t of i.end)e+=t.source;return e}}}function ns({start:i,key:e,sep:t,value:n}){let s="";for(const r of i)s+=r.source;if(e&&(s+=ys(e)),t)for(const r of t)s+=r.source;return n&&(s+=ys(n)),s}const Yr=Symbol("break visit"),ey=Symbol("skip children"),Vu=Symbol("remove item");function Wt(i,e){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),qu(Object.freeze([]),i,e)}Wt.BREAK=Yr;Wt.SKIP=ey;Wt.REMOVE=Vu;Wt.itemAtPath=(i,e)=>{let t=i;for(const[n,s]of e){const r=t==null?void 0:t[n];if(r&&"items"in r)t=r.items[s];else return}return t};Wt.parentCollection=(i,e)=>{const t=Wt.itemAtPath(i,e.slice(0,-1)),n=e[e.length-1][0],s=t==null?void 0:t[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function qu(i,e,t){let n=t(e,i);if(typeof n=="symbol")return n;for(const s of["key","value"]){const r=e[s];if(r&&"items"in r){for(let o=0;o<r.items.length;++o){const a=qu(Object.freeze(i.concat([[s,o]])),r.items[o],t);if(typeof a=="number")o=a-1;else{if(a===Yr)return Yr;a===Vu&&(r.items.splice(o,1),o-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,i))}}return typeof n=="function"?n(e,i):n}const Fs="\uFEFF",Bs="",$s="",hi="",ty=i=>!!i&&"items"in i,ny=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function iy(i){switch(i){case Fs:return"<BOM>";case Bs:return"<DOC>";case $s:return"<FLOW_END>";case hi:return"<SCALAR>";default:return JSON.stringify(i)}}function Gu(i){switch(i){case Fs:return"byte-order-mark";case Bs:return"doc-mode";case $s:return"flow-error-end";case hi:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const sy=Object.freeze(Object.defineProperty({__proto__:null,BOM:Fs,DOCUMENT:Bs,FLOW_END:$s,SCALAR:hi,createScalarToken:Jb,isCollection:ty,isScalar:ny,prettyToken:iy,resolveAsScalar:Yb,setScalarValue:Xb,stringify:Zb,tokenType:Gu,visit:Wt},Symbol.toStringTag,{value:"Module"}));function Je(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Xl=new Set("0123456789ABCDEFabcdef"),ry=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Vi=new Set(",[]{}"),oy=new Set(` ,[]{}
\r	`),Sr=i=>!i||oy.has(i);class Yu{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Je(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Fs&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const r=e[n-1];if(r===" "||r==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Bs,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Je(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Je(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Je(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Sr),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Je(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield $s,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Sr),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||Je(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=n.indexOf(`
`,r)}s!==-1&&(t=s-(n[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Je(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const o=this.buffer[r+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(n=this.buffer[s];n===" ";)n=this.buffer[++s];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,o=this.buffer[r];o==="\r"&&(o=this.buffer[--r]);const a=r;for(;o===" ";)o=this.buffer[--r];if(o===`
`&&r>=this.pos&&r+1+t>a)e=r;else break}while(!0);return yield hi,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const r=this.buffer[n+1];if(Je(r)||e&&Vi.has(r))break;t=n}else if(Je(s)){let r=this.buffer[n+1];if(s==="\r"&&(r===`
`?(n+=1,s=`
`,r=this.buffer[n+1]):t=n),r==="#"||e&&Vi.has(r))break;if(s===`
`){const o=this.continueScalar(n+1);if(o===-1)break;n=Math.max(n,o-2)}}else{if(e&&Vi.has(s))break;t=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield hi,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Sr))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(Je(t)||e&&Vi.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Je(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(ry.has(t))t=this.buffer[++e];else if(t==="%"&&Xl.has(this.buffer[e+1])&&Xl.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Ju{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function Dt(i,e){for(let t=0;t<i.length;++t)if(i[t].type===e)return!0;return!1}function Ql(i){for(let e=0;e<i.length;++e)switch(i[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Xu(i){switch(i==null?void 0:i.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function qi(i){switch(i.type){case"document":return i.start;case"block-map":{const e=i.items[i.items.length-1];return e.sep??e.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function sn(i){var t;if(i.length===0)return[];let e=i.length;e:for(;--e>=0;)switch(i[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=i[++e])==null?void 0:t.type)==="space";);return i.splice(e,i.length)}function Zl(i){if(i.start.type==="flow-seq-start")for(const e of i.items)e.sep&&!e.value&&!Dt(e.start,"explicit-key-ind")&&!Dt(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Xu(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class Po{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Yu,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Gu(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Zl(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&Ql(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Ql(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=qi(this.peek(2)),n=sn(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,r=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let o=[];if(r&&t.sep&&!t.value){const a=[];for(let l=0;l<t.sep.length;++l){const c=t.sep[l];switch(c.type){case"newline":a.push(l);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(o=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Dt(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(Xu(t.key)&&!Dt(t.sep,"newline")){const a=sn(t.start),l=t.key,c=t.sep;c.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:l,sep:c}]})}else o.length>0?t.sep=t.sep.concat(o,this.sourceToken):t.sep.push(this.sourceToken);else if(Dt(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=sn(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:o,key:null,sep:[this.sourceToken]}):Dt(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);r||t.value?(e.items.push({start:o,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){s&&a.type!=="block-seq"&&e.items.push({start:o}),this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Dt(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=qi(n),r=sn(s);Zl(e);const o=e.end.splice(1,e.end.length);o.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=qi(e),n=sn(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=qi(e),n=sn(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Qu(i){const e=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||e&&new Ju||null,prettyErrors:e}}function ay(i,e={}){const{lineCounter:t,prettyErrors:n}=Qu(e),s=new Po(t==null?void 0:t.addNewLine),r=new Do(e),o=Array.from(r.compose(s.parse(i)));if(n&&t)for(const a of o)a.errors.forEach(bs(i,t)),a.warnings.forEach(bs(i,t));return o.length>0?o:Object.assign([],{empty:!0},r.streamInfo())}function Zu(i,e={}){const{lineCounter:t,prettyErrors:n}=Qu(e),s=new Po(t==null?void 0:t.addNewLine),r=new Do(e);let o=null;for(const a of r.compose(s.parse(i),!0,i.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new $t(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(o.errors.forEach(bs(i,t)),o.warnings.forEach(bs(i,t))),o}function ly(i,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);const s=Zu(i,t);if(!s)return null;if(s.warnings.forEach(r=>xu(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},t))}function cy(i,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const s=Math.round(t);t=s<1?void 0:s>8?{indent:8}:{indent:s}}if(i===void 0){const{keepUndefined:s}=t??e??{};if(!s)return}return Gt(i)&&!n?i.toString(t):new En(i,n,t).toString(t)}const ec=Object.freeze(Object.defineProperty({__proto__:null,Alias:As,CST:sy,Composer:Do,Document:En,Lexer:Yu,LineCounter:Ju,Pair:Ee,Parser:Po,Scalar:K,Schema:Rs,YAMLError:Oo,YAMLMap:$e,YAMLParseError:$t,YAMLSeq:At,YAMLWarning:Bu,isAlias:qt,isCollection:ue,isDocument:Gt,isMap:wn,isNode:de,isPair:le,isScalar:ne,isSeq:_n,parse:ly,parseAllDocuments:ay,parseDocument:Zu,stringify:cy,visit:Tt,visitAsync:Ts},Symbol.toStringTag,{value:"Module"}));class uy{constructor(){L(this,"id","json-xml-yaml-converter");L(this,"name","JSON/XML/YAML Converter");L(this,"description","Convert between JSON, XML, and YAML formats");L(this,"seoMetadata",{title:"Free Online JSON, XML, and YAML Converter",description:"Convert between JSON, XML, and YAML formats easily. Validate, format, and transform your data with this free online conversion tool.",keywords:["json to xml converter","xml to json","yaml converter","json yaml converter","data format converter","xml yaml converter"]});L(this,"supportedFormats",["xml","json","yaml"])}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="converter-container">
        <div class="editor-with-lines">
          <div class="line-numbers" id="sourceLineNumbers"></div>
          <textarea id="sourceInput" class="editor" placeholder="Paste your JSON, XML, or YAML here..." spellcheck="false" wrap="off"></textarea>
        </div>
        <div id="formatDisplay" class="format-display">Detected format: <span id="detectedFormat">Unknown</span></div>
        <div class="format-selector">
          <label for="targetFormat">Convert to:</label>
          <select id="targetFormat" class="target-format">
            <option value="json">JSON</option>
            <option value="yaml">YAML</option>
            <option value="xml">XML</option>
          </select>
        </div>
        <div class="editor-with-lines">
          <div class="line-numbers" id="outputLineNumbers"></div>
          <textarea id="output" class="editor" readonly placeholder="Converted output will appear here..." spellcheck="false" wrap="off"></textarea>
        </div>
      </div>
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.getElementById("sourceInput"),t=document.getElementById("output"),n=document.getElementById("detectedFormat"),s=document.getElementById("targetFormat"),r=document.getElementById("sourceLineNumbers"),o=document.getElementById("outputLineNumbers"),a=(c,u)=>{const d=c.value.split(`
`).length;u.innerHTML=Array.from({length:d},(h,f)=>`<div class="line-number">${f+1}</div>`).join("")},l=()=>{const c=e.value,{format:u,data:d}=this.detectAndParse(c),h=s.value;a(e,r),u==="unknown"?(n.textContent="Unknown",n.style.color="red",t.value="Error: Could not detect input format."):(n.textContent=u.toUpperCase(),n.style.color="green",t.value=this.convert(d,u,h)),a(t,o)};e.addEventListener("input",l),e.addEventListener("scroll",()=>{r.scrollTop=e.scrollTop}),t.addEventListener("scroll",()=>{o.scrollTop=t.scrollTop}),s.addEventListener("change",l),l()}detectAndParse(e){try{return{format:"json",data:JSON.parse(e)}}catch{}try{return{format:"yaml",data:ec.parse(e)}}catch{}try{return{format:"xml",data:Ul.xml2js(e,{compact:!0})}}catch{}return{format:"unknown",data:null}}convert(e,t,n){try{switch(n){case"json":return JSON.stringify(e,null,2);case"yaml":return ec.stringify(e);case"xml":return Ul.js2xml(e,{compact:!0,spaces:2});default:return"Unsupported target format"}}catch(s){return`Error during conversion: ${s.message}`}}addStyles(){const e=document.createElement("style");e.textContent=`
      .converter-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .editor-with-lines {
        display: flex;
        position: relative;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        overflow: hidden;
        height: 200px;
      }

      .line-numbers {
        padding: 1rem 0.5rem;
        background: var(--sidebar-bg);
        border-right: 1px solid var(--border);
        color: var(--text-secondary);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        text-align: right;
        user-select: none;
        overflow-y: hidden;
      }

      .line-number {
        padding: 0 0.5rem;
        min-width: 2.5em;
      }

      .editor {
        flex: 1;
        padding: 1rem;
        border: none;
        background: transparent;
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        resize: none;
        outline: none;
        overflow-y: auto;
      }

      .format-display {
        font-size: 1rem;
        color: var(--text-secondary);
      }

      #detectedFormat {
        font-weight: bold;
      }

      .format-selector {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .target-format {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        color: var(--text);
        font-size: 1rem;
      }
    `,document.head.appendChild(e)}}class dy{constructor(){L(this,"id","jwt-decoder");L(this,"name","JWT Decoder");L(this,"description","Decode and verify JSON Web Tokens");L(this,"seoMetadata",{title:"Free JWT Decoder and Validator Online Tool",description:"Decode, verify and inspect JSON Web Tokens (JWT) instantly with this free online tool. Analyze header, payload, and signature of your JWTs.",keywords:["jwt decoder","jwt validator","json web token","decode jwt","verify jwt","jwt inspector"]});L(this,"lastInput","")}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="jwt-container">
        <div class="input-section">
          <div class="input-header">
            <label for="jwtInput">JWT Token (auto-decodes on paste)</label>
            <button id="clearJwt" class="button">Clear</button>
          </div>
          <textarea 
            id="jwtInput" 
            class="jwt-input" 
            placeholder="Paste your JWT token here..."
            spellcheck="false"
          ></textarea>
        </div>
        
        <div class="decoded-section">
          <div class="jwt-part">
            <h3>Header</h3>
            <div class="jwt-info">
              <pre id="headerData" class="jwt-data"></pre>
            </div>
          </div>
          
          <div class="jwt-part">
            <h3>Payload</h3>
            <div class="jwt-info">
              <pre id="payloadData" class="jwt-data"></pre>
            </div>
          </div>
          
          <div class="jwt-part">
            <h3>Signature</h3>
            <div class="jwt-info">
              <pre id="signatureData" class="jwt-data"></pre>
            </div>
          </div>
        </div>
      </div>
    `,this.setupHandlers(),this.addStyles())}decodeJwt(e){try{const t=e.split(".");if(t.length!==3)throw new Error("Invalid JWT format");const n=JSON.parse(this.base64UrlDecode(t[0])),s=JSON.parse(this.base64UrlDecode(t[1])),r=t[2];return{header:n,payload:s,signature:r}}catch{return null}}base64UrlDecode(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");for(;t.length%4;)t+="=";return decodeURIComponent(escape(atob(t)))}formatJson(e){return JSON.stringify(e,null,2)}displayDecodedData(e){const t=document.getElementById("headerData"),n=document.getElementById("payloadData"),s=document.getElementById("signatureData");!t||!n||!s||(document.querySelectorAll(".token-metadata").forEach(r=>r.remove()),t.textContent=this.formatJson(e.header),this.addTokenMetadata("header-metadata",e.header),n.textContent=this.formatJson(e.payload),this.addTokenMetadata("payload-metadata",e.payload),s.textContent=e.signature)}addTokenMetadata(e,t){var r,o;const n=[],s=document.getElementById(e);if(s&&s.remove(),t.exp){const a=new Date(t.exp*1e3),l=a<new Date;n.push(`Expires: ${a.toLocaleString()} (${l?"Expired":"Valid"})`)}if(t.iat){const a=new Date(t.iat*1e3);n.push(`Issued At: ${a.toLocaleString()}`)}if(t.nbf){const a=new Date(t.nbf*1e3);n.push(`Not Before: ${a.toLocaleString()}`)}if(n.length>0){const a=document.createElement("div");a.id=e,a.className="token-metadata",a.innerHTML=n.join("<br>");const l=e.includes("header")?"headerData":"payloadData";(o=(r=document.getElementById(l))==null?void 0:r.parentElement)==null||o.appendChild(a)}}showError(e){const t=document.getElementById("headerData"),n=document.getElementById("payloadData"),s=document.getElementById("signatureData");!t||!n||!s||(t.textContent="",n.textContent="",s.textContent="",t.innerHTML=`<div class="error-message">${e}</div>`)}setupHandlers(){const e=document.getElementById("jwtInput"),t=document.getElementById("clearJwt");!e||!t||(t.addEventListener("click",()=>{e.value="";const n=document.getElementById("headerData"),s=document.getElementById("payloadData"),r=document.getElementById("signatureData");n&&(n.textContent=""),s&&(s.textContent=""),r&&(r.textContent="")}),e.addEventListener("input",()=>{const n=e.value.trim();if(n&&n!==this.lastInput){this.lastInput=n;const s=this.decodeJwt(n);s?this.displayDecodedData(s):this.showError("Invalid JWT token format")}}))}addStyles(){const e=document.createElement("style");e.textContent=`
      .jwt-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .input-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .input-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .input-header label {
        color: var(--text-secondary);
        font-size: 0.9rem;
      }

      .jwt-input {
        width: 100%;
        min-height: 100px;
        padding: 1rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        resize: vertical;
      }

      .jwt-input:focus {
        outline: none;
        border-color: var(--primary);
      }

      .input-controls {
        display: flex;
        gap: 1rem;
      }

      .decoded-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .jwt-part {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 1rem;
      }

      .jwt-part h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 500;
      }

      .jwt-info {
        position: relative;
      }

      .jwt-data {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
        white-space: pre-wrap;
        word-break: break-all;
      }

      .token-metadata {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border);
        font-size: 0.9rem;
        color: var(--text-secondary);
      }

      .error-message {
        color: #f44336;
        font-size: 0.9rem;
      }
    `,document.head.appendChild(e)}}class hy{constructor(){L(this,"id","base-converter");L(this,"name","Number Base Converter");L(this,"description","Convert numbers between different bases");L(this,"seoMetadata",{title:"Free Number Base Converter Online Tool",description:"Convert numbers between different bases (binary, decimal, hexadecimal, octal) with this free online calculator. Supports all common number systems.",keywords:["base converter","number base calculator","binary converter","hex converter","decimal converter","octal converter"]});L(this,"bases",[{value:2,name:"Binary",prefix:"0b"},{value:8,name:"Octal",prefix:"0o"},{value:10,name:"Decimal",prefix:""},{value:16,name:"Hexadecimal",prefix:"0x"}]);L(this,"lastValidInput","");L(this,"lastBase",10)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="converter-container">
        <div class="input-section">
          <div class="input-controls">
            <div class="base-selector">
              <label for="inputBase">Input Base:</label>
              <select id="inputBase" class="base-select">
                ${this.bases.map(t=>`<option value="${t.value}">${t.name} (${t.prefix||"none"})</option>`).join("")}
              </select>
            </div>
            <button id="clearInput" class="button">Clear</button>
          </div>
          <textarea 
            id="numberInput" 
            class="number-input" 
            placeholder="Enter a number to convert..."
            spellcheck="false"
          ></textarea>
        </div>

        <div class="results-section">
          ${this.bases.map(t=>`
            <div class="result-item">
              <div class="result-header">
                <h3>${t.name}</h3>
                <button class="copy-button" data-base="${t.value}">Copy</button>
              </div>
              <div class="result-content">
                <div class="result-value" id="base${t.value}Result"></div>
                <div class="result-bits" id="base${t.value}Bits"></div>
              </div>
            </div>
          `).join("")}
        </div>

        <div id="errorDisplay" class="error-display"></div>
      </div>
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("numberInput"),t=document.getElementById("inputBase"),n=document.getElementById("clearInput"),s=document.getElementById("errorDisplay");!e||!t||!n||!s||(e.addEventListener("input",()=>{const r=e.value.trim(),o=parseInt(t.value);try{if(r===""){this.clearResults(),s.textContent="";return}if(this.validateInput(r,o))this.lastValidInput=r,this.lastBase=o,this.updateResults(r,o),s.textContent="",e.classList.remove("error");else throw new Error(`Invalid ${this.getBaseName(o)} number`)}catch(a){s.textContent=a.message,e.classList.add("error")}}),t.addEventListener("change",()=>{const r=parseInt(t.value);e.placeholder=`Enter a ${this.getBaseName(r)} number...`,this.validateInput(e.value,r)?e.dispatchEvent(new Event("input")):(e.value="",this.clearResults())}),n.addEventListener("click",()=>{e.value="",this.clearResults(),s.textContent="",e.classList.remove("error")}),document.querySelectorAll(".copy-button").forEach(r=>{r.addEventListener("click",()=>{const o=parseInt(r.dataset.base||"10"),a=document.getElementById(`base${o}Result`);a&&a.textContent&&navigator.clipboard.writeText(a.textContent).then(()=>this.showToast(`${this.getBaseName(o)} value copied!`)).catch(()=>this.showToast("Failed to copy value"))})}))}validateInput(e,t){var r;if(!e)return!0;const n=((r=this.bases.find(o=>o.value===t))==null?void 0:r.prefix)||"";e=e.toLowerCase().replace(n,"");const s=this.getValidChars(t);return e.split("").every(o=>s.includes(o))}getValidChars(e){return"0123456789abcdef".split("").slice(0,e)}getBaseName(e){var t;return((t=this.bases.find(n=>n.value===e))==null?void 0:t.name)||"Unknown"}updateResults(e,t){var n;try{const s=((n=this.bases.find(o=>o.value===t))==null?void 0:n.prefix)||"";e=e.toLowerCase().replace(s,"");const r=parseInt(e,t);this.bases.forEach(o=>{const a=document.getElementById(`base${o.value}Result`),l=document.getElementById(`base${o.value}Bits`);if(a&&l){const c=r.toString(o.value);if(a.textContent=`${o.prefix}${c}`,o.value===2){const u=c.length,d=Math.ceil(u/8);l.textContent=`${u} bits (${d} bytes)`}else l.textContent=""}})}catch(s){console.error("Conversion error:",s)}}clearResults(){this.bases.forEach(e=>{const t=document.getElementById(`base${e.value}Result`),n=document.getElementById(`base${e.value}Bits`);t&&(t.textContent=""),n&&(n.textContent="")})}showToast(e){const t=document.querySelector(".converter-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .converter-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .input-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .input-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .base-selector {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .base-select {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        color: var(--text);
        font-size: 1rem;
      }

      .number-input {
        width: 100%;
        min-height: 100px;
        padding: 1rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        resize: vertical;
      }

      .number-input:focus {
        outline: none;
        border-color: var(--primary);
      }

      .number-input.error {
        border-color: #f44336;
      }

      .results-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
      }

      .result-item {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 1rem;
      }

      .result-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .result-header h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
      }

      .result-content {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        word-break: break-all;
      }

      .result-value {
        color: var(--primary);
      }

      .result-bits {
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin-top: 0.25rem;
      }

      .copy-button {
        padding: 0.25rem 0.75rem;
        background: transparent;
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        cursor: pointer;
        font-size: 0.9rem;
        transition: border-color 0.2s;
      }

      .copy-button:hover {
        border-color: var(--primary);
      }

      .error-display {
        color: #f44336;
        font-size: 0.9rem;
        min-height: 1.5em;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }

      @media (max-width: 600px) {
        .results-section {
          grid-template-columns: 1fr;
        }
      }
    `,document.head.appendChild(e)}}class fy{constructor(){L(this,"id","image-resizer");L(this,"name","Image Resizer");L(this,"description","Resize and optimize your images online <br>Resizing is done entirely client-side and the images are not sent anywhere.");L(this,"seoMetadata",{title:"Free Online Image Resizer and Optimizer Tool",description:"Resize, compress, and optimize your images online for free. Easy-to-use tool that maintains image quality while reducing file size.",keywords:["image resizer","image optimizer","photo resizer","picture resize tool","compress images","resize photos online"]});L(this,"currentImage",null);L(this,"originalWidth",0);L(this,"originalHeight",0)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="resizer-container">
        <div class="upload-section">
          <label for="imageInput" class="upload-label">
            <span>Choose an image or drag & drop here</span>
            <input type="file" id="imageInput" accept="image/*" class="file-input">
          </label>
        </div>
        
        <div class="controls-section" style="display: none;">
          <div class="dimensions-control">
            <div class="dimension-group">
              <label for="widthInput">Width (px)</label>
              <input type="number" id="widthInput" min="1" class="dimension-input">
            </div>
            <div class="dimension-group">
              <label for="heightInput">Height (px)</label>
              <input type="number" id="heightInput" min="1" class="dimension-input">
            </div>
            <label class="checkbox-label">
              <input type="checkbox" id="maintainAspectRatio" checked>
              Maintain Aspect Ratio
            </label>
          </div>
          
          <div class="quick-resize">
            <span>Quick Resize:</span>
            <button class="button" data-scale="0.25">25%</button>
            <button class="button" data-scale="0.5">50%</button>
            <button class="button" data-scale="0.75">75%</button>
            <button class="button" data-scale="1">100%</button>
            <button class="button" data-scale="1.5">150%</button>
            <button class="button" data-scale="2">200%</button>
          </div>

          <div class="preview-section">
            <div class="preview-container">
              <canvas id="previewCanvas"></canvas>
            </div>
            <div class="image-info">
              <p>Original size: <span id="originalSize">-</span></p>
              <p>New size: <span id="newSize">-</span></p>
            </div>
          </div>

          <div class="action-buttons">
            <button id="downloadBtn" class="button">Download Resized Image</button>
            <button id="resetBtn" class="button">Reset</button>
          </div>
        </div>
      </div>
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.querySelector(".upload-section"),t=document.querySelector(".controls-section"),n=document.getElementById("imageInput"),s=document.getElementById("widthInput"),r=document.getElementById("heightInput"),o=document.getElementById("maintainAspectRatio"),a=document.getElementById("previewCanvas"),l=document.getElementById("downloadBtn"),c=document.getElementById("resetBtn"),u=document.querySelectorAll(".quick-resize button"),d=document.getElementById("originalSize"),h=document.getElementById("newSize");if(!e||!t||!n||!s||!r||!o||!a||!l||!c||!d||!h)return;e.addEventListener("dragover",g=>{g.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>{e.classList.remove("drag-over")}),e.addEventListener("drop",g=>{var y;g.preventDefault(),e.classList.remove("drag-over"),(y=g.dataTransfer)!=null&&y.files.length&&(n.files=g.dataTransfer.files,f(g.dataTransfer.files[0]))}),n.addEventListener("change",()=>{var g;(g=n.files)!=null&&g.length&&f(n.files[0])});const f=g=>{if(!g.type.startsWith("image/")){this.showToast("Please select an image file");return}const y=new FileReader;y.onload=x=>{var S;const p=new Image;p.onload=()=>{this.currentImage=p,this.originalWidth=p.width,this.originalHeight=p.height,s.value=p.width.toString(),r.value=p.height.toString(),t.style.display="block",e.style.display="none",d.textContent=`${p.width}x${p.height}px`,this.updatePreview()},p.src=(S=x.target)==null?void 0:S.result},y.readAsDataURL(g)};s.addEventListener("input",()=>{if(o.checked&&this.originalWidth&&this.originalHeight){const g=this.originalHeight/this.originalWidth,y=parseInt(s.value)||0;r.value=Math.round(y*g).toString()}this.updatePreview()}),r.addEventListener("input",()=>{if(o.checked&&this.originalWidth&&this.originalHeight){const g=this.originalWidth/this.originalHeight,y=parseInt(r.value)||0;s.value=Math.round(y*g).toString()}this.updatePreview()}),u.forEach(g=>{g.addEventListener("click",()=>{const y=parseFloat(g.getAttribute("data-scale")||"1");s.value=Math.round(this.originalWidth*y).toString(),o.checked&&(r.value=Math.round(this.originalHeight*y).toString()),this.updatePreview()})}),l.addEventListener("click",()=>{if(!a)return;const g=document.createElement("a");g.download="resized-image.png",g.href=a.toDataURL("image/png"),document.body.appendChild(g),g.click(),document.body.removeChild(g),this.showToast("Image downloaded successfully!")}),c.addEventListener("click",()=>{t.style.display="none",e.style.display="block",this.currentImage=null,this.originalWidth=0,this.originalHeight=0,n.value="",a.width=0,a.height=0,d.textContent="-",h.textContent="-"})}updatePreview(){if(!this.currentImage)return;const e=document.getElementById("previewCanvas"),t=document.getElementById("newSize"),n=document.getElementById("widthInput"),s=document.getElementById("heightInput");if(!e||!t||!n||!s)return;const r=e.getContext("2d");if(!r)return;const o=parseInt(n.value)||this.originalWidth,a=parseInt(s.value)||this.originalHeight;e.width=o,e.height=a,r.clearRect(0,0,e.width,e.height),r.drawImage(this.currentImage,0,0,o,a),t.textContent=`${o}x${a}px`}showToast(e){const t=document.querySelector(".resizer-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .resizer-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .upload-section {
        border: 2px dashed var(--border);
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
        transition: border-color 0.2s;
        cursor: pointer;
      }

      .upload-section:hover,
      .upload-section.drag-over {
        border-color: var(--primary);
      }

      .upload-label {
        display: block;
        cursor: pointer;
      }

      .file-input {
        display: none;
      }

      .controls-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .dimensions-control {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1.5rem;
      }

      .dimension-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .dimension-input {
        width: 120px;
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        color: var(--text);
        font-size: 0.9rem;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .quick-resize {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;
        margin-bottom: 2rem;
      }

      .preview-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .preview-container {
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 1rem;
        overflow: auto;
        max-height: 500px;
        background: var(--sidebar-bg);
      }

      #previewCanvas {
        max-width: 100%;
        height: auto;
      }

      .image-info {
        font-size: 0.9rem;
        color: var(--text-secondary);
      }

      .image-info p {
        margin: 0.25rem 0;
      }

      .action-buttons {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }

      @media (max-width: 600px) {
        .dimensions-control {
          flex-direction: column;
          align-items: stretch;
        }

        .dimension-input {
          width: 100%;
        }

        .action-buttons {
          flex-direction: column;
        }
      }
    `,document.head.appendChild(e)}}class py{constructor(){L(this,"id","mock-data-generator");L(this,"name","Mock Data Generator");L(this,"description","Generate realistic mock data for testing and development");L(this,"seoMetadata",{title:"Mock Data Generator Tool - Create Test Data Online",description:"Generate realistic mock data for testing and development. Create random names, addresses, emails, and more with this free online tool.",keywords:["mock data generator","test data generator","fake data generator","random data generator","sample data creator"]});L(this,"supportedTypes",[{value:"fullName",label:"Full Name"},{value:"firstName",label:"First Name"},{value:"lastName",label:"Last Name"},{value:"email",label:"Email Address"},{value:"phoneNumber",label:"Phone Number"},{value:"streetAddress",label:"Street Address"},{value:"city",label:"City"},{value:"state",label:"State"},{value:"zipCode",label:"ZIP Code"},{value:"country",label:"Country"},{value:"company",label:"Company Name"},{value:"jobTitle",label:"Job Title"},{value:"age",label:"Age"},{value:"date",label:"Date"},{value:"uuid",label:"UUID"},{value:"number",label:"Number"},{value:"boolean",label:"Boolean"}]);L(this,"firstNames",["James","Mary","John","Patricia","Robert","Jennifer","Michael","Linda","William","Elizabeth","David","Barbara","Richard","Susan","Joseph","Jessica","Thomas","Sarah","Charles","Karen","Emma","Olivia","Ava","Isabella","Sophia","Mia","Charlotte","Amelia","Harper","Evelyn","Liam","Noah","Oliver","Elijah","Benjamin","Lucas","Henry","Theodore","Jack","Alexander","Santiago","Sofia","Mateo","Isabella","Sebastian","Valentina","Diego","Camila","Gabriel","Victoria","Adrian","Lucia","Julian","Elena","Daniel","Mariana","Wei","Mei","Hiroshi","Yuki","Jin","Soo-jin","Ming","Li Wei","Kai","Sakura","Ravi","Priya","Amit","Deepa","Zhang","Ying","Jamal","Aaliyah","DeShawn","Imani","Malik","Zara","Xavier","Aisha","Marcus","Kiara","Darnell","Destiny","Tyrone","Shaniqua","Kwame","Ebony","Muhammad","Fatima","Ahmed","Amir","Hassan","Leila","Omar","Yasmin","Ali","Noor","Ibrahim","Zainab","Karim","Amira","Yusuf","Layla","Hans","Ingrid","Pierre","Sophie","Giovanni","Chiara","Klaus","Astrid","Lars","Helga","Franz","Margot","Paolo","Anastasia","Viktor","Natasha"]);L(this,"lastNames",["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Thompson","White","Harris","Clark","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Hill","Baker","Green","Adams","Nelson","Carter","Garcia","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Perez","Sanchez","Ramirez","Torres","Flores","Rivera","Morales","Ortiz","Cruz","Reyes","Gomez","Diaz","Vasquez","Ramos","Gutierrez","Chavez","Mendoza","Chen","Wang","Li","Liu","Yang","Huang","Wu","Zhou","Zhang","Zhu","Kim","Lee","Park","Choi","Jung","Kang","Nguyen","Tran","Pham","Patel","Singh","Kumar","Shah","Sharma","Suzuki","Tanaka","Sato","Watanabe","Washington","Jefferson","Banks","Freeman","Brooks","Jenkins","Howard","Powell","Coleman","Simmons","Fisher","Reynolds","Ferguson","Fields","Booker","Rhodes","Stevenson","Malone","Hamilton","Douglas","Winston","Al-Sayed","Khan","Ahmed","Hassan","Ali","Rahman","Malik","Hussein","Mahmoud","Aziz","Ibrahim","Mansour","Khoury","Sayegh","Nassar","Schmidt","Mueller","Fischer","Weber","Meyer","Wagner","Becker","Dubois","Lefebvre","Moreau","Laurent","Bernard","Russo","Conti","Ferrari","Ricci","Marino","Costa","Kowalski","Novak","Kovac"]);L(this,"cities",["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","San Francisco","Charlotte","Indianapolis","Seattle","Denver","Boston","Portland","Miami","Nashville","Atlanta","Detroit","Toronto","Vancouver","Montreal","Calgary","Ottawa","Mexico City","Guadalajara","London","Paris","Berlin","Madrid","Rome","Amsterdam","Brussels","Vienna","Stockholm","Copenhagen","Oslo","Dublin","Prague","Warsaw","Budapest","Barcelona","Munich","Milan","Hamburg","Lyon","Frankfurt","Zurich","Geneva","Tokyo","Shanghai","Beijing","Seoul","Mumbai","Delhi","Singapore","Hong Kong","Bangkok","Kuala Lumpur","Jakarta","Manila","Osaka","Taipei","Ho Chi Minh City","Dubai","Abu Dhabi","Doha","Istanbul","Tehran","Riyadh","Bangalore","Karachi","Sydney","Melbourne","Brisbane","Perth","Auckland","Wellington","Adelaide","São Paulo","Rio de Janeiro","Buenos Aires","Lima","Bogotá","Santiago","Caracas","Montevideo","Quito","La Paz","Asunción","Brasília","Cairo","Lagos","Johannesburg","Nairobi","Casablanca","Cape Town","Accra","Addis Ababa","Dar es Salaam","Algiers","Khartoum","Rabat"]);L(this,"states",["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);L(this,"countries",["United States","Canada","Mexico","Costa Rica","Panama","Jamaica","Dominican Republic","Cuba","Guatemala","Honduras","El Salvador","Brazil","Argentina","Chile","Colombia","Peru","Venezuela","Uruguay","Ecuador","Bolivia","Paraguay","United Kingdom","Germany","France","Italy","Spain","Netherlands","Belgium","Sweden","Norway","Denmark","Finland","Ireland","Portugal","Greece","Austria","Switzerland","Poland","Hungary","Czech Republic","Romania","Ukraine","Croatia","Serbia","China","Japan","South Korea","India","Indonesia","Malaysia","Singapore","Thailand","Vietnam","Philippines","Pakistan","Bangladesh","Sri Lanka","Nepal","Mongolia","Kazakhstan","Israel","Saudi Arabia","United Arab Emirates","Qatar","Turkey","Iran","Iraq","Jordan","Lebanon","Oman","South Africa","Egypt","Morocco","Kenya","Nigeria","Ghana","Ethiopia","Tanzania","Uganda","Rwanda","Senegal","Algeria","Tunisia","Australia","New Zealand","Fiji","Papua New Guinea","Solomon Islands","Vanuatu","Samoa"]);L(this,"companies",["Quantum Dynamics","Digital Nexus","TechSphere Solutions","InnovateX","CyberPeak Systems","DataFlow Technologies","CloudMind Computing","Artificial Intelligence Labs","Binary Solutions Group","FutureTech Industries","Neural Networks Inc","Quantum Computing Co","Digital Frontiers","Atlas Manufacturing","Global Industries Corp","Sterling Dynamics","Precision Engineering Ltd","Summit Industries","Titan Manufacturing","Nova Industrial Systems","Apex Production Group","MetalWorks International","Cornerstone Financial","Global Trust Bank","Prosperity Partners","Heritage Investment Group","Capital Dynamics","Wealth Architects","Strategic Finance Solutions","Pinnacle Banking Corp","Liberty Financial","Vital Sciences","BioGenetics Research","MediCore Solutions","Genesis Healthcare","Life Sciences Lab","Advanced Medical Systems","BioTech Innovations","Healthcare Dynamics","Pharmaceutical Pioneers","Stellar Entertainment","Global Media Group","Digital Content Corp","Creative Dynamics","Media Frontiers","Entertainment Fusion","Interactive Media Solutions","Content Creation Co","Digital Dreams Studios","Acme Corporation","Umbrella Corporation","Cyberdyne Systems","Wayne Enterprises","Stark Industries","Oscorp Industries","Weyland-Yutani Corp","InGen Technologies","Tyrell Corporation","Gekko & Co","Wonka Industries","Dunder Mifflin","Los Pollos Hermanos"]);L(this,"jobTitles",["Software Engineer","Data Scientist","Cloud Architect","DevOps Engineer","Machine Learning Engineer","Full Stack Developer","Mobile App Developer","Systems Administrator","Information Security Analyst","Database Administrator","UI/UX Designer","Product Manager","Scrum Master","IT Project Manager","Network Engineer","Blockchain Developer","AI Research Scientist","Quality Assurance Engineer","Site Reliability Engineer","Tech Lead","Chief Executive Officer","Chief Technology Officer","Chief Financial Officer","Chief Marketing Officer","Chief Operating Officer","Managing Director","Business Development Manager","Operations Director","Strategy Consultant","Marketing Manager","Sales Director","Account Executive","Brand Manager","Human Resources Manager","Recruitment Specialist","Financial Analyst","Investment Banker","Management Consultant","Risk Manager","Supply Chain Manager","Creative Director","Art Director","Graphic Designer","Content Strategist","Copywriter","Digital Marketing Specialist","Social Media Manager","Video Producer","Motion Designer","Brand Strategist","UX Researcher","Visual Designer","3D Artist","Game Designer","Content Creator","Medical Doctor","Registered Nurse","Pharmacist","Clinical Researcher","Physical Therapist","Healthcare Administrator","Biomedical Engineer","Psychiatrist","Dental Surgeon","Veterinarian","Nurse Practitioner","Research Scientist","Biotechnology Researcher","Environmental Scientist","Chemical Engineer","Quantum Physicist","Marine Biologist","Archaeologist","Aerospace Engineer","Materials Scientist","Data Analyst","University Professor","Educational Consultant","Academic Researcher","Curriculum Developer","Educational Technology Specialist","Dean of Students","Corporate Lawyer","Investment Manager","Financial Controller","Tax Consultant","Compliance Officer","Legal Counsel","Portfolio Manager","Actuary","Audit Manager","Wealth Management Advisor"]);L(this,"streetTypes",["Street","Avenue","Boulevard","Road","Lane","Drive","Way","Court","Circle","Place","Trail","Parkway","Highway","Terrace","Square","Alley","Loop","Path","Grove","Crescent","Ridge","Point","Heights","Crossing","Commons","Esplanade","Glen","Green","Landing","Meadow","Park","Plaza","Promenade","Run","Trace","Vale","Vista","Walk","Row"])}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="generator-container">
        <div class="config-section">
          <div class="field-list" id="fieldList">
            <!-- Field configurations will be added here -->
          </div>
          <button id="addField" class="button add-field-btn">Add Field</button>
          
          <div class="generate-controls">
            <div class="control-group">
              <label for="recordCount">Number of Records:</label>
              <input type="number" id="recordCount" value="10" min="1" max="1000">
            </div>
            <button id="generateBtn" class="button generate-btn">Generate Data</button>
          </div>
        </div>

        <div class="output-section">
          <div class="output-header">
            <div class="format-selector">
              <label>Export Format:</label>
              <select id="exportFormat">
                <option value="json">JSON</option>
                <option value="csv">CSV</option>
                <option value="raw">Raw Text</option>
              </select>
            </div>
            <div class="output-controls">
              <button id="copyOutput" class="button">Copy</button>
              <button id="downloadOutput" class="button">Download</button>
            </div>
          </div>
          <div class="output-content">
            <pre id="outputDisplay"></pre>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addFieldRow(),this.addStyles())}setupEventListeners(){const e=document.getElementById("addField"),t=document.getElementById("generateBtn"),n=document.getElementById("exportFormat"),s=document.getElementById("copyOutput"),r=document.getElementById("downloadOutput");!e||!t||!n||!s||!r||(e.addEventListener("click",()=>this.addFieldRow()),t.addEventListener("click",()=>this.generateData()),n.addEventListener("change",()=>this.generateData()),s.addEventListener("click",()=>{const o=document.getElementById("outputDisplay");o!=null&&o.textContent&&navigator.clipboard.writeText(o.textContent).then(()=>this.showToast("Output copied to clipboard")).catch(()=>this.showToast("Failed to copy output"))}),r.addEventListener("click",()=>{var d;const o=(d=document.getElementById("outputDisplay"))==null?void 0:d.textContent;if(!o)return;const a=n.value,l=new Blob([o],{type:a==="json"?"application/json":a==="csv"?"text/csv":"text/plain"}),c=URL.createObjectURL(l),u=document.createElement("a");u.href=c,u.download=`mock-data.${a}`,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(c),this.showToast("File downloaded successfully")}))}addFieldRow(){const e=document.getElementById("fieldList");if(!e)return;const t=document.createElement("div");t.className="field-row",t.innerHTML=`
      <input type="text" class="field-name" placeholder="Field name">
      <select class="field-type">
        ${this.supportedTypes.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
      </select>
      <div class="field-options"></div>
      <button class="remove-field">×</button>
    `;const n=t.querySelector(".remove-field");n==null||n.addEventListener("click",()=>{t.remove(),e.children.length===0&&this.addFieldRow()}),e.appendChild(t)}generateData(){var l,c;const e=document.querySelectorAll(".field-row"),t=parseInt(((l=document.getElementById("recordCount"))==null?void 0:l.value)||"10"),n=(c=document.getElementById("exportFormat"))==null?void 0:c.value,s=document.getElementById("outputDisplay");if(!s)return;const r=Array.from(e).map(u=>{var d,h;return{name:((d=u.querySelector(".field-name"))==null?void 0:d.value)||"field",type:((h=u.querySelector(".field-type"))==null?void 0:h.value)||"text"}}),o=Array.from({length:t},()=>{const u={};return r.forEach(d=>{u[d.name]=this.generateFieldValue(d.type)}),u});let a;switch(n){case"json":a=JSON.stringify(o,null,2);break;case"csv":const u=r.map(h=>h.name).join(","),d=o.map(h=>r.map(f=>h[f.name]).join(","));a=[u,...d].join(`
`);break;case"raw":a=o.map(h=>Object.entries(h).map(([f,g])=>`${f}: ${g}`).join(`
`)).join(`

`);break;default:a=JSON.stringify(o,null,2)}s.textContent=a}generateFieldValue(e){switch(e){case"fullName":return this.generateFullName();case"firstName":return this.getRandomElement(this.firstNames);case"lastName":return this.getRandomElement(this.lastNames);case"email":return this.generateEmail();case"phoneNumber":return this.generatePhoneNumber();case"streetAddress":return this.generateStreetAddress();case"city":return this.getRandomElement(this.cities);case"state":return this.getRandomElement(this.states);case"zipCode":return this.generateZipCode();case"country":return this.getRandomElement(this.countries);case"company":return this.getRandomElement(this.companies);case"jobTitle":return this.getRandomElement(this.jobTitles);case"age":return Math.floor(Math.random()*60)+18;case"date":return this.generateRandomDate();case"uuid":return crypto.randomUUID();case"number":return Math.floor(Math.random()*1e3);case"boolean":return Math.random()>.5;default:return"Unknown type"}}getRandomElement(e){return e[Math.floor(Math.random()*e.length)]}generateFullName(){return`${this.getRandomElement(this.firstNames)} ${this.getRandomElement(this.lastNames)}`}generateEmail(){const e=this.getRandomElement(this.firstNames).toLowerCase(),t=this.getRandomElement(this.lastNames).toLowerCase(),n=["gmail.com","yahoo.com","hotmail.com","outlook.com","example.com"];return`${e}.${t}@${this.getRandomElement(n)}`}generatePhoneNumber(){const e=Math.floor(Math.random()*900)+100,t=Math.floor(Math.random()*900)+100,n=Math.floor(Math.random()*9e3)+1e3;return`(${e}) ${t}-${n}`}generateStreetAddress(){const e=Math.floor(Math.random()*9900)+100,t=["Oak","Maple","Cedar","Pine","Elm","Willow","Birch","Forest","River","Lake","Stream","Mountain","Valley","Meadow","Hill","Garden","Rose","Lily","Palm","Beach","Ocean","Spring","Summer","Washington","Lincoln","Jefferson","Adams","Madison","Franklin","Hamilton","Kennedy","Roosevelt","Victoria","Windsor","Heritage","Main","High","Market","Church","School","Park","Central","Broadway","Union","Liberty","State","Commerce","Industrial","University","North","South","East","West","Northwest","Northeast","Southwest","Southeast","Highland","Sunset","Sunrise","Pleasant","Hidden","Crystal","Royal","Golden","Silver","Emerald","Diamond","Castle","Colonial","Crescent"];return`${e} ${this.getRandomElement(t)} ${this.getRandomElement(this.streetTypes)}`}generateZipCode(){return String(Math.floor(Math.random()*9e4)+1e4)}generateRandomDate(e=new Date(2020,0,1),t=new Date){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())).toISOString().split("T")[0]}showToast(e){const t=document.querySelector(".generator-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .generator-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
        padding: 1rem;
      }

      .config-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .field-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .field-row {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .field-name {
        flex: 2;
        min-width: 150px;
      }

      .field-type {
        flex: 2;
        min-width: 150px;
      }

      .field-options {
        flex: 1;
      }

      .field-name,
      .field-type,
      #recordCount,
      #exportFormat {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 0.9rem;
      }

      .remove-field {
        padding: 0.25rem 0.75rem;
        background: none;
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        cursor: pointer;
        font-size: 1.2rem;
        line-height: 1;
        transition: all 0.2s;
      }

      .remove-field:hover {
        border-color: #f44336;
        color: #f44336;
      }

      .add-field-btn {
        margin-bottom: 1.5rem;
      }

      .generate-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border);
      }

      .control-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .generate-btn {
        min-width: 120px;
      }

      .output-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .format-selector {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .output-controls {
        display: flex;
        gap: 0.5rem;
      }

      .output-content {
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        padding: 1rem;
        max-height: 500px;
        overflow: auto;
      }

      #outputDisplay {
        margin: 0;
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.5;
        white-space: pre-wrap;
        word-break: break-word;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        z-index: 1000;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }

      @media (max-width: 768px) {
        .field-row {
          flex-direction: column;
          gap: 0.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }

        .field-name,
        .field-type {
          width: 100%;
        }

        .remove-field {
          align-self: flex-end;
        }

        .generate-controls {
          flex-direction: column;
          align-items: stretch;
        }

        .output-header {
          flex-direction: column;
          gap: 1rem;
        }

        .format-selector {
          width: 100%;
        }

        .output-controls {
          width: 100%;
          justify-content: stretch;
        }

        .output-controls button {
          flex: 1;
        }
      }
    `,document.head.appendChild(e)}}class my{constructor(){L(this,"id","random-number-generator");L(this,"name","Random Number Generator");L(this,"description","Generate random numbers with custom ranges, distributions, and options");L(this,"seoMetadata",{title:"Free Online Random Number Generator Tool",description:"Generate random numbers with custom ranges and distributions. Perfect for games, statistics, and random sampling. Cryptographically secure random number generation.",keywords:["random number generator","random number picker","number randomizer","random integer generator","random range generator","secure random numbers"]});L(this,"distributions",[{value:"uniform",label:"Uniform (Equal Probability)"},{value:"normal",label:"Normal (Bell Curve)"},{value:"exponential",label:"Exponential"}])}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="generator-container">
        <div class="settings-section">
          <div class="range-settings">
            <div class="setting-group">
              <label for="minValue">Minimum Value</label>
              <input type="number" id="minValue" value="1" class="number-input">
            </div>
            <div class="setting-group">
              <label for="maxValue">Maximum Value</label>
              <input type="number" id="maxValue" value="100" class="number-input">
            </div>
          </div>

          <div class="distribution-settings">
            <div class="setting-group">
              <label for="distribution">Distribution</label>
              <select id="distribution" class="select-input">
                ${this.distributions.map(t=>`<option value="${t.value}">${t.label}</option>`).join("")}
              </select>
            </div>

            <div id="normalParams" class="distribution-params" style="display: none;">
              <div class="setting-group">
                <label for="mean">Mean (μ)</label>
                <input type="number" id="mean" class="number-input" value="50">
              </div>
              <div class="setting-group">
                <label for="stdDev">Standard Deviation (σ)</label>
                <input type="number" id="stdDev" class="number-input" value="10" min="0">
              </div>
            </div>

            <div id="exponentialParams" class="distribution-params" style="display: none;">
              <div class="setting-group">
                <label for="lambda">Lambda (λ)</label>
                <input type="number" id="lambda" class="number-input" value="1" min="0" step="0.1">
              </div>
            </div>
          </div>

          <div class="generation-settings">
            <div class="setting-group">
              <label for="count">Number of Values</label>
              <input type="number" id="count" value="1" min="1" max="1000" class="number-input">
            </div>
            <div class="setting-group">
              <label for="decimalPlaces">Decimal Places</label>
              <input type="number" id="decimalPlaces" value="0" min="0" max="10" class="number-input">
            </div>
            <div class="setting-group checkbox-group">
              <label>
                <input type="checkbox" id="allowDuplicates" checked>
                Allow Duplicate Values
              </label>
            </div>
            <div class="setting-group checkbox-group">
              <label>
                <input type="checkbox" id="sortResults">
                Sort Results
              </label>
            </div>
          </div>

          <button id="generateBtn" class="button generate-btn">Generate Numbers</button>
        </div>

        <div class="results-section">
          <div class="results-header">
            <h3>Generated Numbers</h3>
            <div class="results-controls">
              <button id="copyBtn" class="button">Copy</button>
              <button id="downloadTxtBtn" class="button">Download .txt</button>
              <button id="downloadJsonBtn" class="button">Download JSON</button>
              <button id="clearBtn" class="button">Clear</button>
            </div>
          </div>
          <div class="results-display">
            <div id="resultsArea" class="results-area"></div>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("distribution"),t=document.getElementById("normalParams"),n=document.getElementById("exponentialParams"),s=document.getElementById("generateBtn"),r=document.getElementById("copyBtn"),o=document.getElementById("clearBtn"),a=document.getElementById("resultsArea");if(!e||!t||!n||!s||!r||!o||!a)return;e.addEventListener("change",()=>{t.style.display=e.value==="normal"?"flex":"none",n.style.display=e.value==="exponential"?"flex":"none"}),s.addEventListener("click",()=>{const u=parseFloat(document.getElementById("minValue").value),d=parseFloat(document.getElementById("maxValue").value),h=parseInt(document.getElementById("count").value),f=parseInt(document.getElementById("decimalPlaces").value),g=document.getElementById("allowDuplicates").checked,y=document.getElementById("sortResults").checked,x=e.value;try{const p=this.generateNumbers({min:u,max:d,count:h,decimalPlaces:f,allowDuplicates:g,sortResults:y,distribution:x,mean:parseFloat(document.getElementById("mean").value),stdDev:parseFloat(document.getElementById("stdDev").value),lambda:parseFloat(document.getElementById("lambda").value)});this.displayResults(p)}catch(p){this.showError(p.message)}}),r.addEventListener("click",()=>{const u=a.textContent;u&&navigator.clipboard.writeText(u).then(()=>this.showToast("Numbers copied to clipboard")).catch(()=>this.showToast("Failed to copy numbers"))}),o.addEventListener("click",()=>{a.innerHTML=""});const l=document.getElementById("downloadTxtBtn"),c=document.getElementById("downloadJsonBtn");l&&c&&(l.addEventListener("click",()=>{const u=this.extractCurrentNumbers();if(u.length===0)return;const d=u.join(`
`);this.downloadFile(d,"random-numbers.txt","text/plain")}),c.addEventListener("click",()=>{const u=this.extractCurrentNumbers();if(u.length===0)return;const d=JSON.stringify(u,null,4);this.downloadFile(d,"random-numbers.json","application/json")}))}generateNumbers(e){const{min:t,max:n,count:s,decimalPlaces:r,allowDuplicates:o,sortResults:a,distribution:l,mean:c=50,stdDev:u=10,lambda:d=1}=e;if(isNaN(t)||isNaN(n))throw new Error("Please enter valid minimum and maximum values");if(t>=n)throw new Error("Maximum value must be greater than minimum value");if(s<1||s>1e3)throw new Error("Number of values must be between 1 and 1000");if(r<0||r>10)throw new Error("Decimal places must be between 0 and 10");const h=Math.pow(10,-r),f=Math.floor((n-t)/h)+1;if(!o&&f<s)throw new Error(`Can't generate ${s} unique numbers in this range with ${r} decimal places`);const g=[],y=new Set;for(;g.length<s;){let x;switch(l){case"normal":if(u<=0)throw new Error("Standard deviation must be greater than 0");let p=0;do{const m=Math.random(),E=Math.random();x=Math.sqrt(-2*Math.log(m))*Math.cos(2*Math.PI*E)*u+c,p++}while((x<t||x>n)&&p<100);p>=100&&(x=t+Math.random()*(n-t));break;case"exponential":if(d<=0)throw new Error("Lambda must be greater than 0");const S=-Math.log(1-Math.random())/d,w=n-t;x=t+(1-Math.exp(-S))*w;break;default:x=t+Math.random()*(n-t);break}x=Number(x.toFixed(r)),o?g.push(x):y.has(x)||(g.push(x),y.add(x))}return a&&g.sort((x,p)=>x-p),g}displayResults(e){const t=document.getElementById("resultsArea");if(!t)return;const n=e.map(s=>Math.abs(s)>=1e6||Math.abs(s)<1e-4&&s!==0?s.toExponential(Math.min(15,Math.max(0,this.getSignificantDecimals(s)))):s.toLocaleString(void 0,{minimumFractionDigits:this.getDecimalPlaces(s),maximumFractionDigits:this.getDecimalPlaces(s)}));if(t.innerHTML=n.join(", "),e.length>1){const s=this.calculateStats(e);t.innerHTML+=`
        <div class="stats-summary">
          <hr>
          <div>Count: ${e.length}</div>
          <div>Min: ${this.formatNumber(s.min)}</div>
          <div>Max: ${this.formatNumber(s.max)}</div>
          <div>Mean: ${this.formatNumber(s.mean)}</div>
          ${e.length>2?`<div>Std Dev: ${this.formatNumber(s.stdDev)}</div>`:""}
        </div>
      `}}getDecimalPlaces(e){const t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}getSignificantDecimals(e){const t=Math.abs(e).toExponential(),[n]=t.split("e");return(n.split(".")[1]||"").length}formatNumber(e){return Math.abs(e)>=1e6||Math.abs(e)<1e-4&&e!==0?e.toExponential(4):e.toLocaleString(void 0,{minimumFractionDigits:Math.min(4,this.getDecimalPlaces(e)),maximumFractionDigits:Math.min(4,this.getDecimalPlaces(e))})}downloadFile(e,t,n){const s=new Blob([e],{type:n}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r),this.showToast(`Downloaded ${t}`)}extractCurrentNumbers(){var n;const e=document.getElementById("resultsArea");if(!e)return[];const t=(n=e.firstChild)==null?void 0:n.textContent;return t?t.split(",").map(s=>s.trim()).map(s=>parseFloat(s.replace(/,/g,""))).filter(s=>!isNaN(s)):[]}calculateStats(e){const t=Math.min(...e),n=Math.max(...e),s=e.reduce((o,a)=>o+a,0)/e.length,r=Math.sqrt(e.reduce((o,a)=>o+Math.pow(a-s,2),0)/(e.length-1));return{min:t,max:n,mean:s,stdDev:r}}showError(e){const t=document.getElementById("resultsArea");t&&(t.innerHTML=`<span class="error-message">${e}</span>`)}showToast(e){const t=document.querySelector(".generator-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .generator-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .settings-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .range-settings,
      .distribution-settings,
      .generation-settings {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .setting-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 200px;
      }

      .checkbox-group {
        flex-direction: row;
        align-items: center;
        min-width: 0;
      }

      .distribution-params {
        display: flex;
        gap: 1rem;
        width: 100%;
      }

      .number-input,
      .select-input {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 0.9rem;
      }

      .generate-btn {
        align-self: flex-end;
        min-width: 150px;
      }

      .results-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .results-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .results-header h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .results-controls {
        display: flex;
        gap: 0.5rem;
      }

      .results-display {
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 1rem;
        min-height: 100px;
        max-height: 300px;
        overflow-y: auto;
      }

      .results-area {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.5;
        word-break: break-word;
      }

      .stats-summary {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
      }

      .stats-summary hr {
        margin: 0.5rem 0;
        border: none;
        border-top: 1px solid var(--border);
      }

      .stats-summary div {
        margin: 0.25rem 0;
      }

      .error-message {
        color: #f44336;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }

      @media (max-width: 600px) {
        .setting-group {
          min-width: 100%;
        }

        .generate-btn {
          align-self: stretch;
        }

        .results-header {
          flex-direction: column;
          gap: 1rem;
        }

        .results-controls {
          width: 100%;
          justify-content: stretch;
        }

        .results-controls button {
          flex: 1;
        }
      }
    `,document.head.appendChild(e)}}class gy{constructor(){L(this,"id","json-compare");L(this,"name","JSON Compare");L(this,"description","Compare and find differences between JSON objects");L(this,"seoMetadata",{title:"Free Online JSON Comparison Tool",description:"Compare two JSON objects and find differences instantly. Visual diff viewer, structural comparison, and value matching for JSON data.",keywords:["json compare","json diff","json difference checker","compare json online","json comparison tool","json structure compare"]})}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="compare-container">
        <div class="editors-section">
          <div class="editor-column">
            <div class="editor-header">
              <h3>Original JSON</h3>
              <div class="editor-controls">
                <button class="format-btn button">Format</button>
                <button class="clear-btn button">Clear</button>
              </div>
            </div>
            <div class="editor-wrapper">
              <div class="line-numbers" id="leftLineNumbers"></div>
              <textarea 
                id="leftEditor" 
                class="json-editor" 
                spellcheck="false" 
                placeholder="Paste your original JSON here..."
              ></textarea>
            </div>
            <div class="error-display" id="leftError"></div>
          </div>

          <div class="editor-column">
            <div class="editor-header">
              <h3>Modified JSON</h3>
              <div class="editor-controls">
                <button class="format-btn button">Format</button>
                <button class="clear-btn button">Clear</button>
              </div>
            </div>
            <div class="editor-wrapper">
              <div class="line-numbers" id="rightLineNumbers"></div>
              <textarea 
                id="rightEditor" 
                class="json-editor" 
                spellcheck="false"
                placeholder="Paste your modified JSON here..."
              ></textarea>
            </div>
            <div class="error-display" id="rightError"></div>
          </div>
        </div>

        <div class="diff-options">
          <label class="checkbox-label">
            <input type="checkbox" id="ignoreWhitespace" checked>
            Ignore Whitespace
          </label>
          <label class="checkbox-label">
            <input type="checkbox" id="ignoreCase">
            Ignore Case
          </label>
          <label class="checkbox-label">
            <input type="checkbox" id="ignoreOrder">
            Ignore Array Order
          </label>
        </div>

        <div class="results-section">
          <div class="results-header">
            <h3>Comparison Results</h3>
            <div id="diffStats" class="diff-stats"></div>
          </div>
          <div id="diffResults" class="diff-results"></div>
        </div>
      </div>
    `,this.setupEditor(),this.addStyles())}setupEditor(){const e=document.getElementById("leftEditor"),t=document.getElementById("rightEditor"),n=document.getElementById("leftError"),s=document.getElementById("rightError"),r=document.getElementById("diffResults"),o=document.getElementById("diffStats");if(!e||!t||!n||!s||!r||!o)return;const a={name:"John Doe",age:30,hobbies:["reading","gaming"],address:{street:"123 Main St",city:"Boston"}},l={name:"John Doe",age:31,hobbies:["reading","gaming"],address:{street:"123 Main St",city:"Boston"}};e.value=JSON.stringify(a,null,2),t.value=JSON.stringify(l,null,2);const c=()=>{try{const d=JSON.parse(e.value),h=JSON.parse(t.value),f=document.getElementById("ignoreWhitespace").checked,g=document.getElementById("ignoreCase").checked,y=document.getElementById("ignoreOrder").checked,x=this.compareJson(d,h,{ignoreWhitespace:f,ignoreCase:g,ignoreOrder:y});this.displayDifferences(x)}catch(d){r.innerHTML=`<div class="error-message">Error: ${d.message}</div>`,o.textContent=""}},u=(d,h)=>{const f=document.getElementById(h);if(!f)return;const g=d.value.split(`
`).length;f.innerHTML=Array.from({length:g},(y,x)=>`<div class="line-number">${x+1}</div>`).join("")};[e,t].forEach((d,h)=>{const f=h===0?"leftLineNumbers":"rightLineNumbers",g=h===0?n:s;d.addEventListener("input",()=>{u(d,f);try{d.value.trim()&&(JSON.parse(d.value),g.textContent="",g.className="error-display",c())}catch(x){g.textContent=x.message,g.className="error-display error"}}),d.addEventListener("scroll",()=>{const x=document.getElementById(f);x&&(x.scrollTop=d.scrollTop)}),d.addEventListener("keydown",x=>{if(x.key==="Tab"){x.preventDefault();const p=d.selectionStart,S=d.selectionEnd;d.value=d.value.substring(0,p)+"  "+d.value.substring(S),d.selectionStart=d.selectionEnd=p+2,u(d,f)}});const y=d.closest(".editor-column");if(y){const x=y.querySelector(".format-btn"),p=y.querySelector(".clear-btn");x==null||x.addEventListener("click",()=>{try{const S=JSON.parse(d.value);d.value=JSON.stringify(S,null,2),u(d,f),g.textContent="",g.className="error-display"}catch(S){g.textContent=S.message,g.className="error-display error"}}),p==null||p.addEventListener("click",()=>{d.value="",u(d,f),g.textContent="",g.className="error-display"})}}),["ignoreWhitespace","ignoreCase","ignoreOrder"].forEach(d=>{const h=document.getElementById(d);h==null||h.addEventListener("change",c)}),u(e,"leftLineNumbers"),u(t,"rightLineNumbers"),c()}compareJson(e,t,n){const s=[],r=n.path||[],o=a=>{if(typeof a=="string"){let l=n.ignoreWhitespace?a.trim():a;return n.ignoreCase?l.toLowerCase():l}return a};if(Array.isArray(e))Array.isArray(t)?e.length!==t.length?s.push({path:r.join("."),type:"array_length",left:e.length,right:t.length}):n.ignoreOrder||e.forEach((a,l)=>{s.push(...this.compareJson(a,t[l],{...n,path:[...r,l.toString()]}))}):s.push({path:r.join("."),type:"type_mismatch",left:"array",right:typeof t});else if(typeof e=="object"&&e!==null)typeof t!="object"||t===null?s.push({path:r.join("."),type:"type_mismatch",left:"object",right:typeof t}):new Set([...Object.keys(e),...Object.keys(t)]).forEach(l=>{l in e?l in t?s.push(...this.compareJson(e[l],t[l],{...n,path:[...r,l]})):s.push({path:[...r,l].join("."),type:"key_missing_in_right",left:e[l]}):s.push({path:[...r,l].join("."),type:"key_missing_in_left",right:t[l]})});else{const a=o(e),l=o(t);a!==l&&s.push({path:r.join(".")||"root",type:"value_mismatch",left:e,right:t})}return s}displayDifferences(e){const t=document.getElementById("diffResults"),n=document.getElementById("diffStats");if(!t||!n)return;if(e.length===0){t.innerHTML='<div class="success-message">✓ JSONs are equivalent</div>',n.textContent="No differences found";return}const s=e.reduce((r,o)=>(r[o.type]=(r[o.type]||0)+1,r),{});n.innerHTML=Object.entries(s).map(([r,o])=>`<span class="stat-item ${r}">${this.formatDiffType(r)}: ${o}</span>`).join(" "),t.innerHTML="",this.highlightDifferences(e)}highlightDifferences(e){const t=document.getElementById("leftEditor"),n=document.getElementById("rightEditor");if(!t||!n)return;const s=(a,l)=>{const c=a.parentElement;if(!c)return;c.querySelectorAll(".highlight-overlay").forEach(d=>d.remove());const u=document.createElement("div");return u.className="highlight-overlay",u.style.left="2rem",c.appendChild(u),u},r=s(t,"left"),o=s(n,"right");!r||!o||(e.forEach(a=>{const l=a.path.split(".");try{const c=JSON.parse(t.value),u=JSON.parse(n.value),d=this.findAffectedLines(t.value,l),h=this.findAffectedLines(n.value,l);d.forEach(f=>{const g=document.createElement("div");g.className=`highlight-marker ${a.type}`,g.style.top=`${(f-.6)*20}px`,g.style.width="100%",g.style.height="20px",r.appendChild(g)}),h.forEach(f=>{const g=document.createElement("div");g.className=`highlight-marker ${a.type}`,g.style.top=`${(f-.6)*20}px`,g.style.width="100%",g.style.height="20px",o.appendChild(g)})}catch(c){console.error("Error highlighting differences:",c)}}),t.addEventListener("scroll",()=>{r&&(r.style.top=`${-t.scrollTop}px`)}),n.addEventListener("scroll",()=>{o&&(o.style.top=`${-n.scrollTop}px`)}))}findAffectedLines(e,t){const n=[];let s=JSON.parse(e),r=[],o=1;const a=l=>{if(!(!l||typeof l!="object"))for(const c in l){const d=[...r,c].join(".");o=(e.slice(0,e.indexOf(`"${c}"`)).match(/\n/g)||[]).length+1,t.join(".").startsWith(d)&&n.push(o),l[c]&&typeof l[c]=="object"&&(r.push(c),a(l[c]),r.pop())}};return a(s),[...new Set(n)]}formatDiffType(e){return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}addStyles(){const e=document.createElement("style");e.textContent=`
      .compare-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: calc(100vh - 180px);
        padding: 1rem;
      }

      .editors-section {
        display: flex;
        gap: 1rem;
        flex: 1;
        min-height: 0;
      }

      .editor-column {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
        min-width: 0;
      }

      .editor-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .editor-header h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .editor-controls {
        display: flex;
        gap: 0.5rem;
      }

      .editor-wrapper {
        display: flex;
        flex: 1;
        min-height: 0;
        position: relative;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
      }

      .line-numbers {
        padding: 0.5rem 0;
        background: var(--sidebar-bg);
        border-right: 1px solid var(--border);
        color: var(--text-secondary);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 20px;
        text-align: right;
        user-select: none;
        min-width: 2rem;
      }

      .line-number {
        padding: 0 0.5rem;
      }

      .json-editor {
        flex: 1;
        padding: 0.5rem;
        border: none;
        background: transparent;
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 14px;
        line-height: 20px;
        resize: none;
        outline: none;
        overflow: auto;
      }

      .highlight-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        overflow: hidden;
      }

      .highlight-marker {
        position: absolute;
        opacity: 0.2;
      }

      .highlight-marker.type_mismatch {
        background-color: #f44336;
      }

      .highlight-marker.array_length {
        background-color: #ff9800;
      }

      .highlight-marker.key_missing_in_left {
        background-color: #4caf50;
      }

      .highlight-marker.key_missing_in_right {
        background-color: #2196f3;
      }

      .highlight-marker.value_mismatch {
        background-color: #9c27b0;
      }

      .error-display {
        min-height: 1.5rem;
        font-size: 0.9rem;
      }

      .error-display.error {
        color: #f44336;
      }

      .diff-options {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        padding: 1rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .compare-btn {
        margin-left: auto;
      }

      .results-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 1rem;
      }

      .results-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .results-header h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .diff-stats {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .stat-item {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.9rem;
      }

      .stat-item.type_mismatch { background-color: rgba(244, 67, 54, 0.1); }
      .stat-item.array_length { background-color: rgba(255, 152, 0, 0.1); }
      .stat-item.key_missing_in_left { background-color: rgba(76, 175, 80, 0.1); }
      .stat-item.key_missing_in_right { background-color: rgba(33, 150, 243, 0.1); }
      .stat-item.value_mismatch { background-color: rgba(156, 39, 176, 0.1); }

      .diff-results {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .diff-item {
        padding: 0.75rem;
        border-radius: 4px;
        font-size: 0.9rem;
        line-height: 1.5;
      }

      .diff-item code {
        padding: 0.1rem 0.3rem;
        border-radius: 3px;
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        background: var(--sidebar-bg);
      }

      .diff-item.type_mismatch { background-color: rgba(244, 67, 54, 0.1); }
      .diff-item.array_length { background-color: rgba(255, 152, 0, 0.1); }
      .diff-item.key_missing_in_left { background-color: rgba(76, 175, 80, 0.1); }
      .diff-item.key_missing_in_right { background-color: rgba(33, 150, 243, 0.1); }
      .diff-item.value_mismatch { background-color: rgba(156, 39, 176, 0.1); }

      .success-message {
        color: #4caf50;
        font-weight: 500;
      }

      .error-message {
        color: #f44336;
      }

      @media (max-width: 768px) {
        .editors-section {
          flex-direction: column;
        }

        .diff-options {
          flex-direction: column;
          align-items: stretch;
        }

        .compare-btn {
          margin: 0;
        }

        .results-header {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    `,document.head.appendChild(e)}}class by{static injectSEOMetadata(e){const t=document.createElement("div");t.style.display="none",t.setAttribute("aria-hidden","true");const n={"@context":"https://schema.org","@type":"SoftwareApplication",name:e.seoMetadata.title,description:e.seoMetadata.description,keywords:e.seoMetadata.keywords.join(", "),applicationCategory:"WebApplication"};t.innerHTML=`
      <div class="tool-seo-metadata">
        <h2>${e.seoMetadata.title}</h2>
        <p>${e.seoMetadata.description}</p>
        <meta name="keywords" content="${e.seoMetadata.keywords.join(", ")}">
      </div>
      <script type="application/ld+json">
        ${JSON.stringify(n)}
      <\/script>
    `;const s=document.getElementById(e.id);s&&s.appendChild(t)}}const Gn=[new uh,new dh,new Ag,new Cg,new Fg,new Gg,new uy,new dy,new hy,new fy,new py,new my,new gy];function tc(i){const e=Gn.find(t=>t.id===i);return e&&by.injectSEOMetadata(e),e}function yy(){const i=document.querySelector(".tools-nav"),e=document.getElementById("toolSearch"),t=document.getElementById("toolContent");function n(l){i&&(i.innerHTML="",l.forEach(c=>{const u=document.createElement("div");u.className="tool-item",u.dataset.toolId=c.id,u.innerHTML=`<div class="tool-name">${c.name}</div>`,u.addEventListener("click",d=>{d.preventDefault(),s(c.id)}),i.appendChild(u)}))}function s(l){var u;const c=tc(l);c&&t&&(window.location.hash=l,document.querySelectorAll(".tool-item").forEach(d=>d.classList.remove("active")),(u=document.querySelector(`[data-tool-id="${l}"]`))==null||u.classList.add("active"),t.innerHTML="",c.render())}e.addEventListener("input",l=>{var h;const c=l.target.value.toLowerCase(),u=Gn.filter(f=>f.name.toLowerCase().includes(c)||f.description.toLowerCase().includes(c));n(u);const d=window.location.hash.slice(1);d&&((h=document.querySelector(`[data-tool-id="${d}"]`))==null||h.classList.add("active"))}),window.addEventListener("hashchange",()=>{const l=window.location.hash.slice(1);l?r(l):o()});function r(l){const c=tc(l);c?s(c.id):o()}function o(){Gn.length>0&&s(Gn[0].id)}n(Gn);const a=window.location.hash.slice(1);a?r(a):o()}document.addEventListener("DOMContentLoaded",yy);
