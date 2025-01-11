var ad=Object.defineProperty;var ld=(i,e,t)=>e in i?ad(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var M=(i,e,t)=>ld(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function Xo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Wt=Xo();function nc(i){Wt=i}const Yn={exec:()=>null};function te(i,e=""){let t=typeof i=="string"?i:i.source;const n={replace:(s,o)=>{let r=typeof o=="string"?o:o.source;return r=r.replace(Ne.caret,"$1"),t=t.replace(s,r),n},getRegex:()=>new RegExp(t,e)};return n}const Ne={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},cd=/^(?:[ \t]*(?:\n|$))+/,ud=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,dd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,fi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,hd=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ic=/(?:[*+-]|\d{1,9}[.)])/,sc=te(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ic).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Zo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,fd=/^[^\n]+/,Qo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,pd=te(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),md=te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ic).getRegex(),vs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",er=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,gd=te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",er).replace("tag",vs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),oc=te(Zo).replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",vs).getRegex(),bd=te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",oc).getRegex(),tr={blockquote:bd,code:ud,def:pd,fences:dd,heading:hd,hr:fi,html:gd,lheading:sc,list:md,newline:cd,paragraph:oc,table:Yn,text:fd},Zr=te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",vs).getRegex(),yd={...tr,table:Zr,paragraph:te(Zo).replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Zr).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",vs).getRegex()},vd={...tr,html:te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",er).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Yn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:te(Zo).replace("hr",fi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",sc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},xd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,wd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,rc=/^( {2,}|\\)\n(?!\s*$)/,kd=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xs=/[\p{P}\p{S}]/u,nr=/[\s\p{P}\p{S}]/u,ac=/[^\s\p{P}\p{S}]/u,_d=te(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,nr).getRegex(),Ed=/(?!~)[\p{P}\p{S}]/u,Sd=/(?!~)[\s\p{P}\p{S}]/u,Td=/(?:[^\s\p{P}\p{S}]|~)/u,Cd=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Ad=te(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,"u").replace(/punct/g,xs).getRegex(),lc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Id=te(lc,"gu").replace(/notPunctSpace/g,ac).replace(/punctSpace/g,nr).replace(/punct/g,xs).getRegex(),Md=te(lc,"gu").replace(/notPunctSpace/g,Td).replace(/punctSpace/g,Sd).replace(/punct/g,Ed).getRegex(),Nd=te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ac).replace(/punctSpace/g,nr).replace(/punct/g,xs).getRegex(),Od=te(/\\(punct)/,"gu").replace(/punct/g,xs).getRegex(),Ld=te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Dd=te(er).replace("(?:-->|$)","-->").getRegex(),Bd=te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Dd).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),is=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Pd=te(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",is).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),cc=te(/^!?\[(label)\]\[(ref)\]/).replace("label",is).replace("ref",Qo).getRegex(),uc=te(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qo).getRegex(),Fd=te("reflink|nolink(?!\\()","g").replace("reflink",cc).replace("nolink",uc).getRegex(),ir={_backpedal:Yn,anyPunctuation:Od,autolink:Ld,blockSkip:Cd,br:rc,code:wd,del:Yn,emStrongLDelim:Ad,emStrongRDelimAst:Id,emStrongRDelimUnd:Nd,escape:xd,link:Pd,nolink:uc,punctuation:_d,reflink:cc,reflinkSearch:Fd,tag:Bd,text:kd,url:Yn},Rd={...ir,link:te(/^!?\[(label)\]\((.*?)\)/).replace("label",is).getRegex(),reflink:te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",is).getRegex()},To={...ir,emStrongRDelimAst:Md,url:te(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},$d={...To,br:te(rc).replace("{2,}","*").getRegex(),text:te(To.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Si={normal:tr,gfm:yd,pedantic:vd},Mn={normal:ir,gfm:To,breaks:$d,pedantic:Rd},zd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qr=i=>zd[i];function ot(i,e){if(e){if(Ne.escapeTest.test(i))return i.replace(Ne.escapeReplace,Qr)}else if(Ne.escapeTestNoEncode.test(i))return i.replace(Ne.escapeReplaceNoEncode,Qr);return i}function ea(i){try{i=encodeURI(i).replace(Ne.percentDecode,"%")}catch{return null}return i}function ta(i,e){var o;const t=i.replace(Ne.findPipe,(r,a,l)=>{let c=!1,u=a;for(;--u>=0&&l[u]==="\\";)c=!c;return c?"|":" |"}),n=t.split(Ne.splitPipe);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!((o=n.at(-1))!=null&&o.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(Ne.slashPipe,"|");return n}function Nn(i,e,t){const n=i.length;if(n===0)return"";let s=0;for(;s<n&&(i.charAt(n-s-1)===e&&!t);)s++;return i.slice(0,n-s)}function jd(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return-1}function na(i,e,t,n,s){const o=e.href,r=e.title||null,a=i[1].replace(s.other.outputLinkReplace,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:o,title:r,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:o,title:r,text:a}}function Ud(i,e,t){const n=i.match(t.other.indentCodeCompensation);if(n===null)return e;const s=n[1];return e.split(`
`).map(o=>{const r=o.match(t.other.beginningSpace);if(r===null)return o;const[a]=r;return a.length>=s.length?o.slice(s.length):o}).join(`
`)}class ss{constructor(e){M(this,"options");M(this,"rules");M(this,"lexer");this.options=e||Wt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Nn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Ud(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=Nn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Nn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Nn(t[0],`
`).split(`
`),s="",o="";const r=[];for(;n.length>0;){let a=!1;const l=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);const u=l.join(`
`),d=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,o=o?`${o}
${d}`:d;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,r,!0),this.lexer.state.top=h,n.length===0)break;const f=r.at(-1);if((f==null?void 0:f.type)==="code")break;if((f==null?void 0:f.type)==="blockquote"){const g=f,y=g.raw+`
`+n.join(`
`),v=this.blockquote(y);r[r.length-1]=v,s=s.substring(0,s.length-g.raw.length)+v.raw,o=o.substring(0,o.length-g.text.length)+v.text;break}else if((f==null?void 0:f.type)==="list"){const g=f,y=g.raw+`
`+n.join(`
`),v=this.list(y);r[r.length-1]=v,s=s.substring(0,s.length-f.raw.length)+v.raw,o=o.substring(0,o.length-g.raw.length)+v.raw,n=y.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:r,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,o={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const r=this.rules.other.listItemRegex(n);let a=!1;for(;e;){let c=!1,u="",d="";if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,E=>" ".repeat(3*E.length)),f=e.split(`
`,1)[0],g=!h.trim(),y=0;if(this.options.pedantic?(y=2,d=h.trimStart()):g?y=t[1].length+1:(y=t[2].search(this.rules.other.nonSpaceChar),y=y>4?1:y,d=h.slice(y),y+=t[1].length),g&&this.rules.other.blankLine.test(f)&&(u+=f+`
`,e=e.substring(f.length+1),c=!0),!c){const E=this.rules.other.nextBulletRegex(y),w=this.rules.other.hrRegex(y),m=this.rules.other.fencesBeginRegex(y),S=this.rules.other.headingBeginRegex(y),L=this.rules.other.htmlBeginRegex(y);for(;e;){const D=e.split(`
`,1)[0];let N;if(f=D,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),N=f):N=f.replace(this.rules.other.tabCharGlobal,"    "),m.test(f)||S.test(f)||L.test(f)||E.test(f)||w.test(f))break;if(N.search(this.rules.other.nonSpaceChar)>=y||!f.trim())d+=`
`+N.slice(y);else{if(g||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||m.test(h)||S.test(h)||w.test(h))break;d+=`
`+f}!g&&!f.trim()&&(g=!0),u+=D+`
`,e=e.substring(D.length+1),h=N.slice(y)}}o.loose||(a?o.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0));let v=null,p;this.options.gfm&&(v=this.rules.other.listIsTask.exec(d),v&&(p=v[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),o.items.push({type:"list_item",raw:u,task:!!v,checked:p,loose:!1,text:d,tokens:[]}),o.raw+=u}const l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let c=0;c<o.items.length;c++)if(this.lexer.state.top=!1,o.items[c].tokens=this.lexer.blockTokens(o.items[c].text,[]),!o.loose){const u=o.items[c].tokens.filter(h=>h.type==="space"),d=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));o.loose=d}if(o.loose)for(let c=0;c<o.items.length;c++)o.items[c].loose=!0;return o}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:o}}}table(e){var a;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=ta(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=(a=t[3])!=null&&a.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const l of s)this.rules.other.tableAlignRight.test(l)?r.align.push("right"):this.rules.other.tableAlignCenter.test(l)?r.align.push("center"):this.rules.other.tableAlignLeft.test(l)?r.align.push("left"):r.align.push(null);for(let l=0;l<n.length;l++)r.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:r.align[l]});for(const l of o)r.rows.push(ta(l,r.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:r.align[u]})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const r=Nn(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=jd(t[2],"()");if(r>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],o="";if(this.options.pedantic){const r=this.rules.other.pedanticHrefTitle.exec(s);r&&(s=r[1],o=r[3])}else o=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),na(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=t[s.toLowerCase()];if(!o){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return na(n,o,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...s[0]].length-1;let a,l,c=r,u=0;const d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+r);(s=d.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const h=[...s[0]][0].length,f=e.slice(0,r+s.index+h+l);if(Math.min(r,l)%2){const y=f.slice(1,-1);return{type:"em",raw:f,text:y,tokens:this.lexer.inlineTokens(y)}}const g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,o;if(t[2]==="@")s=t[0],o="mailto:"+s;else{let r;do r=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(r!==t[0]);s=t[0],t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}}class Ue{constructor(e){M(this,"tokens");M(this,"options");M(this,"state");M(this,"tokenizer");M(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Wt,this.options.tokenizer=this.options.tokenizer||new ss,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:Ne,block:Si.normal,inline:Mn.normal};this.options.pedantic?(t.block=Si.pedantic,t.inline=Mn.pedantic):this.options.gfm&&(t.block=Si.gfm,this.options.breaks?t.inline=Mn.breaks:t.inline=Mn.gfm),this.tokenizer.rules=t}static get rules(){return{block:Si,inline:Mn}}static lex(e,t){return new Ue(t).lex(e)}static lexInline(e,t){return new Ue(t).inlineTokens(e)}lex(e){e=e.replace(Ne.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){var s,o,r;for(this.options.pedantic&&(e=e.replace(Ne.tabCharGlobal,"    ").replace(Ne.spaceLine,""));e;){let a;if((o=(s=this.options.extensions)==null?void 0:s.block)!=null&&o.some(c=>(a=c.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const c=t.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let l=e;if((r=this.options.extensions)!=null&&r.startBlock){let c=1/0;const u=e.slice(1);let d;this.options.extensions.startBlock.forEach(h=>{d=h.call({lexer:this},u),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){const c=t.at(-1);n&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a),n=l.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var a,l,c;let n=e,s=null;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)u.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,s.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o=!1,r="";for(;e;){o||(r=""),o=!1;let u;if((l=(a=this.options.extensions)==null?void 0:a.inline)!=null&&l.some(h=>(u=h.call({lexer:this},e,t))?(e=e.substring(u.raw.length),t.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);const h=t.at(-1);u.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=u.raw,h.text+=u.text):t.push(u);continue}if(u=this.tokenizer.emStrong(e,n,r)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.del(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),t.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),t.push(u);continue}let d=e;if((c=this.options.extensions)!=null&&c.startInline){let h=1/0;const f=e.slice(1);let g;this.options.extensions.startInline.forEach(y=>{g=y.call({lexer:this},f),typeof g=="number"&&g>=0&&(h=Math.min(h,g))}),h<1/0&&h>=0&&(d=e.substring(0,h+1))}if(u=this.tokenizer.inlineText(d)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(r=u.raw.slice(-1)),o=!0;const h=t.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=u.raw,h.text+=u.text):t.push(u);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}}class os{constructor(e){M(this,"options");M(this,"parser");this.options=e||Wt}space(e){return""}code({text:e,lang:t,escaped:n}){var r;const s=(r=(t||"").match(Ne.notSpaceStart))==null?void 0:r[0],o=e.replace(Ne.endingNewline,"")+`
`;return s?'<pre><code class="language-'+ot(s)+'">'+(n?o:ot(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:ot(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let a=0;a<e.items.length;a++){const l=e.items[a];s+=this.listitem(l)}const o=t?"ol":"ul",r=t&&n!==1?' start="'+n+'"':"";return"<"+o+r+`>
`+s+"</"+o+`>
`}listitem(e){var n;let t="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+ot(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let o=0;o<e.header.length;o++)n+=this.tablecell(e.header[o]);t+=this.tablerow({text:n});let s="";for(let o=0;o<e.rows.length;o++){const r=e.rows[o];n="";for(let a=0;a<r.length;a++)n+=this.tablecell(r[a]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${ot(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),o=ea(e);if(o===null)return s;e=o;let r='<a href="'+e+'"';return t&&(r+=' title="'+ot(t)+'"'),r+=">"+s+"</a>",r}image({href:e,title:t,text:n}){const s=ea(e);if(s===null)return ot(n);e=s;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${ot(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:ot(e.text)}}class sr{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class He{constructor(e){M(this,"options");M(this,"renderer");M(this,"textRenderer");this.options=e||Wt,this.options.renderer=this.options.renderer||new os,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new sr}static parse(e,t){return new He(t).parse(e)}static parseInline(e,t){return new He(t).parseInline(e)}parse(e,t=!0){var s,o;let n="";for(let r=0;r<e.length;r++){const a=e[r];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){n+=u||"";continue}}const l=a;switch(l.type){case"space":{n+=this.renderer.space(l);continue}case"hr":{n+=this.renderer.hr(l);continue}case"heading":{n+=this.renderer.heading(l);continue}case"code":{n+=this.renderer.code(l);continue}case"table":{n+=this.renderer.table(l);continue}case"blockquote":{n+=this.renderer.blockquote(l);continue}case"list":{n+=this.renderer.list(l);continue}case"html":{n+=this.renderer.html(l);continue}case"paragraph":{n+=this.renderer.paragraph(l);continue}case"text":{let c=l,u=this.renderer.text(c);for(;r+1<e.length&&e[r+1].type==="text";)c=e[++r],u+=`
`+this.renderer.text(c);t?n+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u,escaped:!0}]}):n+=u;continue}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,t=this.renderer){var s,o;let n="";for(let r=0;r<e.length;r++){const a=e[r];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){n+=c||"";continue}}const l=a;switch(l.type){case"escape":{n+=t.text(l);break}case"html":{n+=t.html(l);break}case"link":{n+=t.link(l);break}case"image":{n+=t.image(l);break}case"strong":{n+=t.strong(l);break}case"em":{n+=t.em(l);break}case"codespan":{n+=t.codespan(l);break}case"br":{n+=t.br(l);break}case"del":{n+=t.del(l);break}case"text":{n+=t.text(l);break}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}}class Jn{constructor(e){M(this,"options");M(this,"block");this.options=e||Wt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Ue.lex:Ue.lexInline}provideParser(){return this.block?He.parse:He.parseInline}}M(Jn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Hd{constructor(...e){M(this,"defaults",Xo());M(this,"options",this.setOptions);M(this,"parse",this.parseMarkdown(!0));M(this,"parseInline",this.parseMarkdown(!1));M(this,"Parser",He);M(this,"Renderer",os);M(this,"TextRenderer",sr);M(this,"Lexer",Ue);M(this,"Tokenizer",ss);M(this,"Hooks",Jn);this.use(...e)}walkTokens(e,t){var s,o;let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const a=r;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=r;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=r;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const r=t.renderers[o.name];r?t.renderers[o.name]=function(...a){let l=o.renderer.apply(this,a);return l===!1&&(l=r.apply(this,a)),l}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[o.level];r?r.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),s.extensions=t),n.renderer){const o=this.defaults.renderer||new os(this.defaults);for(const r in n.renderer){if(!(r in o))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;const a=r,l=n.renderer[a],c=o[a];o[a]=(...u)=>{let d=l.apply(o,u);return d===!1&&(d=c.apply(o,u)),d||""}}s.renderer=o}if(n.tokenizer){const o=this.defaults.tokenizer||new ss(this.defaults);for(const r in n.tokenizer){if(!(r in o))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const a=r,l=n.tokenizer[a],c=o[a];o[a]=(...u)=>{let d=l.apply(o,u);return d===!1&&(d=c.apply(o,u)),d}}s.tokenizer=o}if(n.hooks){const o=this.defaults.hooks||new Jn;for(const r in n.hooks){if(!(r in o))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;const a=r,l=n.hooks[a],c=o[a];Jn.passThroughHooks.has(r)?o[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(o,u)).then(h=>c.call(o,h));const d=l.call(o,u);return c.call(o,d)}:o[a]=(...u)=>{let d=l.apply(o,u);return d===!1&&(d=c.apply(o,u)),d}}s.hooks=o}if(n.walkTokens){const o=this.defaults.walkTokens,r=n.walkTokens;s.walkTokens=function(a){let l=[];return l.push(r.call(this,a)),o&&(l=l.concat(o.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ue.lex(e,t??this.defaults)}parser(e,t){return He.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const o={...s},r={...this.defaults,...o},a=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&o.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const l=r.hooks?r.hooks.provideLexer():e?Ue.lex:Ue.lexInline,c=r.hooks?r.hooks.provideParser():e?He.parse:He.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(u=>l(u,r)).then(u=>r.hooks?r.hooks.processAllTokens(u):u).then(u=>r.walkTokens?Promise.all(this.walkTokens(u,r.walkTokens)).then(()=>u):u).then(u=>c(u,r)).then(u=>r.hooks?r.hooks.postprocess(u):u).catch(a);try{r.hooks&&(n=r.hooks.preprocess(n));let u=l(n,r);r.hooks&&(u=r.hooks.processAllTokens(u)),r.walkTokens&&this.walkTokens(u,r.walkTokens);let d=c(u,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(u){return a(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+ot(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}}const Ut=new Hd;function Z(i,e){return Ut.parse(i,e)}Z.options=Z.setOptions=function(i){return Ut.setOptions(i),Z.defaults=Ut.defaults,nc(Z.defaults),Z};Z.getDefaults=Xo;Z.defaults=Wt;Z.use=function(...i){return Ut.use(...i),Z.defaults=Ut.defaults,nc(Z.defaults),Z};Z.walkTokens=function(i,e){return Ut.walkTokens(i,e)};Z.parseInline=Ut.parseInline;Z.Parser=He;Z.parser=He.parse;Z.Renderer=os;Z.TextRenderer=sr;Z.Lexer=Ue;Z.lexer=Ue.lex;Z.Tokenizer=ss;Z.Hooks=Jn;Z.parse=Z;Z.options;Z.setOptions;Z.use;Z.walkTokens;Z.parseInline;He.parse;Ue.lex;/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */const{entries:dc,setPrototypeOf:ia,isFrozen:Vd,getPrototypeOf:Wd,getOwnPropertyDescriptor:Kd}=Object;let{freeze:Oe,seal:qe,create:hc}=Object,{apply:Co,construct:Ao}=typeof Reflect<"u"&&Reflect;Oe||(Oe=function(e){return e});qe||(qe=function(e){return e});Co||(Co=function(e,t,n){return e.apply(t,n)});Ao||(Ao=function(e,t){return new e(...t)});const Ti=ze(Array.prototype.forEach),sa=ze(Array.prototype.pop),On=ze(Array.prototype.push),Gi=ze(String.prototype.toLowerCase),Ks=ze(String.prototype.toString),oa=ze(String.prototype.match),Ln=ze(String.prototype.replace),qd=ze(String.prototype.indexOf),Gd=ze(String.prototype.trim),Xe=ze(Object.prototype.hasOwnProperty),Ie=ze(RegExp.prototype.test),Dn=Yd(TypeError);function ze(i){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return Co(i,e,n)}}function Yd(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ao(i,t)}}function K(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gi;ia&&ia(i,null);let n=e.length;for(;n--;){let s=e[n];if(typeof s=="string"){const o=t(s);o!==s&&(Vd(e)||(e[n]=o),s=o)}i[s]=!0}return i}function Jd(i){for(let e=0;e<i.length;e++)Xe(i,e)||(i[e]=null);return i}function Nt(i){const e=hc(null);for(const[t,n]of dc(i))Xe(i,t)&&(Array.isArray(n)?e[t]=Jd(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=Nt(n):e[t]=n);return e}function Bn(i,e){for(;i!==null;){const n=Kd(i,e);if(n){if(n.get)return ze(n.get);if(typeof n.value=="function")return ze(n.value)}i=Wd(i)}function t(){return null}return t}const ra=Oe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),qs=Oe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Gs=Oe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Xd=Oe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ys=Oe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Zd=Oe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),aa=Oe(["#text"]),la=Oe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Js=Oe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ca=Oe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ci=Oe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Qd=qe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),eh=qe(/<%[\w\W]*|[\w\W]*%>/gm),th=qe(/\$\{[\w\W]*}/gm),nh=qe(/^data-[\-\w.\u00B7-\uFFFF]+$/),ih=qe(/^aria-[\-\w]+$/),fc=qe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),sh=qe(/^(?:\w+script|data):/i),oh=qe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),pc=qe(/^html$/i),rh=qe(/^[a-z][.\w]*(-[.\w]+)+$/i);var ua=Object.freeze({__proto__:null,ARIA_ATTR:ih,ATTR_WHITESPACE:oh,CUSTOM_ELEMENT:rh,DATA_ATTR:nh,DOCTYPE_NAME:pc,ERB_EXPR:eh,IS_ALLOWED_URI:fc,IS_SCRIPT_OR_DATA:sh,MUSTACHE_EXPR:Qd,TMPLIT_EXPR:th});const Pn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ah=function(){return typeof window>"u"?null:window},lh=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(n=t.getAttribute(s));const o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},da=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function mc(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ah();const e=V=>mc(V);if(e.version="3.2.3",e.removed=[],!i||!i.document||i.document.nodeType!==Pn.document)return e.isSupported=!1,e;let{document:t}=i;const n=t,s=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:r,Node:a,Element:l,NodeFilter:c,NamedNodeMap:u=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:d,DOMParser:h,trustedTypes:f}=i,g=l.prototype,y=Bn(g,"cloneNode"),v=Bn(g,"remove"),p=Bn(g,"nextSibling"),E=Bn(g,"childNodes"),w=Bn(g,"parentNode");if(typeof r=="function"){const V=t.createElement("template");V.content&&V.content.ownerDocument&&(t=V.content.ownerDocument)}let m,S="";const{implementation:L,createNodeIterator:D,createDocumentFragment:N,getElementsByTagName:_}=t,{importNode:$}=n;let j=da();e.isSupported=typeof dc=="function"&&typeof w=="function"&&L&&L.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:x,ERB_EXPR:C,TMPLIT_EXPR:A,DATA_ATTR:T,ARIA_ATTR:z,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:F,CUSTOM_ELEMENT:H}=ua;let{IS_ALLOWED_URI:ee}=ua,G=null;const we=K({},[...ra,...qs,...Gs,...Ys,...aa]);let se=null;const Re=K({},[...la,...Js,...ca,...Ci]);let X=Object.seal(hc(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,k=null,b=!0,P=!0,O=!1,J=!0,ie=!1,ce=!0,he=!1,ge=!1,tt=!1,re=!1,Le=!1,Yt=!1,Tn=!0,Jt=!1;const vi="user-content-";let zs=!0,Cn=!1,Xt={},Zt=null;const Pr=K({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Fr=null;const Rr=K({},["audio","video","img","source","image","track"]);let js=null;const $r=K({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),xi="http://www.w3.org/1998/Math/MathML",wi="http://www.w3.org/2000/svg",dt="http://www.w3.org/1999/xhtml";let Qt=dt,Us=!1,Hs=null;const ed=K({},[xi,wi,dt],Ks);let ki=K({},["mi","mo","mn","ms","mtext"]),_i=K({},["annotation-xml"]);const td=K({},["title","style","font","a","script"]);let An=null;const nd=["application/xhtml+xml","text/html"],id="text/html";let be=null,en=null;const sd=t.createElement("form"),zr=function(I){return I instanceof RegExp||I instanceof Function},Vs=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(en&&en===I)){if((!I||typeof I!="object")&&(I={}),I=Nt(I),An=nd.indexOf(I.PARSER_MEDIA_TYPE)===-1?id:I.PARSER_MEDIA_TYPE,be=An==="application/xhtml+xml"?Ks:Gi,G=Xe(I,"ALLOWED_TAGS")?K({},I.ALLOWED_TAGS,be):we,se=Xe(I,"ALLOWED_ATTR")?K({},I.ALLOWED_ATTR,be):Re,Hs=Xe(I,"ALLOWED_NAMESPACES")?K({},I.ALLOWED_NAMESPACES,Ks):ed,js=Xe(I,"ADD_URI_SAFE_ATTR")?K(Nt($r),I.ADD_URI_SAFE_ATTR,be):$r,Fr=Xe(I,"ADD_DATA_URI_TAGS")?K(Nt(Rr),I.ADD_DATA_URI_TAGS,be):Rr,Zt=Xe(I,"FORBID_CONTENTS")?K({},I.FORBID_CONTENTS,be):Pr,Ce=Xe(I,"FORBID_TAGS")?K({},I.FORBID_TAGS,be):{},k=Xe(I,"FORBID_ATTR")?K({},I.FORBID_ATTR,be):{},Xt=Xe(I,"USE_PROFILES")?I.USE_PROFILES:!1,b=I.ALLOW_ARIA_ATTR!==!1,P=I.ALLOW_DATA_ATTR!==!1,O=I.ALLOW_UNKNOWN_PROTOCOLS||!1,J=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ie=I.SAFE_FOR_TEMPLATES||!1,ce=I.SAFE_FOR_XML!==!1,he=I.WHOLE_DOCUMENT||!1,re=I.RETURN_DOM||!1,Le=I.RETURN_DOM_FRAGMENT||!1,Yt=I.RETURN_TRUSTED_TYPE||!1,tt=I.FORCE_BODY||!1,Tn=I.SANITIZE_DOM!==!1,Jt=I.SANITIZE_NAMED_PROPS||!1,zs=I.KEEP_CONTENT!==!1,Cn=I.IN_PLACE||!1,ee=I.ALLOWED_URI_REGEXP||fc,Qt=I.NAMESPACE||dt,ki=I.MATHML_TEXT_INTEGRATION_POINTS||ki,_i=I.HTML_INTEGRATION_POINTS||_i,X=I.CUSTOM_ELEMENT_HANDLING||{},I.CUSTOM_ELEMENT_HANDLING&&zr(I.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(X.tagNameCheck=I.CUSTOM_ELEMENT_HANDLING.tagNameCheck),I.CUSTOM_ELEMENT_HANDLING&&zr(I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(X.attributeNameCheck=I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),I.CUSTOM_ELEMENT_HANDLING&&typeof I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(X.allowCustomizedBuiltInElements=I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ie&&(P=!1),Le&&(re=!0),Xt&&(G=K({},aa),se=[],Xt.html===!0&&(K(G,ra),K(se,la)),Xt.svg===!0&&(K(G,qs),K(se,Js),K(se,Ci)),Xt.svgFilters===!0&&(K(G,Gs),K(se,Js),K(se,Ci)),Xt.mathMl===!0&&(K(G,Ys),K(se,ca),K(se,Ci))),I.ADD_TAGS&&(G===we&&(G=Nt(G)),K(G,I.ADD_TAGS,be)),I.ADD_ATTR&&(se===Re&&(se=Nt(se)),K(se,I.ADD_ATTR,be)),I.ADD_URI_SAFE_ATTR&&K(js,I.ADD_URI_SAFE_ATTR,be),I.FORBID_CONTENTS&&(Zt===Pr&&(Zt=Nt(Zt)),K(Zt,I.FORBID_CONTENTS,be)),zs&&(G["#text"]=!0),he&&K(G,["html","head","body"]),G.table&&(K(G,["tbody"]),delete Ce.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw Dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=I.TRUSTED_TYPES_POLICY,S=m.createHTML("")}else m===void 0&&(m=lh(f,s)),m!==null&&typeof S=="string"&&(S=m.createHTML(""));Oe&&Oe(I),en=I}},jr=K({},[...qs,...Gs,...Xd]),Ur=K({},[...Ys,...Zd]),od=function(I){let R=w(I);(!R||!R.tagName)&&(R={namespaceURI:Qt,tagName:"template"});const U=Gi(I.tagName),ae=Gi(R.tagName);return Hs[I.namespaceURI]?I.namespaceURI===wi?R.namespaceURI===dt?U==="svg":R.namespaceURI===xi?U==="svg"&&(ae==="annotation-xml"||ki[ae]):!!jr[U]:I.namespaceURI===xi?R.namespaceURI===dt?U==="math":R.namespaceURI===wi?U==="math"&&_i[ae]:!!Ur[U]:I.namespaceURI===dt?R.namespaceURI===wi&&!_i[ae]||R.namespaceURI===xi&&!ki[ae]?!1:!Ur[U]&&(td[U]||!jr[U]):!!(An==="application/xhtml+xml"&&Hs[I.namespaceURI]):!1},nt=function(I){On(e.removed,{element:I});try{w(I).removeChild(I)}catch{v(I)}},Ei=function(I,R){try{On(e.removed,{attribute:R.getAttributeNode(I),from:R})}catch{On(e.removed,{attribute:null,from:R})}if(R.removeAttribute(I),I==="is")if(re||Le)try{nt(R)}catch{}else try{R.setAttribute(I,"")}catch{}},Hr=function(I){let R=null,U=null;if(tt)I="<remove></remove>"+I;else{const ve=oa(I,/^[\r\n\t ]+/);U=ve&&ve[0]}An==="application/xhtml+xml"&&Qt===dt&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");const ae=m?m.createHTML(I):I;if(Qt===dt)try{R=new h().parseFromString(ae,An)}catch{}if(!R||!R.documentElement){R=L.createDocument(Qt,"template",null);try{R.documentElement.innerHTML=Us?S:ae}catch{}}const ke=R.body||R.documentElement;return I&&U&&ke.insertBefore(t.createTextNode(U),ke.childNodes[0]||null),Qt===dt?_.call(R,he?"html":"body")[0]:he?R.documentElement:ke},Vr=function(I){return D.call(I.ownerDocument||I,I,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Ws=function(I){return I instanceof d&&(typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||!(I.attributes instanceof u)||typeof I.removeAttribute!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function")},Wr=function(I){return typeof a=="function"&&I instanceof a};function ht(V,I,R){Ti(V,U=>{U.call(e,I,R,en)})}const Kr=function(I){let R=null;if(ht(j.beforeSanitizeElements,I,null),Ws(I))return nt(I),!0;const U=be(I.nodeName);if(ht(j.uponSanitizeElement,I,{tagName:U,allowedTags:G}),I.hasChildNodes()&&!Wr(I.firstElementChild)&&Ie(/<[/\w]/g,I.innerHTML)&&Ie(/<[/\w]/g,I.textContent)||I.nodeType===Pn.progressingInstruction||ce&&I.nodeType===Pn.comment&&Ie(/<[/\w]/g,I.data))return nt(I),!0;if(!G[U]||Ce[U]){if(!Ce[U]&&Gr(U)&&(X.tagNameCheck instanceof RegExp&&Ie(X.tagNameCheck,U)||X.tagNameCheck instanceof Function&&X.tagNameCheck(U)))return!1;if(zs&&!Zt[U]){const ae=w(I)||I.parentNode,ke=E(I)||I.childNodes;if(ke&&ae){const ve=ke.length;for(let De=ve-1;De>=0;--De){const it=y(ke[De],!0);it.__removalCount=(I.__removalCount||0)+1,ae.insertBefore(it,p(I))}}}return nt(I),!0}return I instanceof l&&!od(I)||(U==="noscript"||U==="noembed"||U==="noframes")&&Ie(/<\/no(script|embed|frames)/i,I.innerHTML)?(nt(I),!0):(ie&&I.nodeType===Pn.text&&(R=I.textContent,Ti([x,C,A],ae=>{R=Ln(R,ae," ")}),I.textContent!==R&&(On(e.removed,{element:I.cloneNode()}),I.textContent=R)),ht(j.afterSanitizeElements,I,null),!1)},qr=function(I,R,U){if(Tn&&(R==="id"||R==="name")&&(U in t||U in sd))return!1;if(!(P&&!k[R]&&Ie(T,R))){if(!(b&&Ie(z,R))){if(!se[R]||k[R]){if(!(Gr(I)&&(X.tagNameCheck instanceof RegExp&&Ie(X.tagNameCheck,I)||X.tagNameCheck instanceof Function&&X.tagNameCheck(I))&&(X.attributeNameCheck instanceof RegExp&&Ie(X.attributeNameCheck,R)||X.attributeNameCheck instanceof Function&&X.attributeNameCheck(R))||R==="is"&&X.allowCustomizedBuiltInElements&&(X.tagNameCheck instanceof RegExp&&Ie(X.tagNameCheck,U)||X.tagNameCheck instanceof Function&&X.tagNameCheck(U))))return!1}else if(!js[R]){if(!Ie(ee,Ln(U,F,""))){if(!((R==="src"||R==="xlink:href"||R==="href")&&I!=="script"&&qd(U,"data:")===0&&Fr[I])){if(!(O&&!Ie(B,Ln(U,F,"")))){if(U)return!1}}}}}}return!0},Gr=function(I){return I!=="annotation-xml"&&oa(I,H)},Yr=function(I){ht(j.beforeSanitizeAttributes,I,null);const{attributes:R}=I;if(!R||Ws(I))return;const U={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:se,forceKeepAttr:void 0};let ae=R.length;for(;ae--;){const ke=R[ae],{name:ve,namespaceURI:De,value:it}=ke,In=be(ve);let Ae=ve==="value"?it:Gd(it);if(U.attrName=In,U.attrValue=Ae,U.keepAttr=!0,U.forceKeepAttr=void 0,ht(j.uponSanitizeAttribute,I,U),Ae=U.attrValue,Jt&&(In==="id"||In==="name")&&(Ei(ve,I),Ae=vi+Ae),ce&&Ie(/((--!?|])>)|<\/(style|title)/i,Ae)){Ei(ve,I);continue}if(U.forceKeepAttr||(Ei(ve,I),!U.keepAttr))continue;if(!J&&Ie(/\/>/i,Ae)){Ei(ve,I);continue}ie&&Ti([x,C,A],Xr=>{Ae=Ln(Ae,Xr," ")});const Jr=be(I.nodeName);if(qr(Jr,In,Ae)){if(m&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!De)switch(f.getAttributeType(Jr,In)){case"TrustedHTML":{Ae=m.createHTML(Ae);break}case"TrustedScriptURL":{Ae=m.createScriptURL(Ae);break}}try{De?I.setAttributeNS(De,ve,Ae):I.setAttribute(ve,Ae),Ws(I)?nt(I):sa(e.removed)}catch{}}}ht(j.afterSanitizeAttributes,I,null)},rd=function V(I){let R=null;const U=Vr(I);for(ht(j.beforeSanitizeShadowDOM,I,null);R=U.nextNode();)ht(j.uponSanitizeShadowNode,R,null),Kr(R),Yr(R),R.content instanceof o&&V(R.content);ht(j.afterSanitizeShadowDOM,I,null)};return e.sanitize=function(V){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},R=null,U=null,ae=null,ke=null;if(Us=!V,Us&&(V="<!-->"),typeof V!="string"&&!Wr(V))if(typeof V.toString=="function"){if(V=V.toString(),typeof V!="string")throw Dn("dirty is not a string, aborting")}else throw Dn("toString is not a function");if(!e.isSupported)return V;if(ge||Vs(I),e.removed=[],typeof V=="string"&&(Cn=!1),Cn){if(V.nodeName){const it=be(V.nodeName);if(!G[it]||Ce[it])throw Dn("root node is forbidden and cannot be sanitized in-place")}}else if(V instanceof a)R=Hr("<!---->"),U=R.ownerDocument.importNode(V,!0),U.nodeType===Pn.element&&U.nodeName==="BODY"||U.nodeName==="HTML"?R=U:R.appendChild(U);else{if(!re&&!ie&&!he&&V.indexOf("<")===-1)return m&&Yt?m.createHTML(V):V;if(R=Hr(V),!R)return re?null:Yt?S:""}R&&tt&&nt(R.firstChild);const ve=Vr(Cn?V:R);for(;ae=ve.nextNode();)Kr(ae),Yr(ae),ae.content instanceof o&&rd(ae.content);if(Cn)return V;if(re){if(Le)for(ke=N.call(R.ownerDocument);R.firstChild;)ke.appendChild(R.firstChild);else ke=R;return(se.shadowroot||se.shadowrootmode)&&(ke=$.call(n,ke,!0)),ke}let De=he?R.outerHTML:R.innerHTML;return he&&G["!doctype"]&&R.ownerDocument&&R.ownerDocument.doctype&&R.ownerDocument.doctype.name&&Ie(pc,R.ownerDocument.doctype.name)&&(De="<!DOCTYPE "+R.ownerDocument.doctype.name+`>
`+De),ie&&Ti([x,C,A],it=>{De=Ln(De,it," ")}),m&&Yt?m.createHTML(De):De},e.setConfig=function(){let V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Vs(V),ge=!0},e.clearConfig=function(){en=null,ge=!1},e.isValidAttribute=function(V,I,R){en||Vs({});const U=be(V),ae=be(I);return qr(U,ae,R)},e.addHook=function(V,I){typeof I=="function"&&On(j[V],I)},e.removeHook=function(V){return sa(j[V])},e.removeHooks=function(V){j[V]=[]},e.removeAllHooks=function(){j=da()},e}var ch=mc();Z.setOptions({breaks:!0,gfm:!0,headerIds:!1});class uh{constructor(){M(this,"id","markdown-editor");M(this,"name","Markdown Editor");M(this,"description","Live Markdown editor with preview");M(this,"seoMetadata",{title:"Free Online Markdown Editor with Live Preview",description:"Write and preview Markdown in real-time with this free online editor. Supports GitHub Flavored Markdown, instant preview, and easy export options.",keywords:["markdown editor","markdown preview","markdown to html","online markdown","live markdown editor","github markdown"]});M(this,"defaultText",`# Welcome to the Markdown Editor

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

The preview updates in real-time`);M(this,"lastContent","");M(this,"lineNumbers",null);M(this,"editor",null)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEditor(),this.setupButtons(),this.addStyles())}setupEditor(){this.editor=document.getElementById("markdownInput"),this.lineNumbers=document.getElementById("lineNumbers");const e=document.getElementById("preview");!this.editor||!this.lineNumbers||!e||(this.editor.value=this.lastContent||this.defaultText,this.updateLineNumbers(),this.updatePreview(),this.editor.addEventListener("input",()=>{this.lastContent=this.editor.value,this.updateLineNumbers(),this.updatePreview()}),this.editor.addEventListener("scroll",()=>{this.lineNumbers&&(this.lineNumbers.scrollTop=this.editor.scrollTop)}),this.editor.addEventListener("keydown",t=>{if(t.key==="Tab"){t.preventDefault();const n=this.editor.selectionStart,s=this.editor.selectionEnd;if(n===s){const o=this.editor.value;this.editor.value=o.substring(0,n)+"    "+o.substring(s),this.editor.selectionStart=this.editor.selectionEnd=n+4}else{const o=this.editor.value.slice(n,s).split(`
`);if(t.shiftKey){const a=o.map(l=>l.startsWith("    ")?l.slice(4):l.startsWith("	")?l.slice(1):l).join(`
`);this.editor.value=this.editor.value.slice(0,n)+a+this.editor.value.slice(s),this.editor.selectionStart=n,this.editor.selectionEnd=n+a.length}else{const a=o.map(l=>"    "+l).join(`
`);this.editor.value=this.editor.value.slice(0,n)+a+this.editor.value.slice(s),this.editor.selectionStart=n,this.editor.selectionEnd=n+a.length}}this.lastContent=this.editor.value,this.updateLineNumbers(),this.updatePreview()}}),this.editor.addEventListener("keyup",()=>this.updateLineNumbers()),this.editor.addEventListener("paste",()=>setTimeout(()=>this.updateLineNumbers(),0)),this.editor.addEventListener("cut",()=>setTimeout(()=>this.updateLineNumbers(),0)))}updateLineNumbers(){if(!this.editor||!this.lineNumbers)return;const e=this.editor.value.split(`
`).length,t=Array(e).fill(0).map((n,s)=>`<div class="line-number">${s+1}</div>`).join("");this.lineNumbers.innerHTML=t}updatePreview(){if(!this.editor)return;const e=document.getElementById("preview");if(!e)return;const t=this.editor.value,n=ch.sanitize(Z(t));e.innerHTML=n}setupButtons(){const e=document.getElementById("copyHtml"),t=document.getElementById("copyMd"),n=document.getElementById("downloadMd"),s=document.getElementById("resetContent");!e||!t||!n||!s||!this.editor||(e.addEventListener("click",()=>{const o=document.getElementById("preview");o&&navigator.clipboard.writeText(o.innerHTML).then(()=>this.showToast("HTML copied to clipboard!")).catch(()=>this.showToast("Failed to copy HTML"))}),t.addEventListener("click",()=>{navigator.clipboard.writeText(this.editor.value).then(()=>this.showToast("Markdown copied to clipboard!")).catch(()=>this.showToast("Failed to copy Markdown"))}),n.addEventListener("click",()=>{const o=this.editor.value,r=new Blob([o],{type:"text/markdown"}),a=URL.createObjectURL(r),l=document.createElement("a");l.href=a,l.download="document.md",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a),this.showToast("Markdown file downloaded!")}),s.addEventListener("click",()=>{this.editor.value=this.defaultText,this.lastContent=this.defaultText,this.updateLineNumbers(),this.updatePreview(),this.showToast("Content reset to default")}))}showToast(e){const t=document.querySelector(".markdown-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class dh{constructor(){M(this,"id","json-formatter");M(this,"name","JSON Formatter");M(this,"description","A powerful JSON formatter and validator with support for beautification, minification, and error detection.");M(this,"seoMetadata",{title:"Free Online JSON Formatter and Validator Tool",description:"Format, validate, and beautify your JSON data with this free online JSON formatting tool. Easy to use, instant results, and no installation required.",keywords:["json formatter","json validator","json beautifier","json parser","format json online","validate json"]});M(this,"defaultText",`{
  "example": {
    "number": 42,
    "string": "Hello World",
    "array": [1, 2, 3],
    "nested": {
      "boolean": true,
      "null": null
    }
  }
}`);M(this,"lastContent","")}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEditor(),this.setupButtons(),this.addStyles())}setupEditor(){const e=document.getElementById("jsonInput"),t=document.getElementById("lineNumbers");!e||!t||(e.value=this.lastContent||this.defaultText,this.updateLineNumbers(),this.validateJson(),e.addEventListener("input",()=>{this.lastContent=e.value,this.updateLineNumbers(),this.validateJson()}),e.addEventListener("scroll",()=>{t&&(t.scrollTop=e.scrollTop)}),e.addEventListener("keydown",n=>{if(n.key==="Tab"){n.preventDefault();const s=e.selectionStart,o=e.selectionEnd,r=e.value,a="  ";e.value=r.substring(0,s)+a+r.substring(o),e.selectionStart=e.selectionEnd=s+2,this.lastContent=e.value,this.updateLineNumbers(),this.validateJson()}}))}updateLineNumbers(){const e=document.getElementById("jsonInput"),t=document.getElementById("lineNumbers");if(!e||!t)return;const n=e.value.split(`
`).length,s=Array(n).fill(0).map((o,r)=>`<div class="line-number">${r+1}</div>`).join("");t.innerHTML=s}validateJson(){const e=document.getElementById("jsonInput"),t=document.getElementById("errorDisplay");if(!(!e||!t))try{e.value.trim()?(JSON.parse(e.value),t.textContent="Valid JSON ✓",t.className="error-display valid"):(t.textContent="",t.className="error-display")}catch(n){t.textContent=`Invalid JSON: ${n.message}`,t.className="error-display invalid"}}setupButtons(){const e=document.getElementById("formatJson"),t=document.getElementById("minifyJson"),n=document.getElementById("copyJson"),s=document.getElementById("resetJson"),o=document.getElementById("spaceCount"),r=document.getElementById("jsonInput");!e||!t||!n||!s||!o||!r||(e.addEventListener("click",()=>{try{const a=JSON.parse(r.value);r.value=JSON.stringify(a,null,parseInt(o.value)),this.lastContent=r.value,this.updateLineNumbers(),this.validateJson(),this.showToast("JSON formatted successfully!")}catch{this.showToast("Invalid JSON - cannot format")}}),t.addEventListener("click",()=>{try{const a=JSON.parse(r.value);r.value=JSON.stringify(a),this.lastContent=r.value,this.updateLineNumbers(),this.validateJson(),this.showToast("JSON minified successfully!")}catch{this.showToast("Invalid JSON - cannot minify")}}),n.addEventListener("click",()=>{navigator.clipboard.writeText(r.value).then(()=>this.showToast("JSON copied to clipboard!")).catch(()=>this.showToast("Failed to copy JSON"))}),s.addEventListener("click",()=>{r.value=this.defaultText,this.lastContent=this.defaultText,this.updateLineNumbers(),this.validateJson(),this.showToast("Content reset to default")}))}showToast(e){const t=document.querySelector(".json-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
 */function pi(i){return i+.5|0}const wt=(i,e,t)=>Math.max(Math.min(i,t),e);function Vn(i){return wt(pi(i*2.55),0,255)}function _t(i){return wt(pi(i*255),0,255)}function gt(i){return wt(pi(i/2.55)/100,0,1)}function ha(i){return wt(pi(i*100),0,100)}const je={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Io=[..."0123456789ABCDEF"],hh=i=>Io[i&15],fh=i=>Io[(i&240)>>4]+Io[i&15],Ai=i=>(i&240)>>4===(i&15),ph=i=>Ai(i.r)&&Ai(i.g)&&Ai(i.b)&&Ai(i.a);function mh(i){var e=i.length,t;return i[0]==="#"&&(e===4||e===5?t={r:255&je[i[1]]*17,g:255&je[i[2]]*17,b:255&je[i[3]]*17,a:e===5?je[i[4]]*17:255}:(e===7||e===9)&&(t={r:je[i[1]]<<4|je[i[2]],g:je[i[3]]<<4|je[i[4]],b:je[i[5]]<<4|je[i[6]],a:e===9?je[i[7]]<<4|je[i[8]]:255})),t}const gh=(i,e)=>i<255?e(i):"";function bh(i){var e=ph(i)?hh:fh;return i?"#"+e(i.r)+e(i.g)+e(i.b)+gh(i.a,e):void 0}const yh=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function gc(i,e,t){const n=e*Math.min(t,1-t),s=(o,r=(o+i/30)%12)=>t-n*Math.max(Math.min(r-3,9-r,1),-1);return[s(0),s(8),s(4)]}function vh(i,e,t){const n=(s,o=(s+i/60)%6)=>t-t*e*Math.max(Math.min(o,4-o,1),0);return[n(5),n(3),n(1)]}function xh(i,e,t){const n=gc(i,1,.5);let s;for(e+t>1&&(s=1/(e+t),e*=s,t*=s),s=0;s<3;s++)n[s]*=1-e-t,n[s]+=e;return n}function wh(i,e,t,n,s){return i===s?(e-t)/n+(e<t?6:0):e===s?(t-i)/n+2:(i-e)/n+4}function or(i){const t=i.r/255,n=i.g/255,s=i.b/255,o=Math.max(t,n,s),r=Math.min(t,n,s),a=(o+r)/2;let l,c,u;return o!==r&&(u=o-r,c=a>.5?u/(2-o-r):u/(o+r),l=wh(t,n,s,u,o),l=l*60+.5),[l|0,c||0,a]}function rr(i,e,t,n){return(Array.isArray(e)?i(e[0],e[1],e[2]):i(e,t,n)).map(_t)}function ar(i,e,t){return rr(gc,i,e,t)}function kh(i,e,t){return rr(xh,i,e,t)}function _h(i,e,t){return rr(vh,i,e,t)}function bc(i){return(i%360+360)%360}function Eh(i){const e=yh.exec(i);let t=255,n;if(!e)return;e[5]!==n&&(t=e[6]?Vn(+e[5]):_t(+e[5]));const s=bc(+e[2]),o=+e[3]/100,r=+e[4]/100;return e[1]==="hwb"?n=kh(s,o,r):e[1]==="hsv"?n=_h(s,o,r):n=ar(s,o,r),{r:n[0],g:n[1],b:n[2],a:t}}function Sh(i,e){var t=or(i);t[0]=bc(t[0]+e),t=ar(t),i.r=t[0],i.g=t[1],i.b=t[2]}function Th(i){if(!i)return;const e=or(i),t=e[0],n=ha(e[1]),s=ha(e[2]);return i.a<255?`hsla(${t}, ${n}%, ${s}%, ${gt(i.a)})`:`hsl(${t}, ${n}%, ${s}%)`}const fa={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},pa={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Ch(){const i={},e=Object.keys(pa),t=Object.keys(fa);let n,s,o,r,a;for(n=0;n<e.length;n++){for(r=a=e[n],s=0;s<t.length;s++)o=t[s],a=a.replace(o,fa[o]);o=parseInt(pa[r],16),i[a]=[o>>16&255,o>>8&255,o&255]}return i}let Ii;function Ah(i){Ii||(Ii=Ch(),Ii.transparent=[0,0,0,0]);const e=Ii[i.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Ih=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Mh(i){const e=Ih.exec(i);let t=255,n,s,o;if(e){if(e[7]!==n){const r=+e[7];t=e[8]?Vn(r):wt(r*255,0,255)}return n=+e[1],s=+e[3],o=+e[5],n=255&(e[2]?Vn(n):wt(n,0,255)),s=255&(e[4]?Vn(s):wt(s,0,255)),o=255&(e[6]?Vn(o):wt(o,0,255)),{r:n,g:s,b:o,a:t}}}function Nh(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${gt(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Xs=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,tn=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Oh(i,e,t){const n=tn(gt(i.r)),s=tn(gt(i.g)),o=tn(gt(i.b));return{r:_t(Xs(n+t*(tn(gt(e.r))-n))),g:_t(Xs(s+t*(tn(gt(e.g))-s))),b:_t(Xs(o+t*(tn(gt(e.b))-o))),a:i.a+t*(e.a-i.a)}}function Mi(i,e,t){if(i){let n=or(i);n[e]=Math.max(0,Math.min(n[e]+n[e]*t,e===0?360:1)),n=ar(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function yc(i,e){return i&&Object.assign(e||{},i)}function ma(i){var e={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(e={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(e.a=_t(i[3]))):(e=yc(i,{r:0,g:0,b:0,a:1}),e.a=_t(e.a)),e}function Lh(i){return i.charAt(0)==="r"?Mh(i):Eh(i)}class si{constructor(e){if(e instanceof si)return e;const t=typeof e;let n;t==="object"?n=ma(e):t==="string"&&(n=mh(e)||Ah(e)||Lh(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=yc(this._rgb);return e&&(e.a=gt(e.a)),e}set rgb(e){this._rgb=ma(e)}rgbString(){return this._valid?Nh(this._rgb):void 0}hexString(){return this._valid?bh(this._rgb):void 0}hslString(){return this._valid?Th(this._rgb):void 0}mix(e,t){if(e){const n=this.rgb,s=e.rgb;let o;const r=t===o?.5:t,a=2*r-1,l=n.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,n.r=255&c*n.r+o*s.r+.5,n.g=255&c*n.g+o*s.g+.5,n.b=255&c*n.b+o*s.b+.5,n.a=r*n.a+(1-r)*s.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=Oh(this._rgb,e._rgb,t)),this}clone(){return new si(this.rgb)}alpha(e){return this._rgb.a=_t(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=pi(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Mi(this._rgb,2,e),this}darken(e){return Mi(this._rgb,2,-e),this}saturate(e){return Mi(this._rgb,1,e),this}desaturate(e){return Mi(this._rgb,1,-e),this}rotate(e){return Sh(this._rgb,e),this}}/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function ft(){}const Dh=(()=>{let i=0;return()=>i++})();function fe(i){return i==null}function me(i){if(Array.isArray&&Array.isArray(i))return!0;const e=Object.prototype.toString.call(i);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Y(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function Te(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function st(i,e){return Te(i)?i:e}function q(i,e){return typeof i>"u"?e:i}const Bh=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*e:+i;function oe(i,e,t){if(i&&typeof i.call=="function")return i.apply(t,e)}function Q(i,e,t,n){let s,o,r;if(me(i))for(o=i.length,s=0;s<o;s++)e.call(t,i[s],s);else if(Y(i))for(r=Object.keys(i),o=r.length,s=0;s<o;s++)e.call(t,i[r[s]],r[s])}function rs(i,e){let t,n,s,o;if(!i||!e||i.length!==e.length)return!1;for(t=0,n=i.length;t<n;++t)if(s=i[t],o=e[t],s.datasetIndex!==o.datasetIndex||s.index!==o.index)return!1;return!0}function as(i){if(me(i))return i.map(as);if(Y(i)){const e=Object.create(null),t=Object.keys(i),n=t.length;let s=0;for(;s<n;++s)e[t[s]]=as(i[t[s]]);return e}return i}function vc(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Ph(i,e,t,n){if(!vc(i))return;const s=e[i],o=t[i];Y(s)&&Y(o)?oi(s,o,n):e[i]=as(o)}function oi(i,e,t){const n=me(e)?e:[e],s=n.length;if(!Y(i))return i;t=t||{};const o=t.merger||Ph;let r;for(let a=0;a<s;++a){if(r=n[a],!Y(r))continue;const l=Object.keys(r);for(let c=0,u=l.length;c<u;++c)o(l[c],i,r,t)}return i}function Xn(i,e){return oi(i,e,{merger:Fh})}function Fh(i,e,t){if(!vc(i))return;const n=e[i],s=t[i];Y(n)&&Y(s)?Xn(n,s):Object.prototype.hasOwnProperty.call(e,i)||(e[i]=as(s))}const ga={"":i=>i,x:i=>i.x,y:i=>i.y};function Rh(i){const e=i.split("."),t=[];let n="";for(const s of e)n+=s,n.endsWith("\\")?n=n.slice(0,-1)+".":(t.push(n),n="");return t}function $h(i){const e=Rh(i);return t=>{for(const n of e){if(n==="")break;t=t&&t[n]}return t}}function ls(i,e){return(ga[e]||(ga[e]=$h(e)))(i)}function lr(i){return i.charAt(0).toUpperCase()+i.slice(1)}const cs=i=>typeof i<"u",St=i=>typeof i=="function",ba=(i,e)=>{if(i.size!==e.size)return!1;for(const t of i)if(!e.has(t))return!1;return!0};function zh(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const ye=Math.PI,Qe=2*ye,jh=Qe+ye,us=Number.POSITIVE_INFINITY,Uh=ye/180,Ze=ye/2,At=ye/4,ya=ye*2/3,Mo=Math.log10,pn=Math.sign;function Zn(i,e,t){return Math.abs(i-e)<t}function va(i){const e=Math.round(i);i=Zn(i,e,i/1e3)?e:i;const t=Math.pow(10,Math.floor(Mo(i))),n=i/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function Hh(i){const e=[],t=Math.sqrt(i);let n;for(n=1;n<t;n++)i%n===0&&(e.push(n),e.push(i/n));return t===(t|0)&&e.push(t),e.sort((s,o)=>s-o).pop(),e}function ri(i){return!isNaN(parseFloat(i))&&isFinite(i)}function Vh(i,e){const t=Math.round(i);return t-e<=i&&t+e>=i}function Wh(i,e,t){let n,s,o;for(n=0,s=i.length;n<s;n++)o=i[n][t],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function Bt(i){return i*(ye/180)}function Kh(i){return i*(180/ye)}function xa(i){if(!Te(i))return;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}function qh(i,e){const t=e.x-i.x,n=e.y-i.y,s=Math.sqrt(t*t+n*n);let o=Math.atan2(n,t);return o<-.5*ye&&(o+=Qe),{angle:o,distance:s}}function No(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function Gh(i,e){return(i-e+jh)%Qe-ye}function lt(i){return(i%Qe+Qe)%Qe}function xc(i,e,t,n){const s=lt(i),o=lt(e),r=lt(t),a=lt(o-s),l=lt(r-s),c=lt(s-o),u=lt(s-r);return s===o||s===r||n&&o===r||a>l&&c<u}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Yh(i){return Ve(i,-32768,32767)}function on(i,e,t,n=1e-6){return i>=Math.min(e,t)-n&&i<=Math.max(e,t)+n}function cr(i,e,t){t=t||(r=>i[r]<e);let n=i.length-1,s=0,o;for(;n-s>1;)o=s+n>>1,t(o)?s=o:n=o;return{lo:s,hi:n}}const Pt=(i,e,t,n)=>cr(i,t,n?s=>{const o=i[s][e];return o<t||o===t&&i[s+1][e]===t}:s=>i[s][e]<t),Jh=(i,e,t)=>cr(i,t,n=>i[n][e]>=t);function Xh(i,e,t){let n=0,s=i.length;for(;n<s&&i[n]<e;)n++;for(;s>n&&i[s-1]>t;)s--;return n>0||s<i.length?i.slice(n,s):i}const wc=["push","pop","shift","splice","unshift"];function Zh(i,e){if(i._chartjs){i._chartjs.listeners.push(e);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),wc.forEach(t=>{const n="_onData"+lr(t),s=i[t];Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value(...o){const r=s.apply(this,o);return i._chartjs.listeners.forEach(a=>{typeof a[n]=="function"&&a[n](...o)}),r}})})}function wa(i,e){const t=i._chartjs;if(!t)return;const n=t.listeners,s=n.indexOf(e);s!==-1&&n.splice(s,1),!(n.length>0)&&(wc.forEach(o=>{delete i[o]}),delete i._chartjs)}function Qh(i){const e=new Set(i);return e.size===i.length?i:Array.from(e)}const kc=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function _c(i,e){let t=[],n=!1;return function(...s){t=s,n||(n=!0,kc.call(window,()=>{n=!1,i.apply(e,t)}))}}function ef(i,e){let t;return function(...n){return e?(clearTimeout(t),t=setTimeout(i,e,n)):i.apply(this,n),e}}const ur=i=>i==="start"?"left":i==="end"?"right":"center",_e=(i,e,t)=>i==="start"?e:i==="end"?t:(e+t)/2,tf=(i,e,t,n)=>i===(n?"left":"right")?t:i==="center"?(e+t)/2:e;function nf(i,e,t){const n=e.length;let s=0,o=n;if(i._sorted){const{iScale:r,_parsed:a}=i,l=r.axis,{min:c,max:u,minDefined:d,maxDefined:h}=r.getUserBounds();d&&(s=Ve(Math.min(Pt(a,l,c).lo,t?n:Pt(e,l,r.getPixelForValue(c)).lo),0,n-1)),h?o=Ve(Math.max(Pt(a,r.axis,u,!0).hi+1,t?0:Pt(e,l,r.getPixelForValue(u),!0).hi+1),s,n)-s:o=n-s}return{start:s,count:o}}function sf(i){const{xScale:e,yScale:t,_scaleRanges:n}=i,s={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!n)return i._scaleRanges=s,!0;const o=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==t.min||n.ymax!==t.max;return Object.assign(n,s),o}const Ni=i=>i===0||i===1,ka=(i,e,t)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-e)*Qe/t)),_a=(i,e,t)=>Math.pow(2,-10*i)*Math.sin((i-e)*Qe/t)+1,Qn={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*Ze)+1,easeOutSine:i=>Math.sin(i*Ze),easeInOutSine:i=>-.5*(Math.cos(ye*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>Ni(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>Ni(i)?i:ka(i,.075,.3),easeOutElastic:i=>Ni(i)?i:_a(i,.075,.3),easeInOutElastic(i){return Ni(i)?i:i<.5?.5*ka(i*2,.1125,.45):.5+.5*_a(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let e=1.70158;return(i/=.5)<1?.5*(i*i*(((e*=1.525)+1)*i-e)):.5*((i-=2)*i*(((e*=1.525)+1)*i+e)+2)},easeInBounce:i=>1-Qn.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Qn.easeInBounce(i*2)*.5:Qn.easeOutBounce(i*2-1)*.5+.5};function dr(i){if(i&&typeof i=="object"){const e=i.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Ea(i){return dr(i)?i:new si(i)}function Zs(i){return dr(i)?i:new si(i).saturate(.5).darken(.1).hexString()}const of=["x","y","borderWidth","radius","tension"],rf=["color","borderColor","backgroundColor"];function af(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),i.set("animations",{colors:{type:"color",properties:rf},numbers:{type:"number",properties:of}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function lf(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Sa=new Map;function cf(i,e){e=e||{};const t=i+JSON.stringify(e);let n=Sa.get(t);return n||(n=new Intl.NumberFormat(i,e),Sa.set(t,n)),n}function Ec(i,e,t){return cf(e,t).format(i)}const Sc={values(i){return me(i)?i:""+i},numeric(i,e,t){if(i===0)return"0";const n=this.chart.options.locale;let s,o=i;if(t.length>1){const c=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),o=uf(i,t)}const r=Mo(Math.abs(o)),a=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Ec(i,n,l)},logarithmic(i,e,t){if(i===0)return"0";const n=t[e].significand||i/Math.pow(10,Math.floor(Mo(i)));return[1,2,3,5,10,15].includes(n)||e>.8*t.length?Sc.numeric.call(this,i,e,t):""}};function uf(i,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&i!==Math.floor(i)&&(t=i-Math.floor(i)),t}var Tc={formatters:Sc};function df(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Tc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Ht=Object.create(null),Oo=Object.create(null);function ei(i,e){if(!e)return i;const t=e.split(".");for(let n=0,s=t.length;n<s;++n){const o=t[n];i=i[o]||(i[o]=Object.create(null))}return i}function Qs(i,e,t){return typeof e=="string"?oi(ei(i,e),t):oi(ei(i,""),e)}class hf{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,s)=>Zs(s.backgroundColor),this.hoverBorderColor=(n,s)=>Zs(s.borderColor),this.hoverColor=(n,s)=>Zs(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return Qs(this,e,t)}get(e){return ei(this,e)}describe(e,t){return Qs(Oo,e,t)}override(e,t){return Qs(Ht,e,t)}route(e,t,n,s){const o=ei(this,e),r=ei(this,n),a="_"+t;Object.defineProperties(o,{[a]:{value:o[t],writable:!0},[t]:{enumerable:!0,get(){const l=this[a],c=r[s];return Y(l)?Object.assign({},c,l):q(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(t=>t(this))}}var pe=new hf({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[af,lf,df]);function ff(i){return!i||fe(i.size)||fe(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Ta(i,e,t,n,s){let o=e[s];return o||(o=e[s]=i.measureText(s).width,t.push(s)),o>n&&(n=o),n}function It(i,e,t){const n=i.currentDevicePixelRatio,s=t!==0?Math.max(t/2,.5):0;return Math.round((e-s)*n)/n+s}function Ca(i,e){!e&&!i||(e=e||i.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,i.width,i.height),e.restore())}function Lo(i,e,t,n){Cc(i,e,t,n,null)}function Cc(i,e,t,n,s){let o,r,a,l,c,u,d,h;const f=e.pointStyle,g=e.rotation,y=e.radius;let v=(g||0)*Uh;if(f&&typeof f=="object"&&(o=f.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){i.save(),i.translate(t,n),i.rotate(v),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(y)||y<=0)){switch(i.beginPath(),f){default:s?i.ellipse(t,n,s/2,y,0,0,Qe):i.arc(t,n,y,0,Qe),i.closePath();break;case"triangle":u=s?s/2:y,i.moveTo(t+Math.sin(v)*u,n-Math.cos(v)*y),v+=ya,i.lineTo(t+Math.sin(v)*u,n-Math.cos(v)*y),v+=ya,i.lineTo(t+Math.sin(v)*u,n-Math.cos(v)*y),i.closePath();break;case"rectRounded":c=y*.516,l=y-c,r=Math.cos(v+At)*l,d=Math.cos(v+At)*(s?s/2-c:l),a=Math.sin(v+At)*l,h=Math.sin(v+At)*(s?s/2-c:l),i.arc(t-d,n-a,c,v-ye,v-Ze),i.arc(t+h,n-r,c,v-Ze,v),i.arc(t+d,n+a,c,v,v+Ze),i.arc(t-h,n+r,c,v+Ze,v+ye),i.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*y,u=s?s/2:l,i.rect(t-u,n-l,2*u,2*l);break}v+=At;case"rectRot":d=Math.cos(v)*(s?s/2:y),r=Math.cos(v)*y,a=Math.sin(v)*y,h=Math.sin(v)*(s?s/2:y),i.moveTo(t-d,n-a),i.lineTo(t+h,n-r),i.lineTo(t+d,n+a),i.lineTo(t-h,n+r),i.closePath();break;case"crossRot":v+=At;case"cross":d=Math.cos(v)*(s?s/2:y),r=Math.cos(v)*y,a=Math.sin(v)*y,h=Math.sin(v)*(s?s/2:y),i.moveTo(t-d,n-a),i.lineTo(t+d,n+a),i.moveTo(t+h,n-r),i.lineTo(t-h,n+r);break;case"star":d=Math.cos(v)*(s?s/2:y),r=Math.cos(v)*y,a=Math.sin(v)*y,h=Math.sin(v)*(s?s/2:y),i.moveTo(t-d,n-a),i.lineTo(t+d,n+a),i.moveTo(t+h,n-r),i.lineTo(t-h,n+r),v+=At,d=Math.cos(v)*(s?s/2:y),r=Math.cos(v)*y,a=Math.sin(v)*y,h=Math.sin(v)*(s?s/2:y),i.moveTo(t-d,n-a),i.lineTo(t+d,n+a),i.moveTo(t+h,n-r),i.lineTo(t-h,n+r);break;case"line":r=s?s/2:Math.cos(v)*y,a=Math.sin(v)*y,i.moveTo(t-r,n-a),i.lineTo(t+r,n+a);break;case"dash":i.moveTo(t,n),i.lineTo(t+Math.cos(v)*(s?s/2:y),n+Math.sin(v)*y);break;case!1:i.closePath();break}i.fill(),e.borderWidth>0&&i.stroke()}}function ai(i,e,t){return t=t||.5,!e||i&&i.x>e.left-t&&i.x<e.right+t&&i.y>e.top-t&&i.y<e.bottom+t}function ws(i,e){i.save(),i.beginPath(),i.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),i.clip()}function ks(i){i.restore()}function pf(i,e,t,n,s){if(!e)return i.lineTo(t.x,t.y);if(s==="middle"){const o=(e.x+t.x)/2;i.lineTo(o,e.y),i.lineTo(o,t.y)}else s==="after"!=!!n?i.lineTo(e.x,t.y):i.lineTo(t.x,e.y);i.lineTo(t.x,t.y)}function mf(i,e,t,n){if(!e)return i.lineTo(t.x,t.y);i.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?t.cp2x:t.cp1x,n?t.cp2y:t.cp1y,t.x,t.y)}function gf(i,e){e.translation&&i.translate(e.translation[0],e.translation[1]),fe(e.rotation)||i.rotate(e.rotation),e.color&&(i.fillStyle=e.color),e.textAlign&&(i.textAlign=e.textAlign),e.textBaseline&&(i.textBaseline=e.textBaseline)}function bf(i,e,t,n,s){if(s.strikethrough||s.underline){const o=i.measureText(n),r=e-o.actualBoundingBoxLeft,a=e+o.actualBoundingBoxRight,l=t-o.actualBoundingBoxAscent,c=t+o.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=s.decorationWidth||2,i.moveTo(r,u),i.lineTo(a,u),i.stroke()}}function yf(i,e){const t=i.fillStyle;i.fillStyle=e.color,i.fillRect(e.left,e.top,e.width,e.height),i.fillStyle=t}function li(i,e,t,n,s,o={}){const r=me(e)?e:[e],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(i.save(),i.font=s.string,gf(i,o),l=0;l<r.length;++l)c=r[l],o.backdrop&&yf(i,o.backdrop),a&&(o.strokeColor&&(i.strokeStyle=o.strokeColor),fe(o.strokeWidth)||(i.lineWidth=o.strokeWidth),i.strokeText(c,t,n,o.maxWidth)),i.fillText(c,t,n,o.maxWidth),bf(i,t,n,c,o),n+=Number(s.lineHeight);i.restore()}function Do(i,e){const{x:t,y:n,w:s,h:o,radius:r}=e;i.arc(t+r.topLeft,n+r.topLeft,r.topLeft,1.5*ye,ye,!0),i.lineTo(t,n+o-r.bottomLeft),i.arc(t+r.bottomLeft,n+o-r.bottomLeft,r.bottomLeft,ye,Ze,!0),i.lineTo(t+s-r.bottomRight,n+o),i.arc(t+s-r.bottomRight,n+o-r.bottomRight,r.bottomRight,Ze,0,!0),i.lineTo(t+s,n+r.topRight),i.arc(t+s-r.topRight,n+r.topRight,r.topRight,0,-Ze,!0),i.lineTo(t+r.topLeft,n)}const vf=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,xf=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function wf(i,e){const t=(""+i).match(vf);if(!t||t[1]==="normal")return e*1.2;switch(i=+t[2],t[3]){case"px":return i;case"%":i/=100;break}return e*i}const kf=i=>+i||0;function Ac(i,e){const t={},n=Y(e),s=n?Object.keys(e):e,o=Y(i)?n?r=>q(i[r],i[e[r]]):r=>i[r]:()=>i;for(const r of s)t[r]=kf(o(r));return t}function _f(i){return Ac(i,{top:"y",right:"x",bottom:"y",left:"x"})}function ti(i){return Ac(i,["topLeft","topRight","bottomLeft","bottomRight"])}function Ge(i){const e=_f(i);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Ee(i,e){i=i||{},e=e||pe.font;let t=q(i.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let n=q(i.style,e.style);n&&!(""+n).match(xf)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const s={family:q(i.family,e.family),lineHeight:wf(q(i.lineHeight,e.lineHeight),t),size:t,style:n,weight:q(i.weight,e.weight),string:""};return s.string=ff(s),s}function Oi(i,e,t,n){let s,o,r;for(s=0,o=i.length;s<o;++s)if(r=i[s],r!==void 0&&r!==void 0)return r}function Ef(i,e,t){const{min:n,max:s}=i,o=Bh(e,(s-n)/2),r=(a,l)=>t&&a===0?0:a+l;return{min:r(n,-Math.abs(o)),max:r(s,o)}}function Kt(i,e){return Object.assign(Object.create(i),e)}function hr(i,e=[""],t,n,s=()=>i[0]){const o=t||i;typeof n>"u"&&(n=Oc("_fallback",i));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:o,_fallback:n,_getTarget:s,override:a=>hr([a,...i],e,o,n)};return new Proxy(r,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return Mc(a,l,()=>Of(l,e,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return Ia(a).includes(l)},ownKeys(a){return Ia(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function mn(i,e,t,n){const s={_cacheable:!1,_proxy:i,_context:e,_subProxy:t,_stack:new Set,_descriptors:Ic(i,n),setContext:o=>mn(i,o,t,n),override:o=>mn(i.override(o),e,t,n)};return new Proxy(s,{deleteProperty(o,r){return delete o[r],delete i[r],!0},get(o,r,a){return Mc(o,r,()=>Tf(o,r,a))},getOwnPropertyDescriptor(o,r){return o._descriptors.allKeys?Reflect.has(i,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,r)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(o,r){return Reflect.has(i,r)},ownKeys(){return Reflect.ownKeys(i)},set(o,r,a){return i[r]=a,delete o[r],!0}})}function Ic(i,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:n=e.indexable,_allKeys:s=e.allKeys}=i;return{allKeys:s,scriptable:t,indexable:n,isScriptable:St(t)?t:()=>t,isIndexable:St(n)?n:()=>n}}const Sf=(i,e)=>i?i+lr(e):e,fr=(i,e)=>Y(e)&&i!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Mc(i,e,t){if(Object.prototype.hasOwnProperty.call(i,e)||e==="constructor")return i[e];const n=t();return i[e]=n,n}function Tf(i,e,t){const{_proxy:n,_context:s,_subProxy:o,_descriptors:r}=i;let a=n[e];return St(a)&&r.isScriptable(e)&&(a=Cf(e,a,i,t)),me(a)&&a.length&&(a=Af(e,a,i,r.isIndexable)),fr(e,a)&&(a=mn(a,s,o&&o[e],r)),a}function Cf(i,e,t,n){const{_proxy:s,_context:o,_subProxy:r,_stack:a}=t;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=e(o,r||n);return a.delete(i),fr(i,l)&&(l=pr(s._scopes,s,i,l)),l}function Af(i,e,t,n){const{_proxy:s,_context:o,_subProxy:r,_descriptors:a}=t;if(typeof o.index<"u"&&n(i))return e[o.index%e.length];if(Y(e[0])){const l=e,c=s._scopes.filter(u=>u!==l);e=[];for(const u of l){const d=pr(c,s,i,u);e.push(mn(d,o,r&&r[i],a))}}return e}function Nc(i,e,t){return St(i)?i(e,t):i}const If=(i,e)=>i===!0?e:typeof i=="string"?ls(e,i):void 0;function Mf(i,e,t,n,s){for(const o of e){const r=If(t,o);if(r){i.add(r);const a=Nc(r._fallback,t,s);if(typeof a<"u"&&a!==t&&a!==n)return a}else if(r===!1&&typeof n<"u"&&t!==n)return null}return!1}function pr(i,e,t,n){const s=e._rootScopes,o=Nc(e._fallback,t,n),r=[...i,...s],a=new Set;a.add(n);let l=Aa(a,r,t,o||t,n);return l===null||typeof o<"u"&&o!==t&&(l=Aa(a,r,o,l,n),l===null)?!1:hr(Array.from(a),[""],s,o,()=>Nf(e,t,n))}function Aa(i,e,t,n,s){for(;t;)t=Mf(i,e,t,n,s);return t}function Nf(i,e,t){const n=i._getTarget();e in n||(n[e]={});const s=n[e];return me(s)&&Y(t)?t:s||{}}function Of(i,e,t,n){let s;for(const o of e)if(s=Oc(Sf(o,i),t),typeof s<"u")return fr(i,s)?pr(t,n,i,s):s}function Oc(i,e){for(const t of e){if(!t)continue;const n=t[i];if(typeof n<"u")return n}}function Ia(i){let e=i._keys;return e||(e=i._keys=Lf(i._scopes)),e}function Lf(i){const e=new Set;for(const t of i)for(const n of Object.keys(t).filter(s=>!s.startsWith("_")))e.add(n);return Array.from(e)}const Df=Number.EPSILON||1e-14,gn=(i,e)=>e<i.length&&!i[e].skip&&i[e],Lc=i=>i==="x"?"y":"x";function Bf(i,e,t,n){const s=i.skip?e:i,o=e,r=t.skip?e:t,a=No(o,s),l=No(r,o);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=n*c,h=n*u;return{previous:{x:o.x-d*(r.x-s.x),y:o.y-d*(r.y-s.y)},next:{x:o.x+h*(r.x-s.x),y:o.y+h*(r.y-s.y)}}}function Pf(i,e,t){const n=i.length;let s,o,r,a,l,c=gn(i,0);for(let u=0;u<n-1;++u)if(l=c,c=gn(i,u+1),!(!l||!c)){if(Zn(e[u],0,Df)){t[u]=t[u+1]=0;continue}s=t[u]/e[u],o=t[u+1]/e[u],a=Math.pow(s,2)+Math.pow(o,2),!(a<=9)&&(r=3/Math.sqrt(a),t[u]=s*r*e[u],t[u+1]=o*r*e[u])}}function Ff(i,e,t="x"){const n=Lc(t),s=i.length;let o,r,a,l=gn(i,0);for(let c=0;c<s;++c){if(r=a,a=l,l=gn(i,c+1),!a)continue;const u=a[t],d=a[n];r&&(o=(u-r[t])/3,a[`cp1${t}`]=u-o,a[`cp1${n}`]=d-o*e[c]),l&&(o=(l[t]-u)/3,a[`cp2${t}`]=u+o,a[`cp2${n}`]=d+o*e[c])}}function Rf(i,e="x"){const t=Lc(e),n=i.length,s=Array(n).fill(0),o=Array(n);let r,a,l,c=gn(i,0);for(r=0;r<n;++r)if(a=l,l=c,c=gn(i,r+1),!!l){if(c){const u=c[e]-l[e];s[r]=u!==0?(c[t]-l[t])/u:0}o[r]=a?c?pn(s[r-1])!==pn(s[r])?0:(s[r-1]+s[r])/2:s[r-1]:s[r]}Pf(i,s,o),Ff(i,o,e)}function Li(i,e,t){return Math.max(Math.min(i,t),e)}function $f(i,e){let t,n,s,o,r,a=ai(i[0],e);for(t=0,n=i.length;t<n;++t)r=o,o=a,a=t<n-1&&ai(i[t+1],e),o&&(s=i[t],r&&(s.cp1x=Li(s.cp1x,e.left,e.right),s.cp1y=Li(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=Li(s.cp2x,e.left,e.right),s.cp2y=Li(s.cp2y,e.top,e.bottom)))}function zf(i,e,t,n,s){let o,r,a,l;if(e.spanGaps&&(i=i.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")Rf(i,s);else{let c=n?i[i.length-1]:i[0];for(o=0,r=i.length;o<r;++o)a=i[o],l=Bf(c,a,i[Math.min(o+1,r-(n?0:1))%r],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&$f(i,t)}function mr(){return typeof window<"u"&&typeof document<"u"}function gr(i){let e=i.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function ds(i,e,t){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*e.parentNode[t])):n=i,n}const _s=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function jf(i,e){return _s(i).getPropertyValue(e)}const Uf=["top","right","bottom","left"];function zt(i,e,t){const n={};t=t?"-"+t:"";for(let s=0;s<4;s++){const o=Uf[s];n[o]=parseFloat(i[e+"-"+o+t])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const Hf=(i,e,t)=>(i>0||e>0)&&(!t||!t.shadowRoot);function Vf(i,e){const t=i.touches,n=t&&t.length?t[0]:i,{offsetX:s,offsetY:o}=n;let r=!1,a,l;if(Hf(s,o,i.target))a=s,l=o;else{const c=e.getBoundingClientRect();a=n.clientX-c.left,l=n.clientY-c.top,r=!0}return{x:a,y:l,box:r}}function Ot(i,e){if("native"in i)return i;const{canvas:t,currentDevicePixelRatio:n}=e,s=_s(t),o=s.boxSizing==="border-box",r=zt(s,"padding"),a=zt(s,"border","width"),{x:l,y:c,box:u}=Vf(i,t),d=r.left+(u&&a.left),h=r.top+(u&&a.top);let{width:f,height:g}=e;return o&&(f-=r.width+a.width,g-=r.height+a.height),{x:Math.round((l-d)/f*t.width/n),y:Math.round((c-h)/g*t.height/n)}}function Wf(i,e,t){let n,s;if(e===void 0||t===void 0){const o=i&&gr(i);if(!o)e=i.clientWidth,t=i.clientHeight;else{const r=o.getBoundingClientRect(),a=_s(o),l=zt(a,"border","width"),c=zt(a,"padding");e=r.width-c.width-l.width,t=r.height-c.height-l.height,n=ds(a.maxWidth,o,"clientWidth"),s=ds(a.maxHeight,o,"clientHeight")}}return{width:e,height:t,maxWidth:n||us,maxHeight:s||us}}const Di=i=>Math.round(i*10)/10;function Kf(i,e,t,n){const s=_s(i),o=zt(s,"margin"),r=ds(s.maxWidth,i,"clientWidth")||us,a=ds(s.maxHeight,i,"clientHeight")||us,l=Wf(i,e,t);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const h=zt(s,"border","width"),f=zt(s,"padding");c-=f.width+h.width,u-=f.height+h.height}return c=Math.max(0,c-o.width),u=Math.max(0,n?c/n:u-o.height),c=Di(Math.min(c,r,l.maxWidth)),u=Di(Math.min(u,a,l.maxHeight)),c&&!u&&(u=Di(c/2)),(e!==void 0||t!==void 0)&&n&&l.height&&u>l.height&&(u=l.height,c=Di(Math.floor(u*n))),{width:c,height:u}}function Ma(i,e,t){const n=e||1,s=Math.floor(i.height*n),o=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const r=i.canvas;return r.style&&(t||!r.style.height&&!r.style.width)&&(r.style.height=`${i.height}px`,r.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||r.height!==s||r.width!==o?(i.currentDevicePixelRatio=n,r.height=s,r.width=o,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const qf=function(){let i=!1;try{const e={get passive(){return i=!0,!1}};mr()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return i}();function Na(i,e){const t=jf(i,e),n=t&&t.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Lt(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:i.y+t*(e.y-i.y)}}function Gf(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:n==="middle"?t<.5?i.y:e.y:n==="after"?t<1?i.y:e.y:t>0?e.y:i.y}}function Yf(i,e,t,n){const s={x:i.cp2x,y:i.cp2y},o={x:e.cp1x,y:e.cp1y},r=Lt(i,s,t),a=Lt(s,o,t),l=Lt(o,e,t),c=Lt(r,a,t),u=Lt(a,l,t);return Lt(c,u,t)}const Jf=function(i,e){return{x(t){return i+i+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,n){return t-n},leftForLtr(t,n){return t-n}}},Xf=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,e){return i+e},leftForLtr(i,e){return i}}};function un(i,e,t){return i?Jf(e,t):Xf()}function Dc(i,e){let t,n;(e==="ltr"||e==="rtl")&&(t=i.canvas.style,n=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),i.prevTextDirection=n)}function Bc(i,e){e!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",e[0],e[1]))}function Pc(i){return i==="angle"?{between:xc,compare:Gh,normalize:lt}:{between:on,compare:(e,t)=>e-t,normalize:e=>e}}function Oa({start:i,end:e,count:t,loop:n,style:s}){return{start:i%t,end:e%t,loop:n&&(e-i+1)%t===0,style:s}}function Zf(i,e,t){const{property:n,start:s,end:o}=t,{between:r,normalize:a}=Pc(n),l=e.length;let{start:c,end:u,loop:d}=i,h,f;if(d){for(c+=l,u+=l,h=0,f=l;h<f&&r(a(e[c%l][n]),s,o);++h)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:d,style:i.style}}function Fc(i,e,t){if(!t)return[i];const{property:n,start:s,end:o}=t,r=e.length,{compare:a,between:l,normalize:c}=Pc(n),{start:u,end:d,loop:h,style:f}=Zf(i,e,t),g=[];let y=!1,v=null,p,E,w;const m=()=>l(s,w,p)&&a(s,w)!==0,S=()=>a(o,p)===0||l(o,w,p),L=()=>y||m(),D=()=>!y||S();for(let N=u,_=u;N<=d;++N)E=e[N%r],!E.skip&&(p=c(E[n]),p!==w&&(y=l(p,s,o),v===null&&L()&&(v=a(p,s)===0?N:_),v!==null&&D()&&(g.push(Oa({start:v,end:N,loop:h,count:r,style:f})),v=null),_=N,w=p));return v!==null&&g.push(Oa({start:v,end:d,loop:h,count:r,style:f})),g}function Rc(i,e){const t=[],n=i.segments;for(let s=0;s<n.length;s++){const o=Fc(n[s],i.points,e);o.length&&t.push(...o)}return t}function Qf(i,e,t,n){let s=0,o=e-1;if(t&&!n)for(;s<e&&!i[s].skip;)s++;for(;s<e&&i[s].skip;)s++;for(s%=e,t&&(o+=s);o>s&&i[o%e].skip;)o--;return o%=e,{start:s,end:o}}function ep(i,e,t,n){const s=i.length,o=[];let r=e,a=i[e],l;for(l=e+1;l<=t;++l){const c=i[l%s];c.skip||c.stop?a.skip||(n=!1,o.push({start:e%s,end:(l-1)%s,loop:n}),e=r=c.stop?l:null):(r=l,a.skip&&(e=l)),a=c}return r!==null&&o.push({start:e%s,end:r%s,loop:n}),o}function tp(i,e){const t=i.points,n=i.options.spanGaps,s=t.length;if(!s)return[];const o=!!i._loop,{start:r,end:a}=Qf(t,s,o,n);if(n===!0)return La(i,[{start:r,end:a,loop:o}],t,e);const l=a<r?a+s:a,c=!!i._fullLoop&&r===0&&a===s-1;return La(i,ep(t,r,l,c),t,e)}function La(i,e,t,n){return!n||!n.setContext||!t?e:np(i,e,t,n)}function np(i,e,t,n){const s=i._chart.getContext(),o=Da(i.options),{_datasetIndex:r,options:{spanGaps:a}}=i,l=t.length,c=[];let u=o,d=e[0].start,h=d;function f(g,y,v,p){const E=a?-1:1;if(g!==y){for(g+=l;t[g%l].skip;)g-=E;for(;t[y%l].skip;)y+=E;g%l!==y%l&&(c.push({start:g%l,end:y%l,loop:v,style:p}),u=p,d=y%l)}}for(const g of e){d=a?d:g.start;let y=t[d%l],v;for(h=d+1;h<=g.end;h++){const p=t[h%l];v=Da(n.setContext(Kt(s,{type:"segment",p0:y,p1:p,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:r}))),ip(v,u)&&f(d,h-1,g.loop,u),y=p,u=v}d<h-1&&f(d,h-1,g.loop,u)}return c}function Da(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function ip(i,e){if(!e)return!1;const t=[],n=function(s,o){return dr(o)?(t.includes(o)||t.push(o),t.indexOf(o)):o};return JSON.stringify(i,n)!==JSON.stringify(e,n)}/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class sp{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,s){const o=t.listeners[s],r=t.duration;o.forEach(a=>a({chart:e,initial:t.initial,numSteps:r,currentStep:Math.min(n-t.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=kc.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,s)=>{if(!n.running||!n.items.length)return;const o=n.items;let r=o.length-1,a=!1,l;for(;r>=0;--r)l=o[r],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(e),a=!0):(o[r]=o[o.length-1],o.pop());a&&(s.draw(),this._notify(s,n,e,"progress")),o.length||(n.running=!1,this._notify(s,n,e,"complete"),n.initial=!1),t+=o.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((n,s)=>Math.max(n,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const n=t.items;let s=n.length-1;for(;s>=0;--s)n[s].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var pt=new sp;const Ba="transparent",op={boolean(i,e,t){return t>.5?e:i},color(i,e,t){const n=Ea(i||Ba),s=n.valid&&Ea(e||Ba);return s&&s.valid?s.mix(n,t).hexString():e},number(i,e,t){return i+(e-i)*t}};class rp{constructor(e,t,n,s){const o=t[n];s=Oi([e.to,s,o,e.from]);const r=Oi([e.from,o,s]);this._active=!0,this._fn=e.fn||op[e.type||typeof r],this._easing=Qn[e.easing]||Qn.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=r,this._to=s,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);const s=this._target[this._prop],o=n-this._start,r=this._duration-o;this._start=n,this._duration=Math.floor(Math.max(r,e.duration)),this._total+=o,this._loop=!!e.loop,this._to=Oi([e.to,t,s,e.from]),this._from=Oi([e.from,s,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,n=this._duration,s=this._prop,o=this._from,r=this._loop,a=this._to;let l;if(this._active=o!==a&&(r||t<n),!this._active){this._target[s]=a,this._notify(!0);return}if(t<0){this._target[s]=o;return}l=t/n%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(o,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){const t=e?"res":"rej",n=this._promises||[];for(let s=0;s<n.length;s++)n[s][t]()}}class $c{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!Y(e))return;const t=Object.keys(pe.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const o=e[s];if(!Y(o))return;const r={};for(const a of t)r[a]=o[a];(me(o.properties)&&o.properties||[s]).forEach(a=>{(a===s||!n.has(a))&&n.set(a,r)})})}_animateOptions(e,t){const n=t.options,s=lp(e,n);if(!s)return[];const o=this._createAnimations(s,n);return n.$shared&&ap(e.options.$animations,n).then(()=>{e.options=n},()=>{}),o}_createAnimations(e,t){const n=this._properties,s=[],o=e.$animations||(e.$animations={}),r=Object.keys(t),a=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,t));continue}const u=t[c];let d=o[c];const h=n.get(c);if(d)if(h&&d.active()){d.update(h,u,a);continue}else d.cancel();if(!h||!h.duration){e[c]=u;continue}o[c]=d=new rp(h,e,c,u),s.push(d)}return s}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const n=this._createAnimations(e,t);if(n.length)return pt.add(this._chart,n),!0}}function ap(i,e){const t=[],n=Object.keys(e);for(let s=0;s<n.length;s++){const o=i[n[s]];o&&o.active()&&t.push(o.wait())}return Promise.all(t)}function lp(i,e){if(!e)return;let t=i.options;if(!t){i.options=e;return}return t.$shared&&(i.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function Pa(i,e){const t=i&&i.options||{},n=t.reverse,s=t.min===void 0?e:0,o=t.max===void 0?e:0;return{start:n?o:s,end:n?s:o}}function cp(i,e,t){if(t===!1)return!1;const n=Pa(i,t),s=Pa(e,t);return{top:s.end,right:n.end,bottom:s.start,left:n.start}}function up(i){let e,t,n,s;return Y(i)?(e=i.top,t=i.right,n=i.bottom,s=i.left):e=t=n=s=i,{top:e,right:t,bottom:n,left:s,disabled:i===!1}}function zc(i,e){const t=[],n=i._getSortedDatasetMetas(e);let s,o;for(s=0,o=n.length;s<o;++s)t.push(n[s].index);return t}function Fa(i,e,t,n={}){const s=i.keys,o=n.mode==="single";let r,a,l,c;if(e===null)return;let u=!1;for(r=0,a=s.length;r<a;++r){if(l=+s[r],l===t){if(u=!0,n.all)continue;break}c=i.values[l],Te(c)&&(o||e===0||pn(e)===pn(c))&&(e+=c)}return!u&&!n.all?0:e}function dp(i,e){const{iScale:t,vScale:n}=e,s=t.axis==="x"?"x":"y",o=n.axis==="x"?"x":"y",r=Object.keys(i),a=new Array(r.length);let l,c,u;for(l=0,c=r.length;l<c;++l)u=r[l],a[l]={[s]:u,[o]:i[u]};return a}function eo(i,e){const t=i&&i.options.stacked;return t||t===void 0&&e.stack!==void 0}function hp(i,e,t){return`${i.id}.${e.id}.${t.stack||t.type}`}function fp(i){const{min:e,max:t,minDefined:n,maxDefined:s}=i.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:s?t:Number.POSITIVE_INFINITY}}function pp(i,e,t){const n=i[e]||(i[e]={});return n[t]||(n[t]={})}function Ra(i,e,t,n){for(const s of e.getMatchingVisibleMetas(n).reverse()){const o=i[s.index];if(t&&o>0||!t&&o<0)return s.index}return null}function $a(i,e){const{chart:t,_cachedMeta:n}=i,s=t._stacks||(t._stacks={}),{iScale:o,vScale:r,index:a}=n,l=o.axis,c=r.axis,u=hp(o,r,n),d=e.length;let h;for(let f=0;f<d;++f){const g=e[f],{[l]:y,[c]:v}=g,p=g._stacks||(g._stacks={});h=p[c]=pp(s,u,y),h[a]=v,h._top=Ra(h,r,!0,n.type),h._bottom=Ra(h,r,!1,n.type);const E=h._visualValues||(h._visualValues={});E[a]=v}}function to(i,e){const t=i.scales;return Object.keys(t).filter(n=>t[n].axis===e).shift()}function mp(i,e){return Kt(i,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function gp(i,e,t){return Kt(i,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function Fn(i,e){const t=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){e=e||i._parsed;for(const s of e){const o=s._stacks;if(!o||o[n]===void 0||o[n][t]===void 0)return;delete o[n][t],o[n]._visualValues!==void 0&&o[n]._visualValues[t]!==void 0&&delete o[n]._visualValues[t]}}}const no=i=>i==="reset"||i==="none",za=(i,e)=>e?i:Object.assign({},i),bp=(i,e,t)=>i&&!e.hidden&&e._stacked&&{keys:zc(t,!0),values:null};class ni{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=eo(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Fn(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,n=this.getDataset(),s=(d,h,f,g)=>d==="x"?h:d==="r"?g:f,o=t.xAxisID=q(n.xAxisID,to(e,"x")),r=t.yAxisID=q(n.yAxisID,to(e,"y")),a=t.rAxisID=q(n.rAxisID,to(e,"r")),l=t.indexAxis,c=t.iAxisID=s(l,o,r,a),u=t.vAxisID=s(l,r,o,a);t.xScale=this.getScaleForId(o),t.yScale=this.getScaleForId(r),t.rScale=this.getScaleForId(a),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&wa(this._data,this),e._stacked&&Fn(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),n=this._data;if(Y(t)){const s=this._cachedMeta;this._data=dp(t,s)}else if(n!==t){if(n){wa(n,this);const s=this._cachedMeta;Fn(s),s._parsed=[]}t&&Object.isExtensible(t)&&Zh(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,n=this.getDataset();let s=!1;this._dataCheck();const o=t._stacked;t._stacked=eo(t.vScale,t),t.stack!==n.stack&&(s=!0,Fn(t),t.stack=n.stack),this._resyncElements(e),(s||o!==t._stacked)&&($a(this,t._parsed),t._stacked=eo(t.vScale,t))}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:n,_data:s}=this,{iScale:o,_stacked:r}=n,a=o.axis;let l=e===0&&t===s.length?!0:n._sorted,c=e>0&&n._parsed[e-1],u,d,h;if(this._parsing===!1)n._parsed=s,n._sorted=!0,h=s;else{me(s[e])?h=this.parseArrayData(n,s,e,t):Y(s[e])?h=this.parseObjectData(n,s,e,t):h=this.parsePrimitiveData(n,s,e,t);const f=()=>d[a]===null||c&&d[a]<c[a];for(u=0;u<t;++u)n._parsed[u+e]=d=h[u],l&&(f()&&(l=!1),c=d);n._sorted=l}r&&$a(this,h)}parsePrimitiveData(e,t,n,s){const{iScale:o,vScale:r}=e,a=o.axis,l=r.axis,c=o.getLabels(),u=o===r,d=new Array(s);let h,f,g;for(h=0,f=s;h<f;++h)g=h+n,d[h]={[a]:u||o.parse(c[g],g),[l]:r.parse(t[g],g)};return d}parseArrayData(e,t,n,s){const{xScale:o,yScale:r}=e,a=new Array(s);let l,c,u,d;for(l=0,c=s;l<c;++l)u=l+n,d=t[u],a[l]={x:o.parse(d[0],u),y:r.parse(d[1],u)};return a}parseObjectData(e,t,n,s){const{xScale:o,yScale:r}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,d,h,f;for(u=0,d=s;u<d;++u)h=u+n,f=t[h],c[u]={x:o.parse(ls(f,a),h),y:r.parse(ls(f,l),h)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){const s=this.chart,o=this._cachedMeta,r=t[e.axis],a={keys:zc(s,!0),values:t._stacks[e.axis]._visualValues};return Fa(a,r,o.index,{mode:n})}updateRangeFromParsed(e,t,n,s){const o=n[t.axis];let r=o===null?NaN:o;const a=s&&n._stacks[t.axis];s&&a&&(s.values=a,r=Fa(s,o,this._cachedMeta.index)),e.min=Math.min(e.min,r),e.max=Math.max(e.max,r)}getMinMax(e,t){const n=this._cachedMeta,s=n._parsed,o=n._sorted&&e===n.iScale,r=s.length,a=this._getOtherScale(e),l=bp(t,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=fp(a);let h,f;function g(){f=s[h];const y=f[a.axis];return!Te(f[e.axis])||u>y||d<y}for(h=0;h<r&&!(!g()&&(this.updateRangeFromParsed(c,e,f,l),o));++h);if(o){for(h=r-1;h>=0;--h)if(!g()){this.updateRangeFromParsed(c,e,f,l);break}}return c}getAllParsedValues(e){const t=this._cachedMeta._parsed,n=[];let s,o,r;for(s=0,o=t.length;s<o;++s)r=t[s][e.axis],Te(r)&&n.push(r);return n}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,n=t.iScale,s=t.vScale,o=this.getParsed(e);return{label:n?""+n.getLabelForValue(o[n.axis]):"",value:s?""+s.getLabelForValue(o[s.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=up(q(this.options.clip,cp(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,n=this._cachedMeta,s=n.data||[],o=t.chartArea,r=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(n.dataset&&n.dataset.draw(e,o,a,l),u=a;u<a+l;++u){const d=s[u];d.hidden||(d.active&&c?r.push(d):d.draw(e,o))}for(u=0;u<r.length;++u)r[u].draw(e,o)}getStyle(e,t){const n=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){const s=this.getDataset();let o;if(e>=0&&e<this._cachedMeta.data.length){const r=this._cachedMeta.data[e];o=r.$context||(r.$context=gp(this.getContext(),e,r)),o.parsed=this.getParsed(e),o.raw=s.data[e],o.index=o.dataIndex=e}else o=this.$context||(this.$context=mp(this.chart.getContext(),this.index)),o.dataset=s,o.index=o.datasetIndex=this.index;return o.active=!!t,o.mode=n,o}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",n){const s=t==="active",o=this._cachedDataOpts,r=e+"-"+t,a=o[r],l=this.enableOptionSharing&&cs(n);if(a)return za(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),d=s?[`${e}Hover`,"hover",e,""]:[e,""],h=c.getOptionScopes(this.getDataset(),u),f=Object.keys(pe.elements[e]),g=()=>this.getContext(n,s,t),y=c.resolveNamedOptions(h,f,g,d);return y.$shared&&(y.$shared=l,o[r]=Object.freeze(za(y,l))),y}_resolveAnimations(e,t,n){const s=this.chart,o=this._cachedDataOpts,r=`animation-${t}`,a=o[r];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,t),h=u.getOptionScopes(this.getDataset(),d);l=u.createResolver(h,this.getContext(e,n,t))}const c=new $c(s,l&&l.animations);return l&&l._cacheable&&(o[r]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||no(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const n=this.resolveDataElementOptions(e,t),s=this._sharedOptions,o=this.getSharedOptions(n),r=this.includeOptions(t,o)||o!==s;return this.updateSharedOptions(o,t,n),{sharedOptions:o,includeOptions:r}}updateElement(e,t,n,s){no(s)?Object.assign(e,n):this._resolveAnimations(t,s).update(e,n)}updateSharedOptions(e,t,n){e&&!no(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,s){e.active=s;const o=this.getStyle(t,s);this._resolveAnimations(t,n,s).update(e,{options:!s&&this.getSharedOptions(o)||o})}removeHoverStyle(e,t,n){this._setStyle(e,n,"active",!1)}setHoverStyle(e,t,n){this._setStyle(e,n,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,n=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=n.length,o=t.length,r=Math.min(o,s);r&&this.parse(0,r),o>s?this._insertElements(s,o-s,e):o<s&&this._removeElements(o,s-o)}_insertElements(e,t,n=!0){const s=this._cachedMeta,o=s.data,r=e+t;let a;const l=c=>{for(c.length+=t,a=c.length-1;a>=r;a--)c[a]=c[a-t]};for(l(o),a=e;a<r;++a)o[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,t),n&&this.updateElements(o,e,t,"reset")}updateElements(e,t,n,s){}_removeElements(e,t){const n=this._cachedMeta;if(this._parsing){const s=n._parsed.splice(e,t);n._stacked&&Fn(n,s)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,n,s]=e;this[t](n,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const n=arguments.length-2;n&&this._sync(["_insertElements",e,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}M(ni,"defaults",{}),M(ni,"datasetElementType",null),M(ni,"dataElementType",null);class Yi extends ni{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:n,data:s=[],_dataset:o}=t,r=this.chart._animationsDisabled;let{start:a,count:l}=nf(t,s,r);this._drawStart=a,this._drawCount=l,sf(t)&&(a=0,l=s.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!o._decimated,n.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!r,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,t,n,s){const o=s==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(t,s),h=r.axis,f=a.axis,{spanGaps:g,segment:y}=this.options,v=ri(g)?g:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||o||s==="none",E=t+n,w=e.length;let m=t>0&&this.getParsed(t-1);for(let S=0;S<w;++S){const L=e[S],D=p?L:{};if(S<t||S>=E){D.skip=!0;continue}const N=this.getParsed(S),_=fe(N[f]),$=D[h]=r.getPixelForValue(N[h],S),j=D[f]=o||_?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,N,l):N[f],S);D.skip=isNaN($)||isNaN(j)||_,D.stop=S>0&&Math.abs(N[h]-m[h])>v,y&&(D.parsed=N,D.raw=c.data[S]),d&&(D.options=u||this.resolveDataElementOptions(S,L.active?"active":s)),p||this.updateElement(L,S,D,s),m=N}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,s=e.data||[];if(!s.length)return n;const o=s[0].size(this.resolveDataElementOptions(0)),r=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(n,o,r)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}M(Yi,"id","line"),M(Yi,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),M(Yi,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Mt(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class br{constructor(e){M(this,"options");this.options=e||{}}static override(e){Object.assign(br.prototype,e)}init(){}formats(){return Mt()}parse(){return Mt()}format(){return Mt()}add(){return Mt()}diff(){return Mt()}startOf(){return Mt()}endOf(){return Mt()}}var yp={_date:br};function vp(i,e,t,n){const{controller:s,data:o,_sorted:r}=i,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&r&&o.length){const l=a._reversePixels?Jh:Pt;if(n){if(s._sharedOptions){const c=o[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const d=l(o,e,t-u),h=l(o,e,t+u);return{lo:d.lo,hi:h.hi}}}}else return l(o,e,t)}return{lo:0,hi:o.length-1}}function mi(i,e,t,n,s){const o=i.getSortedVisibleDatasetMetas(),r=t[e];for(let a=0,l=o.length;a<l;++a){const{index:c,data:u}=o[a],{lo:d,hi:h}=vp(o[a],e,r,s);for(let f=d;f<=h;++f){const g=u[f];g.skip||n(g,c,f)}}}function xp(i){const e=i.indexOf("x")!==-1,t=i.indexOf("y")!==-1;return function(n,s){const o=e?Math.abs(n.x-s.x):0,r=t?Math.abs(n.y-s.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}function io(i,e,t,n,s){const o=[];return!s&&!i.isPointInArea(e)||mi(i,t,e,function(a,l,c){!s&&!ai(a,i.chartArea,0)||a.inRange(e.x,e.y,n)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function wp(i,e,t,n){let s=[];function o(r,a,l){const{startAngle:c,endAngle:u}=r.getProps(["startAngle","endAngle"],n),{angle:d}=qh(r,{x:e.x,y:e.y});xc(d,c,u)&&s.push({element:r,datasetIndex:a,index:l})}return mi(i,t,e,o),s}function kp(i,e,t,n,s,o){let r=[];const a=xp(t);let l=Number.POSITIVE_INFINITY;function c(u,d,h){const f=u.inRange(e.x,e.y,s);if(n&&!f)return;const g=u.getCenterPoint(s);if(!(!!o||i.isPointInArea(g))&&!f)return;const v=a(e,g);v<l?(r=[{element:u,datasetIndex:d,index:h}],l=v):v===l&&r.push({element:u,datasetIndex:d,index:h})}return mi(i,t,e,c),r}function so(i,e,t,n,s,o){return!o&&!i.isPointInArea(e)?[]:t==="r"&&!n?wp(i,e,t,s):kp(i,e,t,n,s,o)}function ja(i,e,t,n,s){const o=[],r=t==="x"?"inXRange":"inYRange";let a=!1;return mi(i,t,e,(l,c,u)=>{l[r]&&l[r](e[t],s)&&(o.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,s))}),n&&!a?[]:o}var _p={evaluateInteractionItems:mi,modes:{index(i,e,t,n){const s=Ot(e,i),o=t.axis||"x",r=t.includeInvisible||!1,a=t.intersect?io(i,s,o,n,r):so(i,s,o,!1,n,r),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,d=c.data[u];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:u})}),l):[]},dataset(i,e,t,n){const s=Ot(e,i),o=t.axis||"xy",r=t.includeInvisible||!1;let a=t.intersect?io(i,s,o,n,r):so(i,s,o,!1,n,r);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(i,e,t,n){const s=Ot(e,i),o=t.axis||"xy",r=t.includeInvisible||!1;return io(i,s,o,n,r)},nearest(i,e,t,n){const s=Ot(e,i),o=t.axis||"xy",r=t.includeInvisible||!1;return so(i,s,o,t.intersect,n,r)},x(i,e,t,n){const s=Ot(e,i);return ja(i,s,"x",t.intersect,n)},y(i,e,t,n){const s=Ot(e,i);return ja(i,s,"y",t.intersect,n)}}};const jc=["left","top","right","bottom"];function Rn(i,e){return i.filter(t=>t.pos===e)}function Ua(i,e){return i.filter(t=>jc.indexOf(t.pos)===-1&&t.box.axis===e)}function $n(i,e){return i.sort((t,n)=>{const s=e?n:t,o=e?t:n;return s.weight===o.weight?s.index-o.index:s.weight-o.weight})}function Ep(i){const e=[];let t,n,s,o,r,a;for(t=0,n=(i||[]).length;t<n;++t)s=i[t],{position:o,options:{stack:r,stackWeight:a=1}}=s,e.push({index:t,box:s,pos:o,horizontal:s.isHorizontal(),weight:s.weight,stack:r&&o+r,stackWeight:a});return e}function Sp(i){const e={};for(const t of i){const{stack:n,pos:s,stackWeight:o}=t;if(!n||!jc.includes(s))continue;const r=e[n]||(e[n]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return e}function Tp(i,e){const t=Sp(i),{vBoxMaxWidth:n,hBoxMaxHeight:s}=e;let o,r,a;for(o=0,r=i.length;o<r;++o){a=i[o];const{fullSize:l}=a.box,c=t[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*n:l&&e.availableWidth,a.height=s):(a.width=n,a.height=u?u*s:l&&e.availableHeight)}return t}function Cp(i){const e=Ep(i),t=$n(e.filter(c=>c.box.fullSize),!0),n=$n(Rn(e,"left"),!0),s=$n(Rn(e,"right")),o=$n(Rn(e,"top"),!0),r=$n(Rn(e,"bottom")),a=Ua(e,"x"),l=Ua(e,"y");return{fullSize:t,leftAndTop:n.concat(o),rightAndBottom:s.concat(l).concat(r).concat(a),chartArea:Rn(e,"chartArea"),vertical:n.concat(s).concat(l),horizontal:o.concat(r).concat(a)}}function Ha(i,e,t,n){return Math.max(i[t],e[t])+Math.max(i[n],e[n])}function Uc(i,e){i.top=Math.max(i.top,e.top),i.left=Math.max(i.left,e.left),i.bottom=Math.max(i.bottom,e.bottom),i.right=Math.max(i.right,e.right)}function Ap(i,e,t,n){const{pos:s,box:o}=t,r=i.maxPadding;if(!Y(s)){t.size&&(i[s]-=t.size);const d=n[t.stack]||{size:0,count:1};d.size=Math.max(d.size,t.horizontal?o.height:o.width),t.size=d.size/d.count,i[s]+=t.size}o.getPadding&&Uc(r,o.getPadding());const a=Math.max(0,e.outerWidth-Ha(r,i,"left","right")),l=Math.max(0,e.outerHeight-Ha(r,i,"top","bottom")),c=a!==i.w,u=l!==i.h;return i.w=a,i.h=l,t.horizontal?{same:c,other:u}:{same:u,other:c}}function Ip(i){const e=i.maxPadding;function t(n){const s=Math.max(e[n]-i[n],0);return i[n]+=s,s}i.y+=t("top"),i.x+=t("left"),t("right"),t("bottom")}function Mp(i,e){const t=e.maxPadding;function n(s){const o={left:0,top:0,right:0,bottom:0};return s.forEach(r=>{o[r]=Math.max(e[r],t[r])}),o}return n(i?["left","right"]:["top","bottom"])}function Wn(i,e,t,n){const s=[];let o,r,a,l,c,u;for(o=0,r=i.length,c=0;o<r;++o){a=i[o],l=a.box,l.update(a.width||e.w,a.height||e.h,Mp(a.horizontal,e));const{same:d,other:h}=Ap(e,t,a,n);c|=d&&s.length,u=u||h,l.fullSize||s.push(a)}return c&&Wn(s,e,t,n)||u}function Bi(i,e,t,n,s){i.top=t,i.left=e,i.right=e+n,i.bottom=t+s,i.width=n,i.height=s}function Va(i,e,t,n){const s=t.padding;let{x:o,y:r}=e;for(const a of i){const l=a.box,c=n[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const d=e.w*u,h=c.size||l.height;cs(c.start)&&(r=c.start),l.fullSize?Bi(l,s.left,r,t.outerWidth-s.right-s.left,h):Bi(l,e.left+c.placed,r,d,h),c.start=r,c.placed+=d,r=l.bottom}else{const d=e.h*u,h=c.size||l.width;cs(c.start)&&(o=c.start),l.fullSize?Bi(l,o,s.top,h,t.outerHeight-s.bottom-s.top):Bi(l,o,e.top+c.placed,h,d),c.start=o,c.placed+=d,o=l.right}}e.x=o,e.y=r}var We={addBox(i,e){i.boxes||(i.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},i.boxes.push(e)},removeBox(i,e){const t=i.boxes?i.boxes.indexOf(e):-1;t!==-1&&i.boxes.splice(t,1)},configure(i,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(i,e,t,n){if(!i)return;const s=Ge(i.options.layout.padding),o=Math.max(e-s.width,0),r=Math.max(t-s.height,0),a=Cp(i.boxes),l=a.vertical,c=a.horizontal;Q(i.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const u=l.reduce((y,v)=>v.box.options&&v.box.options.display===!1?y:y+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:t,padding:s,availableWidth:o,availableHeight:r,vBoxMaxWidth:o/2/u,hBoxMaxHeight:r/2}),h=Object.assign({},s);Uc(h,Ge(n));const f=Object.assign({maxPadding:h,w:o,h:r,x:s.left,y:s.top},s),g=Tp(l.concat(c),d);Wn(a.fullSize,f,d,g),Wn(l,f,d,g),Wn(c,f,d,g)&&Wn(l,f,d,g),Ip(f),Va(a.leftAndTop,f,d,g),f.x+=f.w,f.y+=f.h,Va(a.rightAndBottom,f,d,g),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Q(a.chartArea,y=>{const v=y.box;Object.assign(v,i.chartArea),v.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Hc{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,s){return t=Math.max(0,t||e.width),n=n||e.height,{width:t,height:Math.max(0,s?Math.floor(t/s):n)}}isAttached(e){return!0}updateConfig(e){}}class Np extends Hc{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ji="$chartjs",Op={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Wa=i=>i===null||i==="";function Lp(i,e){const t=i.style,n=i.getAttribute("height"),s=i.getAttribute("width");if(i[Ji]={initial:{height:n,width:s,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",Wa(s)){const o=Na(i,"width");o!==void 0&&(i.width=o)}if(Wa(n))if(i.style.height==="")i.height=i.width/(e||2);else{const o=Na(i,"height");o!==void 0&&(i.height=o)}return i}const Vc=qf?{passive:!0}:!1;function Dp(i,e,t){i&&i.addEventListener(e,t,Vc)}function Bp(i,e,t){i&&i.canvas&&i.canvas.removeEventListener(e,t,Vc)}function Pp(i,e){const t=Op[i.type]||i.type,{x:n,y:s}=Ot(i,e);return{type:t,chart:e,native:i,x:n!==void 0?n:null,y:s!==void 0?s:null}}function hs(i,e){for(const t of i)if(t===e||t.contains(e))return!0}function Fp(i,e,t){const n=i.canvas,s=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||hs(a.addedNodes,n),r=r&&!hs(a.removedNodes,n);r&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}function Rp(i,e,t){const n=i.canvas,s=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||hs(a.removedNodes,n),r=r&&!hs(a.addedNodes,n);r&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}const ci=new Map;let Ka=0;function Wc(){const i=window.devicePixelRatio;i!==Ka&&(Ka=i,ci.forEach((e,t)=>{t.currentDevicePixelRatio!==i&&e()}))}function $p(i,e){ci.size||window.addEventListener("resize",Wc),ci.set(i,e)}function zp(i){ci.delete(i),ci.size||window.removeEventListener("resize",Wc)}function jp(i,e,t){const n=i.canvas,s=n&&gr(n);if(!s)return;const o=_c((a,l)=>{const c=s.clientWidth;t(a,l),c<s.clientWidth&&t()},window),r=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||o(c,u)});return r.observe(s),$p(i,o),r}function oo(i,e,t){t&&t.disconnect(),e==="resize"&&zp(i)}function Up(i,e,t){const n=i.canvas,s=_c(o=>{i.ctx!==null&&t(Pp(o,i))},i);return Dp(n,e,s),s}class Hp extends Hc{acquireContext(e,t){const n=e&&e.getContext&&e.getContext("2d");return n&&n.canvas===e?(Lp(e,t),n):null}releaseContext(e){const t=e.canvas;if(!t[Ji])return!1;const n=t[Ji].initial;["height","width"].forEach(o=>{const r=n[o];fe(r)?t.removeAttribute(o):t.setAttribute(o,r)});const s=n.style||{};return Object.keys(s).forEach(o=>{t.style[o]=s[o]}),t.width=t.width,delete t[Ji],!0}addEventListener(e,t,n){this.removeEventListener(e,t);const s=e.$proxies||(e.$proxies={}),r={attach:Fp,detach:Rp,resize:jp}[t]||Up;s[t]=r(e,t,n)}removeEventListener(e,t){const n=e.$proxies||(e.$proxies={}),s=n[t];if(!s)return;({attach:oo,detach:oo,resize:oo}[t]||Bp)(e,t,s),n[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,s){return Kf(e,t,n,s)}isAttached(e){const t=e&&gr(e);return!!(t&&t.isConnected)}}function Vp(i){return!mr()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Np:Hp}class xt{constructor(){M(this,"x");M(this,"y");M(this,"active",!1);M(this,"options");M(this,"$animations")}tooltipPosition(e){const{x:t,y:n}=this.getProps(["x","y"],e);return{x:t,y:n}}hasValue(){return ri(this.x)&&ri(this.y)}getProps(e,t){const n=this.$animations;if(!t||!n)return this;const s={};return e.forEach(o=>{s[o]=n[o]&&n[o].active()?n[o]._to:this[o]}),s}}M(xt,"defaults",{}),M(xt,"defaultRoutes");function Wp(i,e){const t=i.options.ticks,n=Kp(i),s=Math.min(t.maxTicksLimit||n,n),o=t.major.enabled?Gp(e):[],r=o.length,a=o[0],l=o[r-1],c=[];if(r>s)return Yp(e,c,o,r/s),c;const u=qp(o,e,s);if(r>0){let d,h;const f=r>1?Math.round((l-a)/(r-1)):null;for(Pi(e,c,u,fe(f)?0:a-f,a),d=0,h=r-1;d<h;d++)Pi(e,c,u,o[d],o[d+1]);return Pi(e,c,u,l,fe(f)?e.length:l+f),c}return Pi(e,c,u),c}function Kp(i){const e=i.options.offset,t=i._tickSize(),n=i._length/t+(e?0:1),s=i._maxLength/t;return Math.floor(Math.min(n,s))}function qp(i,e,t){const n=Jp(i),s=e.length/t;if(!n)return Math.max(s,1);const o=Hh(n);for(let r=0,a=o.length-1;r<a;r++){const l=o[r];if(l>s)return l}return Math.max(s,1)}function Gp(i){const e=[];let t,n;for(t=0,n=i.length;t<n;t++)i[t].major&&e.push(t);return e}function Yp(i,e,t,n){let s=0,o=t[0],r;for(n=Math.ceil(n),r=0;r<i.length;r++)r===o&&(e.push(i[r]),s++,o=t[s*n])}function Pi(i,e,t,n,s){const o=q(n,0),r=Math.min(q(s,i.length),i.length);let a=0,l,c,u;for(t=Math.ceil(t),s&&(l=s-n,t=l/Math.floor(l/t)),u=o;u<0;)a++,u=Math.round(o+a*t);for(c=Math.max(o,0);c<r;c++)c===u&&(e.push(i[c]),a++,u=Math.round(o+a*t))}function Jp(i){const e=i.length;let t,n;if(e<2)return!1;for(n=i[0],t=1;t<e;++t)if(i[t]-i[t-1]!==n)return!1;return n}const Xp=i=>i==="left"?"right":i==="right"?"left":i,qa=(i,e,t)=>e==="top"||e==="left"?i[e]+t:i[e]-t,Ga=(i,e)=>Math.min(e||i,i);function Ya(i,e){const t=[],n=i.length/e,s=i.length;let o=0;for(;o<s;o+=n)t.push(i[Math.floor(o)]);return t}function Zp(i,e,t){const n=i.ticks.length,s=Math.min(e,n-1),o=i._startPixel,r=i._endPixel,a=1e-6;let l=i.getPixelForTick(s),c;if(!(t&&(n===1?c=Math.max(l-o,r-l):e===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<o-a||l>r+a)))return l}function Qp(i,e){Q(i,t=>{const n=t.gc,s=n.length/2;let o;if(s>e){for(o=0;o<s;++o)delete t.data[n[o]];n.splice(0,s)}})}function zn(i){return i.drawTicks?i.tickLength:0}function Ja(i,e){if(!i.display)return 0;const t=Ee(i.font,e),n=Ge(i.padding);return(me(i.text)?i.text.length:1)*t.lineHeight+n.height}function em(i,e){return Kt(i,{scale:e,type:"scale"})}function tm(i,e,t){return Kt(i,{tick:t,index:e,type:"tick"})}function nm(i,e,t){let n=ur(i);return(t&&e!=="right"||!t&&e==="right")&&(n=Xp(n)),n}function im(i,e,t,n){const{top:s,left:o,bottom:r,right:a,chart:l}=i,{chartArea:c,scales:u}=l;let d=0,h,f,g;const y=r-s,v=a-o;if(i.isHorizontal()){if(f=_e(n,o,a),Y(t)){const p=Object.keys(t)[0],E=t[p];g=u[p].getPixelForValue(E)+y-e}else t==="center"?g=(c.bottom+c.top)/2+y-e:g=qa(i,t,e);h=a-o}else{if(Y(t)){const p=Object.keys(t)[0],E=t[p];f=u[p].getPixelForValue(E)-v+e}else t==="center"?f=(c.left+c.right)/2-v+e:f=qa(i,t,e);g=_e(n,r,s),d=t==="left"?-Ze:Ze}return{titleX:f,titleY:g,maxWidth:h,rotation:d}}class vn extends xt{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:s}=this;return e=st(e,Number.POSITIVE_INFINITY),t=st(t,Number.NEGATIVE_INFINITY),n=st(n,Number.POSITIVE_INFINITY),s=st(s,Number.NEGATIVE_INFINITY),{min:st(e,n),max:st(t,s),minDefined:Te(e),maxDefined:Te(t)}}getMinMax(e){let{min:t,max:n,minDefined:s,maxDefined:o}=this.getUserBounds(),r;if(s&&o)return{min:t,max:n};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)r=a[l].controller.getMinMax(this,e),s||(t=Math.min(t,r.min)),o||(n=Math.max(n,r.max));return t=o&&t>n?n:t,n=s&&t>n?t:n,{min:st(t,st(n,t)),max:st(n,st(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){oe(this.options.beforeUpdate,[this])}update(e,t,n){const{beginAtZero:s,grace:o,ticks:r}=this.options,a=r.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Ef(this,o,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Ya(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=Wp(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){oe(this.options.afterUpdate,[this])}beforeSetDimensions(){oe(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){oe(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),oe(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){oe(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let n,s,o;for(n=0,s=e.length;n<s;n++)o=e[n],o.label=oe(t.callback,[o.value,n,e],this)}afterTickToLabelConversion(){oe(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){oe(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,n=Ga(this.ticks.length,e.ticks.maxTicksLimit),s=t.minRotation||0,o=t.maxRotation;let r=s,a,l,c;if(!this._isVisible()||!t.display||s>=o||n<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),d=u.widest.width,h=u.highest.height,f=Ve(this.chart.width-d,0,this.maxWidth);a=e.offset?this.maxWidth/n:f/(n-1),d+6>a&&(a=f/(n-(e.offset?.5:1)),l=this.maxHeight-zn(e.grid)-t.padding-Ja(e.title,this.chart.options.font),c=Math.sqrt(d*d+h*h),r=Kh(Math.min(Math.asin(Ve((u.highest.height+6)/a,-1,1)),Math.asin(Ve(l/c,-1,1))-Math.asin(Ve(h/c,-1,1)))),r=Math.max(s,Math.min(o,r))),this.labelRotation=r}afterCalculateLabelRotation(){oe(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){oe(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:n,title:s,grid:o}}=this,r=this._isVisible(),a=this.isHorizontal();if(r){const l=Ja(s,t.options.font);if(a?(e.width=this.maxWidth,e.height=zn(o)+l):(e.height=this.maxHeight,e.width=zn(o)+l),n.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:h}=this._getLabelSizes(),f=n.padding*2,g=Bt(this.labelRotation),y=Math.cos(g),v=Math.sin(g);if(a){const p=n.mirror?0:v*d.width+y*h.height;e.height=Math.min(this.maxHeight,e.height+p+f)}else{const p=n.mirror?0:y*d.width+v*h.height;e.width=Math.min(this.maxWidth,e.width+p+f)}this._calculatePadding(c,u,v,y)}}this._handleMargins(),a?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,s){const{ticks:{align:o,padding:r},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,f=0;l?c?(h=s*e.width,f=n*t.height):(h=n*e.height,f=s*t.width):o==="start"?f=t.width:o==="end"?h=e.width:o!=="inner"&&(h=e.width/2,f=t.width/2),this.paddingLeft=Math.max((h-u+r)*this.width/(this.width-u),0),this.paddingRight=Math.max((f-d+r)*this.width/(this.width-d),0)}else{let u=t.height/2,d=e.height/2;o==="start"?(u=0,d=e.height):o==="end"&&(u=t.height,d=0),this.paddingTop=u+r,this.paddingBottom=d+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){oe(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)fe(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let n=this.ticks;t<n.length&&(n=Ya(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){const{ctx:s,_longestTextCache:o}=this,r=[],a=[],l=Math.floor(t/Ga(t,n));let c=0,u=0,d,h,f,g,y,v,p,E,w,m,S;for(d=0;d<t;d+=l){if(g=e[d].label,y=this._resolveTickFontOptions(d),s.font=v=y.string,p=o[v]=o[v]||{data:{},gc:[]},E=y.lineHeight,w=m=0,!fe(g)&&!me(g))w=Ta(s,p.data,p.gc,w,g),m=E;else if(me(g))for(h=0,f=g.length;h<f;++h)S=g[h],!fe(S)&&!me(S)&&(w=Ta(s,p.data,p.gc,w,S),m+=E);r.push(w),a.push(m),c=Math.max(w,c),u=Math.max(m,u)}Qp(o,t);const L=r.indexOf(c),D=a.indexOf(u),N=_=>({width:r[_]||0,height:a[_]||0});return{first:N(0),last:N(t-1),widest:N(L),highest:N(D),widths:r,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return Yh(this._alignToPixels?It(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const n=t[e];return n.$context||(n.$context=tm(this.getContext(),e,n))}return this.$context||(this.$context=em(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=Bt(this.labelRotation),n=Math.abs(Math.cos(t)),s=Math.abs(Math.sin(t)),o=this._getLabelSizes(),r=e.autoSkipPadding||0,a=o?o.widest.width+r:0,l=o?o.highest.height+r:0;return this.isHorizontal()?l*n>a*s?a/n:l/s:l*s<a*n?l/n:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,n=this.chart,s=this.options,{grid:o,position:r,border:a}=s,l=o.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),h=zn(o),f=[],g=a.setContext(this.getContext()),y=g.display?g.width:0,v=y/2,p=function(z){return It(n,z,y)};let E,w,m,S,L,D,N,_,$,j,x,C;if(r==="top")E=p(this.bottom),D=this.bottom-h,_=E-v,j=p(e.top)+v,C=e.bottom;else if(r==="bottom")E=p(this.top),j=e.top,C=p(e.bottom)-v,D=E+v,_=this.top+h;else if(r==="left")E=p(this.right),L=this.right-h,N=E-v,$=p(e.left)+v,x=e.right;else if(r==="right")E=p(this.left),$=e.left,x=p(e.right)-v,L=E+v,N=this.left+h;else if(t==="x"){if(r==="center")E=p((e.top+e.bottom)/2+.5);else if(Y(r)){const z=Object.keys(r)[0],B=r[z];E=p(this.chart.scales[z].getPixelForValue(B))}j=e.top,C=e.bottom,D=E+v,_=D+h}else if(t==="y"){if(r==="center")E=p((e.left+e.right)/2);else if(Y(r)){const z=Object.keys(r)[0],B=r[z];E=p(this.chart.scales[z].getPixelForValue(B))}L=E-v,N=L-h,$=e.left,x=e.right}const A=q(s.ticks.maxTicksLimit,d),T=Math.max(1,Math.ceil(d/A));for(w=0;w<d;w+=T){const z=this.getContext(w),B=o.setContext(z),F=a.setContext(z),H=B.lineWidth,ee=B.color,G=F.dash||[],we=F.dashOffset,se=B.tickWidth,Re=B.tickColor,X=B.tickBorderDash||[],Ce=B.tickBorderDashOffset;m=Zp(this,w,l),m!==void 0&&(S=It(n,m,H),c?L=N=$=x=S:D=_=j=C=S,f.push({tx1:L,ty1:D,tx2:N,ty2:_,x1:$,y1:j,x2:x,y2:C,width:H,color:ee,borderDash:G,borderDashOffset:we,tickWidth:se,tickColor:Re,tickBorderDash:X,tickBorderDashOffset:Ce}))}return this._ticksLength=d,this._borderValue=E,f}_computeLabelItems(e){const t=this.axis,n=this.options,{position:s,ticks:o}=n,r=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:d}=o,h=zn(n.grid),f=h+u,g=d?-u:f,y=-Bt(this.labelRotation),v=[];let p,E,w,m,S,L,D,N,_,$,j,x,C="middle";if(s==="top")L=this.bottom-g,D=this._getXAxisLabelAlignment();else if(s==="bottom")L=this.top+g,D=this._getXAxisLabelAlignment();else if(s==="left"){const T=this._getYAxisLabelAlignment(h);D=T.textAlign,S=T.x}else if(s==="right"){const T=this._getYAxisLabelAlignment(h);D=T.textAlign,S=T.x}else if(t==="x"){if(s==="center")L=(e.top+e.bottom)/2+f;else if(Y(s)){const T=Object.keys(s)[0],z=s[T];L=this.chart.scales[T].getPixelForValue(z)+f}D=this._getXAxisLabelAlignment()}else if(t==="y"){if(s==="center")S=(e.left+e.right)/2-f;else if(Y(s)){const T=Object.keys(s)[0],z=s[T];S=this.chart.scales[T].getPixelForValue(z)}D=this._getYAxisLabelAlignment(h).textAlign}t==="y"&&(l==="start"?C="top":l==="end"&&(C="bottom"));const A=this._getLabelSizes();for(p=0,E=a.length;p<E;++p){w=a[p],m=w.label;const T=o.setContext(this.getContext(p));N=this.getPixelForTick(p)+o.labelOffset,_=this._resolveTickFontOptions(p),$=_.lineHeight,j=me(m)?m.length:1;const z=j/2,B=T.color,F=T.textStrokeColor,H=T.textStrokeWidth;let ee=D;r?(S=N,D==="inner"&&(p===E-1?ee=this.options.reverse?"left":"right":p===0?ee=this.options.reverse?"right":"left":ee="center"),s==="top"?c==="near"||y!==0?x=-j*$+$/2:c==="center"?x=-A.highest.height/2-z*$+$:x=-A.highest.height+$/2:c==="near"||y!==0?x=$/2:c==="center"?x=A.highest.height/2-z*$:x=A.highest.height-j*$,d&&(x*=-1),y!==0&&!T.showLabelBackdrop&&(S+=$/2*Math.sin(y))):(L=N,x=(1-j)*$/2);let G;if(T.showLabelBackdrop){const we=Ge(T.backdropPadding),se=A.heights[p],Re=A.widths[p];let X=x-we.top,Ce=0-we.left;switch(C){case"middle":X-=se/2;break;case"bottom":X-=se;break}switch(D){case"center":Ce-=Re/2;break;case"right":Ce-=Re;break;case"inner":p===E-1?Ce-=Re:p>0&&(Ce-=Re/2);break}G={left:Ce,top:X,width:Re+we.width,height:se+we.height,color:T.backdropColor}}v.push({label:m,font:_,textOffset:x,options:{rotation:y,color:B,strokeColor:F,strokeWidth:H,textAlign:ee,textBaseline:C,translation:[S,L],backdrop:G}})}return v}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-Bt(this.labelRotation))return e==="top"?"left":"right";let s="center";return t.align==="start"?s="left":t.align==="end"?s="right":t.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:n,mirror:s,padding:o}}=this.options,r=this._getLabelSizes(),a=e+o,l=r.widest.width;let c,u;return t==="left"?s?(u=this.right+o,n==="near"?c="left":n==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,n==="near"?c="right":n==="center"?(c="center",u-=l/2):(c="left",u=this.left)):t==="right"?s?(u=this.left+o,n==="near"?c="right":n==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,n==="near"?c="left":n==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:n,top:s,width:o,height:r}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,s,o,r),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const s=this.ticks.findIndex(o=>o.value===e);return s>=0?t.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const t=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let o,r;const a=(l,c,u)=>{!u.width||!u.color||(n.save(),n.lineWidth=u.width,n.strokeStyle=u.color,n.setLineDash(u.borderDash||[]),n.lineDashOffset=u.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(t.display)for(o=0,r=s.length;o<r;++o){const l=s[o];t.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),t.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:n,grid:s}}=this,o=n.setContext(this.getContext()),r=n.display?o.width:0;if(!r)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,d,h;this.isHorizontal()?(c=It(e,this.left,r)-r/2,u=It(e,this.right,a)+a/2,d=h=l):(d=It(e,this.top,r)-r/2,h=It(e,this.bottom,a)+a/2,c=u=l),t.save(),t.lineWidth=o.width,t.strokeStyle=o.color,t.beginPath(),t.moveTo(c,d),t.lineTo(u,h),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const n=this.ctx,s=this._computeLabelArea();s&&ws(n,s);const o=this.getLabelItems(e);for(const r of o){const a=r.options,l=r.font,c=r.label,u=r.textOffset;li(n,c,0,u,l,a)}s&&ks(n)}drawTitle(){const{ctx:e,options:{position:t,title:n,reverse:s}}=this;if(!n.display)return;const o=Ee(n.font),r=Ge(n.padding),a=n.align;let l=o.lineHeight/2;t==="bottom"||t==="center"||Y(t)?(l+=r.bottom,me(n.text)&&(l+=o.lineHeight*(n.text.length-1))):l+=r.top;const{titleX:c,titleY:u,maxWidth:d,rotation:h}=im(this,l,t,a);li(e,n.text,0,0,o,{color:n.color,maxWidth:d,rotation:h,textAlign:nm(a,t,s),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,n=q(e.grid&&e.grid.z,-1),s=q(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==vn.prototype.draw?[{z:t,draw:o=>{this.draw(o)}}]:[{z:n,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:t,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[];let o,r;for(o=0,r=t.length;o<r;++o){const a=t[o];a[n]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return Ee(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Fi{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let n;rm(t)&&(n=this.register(t));const s=this.items,o=e.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+e);return o in s||(s[o]=e,sm(e,r,n),this.override&&pe.override(e.id,e.overrides)),r}get(e){return this.items[e]}unregister(e){const t=this.items,n=e.id,s=this.scope;n in t&&delete t[n],s&&n in pe[s]&&(delete pe[s][n],this.override&&delete Ht[n])}}function sm(i,e,t){const n=oi(Object.create(null),[t?pe.get(t):{},pe.get(e),i.defaults]);pe.set(e,n),i.defaultRoutes&&om(e,i.defaultRoutes),i.descriptors&&pe.describe(e,i.descriptors)}function om(i,e){Object.keys(e).forEach(t=>{const n=t.split("."),s=n.pop(),o=[i].concat(n).join("."),r=e[t].split("."),a=r.pop(),l=r.join(".");pe.route(o,s,l,a)})}function rm(i){return"id"in i&&"defaults"in i}class am{constructor(){this.controllers=new Fi(ni,"datasets",!0),this.elements=new Fi(xt,"elements"),this.plugins=new Fi(Object,"plugins"),this.scales=new Fi(vn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,n){[...t].forEach(s=>{const o=n||this._getRegistryForType(s);n||o.isForType(s)||o===this.plugins&&s.id?this._exec(e,o,s):Q(s,r=>{const a=n||this._getRegistryForType(r);this._exec(e,a,r)})})}_exec(e,t,n){const s=lr(e);oe(n["before"+s],[],n),t[e](n),oe(n["after"+s],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){const s=t.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+n+".");return s}}var at=new am;class lm{constructor(){this._init=[]}notify(e,t,n,s){t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const o=s?this._descriptors(e).filter(s):this._descriptors(e),r=this._notify(o,e,t,n);return t==="afterDestroy"&&(this._notify(o,e,"stop"),this._notify(this._init,e,"uninstall")),r}_notify(e,t,n,s){s=s||{};for(const o of e){const r=o.plugin,a=r[n],l=[t,s,o.options];if(oe(a,l,r)===!1&&s.cancelable)return!1}return!0}invalidate(){fe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const n=e&&e.config,s=q(n.options&&n.options.plugins,{}),o=cm(n);return s===!1&&!t?[]:dm(e,o,s,t)}_notifyStateChanges(e){const t=this._oldCache||[],n=this._cache,s=(o,r)=>o.filter(a=>!r.some(l=>a.plugin.id===l.plugin.id));this._notify(s(t,n),e,"stop"),this._notify(s(n,t),e,"start")}}function cm(i){const e={},t=[],n=Object.keys(at.plugins.items);for(let o=0;o<n.length;o++)t.push(at.getPlugin(n[o]));const s=i.plugins||[];for(let o=0;o<s.length;o++){const r=s[o];t.indexOf(r)===-1&&(t.push(r),e[r.id]=!0)}return{plugins:t,localIds:e}}function um(i,e){return!e&&i===!1?null:i===!0?{}:i}function dm(i,{plugins:e,localIds:t},n,s){const o=[],r=i.getContext();for(const a of e){const l=a.id,c=um(n[l],s);c!==null&&o.push({plugin:a,options:hm(i.config,{plugin:a,local:t[l]},c,r)})}return o}function hm(i,{plugin:e,local:t},n,s){const o=i.pluginScopeKeys(e),r=i.getOptionScopes(n,o);return t&&e.defaults&&r.push(e.defaults),i.createResolver(r,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Bo(i,e){const t=pe.datasets[i]||{};return((e.datasets||{})[i]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function fm(i,e){let t=i;return i==="_index_"?t=e:i==="_value_"&&(t=e==="x"?"y":"x"),t}function pm(i,e){return i===e?"_index_":"_value_"}function Xa(i){if(i==="x"||i==="y"||i==="r")return i}function mm(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function Po(i,...e){if(Xa(i))return i;for(const t of e){const n=t.axis||mm(t.position)||i.length>1&&Xa(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Za(i,e,t){if(t[e+"AxisID"]===i)return{axis:e}}function gm(i,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(t.length)return Za(i,"x",t[0])||Za(i,"y",t[0])}return{}}function bm(i,e){const t=Ht[i.type]||{scales:{}},n=e.scales||{},s=Bo(i.type,e),o=Object.create(null);return Object.keys(n).forEach(r=>{const a=n[r];if(!Y(a))return console.error(`Invalid scale configuration for scale: ${r}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=Po(r,a,gm(r,i),pe.scales[a.type]),c=pm(l,s),u=t.scales||{};o[r]=Xn(Object.create(null),[{axis:l},a,u[l],u[c]])}),i.data.datasets.forEach(r=>{const a=r.type||i.type,l=r.indexAxis||Bo(a,e),u=(Ht[a]||{}).scales||{};Object.keys(u).forEach(d=>{const h=fm(d,l),f=r[h+"AxisID"]||h;o[f]=o[f]||Object.create(null),Xn(o[f],[{axis:h},n[f],u[d]])})}),Object.keys(o).forEach(r=>{const a=o[r];Xn(a,[pe.scales[a.type],pe.scale])}),o}function Kc(i){const e=i.options||(i.options={});e.plugins=q(e.plugins,{}),e.scales=bm(i,e)}function qc(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function ym(i){return i=i||{},i.data=qc(i.data),Kc(i),i}const Qa=new Map,Gc=new Set;function Ri(i,e){let t=Qa.get(i);return t||(t=e(),Qa.set(i,t),Gc.add(t)),t}const jn=(i,e,t)=>{const n=ls(e,t);n!==void 0&&i.add(n)};class vm{constructor(e){this._config=ym(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=qc(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Kc(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Ri(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return Ri(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return Ri(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,n=this.type;return Ri(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const n=this._scopeCache;let s=n.get(e);return(!s||t)&&(s=new Map,n.set(e,s)),s}getOptionScopes(e,t,n){const{options:s,type:o}=this,r=this._cachedScopes(e,n),a=r.get(t);if(a)return a;const l=new Set;t.forEach(u=>{e&&(l.add(e),u.forEach(d=>jn(l,e,d))),u.forEach(d=>jn(l,s,d)),u.forEach(d=>jn(l,Ht[o]||{},d)),u.forEach(d=>jn(l,pe,d)),u.forEach(d=>jn(l,Oo,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Gc.has(t)&&r.set(t,c),c}chartOptionScopes(){const{options:e,type:t}=this;return[e,Ht[t]||{},pe.datasets[t]||{},{type:t},pe,Oo]}resolveNamedOptions(e,t,n,s=[""]){const o={$shared:!0},{resolver:r,subPrefixes:a}=el(this._resolverCache,e,s);let l=r;if(wm(r,t)){o.$shared=!1,n=St(n)?n():n;const c=this.createResolver(e,n,a);l=mn(r,n,c)}for(const c of t)o[c]=l[c];return o}createResolver(e,t,n=[""],s){const{resolver:o}=el(this._resolverCache,e,n);return Y(t)?mn(o,t,void 0,s):o}}function el(i,e,t){let n=i.get(e);n||(n=new Map,i.set(e,n));const s=t.join();let o=n.get(s);return o||(o={resolver:hr(e,t),subPrefixes:t.filter(a=>!a.toLowerCase().includes("hover"))},n.set(s,o)),o}const xm=i=>Y(i)&&Object.getOwnPropertyNames(i).some(e=>St(i[e]));function wm(i,e){const{isScriptable:t,isIndexable:n}=Ic(i);for(const s of e){const o=t(s),r=n(s),a=(r||o)&&i[s];if(o&&(St(a)||xm(a))||r&&me(a))return!0}return!1}var km="4.4.7";const _m=["top","bottom","left","right","chartArea"];function tl(i,e){return i==="top"||i==="bottom"||_m.indexOf(i)===-1&&e==="x"}function nl(i,e){return function(t,n){return t[i]===n[i]?t[e]-n[e]:t[i]-n[i]}}function il(i){const e=i.chart,t=e.options.animation;e.notifyPlugins("afterRender"),oe(t&&t.onComplete,[i],e)}function Em(i){const e=i.chart,t=e.options.animation;oe(t&&t.onProgress,[i],e)}function Yc(i){return mr()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const Xi={},sl=i=>{const e=Yc(i);return Object.values(Xi).filter(t=>t.canvas===e).pop()};function Sm(i,e,t){const n=Object.keys(i);for(const s of n){const o=+s;if(o>=e){const r=i[s];delete i[s],(t>0||o>e)&&(i[o+t]=r)}}}function Tm(i,e,t,n){return!t||i.type==="mouseout"?null:n?e:i}function $i(i,e,t){return i.options.clip?i[t]:e[t]}function Cm(i,e){const{xScale:t,yScale:n}=i;return t&&n?{left:$i(t,e,"left"),right:$i(t,e,"right"),top:$i(n,e,"top"),bottom:$i(n,e,"bottom")}:e}class bt{static register(...e){at.add(...e),ol()}static unregister(...e){at.remove(...e),ol()}constructor(e,t){const n=this.config=new vm(t),s=Yc(e),o=sl(s);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const r=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||Vp(s)),this.platform.updateConfig(n);const a=this.platform.acquireContext(s,r.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=Dh(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new lm,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ef(d=>this.update(d),r.resizeDelay||0),this._dataChanges=[],Xi[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}pt.listen(this,"complete",il),pt.listen(this,"progress",Em),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:s,_aspectRatio:o}=this;return fe(e)?t&&o?o:s?n/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return at}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Ma(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ca(this.canvas,this.ctx),this}stop(){return pt.stop(this),this}resize(e,t){pt.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const n=this.options,s=this.canvas,o=n.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(s,e,t,o),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,Ma(this,a,!0)&&(this.notifyPlugins("resize",{size:r}),oe(n.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};Q(t,(n,s)=>{n.id=s})}buildOrUpdateScales(){const e=this.options,t=e.scales,n=this.scales,s=Object.keys(n).reduce((r,a)=>(r[a]=!1,r),{});let o=[];t&&(o=o.concat(Object.keys(t).map(r=>{const a=t[r],l=Po(r,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),Q(o,r=>{const a=r.options,l=a.id,c=Po(l,a),u=q(a.type,r.dtype);(a.position===void 0||tl(a.position,c)!==tl(r.dposition))&&(a.position=r.dposition),s[l]=!0;let d=null;if(l in n&&n[l].type===u)d=n[l];else{const h=at.getScale(u);d=new h({id:l,type:u,ctx:this.ctx,chart:this}),n[d.id]=d}d.init(a,e)}),Q(s,(r,a)=>{r||delete n[a]}),Q(n,r=>{We.configure(this,r,r.options),We.addBox(this,r)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((s,o)=>s.index-o.index),n>t){for(let s=t;s<n;++s)this._destroyDatasetMeta(s);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(nl("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((n,s)=>{t.filter(o=>o===n._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let n,s;for(this._removeUnreferencedMetasets(),n=0,s=t.length;n<s;n++){const o=t[n];let r=this.getDatasetMeta(n);const a=o.type||this.config.type;if(r.type&&r.type!==a&&(this._destroyDatasetMeta(n),r=this.getDatasetMeta(n)),r.type=a,r.indexAxis=o.indexAxis||Bo(a,this.options),r.order=o.order||0,r.index=n,r.label=""+o.label,r.visible=this.isDatasetVisible(n),r.controller)r.controller.updateIndex(n),r.controller.linkScales();else{const l=at.getController(a),{datasetElementType:c,dataElementType:u}=pe.datasets[a];Object.assign(l,{dataElementType:at.getElement(u),datasetElementType:c&&at.getElement(c)}),r.controller=new l(this,n),e.push(r.controller)}}return this._updateMetasets(),e}_resetElements(){Q(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:d}=this.getDatasetMeta(c),h=!s&&o.indexOf(d)===-1;d.buildOrUpdateElements(h),r=Math.max(+d.getMaxOverflow(),r)}r=this._minPadding=n.layout.autoPadding?r:0,this._updateLayout(r),s||Q(o,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(nl("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Q(this.scales,e=>{We.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),n=new Set(e.events);(!ba(t,n)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:n,start:s,count:o}of t){const r=n==="_removeElements"?-o:o;Sm(e,s,r)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,n=o=>new Set(e.filter(r=>r[0]===o).map((r,a)=>a+","+r.splice(1).join(","))),s=n(0);for(let o=1;o<t;o++)if(!ba(s,n(o)))return;return Array.from(s).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;We.update(this,this.width,this.height,e);const t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],Q(this.boxes,s=>{n&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,o)=>{s._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,n=this.data.datasets.length;t<n;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,St(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const n=this.getDatasetMeta(e),s={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(n.controller._update(t),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(pt.has(this)?this.attached&&!pt.running(this)&&pt.start(this):(this.draw(),il({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:n,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,n=[];let s,o;for(s=0,o=t.length;s<o;++s){const r=t[s];(!e||r.visible)&&n.push(r)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,n=e._clip,s=!n.disabled,o=Cm(e,this.chartArea),r={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(s&&ws(t,{left:n.left===!1?0:o.left-n.left,right:n.right===!1?this.width:o.right+n.right,top:n.top===!1?0:o.top-n.top,bottom:n.bottom===!1?this.height:o.bottom+n.bottom}),e.controller.draw(),s&&ks(t),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(e){return ai(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,s){const o=_p.modes[t];return typeof o=="function"?o(this,e,n,s):[]}getDatasetMeta(e){const t=this.data.datasets[e],n=this._metasets;let s=n.filter(o=>o&&o._dataset===t).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(s)),s}getContext(){return this.$context||(this.$context=Kt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const n=this.getDatasetMeta(e);return typeof n.hidden=="boolean"?!n.hidden:!t.hidden}setDatasetVisibility(e,t){const n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){const s=n?"show":"hide",o=this.getDatasetMeta(e),r=o.controller._resolveAnimations(void 0,s);cs(t)?(o.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),r.update(o,{visible:n}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),pt.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Ca(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Xi[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,n=(o,r)=>{t.addEventListener(this,o,r),e[o]=r},s=(o,r,a)=>{o.offsetX=r,o.offsetY=a,this._eventHandler(o)};Q(this.options.events,o=>n(o,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,n=(l,c)=>{t.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(t.removeEventListener(this,l,c),delete e[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const a=()=>{s("attach",a),this.attached=!0,this.resize(),n("resize",o),n("detach",r)};r=()=>{this.attached=!1,s("resize",o),this._stop(),this._resize(0,0),n("attach",a)},t.isAttached(this.canvas)?a():r()}unbindEvents(){Q(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},Q(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){const s=n?"set":"remove";let o,r,a,l;for(t==="dataset"&&(o=this.getDatasetMeta(e[0].datasetIndex),o.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){r=e[a];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[s+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],n=e.map(({datasetIndex:o,index:r})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[r],index:r}});!rs(n,t)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){const s=this.options.hover,o=(l,c)=>l.filter(u=>!c.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),r=o(t,e),a=n?e:o(e,t);r.length&&this.updateHoverStyle(r,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,t){const n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},s=r=>(r.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",n,s)===!1)return;const o=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,s),(o||n.changed)&&this.render(),this}_handleEvent(e,t,n){const{_active:s=[],options:o}=this,r=t,a=this._getActiveElements(e,s,n,r),l=zh(e),c=Tm(e,this._lastEvent,n,l);n&&(this._lastEvent=null,oe(o.onHover,[e,a,this],this),l&&oe(o.onClick,[e,a,this],this));const u=!rs(a,s);return(u||t)&&(this._active=a,this._updateHoverStyles(a,s,t)),this._lastEvent=c,u}_getActiveElements(e,t,n,s){if(e.type==="mouseout")return[];if(!n)return t;const o=this.options.hover;return this.getElementsAtEventForMode(e,o.mode,o,s)}}M(bt,"defaults",pe),M(bt,"instances",Xi),M(bt,"overrides",Ht),M(bt,"registry",at),M(bt,"version",km),M(bt,"getChart",sl);function ol(){return Q(bt.instances,i=>i._plugins.invalidate())}function Jc(i,e,t=e){i.lineCap=q(t.borderCapStyle,e.borderCapStyle),i.setLineDash(q(t.borderDash,e.borderDash)),i.lineDashOffset=q(t.borderDashOffset,e.borderDashOffset),i.lineJoin=q(t.borderJoinStyle,e.borderJoinStyle),i.lineWidth=q(t.borderWidth,e.borderWidth),i.strokeStyle=q(t.borderColor,e.borderColor)}function Am(i,e,t){i.lineTo(t.x,t.y)}function Im(i){return i.stepped?pf:i.tension||i.cubicInterpolationMode==="monotone"?mf:Am}function Xc(i,e,t={}){const n=i.length,{start:s=0,end:o=n-1}=t,{start:r,end:a}=e,l=Math.max(s,r),c=Math.min(o,a),u=s<r&&o<r||s>a&&o>a;return{count:n,start:l,loop:e.loop,ilen:c<l&&!u?n+c-l:c-l}}function Mm(i,e,t,n){const{points:s,options:o}=e,{count:r,start:a,loop:l,ilen:c}=Xc(s,t,n),u=Im(o);let{move:d=!0,reverse:h}=n||{},f,g,y;for(f=0;f<=c;++f)g=s[(a+(h?c-f:f))%r],!g.skip&&(d?(i.moveTo(g.x,g.y),d=!1):u(i,y,g,h,o.stepped),y=g);return l&&(g=s[(a+(h?c:0))%r],u(i,y,g,h,o.stepped)),!!l}function Nm(i,e,t,n){const s=e.points,{count:o,start:r,ilen:a}=Xc(s,t,n),{move:l=!0,reverse:c}=n||{};let u=0,d=0,h,f,g,y,v,p;const E=m=>(r+(c?a-m:m))%o,w=()=>{y!==v&&(i.lineTo(u,v),i.lineTo(u,y),i.lineTo(u,p))};for(l&&(f=s[E(0)],i.moveTo(f.x,f.y)),h=0;h<=a;++h){if(f=s[E(h)],f.skip)continue;const m=f.x,S=f.y,L=m|0;L===g?(S<y?y=S:S>v&&(v=S),u=(d*u+m)/++d):(w(),i.lineTo(m,S),g=L,d=0,y=v=S),p=S}w()}function Fo(i){const e=i.options,t=e.borderDash&&e.borderDash.length;return!i._decimated&&!i._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?Nm:Mm}function Om(i){return i.stepped?Gf:i.tension||i.cubicInterpolationMode==="monotone"?Yf:Lt}function Lm(i,e,t,n){let s=e._path;s||(s=e._path=new Path2D,e.path(s,t,n)&&s.closePath()),Jc(i,e.options),i.stroke(s)}function Dm(i,e,t,n){const{segments:s,options:o}=e,r=Fo(e);for(const a of s)Jc(i,o,a.style),i.beginPath(),r(i,e,a,{start:t,end:t+n-1})&&i.closePath(),i.stroke()}const Bm=typeof Path2D=="function";function Pm(i,e,t,n){Bm&&!e.options.segment?Lm(i,e,t,n):Dm(i,e,t,n)}class kt extends xt{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const s=n.spanGaps?this._loop:this._fullLoop;zf(this._points,n,e,s,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=tp(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){const n=this.options,s=e[t],o=this.points,r=Rc(this,{property:t,start:s,end:s});if(!r.length)return;const a=[],l=Om(n);let c,u;for(c=0,u=r.length;c<u;++c){const{start:d,end:h}=r[c],f=o[d],g=o[h];if(f===g){a.push(f);continue}const y=Math.abs((s-f[t])/(g[t]-f[t])),v=l(f,g,y,n.stepped);v[t]=e[t],a.push(v)}return a.length===1?a[0]:a}pathSegment(e,t,n){return Fo(this)(e,this,t,n)}path(e,t,n){const s=this.segments,o=Fo(this);let r=this._loop;t=t||0,n=n||this.points.length-t;for(const a of s)r&=o(e,this,a,{start:t,end:t+n-1});return!!r}draw(e,t,n,s){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(e.save(),Pm(e,this,n,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}M(kt,"id","line"),M(kt,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),M(kt,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),M(kt,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function rl(i,e,t,n){const s=i.options,{[t]:o}=i.getProps([t],n);return Math.abs(e-o)<s.radius+s.hitRadius}class Zi extends xt{constructor(t){super();M(this,"parsed");M(this,"skip");M(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,s){const o=this.options,{x:r,y:a}=this.getProps(["x","y"],s);return Math.pow(t-r,2)+Math.pow(n-a,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(t,n){return rl(this,t,"x",n)}inYRange(t,n){return rl(this,t,"y",n)}getCenterPoint(t){const{x:n,y:s}=this.getProps(["x","y"],t);return{x:n,y:s}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const s=n&&t.borderWidth||0;return(n+s)*2}draw(t,n){const s=this.options;this.skip||s.radius<.1||!ai(this,n,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,Lo(t,s,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}M(Zi,"id","point"),M(Zi,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),M(Zi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Fm(i,e,t){const n=i.segments,s=i.points,o=e.points,r=[];for(const a of n){let{start:l,end:c}=a;c=yr(l,c,s);const u=Ro(t,s[l],s[c],a.loop);if(!e.segments){r.push({source:a,target:u,start:s[l],end:s[c]});continue}const d=Rc(e,u);for(const h of d){const f=Ro(t,o[h.start],o[h.end],h.loop),g=Fc(a,s,f);for(const y of g)r.push({source:y,target:h,start:{[t]:al(u,f,"start",Math.max)},end:{[t]:al(u,f,"end",Math.min)}})}}return r}function Ro(i,e,t,n){if(n)return;let s=e[i],o=t[i];return i==="angle"&&(s=lt(s),o=lt(o)),{property:i,start:s,end:o}}function Rm(i,e){const{x:t=null,y:n=null}=i||{},s=e.points,o=[];return e.segments.forEach(({start:r,end:a})=>{a=yr(r,a,s);const l=s[r],c=s[a];n!==null?(o.push({x:l.x,y:n}),o.push({x:c.x,y:n})):t!==null&&(o.push({x:t,y:l.y}),o.push({x:t,y:c.y}))}),o}function yr(i,e,t){for(;e>i;e--){const n=t[e];if(!isNaN(n.x)&&!isNaN(n.y))break}return e}function al(i,e,t,n){return i&&e?n(i[t],e[t]):i?i[t]:e?e[t]:0}function Zc(i,e){let t=[],n=!1;return me(i)?(n=!0,t=i):t=Rm(i,e),t.length?new kt({points:t,options:{tension:0},_loop:n,_fullLoop:n}):null}function ll(i){return i&&i.fill!==!1}function $m(i,e,t){let s=i[e].fill;const o=[e];let r;if(!t)return s;for(;s!==!1&&o.indexOf(s)===-1;){if(!Te(s))return s;if(r=i[s],!r)return!1;if(r.visible)return s;o.push(s),s=r.fill}return!1}function zm(i,e,t){const n=Vm(i);if(Y(n))return isNaN(n.value)?!1:n;let s=parseFloat(n);return Te(s)&&Math.floor(s)===s?jm(n[0],e,s,t):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function jm(i,e,t,n){return(i==="-"||i==="+")&&(t=e+t),t===e||t<0||t>=n?!1:t}function Um(i,e){let t=null;return i==="start"?t=e.bottom:i==="end"?t=e.top:Y(i)?t=e.getPixelForValue(i.value):e.getBasePixel&&(t=e.getBasePixel()),t}function Hm(i,e,t){let n;return i==="start"?n=t:i==="end"?n=e.options.reverse?e.min:e.max:Y(i)?n=i.value:n=e.getBaseValue(),n}function Vm(i){const e=i.options,t=e.fill;let n=q(t&&t.target,t);return n===void 0&&(n=!!e.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function Wm(i){const{scale:e,index:t,line:n}=i,s=[],o=n.segments,r=n.points,a=Km(e,t);a.push(Zc({x:null,y:e.bottom},n));for(let l=0;l<o.length;l++){const c=o[l];for(let u=c.start;u<=c.end;u++)qm(s,r[u],a)}return new kt({points:s,options:{}})}function Km(i,e){const t=[],n=i.getMatchingVisibleMetas("line");for(let s=0;s<n.length;s++){const o=n[s];if(o.index===e)break;o.hidden||t.unshift(o.dataset)}return t}function qm(i,e,t){const n=[];for(let s=0;s<t.length;s++){const o=t[s],{first:r,last:a,point:l}=Gm(o,e,"x");if(!(!l||r&&a)){if(r)n.unshift(l);else if(i.push(l),!a)break}}i.push(...n)}function Gm(i,e,t){const n=i.interpolate(e,t);if(!n)return{};const s=n[t],o=i.segments,r=i.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const u=o[c],d=r[u.start][t],h=r[u.end][t];if(on(s,d,h)){a=s===d,l=s===h;break}}return{first:a,last:l,point:n}}class Qc{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){const{x:s,y:o,radius:r}=this;return t=t||{start:0,end:Qe},e.arc(s,o,r,t.end,t.start,!0),!n.bounds}interpolate(e){const{x:t,y:n,radius:s}=this,o=e.angle;return{x:t+Math.cos(o)*s,y:n+Math.sin(o)*s,angle:o}}}function Ym(i){const{chart:e,fill:t,line:n}=i;if(Te(t))return Jm(e,t);if(t==="stack")return Wm(i);if(t==="shape")return!0;const s=Xm(i);return s instanceof Qc?s:Zc(s,n)}function Jm(i,e){const t=i.getDatasetMeta(e);return t&&i.isDatasetVisible(e)?t.dataset:null}function Xm(i){return(i.scale||{}).getPointPositionForValue?Qm(i):Zm(i)}function Zm(i){const{scale:e={},fill:t}=i,n=Um(t,e);if(Te(n)){const s=e.isHorizontal();return{x:s?n:null,y:s?null:n}}return null}function Qm(i){const{scale:e,fill:t}=i,n=e.options,s=e.getLabels().length,o=n.reverse?e.max:e.min,r=Hm(t,e,o),a=[];if(n.grid.circular){const l=e.getPointPositionForValue(0,o);return new Qc({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(r)})}for(let l=0;l<s;++l)a.push(e.getPointPositionForValue(l,r));return a}function ro(i,e,t){const n=Ym(e),{line:s,scale:o,axis:r}=e,a=s.options,l=a.fill,c=a.backgroundColor,{above:u=c,below:d=c}=l||{};n&&s.points.length&&(ws(i,t),eg(i,{line:s,target:n,above:u,below:d,area:t,scale:o,axis:r}),ks(i))}function eg(i,e){const{line:t,target:n,above:s,below:o,area:r,scale:a}=e,l=t._loop?"angle":e.axis;i.save(),l==="x"&&o!==s&&(cl(i,n,r.top),ul(i,{line:t,target:n,color:s,scale:a,property:l}),i.restore(),i.save(),cl(i,n,r.bottom)),ul(i,{line:t,target:n,color:o,scale:a,property:l}),i.restore()}function cl(i,e,t){const{segments:n,points:s}=e;let o=!0,r=!1;i.beginPath();for(const a of n){const{start:l,end:c}=a,u=s[l],d=s[yr(l,c,s)];o?(i.moveTo(u.x,u.y),o=!1):(i.lineTo(u.x,t),i.lineTo(u.x,u.y)),r=!!e.pathSegment(i,a,{move:r}),r?i.closePath():i.lineTo(d.x,t)}i.lineTo(e.first().x,t),i.closePath(),i.clip()}function ul(i,e){const{line:t,target:n,property:s,color:o,scale:r}=e,a=Fm(t,n,s);for(const{source:l,target:c,start:u,end:d}of a){const{style:{backgroundColor:h=o}={}}=l,f=n!==!0;i.save(),i.fillStyle=h,tg(i,r,f&&Ro(s,u,d)),i.beginPath();const g=!!t.pathSegment(i,l);let y;if(f){g?i.closePath():dl(i,n,d,s);const v=!!n.pathSegment(i,c,{move:g,reverse:!0});y=g&&v,y||dl(i,n,u,s)}i.closePath(),i.fill(y?"evenodd":"nonzero"),i.restore()}}function tg(i,e,t){const{top:n,bottom:s}=e.chart.chartArea,{property:o,start:r,end:a}=t||{};o==="x"&&(i.beginPath(),i.rect(r,n,a-r,s-n),i.clip())}function dl(i,e,t,n){const s=e.interpolate(t,n);s&&i.lineTo(s.x,s.y)}var ng={id:"filler",afterDatasetsUpdate(i,e,t){const n=(i.data.datasets||[]).length,s=[];let o,r,a,l;for(r=0;r<n;++r)o=i.getDatasetMeta(r),a=o.dataset,l=null,a&&a.options&&a instanceof kt&&(l={visible:i.isDatasetVisible(r),index:r,fill:zm(a,r,n),chart:i,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,s.push(l);for(r=0;r<n;++r)l=s[r],!(!l||l.fill===!1)&&(l.fill=$m(s,r,t.propagate))},beforeDraw(i,e,t){const n=t.drawTime==="beforeDraw",s=i.getSortedVisibleDatasetMetas(),o=i.chartArea;for(let r=s.length-1;r>=0;--r){const a=s[r].$filler;a&&(a.line.updateControlPoints(o,a.axis),n&&a.fill&&ro(i.ctx,a,o))}},beforeDatasetsDraw(i,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s){const o=n[s].$filler;ll(o)&&ro(i.ctx,o,i.chartArea)}},beforeDatasetDraw(i,e,t){const n=e.meta.$filler;!ll(n)||t.drawTime!=="beforeDatasetDraw"||ro(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const hl=(i,e)=>{let{boxHeight:t=e,boxWidth:n=e}=i;return i.usePointStyle&&(t=Math.min(t,e),n=i.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:t,itemHeight:Math.max(e,t)}},ig=(i,e)=>i!==null&&e!==null&&i.datasetIndex===e.datasetIndex&&i.index===e.index;class fl extends xt{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=oe(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(n=>e.filter(n,this.chart.data))),e.sort&&(t=t.sort((n,s)=>e.sort(n,s,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const n=e.labels,s=Ee(n.font),o=s.size,r=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=hl(n,o);let c,u;t.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(r,o,a,l)+10):(u=this.maxHeight,c=this._fitCols(r,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,s){const{ctx:o,maxWidth:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let d=e;o.textAlign="left",o.textBaseline="middle";let h=-1,f=-u;return this.legendItems.forEach((g,y)=>{const v=n+t/2+o.measureText(g.text).width;(y===0||c[c.length-1]+v+2*a>r)&&(d+=u,c[c.length-(y>0?0:1)]=0,f+=u,h++),l[y]={left:0,top:f,row:h,width:v,height:s},c[c.length-1]+=v+a}),d}_fitCols(e,t,n,s){const{ctx:o,maxHeight:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=r-e;let d=a,h=0,f=0,g=0,y=0;return this.legendItems.forEach((v,p)=>{const{itemWidth:E,itemHeight:w}=sg(n,t,o,v,s);p>0&&f+w+2*a>u&&(d+=h+a,c.push({width:h,height:f}),g+=h+a,y++,h=f=0),l[p]={left:g,top:f,col:y,width:E,height:w},h=Math.max(h,E),f+=w+a}),d+=h,c.push({width:h,height:f}),d}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:s},rtl:o}}=this,r=un(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=_e(n,this.left+s,this.right-this.lineWidths[a]);for(const c of t)a!==c.row&&(a=c.row,l=_e(n,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+s}else{let a=0,l=_e(n,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of t)c.col!==a&&(a=c.col,l=_e(n,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;ws(e,this),this._draw(),ks(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:n,ctx:s}=this,{align:o,labels:r}=e,a=pe.color,l=un(e.rtl,this.left,this.width),c=Ee(r.font),{padding:u}=r,d=c.size,h=d/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:g,boxHeight:y,itemHeight:v}=hl(r,d),p=function(L,D,N){if(isNaN(g)||g<=0||isNaN(y)||y<0)return;s.save();const _=q(N.lineWidth,1);if(s.fillStyle=q(N.fillStyle,a),s.lineCap=q(N.lineCap,"butt"),s.lineDashOffset=q(N.lineDashOffset,0),s.lineJoin=q(N.lineJoin,"miter"),s.lineWidth=_,s.strokeStyle=q(N.strokeStyle,a),s.setLineDash(q(N.lineDash,[])),r.usePointStyle){const $={radius:y*Math.SQRT2/2,pointStyle:N.pointStyle,rotation:N.rotation,borderWidth:_},j=l.xPlus(L,g/2),x=D+h;Cc(s,$,j,x,r.pointStyleWidth&&g)}else{const $=D+Math.max((d-y)/2,0),j=l.leftForLtr(L,g),x=ti(N.borderRadius);s.beginPath(),Object.values(x).some(C=>C!==0)?Do(s,{x:j,y:$,w:g,h:y,radius:x}):s.rect(j,$,g,y),s.fill(),_!==0&&s.stroke()}s.restore()},E=function(L,D,N){li(s,N.text,L,D+v/2,c,{strikethrough:N.hidden,textAlign:l.textAlign(N.textAlign)})},w=this.isHorizontal(),m=this._computeTitleHeight();w?f={x:_e(o,this.left+u,this.right-n[0]),y:this.top+u+m,line:0}:f={x:this.left+u,y:_e(o,this.top+m+u,this.bottom-t[0].height),line:0},Dc(this.ctx,e.textDirection);const S=v+u;this.legendItems.forEach((L,D)=>{s.strokeStyle=L.fontColor,s.fillStyle=L.fontColor;const N=s.measureText(L.text).width,_=l.textAlign(L.textAlign||(L.textAlign=r.textAlign)),$=g+h+N;let j=f.x,x=f.y;l.setWidth(this.width),w?D>0&&j+$+u>this.right&&(x=f.y+=S,f.line++,j=f.x=_e(o,this.left+u,this.right-n[f.line])):D>0&&x+S>this.bottom&&(j=f.x=j+t[f.line].width+u,f.line++,x=f.y=_e(o,this.top+m+u,this.bottom-t[f.line].height));const C=l.x(j);if(p(C,x,L),j=tf(_,j+g+h,w?j+$:this.right,e.rtl),E(l.x(j),x,L),w)f.x+=$+u;else if(typeof L.text!="string"){const A=c.lineHeight;f.y+=eu(L,A)+u}else f.y+=S}),Bc(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,n=Ee(t.font),s=Ge(t.padding);if(!t.display)return;const o=un(e.rtl,this.left,this.width),r=this.ctx,a=t.position,l=n.size/2,c=s.top+l;let u,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+c,d=_e(e.align,d,this.right-h);else{const g=this.columnSizes.reduce((y,v)=>Math.max(y,v.height),0);u=c+_e(e.align,this.top,this.bottom-g-e.labels.padding-this._computeTitleHeight())}const f=_e(a,d,d+h);r.textAlign=o.textAlign(ur(a)),r.textBaseline="middle",r.strokeStyle=t.color,r.fillStyle=t.color,r.font=n.string,li(r,t.text,f,u,n)}_computeTitleHeight(){const e=this.options.title,t=Ee(e.font),n=Ge(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,s,o;if(on(e,this.left,this.right)&&on(t,this.top,this.bottom)){for(o=this.legendHitBoxes,n=0;n<o.length;++n)if(s=o[n],on(e,s.left,s.left+s.width)&&on(t,s.top,s.top+s.height))return this.legendItems[n]}return null}handleEvent(e){const t=this.options;if(!ag(e.type,t))return;const n=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,o=ig(s,n);s&&!o&&oe(t.onLeave,[e,s,this],this),this._hoveredItem=n,n&&!o&&oe(t.onHover,[e,n,this],this)}else n&&oe(t.onClick,[e,n,this],this)}}function sg(i,e,t,n,s){const o=og(n,i,e,t),r=rg(s,n,e.lineHeight);return{itemWidth:o,itemHeight:r}}function og(i,e,t,n){let s=i.text;return s&&typeof s!="string"&&(s=s.reduce((o,r)=>o.length>r.length?o:r)),e+t.size/2+n.measureText(s).width}function rg(i,e,t){let n=i;return typeof e.text!="string"&&(n=eu(e,t)),n}function eu(i,e){const t=i.text?i.text.length:0;return e*t}function ag(i,e){return!!((i==="mousemove"||i==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(i==="click"||i==="mouseup"))}var lg={id:"legend",_element:fl,start(i,e,t){const n=i.legend=new fl({ctx:i.ctx,options:t,chart:i});We.configure(i,n,t),We.addBox(i,n)},stop(i){We.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,e,t){const n=i.legend;We.configure(i,n,t),n.options=t},afterUpdate(i){const e=i.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(i,e){e.replay||i.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,e,t){const n=e.datasetIndex,s=t.chart;s.isDatasetVisible(n)?(s.hide(n),e.hidden=!0):(s.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const e=i.data.datasets,{labels:{usePointStyle:t,pointStyle:n,textAlign:s,color:o,useBorderRadius:r,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(t?0:void 0),u=Ge(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:r&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class tu extends xt{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const s=me(n.text)?n.text.length:1;this._padding=Ge(n.padding);const o=s*Ee(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:n,bottom:s,right:o,options:r}=this,a=r.align;let l=0,c,u,d;return this.isHorizontal()?(u=_e(a,n,o),d=t+e,c=o-n):(r.position==="left"?(u=n+e,d=_e(a,s,t),l=ye*-.5):(u=o-e,d=_e(a,t,s),l=ye*.5),c=s-t),{titleX:u,titleY:d,maxWidth:c,rotation:l}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const n=Ee(t.font),o=n.lineHeight/2+this._padding.top,{titleX:r,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);li(e,t.text,0,0,n,{color:t.color,maxWidth:l,rotation:c,textAlign:ur(t.align),textBaseline:"middle",translation:[r,a]})}}function cg(i,e){const t=new tu({ctx:i.ctx,options:e,chart:i});We.configure(i,t,e),We.addBox(i,t),i.titleBlock=t}var ug={id:"title",_element:tu,start(i,e,t){cg(i,t)},stop(i){const e=i.titleBlock;We.removeBox(i,e),delete i.titleBlock},beforeUpdate(i,e,t){const n=i.titleBlock;We.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Kn={average(i){if(!i.length)return!1;let e,t,n=new Set,s=0,o=0;for(e=0,t=i.length;e<t;++e){const a=i[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();n.add(l.x),s+=l.y,++o}}return o===0||n.size===0?!1:{x:[...n].reduce((a,l)=>a+l)/n.size,y:s/o}},nearest(i,e){if(!i.length)return!1;let t=e.x,n=e.y,s=Number.POSITIVE_INFINITY,o,r,a;for(o=0,r=i.length;o<r;++o){const l=i[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=No(e,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();t=l.x,n=l.y}return{x:t,y:n}}};function rt(i,e){return e&&(me(e)?Array.prototype.push.apply(i,e):i.push(e)),i}function mt(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function dg(i,e){const{element:t,datasetIndex:n,index:s}=e,o=i.getDatasetMeta(n).controller,{label:r,value:a}=o.getLabelAndValue(s);return{chart:i,label:r,parsed:o.getParsed(s),raw:i.data.datasets[n].data[s],formattedValue:a,dataset:o.getDataset(),dataIndex:s,datasetIndex:n,element:t}}function pl(i,e){const t=i.chart.ctx,{body:n,footer:s,title:o}=i,{boxWidth:r,boxHeight:a}=e,l=Ee(e.bodyFont),c=Ee(e.titleFont),u=Ee(e.footerFont),d=o.length,h=s.length,f=n.length,g=Ge(e.padding);let y=g.height,v=0,p=n.reduce((m,S)=>m+S.before.length+S.lines.length+S.after.length,0);if(p+=i.beforeBody.length+i.afterBody.length,d&&(y+=d*c.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),p){const m=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;y+=f*m+(p-f)*l.lineHeight+(p-1)*e.bodySpacing}h&&(y+=e.footerMarginTop+h*u.lineHeight+(h-1)*e.footerSpacing);let E=0;const w=function(m){v=Math.max(v,t.measureText(m).width+E)};return t.save(),t.font=c.string,Q(i.title,w),t.font=l.string,Q(i.beforeBody.concat(i.afterBody),w),E=e.displayColors?r+2+e.boxPadding:0,Q(n,m=>{Q(m.before,w),Q(m.lines,w),Q(m.after,w)}),E=0,t.font=u.string,Q(i.footer,w),t.restore(),v+=g.width,{width:v,height:y}}function hg(i,e){const{y:t,height:n}=e;return t<n/2?"top":t>i.height-n/2?"bottom":"center"}function fg(i,e,t,n){const{x:s,width:o}=n,r=t.caretSize+t.caretPadding;if(i==="left"&&s+o+r>e.width||i==="right"&&s-o-r<0)return!0}function pg(i,e,t,n){const{x:s,width:o}=t,{width:r,chartArea:{left:a,right:l}}=i;let c="center";return n==="center"?c=s<=(a+l)/2?"left":"right":s<=o/2?c="left":s>=r-o/2&&(c="right"),fg(c,i,e,t)&&(c="center"),c}function ml(i,e,t){const n=t.yAlign||e.yAlign||hg(i,t);return{xAlign:t.xAlign||e.xAlign||pg(i,e,t,n),yAlign:n}}function mg(i,e){let{x:t,width:n}=i;return e==="right"?t-=n:e==="center"&&(t-=n/2),t}function gg(i,e,t){let{y:n,height:s}=i;return e==="top"?n+=t:e==="bottom"?n-=s+t:n-=s/2,n}function gl(i,e,t,n){const{caretSize:s,caretPadding:o,cornerRadius:r}=i,{xAlign:a,yAlign:l}=t,c=s+o,{topLeft:u,topRight:d,bottomLeft:h,bottomRight:f}=ti(r);let g=mg(e,a);const y=gg(e,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(u,h)+s:a==="right"&&(g+=Math.max(d,f)+s),{x:Ve(g,0,n.width-e.width),y:Ve(y,0,n.height-e.height)}}function zi(i,e,t){const n=Ge(t.padding);return e==="center"?i.x+i.width/2:e==="right"?i.x+i.width-n.right:i.x+n.left}function bl(i){return rt([],mt(i))}function bg(i,e,t){return Kt(i,{tooltip:e,tooltipItems:t,type:"tooltip"})}function yl(i,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?i.override(t):i}const nu={beforeTitle:ft,title(i){if(i.length>0){const e=i[0],t=e.chart.data.labels,n=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return t[e.dataIndex]}return""},afterTitle:ft,beforeBody:ft,beforeLabel:ft,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let e=i.dataset.label||"";e&&(e+=": ");const t=i.formattedValue;return fe(t)||(e+=t),e},labelColor(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:ft,afterBody:ft,beforeFooter:ft,footer:ft,afterFooter:ft};function Be(i,e,t,n){const s=i[e].call(t,n);return typeof s>"u"?nu[e].call(t,n):s}class $o extends xt{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,n=this.options.setContext(this.getContext()),s=n.enabled&&t.options.animation&&n.animations,o=new $c(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=bg(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:n}=t,s=Be(n,"beforeTitle",this,e),o=Be(n,"title",this,e),r=Be(n,"afterTitle",this,e);let a=[];return a=rt(a,mt(s)),a=rt(a,mt(o)),a=rt(a,mt(r)),a}getBeforeBody(e,t){return bl(Be(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:n}=t,s=[];return Q(e,o=>{const r={before:[],lines:[],after:[]},a=yl(n,o);rt(r.before,mt(Be(a,"beforeLabel",this,o))),rt(r.lines,Be(a,"label",this,o)),rt(r.after,mt(Be(a,"afterLabel",this,o))),s.push(r)}),s}getAfterBody(e,t){return bl(Be(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:n}=t,s=Be(n,"beforeFooter",this,e),o=Be(n,"footer",this,e),r=Be(n,"afterFooter",this,e);let a=[];return a=rt(a,mt(s)),a=rt(a,mt(o)),a=rt(a,mt(r)),a}_createItems(e){const t=this._active,n=this.chart.data,s=[],o=[],r=[];let a=[],l,c;for(l=0,c=t.length;l<c;++l)a.push(dg(this.chart,t[l]));return e.filter&&(a=a.filter((u,d,h)=>e.filter(u,d,h,n))),e.itemSort&&(a=a.sort((u,d)=>e.itemSort(u,d,n))),Q(a,u=>{const d=yl(e.callbacks,u);s.push(Be(d,"labelColor",this,u)),o.push(Be(d,"labelPointStyle",this,u)),r.push(Be(d,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=a,a}update(e,t){const n=this.options.setContext(this.getContext()),s=this._active;let o,r=[];if(!s.length)this.opacity!==0&&(o={opacity:0});else{const a=Kn[n.position].call(this,s,this._eventPosition);r=this._createItems(n),this.title=this.getTitle(r,n),this.beforeBody=this.getBeforeBody(r,n),this.body=this.getBody(r,n),this.afterBody=this.getAfterBody(r,n),this.footer=this.getFooter(r,n);const l=this._size=pl(this,n),c=Object.assign({},a,l),u=ml(this.chart,n,c),d=gl(n,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,o={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,s){const o=this.getCaretPosition(e,n,s);t.lineTo(o.x1,o.y1),t.lineTo(o.x2,o.y2),t.lineTo(o.x3,o.y3)}getCaretPosition(e,t,n){const{xAlign:s,yAlign:o}=this,{caretSize:r,cornerRadius:a}=n,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:d}=ti(a),{x:h,y:f}=e,{width:g,height:y}=t;let v,p,E,w,m,S;return o==="center"?(m=f+y/2,s==="left"?(v=h,p=v-r,w=m+r,S=m-r):(v=h+g,p=v+r,w=m-r,S=m+r),E=v):(s==="left"?p=h+Math.max(l,u)+r:s==="right"?p=h+g-Math.max(c,d)-r:p=this.caretX,o==="top"?(w=f,m=w-r,v=p-r,E=p+r):(w=f+y,m=w+r,v=p+r,E=p-r),S=w),{x1:v,x2:p,x3:E,y1:w,y2:m,y3:S}}drawTitle(e,t,n){const s=this.title,o=s.length;let r,a,l;if(o){const c=un(n.rtl,this.x,this.width);for(e.x=zi(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline="middle",r=Ee(n.titleFont),a=n.titleSpacing,t.fillStyle=n.titleColor,t.font=r.string,l=0;l<o;++l)t.fillText(s[l],c.x(e.x),e.y+r.lineHeight/2),e.y+=r.lineHeight+a,l+1===o&&(e.y+=n.titleMarginBottom-a)}}_drawColorBox(e,t,n,s,o){const r=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=o,u=Ee(o.bodyFont),d=zi(this,"left",o),h=s.x(d),f=l<u.lineHeight?(u.lineHeight-l)/2:0,g=t.y+f;if(o.usePointStyle){const y={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=s.leftForLtr(h,c)+c/2,p=g+l/2;e.strokeStyle=o.multiKeyBackground,e.fillStyle=o.multiKeyBackground,Lo(e,y,v,p),e.strokeStyle=r.borderColor,e.fillStyle=r.backgroundColor,Lo(e,y,v,p)}else{e.lineWidth=Y(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,e.strokeStyle=r.borderColor,e.setLineDash(r.borderDash||[]),e.lineDashOffset=r.borderDashOffset||0;const y=s.leftForLtr(h,c),v=s.leftForLtr(s.xPlus(h,1),c-2),p=ti(r.borderRadius);Object.values(p).some(E=>E!==0)?(e.beginPath(),e.fillStyle=o.multiKeyBackground,Do(e,{x:y,y:g,w:c,h:l,radius:p}),e.fill(),e.stroke(),e.fillStyle=r.backgroundColor,e.beginPath(),Do(e,{x:v,y:g+1,w:c-2,h:l-2,radius:p}),e.fill()):(e.fillStyle=o.multiKeyBackground,e.fillRect(y,g,c,l),e.strokeRect(y,g,c,l),e.fillStyle=r.backgroundColor,e.fillRect(v,g+1,c-2,l-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){const{body:s}=this,{bodySpacing:o,bodyAlign:r,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=n,d=Ee(n.bodyFont);let h=d.lineHeight,f=0;const g=un(n.rtl,this.x,this.width),y=function(N){t.fillText(N,g.x(e.x+f),e.y+h/2),e.y+=h+o},v=g.textAlign(r);let p,E,w,m,S,L,D;for(t.textAlign=r,t.textBaseline="middle",t.font=d.string,e.x=zi(this,v,n),t.fillStyle=n.bodyColor,Q(this.beforeBody,y),f=a&&v!=="right"?r==="center"?c/2+u:c+2+u:0,m=0,L=s.length;m<L;++m){for(p=s[m],E=this.labelTextColors[m],t.fillStyle=E,Q(p.before,y),w=p.lines,a&&w.length&&(this._drawColorBox(t,e,m,g,n),h=Math.max(d.lineHeight,l)),S=0,D=w.length;S<D;++S)y(w[S]),h=d.lineHeight;Q(p.after,y)}f=0,h=d.lineHeight,Q(this.afterBody,y),e.y-=o}drawFooter(e,t,n){const s=this.footer,o=s.length;let r,a;if(o){const l=un(n.rtl,this.x,this.width);for(e.x=zi(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=l.textAlign(n.footerAlign),t.textBaseline="middle",r=Ee(n.footerFont),t.fillStyle=n.footerColor,t.font=r.string,a=0;a<o;++a)t.fillText(s[a],l.x(e.x),e.y+r.lineHeight/2),e.y+=r.lineHeight+n.footerSpacing}}drawBackground(e,t,n,s){const{xAlign:o,yAlign:r}=this,{x:a,y:l}=e,{width:c,height:u}=n,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:g}=ti(s.cornerRadius);t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.beginPath(),t.moveTo(a+d,l),r==="top"&&this.drawCaret(e,t,n,s),t.lineTo(a+c-h,l),t.quadraticCurveTo(a+c,l,a+c,l+h),r==="center"&&o==="right"&&this.drawCaret(e,t,n,s),t.lineTo(a+c,l+u-g),t.quadraticCurveTo(a+c,l+u,a+c-g,l+u),r==="bottom"&&this.drawCaret(e,t,n,s),t.lineTo(a+f,l+u),t.quadraticCurveTo(a,l+u,a,l+u-f),r==="center"&&o==="left"&&this.drawCaret(e,t,n,s),t.lineTo(a,l+d),t.quadraticCurveTo(a,l,a+d,l),t.closePath(),t.fill(),s.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,n=this.$animations,s=n&&n.x,o=n&&n.y;if(s||o){const r=Kn[e.position].call(this,this._active,this._eventPosition);if(!r)return;const a=this._size=pl(this,e),l=Object.assign({},r,this._size),c=ml(t,e,l),u=gl(e,l,c,t);(s._to!==u.x||o._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(t);const s={width:this.width,height:this.height},o={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const r=Ge(t.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&a&&(e.save(),e.globalAlpha=n,this.drawBackground(o,e,s,t),Dc(e,t.textDirection),o.y+=r.top,this.drawTitle(o,e,t),this.drawBody(o,e,t),this.drawFooter(o,e,t),Bc(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const n=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!rs(n,s),r=this._positionChanged(s,t);(o||r)&&(this._active=s,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,o=this._active||[],r=this._getActiveElements(e,o,t,n),a=this._positionChanged(r,e),l=t||!rs(r,o)||a;return l&&(this._active=r,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),l}_getActiveElements(e,t,n,s){const o=this.options;if(e.type==="mouseout")return[];if(!s)return t.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const r=this.chart.getElementsAtEventForMode(e,o.mode,o,n);return o.reverse&&r.reverse(),r}_positionChanged(e,t){const{caretX:n,caretY:s,options:o}=this,r=Kn[o.position].call(this,e,t);return r!==!1&&(n!==r.x||s!==r.y)}}M($o,"positioners",Kn);var yg={id:"tooltip",_element:$o,positioners:Kn,afterInit(i,e,t){t&&(i.tooltip=new $o({chart:i,options:t}))},beforeUpdate(i,e,t){i.tooltip&&i.tooltip.initialize(t)},reset(i,e,t){i.tooltip&&i.tooltip.initialize(t)},afterDraw(i){const e=i.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(i.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",t)}},afterEvent(i,e){if(i.tooltip){const t=e.replay;i.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,e)=>e.bodyFont.size,boxWidth:(i,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:nu},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const vg=(i,e,t,n)=>(typeof e=="string"?(t=i.push(e)-1,n.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function xg(i,e,t,n){const s=i.indexOf(e);if(s===-1)return vg(i,e,t,n);const o=i.lastIndexOf(e);return s!==o?t:s}const wg=(i,e)=>i===null?null:Ve(Math.round(i),0,e);function vl(i){const e=this.getLabels();return i>=0&&i<e.length?e[i]:i}class zo extends vn{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const n=this.getLabels();for(const{index:s,label:o}of t)n[s]===o&&n.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(fe(e))return null;const n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:xg(n,e,q(t,e),this._addedLabels),wg(t,n.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:n,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(n=0),t||(s=this.getLabels().length-1)),this.min=n,this.max=s}buildTicks(){const e=this.min,t=this.max,n=this.options.offset,s=[];let o=this.getLabels();o=e===0&&t===o.length-1?o:o.slice(e,t+1),this._valueRange=Math.max(o.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let r=e;r<=t;r++)s.push({value:r});return s}getLabelForValue(e){return vl.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}M(zo,"id","category"),M(zo,"defaults",{ticks:{callback:vl}});function kg(i,e){const t=[],{bounds:s,step:o,min:r,max:a,precision:l,count:c,maxTicks:u,maxDigits:d,includeBounds:h}=i,f=o||1,g=u-1,{min:y,max:v}=e,p=!fe(r),E=!fe(a),w=!fe(c),m=(v-y)/(d+1);let S=va((v-y)/g/f)*f,L,D,N,_;if(S<1e-14&&!p&&!E)return[{value:y},{value:v}];_=Math.ceil(v/S)-Math.floor(y/S),_>g&&(S=va(_*S/g/f)*f),fe(l)||(L=Math.pow(10,l),S=Math.ceil(S*L)/L),s==="ticks"?(D=Math.floor(y/S)*S,N=Math.ceil(v/S)*S):(D=y,N=v),p&&E&&o&&Vh((a-r)/o,S/1e3)?(_=Math.round(Math.min((a-r)/S,u)),S=(a-r)/_,D=r,N=a):w?(D=p?r:D,N=E?a:N,_=c-1,S=(N-D)/_):(_=(N-D)/S,Zn(_,Math.round(_),S/1e3)?_=Math.round(_):_=Math.ceil(_));const $=Math.max(xa(S),xa(D));L=Math.pow(10,fe(l)?$:l),D=Math.round(D*L)/L,N=Math.round(N*L)/L;let j=0;for(p&&(h&&D!==r?(t.push({value:r}),D<r&&j++,Zn(Math.round((D+j*S)*L)/L,r,xl(r,m,i))&&j++):D<r&&j++);j<_;++j){const x=Math.round((D+j*S)*L)/L;if(E&&x>a)break;t.push({value:x})}return E&&h&&N!==a?t.length&&Zn(t[t.length-1].value,a,xl(a,m,i))?t[t.length-1].value=a:t.push({value:a}):(!E||N===a)&&t.push({value:N}),t}function xl(i,e,{horizontal:t,minRotation:n}){const s=Bt(n),o=(t?Math.sin(s):Math.cos(s))||.001,r=.75*e*(""+i).length;return Math.min(e/o,r)}class _g extends vn{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return fe(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:s,max:o}=this;const r=l=>s=t?s:l,a=l=>o=n?o:l;if(e){const l=pn(s),c=pn(o);l<0&&c<0?a(0):l>0&&c>0&&r(0)}if(s===o){let l=o===0?1:Math.abs(o*.05);a(o+l),e||r(s-l)}this.min=s,this.max=o}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:n}=e,s;return n?(s=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),t=t||11),t&&(s=Math.min(t,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let n=this.getTickLimit();n=Math.max(2,n);const s={maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},o=this._range||this,r=kg(s,o);return e.bounds==="ticks"&&Wh(r,this,"value"),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const e=this.ticks;let t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){const s=(n-t)/Math.max(e.length-1,1)/2;t-=s,n+=s}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Ec(e,this.chart.options.locale,this.options.ticks.format)}}class jo extends _g{determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=Te(e)?e:0,this.max=Te(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,n=Bt(this.options.ticks.minRotation),s=(e?Math.sin(n):Math.cos(n))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,o.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}M(jo,"id","linear"),M(jo,"defaults",{ticks:{callback:Tc.formatters.numeric}});const Es={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Fe=Object.keys(Es);function wl(i,e){return i-e}function kl(i,e){if(fe(e))return null;const t=i._adapter,{parser:n,round:s,isoWeekday:o}=i._parseOpts;let r=e;return typeof n=="function"&&(r=n(r)),Te(r)||(r=typeof n=="string"?t.parse(r,n):t.parse(r)),r===null?null:(s&&(r=s==="week"&&(ri(o)||o===!0)?t.startOf(r,"isoWeek",o):t.startOf(r,s)),+r)}function _l(i,e,t,n){const s=Fe.length;for(let o=Fe.indexOf(i);o<s-1;++o){const r=Es[Fe[o]],a=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((t-e)/(a*r.size))<=n)return Fe[o]}return Fe[s-1]}function Eg(i,e,t,n,s){for(let o=Fe.length-1;o>=Fe.indexOf(t);o--){const r=Fe[o];if(Es[r].common&&i._adapter.diff(s,n,r)>=e-1)return r}return Fe[t?Fe.indexOf(t):0]}function Sg(i){for(let e=Fe.indexOf(i)+1,t=Fe.length;e<t;++e)if(Es[Fe[e]].common)return Fe[e]}function El(i,e,t){if(!t)i[e]=!0;else if(t.length){const{lo:n,hi:s}=cr(t,e),o=t[n]>=e?t[n]:t[s];i[o]=!0}}function Tg(i,e,t,n){const s=i._adapter,o=+s.startOf(e[0].value,n),r=e[e.length-1].value;let a,l;for(a=o;a<=r;a=+s.add(a,1,n))l=t[a],l>=0&&(e[l].major=!0);return e}function Sl(i,e,t){const n=[],s={},o=e.length;let r,a;for(r=0;r<o;++r)a=e[r],s[a]=r,n.push({value:a,major:!1});return o===0||!t?n:Tg(i,n,s,t)}class fs extends vn{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const n=e.time||(e.time={}),s=this._adapter=new yp._date(e.adapters.date);s.init(t),Xn(n.displayFormats,s.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:kl(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,n=e.time.unit||"day";let{min:s,max:o,minDefined:r,maxDefined:a}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!r||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Te(s)&&!isNaN(s)?s:+t.startOf(Date.now(),n),o=Te(o)&&!isNaN(o)?o:+t.endOf(Date.now(),n)+1,this.min=Math.min(s,o-1),this.max=Math.max(s+1,o)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){const e=this.options,t=e.time,n=e.ticks,s=n.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const o=this.min,r=this.max,a=Xh(s,o,r);return this._unit=t.unit||(n.autoSkip?_l(t.minUnit,this.min,this.max,this._getLabelCapacity(o)):Eg(this,a.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:Sg(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),Sl(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,s,o;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?t=1-s:t=(this.getDecimalForValue(e[1])-s)/2,o=this.getDecimalForValue(e[e.length-1]),e.length===1?n=o:n=(o-this.getDecimalForValue(e[e.length-2]))/2);const r=e.length<3?.5:.25;t=Ve(t,0,r),n=Ve(n,0,r),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){const e=this._adapter,t=this.min,n=this.max,s=this.options,o=s.time,r=o.unit||_l(o.minUnit,t,n,this._getLabelCapacity(t)),a=q(s.ticks.stepSize,1),l=r==="week"?o.isoWeekday:!1,c=ri(l)||l===!0,u={};let d=t,h,f;if(c&&(d=+e.startOf(d,"isoWeek",l)),d=+e.startOf(d,c?"day":r),e.diff(n,t,r)>1e5*a)throw new Error(t+" and "+n+" are too far apart with stepSize of "+a+" "+r);const g=s.ticks.source==="data"&&this.getDataTimestamps();for(h=d,f=0;h<n;h=+e.add(h,a,r),f++)El(u,h,g);return(h===n||s.bounds==="ticks"||f===1)&&El(u,h,g),Object.keys(u).sort(wl).map(y=>+y)}getLabelForValue(e){const t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){const s=this.options.time.displayFormats,o=this._unit,r=t||s[o];return this._adapter.format(e,r)}_tickFormatFunction(e,t,n,s){const o=this.options,r=o.ticks.callback;if(r)return oe(r,[e,t,n],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],d=c&&a[c],h=n[t],f=c&&d&&h&&h.major;return this._adapter.format(e,s||(f?d:u))}generateTickLabels(e){let t,n,s;for(t=0,n=e.length;t<n;++t)s=e[t],s.label=this._tickFormatFunction(s.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,n=this.ctx.measureText(e).width,s=Bt(this.isHorizontal()?t.maxRotation:t.minRotation),o=Math.cos(s),r=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:n*o+a*r,h:n*r+a*o}}_getLabelCapacity(e){const t=this.options.time,n=t.displayFormats,s=n[t.unit]||n.millisecond,o=this._tickFormatFunction(e,0,Sl(this,[e],this._majorUnit),s),r=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,n=s.length;t<n;++t)e=e.concat(s[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,n;if(e.length)return e;const s=this.getLabels();for(t=0,n=s.length;t<n;++t)e.push(kl(this,s[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Qh(e.sort(wl))}}M(fs,"id","time"),M(fs,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ji(i,e,t){let n=0,s=i.length-1,o,r,a,l;t?(e>=i[n].pos&&e<=i[s].pos&&({lo:n,hi:s}=Pt(i,"pos",e)),{pos:o,time:a}=i[n],{pos:r,time:l}=i[s]):(e>=i[n].time&&e<=i[s].time&&({lo:n,hi:s}=Pt(i,"time",e)),{time:o,pos:a}=i[n],{time:r,pos:l}=i[s]);const c=r-o;return c?a+(l-a)*(e-o)/c:a}class Tl extends fs{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=ji(t,this.min),this._tableRange=ji(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:n}=this,s=[],o=[];let r,a,l,c,u;for(r=0,a=e.length;r<a;++r)c=e[r],c>=t&&c<=n&&s.push(c);if(s.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(r=0,a=s.length;r<a;++r)u=s[r+1],l=s[r-1],c=s[r],Math.round((u+l)/2)!==c&&o.push({time:c,pos:r/(a-1)});return o}_generate(){const e=this.min,t=this.max;let n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((s,o)=>s-o)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),n=this.getLabelTimestamps();return t.length&&n.length?e=this.normalize(t.concat(n)):e=t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(ji(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return ji(this._table,n*this._tableRange+this._minPos,!0)}}M(Tl,"id","timeseries"),M(Tl,"defaults",fs.defaults);bt.register(Yi,kt,Zi,jo,zo,lg,ug,yg,ng);class Cg{constructor(){M(this,"id","compound-interest-calculator");M(this,"name","Compound Interest Calculator");M(this,"description","Calculate compound interest with various compounding frequencies");M(this,"seoMetadata",{title:"Free Compound Interest Calculator Online",description:"Calculate compound interest easily with this free calculator. Features multiple compounding frequencies, detailed results, and investment growth projections.",keywords:["compound interest calculator","investment calculator","interest rate calculator","savings calculator","financial calculator","investment growth calculator"]});M(this,"chart",null)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.addStyles(),this.setupCalculator())}setupCalculator(){const e=document.getElementById("calculateBtn"),t=document.getElementById("periodType"),n=document.getElementById("interestRatePeriod"),s=document.getElementById("timeSpanPeriod");!e||!t||!n||!s||(t.addEventListener("change",()=>{const o=t.value==="yearly";n.textContent=o?"Year":"Month",s.textContent=o?"Years":"Months";const r=document.getElementById("interestRate");if(r){const a=parseFloat(r.value);isNaN(a)||(o?r.value=(a*12).toFixed(1):r.value=(a/12).toFixed(1))}e.click()}),e.addEventListener("click",()=>{const o=parseFloat(document.getElementById("initialAmount").value),r=parseFloat(document.getElementById("periodicInvestment").value),a=parseFloat(document.getElementById("interestRate").value),l=t.value,c=parseInt(document.getElementById("timeSpan").value);this.calculateAndDisplayResults(o,r,a,l,c)}),e.click())}calculateAndDisplayResults(e,t,n,s,o){const r=s==="yearly",a=o,l=n/100;let c=e;const u=[{period:0,amount:c,contributions:e,interest:0}];let d=e;for(let h=1;h<=a;h++){const f=c*l;c=c+f+t,d+=t,u.push({period:r?h:h/12,amount:c,contributions:d,interest:c-d})}this.updateDisplay(u[u.length-1],u,r)}updateDisplay(e,t,n){const s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2});document.getElementById("finalAmount").textContent=s.format(e.amount),document.getElementById("initialInvestmentText").textContent=s.format(t[0].amount),document.getElementById("totalContributionsText").textContent=s.format(e.contributions),document.getElementById("totalInterestText").textContent=s.format(e.interest),this.updateChart(t,n)}updateChart(e,t){const n=document.getElementById("growthChart").getContext("2d");if(!n)return;this.chart&&this.chart.destroy();const s=t?"Year":"Month";this.chart=new bt(n,{type:"line",data:{labels:e.map(o=>`${s} ${Math.floor(o.period)}`),datasets:[{label:"Total Amount",data:e.map(o=>o.amount),borderColor:"#646cff",backgroundColor:"#646cff33",fill:!0},{label:"Total Contributions",data:e.map(o=>o.contributions),borderColor:"#64ff7c",backgroundColor:"#64ff7c33",fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{title:{display:!0,text:"Investment Growth Over Time"},tooltip:{callbacks:{label:function(o){const r=o.raw;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r)}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(o){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",notation:"compact"}).format(o)}}}}}})}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class Ag{constructor(){M(this,"id","base64-tool");M(this,"name","Base64 Encoder/Decoder");M(this,"description","Convert text to Base64 and decode Base64 to text");M(this,"seoMetadata",{title:"Free Online Base64 Encoder and Decoder Tool",description:"Convert your text to Base64 and decode Base64 strings with this free online tool. Fast, secure, and works directly in your browser.",keywords:["base64 encoder","base64 decoder","base64 converter","text to base64","base64 to text","online base64"]});M(this,"lastInput","");M(this,"lastOutput","");M(this,"currentMode","encode")}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.getElementById("encodeMode"),t=document.getElementById("decodeMode"),n=document.getElementById("inputText"),s=document.getElementById("outputText"),o=document.getElementById("copyInput"),r=document.getElementById("copyOutput"),a=document.getElementById("clearAll"),l=document.getElementById("fileInput"),c=document.getElementById("inputLabel"),u=document.getElementById("outputLabel");!e||!t||!n||!s||!o||!r||!a||!l||!c||!u||(e.addEventListener("click",()=>{this.currentMode="encode",e.classList.add("active"),t.classList.remove("active"),c.textContent="Text to Encode",u.textContent="Base64 Output",this.processInput(n.value)}),t.addEventListener("click",()=>{this.currentMode="decode",t.classList.add("active"),e.classList.remove("active"),c.textContent="Base64 to Decode",u.textContent="Decoded Output",this.processInput(n.value)}),n.addEventListener("input",d=>{const h=d.target.value;this.processInput(h)}),o.addEventListener("click",()=>{navigator.clipboard.writeText(n.value).then(()=>this.showToast("Input copied to clipboard!")).catch(()=>this.showToast("Failed to copy input"))}),r.addEventListener("click",()=>{navigator.clipboard.writeText(s.value).then(()=>this.showToast("Output copied to clipboard!")).catch(()=>this.showToast("Failed to copy output"))}),a.addEventListener("click",()=>{n.value="",s.value="",this.lastInput="",this.lastOutput="",this.showToast("Content cleared")}),l.addEventListener("change",async d=>{var f;const h=(f=d.target.files)==null?void 0:f[0];if(h)try{const g=new FileReader;this.currentMode==="encode"?(h.type.startsWith("text/")||h.name.endsWith(".txt")?g.readAsText(h):g.readAsArrayBuffer(h),g.onload=()=>{let y="";if(typeof g.result=="string")y=g.result;else if(g.result instanceof ArrayBuffer){const v=new Uint8Array(g.result);y=String.fromCharCode(...v)}n.value=y,this.processInput(y)}):(g.readAsText(h),g.onload=()=>{typeof g.result=="string"&&(n.value=g.result,this.processInput(g.result))}),g.onerror=()=>{this.showToast("Error reading file")}}catch(g){this.showToast("Error processing file"),console.error("File processing error:",g)}}))}processInput(e){const t=document.getElementById("outputText");if(t&&e!==this.lastInput){this.lastInput=e;try{if(this.currentMode==="encode")this.lastOutput=btoa(e);else try{this.lastOutput=atob(e)}catch{const n=e.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"");this.lastOutput=atob(n)}t.value=this.lastOutput,this.clearError()}catch{e?this.showError(this.currentMode==="decode"?"Invalid Base64 string":"Text contains invalid characters"):(this.clearError(),t.value="")}}}showError(e){const t=document.getElementById("outputText");t&&(t.classList.add("error"),t.value=`Error: ${e}`)}clearError(){const e=document.getElementById("outputText");e&&e.classList.remove("error")}showToast(e){const t=document.querySelector(".base64-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}var Ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ng(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var ao={exports:{}};const Og={},Lg=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),ps=Ng(Lg);/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */var Cl;function Dg(){return Cl||(Cl=1,function(i){(function(){var e="input is invalid type",t="finalize already called",n=typeof window=="object",s=n?window:{};s.JS_MD5_NO_WINDOW&&(n=!1);var o=!n&&typeof self=="object",r=!s.JS_MD5_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;r?s=Ig:o&&(s=self);var a=!s.JS_MD5_NO_COMMON_JS&&!0&&i.exports,l=!s.JS_MD5_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",c="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],d=[0,8,16,24],h=["hex","array","digest","buffer","arrayBuffer","base64"],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),g=[],y;if(l){var v=new ArrayBuffer(68);y=new Uint8Array(v),g=new Uint32Array(v)}var p=Array.isArray;(s.JS_MD5_NO_NODE_JS||!p)&&(p=function(x){return Object.prototype.toString.call(x)==="[object Array]"});var E=ArrayBuffer.isView;l&&(s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW||!E)&&(E=function(x){return typeof x=="object"&&x.buffer&&x.buffer.constructor===ArrayBuffer});var w=function(x){var C=typeof x;if(C==="string")return[x,!0];if(C!=="object"||x===null)throw new Error(e);if(l&&x.constructor===ArrayBuffer)return[new Uint8Array(x),!1];if(!p(x)&&!E(x))throw new Error(e);return[x,!1]},m=function(x){return function(C){return new _(!0).update(C)[x]()}},S=function(){var x=m("hex");r&&(x=L(x)),x.create=function(){return new _},x.update=function(T){return x.create().update(T)};for(var C=0;C<h.length;++C){var A=h[C];x[A]=m(A)}return x},L=function(x){var C=ps,A=ps.Buffer,T;A.from&&!s.JS_MD5_NO_BUFFER_FROM?T=A.from:T=function(B){return new A(B)};var z=function(B){if(typeof B=="string")return C.createHash("md5").update(B,"utf8").digest("hex");if(B==null)throw new Error(e);return B.constructor===ArrayBuffer&&(B=new Uint8Array(B)),p(B)||E(B)||B.constructor===A?C.createHash("md5").update(T(B)).digest("hex"):x(B)};return z},D=function(x){return function(C,A){return new $(C,!0).update(A)[x]()}},N=function(){var x=D("hex");x.create=function(T){return new $(T)},x.update=function(T,z){return x.create(T).update(z)};for(var C=0;C<h.length;++C){var A=h[C];x[A]=D(A)}return x};function _(x){if(x)g[0]=g[16]=g[1]=g[2]=g[3]=g[4]=g[5]=g[6]=g[7]=g[8]=g[9]=g[10]=g[11]=g[12]=g[13]=g[14]=g[15]=0,this.blocks=g,this.buffer8=y;else if(l){var C=new ArrayBuffer(68);this.buffer8=new Uint8Array(C),this.blocks=new Uint32Array(C)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}_.prototype.update=function(x){if(this.finalized)throw new Error(t);var C=w(x);x=C[0];for(var A=C[1],T,z=0,B,F=x.length,H=this.blocks,ee=this.buffer8;z<F;){if(this.hashed&&(this.hashed=!1,H[0]=H[16],H[16]=H[1]=H[2]=H[3]=H[4]=H[5]=H[6]=H[7]=H[8]=H[9]=H[10]=H[11]=H[12]=H[13]=H[14]=H[15]=0),A)if(l)for(B=this.start;z<F&&B<64;++z)T=x.charCodeAt(z),T<128?ee[B++]=T:T<2048?(ee[B++]=192|T>>>6,ee[B++]=128|T&63):T<55296||T>=57344?(ee[B++]=224|T>>>12,ee[B++]=128|T>>>6&63,ee[B++]=128|T&63):(T=65536+((T&1023)<<10|x.charCodeAt(++z)&1023),ee[B++]=240|T>>>18,ee[B++]=128|T>>>12&63,ee[B++]=128|T>>>6&63,ee[B++]=128|T&63);else for(B=this.start;z<F&&B<64;++z)T=x.charCodeAt(z),T<128?H[B>>>2]|=T<<d[B++&3]:T<2048?(H[B>>>2]|=(192|T>>>6)<<d[B++&3],H[B>>>2]|=(128|T&63)<<d[B++&3]):T<55296||T>=57344?(H[B>>>2]|=(224|T>>>12)<<d[B++&3],H[B>>>2]|=(128|T>>>6&63)<<d[B++&3],H[B>>>2]|=(128|T&63)<<d[B++&3]):(T=65536+((T&1023)<<10|x.charCodeAt(++z)&1023),H[B>>>2]|=(240|T>>>18)<<d[B++&3],H[B>>>2]|=(128|T>>>12&63)<<d[B++&3],H[B>>>2]|=(128|T>>>6&63)<<d[B++&3],H[B>>>2]|=(128|T&63)<<d[B++&3]);else if(l)for(B=this.start;z<F&&B<64;++z)ee[B++]=x[z];else for(B=this.start;z<F&&B<64;++z)H[B>>>2]|=x[z]<<d[B++&3];this.lastByteIndex=B,this.bytes+=B-this.start,B>=64?(this.start=B-64,this.hash(),this.hashed=!0):this.start=B}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},_.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var x=this.blocks,C=this.lastByteIndex;x[C>>>2]|=u[C&3],C>=56&&(this.hashed||this.hash(),x[0]=x[16],x[16]=x[1]=x[2]=x[3]=x[4]=x[5]=x[6]=x[7]=x[8]=x[9]=x[10]=x[11]=x[12]=x[13]=x[14]=x[15]=0),x[14]=this.bytes<<3,x[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},_.prototype.hash=function(){var x,C,A,T,z,B,F=this.blocks;this.first?(x=F[0]-680876937,x=(x<<7|x>>>25)-271733879<<0,T=(-1732584194^x&2004318071)+F[1]-117830708,T=(T<<12|T>>>20)+x<<0,A=(-271733879^T&(x^-271733879))+F[2]-1126478375,A=(A<<17|A>>>15)+T<<0,C=(x^A&(T^x))+F[3]-1316259209,C=(C<<22|C>>>10)+A<<0):(x=this.h0,C=this.h1,A=this.h2,T=this.h3,x+=(T^C&(A^T))+F[0]-680876936,x=(x<<7|x>>>25)+C<<0,T+=(A^x&(C^A))+F[1]-389564586,T=(T<<12|T>>>20)+x<<0,A+=(C^T&(x^C))+F[2]+606105819,A=(A<<17|A>>>15)+T<<0,C+=(x^A&(T^x))+F[3]-1044525330,C=(C<<22|C>>>10)+A<<0),x+=(T^C&(A^T))+F[4]-176418897,x=(x<<7|x>>>25)+C<<0,T+=(A^x&(C^A))+F[5]+1200080426,T=(T<<12|T>>>20)+x<<0,A+=(C^T&(x^C))+F[6]-1473231341,A=(A<<17|A>>>15)+T<<0,C+=(x^A&(T^x))+F[7]-45705983,C=(C<<22|C>>>10)+A<<0,x+=(T^C&(A^T))+F[8]+1770035416,x=(x<<7|x>>>25)+C<<0,T+=(A^x&(C^A))+F[9]-1958414417,T=(T<<12|T>>>20)+x<<0,A+=(C^T&(x^C))+F[10]-42063,A=(A<<17|A>>>15)+T<<0,C+=(x^A&(T^x))+F[11]-1990404162,C=(C<<22|C>>>10)+A<<0,x+=(T^C&(A^T))+F[12]+1804603682,x=(x<<7|x>>>25)+C<<0,T+=(A^x&(C^A))+F[13]-40341101,T=(T<<12|T>>>20)+x<<0,A+=(C^T&(x^C))+F[14]-1502002290,A=(A<<17|A>>>15)+T<<0,C+=(x^A&(T^x))+F[15]+1236535329,C=(C<<22|C>>>10)+A<<0,x+=(A^T&(C^A))+F[1]-165796510,x=(x<<5|x>>>27)+C<<0,T+=(C^A&(x^C))+F[6]-1069501632,T=(T<<9|T>>>23)+x<<0,A+=(x^C&(T^x))+F[11]+643717713,A=(A<<14|A>>>18)+T<<0,C+=(T^x&(A^T))+F[0]-373897302,C=(C<<20|C>>>12)+A<<0,x+=(A^T&(C^A))+F[5]-701558691,x=(x<<5|x>>>27)+C<<0,T+=(C^A&(x^C))+F[10]+38016083,T=(T<<9|T>>>23)+x<<0,A+=(x^C&(T^x))+F[15]-660478335,A=(A<<14|A>>>18)+T<<0,C+=(T^x&(A^T))+F[4]-405537848,C=(C<<20|C>>>12)+A<<0,x+=(A^T&(C^A))+F[9]+568446438,x=(x<<5|x>>>27)+C<<0,T+=(C^A&(x^C))+F[14]-1019803690,T=(T<<9|T>>>23)+x<<0,A+=(x^C&(T^x))+F[3]-187363961,A=(A<<14|A>>>18)+T<<0,C+=(T^x&(A^T))+F[8]+1163531501,C=(C<<20|C>>>12)+A<<0,x+=(A^T&(C^A))+F[13]-1444681467,x=(x<<5|x>>>27)+C<<0,T+=(C^A&(x^C))+F[2]-51403784,T=(T<<9|T>>>23)+x<<0,A+=(x^C&(T^x))+F[7]+1735328473,A=(A<<14|A>>>18)+T<<0,C+=(T^x&(A^T))+F[12]-1926607734,C=(C<<20|C>>>12)+A<<0,z=C^A,x+=(z^T)+F[5]-378558,x=(x<<4|x>>>28)+C<<0,T+=(z^x)+F[8]-2022574463,T=(T<<11|T>>>21)+x<<0,B=T^x,A+=(B^C)+F[11]+1839030562,A=(A<<16|A>>>16)+T<<0,C+=(B^A)+F[14]-35309556,C=(C<<23|C>>>9)+A<<0,z=C^A,x+=(z^T)+F[1]-1530992060,x=(x<<4|x>>>28)+C<<0,T+=(z^x)+F[4]+1272893353,T=(T<<11|T>>>21)+x<<0,B=T^x,A+=(B^C)+F[7]-155497632,A=(A<<16|A>>>16)+T<<0,C+=(B^A)+F[10]-1094730640,C=(C<<23|C>>>9)+A<<0,z=C^A,x+=(z^T)+F[13]+681279174,x=(x<<4|x>>>28)+C<<0,T+=(z^x)+F[0]-358537222,T=(T<<11|T>>>21)+x<<0,B=T^x,A+=(B^C)+F[3]-722521979,A=(A<<16|A>>>16)+T<<0,C+=(B^A)+F[6]+76029189,C=(C<<23|C>>>9)+A<<0,z=C^A,x+=(z^T)+F[9]-640364487,x=(x<<4|x>>>28)+C<<0,T+=(z^x)+F[12]-421815835,T=(T<<11|T>>>21)+x<<0,B=T^x,A+=(B^C)+F[15]+530742520,A=(A<<16|A>>>16)+T<<0,C+=(B^A)+F[2]-995338651,C=(C<<23|C>>>9)+A<<0,x+=(A^(C|~T))+F[0]-198630844,x=(x<<6|x>>>26)+C<<0,T+=(C^(x|~A))+F[7]+1126891415,T=(T<<10|T>>>22)+x<<0,A+=(x^(T|~C))+F[14]-1416354905,A=(A<<15|A>>>17)+T<<0,C+=(T^(A|~x))+F[5]-57434055,C=(C<<21|C>>>11)+A<<0,x+=(A^(C|~T))+F[12]+1700485571,x=(x<<6|x>>>26)+C<<0,T+=(C^(x|~A))+F[3]-1894986606,T=(T<<10|T>>>22)+x<<0,A+=(x^(T|~C))+F[10]-1051523,A=(A<<15|A>>>17)+T<<0,C+=(T^(A|~x))+F[1]-2054922799,C=(C<<21|C>>>11)+A<<0,x+=(A^(C|~T))+F[8]+1873313359,x=(x<<6|x>>>26)+C<<0,T+=(C^(x|~A))+F[15]-30611744,T=(T<<10|T>>>22)+x<<0,A+=(x^(T|~C))+F[6]-1560198380,A=(A<<15|A>>>17)+T<<0,C+=(T^(A|~x))+F[13]+1309151649,C=(C<<21|C>>>11)+A<<0,x+=(A^(C|~T))+F[4]-145523070,x=(x<<6|x>>>26)+C<<0,T+=(C^(x|~A))+F[11]-1120210379,T=(T<<10|T>>>22)+x<<0,A+=(x^(T|~C))+F[2]+718787259,A=(A<<15|A>>>17)+T<<0,C+=(T^(A|~x))+F[9]-343485551,C=(C<<21|C>>>11)+A<<0,this.first?(this.h0=x+1732584193<<0,this.h1=C-271733879<<0,this.h2=A-1732584194<<0,this.h3=T+271733878<<0,this.first=!1):(this.h0=this.h0+x<<0,this.h1=this.h1+C<<0,this.h2=this.h2+A<<0,this.h3=this.h3+T<<0)},_.prototype.hex=function(){this.finalize();var x=this.h0,C=this.h1,A=this.h2,T=this.h3;return c[x>>>4&15]+c[x&15]+c[x>>>12&15]+c[x>>>8&15]+c[x>>>20&15]+c[x>>>16&15]+c[x>>>28&15]+c[x>>>24&15]+c[C>>>4&15]+c[C&15]+c[C>>>12&15]+c[C>>>8&15]+c[C>>>20&15]+c[C>>>16&15]+c[C>>>28&15]+c[C>>>24&15]+c[A>>>4&15]+c[A&15]+c[A>>>12&15]+c[A>>>8&15]+c[A>>>20&15]+c[A>>>16&15]+c[A>>>28&15]+c[A>>>24&15]+c[T>>>4&15]+c[T&15]+c[T>>>12&15]+c[T>>>8&15]+c[T>>>20&15]+c[T>>>16&15]+c[T>>>28&15]+c[T>>>24&15]},_.prototype.toString=_.prototype.hex,_.prototype.digest=function(){this.finalize();var x=this.h0,C=this.h1,A=this.h2,T=this.h3;return[x&255,x>>>8&255,x>>>16&255,x>>>24&255,C&255,C>>>8&255,C>>>16&255,C>>>24&255,A&255,A>>>8&255,A>>>16&255,A>>>24&255,T&255,T>>>8&255,T>>>16&255,T>>>24&255]},_.prototype.array=_.prototype.digest,_.prototype.arrayBuffer=function(){this.finalize();var x=new ArrayBuffer(16),C=new Uint32Array(x);return C[0]=this.h0,C[1]=this.h1,C[2]=this.h2,C[3]=this.h3,x},_.prototype.buffer=_.prototype.arrayBuffer,_.prototype.base64=function(){for(var x,C,A,T="",z=this.array(),B=0;B<15;)x=z[B++],C=z[B++],A=z[B++],T+=f[x>>>2]+f[(x<<4|C>>>4)&63]+f[(C<<2|A>>>6)&63]+f[A&63];return x=z[B],T+=f[x>>>2]+f[x<<4&63]+"==",T};function $(x,C){var A,T=w(x);if(x=T[0],T[1]){var z=[],B=x.length,F=0,H;for(A=0;A<B;++A)H=x.charCodeAt(A),H<128?z[F++]=H:H<2048?(z[F++]=192|H>>>6,z[F++]=128|H&63):H<55296||H>=57344?(z[F++]=224|H>>>12,z[F++]=128|H>>>6&63,z[F++]=128|H&63):(H=65536+((H&1023)<<10|x.charCodeAt(++A)&1023),z[F++]=240|H>>>18,z[F++]=128|H>>>12&63,z[F++]=128|H>>>6&63,z[F++]=128|H&63);x=z}x.length>64&&(x=new _(!0).update(x).array());var ee=[],G=[];for(A=0;A<64;++A){var we=x[A]||0;ee[A]=92^we,G[A]=54^we}_.call(this,C),this.update(G),this.oKeyPad=ee,this.inner=!0,this.sharedMemory=C}$.prototype=new _,$.prototype.finalize=function(){if(_.prototype.finalize.call(this),this.inner){this.inner=!1;var x=this.array();_.call(this,this.sharedMemory),this.update(this.oKeyPad),this.update(x),_.prototype.finalize.call(this)}};var j=S();j.md5=j,j.md5.hmac=N(),a?i.exports=j:s.md5=j})()}(ao)),ao.exports}var Bg=Dg();const Pg=Mg(Bg);class Fg{constructor(){M(this,"id","hash-generator");M(this,"name","Hash Generator");M(this,"description","Generate various types of hash values from text");M(this,"seoMetadata",{title:"Online Hash Generator Tool - MD5, SHA-1, SHA-256, SHA-512",description:"Generate secure hash values using multiple algorithms including MD5, SHA-1, SHA-256, and SHA-512. Free online tool for all your hashing needs.",keywords:["hash generator","md5 generator","sha1 generator","sha256 generator","sha512 generator","online hash tool"]});M(this,"lastInput","");M(this,"supportedAlgorithms",[{name:"MD5",value:"md5"},{name:"SHA-1",value:"sha-1"},{name:"SHA-256",value:"sha-256"},{name:"SHA-384",value:"sha-384"},{name:"SHA-512",value:"sha-512"}])}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}async generateHash(e,t){try{if(t==="md5")return Pg(e);const n=new TextEncoder().encode(e),s=await crypto.subtle.digest(t,n);return Array.from(new Uint8Array(s)).map(a=>a.toString(16).padStart(2,"0")).join("")}catch(n){return console.error("Error generating hash:",n),"Error generating hash"}}setupHandlers(){const e=document.getElementById("inputText"),t=document.getElementById("hashAlgorithm"),n=document.getElementById("generateHash"),s=document.getElementById("copyHash"),o=document.getElementById("hashOutput");!e||!t||!n||!s||!o||(n.addEventListener("click",async()=>{if(!e.value.trim()){o.textContent="";return}const r=await this.generateHash(e.value,t.value);o.textContent=r}),s.addEventListener("click",()=>{const r=o.textContent;r&&navigator.clipboard.writeText(r).then(()=>this.showToast("Hash copied to clipboard!")).catch(()=>this.showToast("Failed to copy hash"))}))}formatFileSize(e){const t=["B","KB","MB","GB"];let n=e,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s++;return`${n.toFixed(2)} ${t[s]}`}showToast(e){const t=document.querySelector(".hash-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}const Rg="00000000-0000-0000-0000-000000000000",xe=[];for(let i=0;i<256;++i)xe.push((i+256).toString(16).slice(1));function iu(i,e=0){return(xe[i[e+0]]+xe[i[e+1]]+xe[i[e+2]]+xe[i[e+3]]+"-"+xe[i[e+4]]+xe[i[e+5]]+"-"+xe[i[e+6]]+xe[i[e+7]]+"-"+xe[i[e+8]]+xe[i[e+9]]+"-"+xe[i[e+10]]+xe[i[e+11]]+xe[i[e+12]]+xe[i[e+13]]+xe[i[e+14]]+xe[i[e+15]]).toLowerCase()}let lo;const $g=new Uint8Array(16);function Uo(){if(!lo){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");lo=crypto.getRandomValues.bind(crypto)}return lo($g)}const Un={};function Al(i,e,t){var o;let n;const s=(i==null?void 0:i._v6)??!1;if(i){const r=Object.keys(i);r.length===1&&r[0]==="_v6"&&(i=void 0)}if(i)n=Il(i.random??((o=i.rng)==null?void 0:o.call(i))??Uo(),i.msecs,i.nsecs,i.clockseq,i.node,e,t);else{const r=Date.now(),a=Uo();zg(Un,r,a),n=Il(a,Un.msecs,Un.nsecs,s?void 0:Un.clockseq,s?void 0:Un.node,e,t)}return e?n:iu(n)}function zg(i,e,t){return i.msecs??(i.msecs=-1/0),i.nsecs??(i.nsecs=0),e===i.msecs?(i.nsecs++,i.nsecs>=1e4&&(i.node=void 0,i.nsecs=0)):e>i.msecs?i.nsecs=0:e<i.msecs&&(i.node=void 0),i.node||(i.node=t.slice(10,16),i.node[0]|=1,i.clockseq=(t[8]<<8|t[9])&16383),i.msecs=e,i}function Il(i,e,t,n,s,o,r=0){o||(o=new Uint8Array(16),r=0),e??(e=Date.now()),t??(t=0),n??(n=(i[8]<<8|i[9])&16383),s??(s=i.slice(10,16)),e+=122192928e5;const a=((e&268435455)*1e4+t)%4294967296;o[r++]=a>>>24&255,o[r++]=a>>>16&255,o[r++]=a>>>8&255,o[r++]=a&255;const l=e/4294967296*1e4&268435455;o[r++]=l>>>8&255,o[r++]=l&255,o[r++]=l>>>24&15|16,o[r++]=l>>>16&255,o[r++]=n>>>8|128,o[r++]=n&255;for(let c=0;c<6;++c)o[r++]=s[c];return o}const jg=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ml={randomUUID:jg};function Nl(i,e,t){if(Ml.randomUUID&&!e&&!i)return Ml.randomUUID();i=i||{};const n=i.random||(i.rng||Uo)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,iu(n)}function jt(i){var e=new Error(i);return e.source="ulid",e}var Ss="0123456789ABCDEFGHJKMNPQRSTVWXYZ",dn=Ss.length,Ho=Math.pow(2,48)-1,Vo=10,su=16;function Ug(i){var e=Math.floor(i()*dn);return e===dn&&(e=dn-1),Ss.charAt(e)}function Hg(i,e){if(isNaN(i))throw new Error(i+" must be a number");if(i>Ho)throw jt("cannot encode time greater than "+Ho);if(i<0)throw jt("time must be positive");if(Number.isInteger(i)===!1)throw jt("time must be an integer");for(var t=void 0,n="";e>0;e--)t=i%dn,n=Ss.charAt(t)+n,i=(i-t)/dn;return n}function Vg(i,e){for(var t="";i>0;i--)t=Ug(e)+t;return t}function Wg(i){if(i.length!==Vo+su)throw jt("malformed ulid");var e=i.substr(0,Vo).split("").reverse().reduce(function(t,n,s){var o=Ss.indexOf(n);if(o===-1)throw jt("invalid character found: "+n);return t+=o*Math.pow(dn,s)},0);if(e>Ho)throw jt("malformed ulid, timestamp too large");return e}function Kg(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments[1];e||(e=typeof window<"u"?window:null);var t=e&&(e.crypto||e.msCrypto);if(t)return function(){var s=new Uint8Array(1);return t.getRandomValues(s),s[0]/255};try{var n=require("crypto");return function(){return n.randomBytes(1).readUInt8()/255}}catch{}if(i){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return function(){return Math.random()}}throw jt("secure crypto unusable, insecure Math.random not allowed")}function qg(i){return i||(i=Kg()),function(t){return isNaN(t)&&(t=Date.now()),Hg(t,Vo)+Vg(su,i)}}var Ol=qg();class Gg{constructor(){M(this,"id","uuid-generator");M(this,"name","UUID Generator");M(this,"description","Generate random UUIDs/GUIDs");M(this,"seoMetadata",{title:"Free Online UUID/GUID Generator Tool",description:"Generate random UUID (Universally Unique Identifier) and GUID (Globally Unique Identifier) values instantly. Secure, random, and RFC 4122 compliant.",keywords:["uuid generator","guid generator","random uuid","uuid v4","unique identifier generator","online uuid tool"]});M(this,"supportedTypes",[{value:"uuidv4",name:"UUID v4 (Random)"},{value:"uuidv1",name:"UUID v1 (Time-based)"},{value:"ulid",name:"ULID (Sortable, Time-based)"},{value:"nil",name:"Nil UUID (Zero UUID)"}]);M(this,"lastSettings",{type:"uuidv4",quantity:1,uppercase:!1,includeDashes:!0,useCustomDate:!1,customDate:new Date().toISOString().slice(0,16)})}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("idType"),t=document.getElementById("useCustomDate"),n=document.getElementById("customDate"),s=document.getElementById("quantity"),o=document.getElementById("uppercase"),r=document.getElementById("includeDashes"),a=document.getElementById("generateBtn"),l=document.getElementById("copyAllBtn"),c=document.getElementById("clearBtn"),u=document.getElementById("outputList"),d=document.querySelector(".time-control");!e||!t||!n||!s||!o||!r||!a||!l||!c||!u||!d||(e.addEventListener("change",()=>{const h=["uuidv1","ulid"].includes(e.value);d.style.display=h?"flex":"none",this.lastSettings.type=e.value,this.updateIdInfo(e.value)}),this.updateIdInfo(e.value),t.addEventListener("change",()=>{n.disabled=!t.checked,this.lastSettings.useCustomDate=t.checked}),n.addEventListener("change",()=>{this.lastSettings.customDate=n.value}),o.addEventListener("change",()=>{this.lastSettings.uppercase=o.checked}),r.addEventListener("change",()=>{this.lastSettings.includeDashes=r.checked}),s.addEventListener("change",()=>{const h=parseInt(s.value);h<1&&(s.value="1"),h>100&&(s.value="100"),this.lastSettings.quantity=parseInt(s.value)}),a.addEventListener("click",()=>{var f;u.innerHTML="";const h=Math.min(Math.max(parseInt(s.value)||1,1),100);for(let g=0;g<h;g++){const{id:y,timestamp:v}=this.generateId({type:e.value,useCustomDate:t.checked,customDate:t.checked?new Date(n.value):void 0,uppercase:o.checked,includeDashes:r.checked}),p=document.createElement("div");p.className="id-item",p.innerHTML=`
          <div class="id-content">
            <span class="id-text">${y}</span>
            ${v?`<span class="id-timestamp">Generated at: ${v.toLocaleString()}</span>`:""}
          </div>
          <button class="copy-button" title="Copy ID">Copy</button>
        `,(f=p.querySelector(".copy-button"))==null||f.addEventListener("click",()=>{navigator.clipboard.writeText(y).then(()=>this.showToast("ID copied to clipboard")).catch(()=>this.showToast("Failed to copy ID"))}),u.appendChild(p),g===0&&this.updateIdInfo(e.value,v)}}),l.addEventListener("click",()=>{const h=Array.from(u.querySelectorAll(".id-text")).map(f=>f.textContent).filter(Boolean).join(`
`);h&&navigator.clipboard.writeText(h).then(()=>this.showToast("All IDs copied to clipboard")).catch(()=>this.showToast("Failed to copy IDs"))}),c.addEventListener("click",()=>{u.innerHTML="",this.updateIdInfo(e.value)}))}updateQuantityState(e,t,n){["uuidv1","ulid"].includes(e)&&t?(n.value="1",n.disabled=!0,n.title="Quantity is fixed to 1 when using custom timestamp (all IDs would be identical)"):(n.disabled=!1,n.title="Generate between 1 and 100 IDs")}generateId(e){let t,n;switch(e.type){case"uuidv4":t=Nl();break;case"uuidv1":e.useCustomDate&&e.customDate?(t=Al({msecs:e.customDate.getTime()}),n=e.customDate):(t=Al(),n=new Date);break;case"ulid":e.useCustomDate&&e.customDate?(t=Ol(e.customDate.getTime()),n=e.customDate):(t=Ol(),n=new Date(Wg(t)));break;case"nil":t=Rg;break;default:t=Nl()}return e.includeDashes||(t=t.replace(/-/g,"")),e.uppercase&&(t=t.toUpperCase()),{id:t,timestamp:n}}updateIdInfo(e,t){const n=document.getElementById("idInfo");if(!n)return;const s=[];switch(e){case"uuidv4":s.push("UUID Version 4 (Random)"),s.push("• Generated using cryptographically strong random values"),s.push("• Suitable for most use cases"),s.push("• No timestamp or sortable component");break;case"uuidv1":s.push("UUID Version 1 (Time-based)"),s.push("• Contains timestamp and node identifier"),s.push("• Sortable by generation time"),t&&s.push(`• Timestamp: ${t.toLocaleString()}`);break;case"ulid":s.push("ULID (Universally Unique Lexicographically Sortable Identifier)"),s.push("• Timestamp + Random"),s.push("• Lexicographically sortable"),s.push("• Case insensitive"),s.push("• URL-safe (no special characters)"),t&&s.push(`• Timestamp: ${t.toLocaleString()}`);break;case"nil":s.push("Nil UUID (Zero UUID)"),s.push("• Special zero-value UUID"),s.push("• All bits set to zero"),s.push("• Used to represent null or undefined UUID");break}n.innerHTML=s.join(`
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
    `,document.head.appendChild(e)}}var co={},uo={},Ui={exports:{}},Ll;function Yg(){return Ll||(Ll=1,function(i,e){var t=ps,n=t.Buffer;function s(r,a){for(var l in r)a[l]=r[l]}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?i.exports=t:(s(t,e),e.Buffer=o);function o(r,a,l){return n(r,a,l)}s(n,o),o.from=function(r,a,l){if(typeof r=="number")throw new TypeError("Argument must not be a number");return n(r,a,l)},o.alloc=function(r,a,l){if(typeof r!="number")throw new TypeError("Argument must be a number");var c=n(r);return a!==void 0?typeof l=="string"?c.fill(a,l):c.fill(a):c.fill(0),c},o.allocUnsafe=function(r){if(typeof r!="number")throw new TypeError("Argument must be a number");return n(r)},o.allocUnsafeSlow=function(r){if(typeof r!="number")throw new TypeError("Argument must be a number");return t.SlowBuffer(r)}}(Ui,Ui.exports)),Ui.exports}var Dl;function Jg(){if(Dl)return uo;Dl=1;var i=Yg().Buffer,e=i.isEncoding||function(p){switch(p=""+p,p&&p.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function t(p){if(!p)return"utf8";for(var E;;)switch(p){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return p;default:if(E)return;p=(""+p).toLowerCase(),E=!0}}function n(p){var E=t(p);if(typeof E!="string"&&(i.isEncoding===e||!e(p)))throw new Error("Unknown encoding: "+p);return E||p}uo.StringDecoder=s;function s(p){this.encoding=n(p);var E;switch(this.encoding){case"utf16le":this.text=d,this.end=h,E=4;break;case"utf8":this.fillLast=l,E=4;break;case"base64":this.text=f,this.end=g,E=3;break;default:this.write=y,this.end=v;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(E)}s.prototype.write=function(p){if(p.length===0)return"";var E,w;if(this.lastNeed){if(E=this.fillLast(p),E===void 0)return"";w=this.lastNeed,this.lastNeed=0}else w=0;return w<p.length?E?E+this.text(p,w):this.text(p,w):E||""},s.prototype.end=u,s.prototype.text=c,s.prototype.fillLast=function(p){if(this.lastNeed<=p.length)return p.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);p.copy(this.lastChar,this.lastTotal-this.lastNeed,0,p.length),this.lastNeed-=p.length};function o(p){return p<=127?0:p>>5===6?2:p>>4===14?3:p>>3===30?4:p>>6===2?-1:-2}function r(p,E,w){var m=E.length-1;if(m<w)return 0;var S=o(E[m]);return S>=0?(S>0&&(p.lastNeed=S-1),S):--m<w||S===-2?0:(S=o(E[m]),S>=0?(S>0&&(p.lastNeed=S-2),S):--m<w||S===-2?0:(S=o(E[m]),S>=0?(S>0&&(S===2?S=0:p.lastNeed=S-3),S):0))}function a(p,E,w){if((E[0]&192)!==128)return p.lastNeed=0,"�";if(p.lastNeed>1&&E.length>1){if((E[1]&192)!==128)return p.lastNeed=1,"�";if(p.lastNeed>2&&E.length>2&&(E[2]&192)!==128)return p.lastNeed=2,"�"}}function l(p){var E=this.lastTotal-this.lastNeed,w=a(this,p);if(w!==void 0)return w;if(this.lastNeed<=p.length)return p.copy(this.lastChar,E,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);p.copy(this.lastChar,E,0,p.length),this.lastNeed-=p.length}function c(p,E){var w=r(this,p,E);if(!this.lastNeed)return p.toString("utf8",E);this.lastTotal=w;var m=p.length-(w-this.lastNeed);return p.copy(this.lastChar,0,m),p.toString("utf8",E,m)}function u(p){var E=p&&p.length?this.write(p):"";return this.lastNeed?E+"�":E}function d(p,E){if((p.length-E)%2===0){var w=p.toString("utf16le",E);if(w){var m=w.charCodeAt(w.length-1);if(m>=55296&&m<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=p[p.length-2],this.lastChar[1]=p[p.length-1],w.slice(0,-1)}return w}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=p[p.length-1],p.toString("utf16le",E,p.length-1)}function h(p){var E=p&&p.length?this.write(p):"";if(this.lastNeed){var w=this.lastTotal-this.lastNeed;return E+this.lastChar.toString("utf16le",0,w)}return E}function f(p,E){var w=(p.length-E)%3;return w===0?p.toString("base64",E):(this.lastNeed=3-w,this.lastTotal=3,w===1?this.lastChar[0]=p[p.length-1]:(this.lastChar[0]=p[p.length-2],this.lastChar[1]=p[p.length-1]),p.toString("base64",E,p.length-w))}function g(p){var E=p&&p.length?this.write(p):"";return this.lastNeed?E+this.lastChar.toString("base64",0,3-this.lastNeed):E}function y(p){return p.toString(this.encoding)}function v(p){return p&&p.length?this.write(p):""}return uo}var Bl;function Xg(){return Bl||(Bl=1,function(i){(function(e){e.parser=function(k,b){return new n(k,b)},e.SAXParser=n,e.SAXStream=u,e.createStream=c,e.MAX_BUFFER_LENGTH=64*1024;var t=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];e.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function n(k,b){if(!(this instanceof n))return new n(k,b);var P=this;o(P),P.q=P.c="",P.bufferCheckPosition=e.MAX_BUFFER_LENGTH,P.opt=b||{},P.opt.lowercase=P.opt.lowercase||P.opt.lowercasetags,P.looseCase=P.opt.lowercase?"toLowerCase":"toUpperCase",P.tags=[],P.closed=P.closedRoot=P.sawRoot=!1,P.tag=P.error=null,P.strict=!!k,P.noscript=!!(k||P.opt.noscript),P.state=_.BEGIN,P.strictEntities=P.opt.strictEntities,P.ENTITIES=P.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),P.attribList=[],P.opt.xmlns&&(P.ns=Object.create(y)),P.opt.unquotedAttributeValues===void 0&&(P.opt.unquotedAttributeValues=!k),P.trackPosition=P.opt.position!==!1,P.trackPosition&&(P.position=P.line=P.column=0),j(P,"onready")}Object.create||(Object.create=function(k){function b(){}b.prototype=k;var P=new b;return P}),Object.keys||(Object.keys=function(k){var b=[];for(var P in k)k.hasOwnProperty(P)&&b.push(P);return b});function s(k){for(var b=Math.max(e.MAX_BUFFER_LENGTH,10),P=0,O=0,J=t.length;O<J;O++){var ie=k[t[O]].length;if(ie>b)switch(t[O]){case"textNode":C(k);break;case"cdata":x(k,"oncdata",k.cdata),k.cdata="";break;case"script":x(k,"onscript",k.script),k.script="";break;default:T(k,"Max buffer length exceeded: "+t[O])}P=Math.max(P,ie)}var ce=e.MAX_BUFFER_LENGTH-P;k.bufferCheckPosition=ce+k.position}function o(k){for(var b=0,P=t.length;b<P;b++)k[t[b]]=""}function r(k){C(k),k.cdata!==""&&(x(k,"oncdata",k.cdata),k.cdata=""),k.script!==""&&(x(k,"onscript",k.script),k.script="")}n.prototype={end:function(){z(this)},write:Ce,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){r(this)}};var a;try{a=ps.Stream}catch{a=function(){}}a||(a=function(){});var l=e.EVENTS.filter(function(k){return k!=="error"&&k!=="end"});function c(k,b){return new u(k,b)}function u(k,b){if(!(this instanceof u))return new u(k,b);a.apply(this),this._parser=new n(k,b),this.writable=!0,this.readable=!0;var P=this;this._parser.onend=function(){P.emit("end")},this._parser.onerror=function(O){P.emit("error",O),P._parser.error=null},this._decoder=null,l.forEach(function(O){Object.defineProperty(P,"on"+O,{get:function(){return P._parser["on"+O]},set:function(J){if(!J)return P.removeAllListeners(O),P._parser["on"+O]=J,J;P.on(O,J)},enumerable:!0,configurable:!1})})}u.prototype=Object.create(a.prototype,{constructor:{value:u}}),u.prototype.write=function(k){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(k)){if(!this._decoder){var b=Jg().StringDecoder;this._decoder=new b("utf8")}k=this._decoder.write(k)}return this._parser.write(k.toString()),this.emit("data",k),!0},u.prototype.end=function(k){return k&&k.length&&this.write(k),this._parser.end(),!0},u.prototype.on=function(k,b){var P=this;return!P._parser["on"+k]&&l.indexOf(k)!==-1&&(P._parser["on"+k]=function(){var O=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);O.splice(0,0,k),P.emit.apply(P,O)}),a.prototype.on.call(P,k,b)};var d="[CDATA[",h="DOCTYPE",f="http://www.w3.org/XML/1998/namespace",g="http://www.w3.org/2000/xmlns/",y={xml:f,xmlns:g},v=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,p=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,E=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,w=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function m(k){return k===" "||k===`
`||k==="\r"||k==="	"}function S(k){return k==='"'||k==="'"}function L(k){return k===">"||m(k)}function D(k,b){return k.test(b)}function N(k,b){return!D(k,b)}var _=0;e.STATE={BEGIN:_++,BEGIN_WHITESPACE:_++,TEXT:_++,TEXT_ENTITY:_++,OPEN_WAKA:_++,SGML_DECL:_++,SGML_DECL_QUOTED:_++,DOCTYPE:_++,DOCTYPE_QUOTED:_++,DOCTYPE_DTD:_++,DOCTYPE_DTD_QUOTED:_++,COMMENT_STARTING:_++,COMMENT:_++,COMMENT_ENDING:_++,COMMENT_ENDED:_++,CDATA:_++,CDATA_ENDING:_++,CDATA_ENDING_2:_++,PROC_INST:_++,PROC_INST_BODY:_++,PROC_INST_ENDING:_++,OPEN_TAG:_++,OPEN_TAG_SLASH:_++,ATTRIB:_++,ATTRIB_NAME:_++,ATTRIB_NAME_SAW_WHITE:_++,ATTRIB_VALUE:_++,ATTRIB_VALUE_QUOTED:_++,ATTRIB_VALUE_CLOSED:_++,ATTRIB_VALUE_UNQUOTED:_++,ATTRIB_VALUE_ENTITY_Q:_++,ATTRIB_VALUE_ENTITY_U:_++,CLOSE_TAG:_++,CLOSE_TAG_SAW_WHITE:_++,SCRIPT:_++,SCRIPT_ENDING:_++},e.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},e.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach(function(k){var b=e.ENTITIES[k],P=typeof b=="number"?String.fromCharCode(b):b;e.ENTITIES[k]=P});for(var $ in e.STATE)e.STATE[e.STATE[$]]=$;_=e.STATE;function j(k,b,P){k[b]&&k[b](P)}function x(k,b,P){k.textNode&&C(k),j(k,b,P)}function C(k){k.textNode=A(k.opt,k.textNode),k.textNode&&j(k,"ontext",k.textNode),k.textNode=""}function A(k,b){return k.trim&&(b=b.trim()),k.normalize&&(b=b.replace(/\s+/g," ")),b}function T(k,b){return C(k),k.trackPosition&&(b+=`
Line: `+k.line+`
Column: `+k.column+`
Char: `+k.c),b=new Error(b),k.error=b,j(k,"onerror",b),k}function z(k){return k.sawRoot&&!k.closedRoot&&B(k,"Unclosed root tag"),k.state!==_.BEGIN&&k.state!==_.BEGIN_WHITESPACE&&k.state!==_.TEXT&&T(k,"Unexpected end"),C(k),k.c="",k.closed=!0,j(k,"onend"),n.call(k,k.strict,k.opt),k}function B(k,b){if(typeof k!="object"||!(k instanceof n))throw new Error("bad call to strictFail");k.strict&&T(k,b)}function F(k){k.strict||(k.tagName=k.tagName[k.looseCase]());var b=k.tags[k.tags.length-1]||k,P=k.tag={name:k.tagName,attributes:{}};k.opt.xmlns&&(P.ns=b.ns),k.attribList.length=0,x(k,"onopentagstart",P)}function H(k,b){var P=k.indexOf(":"),O=P<0?["",k]:k.split(":"),J=O[0],ie=O[1];return b&&k==="xmlns"&&(J="xmlns",ie=""),{prefix:J,local:ie}}function ee(k){if(k.strict||(k.attribName=k.attribName[k.looseCase]()),k.attribList.indexOf(k.attribName)!==-1||k.tag.attributes.hasOwnProperty(k.attribName)){k.attribName=k.attribValue="";return}if(k.opt.xmlns){var b=H(k.attribName,!0),P=b.prefix,O=b.local;if(P==="xmlns")if(O==="xml"&&k.attribValue!==f)B(k,"xml: prefix must be bound to "+f+`
Actual: `+k.attribValue);else if(O==="xmlns"&&k.attribValue!==g)B(k,"xmlns: prefix must be bound to "+g+`
Actual: `+k.attribValue);else{var J=k.tag,ie=k.tags[k.tags.length-1]||k;J.ns===ie.ns&&(J.ns=Object.create(ie.ns)),J.ns[O]=k.attribValue}k.attribList.push([k.attribName,k.attribValue])}else k.tag.attributes[k.attribName]=k.attribValue,x(k,"onattribute",{name:k.attribName,value:k.attribValue});k.attribName=k.attribValue=""}function G(k,b){if(k.opt.xmlns){var P=k.tag,O=H(k.tagName);P.prefix=O.prefix,P.local=O.local,P.uri=P.ns[O.prefix]||"",P.prefix&&!P.uri&&(B(k,"Unbound namespace prefix: "+JSON.stringify(k.tagName)),P.uri=O.prefix);var J=k.tags[k.tags.length-1]||k;P.ns&&J.ns!==P.ns&&Object.keys(P.ns).forEach(function(vi){x(k,"onopennamespace",{prefix:vi,uri:P.ns[vi]})});for(var ie=0,ce=k.attribList.length;ie<ce;ie++){var he=k.attribList[ie],ge=he[0],tt=he[1],re=H(ge,!0),Le=re.prefix,Yt=re.local,Tn=Le===""?"":P.ns[Le]||"",Jt={name:ge,value:tt,prefix:Le,local:Yt,uri:Tn};Le&&Le!=="xmlns"&&!Tn&&(B(k,"Unbound namespace prefix: "+JSON.stringify(Le)),Jt.uri=Le),k.tag.attributes[ge]=Jt,x(k,"onattribute",Jt)}k.attribList.length=0}k.tag.isSelfClosing=!!b,k.sawRoot=!0,k.tags.push(k.tag),x(k,"onopentag",k.tag),b||(!k.noscript&&k.tagName.toLowerCase()==="script"?k.state=_.SCRIPT:k.state=_.TEXT,k.tag=null,k.tagName=""),k.attribName=k.attribValue="",k.attribList.length=0}function we(k){if(!k.tagName){B(k,"Weird empty close tag."),k.textNode+="</>",k.state=_.TEXT;return}if(k.script){if(k.tagName!=="script"){k.script+="</"+k.tagName+">",k.tagName="",k.state=_.SCRIPT;return}x(k,"onscript",k.script),k.script=""}var b=k.tags.length,P=k.tagName;k.strict||(P=P[k.looseCase]());for(var O=P;b--;){var J=k.tags[b];if(J.name!==O)B(k,"Unexpected close tag");else break}if(b<0){B(k,"Unmatched closing tag: "+k.tagName),k.textNode+="</"+k.tagName+">",k.state=_.TEXT;return}k.tagName=P;for(var ie=k.tags.length;ie-- >b;){var ce=k.tag=k.tags.pop();k.tagName=k.tag.name,x(k,"onclosetag",k.tagName);var he={};for(var ge in ce.ns)he[ge]=ce.ns[ge];var tt=k.tags[k.tags.length-1]||k;k.opt.xmlns&&ce.ns!==tt.ns&&Object.keys(ce.ns).forEach(function(re){var Le=ce.ns[re];x(k,"onclosenamespace",{prefix:re,uri:Le})})}b===0&&(k.closedRoot=!0),k.tagName=k.attribValue=k.attribName="",k.attribList.length=0,k.state=_.TEXT}function se(k){var b=k.entity,P=b.toLowerCase(),O,J="";return k.ENTITIES[b]?k.ENTITIES[b]:k.ENTITIES[P]?k.ENTITIES[P]:(b=P,b.charAt(0)==="#"&&(b.charAt(1)==="x"?(b=b.slice(2),O=parseInt(b,16),J=O.toString(16)):(b=b.slice(1),O=parseInt(b,10),J=O.toString(10))),b=b.replace(/^0+/,""),isNaN(O)||J.toLowerCase()!==b?(B(k,"Invalid character entity"),"&"+k.entity+";"):String.fromCodePoint(O))}function Re(k,b){b==="<"?(k.state=_.OPEN_WAKA,k.startTagPosition=k.position):m(b)||(B(k,"Non-whitespace before first tag."),k.textNode=b,k.state=_.TEXT)}function X(k,b){var P="";return b<k.length&&(P=k.charAt(b)),P}function Ce(k){var b=this;if(this.error)throw this.error;if(b.closed)return T(b,"Cannot write after close. Assign an onready handler.");if(k===null)return z(b);typeof k=="object"&&(k=k.toString());for(var P=0,O="";O=X(k,P++),b.c=O,!!O;)switch(b.trackPosition&&(b.position++,O===`
`?(b.line++,b.column=0):b.column++),b.state){case _.BEGIN:if(b.state=_.BEGIN_WHITESPACE,O==="\uFEFF")continue;Re(b,O);continue;case _.BEGIN_WHITESPACE:Re(b,O);continue;case _.TEXT:if(b.sawRoot&&!b.closedRoot){for(var J=P-1;O&&O!=="<"&&O!=="&";)O=X(k,P++),O&&b.trackPosition&&(b.position++,O===`
`?(b.line++,b.column=0):b.column++);b.textNode+=k.substring(J,P-1)}O==="<"&&!(b.sawRoot&&b.closedRoot&&!b.strict)?(b.state=_.OPEN_WAKA,b.startTagPosition=b.position):(!m(O)&&(!b.sawRoot||b.closedRoot)&&B(b,"Text data outside of root node."),O==="&"?b.state=_.TEXT_ENTITY:b.textNode+=O);continue;case _.SCRIPT:O==="<"?b.state=_.SCRIPT_ENDING:b.script+=O;continue;case _.SCRIPT_ENDING:O==="/"?b.state=_.CLOSE_TAG:(b.script+="<"+O,b.state=_.SCRIPT);continue;case _.OPEN_WAKA:if(O==="!")b.state=_.SGML_DECL,b.sgmlDecl="";else if(!m(O))if(D(v,O))b.state=_.OPEN_TAG,b.tagName=O;else if(O==="/")b.state=_.CLOSE_TAG,b.tagName="";else if(O==="?")b.state=_.PROC_INST,b.procInstName=b.procInstBody="";else{if(B(b,"Unencoded <"),b.startTagPosition+1<b.position){var ie=b.position-b.startTagPosition;O=new Array(ie).join(" ")+O}b.textNode+="<"+O,b.state=_.TEXT}continue;case _.SGML_DECL:if(b.sgmlDecl+O==="--"){b.state=_.COMMENT,b.comment="",b.sgmlDecl="";continue}b.doctype&&b.doctype!==!0&&b.sgmlDecl?(b.state=_.DOCTYPE_DTD,b.doctype+="<!"+b.sgmlDecl+O,b.sgmlDecl=""):(b.sgmlDecl+O).toUpperCase()===d?(x(b,"onopencdata"),b.state=_.CDATA,b.sgmlDecl="",b.cdata=""):(b.sgmlDecl+O).toUpperCase()===h?(b.state=_.DOCTYPE,(b.doctype||b.sawRoot)&&B(b,"Inappropriately located doctype declaration"),b.doctype="",b.sgmlDecl=""):O===">"?(x(b,"onsgmldeclaration",b.sgmlDecl),b.sgmlDecl="",b.state=_.TEXT):(S(O)&&(b.state=_.SGML_DECL_QUOTED),b.sgmlDecl+=O);continue;case _.SGML_DECL_QUOTED:O===b.q&&(b.state=_.SGML_DECL,b.q=""),b.sgmlDecl+=O;continue;case _.DOCTYPE:O===">"?(b.state=_.TEXT,x(b,"ondoctype",b.doctype),b.doctype=!0):(b.doctype+=O,O==="["?b.state=_.DOCTYPE_DTD:S(O)&&(b.state=_.DOCTYPE_QUOTED,b.q=O));continue;case _.DOCTYPE_QUOTED:b.doctype+=O,O===b.q&&(b.q="",b.state=_.DOCTYPE);continue;case _.DOCTYPE_DTD:O==="]"?(b.doctype+=O,b.state=_.DOCTYPE):O==="<"?(b.state=_.OPEN_WAKA,b.startTagPosition=b.position):S(O)?(b.doctype+=O,b.state=_.DOCTYPE_DTD_QUOTED,b.q=O):b.doctype+=O;continue;case _.DOCTYPE_DTD_QUOTED:b.doctype+=O,O===b.q&&(b.state=_.DOCTYPE_DTD,b.q="");continue;case _.COMMENT:O==="-"?b.state=_.COMMENT_ENDING:b.comment+=O;continue;case _.COMMENT_ENDING:O==="-"?(b.state=_.COMMENT_ENDED,b.comment=A(b.opt,b.comment),b.comment&&x(b,"oncomment",b.comment),b.comment=""):(b.comment+="-"+O,b.state=_.COMMENT);continue;case _.COMMENT_ENDED:O!==">"?(B(b,"Malformed comment"),b.comment+="--"+O,b.state=_.COMMENT):b.doctype&&b.doctype!==!0?b.state=_.DOCTYPE_DTD:b.state=_.TEXT;continue;case _.CDATA:O==="]"?b.state=_.CDATA_ENDING:b.cdata+=O;continue;case _.CDATA_ENDING:O==="]"?b.state=_.CDATA_ENDING_2:(b.cdata+="]"+O,b.state=_.CDATA);continue;case _.CDATA_ENDING_2:O===">"?(b.cdata&&x(b,"oncdata",b.cdata),x(b,"onclosecdata"),b.cdata="",b.state=_.TEXT):O==="]"?b.cdata+="]":(b.cdata+="]]"+O,b.state=_.CDATA);continue;case _.PROC_INST:O==="?"?b.state=_.PROC_INST_ENDING:m(O)?b.state=_.PROC_INST_BODY:b.procInstName+=O;continue;case _.PROC_INST_BODY:if(!b.procInstBody&&m(O))continue;O==="?"?b.state=_.PROC_INST_ENDING:b.procInstBody+=O;continue;case _.PROC_INST_ENDING:O===">"?(x(b,"onprocessinginstruction",{name:b.procInstName,body:b.procInstBody}),b.procInstName=b.procInstBody="",b.state=_.TEXT):(b.procInstBody+="?"+O,b.state=_.PROC_INST_BODY);continue;case _.OPEN_TAG:D(p,O)?b.tagName+=O:(F(b),O===">"?G(b):O==="/"?b.state=_.OPEN_TAG_SLASH:(m(O)||B(b,"Invalid character in tag name"),b.state=_.ATTRIB));continue;case _.OPEN_TAG_SLASH:O===">"?(G(b,!0),we(b)):(B(b,"Forward-slash in opening tag not followed by >"),b.state=_.ATTRIB);continue;case _.ATTRIB:if(m(O))continue;O===">"?G(b):O==="/"?b.state=_.OPEN_TAG_SLASH:D(v,O)?(b.attribName=O,b.attribValue="",b.state=_.ATTRIB_NAME):B(b,"Invalid attribute name");continue;case _.ATTRIB_NAME:O==="="?b.state=_.ATTRIB_VALUE:O===">"?(B(b,"Attribute without value"),b.attribValue=b.attribName,ee(b),G(b)):m(O)?b.state=_.ATTRIB_NAME_SAW_WHITE:D(p,O)?b.attribName+=O:B(b,"Invalid attribute name");continue;case _.ATTRIB_NAME_SAW_WHITE:if(O==="=")b.state=_.ATTRIB_VALUE;else{if(m(O))continue;B(b,"Attribute without value"),b.tag.attributes[b.attribName]="",b.attribValue="",x(b,"onattribute",{name:b.attribName,value:""}),b.attribName="",O===">"?G(b):D(v,O)?(b.attribName=O,b.state=_.ATTRIB_NAME):(B(b,"Invalid attribute name"),b.state=_.ATTRIB)}continue;case _.ATTRIB_VALUE:if(m(O))continue;S(O)?(b.q=O,b.state=_.ATTRIB_VALUE_QUOTED):(b.opt.unquotedAttributeValues||T(b,"Unquoted attribute value"),b.state=_.ATTRIB_VALUE_UNQUOTED,b.attribValue=O);continue;case _.ATTRIB_VALUE_QUOTED:if(O!==b.q){O==="&"?b.state=_.ATTRIB_VALUE_ENTITY_Q:b.attribValue+=O;continue}ee(b),b.q="",b.state=_.ATTRIB_VALUE_CLOSED;continue;case _.ATTRIB_VALUE_CLOSED:m(O)?b.state=_.ATTRIB:O===">"?G(b):O==="/"?b.state=_.OPEN_TAG_SLASH:D(v,O)?(B(b,"No whitespace between attributes"),b.attribName=O,b.attribValue="",b.state=_.ATTRIB_NAME):B(b,"Invalid attribute name");continue;case _.ATTRIB_VALUE_UNQUOTED:if(!L(O)){O==="&"?b.state=_.ATTRIB_VALUE_ENTITY_U:b.attribValue+=O;continue}ee(b),O===">"?G(b):b.state=_.ATTRIB;continue;case _.CLOSE_TAG:if(b.tagName)O===">"?we(b):D(p,O)?b.tagName+=O:b.script?(b.script+="</"+b.tagName,b.tagName="",b.state=_.SCRIPT):(m(O)||B(b,"Invalid tagname in closing tag"),b.state=_.CLOSE_TAG_SAW_WHITE);else{if(m(O))continue;N(v,O)?b.script?(b.script+="</"+O,b.state=_.SCRIPT):B(b,"Invalid tagname in closing tag."):b.tagName=O}continue;case _.CLOSE_TAG_SAW_WHITE:if(m(O))continue;O===">"?we(b):B(b,"Invalid characters in closing tag");continue;case _.TEXT_ENTITY:case _.ATTRIB_VALUE_ENTITY_Q:case _.ATTRIB_VALUE_ENTITY_U:var ce,he;switch(b.state){case _.TEXT_ENTITY:ce=_.TEXT,he="textNode";break;case _.ATTRIB_VALUE_ENTITY_Q:ce=_.ATTRIB_VALUE_QUOTED,he="attribValue";break;case _.ATTRIB_VALUE_ENTITY_U:ce=_.ATTRIB_VALUE_UNQUOTED,he="attribValue";break}if(O===";"){var ge=se(b);b.opt.unparsedEntities&&!Object.values(e.XML_ENTITIES).includes(ge)?(b.entity="",b.state=ce,b.write(ge)):(b[he]+=ge,b.entity="",b.state=ce)}else D(b.entity.length?w:E,O)?b.entity+=O:(B(b,"Invalid character in entity name"),b[he]+="&"+b.entity+O,b.entity="",b.state=ce);continue;default:throw new Error(b,"Unknown state: "+b.state)}return b.position>=b.bufferCheckPosition&&s(b),b}/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */String.fromCodePoint||function(){var k=String.fromCharCode,b=Math.floor,P=function(){var O=16384,J=[],ie,ce,he=-1,ge=arguments.length;if(!ge)return"";for(var tt="";++he<ge;){var re=Number(arguments[he]);if(!isFinite(re)||re<0||re>1114111||b(re)!==re)throw RangeError("Invalid code point: "+re);re<=65535?J.push(re):(re-=65536,ie=(re>>10)+55296,ce=re%1024+56320,J.push(ie,ce)),(he+1===ge||J.length>O)&&(tt+=k.apply(null,J),J.length=0)}return tt};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:P,configurable:!0,writable:!0}):String.fromCodePoint=P}()})(i)}(co)),co}var ho,Pl;function vr(){return Pl||(Pl=1,ho={isArray:function(i){return Array.isArray?Array.isArray(i):Object.prototype.toString.call(i)==="[object Array]"}}),ho}var fo,Fl;function xr(){if(Fl)return fo;Fl=1;var i=vr().isArray;return fo={copyOptions:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},ensureFlagExists:function(e,t){(!(e in t)||typeof t[e]!="boolean")&&(t[e]=!1)},ensureSpacesExists:function(e){(!("spaces"in e)||typeof e.spaces!="number"&&typeof e.spaces!="string")&&(e.spaces=0)},ensureAlwaysArrayExists:function(e){(!("alwaysArray"in e)||typeof e.alwaysArray!="boolean"&&!i(e.alwaysArray))&&(e.alwaysArray=!1)},ensureKeyExists:function(e,t){(!(e+"Key"in t)||typeof t[e+"Key"]!="string")&&(t[e+"Key"]=t.compact?"_"+e:e)},checkFnExists:function(e,t){return e+"Fn"in t}},fo}var po,Rl;function ou(){if(Rl)return po;Rl=1;var i=Xg(),e=xr(),t=vr().isArray,n,s;function o(p){return n=e.copyOptions(p),e.ensureFlagExists("ignoreDeclaration",n),e.ensureFlagExists("ignoreInstruction",n),e.ensureFlagExists("ignoreAttributes",n),e.ensureFlagExists("ignoreText",n),e.ensureFlagExists("ignoreComment",n),e.ensureFlagExists("ignoreCdata",n),e.ensureFlagExists("ignoreDoctype",n),e.ensureFlagExists("compact",n),e.ensureFlagExists("alwaysChildren",n),e.ensureFlagExists("addParent",n),e.ensureFlagExists("trim",n),e.ensureFlagExists("nativeType",n),e.ensureFlagExists("nativeTypeAttributes",n),e.ensureFlagExists("sanitize",n),e.ensureFlagExists("instructionHasAttributes",n),e.ensureFlagExists("captureSpacesBetweenElements",n),e.ensureAlwaysArrayExists(n),e.ensureKeyExists("declaration",n),e.ensureKeyExists("instruction",n),e.ensureKeyExists("attributes",n),e.ensureKeyExists("text",n),e.ensureKeyExists("comment",n),e.ensureKeyExists("cdata",n),e.ensureKeyExists("doctype",n),e.ensureKeyExists("type",n),e.ensureKeyExists("name",n),e.ensureKeyExists("elements",n),e.ensureKeyExists("parent",n),e.checkFnExists("doctype",n),e.checkFnExists("instruction",n),e.checkFnExists("cdata",n),e.checkFnExists("comment",n),e.checkFnExists("text",n),e.checkFnExists("instructionName",n),e.checkFnExists("elementName",n),e.checkFnExists("attributeName",n),e.checkFnExists("attributeValue",n),e.checkFnExists("attributes",n),n}function r(p){var E=Number(p);if(!isNaN(E))return E;var w=p.toLowerCase();return w==="true"?!0:w==="false"?!1:p}function a(p,E){var w;if(n.compact){if(!s[n[p+"Key"]]&&(t(n.alwaysArray)?n.alwaysArray.indexOf(n[p+"Key"])!==-1:n.alwaysArray)&&(s[n[p+"Key"]]=[]),s[n[p+"Key"]]&&!t(s[n[p+"Key"]])&&(s[n[p+"Key"]]=[s[n[p+"Key"]]]),p+"Fn"in n&&typeof E=="string"&&(E=n[p+"Fn"](E,s)),p==="instruction"&&("instructionFn"in n||"instructionNameFn"in n)){for(w in E)if(E.hasOwnProperty(w))if("instructionFn"in n)E[w]=n.instructionFn(E[w],w,s);else{var m=E[w];delete E[w],E[n.instructionNameFn(w,m,s)]=m}}t(s[n[p+"Key"]])?s[n[p+"Key"]].push(E):s[n[p+"Key"]]=E}else{s[n.elementsKey]||(s[n.elementsKey]=[]);var S={};if(S[n.typeKey]=p,p==="instruction"){for(w in E)if(E.hasOwnProperty(w))break;S[n.nameKey]="instructionNameFn"in n?n.instructionNameFn(w,E,s):w,n.instructionHasAttributes?(S[n.attributesKey]=E[w][n.attributesKey],"instructionFn"in n&&(S[n.attributesKey]=n.instructionFn(S[n.attributesKey],w,s))):("instructionFn"in n&&(E[w]=n.instructionFn(E[w],w,s)),S[n.instructionKey]=E[w])}else p+"Fn"in n&&(E=n[p+"Fn"](E,s)),S[n[p+"Key"]]=E;n.addParent&&(S[n.parentKey]=s),s[n.elementsKey].push(S)}}function l(p){if("attributesFn"in n&&p&&(p=n.attributesFn(p,s)),(n.trim||"attributeValueFn"in n||"attributeNameFn"in n||n.nativeTypeAttributes)&&p){var E;for(E in p)if(p.hasOwnProperty(E)&&(n.trim&&(p[E]=p[E].trim()),n.nativeTypeAttributes&&(p[E]=r(p[E])),"attributeValueFn"in n&&(p[E]=n.attributeValueFn(p[E],E,s)),"attributeNameFn"in n)){var w=p[E];delete p[E],p[n.attributeNameFn(E,p[E],s)]=w}}return p}function c(p){var E={};if(p.body&&(p.name.toLowerCase()==="xml"||n.instructionHasAttributes)){for(var w=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,m;(m=w.exec(p.body))!==null;)E[m[1]]=m[2]||m[3]||m[4];E=l(E)}if(p.name.toLowerCase()==="xml"){if(n.ignoreDeclaration)return;s[n.declarationKey]={},Object.keys(E).length&&(s[n.declarationKey][n.attributesKey]=E),n.addParent&&(s[n.declarationKey][n.parentKey]=s)}else{if(n.ignoreInstruction)return;n.trim&&(p.body=p.body.trim());var S={};n.instructionHasAttributes&&Object.keys(E).length?(S[p.name]={},S[p.name][n.attributesKey]=E):S[p.name]=p.body,a("instruction",S)}}function u(p,E){var w;if(typeof p=="object"&&(E=p.attributes,p=p.name),E=l(E),"elementNameFn"in n&&(p=n.elementNameFn(p,s)),n.compact){if(w={},!n.ignoreAttributes&&E&&Object.keys(E).length){w[n.attributesKey]={};var m;for(m in E)E.hasOwnProperty(m)&&(w[n.attributesKey][m]=E[m])}!(p in s)&&(t(n.alwaysArray)?n.alwaysArray.indexOf(p)!==-1:n.alwaysArray)&&(s[p]=[]),s[p]&&!t(s[p])&&(s[p]=[s[p]]),t(s[p])?s[p].push(w):s[p]=w}else s[n.elementsKey]||(s[n.elementsKey]=[]),w={},w[n.typeKey]="element",w[n.nameKey]=p,!n.ignoreAttributes&&E&&Object.keys(E).length&&(w[n.attributesKey]=E),n.alwaysChildren&&(w[n.elementsKey]=[]),s[n.elementsKey].push(w);w[n.parentKey]=s,s=w}function d(p){n.ignoreText||!p.trim()&&!n.captureSpacesBetweenElements||(n.trim&&(p=p.trim()),n.nativeType&&(p=r(p)),n.sanitize&&(p=p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),a("text",p))}function h(p){n.ignoreComment||(n.trim&&(p=p.trim()),a("comment",p))}function f(p){var E=s[n.parentKey];n.addParent||delete s[n.parentKey],s=E}function g(p){n.ignoreCdata||(n.trim&&(p=p.trim()),a("cdata",p))}function y(p){n.ignoreDoctype||(p=p.replace(/^ /,""),n.trim&&(p=p.trim()),a("doctype",p))}function v(p){p.note=p}return po=function(p,E){var w=i.parser(!0,{}),m={};if(s=m,n=o(E),w.opt={strictEntities:!0},w.onopentag=u,w.ontext=d,w.oncomment=h,w.onclosetag=f,w.onerror=v,w.oncdata=g,w.ondoctype=y,w.onprocessinginstruction=c,w.write(p).close(),m[n.elementsKey]){var S=m[n.elementsKey];delete m[n.elementsKey],m[n.elementsKey]=S,delete m.text}return m},po}var mo,$l;function Zg(){if($l)return mo;$l=1;var i=xr(),e=ou();function t(n){var s=i.copyOptions(n);return i.ensureSpacesExists(s),s}return mo=function(n,s){var o,r,a,l;return o=t(s),r=e(n,o),l="compact"in o&&o.compact?"_parent":"parent","addParent"in o&&o.addParent?a=JSON.stringify(r,function(c,u){return c===l?"_":u},o.spaces):a=JSON.stringify(r,null,o.spaces),a.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")},mo}var go,zl;function ru(){if(zl)return go;zl=1;var i=xr(),e=vr().isArray,t,n;function s(w){var m=i.copyOptions(w);return i.ensureFlagExists("ignoreDeclaration",m),i.ensureFlagExists("ignoreInstruction",m),i.ensureFlagExists("ignoreAttributes",m),i.ensureFlagExists("ignoreText",m),i.ensureFlagExists("ignoreComment",m),i.ensureFlagExists("ignoreCdata",m),i.ensureFlagExists("ignoreDoctype",m),i.ensureFlagExists("compact",m),i.ensureFlagExists("indentText",m),i.ensureFlagExists("indentCdata",m),i.ensureFlagExists("indentAttributes",m),i.ensureFlagExists("indentInstruction",m),i.ensureFlagExists("fullTagEmptyElement",m),i.ensureFlagExists("noQuotesForNativeAttributes",m),i.ensureSpacesExists(m),typeof m.spaces=="number"&&(m.spaces=Array(m.spaces+1).join(" ")),i.ensureKeyExists("declaration",m),i.ensureKeyExists("instruction",m),i.ensureKeyExists("attributes",m),i.ensureKeyExists("text",m),i.ensureKeyExists("comment",m),i.ensureKeyExists("cdata",m),i.ensureKeyExists("doctype",m),i.ensureKeyExists("type",m),i.ensureKeyExists("name",m),i.ensureKeyExists("elements",m),i.checkFnExists("doctype",m),i.checkFnExists("instruction",m),i.checkFnExists("cdata",m),i.checkFnExists("comment",m),i.checkFnExists("text",m),i.checkFnExists("instructionName",m),i.checkFnExists("elementName",m),i.checkFnExists("attributeName",m),i.checkFnExists("attributeValue",m),i.checkFnExists("attributes",m),i.checkFnExists("fullTagEmptyElement",m),m}function o(w,m,S){return(!S&&w.spaces?`
`:"")+Array(m+1).join(w.spaces)}function r(w,m,S){if(m.ignoreAttributes)return"";"attributesFn"in m&&(w=m.attributesFn(w,n,t));var L,D,N,_,$=[];for(L in w)w.hasOwnProperty(L)&&w[L]!==null&&w[L]!==void 0&&(_=m.noQuotesForNativeAttributes&&typeof w[L]!="string"?"":'"',D=""+w[L],D=D.replace(/"/g,"&quot;"),N="attributeNameFn"in m?m.attributeNameFn(L,D,n,t):L,$.push(m.spaces&&m.indentAttributes?o(m,S+1,!1):" "),$.push(N+"="+_+("attributeValueFn"in m?m.attributeValueFn(D,L,n,t):D)+_));return w&&Object.keys(w).length&&m.spaces&&m.indentAttributes&&$.push(o(m,S,!1)),$.join("")}function a(w,m,S){return t=w,n="xml",m.ignoreDeclaration?"":"<?xml"+r(w[m.attributesKey],m,S)+"?>"}function l(w,m,S){if(m.ignoreInstruction)return"";var L;for(L in w)if(w.hasOwnProperty(L))break;var D="instructionNameFn"in m?m.instructionNameFn(L,w[L],n,t):L;if(typeof w[L]=="object")return t=w,n=D,"<?"+D+r(w[L][m.attributesKey],m,S)+"?>";var N=w[L]?w[L]:"";return"instructionFn"in m&&(N=m.instructionFn(N,L,n,t)),"<?"+D+(N?" "+N:"")+"?>"}function c(w,m){return m.ignoreComment?"":"<!--"+("commentFn"in m?m.commentFn(w,n,t):w)+"-->"}function u(w,m){return m.ignoreCdata?"":"<![CDATA["+("cdataFn"in m?m.cdataFn(w,n,t):w.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function d(w,m){return m.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in m?m.doctypeFn(w,n,t):w)+">"}function h(w,m){return m.ignoreText?"":(w=""+w,w=w.replace(/&amp;/g,"&"),w=w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in m?m.textFn(w,n,t):w)}function f(w,m){var S;if(w.elements&&w.elements.length)for(S=0;S<w.elements.length;++S)switch(w.elements[S][m.typeKey]){case"text":if(m.indentText)return!0;break;case"cdata":if(m.indentCdata)return!0;break;case"instruction":if(m.indentInstruction)return!0;break;case"doctype":case"comment":case"element":return!0;default:return!0}return!1}function g(w,m,S){t=w,n=w.name;var L=[],D="elementNameFn"in m?m.elementNameFn(w.name,w):w.name;L.push("<"+D),w[m.attributesKey]&&L.push(r(w[m.attributesKey],m,S));var N=w[m.elementsKey]&&w[m.elementsKey].length||w[m.attributesKey]&&w[m.attributesKey]["xml:space"]==="preserve";return N||("fullTagEmptyElementFn"in m?N=m.fullTagEmptyElementFn(w.name,w):N=m.fullTagEmptyElement),N?(L.push(">"),w[m.elementsKey]&&w[m.elementsKey].length&&(L.push(y(w[m.elementsKey],m,S+1)),t=w,n=w.name),L.push(m.spaces&&f(w,m)?`
`+Array(S+1).join(m.spaces):""),L.push("</"+D+">")):L.push("/>"),L.join("")}function y(w,m,S,L){return w.reduce(function(D,N){var _=o(m,S,L&&!D);switch(N.type){case"element":return D+_+g(N,m,S);case"comment":return D+_+c(N[m.commentKey],m);case"doctype":return D+_+d(N[m.doctypeKey],m);case"cdata":return D+(m.indentCdata?_:"")+u(N[m.cdataKey],m);case"text":return D+(m.indentText?_:"")+h(N[m.textKey],m);case"instruction":var $={};return $[N[m.nameKey]]=N[m.attributesKey]?N:N[m.instructionKey],D+(m.indentInstruction?_:"")+l($,m,S)}},"")}function v(w,m,S){var L;for(L in w)if(w.hasOwnProperty(L))switch(L){case m.parentKey:case m.attributesKey:break;case m.textKey:if(m.indentText||S)return!0;break;case m.cdataKey:if(m.indentCdata||S)return!0;break;case m.instructionKey:if(m.indentInstruction||S)return!0;break;case m.doctypeKey:case m.commentKey:return!0;default:return!0}return!1}function p(w,m,S,L,D){t=w,n=m;var N="elementNameFn"in S?S.elementNameFn(m,w):m;if(typeof w>"u"||w===null||w==="")return"fullTagEmptyElementFn"in S&&S.fullTagEmptyElementFn(m,w)||S.fullTagEmptyElement?"<"+N+"></"+N+">":"<"+N+"/>";var _=[];if(m){if(_.push("<"+N),typeof w!="object")return _.push(">"+h(w,S)+"</"+N+">"),_.join("");w[S.attributesKey]&&_.push(r(w[S.attributesKey],S,L));var $=v(w,S,!0)||w[S.attributesKey]&&w[S.attributesKey]["xml:space"]==="preserve";if($||("fullTagEmptyElementFn"in S?$=S.fullTagEmptyElementFn(m,w):$=S.fullTagEmptyElement),$)_.push(">");else return _.push("/>"),_.join("")}return _.push(E(w,S,L+1,!1)),t=w,n=m,m&&_.push((D?o(S,L,!1):"")+"</"+N+">"),_.join("")}function E(w,m,S,L){var D,N,_,$=[];for(N in w)if(w.hasOwnProperty(N))for(_=e(w[N])?w[N]:[w[N]],D=0;D<_.length;++D){switch(N){case m.declarationKey:$.push(a(_[D],m,S));break;case m.instructionKey:$.push((m.indentInstruction?o(m,S,L):"")+l(_[D],m,S));break;case m.attributesKey:case m.parentKey:break;case m.textKey:$.push((m.indentText?o(m,S,L):"")+h(_[D],m));break;case m.cdataKey:$.push((m.indentCdata?o(m,S,L):"")+u(_[D],m));break;case m.doctypeKey:$.push(o(m,S,L)+d(_[D],m));break;case m.commentKey:$.push(o(m,S,L)+c(_[D],m));break;default:$.push(o(m,S,L)+p(_[D],N,m,S,v(_[D],m)))}L=L&&!$.length}return $.join("")}return go=function(w,m){m=s(m);var S=[];return t=w,n="_root_",m.compact?S.push(E(w,m,0,!0)):(w[m.declarationKey]&&S.push(a(w[m.declarationKey],m,0)),w[m.elementsKey]&&w[m.elementsKey].length&&S.push(y(w[m.elementsKey],m,0,!S.length))),S.join("")},go}var bo,jl;function Qg(){if(jl)return bo;jl=1;var i=ru();return bo=function(e,t){e instanceof Buffer&&(e=e.toString());var n=null;if(typeof e=="string")try{n=JSON.parse(e)}catch{throw new Error("The JSON structure is invalid")}else n=e;return i(n,t)},bo}var yo,Ul;function eb(){if(Ul)return yo;Ul=1;var i=ou(),e=Zg(),t=ru(),n=Qg();return yo={xml2js:i,xml2json:e,js2xml:t,json2xml:n},yo}var Hl=eb();const wr=Symbol.for("yaml.alias"),Wo=Symbol.for("yaml.document"),Et=Symbol.for("yaml.map"),au=Symbol.for("yaml.pair"),ut=Symbol.for("yaml.scalar"),xn=Symbol.for("yaml.seq"),Ye=Symbol.for("yaml.node.type"),qt=i=>!!i&&typeof i=="object"&&i[Ye]===wr,Gt=i=>!!i&&typeof i=="object"&&i[Ye]===Wo,wn=i=>!!i&&typeof i=="object"&&i[Ye]===Et,le=i=>!!i&&typeof i=="object"&&i[Ye]===au,ne=i=>!!i&&typeof i=="object"&&i[Ye]===ut,kn=i=>!!i&&typeof i=="object"&&i[Ye]===xn;function ue(i){if(i&&typeof i=="object")switch(i[Ye]){case Et:case xn:return!0}return!1}function de(i){if(i&&typeof i=="object")switch(i[Ye]){case wr:case Et:case ut:case xn:return!0}return!1}const tb=i=>(ne(i)||ue(i))&&!!i.anchor,Pe=Symbol("break visit"),lu=Symbol("skip children"),ct=Symbol("remove node");function Tt(i,e){const t=cu(e);Gt(i)?rn(null,i.contents,t,Object.freeze([i]))===ct&&(i.contents=null):rn(null,i,t,Object.freeze([]))}Tt.BREAK=Pe;Tt.SKIP=lu;Tt.REMOVE=ct;function rn(i,e,t,n){const s=uu(i,e,t,n);if(de(s)||le(s))return du(i,n,s),rn(i,s,t,n);if(typeof s!="symbol"){if(ue(e)){n=Object.freeze(n.concat(e));for(let o=0;o<e.items.length;++o){const r=rn(o,e.items[o],t,n);if(typeof r=="number")o=r-1;else{if(r===Pe)return Pe;r===ct&&(e.items.splice(o,1),o-=1)}}}else if(le(e)){n=Object.freeze(n.concat(e));const o=rn("key",e.key,t,n);if(o===Pe)return Pe;o===ct&&(e.key=null);const r=rn("value",e.value,t,n);if(r===Pe)return Pe;r===ct&&(e.value=null)}}return s}async function Ts(i,e){const t=cu(e);Gt(i)?await an(null,i.contents,t,Object.freeze([i]))===ct&&(i.contents=null):await an(null,i,t,Object.freeze([]))}Ts.BREAK=Pe;Ts.SKIP=lu;Ts.REMOVE=ct;async function an(i,e,t,n){const s=await uu(i,e,t,n);if(de(s)||le(s))return du(i,n,s),an(i,s,t,n);if(typeof s!="symbol"){if(ue(e)){n=Object.freeze(n.concat(e));for(let o=0;o<e.items.length;++o){const r=await an(o,e.items[o],t,n);if(typeof r=="number")o=r-1;else{if(r===Pe)return Pe;r===ct&&(e.items.splice(o,1),o-=1)}}}else if(le(e)){n=Object.freeze(n.concat(e));const o=await an("key",e.key,t,n);if(o===Pe)return Pe;o===ct&&(e.key=null);const r=await an("value",e.value,t,n);if(r===Pe)return Pe;r===ct&&(e.value=null)}}return s}function cu(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function uu(i,e,t,n){var s,o,r,a,l;if(typeof t=="function")return t(i,e,n);if(wn(e))return(s=t.Map)==null?void 0:s.call(t,i,e,n);if(kn(e))return(o=t.Seq)==null?void 0:o.call(t,i,e,n);if(le(e))return(r=t.Pair)==null?void 0:r.call(t,i,e,n);if(ne(e))return(a=t.Scalar)==null?void 0:a.call(t,i,e,n);if(qt(e))return(l=t.Alias)==null?void 0:l.call(t,i,e,n)}function du(i,e,t){const n=e[e.length-1];if(ue(n))n.items[i]=t;else if(le(n))i==="key"?n.key=t:n.value=t;else if(Gt(n))n.contents=t;else{const s=qt(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const nb={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},ib=i=>i.replace(/[!,[\]{}]/g,e=>nb[e]);class Me{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Me.defaultYaml,e),this.tags=Object.assign({},Me.defaultTags,t)}clone(){const e=new Me(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Me(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Me.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Me.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:Me.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Me.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[o,r]=n;return this.tags[o]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[o]=n;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{const r=/^\d+\.\d+$/.test(o);return t(6,`Unsupported YAML version ${o}`,r),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const r=e.slice(2,-1);return r==="!"||r==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),r)}const[,n,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const o=this.tags[n];if(o)try{return o+decodeURIComponent(s)}catch(r){return t(String(r)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+ib(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&de(e.contents)){const o={};Tt(e.contents,(r,a)=>{de(a)&&a.tag&&(o[a.tag]=!0)}),s=Object.keys(o)}else s=[];for(const[o,r]of n)o==="!!"&&r==="tag:yaml.org,2002:"||(!e||s.some(a=>a.startsWith(r)))&&t.push(`%TAG ${o} ${r}`);return t.join(`
`)}}Me.defaultYaml={explicit:!1,version:"1.2"};Me.defaultTags={"!!":"tag:yaml.org,2002:"};function hu(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(t)}return!0}function fu(i){const e=new Set;return Tt(i,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function pu(i,e){for(let t=1;;++t){const n=`${i}${t}`;if(!e.has(n))return n}}function sb(i,e){const t=[],n=new Map;let s=null;return{onAnchor:o=>{t.push(o),s||(s=fu(i));const r=pu(e,s);return s.add(r),r},setAnchors:()=>{for(const o of t){const r=n.get(o);if(typeof r=="object"&&r.anchor&&(ne(r.node)||ue(r.node)))r.node.anchor=r.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=o,a}}},sourceObjects:n}}function ln(i,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,o=n.length;s<o;++s){const r=n[s],a=ln(i,n,String(s),r);a===void 0?delete n[s]:a!==r&&(n[s]=a)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const o=n.get(s),r=ln(i,n,s,o);r===void 0?n.delete(s):r!==o&&n.set(s,r)}else if(n instanceof Set)for(const s of Array.from(n)){const o=ln(i,n,s,s);o===void 0?n.delete(s):o!==s&&(n.delete(s),n.add(o))}else for(const[s,o]of Object.entries(n)){const r=ln(i,n,s,o);r===void 0?delete n[s]:r!==o&&(n[s]=r)}return i.call(e,t,n)}function Ke(i,e,t){if(Array.isArray(i))return i.map((n,s)=>Ke(n,String(s),t));if(i&&typeof i.toJSON=="function"){if(!t||!tb(i))return i.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(i,n),t.onCreate=o=>{n.res=o,delete t.onCreate};const s=i.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof i=="bigint"&&!(t!=null&&t.keep)?Number(i):i}class kr{constructor(e){Object.defineProperty(this,Ye,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:s,reviver:o}={}){if(!Gt(e))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},a=Ke(this,"",r);if(typeof s=="function")for(const{count:l,res:c}of r.anchors.values())s(c,l);return typeof o=="function"?ln(o,{"":a},"",a):a}}class Cs extends kr{constructor(e){super(wr),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let t;return Tt(e,{Node:(n,s)=>{if(s===this)return Tt.BREAK;s.anchor===this.source&&(t=s)}}),t}toJSON(e,t){if(!t)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:o}=t,r=this.resolve(s);if(!r){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=n.get(r);if(a||(Ke(r,null,t),a=n.get(r)),!a||a.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Qi(s,r,n)),a.count*a.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(e,t,n){const s=`*${this.source}`;if(e){if(hu(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(e.implicitKey)return`${s} `}return s}}function Qi(i,e,t){if(qt(e)){const n=e.resolve(i),s=t&&n&&t.get(n);return s?s.count*s.aliasCount:0}else if(ue(e)){let n=0;for(const s of e.items){const o=Qi(i,s,t);o>n&&(n=o)}return n}else if(le(e)){const n=Qi(i,e.key,t),s=Qi(i,e.value,t);return Math.max(n,s)}return 1}const mu=i=>!i||typeof i!="function"&&typeof i!="object";class W extends kr{constructor(e){super(ut),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:Ke(this.value,e,t)}toString(){return String(this.value)}}W.BLOCK_FOLDED="BLOCK_FOLDED";W.BLOCK_LITERAL="BLOCK_LITERAL";W.PLAIN="PLAIN";W.QUOTE_DOUBLE="QUOTE_DOUBLE";W.QUOTE_SINGLE="QUOTE_SINGLE";const ob="tag:yaml.org,2002:";function rb(i,e,t){if(e){const n=t.filter(o=>o.tag===e),s=n.find(o=>!o.format)??n[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(n=>{var s;return((s=n.identify)==null?void 0:s.call(n,i))&&!n.format})}function ui(i,e,t){var d,h,f;if(Gt(i)&&(i=i.contents),de(i))return i;if(le(i)){const g=(h=(d=t.schema[Et]).createNode)==null?void 0:h.call(d,t.schema,null,t);return g.items.push(i),g}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:o,schema:r,sourceObjects:a}=t;let l;if(n&&i&&typeof i=="object"){if(l=a.get(i),l)return l.anchor||(l.anchor=s(i)),new Cs(l.anchor);l={anchor:null,node:null},a.set(i,l)}e!=null&&e.startsWith("!!")&&(e=ob+e.slice(2));let c=rb(i,e,r.tags);if(!c){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const g=new W(i);return l&&(l.node=g),g}c=i instanceof Map?r[Et]:Symbol.iterator in Object(i)?r[xn]:r[Et]}o&&(o(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,i,t):typeof((f=c==null?void 0:c.nodeClass)==null?void 0:f.from)=="function"?c.nodeClass.from(t.schema,i,t):new W(i);return e?u.tag=e:c.default||(u.tag=c.tag),l&&(l.node=u),u}function ms(i,e,t){let n=t;for(let s=e.length-1;s>=0;--s){const o=e[s];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){const r=[];r[o]=n,n=r}else n=new Map([[o,n]])}return ui(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const qn=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class gu extends kr{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>de(n)||le(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(qn(e))this.add(t);else{const[n,...s]=e,o=this.get(n,!0);if(ue(o))o.addIn(s,t);else if(o===void 0&&this.schema)this.set(n,ms(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const s=this.get(t,!0);if(ue(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...s]=e,o=this.get(n,!0);return s.length===0?!t&&ne(o)?o.value:o:ue(o)?o.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!le(t))return!1;const n=t.value;return n==null||e&&ne(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const s=this.get(t,!0);return ue(s)?s.hasIn(n):!1}setIn(e,t){const[n,...s]=e;if(s.length===0)this.set(n,t);else{const o=this.get(n,!0);if(ue(o))o.setIn(s,t);else if(o===void 0&&this.schema)this.set(n,ms(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}const ab=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function yt(i,e){return/^\n+$/.test(i)?i.substring(1):e?i.replace(/^(?! *$)/gm,e):i}const Ft=(i,e,t)=>i.endsWith(`
`)?yt(t,e):t.includes(`
`)?`
`+yt(t,e):(i.endsWith(" ")?"":" ")+t,bu="flow",Ko="block",es="quoted";function As(i,e,t="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:o=20,onFold:r,onOverflow:a}={}){if(!s||s<0)return i;s<o&&(o=0);const l=Math.max(1+o,1+s-e.length);if(i.length<=l)return i;const c=[],u={};let d=s-e.length;typeof n=="number"&&(n>s-Math.max(2,o)?c.push(0):d=s-n);let h,f,g=!1,y=-1,v=-1,p=-1;t===Ko&&(y=Vl(i,y,e.length),y!==-1&&(d=y+l));for(let w;w=i[y+=1];){if(t===es&&w==="\\"){switch(v=y,i[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}p=y}if(w===`
`)t===Ko&&(y=Vl(i,y,e.length)),d=y+e.length+l,h=void 0;else{if(w===" "&&f&&f!==" "&&f!==`
`&&f!=="	"){const m=i[y+1];m&&m!==" "&&m!==`
`&&m!=="	"&&(h=y)}if(y>=d)if(h)c.push(h),d=h+l,h=void 0;else if(t===es){for(;f===" "||f==="	";)f=w,w=i[y+=1],g=!0;const m=y>p+1?y-2:v-1;if(u[m])return i;c.push(m),u[m]=!0,d=m+l,h=void 0}else g=!0}f=w}if(g&&a&&a(),c.length===0)return i;r&&r();let E=i.slice(0,c[0]);for(let w=0;w<c.length;++w){const m=c[w],S=c[w+1]||i.length;m===0?E=`
${e}${i.slice(0,S)}`:(t===es&&u[m]&&(E+=`${i[m]}\\`),E+=`
${e}${i.slice(m+1,S)}`)}return E}function Vl(i,e,t){let n=e,s=e+1,o=i[s];for(;o===" "||o==="	";)if(e<s+t)o=i[++e];else{do o=i[++e];while(o&&o!==`
`);n=e,s=e+1,o=i[s]}return n}const Is=(i,e)=>({indentAtStart:e?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),Ms=i=>/^(%|---|\.\.\.)/m.test(i);function lb(i,e,t){if(!e||e<0)return!1;const n=e-t,s=i.length;if(s<=n)return!1;for(let o=0,r=0;o<s;++o)if(i[o]===`
`){if(o-r>n)return!0;if(r=o+1,s-r<=n)return!1}return!0}function ii(i,e){const t=JSON.stringify(i);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,o=e.indent||(Ms(i)?"  ":"");let r="",a=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(r+=t.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{r+=t.slice(a,l);const u=t.substr(l+2,4);switch(u){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:u.substr(0,2)==="00"?r+="\\x"+u.substr(2):r+=t.substr(l,6)}l+=5,a=l+1}break;case"n":if(n||t[l+2]==='"'||t.length<s)l+=1;else{for(r+=t.slice(a,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)r+=`
`,l+=2;r+=o,t[l+2]===" "&&(r+="\\"),l+=1,a=l+1}break;default:l+=1}return r=a?r+t.slice(a):t,n?r:As(r,o,es,Is(e,!1))}function qo(i,e){if(e.options.singleQuote===!1||e.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return ii(i,e);const t=e.indent||(Ms(i)?"  ":""),n="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:As(n,t,bu,Is(e,!1))}function cn(i,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=ii;else{const s=i.includes('"'),o=i.includes("'");s&&!o?n=qo:o&&!s?n=ii:n=t?qo:ii}return n(i,e)}let Go;try{Go=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Go=/\n+(?!\n|$)/g}function ts({comment:i,type:e,value:t},n,s,o){const{blockQuote:r,commentString:a,lineWidth:l}=n.options;if(!r||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return cn(t,n);const c=n.indent||(n.forceBlockIndent||Ms(t)?"  ":""),u=r==="literal"?!0:r==="folded"||e===W.BLOCK_FOLDED?!1:e===W.BLOCK_LITERAL?!0:!lb(t,l,c.length);if(!t)return u?`|
`:`>
`;let d,h;for(h=t.length;h>0;--h){const S=t[h-1];if(S!==`
`&&S!=="	"&&S!==" ")break}let f=t.substring(h);const g=f.indexOf(`
`);g===-1?d="-":t===f||g!==f.length-1?(d="+",o&&o()):d="",f&&(t=t.slice(0,-f.length),f[f.length-1]===`
`&&(f=f.slice(0,-1)),f=f.replace(Go,`$&${c}`));let y=!1,v,p=-1;for(v=0;v<t.length;++v){const S=t[v];if(S===" ")y=!0;else if(S===`
`)p=v;else break}let E=t.substring(0,p<v?p+1:v);E&&(t=t.substring(E.length),E=E.replace(/\n+/g,`$&${c}`));let m=(y?c?"2":"1":"")+d;if(i&&(m+=" "+a(i.replace(/ ?[\r\n]+/g," ")),s&&s()),!u){const S=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let L=!1;const D=Is(n,!0);r!=="folded"&&e!==W.BLOCK_FOLDED&&(D.onOverflow=()=>{L=!0});const N=As(`${E}${S}${f}`,c,Ko,D);if(!L)return`>${m}
${c}${N}`}return t=t.replace(/\n+/g,`$&${c}`),`|${m}
${c}${E}${t}${f}`}function cb(i,e,t,n){const{type:s,value:o}=i,{actualString:r,implicitKey:a,indent:l,indentStep:c,inFlow:u}=e;if(a&&o.includes(`
`)||u&&/[[\]{},]/.test(o))return cn(o,e);if(!o||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return a||u||!o.includes(`
`)?cn(o,e):ts(i,e,t,n);if(!a&&!u&&s!==W.PLAIN&&o.includes(`
`))return ts(i,e,t,n);if(Ms(o)){if(l==="")return e.forceBlockIndent=!0,ts(i,e,t,n);if(a&&l===c)return cn(o,e)}const d=o.replace(/\n+/g,`$&
${l}`);if(r){const h=y=>{var v;return y.default&&y.tag!=="tag:yaml.org,2002:str"&&((v=y.test)==null?void 0:v.test(d))},{compat:f,tags:g}=e.doc.schema;if(g.some(h)||f!=null&&f.some(h))return cn(o,e)}return a?d:As(d,l,bu,Is(e,!1))}function gi(i,e,t,n){const{implicitKey:s,inFlow:o}=e,r=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:a}=i;a!==W.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(a=W.QUOTE_DOUBLE);const l=u=>{switch(u){case W.BLOCK_FOLDED:case W.BLOCK_LITERAL:return s||o?cn(r.value,e):ts(r,e,t,n);case W.QUOTE_DOUBLE:return ii(r.value,e);case W.QUOTE_SINGLE:return qo(r.value,e);case W.PLAIN:return cb(r,e,t,n);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:u,defaultStringType:d}=e.options,h=s&&u||d;if(c=l(h),c===null)throw new Error(`Unsupported default string type ${h}`)}return c}function yu(i,e){const t=Object.assign({blockQuote:!0,commentString:ab,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:i,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function ub(i,e){var s;if(e.tag){const o=i.filter(r=>r.tag===e.tag);if(o.length>0)return o.find(r=>r.format===e.format)??o[0]}let t,n;if(ne(e)){n=e.value;let o=i.filter(r=>{var a;return(a=r.identify)==null?void 0:a.call(r,n)});if(o.length>1){const r=o.filter(a=>a.test);r.length>0&&(o=r)}t=o.find(r=>r.format===e.format)??o.find(r=>!r.format)}else n=e,t=i.find(o=>o.nodeClass&&n instanceof o.nodeClass);if(!t){const o=((s=n==null?void 0:n.constructor)==null?void 0:s.name)??typeof n;throw new Error(`Tag not resolved for ${o} value`)}return t}function db(i,e,{anchors:t,doc:n}){if(!n.directives)return"";const s=[],o=(ne(i)||ue(i))&&i.anchor;o&&hu(o)&&(t.add(o),s.push(`&${o}`));const r=i.tag?i.tag:e.default?null:e.tag;return r&&s.push(n.directives.tagString(r)),s.join(" ")}function bn(i,e,t,n){var l;if(le(i))return i.toString(e,t,n);if(qt(i)){if(e.doc.directives)return i.toString(e);if((l=e.resolvedAliases)!=null&&l.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(i):e.resolvedAliases=new Set([i]),i=i.resolve(e.doc)}let s;const o=de(i)?i:e.doc.createNode(i,{onTagObj:c=>s=c});s||(s=ub(e.doc.schema.tags,o));const r=db(o,s,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);const a=typeof s.stringify=="function"?s.stringify(o,e,t,n):ne(o)?gi(o,e,t,n):o.toString(e,t,n);return r?ne(o)||a[0]==="{"||a[0]==="["?`${r} ${a}`:`${r}
${e.indent}${a}`:a}function hb({key:i,value:e},t,n,s){const{allNullValues:o,doc:r,indent:a,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:d}}=t;let h=de(i)&&i.comment||null;if(d){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(ue(i)||!de(i)&&typeof i=="object"){const D="With simple keys, collection cannot be used as a key value";throw new Error(D)}}let f=!d&&(!i||h&&e==null&&!t.inFlow||ue(i)||(ne(i)?i.type===W.BLOCK_FOLDED||i.type===W.BLOCK_LITERAL:typeof i=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!f&&(d||!o),indent:a+l});let g=!1,y=!1,v=bn(i,t,()=>g=!0,()=>y=!0);if(!f&&!t.inFlow&&v.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(t.inFlow){if(o||e==null)return g&&n&&n(),v===""?"?":f?`? ${v}`:v}else if(o&&!d||e==null&&f)return v=`? ${v}`,h&&!g?v+=Ft(v,t.indent,c(h)):y&&s&&s(),v;g&&(h=null),f?(h&&(v+=Ft(v,t.indent,c(h))),v=`? ${v}
${a}:`):(v=`${v}:`,h&&(v+=Ft(v,t.indent,c(h))));let p,E,w;de(e)?(p=!!e.spaceBefore,E=e.commentBefore,w=e.comment):(p=!1,E=null,w=null,e&&typeof e=="object"&&(e=r.createNode(e))),t.implicitKey=!1,!f&&!h&&ne(e)&&(t.indentAtStart=v.length+1),y=!1,!u&&l.length>=2&&!t.inFlow&&!f&&kn(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let m=!1;const S=bn(e,t,()=>m=!0,()=>y=!0);let L=" ";if(h||p||E){if(L=p?`
`:"",E){const D=c(E);L+=`
${yt(D,t.indent)}`}S===""&&!t.inFlow?L===`
`&&(L=`

`):L+=`
${t.indent}`}else if(!f&&ue(e)){const D=S[0],N=S.indexOf(`
`),_=N!==-1,$=t.inFlow??e.flow??e.items.length===0;if(_||!$){let j=!1;if(_&&(D==="&"||D==="!")){let x=S.indexOf(" ");D==="&"&&x!==-1&&x<N&&S[x+1]==="!"&&(x=S.indexOf(" ",x+1)),(x===-1||N<x)&&(j=!0)}j||(L=`
${t.indent}`)}}else(S===""||S[0]===`
`)&&(L="");return v+=L+S,t.inFlow?m&&n&&n():w&&!m?v+=Ft(v,t.indent,c(w)):y&&s&&s(),v}function vu(i,e){(i==="debug"||i==="warn")&&console.warn(e)}const Hi="<<",vt={identify:i=>i===Hi||typeof i=="symbol"&&i.description===Hi,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new W(Symbol(Hi)),{addToJSMap:xu}),stringify:()=>Hi},fb=(i,e)=>(vt.identify(e)||ne(e)&&(!e.type||e.type===W.PLAIN)&&vt.identify(e.value))&&(i==null?void 0:i.doc.schema.tags.some(t=>t.tag===vt.tag&&t.default));function xu(i,e,t){if(t=i&&qt(t)?t.resolve(i.doc):t,kn(t))for(const n of t.items)vo(i,e,n);else if(Array.isArray(t))for(const n of t)vo(i,e,n);else vo(i,e,t)}function vo(i,e,t){const n=i&&qt(t)?t.resolve(i.doc):t;if(!wn(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,i,Map);for(const[o,r]of s)e instanceof Map?e.has(o)||e.set(o,r):e instanceof Set?e.add(o):Object.prototype.hasOwnProperty.call(e,o)||Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function wu(i,e,{key:t,value:n}){if(de(t)&&t.addToJSMap)t.addToJSMap(i,e,n);else if(fb(i,t))xu(i,e,n);else{const s=Ke(t,"",i);if(e instanceof Map)e.set(s,Ke(n,s,i));else if(e instanceof Set)e.add(s);else{const o=pb(t,s,i),r=Ke(n,o,i);o in e?Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[o]=r}}return e}function pb(i,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(de(i)&&(t!=null&&t.doc)){const n=yu(t.doc,{});n.anchors=new Set;for(const o of t.anchors.keys())n.anchors.add(o.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=i.toString(n);if(!t.mapKeyWarned){let o=JSON.stringify(s);o.length>40&&(o=o.substring(0,36)+'..."'),vu(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function _r(i,e,t){const n=ui(i,void 0,t),s=ui(e,void 0,t);return new Se(n,s)}class Se{constructor(e,t=null){Object.defineProperty(this,Ye,{value:au}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return de(t)&&(t=t.clone(e)),de(n)&&(n=n.clone(e)),new Se(t,n)}toJSON(e,t){const n=t!=null&&t.mapAsMap?new Map:{};return wu(t,n,this)}toString(e,t,n){return e!=null&&e.doc?hb(this,e,t,n):JSON.stringify(this)}}function ku(i,e,t){return(e.inFlow??i.flow?gb:mb)(i,e,t)}function mb({comment:i,items:e},t,{blockItemPrefix:n,flowChars:s,itemIndent:o,onChompKeep:r,onComment:a}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:o,type:null});let d=!1;const h=[];for(let g=0;g<e.length;++g){const y=e[g];let v=null;if(de(y))!d&&y.spaceBefore&&h.push(""),gs(t,h,y.commentBefore,d),y.comment&&(v=y.comment);else if(le(y)){const E=de(y.key)?y.key:null;E&&(!d&&E.spaceBefore&&h.push(""),gs(t,h,E.commentBefore,d))}d=!1;let p=bn(y,u,()=>v=null,()=>d=!0);v&&(p+=Ft(p,o,c(v))),d&&v&&(d=!1),h.push(n+p)}let f;if(h.length===0)f=s.start+s.end;else{f=h[0];for(let g=1;g<h.length;++g){const y=h[g];f+=y?`
${l}${y}`:`
`}}return i?(f+=`
`+yt(c(i),l),a&&a()):d&&r&&r(),f}function gb({items:i},e,{flowChars:t,itemIndent:n}){const{indent:s,indentStep:o,flowCollectionPadding:r,options:{commentString:a}}=e;n+=o;const l=Object.assign({},e,{indent:n,inFlow:!0,type:null});let c=!1,u=0;const d=[];for(let g=0;g<i.length;++g){const y=i[g];let v=null;if(de(y))y.spaceBefore&&d.push(""),gs(e,d,y.commentBefore,!1),y.comment&&(v=y.comment);else if(le(y)){const E=de(y.key)?y.key:null;E&&(E.spaceBefore&&d.push(""),gs(e,d,E.commentBefore,!1),E.comment&&(c=!0));const w=de(y.value)?y.value:null;w?(w.comment&&(v=w.comment),w.commentBefore&&(c=!0)):y.value==null&&(E!=null&&E.comment)&&(v=E.comment)}v&&(c=!0);let p=bn(y,l,()=>v=null);g<i.length-1&&(p+=","),v&&(p+=Ft(p,n,a(v))),!c&&(d.length>u||p.includes(`
`))&&(c=!0),d.push(p),u=d.length}const{start:h,end:f}=t;if(d.length===0)return h+f;if(!c){const g=d.reduce((y,v)=>y+v.length+2,2);c=e.options.lineWidth>0&&g>e.options.lineWidth}if(c){let g=h;for(const y of d)g+=y?`
${o}${s}${y}`:`
`;return`${g}
${s}${f}`}else return`${h}${r}${d.join(" ")}${r}${f}`}function gs({indent:i,options:{commentString:e}},t,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const o=yt(e(n),i);t.push(o.trimStart())}}function Rt(i,e){const t=ne(e)?e.value:e;for(const n of i)if(le(n)&&(n.key===e||n.key===t||ne(n.key)&&n.key.value===t))return n}class $e extends gu{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Et,e),this.items=[]}static from(e,t,n){const{keepUndefined:s,replacer:o}=n,r=new this(e),a=(l,c)=>{if(typeof o=="function")c=o.call(t,l,c);else if(Array.isArray(o)&&!o.includes(l))return;(c!==void 0||s)&&r.items.push(_r(l,c,n))};if(t instanceof Map)for(const[l,c]of t)a(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))a(l,t[l]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,t){var r;let n;le(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new Se(e,e==null?void 0:e.value):n=new Se(e.key,e.value);const s=Rt(this.items,n.key),o=(r=this.schema)==null?void 0:r.sortMapEntries;if(s){if(!t)throw new Error(`Key ${n.key} already set`);ne(s.value)&&mu(n.value)?s.value.value=n.value:s.value=n.value}else if(o){const a=this.items.findIndex(l=>o(n,l)<0);a===-1?this.items.push(n):this.items.splice(a,0,n)}else this.items.push(n)}delete(e){const t=Rt(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const n=Rt(this.items,e),s=n==null?void 0:n.value;return(!t&&ne(s)?s.value:s)??void 0}has(e){return!!Rt(this.items,e)}set(e,t){this.add(new Se(e,t),!0)}toJSON(e,t,n){const s=n?new n:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const o of this.items)wu(t,s,o);return s}toString(e,t,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!le(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),ku(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const _n={collection:"map",default:!0,nodeClass:$e,tag:"tag:yaml.org,2002:map",resolve(i,e){return wn(i)||e("Expected a mapping for this tag"),i},createNode:(i,e,t)=>$e.from(i,e,t)};class Ct extends gu{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(xn,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Vi(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Vi(e);if(typeof n!="number")return;const s=this.items[n];return!t&&ne(s)?s.value:s}has(e){const t=Vi(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Vi(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];ne(s)&&mu(t)?s.value=t:this.items[n]=t}toJSON(e,t){const n=[];t!=null&&t.onCreate&&t.onCreate(n);let s=0;for(const o of this.items)n.push(Ke(o,String(s++),t));return n}toString(e,t,n){return e?ku(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:s}=n,o=new this(e);if(t&&Symbol.iterator in Object(t)){let r=0;for(let a of t){if(typeof s=="function"){const l=t instanceof Set?a:String(r++);a=s.call(t,l,a)}o.items.push(ui(a,void 0,n))}}return o}}function Vi(i){let e=ne(i)?i.value:i;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const En={collection:"seq",default:!0,nodeClass:Ct,tag:"tag:yaml.org,2002:seq",resolve(i,e){return kn(i)||e("Expected a sequence for this tag"),i},createNode:(i,e,t)=>Ct.from(i,e,t)},Ns={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,e,t,n){return e=Object.assign({actualString:!0},e),gi(i,e,t,n)}},Os={identify:i=>i==null,createNode:()=>new W(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new W(null),stringify:({source:i},e)=>typeof i=="string"&&Os.test.test(i)?i:e.options.nullStr},Er={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new W(i[0]==="t"||i[0]==="T"),stringify({source:i,value:e},t){if(i&&Er.test.test(i)){const n=i[0]==="t"||i[0]==="T";if(e===n)return i}return e?t.options.trueStr:t.options.falseStr}};function et({format:i,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let o=JSON.stringify(n);if(!i&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(o)){let r=o.indexOf(".");r<0&&(r=o.length,o+=".");let a=e-(o.length-r-1);for(;a-- >0;)o+="0"}return o}const _u={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:et},Eu={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():et(i)}},Su={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const e=new W(parseFloat(i)),t=i.indexOf(".");return t!==-1&&i[i.length-1]==="0"&&(e.minFractionDigits=i.length-t-1),e},stringify:et},Ls=i=>typeof i=="bigint"||Number.isInteger(i),Sr=(i,e,t,{intAsBigInt:n})=>n?BigInt(i):parseInt(i.substring(e),t);function Tu(i,e,t){const{value:n}=i;return Ls(n)&&n>=0?t+n.toString(e):et(i)}const Cu={identify:i=>Ls(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,e,t)=>Sr(i,2,8,t),stringify:i=>Tu(i,8,"0o")},Au={identify:Ls,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,e,t)=>Sr(i,0,10,t),stringify:et},Iu={identify:i=>Ls(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,e,t)=>Sr(i,2,16,t),stringify:i=>Tu(i,16,"0x")},bb=[_n,En,Ns,Os,Er,Cu,Au,Iu,_u,Eu,Su];function Wl(i){return typeof i=="bigint"||Number.isInteger(i)}const Wi=({value:i})=>JSON.stringify(i),yb=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:Wi},{identify:i=>i==null,createNode:()=>new W(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Wi},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:Wi},{identify:Wl,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,e,{intAsBigInt:t})=>t?BigInt(i):parseInt(i,10),stringify:({value:i})=>Wl(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:Wi}],vb={default:!0,tag:"",test:/^/,resolve(i,e){return e(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},xb=[_n,En].concat(yb,vb),Tr={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,e){if(typeof atob=="function"){const t=atob(i.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:e,value:t},n,s,o){const r=t;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<r.length;++c)l+=String.fromCharCode(r[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e||(e=W.BLOCK_LITERAL),e!==W.QUOTE_DOUBLE){const l=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),c=Math.ceil(a.length/l),u=new Array(c);for(let d=0,h=0;d<c;++d,h+=l)u[d]=a.substr(h,l);a=u.join(e===W.BLOCK_LITERAL?`
`:" ")}return gi({comment:i,type:e,value:a},n,s,o)}};function Mu(i,e){if(kn(i))for(let t=0;t<i.items.length;++t){let n=i.items[t];if(!le(n)){if(wn(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const s=n.items[0]||new Se(new W(null));if(n.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${n.commentBefore}
${s.key.commentBefore}`:n.commentBefore),n.comment){const o=s.value??s.key;o.comment=o.comment?`${n.comment}
${o.comment}`:n.comment}n=s}i.items[t]=le(n)?n:new Se(n)}}else e("Expected a sequence for this tag");return i}function Nu(i,e,t){const{replacer:n}=t,s=new Ct(i);s.tag="tag:yaml.org,2002:pairs";let o=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof n=="function"&&(r=n.call(e,String(o++),r));let a,l;if(Array.isArray(r))if(r.length===2)a=r[0],l=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const c=Object.keys(r);if(c.length===1)a=c[0],l=r[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=r;s.items.push(_r(a,l,t))}return s}const Cr={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Mu,createNode:Nu};class hn extends Ct{constructor(){super(),this.add=$e.prototype.add.bind(this),this.delete=$e.prototype.delete.bind(this),this.get=$e.prototype.get.bind(this),this.has=$e.prototype.has.bind(this),this.set=$e.prototype.set.bind(this),this.tag=hn.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t!=null&&t.onCreate&&t.onCreate(n);for(const s of this.items){let o,r;if(le(s)?(o=Ke(s.key,"",t),r=Ke(s.value,o,t)):o=Ke(s,"",t),n.has(o))throw new Error("Ordered maps must not include duplicate keys");n.set(o,r)}return n}static from(e,t,n){const s=Nu(e,t,n),o=new this;return o.items=s.items,o}}hn.tag="tag:yaml.org,2002:omap";const Ar={collection:"seq",identify:i=>i instanceof Map,nodeClass:hn,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,e){const t=Mu(i,e),n=[];for(const{key:s}of t.items)ne(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new hn,t)},createNode:(i,e,t)=>hn.from(i,e,t)};function Ou({value:i,source:e},t){return e&&(i?Lu:Du).test.test(e)?e:i?t.options.trueStr:t.options.falseStr}const Lu={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new W(!0),stringify:Ou},Du={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new W(!1),stringify:Ou},wb={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:et},kb={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():et(i)}},_b={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const e=new W(parseFloat(i.replace(/_/g,""))),t=i.indexOf(".");if(t!==-1){const n=i.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:et},bi=i=>typeof i=="bigint"||Number.isInteger(i);function Ds(i,e,t,{intAsBigInt:n}){const s=i[0];if((s==="-"||s==="+")&&(e+=1),i=i.substring(e).replace(/_/g,""),n){switch(t){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const r=BigInt(i);return s==="-"?BigInt(-1)*r:r}const o=parseInt(i,t);return s==="-"?-1*o:o}function Ir(i,e,t){const{value:n}=i;if(bi(n)){const s=n.toString(e);return n<0?"-"+t+s.substr(1):t+s}return et(i)}const Eb={identify:bi,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,e,t)=>Ds(i,2,2,t),stringify:i=>Ir(i,2,"0b")},Sb={identify:bi,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,e,t)=>Ds(i,1,8,t),stringify:i=>Ir(i,8,"0")},Tb={identify:bi,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,e,t)=>Ds(i,0,10,t),stringify:et},Cb={identify:bi,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,e,t)=>Ds(i,2,16,t),stringify:i=>Ir(i,16,"0x")};class fn extends $e{constructor(e){super(e),this.tag=fn.tag}add(e){let t;le(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new Se(e.key,null):t=new Se(e,null),Rt(this.items,t.key)||this.items.push(t)}get(e,t){const n=Rt(this.items,e);return!t&&le(n)?ne(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=Rt(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new Se(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:s}=n,o=new this(e);if(t&&Symbol.iterator in Object(t))for(let r of t)typeof s=="function"&&(r=s.call(t,r,r)),o.items.push(_r(r,null,n));return o}}fn.tag="tag:yaml.org,2002:set";const Mr={collection:"map",identify:i=>i instanceof Set,nodeClass:fn,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,e,t)=>fn.from(i,e,t),resolve(i,e){if(wn(i)){if(i.hasAllNullValues(!0))return Object.assign(new fn,i);e("Set items must all have null values")}else e("Expected a mapping for this tag");return i}};function Nr(i,e){const t=i[0],n=t==="-"||t==="+"?i.substring(1):i,s=r=>e?BigInt(r):Number(r),o=n.replace(/_/g,"").split(":").reduce((r,a)=>r*s(60)+s(a),s(0));return t==="-"?s(-1)*o:o}function Bu(i){let{value:e}=i,t=r=>r;if(typeof e=="bigint")t=r=>BigInt(r);else if(isNaN(e)||!isFinite(e))return et(i);let n="";e<0&&(n="-",e*=t(-1));const s=t(60),o=[e%s];return e<60?o.unshift(0):(e=(e-o[0])/s,o.unshift(e%s),e>=60&&(e=(e-o[0])/s,o.unshift(e))),n+o.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Pu={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,e,{intAsBigInt:t})=>Nr(i,t),stringify:Bu},Fu={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>Nr(i,!1),stringify:Bu},Bs={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const e=i.match(Bs.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,s,o,r,a]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,n-1,s,o||0,r||0,a||0,l);const u=e[8];if(u&&u!=="Z"){let d=Nr(u,!1);Math.abs(d)<30&&(d*=60),c-=6e4*d}return new Date(c)},stringify:({value:i})=>i.toISOString().replace(/(T00:00:00)?\.000Z$/,"")},Kl=[_n,En,Ns,Os,Lu,Du,Eb,Sb,Tb,Cb,wb,kb,_b,Tr,vt,Ar,Cr,Mr,Pu,Fu,Bs],ql=new Map([["core",bb],["failsafe",[_n,En,Ns]],["json",xb],["yaml11",Kl],["yaml-1.1",Kl]]),Gl={binary:Tr,bool:Er,float:Su,floatExp:Eu,floatNaN:_u,floatTime:Fu,int:Au,intHex:Iu,intOct:Cu,intTime:Pu,map:_n,merge:vt,null:Os,omap:Ar,pairs:Cr,seq:En,set:Mr,timestamp:Bs},Ab={"tag:yaml.org,2002:binary":Tr,"tag:yaml.org,2002:merge":vt,"tag:yaml.org,2002:omap":Ar,"tag:yaml.org,2002:pairs":Cr,"tag:yaml.org,2002:set":Mr,"tag:yaml.org,2002:timestamp":Bs};function xo(i,e,t){const n=ql.get(e);if(n&&!i)return t&&!n.includes(vt)?n.concat(vt):n.slice();let s=n;if(!s)if(Array.isArray(i))s=[];else{const o=Array.from(ql.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${o} or define customTags array`)}if(Array.isArray(i))for(const o of i)s=s.concat(o);else typeof i=="function"&&(s=i(s.slice()));return t&&(s=s.concat(vt)),s.reduce((o,r)=>{const a=typeof r=="string"?Gl[r]:r;if(!a){const l=JSON.stringify(r),c=Object.keys(Gl).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return o.includes(a)||o.push(a),o},[])}const Ib=(i,e)=>i.key<e.key?-1:i.key>e.key?1:0;class Ps{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:s,schema:o,sortMapEntries:r,toStringDefaults:a}){this.compat=Array.isArray(e)?xo(e,"compat"):e?xo(null,e):null,this.name=typeof o=="string"&&o||"core",this.knownTags=s?Ab:{},this.tags=xo(t,this.name,n),this.toStringOptions=a??null,Object.defineProperty(this,Et,{value:_n}),Object.defineProperty(this,ut,{value:Ns}),Object.defineProperty(this,xn,{value:En}),this.sortMapEntries=typeof r=="function"?r:r===!0?Ib:null}clone(){const e=Object.create(Ps.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Mb(i,e){var l;const t=[];let n=e.directives===!0;if(e.directives!==!1&&i.directives){const c=i.directives.toString(i);c?(t.push(c),n=!0):i.directives.docStart&&(n=!0)}n&&t.push("---");const s=yu(i,e),{commentString:o}=s.options;if(i.commentBefore){t.length!==1&&t.unshift("");const c=o(i.commentBefore);t.unshift(yt(c,""))}let r=!1,a=null;if(i.contents){if(de(i.contents)){if(i.contents.spaceBefore&&n&&t.push(""),i.contents.commentBefore){const d=o(i.contents.commentBefore);t.push(yt(d,""))}s.forceBlockIndent=!!i.comment,a=i.contents.comment}const c=a?void 0:()=>r=!0;let u=bn(i.contents,s,()=>a=null,c);a&&(u+=Ft(u,"",o(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(bn(i.contents,s));if((l=i.directives)!=null&&l.docEnd)if(i.comment){const c=o(i.comment);c.includes(`
`)?(t.push("..."),t.push(yt(c,""))):t.push(`... ${c}`)}else t.push("...");else{let c=i.comment;c&&r&&(c=c.replace(/^\n+/,"")),c&&((!r||a)&&t[t.length-1]!==""&&t.push(""),t.push(yt(o(c),"")))}return t.join(`
`)+`
`}class Sn{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Ye,{value:Wo});let s=null;typeof t=="function"||Array.isArray(t)?s=t:n===void 0&&t&&(n=t,t=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=o;let{version:r}=o;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new Me({version:r}),this.setSchema(r,n),this.contents=e===void 0?null:this.createNode(e,s,n)}clone(){const e=Object.create(Sn.prototype,{[Ye]:{value:Wo}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=de(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){nn(this.contents)&&this.contents.add(e)}addIn(e,t){nn(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=fu(this);e.anchor=!t||n.has(t)?pu(t||"a",n):t}return new Cs(e.anchor)}createNode(e,t,n){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const v=E=>typeof E=="number"||E instanceof String||E instanceof Number,p=t.filter(v).map(String);p.length>0&&(t=t.concat(p)),s=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:o,anchorPrefix:r,flow:a,keepUndefined:l,onTagObj:c,tag:u}=n??{},{onAnchor:d,setAnchors:h,sourceObjects:f}=sb(this,r||"a"),g={aliasDuplicateObjects:o??!0,keepUndefined:l??!1,onAnchor:d,onTagObj:c,replacer:s,schema:this.schema,sourceObjects:f},y=ui(e,u,g);return a&&ue(y)&&(y.flow=!0),h(),y}createPair(e,t,n={}){const s=this.createNode(e,null,n),o=this.createNode(t,null,n);return new Se(s,o)}delete(e){return nn(this.contents)?this.contents.delete(e):!1}deleteIn(e){return qn(e)?this.contents==null?!1:(this.contents=null,!0):nn(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return ue(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return qn(e)?!t&&ne(this.contents)?this.contents.value:this.contents:ue(this.contents)?this.contents.getIn(e,t):void 0}has(e){return ue(this.contents)?this.contents.has(e):!1}hasIn(e){return qn(e)?this.contents!==void 0:ue(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=ms(this.schema,[e],t):nn(this.contents)&&this.contents.set(e,t)}setIn(e,t){qn(e)?this.contents=t:this.contents==null?this.contents=ms(this.schema,Array.from(e),t):nn(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Me({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Me({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new Ps(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:s,onAnchor:o,reviver:r}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},l=Ke(this.contents,t??"",a);if(typeof o=="function")for(const{count:c,res:u}of a.anchors.values())o(u,c);return typeof r=="function"?ln(r,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Mb(this,e)}}function nn(i){if(ue(i))return!0;throw new Error("Expected a YAML collection as document contents")}class Or extends Error{constructor(e,t,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=t}}class $t extends Or{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class Ru extends Or{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const bs=(i,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:n,col:s}=t.linePos[0];t.message+=` at line ${n}, column ${s}`;let o=s-1,r=i.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(o>=60&&r.length>80){const a=Math.min(o-39,r.length-79);r="…"+r.substring(a),o-=a-1}if(r.length>80&&(r=r.substring(0,79)+"…"),n>1&&/^ *$/.test(r.substring(0,o))){let a=i.substring(e.lineStarts[n-2],e.lineStarts[n-1]);a.length>80&&(a=a.substring(0,79)+`…
`),r=a+r}if(/[^ ]/.test(r)){let a=1;const l=t.linePos[1];l&&l.line===n&&l.col>s&&(a=Math.max(1,Math.min(l.col-s,80-o)));const c=" ".repeat(o)+"^".repeat(a);t.message+=`:

${r}
${c}
`}};function yn(i,{flow:e,indicator:t,next:n,offset:s,onError:o,parentIndent:r,startOnNewline:a}){let l=!1,c=a,u=a,d="",h="",f=!1,g=!1,y=null,v=null,p=null,E=null,w=null,m=null,S=null;for(const N of i)switch(g&&(N.type!=="space"&&N.type!=="newline"&&N.type!=="comma"&&o(N.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g=!1),y&&(c&&N.type!=="comment"&&N.type!=="newline"&&o(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),N.type){case"space":!e&&(t!=="doc-start"||(n==null?void 0:n.type)!=="flow-collection")&&N.source.includes("	")&&(y=N),u=!0;break;case"comment":{u||o(N,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const _=N.source.substring(1)||" ";d?d+=h+_:d=_,h="",c=!1;break}case"newline":c?d?d+=N.source:(!m||t!=="seq-item-ind")&&(l=!0):h+=N.source,c=!0,f=!0,(v||p)&&(E=N),u=!0;break;case"anchor":v&&o(N,"MULTIPLE_ANCHORS","A node can have at most one anchor"),N.source.endsWith(":")&&o(N.offset+N.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),v=N,S===null&&(S=N.offset),c=!1,u=!1,g=!0;break;case"tag":{p&&o(N,"MULTIPLE_TAGS","A node can have at most one tag"),p=N,S===null&&(S=N.offset),c=!1,u=!1,g=!0;break}case t:(v||p)&&o(N,"BAD_PROP_ORDER",`Anchors and tags must be after the ${N.source} indicator`),m&&o(N,"UNEXPECTED_TOKEN",`Unexpected ${N.source} in ${e??"collection"}`),m=N,c=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(e){w&&o(N,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),w=N,c=!1,u=!1;break}default:o(N,"UNEXPECTED_TOKEN",`Unexpected ${N.type} token`),c=!1,u=!1}const L=i[i.length-1],D=L?L.offset+L.source.length:s;return g&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&o(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(c&&y.indent<=r||(n==null?void 0:n.type)==="block-map"||(n==null?void 0:n.type)==="block-seq")&&o(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:w,found:m,spaceBefore:l,comment:d,hasNewline:f,anchor:v,tag:p,newlineAfterProp:E,end:D,start:S??D}}function di(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const e of i.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of i.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(di(e.key)||di(e.value))return!0}return!1;default:return!0}}function Yo(i,e,t){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===i&&(n.source==="]"||n.source==="}")&&di(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function $u(i,e,t){const{uniqueKeys:n}=i.options;if(n===!1)return!1;const s=typeof n=="function"?n:(o,r)=>o===r||ne(o)&&ne(r)&&o.value===r.value;return e.some(o=>s(o.key,t))}const Yl="All mapping items must start at the same column";function Nb({composeNode:i,composeEmptyNode:e},t,n,s,o){var u;const r=(o==null?void 0:o.nodeClass)??$e,a=new r(t.schema);t.atRoot&&(t.atRoot=!1);let l=n.offset,c=null;for(const d of n.items){const{start:h,key:f,sep:g,value:y}=d,v=yn(h,{indicator:"explicit-key-ind",next:f??(g==null?void 0:g[0]),offset:l,onError:s,parentIndent:n.indent,startOnNewline:!0}),p=!v.found;if(p){if(f&&(f.type==="block-seq"?s(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==n.indent&&s(l,"BAD_INDENT",Yl)),!v.anchor&&!v.tag&&!g){c=v.end,v.comment&&(a.comment?a.comment+=`
`+v.comment:a.comment=v.comment);continue}(v.newlineAfterProp||di(f))&&s(f??h[h.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=v.found)==null?void 0:u.indent)!==n.indent&&s(l,"BAD_INDENT",Yl);t.atKey=!0;const E=v.end,w=f?i(t,f,v,s):e(t,E,h,null,v,s);t.schema.compat&&Yo(n.indent,f,s),t.atKey=!1,$u(t,a.items,w)&&s(E,"DUPLICATE_KEY","Map keys must be unique");const m=yn(g??[],{indicator:"map-value-ind",next:y,offset:w.range[2],onError:s,parentIndent:n.indent,startOnNewline:!f||f.type==="block-scalar"});if(l=m.end,m.found){p&&((y==null?void 0:y.type)==="block-map"&&!m.hasNewline&&s(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&v.start<m.found.offset-1024&&s(w.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const S=y?i(t,y,m,s):e(t,l,g,null,m,s);t.schema.compat&&Yo(n.indent,y,s),l=S.range[2];const L=new Se(w,S);t.options.keepSourceTokens&&(L.srcToken=d),a.items.push(L)}else{p&&s(w.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),m.comment&&(w.comment?w.comment+=`
`+m.comment:w.comment=m.comment);const S=new Se(w);t.options.keepSourceTokens&&(S.srcToken=d),a.items.push(S)}}return c&&c<l&&s(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[n.offset,l,c??l],a}function Ob({composeNode:i,composeEmptyNode:e},t,n,s,o){const r=(o==null?void 0:o.nodeClass)??Ct,a=new r(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=n.offset,c=null;for(const{start:u,value:d}of n.items){const h=yn(u,{indicator:"seq-item-ind",next:d,offset:l,onError:s,parentIndent:n.indent,startOnNewline:!0});if(!h.found)if(h.anchor||h.tag||d)d&&d.type==="block-seq"?s(h.end,"BAD_INDENT","All sequence items must start at the same column"):s(l,"MISSING_CHAR","Sequence item without - indicator");else{c=h.end,h.comment&&(a.comment=h.comment);continue}const f=d?i(t,d,h,s):e(t,h.end,u,null,h,s);t.schema.compat&&Yo(n.indent,d,s),l=f.range[2],a.items.push(f)}return a.range=[n.offset,l,c??l],a}function yi(i,e,t,n){let s="";if(i){let o=!1,r="";for(const a of i){const{source:l,type:c}=a;switch(c){case"space":o=!0;break;case"comment":{t&&!o&&n(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=l.substring(1)||" ";s?s+=r+u:s=u,r="";break}case"newline":s&&(r+=l),o=!0;break;default:n(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:s,offset:e}}const wo="Block collections are not allowed within flow collections",ko=i=>i&&(i.type==="block-map"||i.type==="block-seq");function Lb({composeNode:i,composeEmptyNode:e},t,n,s,o){const r=n.start.source==="{",a=r?"flow map":"flow sequence",l=(o==null?void 0:o.nodeClass)??(r?$e:Ct),c=new l(t.schema);c.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let d=n.offset+n.start.source.length;for(let v=0;v<n.items.length;++v){const p=n.items[v],{start:E,key:w,sep:m,value:S}=p,L=yn(E,{flow:a,indicator:"explicit-key-ind",next:w??(m==null?void 0:m[0]),offset:d,onError:s,parentIndent:n.indent,startOnNewline:!1});if(!L.found){if(!L.anchor&&!L.tag&&!m&&!S){v===0&&L.comma?s(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):v<n.items.length-1&&s(L.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),L.comment&&(c.comment?c.comment+=`
`+L.comment:c.comment=L.comment),d=L.end;continue}!r&&t.options.strict&&di(w)&&s(w,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(v===0)L.comma&&s(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(L.comma||s(L.start,"MISSING_CHAR",`Missing , between ${a} items`),L.comment){let D="";e:for(const N of E)switch(N.type){case"comma":case"space":break;case"comment":D=N.source.substring(1);break e;default:break e}if(D){let N=c.items[c.items.length-1];le(N)&&(N=N.value??N.key),N.comment?N.comment+=`
`+D:N.comment=D,L.comment=L.comment.substring(D.length+1)}}if(!r&&!m&&!L.found){const D=S?i(t,S,L,s):e(t,L.end,m,null,L,s);c.items.push(D),d=D.range[2],ko(S)&&s(D.range,"BLOCK_IN_FLOW",wo)}else{t.atKey=!0;const D=L.end,N=w?i(t,w,L,s):e(t,D,E,null,L,s);ko(w)&&s(N.range,"BLOCK_IN_FLOW",wo),t.atKey=!1;const _=yn(m??[],{flow:a,indicator:"map-value-ind",next:S,offset:N.range[2],onError:s,parentIndent:n.indent,startOnNewline:!1});if(_.found){if(!r&&!L.found&&t.options.strict){if(m)for(const x of m){if(x===_.found)break;if(x.type==="newline"){s(x,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}L.start<_.found.offset-1024&&s(_.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else S&&("source"in S&&S.source&&S.source[0]===":"?s(S,"MISSING_CHAR",`Missing space after : in ${a}`):s(_.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const $=S?i(t,S,_,s):_.found?e(t,_.end,m,null,_,s):null;$?ko(S)&&s($.range,"BLOCK_IN_FLOW",wo):_.comment&&(N.comment?N.comment+=`
`+_.comment:N.comment=_.comment);const j=new Se(N,$);if(t.options.keepSourceTokens&&(j.srcToken=p),r){const x=c;$u(t,x.items,N)&&s(D,"DUPLICATE_KEY","Map keys must be unique"),x.items.push(j)}else{const x=new $e(t.schema);x.flow=!0,x.items.push(j);const C=($??N).range;x.range=[N.range[0],C[1],C[2]],c.items.push(x)}d=$?$.range[2]:_.end}}const h=r?"}":"]",[f,...g]=n.end;let y=d;if(f&&f.source===h)y=f.offset+f.source.length;else{const v=a[0].toUpperCase()+a.substring(1),p=u?`${v} must end with a ${h}`:`${v} in block collection must be sufficiently indented and end with a ${h}`;s(d,u?"MISSING_CHAR":"BAD_INDENT",p),f&&f.source.length!==1&&g.unshift(f)}if(g.length>0){const v=yi(g,y,t.options.strict,s);v.comment&&(c.comment?c.comment+=`
`+v.comment:c.comment=v.comment),c.range=[n.offset,y,v.offset]}else c.range=[n.offset,y,y];return c}function _o(i,e,t,n,s,o){const r=t.type==="block-map"?Nb(i,e,t,n,o):t.type==="block-seq"?Ob(i,e,t,n,o):Lb(i,e,t,n,o),a=r.constructor;return s==="!"||s===a.tagName?(r.tag=a.tagName,r):(s&&(r.tag=s),r)}function Db(i,e,t,n,s){var h;const o=n.tag,r=o?e.directives.tagName(o.source,f=>s(o,"TAG_RESOLVE_FAILED",f)):null;if(t.type==="block-seq"){const{anchor:f,newlineAfterProp:g}=n,y=f&&o?f.offset>o.offset?f:o:f??o;y&&(!g||g.offset<y.offset)&&s(y,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!o||!r||r==="!"||r===$e.tagName&&a==="map"||r===Ct.tagName&&a==="seq")return _o(i,e,t,s,r);let l=e.schema.tags.find(f=>f.tag===r&&f.collection===a);if(!l){const f=e.schema.knownTags[r];if(f&&f.collection===a)e.schema.tags.push(Object.assign({},f,{default:!1})),l=f;else return f!=null&&f.collection?s(o,"BAD_COLLECTION_TYPE",`${f.tag} used for ${a} collection, but expects ${f.collection}`,!0):s(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),_o(i,e,t,s,r)}const c=_o(i,e,t,s,r,l),u=((h=l.resolve)==null?void 0:h.call(l,c,f=>s(o,"TAG_RESOLVE_FAILED",f),e.options))??c,d=de(u)?u:new W(u);return d.range=c.range,d.tag=r,l!=null&&l.format&&(d.format=l.format),d}function zu(i,e,t){const n=e.offset,s=Bb(e,i.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const o=s.mode===">"?W.BLOCK_FOLDED:W.BLOCK_LITERAL,r=e.source?Pb(e.source):[];let a=r.length;for(let y=r.length-1;y>=0;--y){const v=r[y][1];if(v===""||v==="\r")a=y;else break}if(a===0){const y=s.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let v=n+s.length;return e.source&&(v+=e.source.length),{value:y,type:o,comment:s.comment,range:[n,v,v]}}let l=e.indent+s.indent,c=e.offset+s.length,u=0;for(let y=0;y<a;++y){const[v,p]=r[y];if(p===""||p==="\r")s.indent===0&&v.length>l&&(l=v.length);else{v.length<l&&t(c+v.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(l=v.length),u=y,l===0&&!i.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=v.length+p.length+1}for(let y=r.length-1;y>=a;--y)r[y][0].length>l&&(a=y+1);let d="",h="",f=!1;for(let y=0;y<u;++y)d+=r[y][0].slice(l)+`
`;for(let y=u;y<a;++y){let[v,p]=r[y];c+=v.length+p.length+1;const E=p[p.length-1]==="\r";if(E&&(p=p.slice(0,-1)),p&&v.length<l){const m=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(c-p.length-(E?2:1),"BAD_INDENT",m),v=""}o===W.BLOCK_LITERAL?(d+=h+v.slice(l)+p,h=`
`):v.length>l||p[0]==="	"?(h===" "?h=`
`:!f&&h===`
`&&(h=`

`),d+=h+v.slice(l)+p,h=`
`,f=!0):p===""?h===`
`?d+=`
`:h=`
`:(d+=h+p,h=" ",f=!1)}switch(s.chomp){case"-":break;case"+":for(let y=a;y<r.length;++y)d+=`
`+r[y][0].slice(l);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}const g=n+s.length+e.source.length;return{value:d,type:o,comment:s.comment,range:[n,g,g]}}function Bb({offset:i,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],o=s[0];let r=0,a="",l=-1;for(let h=1;h<s.length;++h){const f=s[h];if(!a&&(f==="-"||f==="+"))a=f;else{const g=Number(f);!r&&g?r=g:l===-1&&(l=i+h)}}l!==-1&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let c=!1,u="",d=s.length;for(let h=1;h<e.length;++h){const f=e[h];switch(f.type){case"space":c=!0;case"newline":d+=f.source.length;break;case"comment":t&&!c&&n(f,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=f.source.length,u=f.source.substring(1);break;case"error":n(f,"UNEXPECTED_TOKEN",f.message),d+=f.source.length;break;default:{const g=`Unexpected token in block scalar header: ${f.type}`;n(f,"UNEXPECTED_TOKEN",g);const y=f.source;y&&typeof y=="string"&&(d+=y.length)}}}return{mode:o,indent:r,chomp:a,comment:u,length:d}}function Pb(i){const e=i.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),o=[n!=null&&n[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let r=1;r<e.length;r+=2)o.push([e[r],e[r+1]]);return o}function ju(i,e,t){const{offset:n,type:s,source:o,end:r}=i;let a,l;const c=(h,f,g)=>t(n+h,f,g);switch(s){case"scalar":a=W.PLAIN,l=Fb(o,c);break;case"single-quoted-scalar":a=W.QUOTE_SINGLE,l=Rb(o,c);break;case"double-quoted-scalar":a=W.QUOTE_DOUBLE,l=$b(o,c);break;default:return t(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+o.length,n+o.length]}}const u=n+o.length,d=yi(r,u,e,t);return{value:l,type:a,comment:d.comment,range:[n,u,d.offset]}}function Fb(i,e){let t="";switch(i[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${i[0]}`;break}case"@":case"`":{t=`reserved character ${i[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Uu(i)}function Rb(i,e){return(i[i.length-1]!=="'"||i.length===1)&&e(i.length,"MISSING_CHAR","Missing closing 'quote"),Uu(i.slice(1,-1)).replace(/''/g,"'")}function Uu(i){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(i);if(!n)return i;let s=n[1],o=" ",r=e.lastIndex;for(t.lastIndex=r;n=t.exec(i);)n[1]===""?o===`
`?s+=o:o=`
`:(s+=o+n[1],o=" "),r=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=r,n=a.exec(i),s+o+((n==null?void 0:n[1])??"")}function $b(i,e){let t="";for(let n=1;n<i.length-1;++n){const s=i[n];if(!(s==="\r"&&i[n+1]===`
`))if(s===`
`){const{fold:o,offset:r}=zb(i,n);t+=o,n=r}else if(s==="\\"){let o=i[++n];const r=jb[o];if(r)t+=r;else if(o===`
`)for(o=i[n+1];o===" "||o==="	";)o=i[++n+1];else if(o==="\r"&&i[n+1]===`
`)for(o=i[++n+1];o===" "||o==="	";)o=i[++n+1];else if(o==="x"||o==="u"||o==="U"){const a={x:2,u:4,U:8}[o];t+=Ub(i,n+1,a,e),n+=a}else{const a=i.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(s===" "||s==="	"){const o=n;let r=i[n+1];for(;r===" "||r==="	";)r=i[++n+1];r!==`
`&&!(r==="\r"&&i[n+2]===`
`)&&(t+=n>o?i.slice(o,n+1):s)}else t+=s}return(i[i.length-1]!=='"'||i.length===1)&&e(i.length,"MISSING_CHAR",'Missing closing "quote'),t}function zb(i,e){let t="",n=i[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&i[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=i[e+1];return t||(t=" "),{fold:t,offset:e}}const jb={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Ub(i,e,t,n){const s=i.substr(e,t),r=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(r)){const a=i.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(r)}function Hu(i,e,t,n){const{value:s,type:o,comment:r,range:a}=e.type==="block-scalar"?zu(i,e,n):ju(e,i.options.strict,n),l=t?i.directives.tagName(t.source,d=>n(t,"TAG_RESOLVE_FAILED",d)):null;let c;i.options.stringKeys&&i.atKey?c=i.schema[ut]:l?c=Hb(i.schema,s,l,t,n):e.type==="scalar"?c=Vb(i,s,e,n):c=i.schema[ut];let u;try{const d=c.resolve(s,h=>n(t??e,"TAG_RESOLVE_FAILED",h),i.options);u=ne(d)?d:new W(d)}catch(d){const h=d instanceof Error?d.message:String(d);n(t??e,"TAG_RESOLVE_FAILED",h),u=new W(s)}return u.range=a,u.source=s,o&&(u.type=o),l&&(u.tag=l),c.format&&(u.format=c.format),r&&(u.comment=r),u}function Hb(i,e,t,n,s){var a;if(t==="!")return i[ut];const o=[];for(const l of i.tags)if(!l.collection&&l.tag===t)if(l.default&&l.test)o.push(l);else return l;for(const l of o)if((a=l.test)!=null&&a.test(e))return l;const r=i.knownTags[t];return r&&!r.collection?(i.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),i[ut])}function Vb({atKey:i,directives:e,schema:t},n,s,o){const r=t.tags.find(a=>{var l;return(a.default===!0||i&&a.default==="key")&&((l=a.test)==null?void 0:l.test(n))})||t[ut];if(t.compat){const a=t.compat.find(l=>{var c;return l.default&&((c=l.test)==null?void 0:c.test(n))})??t[ut];if(r.tag!==a.tag){const l=e.tagString(r.tag),c=e.tagString(a.tag),u=`Value may be parsed as either ${l} or ${c}`;o(s,"TAG_RESOLVE_FAILED",u,!0)}}return r}function Wb(i,e,t){if(e){t===null&&(t=e.length);for(let n=t-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":i-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)i+=s.source.length,s=e[++n];break}}return i}const Kb={composeNode:Vu,composeEmptyNode:Lr};function Vu(i,e,t,n){const s=i.atKey,{spaceBefore:o,comment:r,anchor:a,tag:l}=t;let c,u=!0;switch(e.type){case"alias":c=qb(i,e,n),(a||l)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Hu(i,e,l,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=Db(Kb,i,e,t,n),a&&(c.anchor=a.source.substring(1));break;default:{const d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",d),c=Lr(i,e.offset,void 0,null,t,n),u=!1}}return a&&c.anchor===""&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&i.options.stringKeys&&(!ne(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&n(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(c.spaceBefore=!0),r&&(e.type==="scalar"&&e.source===""?c.comment=r:c.commentBefore=r),i.options.keepSourceTokens&&u&&(c.srcToken=e),c}function Lr(i,e,t,n,{spaceBefore:s,comment:o,anchor:r,tag:a,end:l},c){const u={type:"scalar",offset:Wb(e,t,n),indent:-1,source:""},d=Hu(i,u,a,c);return r&&(d.anchor=r.source.substring(1),d.anchor===""&&c(r,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(d.spaceBefore=!0),o&&(d.comment=o,d.range[2]=l),d}function qb({options:i},{offset:e,source:t,end:n},s){const o=new Cs(t.substring(1));o.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=e+t.length,a=yi(n,r,i.strict,s);return o.range=[e,r,a.offset],a.comment&&(o.comment=a.comment),o}function Gb(i,e,{offset:t,start:n,value:s,end:o},r){const a=Object.assign({_directives:e},i),l=new Sn(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},u=yn(n,{indicator:"doc-start",next:s??(o==null?void 0:o[0]),offset:t,onError:r,parentIndent:0,startOnNewline:!0});u.found&&(l.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!u.hasNewline&&r(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=s?Vu(c,s,u,r):Lr(c,u.end,n,null,u,r);const d=l.contents.range[2],h=yi(o,d,!1,r);return h.comment&&(l.comment=h.comment),l.range=[t,d,h.offset],l}function Hn(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:e,source:t}=i;return[e,e+(typeof t=="string"?t.length:1)]}function Jl(i){var s;let e="",t=!1,n=!1;for(let o=0;o<i.length;++o){const r=i[o];switch(r[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(r.substring(1)||" "),t=!0,n=!1;break;case"%":((s=i[o+1])==null?void 0:s[0])!=="#"&&(o+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class Dr{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,s,o)=>{const r=Hn(t);o?this.warnings.push(new Ru(r,n,s)):this.errors.push(new $t(r,n,s))},this.directives=new Me({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:s}=Jl(this.prelude);if(n){const o=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!o)e.commentBefore=n;else if(ue(o)&&!o.flow&&o.items.length>0){let r=o.items[0];le(r)&&(r=r.key);const a=r.commentBefore;r.commentBefore=a?`${n}
${a}`:n}else{const r=o.commentBefore;o.commentBefore=r?`${n}
${r}`:n}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Jl(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,s)=>{const o=Hn(e);o[0]+=t,this.onError(o,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Gb(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new $t(Hn(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new $t(Hn(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=yi(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new $t(Hn(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new Sn(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}function Yb(i,e=!0,t){if(i){const n=(s,o,r)=>{const a=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(t)t(a,o,r);else throw new $t([a,a+1],o,r)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return ju(i,e,n);case"block-scalar":return zu({options:{strict:e}},i,n)}}return null}function Jb(i,e){const{implicitKey:t=!1,indent:n,inFlow:s=!1,offset:o=-1,type:r="PLAIN"}=e,a=gi({type:r,value:i},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),l=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(a[0]){case"|":case">":{const c=a.indexOf(`
`),u=a.substring(0,c),d=a.substring(c+1)+`
`,h=[{type:"block-scalar-header",offset:o,indent:n,source:u}];return Wu(h,l)||h.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:o,indent:n,props:h,source:d}}case'"':return{type:"double-quoted-scalar",offset:o,indent:n,source:a,end:l};case"'":return{type:"single-quoted-scalar",offset:o,indent:n,source:a,end:l};default:return{type:"scalar",offset:o,indent:n,source:a,end:l}}}function Xb(i,e,t={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:o=!1,type:r}=t,a="indent"in i?i.indent:null;if(n&&typeof a=="number"&&(a+=2),!r)switch(i.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const c=i.props[0];if(c.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=c.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const l=gi({type:r,value:e},{implicitKey:s||a===null,indent:a!==null&&a>0?" ".repeat(a):"",inFlow:o,options:{blockQuote:!0,lineWidth:-1}});switch(l[0]){case"|":case">":Zb(i,l);break;case'"':Eo(i,l,"double-quoted-scalar");break;case"'":Eo(i,l,"single-quoted-scalar");break;default:Eo(i,l,"scalar")}}function Zb(i,e){const t=e.indexOf(`
`),n=e.substring(0,t),s=e.substring(t+1)+`
`;if(i.type==="block-scalar"){const o=i.props[0];if(o.type!=="block-scalar-header")throw new Error("Invalid block scalar header");o.source=n,i.source=s}else{const{offset:o}=i,r="indent"in i?i.indent:-1,a=[{type:"block-scalar-header",offset:o,indent:r,source:n}];Wu(a,"end"in i?i.end:void 0)||a.push({type:"newline",offset:-1,indent:r,source:`
`});for(const l of Object.keys(i))l!=="type"&&l!=="offset"&&delete i[l];Object.assign(i,{type:"block-scalar",indent:r,props:a,source:s})}}function Wu(i,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":i.push(t);break;case"newline":return i.push(t),!0}return!1}function Eo(i,e,t){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=t,i.source=e;break;case"block-scalar":{const n=i.props.slice(1);let s=e.length;i.props[0].type==="block-scalar-header"&&(s-=i.props[0].source.length);for(const o of n)o.offset+=s;delete i.props,Object.assign(i,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{const s={type:"newline",offset:i.offset+e.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:t,source:e,end:[s]});break}default:{const n="indent"in i?i.indent:-1,s="end"in i&&Array.isArray(i.end)?i.end.filter(o=>o.type==="space"||o.type==="comment"||o.type==="newline"):[];for(const o of Object.keys(i))o!=="type"&&o!=="offset"&&delete i[o];Object.assign(i,{type:t,indent:n,source:e,end:s})}}}const Qb=i=>"type"in i?ys(i):ns(i);function ys(i){switch(i.type){case"block-scalar":{let e="";for(const t of i.props)e+=ys(t);return e+i.source}case"block-map":case"block-seq":{let e="";for(const t of i.items)e+=ns(t);return e}case"flow-collection":{let e=i.start.source;for(const t of i.items)e+=ns(t);for(const t of i.end)e+=t.source;return e}case"document":{let e=ns(i);if(i.end)for(const t of i.end)e+=t.source;return e}default:{let e=i.source;if("end"in i&&i.end)for(const t of i.end)e+=t.source;return e}}}function ns({start:i,key:e,sep:t,value:n}){let s="";for(const o of i)s+=o.source;if(e&&(s+=ys(e)),t)for(const o of t)s+=o.source;return n&&(s+=ys(n)),s}const Jo=Symbol("break visit"),ey=Symbol("skip children"),Ku=Symbol("remove item");function Vt(i,e){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),qu(Object.freeze([]),i,e)}Vt.BREAK=Jo;Vt.SKIP=ey;Vt.REMOVE=Ku;Vt.itemAtPath=(i,e)=>{let t=i;for(const[n,s]of e){const o=t==null?void 0:t[n];if(o&&"items"in o)t=o.items[s];else return}return t};Vt.parentCollection=(i,e)=>{const t=Vt.itemAtPath(i,e.slice(0,-1)),n=e[e.length-1][0],s=t==null?void 0:t[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function qu(i,e,t){let n=t(e,i);if(typeof n=="symbol")return n;for(const s of["key","value"]){const o=e[s];if(o&&"items"in o){for(let r=0;r<o.items.length;++r){const a=qu(Object.freeze(i.concat([[s,r]])),o.items[r],t);if(typeof a=="number")r=a-1;else{if(a===Jo)return Jo;a===Ku&&(o.items.splice(r,1),r-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,i))}}return typeof n=="function"?n(e,i):n}const Fs="\uFEFF",Rs="",$s="",hi="",ty=i=>!!i&&"items"in i,ny=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function iy(i){switch(i){case Fs:return"<BOM>";case Rs:return"<DOC>";case $s:return"<FLOW_END>";case hi:return"<SCALAR>";default:return JSON.stringify(i)}}function Gu(i){switch(i){case Fs:return"byte-order-mark";case Rs:return"doc-mode";case $s:return"flow-error-end";case hi:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const sy=Object.freeze(Object.defineProperty({__proto__:null,BOM:Fs,DOCUMENT:Rs,FLOW_END:$s,SCALAR:hi,createScalarToken:Jb,isCollection:ty,isScalar:ny,prettyToken:iy,resolveAsScalar:Yb,setScalarValue:Xb,stringify:Qb,tokenType:Gu,visit:Vt},Symbol.toStringTag,{value:"Module"}));function Je(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Xl=new Set("0123456789ABCDEFabcdef"),oy=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Ki=new Set(",[]{}"),ry=new Set(` ,[]{}
\r	`),So=i=>!i||ry.has(i);class Yu{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Je(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Fs&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const o=e[n-1];if(o===" "||o==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const o=e[t-1];if(o===" "||o==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Rs,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Je(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Je(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Je(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(So),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Je(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield $s,yield*this.parseLineStart();let o=0;for(;s[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),s[o]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(So),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||Je(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let o=0;for(;this.buffer[t-1-o]==="\\";)o+=1;if(o%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const o=this.continueScalar(s+1);if(o===-1)break;s=n.indexOf(`
`,o)}s!==-1&&(t=s-(n[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Je(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let o=this.pos;n=this.buffer[o];++o)switch(n){case" ":t+=1;break;case`
`:e=o,t=0;break;case"\r":{const r=this.buffer[o+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const o=this.continueScalar(e+1);if(o===-1)break;e=this.buffer.indexOf(`
`,o)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(n=this.buffer[s];n===" ";)n=this.buffer[++s];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let o=e-1,r=this.buffer[o];r==="\r"&&(r=this.buffer[--o]);const a=o;for(;r===" ";)r=this.buffer[--o];if(r===`
`&&o>=this.pos&&o+1+t>a)e=o;else break}while(!0);return yield hi,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const o=this.buffer[n+1];if(Je(o)||e&&Ki.has(o))break;t=n}else if(Je(s)){let o=this.buffer[n+1];if(s==="\r"&&(o===`
`?(n+=1,s=`
`,o=this.buffer[n+1]):t=n),o==="#"||e&&Ki.has(o))break;if(s===`
`){const r=this.continueScalar(n+1);if(r===-1)break;n=Math.max(n,r-2)}}else{if(e&&Ki.has(s))break;t=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield hi,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(So))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(Je(t)||e&&Ki.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Je(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(oy.has(t))t=this.buffer[++e];else if(t==="%"&&Xl.has(this.buffer[e+1])&&Xl.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Ju{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const o=t+n>>1;this.lineStarts[o]<e?t=o+1:n=o}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function Dt(i,e){for(let t=0;t<i.length;++t)if(i[t].type===e)return!0;return!1}function Zl(i){for(let e=0;e<i.length;++e)switch(i[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Xu(i){switch(i==null?void 0:i.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function qi(i){switch(i.type){case"document":return i.start;case"block-map":{const e=i.items[i.items.length-1];return e.sep??e.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function sn(i){var t;if(i.length===0)return[];let e=i.length;e:for(;--e>=0;)switch(i[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=i[++e])==null?void 0:t.type)==="space";);return i.splice(e,i.length)}function Ql(i){if(i.start.type==="flow-seq-start")for(const e of i.items)e.sep&&!e.value&&!Dt(e.start,"explicit-key-ind")&&!Dt(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Xu(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class Br{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Yu,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Gu(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Ql(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&Zl(s.start)===-1&&(t.indent===0||s.start.every(o=>o.type!=="comment"||o.indent<t.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Zl(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=qi(this.peek(2)),n=sn(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,o=Array.isArray(s)?s[s.length-1]:void 0;(o==null?void 0:o.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],o=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(o)){Array.prototype.push.apply(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,o=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(o&&t.sep&&!t.value){const a=[];for(let l=0;l<t.sep.length;++l){const c=t.sep[l];switch(c.type){case"newline":a.push(l);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(r=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":o||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):o||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Dt(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if(Xu(t.key)&&!Dt(t.sep,"newline")){const a=sn(t.start),l=t.key,c=t.sep;c.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:l,sep:c}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(Dt(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=sn(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||o?e.items.push({start:r,key:null,sep:[this.sourceToken]}):Dt(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);o||t.value?(e.items.push({start:r,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){s&&a.type!=="block-seq"&&e.items.push({start:r}),this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,o=Array.isArray(s)?s[s.length-1]:void 0;(o==null?void 0:o.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],o=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(o)){Array.prototype.push.apply(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Dt(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=qi(n),o=sn(s);Ql(e);const r=e.end.splice(1,e.end.length);r.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:o,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=qi(e),n=sn(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=qi(e),n=sn(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Zu(i){const e=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||e&&new Ju||null,prettyErrors:e}}function ay(i,e={}){const{lineCounter:t,prettyErrors:n}=Zu(e),s=new Br(t==null?void 0:t.addNewLine),o=new Dr(e),r=Array.from(o.compose(s.parse(i)));if(n&&t)for(const a of r)a.errors.forEach(bs(i,t)),a.warnings.forEach(bs(i,t));return r.length>0?r:Object.assign([],{empty:!0},o.streamInfo())}function Qu(i,e={}){const{lineCounter:t,prettyErrors:n}=Zu(e),s=new Br(t==null?void 0:t.addNewLine),o=new Dr(e);let r=null;for(const a of o.compose(s.parse(i),!0,i.length))if(!r)r=a;else if(r.options.logLevel!=="silent"){r.errors.push(new $t(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(r.errors.forEach(bs(i,t)),r.warnings.forEach(bs(i,t))),r}function ly(i,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);const s=Qu(i,t);if(!s)return null;if(s.warnings.forEach(o=>vu(s.options.logLevel,o)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},t))}function cy(i,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const s=Math.round(t);t=s<1?void 0:s>8?{indent:8}:{indent:s}}if(i===void 0){const{keepUndefined:s}=t??e??{};if(!s)return}return Gt(i)&&!n?i.toString(t):new Sn(i,n,t).toString(t)}const ec=Object.freeze(Object.defineProperty({__proto__:null,Alias:Cs,CST:sy,Composer:Dr,Document:Sn,Lexer:Yu,LineCounter:Ju,Pair:Se,Parser:Br,Scalar:W,Schema:Ps,YAMLError:Or,YAMLMap:$e,YAMLParseError:$t,YAMLSeq:Ct,YAMLWarning:Ru,isAlias:qt,isCollection:ue,isDocument:Gt,isMap:wn,isNode:de,isPair:le,isScalar:ne,isSeq:kn,parse:ly,parseAllDocuments:ay,parseDocument:Qu,stringify:cy,visit:Tt,visitAsync:Ts},Symbol.toStringTag,{value:"Module"}));class uy{constructor(){M(this,"id","json-xml-yaml-converter");M(this,"name","JSON/XML/YAML Converter");M(this,"description","Convert between JSON, XML, and YAML formats");M(this,"seoMetadata",{title:"Free Online JSON, XML, and YAML Converter",description:"Convert between JSON, XML, and YAML formats easily. Validate, format, and transform your data with this free online conversion tool.",keywords:["json to xml converter","xml to json","yaml converter","json yaml converter","data format converter","xml yaml converter"]});M(this,"supportedFormats",["xml","json","yaml"])}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.getElementById("sourceInput"),t=document.getElementById("output"),n=document.getElementById("detectedFormat"),s=document.getElementById("targetFormat"),o=document.getElementById("sourceLineNumbers"),r=document.getElementById("outputLineNumbers"),a=(c,u)=>{const d=c.value.split(`
`).length;u.innerHTML=Array.from({length:d},(h,f)=>`<div class="line-number">${f+1}</div>`).join("")},l=()=>{const c=e.value,{format:u,data:d}=this.detectAndParse(c),h=s.value;a(e,o),u==="unknown"?(n.textContent="Unknown",n.style.color="red",t.value="Error: Could not detect input format."):(n.textContent=u.toUpperCase(),n.style.color="green",t.value=this.convert(d,u,h)),a(t,r)};e.addEventListener("input",l),e.addEventListener("scroll",()=>{o.scrollTop=e.scrollTop}),t.addEventListener("scroll",()=>{r.scrollTop=t.scrollTop}),s.addEventListener("change",l),l()}detectAndParse(e){try{return{format:"json",data:JSON.parse(e)}}catch{}try{return{format:"yaml",data:ec.parse(e)}}catch{}try{return{format:"xml",data:Hl.xml2js(e,{compact:!0})}}catch{}return{format:"unknown",data:null}}convert(e,t,n){try{switch(n){case"json":return JSON.stringify(e,null,2);case"yaml":return ec.stringify(e);case"xml":return Hl.js2xml(e,{compact:!0,spaces:2});default:return"Unsupported target format"}}catch(s){return`Error during conversion: ${s.message}`}}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class dy{constructor(){M(this,"id","jwt-decoder");M(this,"name","JWT Decoder");M(this,"description","Decode and verify JSON Web Tokens");M(this,"seoMetadata",{title:"Free JWT Decoder and Validator Online Tool",description:"Decode, verify and inspect JSON Web Tokens (JWT) instantly with this free online tool. Analyze header, payload, and signature of your JWTs.",keywords:["jwt decoder","jwt validator","json web token","decode jwt","verify jwt","jwt inspector"]});M(this,"lastInput","")}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}decodeJwt(e){try{const t=e.split(".");if(t.length!==3)throw new Error("Invalid JWT format");const n=JSON.parse(this.base64UrlDecode(t[0])),s=JSON.parse(this.base64UrlDecode(t[1])),o=t[2];return{header:n,payload:s,signature:o}}catch{return null}}base64UrlDecode(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");for(;t.length%4;)t+="=";return decodeURIComponent(escape(atob(t)))}formatJson(e){return JSON.stringify(e,null,2)}displayDecodedData(e){const t=document.getElementById("headerData"),n=document.getElementById("payloadData"),s=document.getElementById("signatureData");!t||!n||!s||(document.querySelectorAll(".token-metadata").forEach(o=>o.remove()),t.textContent=this.formatJson(e.header),this.addTokenMetadata("header-metadata",e.header),n.textContent=this.formatJson(e.payload),this.addTokenMetadata("payload-metadata",e.payload),s.textContent=e.signature)}addTokenMetadata(e,t){var o,r;const n=[],s=document.getElementById(e);if(s&&s.remove(),t.exp){const a=new Date(t.exp*1e3),l=a<new Date;n.push(`Expires: ${a.toLocaleString()} (${l?"Expired":"Valid"})`)}if(t.iat){const a=new Date(t.iat*1e3);n.push(`Issued At: ${a.toLocaleString()}`)}if(t.nbf){const a=new Date(t.nbf*1e3);n.push(`Not Before: ${a.toLocaleString()}`)}if(n.length>0){const a=document.createElement("div");a.id=e,a.className="token-metadata",a.innerHTML=n.join("<br>");const l=e.includes("header")?"headerData":"payloadData";(r=(o=document.getElementById(l))==null?void 0:o.parentElement)==null||r.appendChild(a)}}showError(e){const t=document.getElementById("headerData"),n=document.getElementById("payloadData"),s=document.getElementById("signatureData");!t||!n||!s||(t.textContent="",n.textContent="",s.textContent="",t.innerHTML=`<div class="error-message">${e}</div>`)}setupHandlers(){const e=document.getElementById("jwtInput"),t=document.getElementById("clearJwt");!e||!t||(t.addEventListener("click",()=>{e.value="";const n=document.getElementById("headerData"),s=document.getElementById("payloadData"),o=document.getElementById("signatureData");n&&(n.textContent=""),s&&(s.textContent=""),o&&(o.textContent="")}),e.addEventListener("input",()=>{const n=e.value.trim();if(n&&n!==this.lastInput){this.lastInput=n;const s=this.decodeJwt(n);s?this.displayDecodedData(s):this.showError("Invalid JWT token format")}}))}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class hy{constructor(){M(this,"id","base-converter");M(this,"name","Number Base Converter");M(this,"description","Convert numbers between different bases");M(this,"seoMetadata",{title:"Free Number Base Converter Online Tool",description:"Convert numbers between different bases (binary, decimal, hexadecimal, octal) with this free online calculator. Supports all common number systems.",keywords:["base converter","number base calculator","binary converter","hex converter","decimal converter","octal converter"]});M(this,"bases",[{value:2,name:"Binary",prefix:"0b"},{value:8,name:"Octal",prefix:"0o"},{value:10,name:"Decimal",prefix:""},{value:16,name:"Hexadecimal",prefix:"0x"}]);M(this,"lastValidInput","");M(this,"lastBase",10)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("numberInput"),t=document.getElementById("inputBase"),n=document.getElementById("clearInput"),s=document.getElementById("errorDisplay");!e||!t||!n||!s||(e.addEventListener("input",()=>{const o=e.value.trim(),r=parseInt(t.value);try{if(o===""){this.clearResults(),s.textContent="";return}if(this.validateInput(o,r))this.lastValidInput=o,this.lastBase=r,this.updateResults(o,r),s.textContent="",e.classList.remove("error");else throw new Error(`Invalid ${this.getBaseName(r)} number`)}catch(a){s.textContent=a.message,e.classList.add("error")}}),t.addEventListener("change",()=>{const o=parseInt(t.value);e.placeholder=`Enter a ${this.getBaseName(o)} number...`,this.validateInput(e.value,o)?e.dispatchEvent(new Event("input")):(e.value="",this.clearResults())}),n.addEventListener("click",()=>{e.value="",this.clearResults(),s.textContent="",e.classList.remove("error")}),document.querySelectorAll(".copy-button").forEach(o=>{o.addEventListener("click",()=>{const r=parseInt(o.dataset.base||"10"),a=document.getElementById(`base${r}Result`);a&&a.textContent&&navigator.clipboard.writeText(a.textContent).then(()=>this.showToast(`${this.getBaseName(r)} value copied!`)).catch(()=>this.showToast("Failed to copy value"))})}))}validateInput(e,t){var o;if(!e)return!0;const n=((o=this.bases.find(r=>r.value===t))==null?void 0:o.prefix)||"";e=e.toLowerCase().replace(n,"");const s=this.getValidChars(t);return e.split("").every(r=>s.includes(r))}getValidChars(e){return"0123456789abcdef".split("").slice(0,e)}getBaseName(e){var t;return((t=this.bases.find(n=>n.value===e))==null?void 0:t.name)||"Unknown"}updateResults(e,t){var n;try{const s=((n=this.bases.find(r=>r.value===t))==null?void 0:n.prefix)||"";e=e.toLowerCase().replace(s,"");const o=parseInt(e,t);this.bases.forEach(r=>{const a=document.getElementById(`base${r.value}Result`),l=document.getElementById(`base${r.value}Bits`);if(a&&l){const c=o.toString(r.value);if(a.textContent=`${r.prefix}${c}`,r.value===2){const u=c.length,d=Math.ceil(u/8);l.textContent=`${u} bits (${d} bytes)`}else l.textContent=""}})}catch(s){console.error("Conversion error:",s)}}clearResults(){this.bases.forEach(e=>{const t=document.getElementById(`base${e.value}Result`),n=document.getElementById(`base${e.value}Bits`);t&&(t.textContent=""),n&&(n.textContent="")})}showToast(e){const t=document.querySelector(".converter-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class fy{constructor(){M(this,"id","image-resizer");M(this,"name","Image Resizer");M(this,"description","Resize and optimize your images online <br>Resizing is done entirely client-side and the images are not sent anywhere.");M(this,"seoMetadata",{title:"Free Online Image Resizer and Optimizer Tool",description:"Resize, compress, and optimize your images online for free. Easy-to-use tool that maintains image quality while reducing file size.",keywords:["image resizer","image optimizer","photo resizer","picture resize tool","compress images","resize photos online"]});M(this,"currentImage",null);M(this,"originalWidth",0);M(this,"originalHeight",0)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.querySelector(".upload-section"),t=document.querySelector(".controls-section"),n=document.getElementById("imageInput"),s=document.getElementById("widthInput"),o=document.getElementById("heightInput"),r=document.getElementById("maintainAspectRatio"),a=document.getElementById("previewCanvas"),l=document.getElementById("downloadBtn"),c=document.getElementById("resetBtn"),u=document.querySelectorAll(".quick-resize button"),d=document.getElementById("originalSize"),h=document.getElementById("newSize");if(!e||!t||!n||!s||!o||!r||!a||!l||!c||!d||!h)return;e.addEventListener("dragover",g=>{g.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>{e.classList.remove("drag-over")}),e.addEventListener("drop",g=>{var y;g.preventDefault(),e.classList.remove("drag-over"),(y=g.dataTransfer)!=null&&y.files.length&&(n.files=g.dataTransfer.files,f(g.dataTransfer.files[0]))}),n.addEventListener("change",()=>{var g;(g=n.files)!=null&&g.length&&f(n.files[0])});const f=g=>{if(!g.type.startsWith("image/")){this.showToast("Please select an image file");return}const y=new FileReader;y.onload=v=>{var E;const p=new Image;p.onload=()=>{this.currentImage=p,this.originalWidth=p.width,this.originalHeight=p.height,s.value=p.width.toString(),o.value=p.height.toString(),t.style.display="block",e.style.display="none",d.textContent=`${p.width}x${p.height}px`,this.updatePreview()},p.src=(E=v.target)==null?void 0:E.result},y.readAsDataURL(g)};s.addEventListener("input",()=>{if(r.checked&&this.originalWidth&&this.originalHeight){const g=this.originalHeight/this.originalWidth,y=parseInt(s.value)||0;o.value=Math.round(y*g).toString()}this.updatePreview()}),o.addEventListener("input",()=>{if(r.checked&&this.originalWidth&&this.originalHeight){const g=this.originalWidth/this.originalHeight,y=parseInt(o.value)||0;s.value=Math.round(y*g).toString()}this.updatePreview()}),u.forEach(g=>{g.addEventListener("click",()=>{const y=parseFloat(g.getAttribute("data-scale")||"1");s.value=Math.round(this.originalWidth*y).toString(),r.checked&&(o.value=Math.round(this.originalHeight*y).toString()),this.updatePreview()})}),l.addEventListener("click",()=>{if(!a)return;const g=document.createElement("a");g.download="resized-image.png",g.href=a.toDataURL("image/png"),document.body.appendChild(g),g.click(),document.body.removeChild(g),this.showToast("Image downloaded successfully!")}),c.addEventListener("click",()=>{t.style.display="none",e.style.display="block",this.currentImage=null,this.originalWidth=0,this.originalHeight=0,n.value="",a.width=0,a.height=0,d.textContent="-",h.textContent="-"})}updatePreview(){if(!this.currentImage)return;const e=document.getElementById("previewCanvas"),t=document.getElementById("newSize"),n=document.getElementById("widthInput"),s=document.getElementById("heightInput");if(!e||!t||!n||!s)return;const o=e.getContext("2d");if(!o)return;const r=parseInt(n.value)||this.originalWidth,a=parseInt(s.value)||this.originalHeight;e.width=r,e.height=a,o.clearRect(0,0,e.width,e.height),o.drawImage(this.currentImage,0,0,r,a),t.textContent=`${r}x${a}px`}showToast(e){const t=document.querySelector(".resizer-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class py{constructor(){M(this,"id","mock-data-generator");M(this,"name","Mock Data Generator");M(this,"description","Generate realistic mock data for testing and development");M(this,"seoMetadata",{title:"Mock Data Generator Tool - Create Test Data Online",description:"Generate realistic mock data for testing and development. Create random names, addresses, emails, and more with this free online tool.",keywords:["mock data generator","test data generator","fake data generator","random data generator","sample data creator"]});M(this,"supportedTypes",[{value:"fullName",label:"Full Name"},{value:"firstName",label:"First Name"},{value:"lastName",label:"Last Name"},{value:"email",label:"Email Address"},{value:"phoneNumber",label:"Phone Number"},{value:"streetAddress",label:"Street Address"},{value:"city",label:"City"},{value:"state",label:"State"},{value:"zipCode",label:"ZIP Code"},{value:"country",label:"Country"},{value:"company",label:"Company Name"},{value:"jobTitle",label:"Job Title"},{value:"age",label:"Age"},{value:"date",label:"Date"},{value:"uuid",label:"UUID"},{value:"number",label:"Number"},{value:"boolean",label:"Boolean"}]);M(this,"firstNames",["James","Mary","John","Patricia","Robert","Jennifer","Michael","Linda","William","Elizabeth","David","Barbara","Richard","Susan","Joseph","Jessica","Thomas","Sarah","Charles","Karen","Emma","Olivia","Ava","Isabella","Sophia","Mia","Charlotte","Amelia","Harper","Evelyn","Liam","Noah","Oliver","Elijah","Benjamin","Lucas","Henry","Theodore","Jack","Alexander","Santiago","Sofia","Mateo","Isabella","Sebastian","Valentina","Diego","Camila","Gabriel","Victoria","Adrian","Lucia","Julian","Elena","Daniel","Mariana","Wei","Mei","Hiroshi","Yuki","Jin","Soo-jin","Ming","Li Wei","Kai","Sakura","Ravi","Priya","Amit","Deepa","Zhang","Ying","Jamal","Aaliyah","DeShawn","Imani","Malik","Zara","Xavier","Aisha","Marcus","Kiara","Darnell","Destiny","Tyrone","Shaniqua","Kwame","Ebony","Muhammad","Fatima","Ahmed","Amir","Hassan","Leila","Omar","Yasmin","Ali","Noor","Ibrahim","Zainab","Karim","Amira","Yusuf","Layla","Hans","Ingrid","Pierre","Sophie","Giovanni","Chiara","Klaus","Astrid","Lars","Helga","Franz","Margot","Paolo","Anastasia","Viktor","Natasha"]);M(this,"lastNames",["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Thompson","White","Harris","Clark","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Hill","Baker","Green","Adams","Nelson","Carter","Garcia","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Perez","Sanchez","Ramirez","Torres","Flores","Rivera","Morales","Ortiz","Cruz","Reyes","Gomez","Diaz","Vasquez","Ramos","Gutierrez","Chavez","Mendoza","Chen","Wang","Li","Liu","Yang","Huang","Wu","Zhou","Zhang","Zhu","Kim","Lee","Park","Choi","Jung","Kang","Nguyen","Tran","Pham","Patel","Singh","Kumar","Shah","Sharma","Suzuki","Tanaka","Sato","Watanabe","Washington","Jefferson","Banks","Freeman","Brooks","Jenkins","Howard","Powell","Coleman","Simmons","Fisher","Reynolds","Ferguson","Fields","Booker","Rhodes","Stevenson","Malone","Hamilton","Douglas","Winston","Al-Sayed","Khan","Ahmed","Hassan","Ali","Rahman","Malik","Hussein","Mahmoud","Aziz","Ibrahim","Mansour","Khoury","Sayegh","Nassar","Schmidt","Mueller","Fischer","Weber","Meyer","Wagner","Becker","Dubois","Lefebvre","Moreau","Laurent","Bernard","Russo","Conti","Ferrari","Ricci","Marino","Costa","Kowalski","Novak","Kovac"]);M(this,"cities",["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","San Francisco","Charlotte","Indianapolis","Seattle","Denver","Boston","Portland","Miami","Nashville","Atlanta","Detroit","Toronto","Vancouver","Montreal","Calgary","Ottawa","Mexico City","Guadalajara","London","Paris","Berlin","Madrid","Rome","Amsterdam","Brussels","Vienna","Stockholm","Copenhagen","Oslo","Dublin","Prague","Warsaw","Budapest","Barcelona","Munich","Milan","Hamburg","Lyon","Frankfurt","Zurich","Geneva","Tokyo","Shanghai","Beijing","Seoul","Mumbai","Delhi","Singapore","Hong Kong","Bangkok","Kuala Lumpur","Jakarta","Manila","Osaka","Taipei","Ho Chi Minh City","Dubai","Abu Dhabi","Doha","Istanbul","Tehran","Riyadh","Bangalore","Karachi","Sydney","Melbourne","Brisbane","Perth","Auckland","Wellington","Adelaide","São Paulo","Rio de Janeiro","Buenos Aires","Lima","Bogotá","Santiago","Caracas","Montevideo","Quito","La Paz","Asunción","Brasília","Cairo","Lagos","Johannesburg","Nairobi","Casablanca","Cape Town","Accra","Addis Ababa","Dar es Salaam","Algiers","Khartoum","Rabat"]);M(this,"states",["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);M(this,"countries",["United States","Canada","Mexico","Costa Rica","Panama","Jamaica","Dominican Republic","Cuba","Guatemala","Honduras","El Salvador","Brazil","Argentina","Chile","Colombia","Peru","Venezuela","Uruguay","Ecuador","Bolivia","Paraguay","United Kingdom","Germany","France","Italy","Spain","Netherlands","Belgium","Sweden","Norway","Denmark","Finland","Ireland","Portugal","Greece","Austria","Switzerland","Poland","Hungary","Czech Republic","Romania","Ukraine","Croatia","Serbia","China","Japan","South Korea","India","Indonesia","Malaysia","Singapore","Thailand","Vietnam","Philippines","Pakistan","Bangladesh","Sri Lanka","Nepal","Mongolia","Kazakhstan","Israel","Saudi Arabia","United Arab Emirates","Qatar","Turkey","Iran","Iraq","Jordan","Lebanon","Oman","South Africa","Egypt","Morocco","Kenya","Nigeria","Ghana","Ethiopia","Tanzania","Uganda","Rwanda","Senegal","Algeria","Tunisia","Australia","New Zealand","Fiji","Papua New Guinea","Solomon Islands","Vanuatu","Samoa"]);M(this,"companies",["Quantum Dynamics","Digital Nexus","TechSphere Solutions","InnovateX","CyberPeak Systems","DataFlow Technologies","CloudMind Computing","Artificial Intelligence Labs","Binary Solutions Group","FutureTech Industries","Neural Networks Inc","Quantum Computing Co","Digital Frontiers","Atlas Manufacturing","Global Industries Corp","Sterling Dynamics","Precision Engineering Ltd","Summit Industries","Titan Manufacturing","Nova Industrial Systems","Apex Production Group","MetalWorks International","Cornerstone Financial","Global Trust Bank","Prosperity Partners","Heritage Investment Group","Capital Dynamics","Wealth Architects","Strategic Finance Solutions","Pinnacle Banking Corp","Liberty Financial","Vital Sciences","BioGenetics Research","MediCore Solutions","Genesis Healthcare","Life Sciences Lab","Advanced Medical Systems","BioTech Innovations","Healthcare Dynamics","Pharmaceutical Pioneers","Stellar Entertainment","Global Media Group","Digital Content Corp","Creative Dynamics","Media Frontiers","Entertainment Fusion","Interactive Media Solutions","Content Creation Co","Digital Dreams Studios","Acme Corporation","Umbrella Corporation","Cyberdyne Systems","Wayne Enterprises","Stark Industries","Oscorp Industries","Weyland-Yutani Corp","InGen Technologies","Tyrell Corporation","Gekko & Co","Wonka Industries","Dunder Mifflin","Los Pollos Hermanos"]);M(this,"jobTitles",["Software Engineer","Data Scientist","Cloud Architect","DevOps Engineer","Machine Learning Engineer","Full Stack Developer","Mobile App Developer","Systems Administrator","Information Security Analyst","Database Administrator","UI/UX Designer","Product Manager","Scrum Master","IT Project Manager","Network Engineer","Blockchain Developer","AI Research Scientist","Quality Assurance Engineer","Site Reliability Engineer","Tech Lead","Chief Executive Officer","Chief Technology Officer","Chief Financial Officer","Chief Marketing Officer","Chief Operating Officer","Managing Director","Business Development Manager","Operations Director","Strategy Consultant","Marketing Manager","Sales Director","Account Executive","Brand Manager","Human Resources Manager","Recruitment Specialist","Financial Analyst","Investment Banker","Management Consultant","Risk Manager","Supply Chain Manager","Creative Director","Art Director","Graphic Designer","Content Strategist","Copywriter","Digital Marketing Specialist","Social Media Manager","Video Producer","Motion Designer","Brand Strategist","UX Researcher","Visual Designer","3D Artist","Game Designer","Content Creator","Medical Doctor","Registered Nurse","Pharmacist","Clinical Researcher","Physical Therapist","Healthcare Administrator","Biomedical Engineer","Psychiatrist","Dental Surgeon","Veterinarian","Nurse Practitioner","Research Scientist","Biotechnology Researcher","Environmental Scientist","Chemical Engineer","Quantum Physicist","Marine Biologist","Archaeologist","Aerospace Engineer","Materials Scientist","Data Analyst","University Professor","Educational Consultant","Academic Researcher","Curriculum Developer","Educational Technology Specialist","Dean of Students","Corporate Lawyer","Investment Manager","Financial Controller","Tax Consultant","Compliance Officer","Legal Counsel","Portfolio Manager","Actuary","Audit Manager","Wealth Management Advisor"]);M(this,"streetTypes",["Street","Avenue","Boulevard","Road","Lane","Drive","Way","Court","Circle","Place","Trail","Parkway","Highway","Terrace","Square","Alley","Loop","Path","Grove","Crescent","Ridge","Point","Heights","Crossing","Commons","Esplanade","Glen","Green","Landing","Meadow","Park","Plaza","Promenade","Run","Trace","Vale","Vista","Walk","Row"])}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addFieldRow(),this.addStyles())}setupEventListeners(){const e=document.getElementById("addField"),t=document.getElementById("generateBtn"),n=document.getElementById("exportFormat"),s=document.getElementById("copyOutput"),o=document.getElementById("downloadOutput");!e||!t||!n||!s||!o||(e.addEventListener("click",()=>this.addFieldRow()),t.addEventListener("click",()=>this.generateData()),n.addEventListener("change",()=>this.generateData()),s.addEventListener("click",()=>{const r=document.getElementById("outputDisplay");r!=null&&r.textContent&&navigator.clipboard.writeText(r.textContent).then(()=>this.showToast("Output copied to clipboard")).catch(()=>this.showToast("Failed to copy output"))}),o.addEventListener("click",()=>{var d;const r=(d=document.getElementById("outputDisplay"))==null?void 0:d.textContent;if(!r)return;const a=n.value,l=new Blob([r],{type:a==="json"?"application/json":a==="csv"?"text/csv":"text/plain"}),c=URL.createObjectURL(l),u=document.createElement("a");u.href=c,u.download=`mock-data.${a}`,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(c),this.showToast("File downloaded successfully")}))}addFieldRow(){const e=document.getElementById("fieldList");if(!e)return;const t=document.createElement("div");t.className="field-row",t.innerHTML=`
      <input type="text" class="field-name" placeholder="Field name">
      <select class="field-type">
        ${this.supportedTypes.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
      </select>
      <div class="field-options"></div>
      <button class="remove-field">×</button>
    `;const n=t.querySelector(".remove-field");n==null||n.addEventListener("click",()=>{t.remove(),e.children.length===0&&this.addFieldRow()}),e.appendChild(t)}generateData(){var l,c;const e=document.querySelectorAll(".field-row"),t=parseInt(((l=document.getElementById("recordCount"))==null?void 0:l.value)||"10"),n=(c=document.getElementById("exportFormat"))==null?void 0:c.value,s=document.getElementById("outputDisplay");if(!s)return;const o=Array.from(e).map(u=>{var d,h,f;return{name:((h=(d=u.querySelector(".field-name"))==null?void 0:d.value)==null?void 0:h.trim())||"",type:((f=u.querySelector(".field-type"))==null?void 0:f.value)||"text"}}).filter(u=>u.name!=="");if(o.length===0){s.textContent="Please add at least one field with a name.";return}const r=Array.from({length:t},()=>{const u={};return o.forEach(d=>{u[d.name]=this.generateFieldValue(d.type)}),u});let a;switch(n){case"json":a=JSON.stringify(r,null,2);break;case"csv":const u=o.map(h=>h.name).join(","),d=r.map(h=>o.map(f=>h[f.name]).join(","));a=[u,...d].join(`
`);break;case"raw":a=r.map(h=>Object.entries(h).map(([f,g])=>`${f}: ${g}`).join(`
`)).join(`

`);break;default:a=JSON.stringify(r,null,2)}s.textContent=a}generateFieldValue(e){switch(e){case"fullName":return this.generateFullName();case"firstName":return this.getRandomElement(this.firstNames);case"lastName":return this.getRandomElement(this.lastNames);case"email":return this.generateEmail();case"phoneNumber":return this.generatePhoneNumber();case"streetAddress":return this.generateStreetAddress();case"city":return this.getRandomElement(this.cities);case"state":return this.getRandomElement(this.states);case"zipCode":return this.generateZipCode();case"country":return this.getRandomElement(this.countries);case"company":return this.getRandomElement(this.companies);case"jobTitle":return this.getRandomElement(this.jobTitles);case"age":return Math.floor(Math.random()*60)+18;case"date":return this.generateRandomDate();case"uuid":return crypto.randomUUID();case"number":return Math.floor(Math.random()*1e3);case"boolean":return Math.random()>.5;default:return"Unknown type"}}getRandomElement(e){return e[Math.floor(Math.random()*e.length)]}generateFullName(){return`${this.getRandomElement(this.firstNames)} ${this.getRandomElement(this.lastNames)}`}generateEmail(){const e=this.getRandomElement(this.firstNames).toLowerCase(),t=this.getRandomElement(this.lastNames).toLowerCase(),n=["gmail.com","yahoo.com","hotmail.com","outlook.com","example.com"];return`${e}.${t}@${this.getRandomElement(n)}`}generatePhoneNumber(){const e=Math.floor(Math.random()*900)+100,t=Math.floor(Math.random()*900)+100,n=Math.floor(Math.random()*9e3)+1e3;return`(${e}) ${t}-${n}`}generateStreetAddress(){const e=Math.floor(Math.random()*9900)+100,t=["Oak","Maple","Cedar","Pine","Elm","Willow","Birch","Forest","River","Lake","Stream","Mountain","Valley","Meadow","Hill","Garden","Rose","Lily","Palm","Beach","Ocean","Spring","Summer","Washington","Lincoln","Jefferson","Adams","Madison","Franklin","Hamilton","Kennedy","Roosevelt","Victoria","Windsor","Heritage","Main","High","Market","Church","School","Park","Central","Broadway","Union","Liberty","State","Commerce","Industrial","University","North","South","East","West","Northwest","Northeast","Southwest","Southeast","Highland","Sunset","Sunrise","Pleasant","Hidden","Crystal","Royal","Golden","Silver","Emerald","Diamond","Castle","Colonial","Crescent"];return`${e} ${this.getRandomElement(t)} ${this.getRandomElement(this.streetTypes)}`}generateZipCode(){return String(Math.floor(Math.random()*9e4)+1e4)}generateRandomDate(e=new Date(2020,0,1),t=new Date){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())).toISOString().split("T")[0]}showToast(e){const t=document.querySelector(".generator-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class my{constructor(){M(this,"id","random-number-generator");M(this,"name","Random Number Generator");M(this,"description","Generate random numbers with custom ranges, distributions, and options");M(this,"seoMetadata",{title:"Free Online Random Number Generator Tool",description:"Generate random numbers with custom ranges and distributions. Perfect for games, statistics, and random sampling. Cryptographically secure random number generation.",keywords:["random number generator","random number picker","number randomizer","random integer generator","random range generator","secure random numbers"]});M(this,"distributions",[{value:"uniform",label:"Uniform (Equal Probability)"},{value:"normal",label:"Normal (Bell Curve)"},{value:"exponential",label:"Exponential"}])}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("distribution"),t=document.getElementById("normalParams"),n=document.getElementById("exponentialParams"),s=document.getElementById("generateBtn"),o=document.getElementById("copyBtn"),r=document.getElementById("clearBtn"),a=document.getElementById("resultsArea");if(!e||!t||!n||!s||!o||!r||!a)return;e.addEventListener("change",()=>{t.style.display=e.value==="normal"?"flex":"none",n.style.display=e.value==="exponential"?"flex":"none"}),s.addEventListener("click",()=>{const u=parseFloat(document.getElementById("minValue").value),d=parseFloat(document.getElementById("maxValue").value),h=parseInt(document.getElementById("count").value),f=parseInt(document.getElementById("decimalPlaces").value),g=document.getElementById("allowDuplicates").checked,y=document.getElementById("sortResults").checked,v=e.value;try{const p=this.generateNumbers({min:u,max:d,count:h,decimalPlaces:f,allowDuplicates:g,sortResults:y,distribution:v,mean:parseFloat(document.getElementById("mean").value),stdDev:parseFloat(document.getElementById("stdDev").value),lambda:parseFloat(document.getElementById("lambda").value)});this.displayResults(p)}catch(p){this.showError(p.message)}}),o.addEventListener("click",()=>{const u=a.textContent;u&&navigator.clipboard.writeText(u).then(()=>this.showToast("Numbers copied to clipboard")).catch(()=>this.showToast("Failed to copy numbers"))}),r.addEventListener("click",()=>{a.innerHTML=""});const l=document.getElementById("downloadTxtBtn"),c=document.getElementById("downloadJsonBtn");l&&c&&(l.addEventListener("click",()=>{const u=this.extractCurrentNumbers();if(u.length===0)return;const d=u.join(`
`);this.downloadFile(d,"random-numbers.txt","text/plain")}),c.addEventListener("click",()=>{const u=this.extractCurrentNumbers();if(u.length===0)return;const d=JSON.stringify(u,null,4);this.downloadFile(d,"random-numbers.json","application/json")}))}generateNumbers(e){const{min:t,max:n,count:s,decimalPlaces:o,allowDuplicates:r,sortResults:a,distribution:l,mean:c=50,stdDev:u=10,lambda:d=1}=e;if(isNaN(t)||isNaN(n))throw new Error("Please enter valid minimum and maximum values");if(t>=n)throw new Error("Maximum value must be greater than minimum value");if(s<1||s>1e3)throw new Error("Number of values must be between 1 and 1000");if(o<0||o>10)throw new Error("Decimal places must be between 0 and 10");const h=Math.pow(10,-o),f=Math.floor((n-t)/h)+1;if(!r&&f<s)throw new Error(`Can't generate ${s} unique numbers in this range with ${o} decimal places`);const g=[],y=new Set;for(;g.length<s;){let v;switch(l){case"normal":if(u<=0)throw new Error("Standard deviation must be greater than 0");let p=0;do{const m=Math.random(),S=Math.random();v=Math.sqrt(-2*Math.log(m))*Math.cos(2*Math.PI*S)*u+c,p++}while((v<t||v>n)&&p<100);p>=100&&(v=t+Math.random()*(n-t));break;case"exponential":if(d<=0)throw new Error("Lambda must be greater than 0");const E=-Math.log(1-Math.random())/d,w=n-t;v=t+(1-Math.exp(-E))*w;break;default:v=t+Math.random()*(n-t);break}v=Number(v.toFixed(o)),r?g.push(v):y.has(v)||(g.push(v),y.add(v))}return a&&g.sort((v,p)=>v-p),g}displayResults(e){const t=document.getElementById("resultsArea");if(!t)return;const n=e.map(s=>Math.abs(s)>=1e6||Math.abs(s)<1e-4&&s!==0?s.toExponential(Math.min(15,Math.max(0,this.getSignificantDecimals(s)))):s.toLocaleString(void 0,{minimumFractionDigits:this.getDecimalPlaces(s),maximumFractionDigits:this.getDecimalPlaces(s)}));if(t.innerHTML=n.join(", "),e.length>1){const s=this.calculateStats(e);t.innerHTML+=`
        <div class="stats-summary">
          <hr>
          <div>Count: ${e.length}</div>
          <div>Min: ${this.formatNumber(s.min)}</div>
          <div>Max: ${this.formatNumber(s.max)}</div>
          <div>Mean: ${this.formatNumber(s.mean)}</div>
          ${e.length>2?`<div>Std Dev: ${this.formatNumber(s.stdDev)}</div>`:""}
        </div>
      `}}getDecimalPlaces(e){const t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}getSignificantDecimals(e){const t=Math.abs(e).toExponential(),[n]=t.split("e");return(n.split(".")[1]||"").length}formatNumber(e){return Math.abs(e)>=1e6||Math.abs(e)<1e-4&&e!==0?e.toExponential(4):e.toLocaleString(void 0,{minimumFractionDigits:Math.min(4,this.getDecimalPlaces(e)),maximumFractionDigits:Math.min(4,this.getDecimalPlaces(e))})}downloadFile(e,t,n){const s=new Blob([e],{type:n}),o=URL.createObjectURL(s),r=document.createElement("a");r.href=o,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o),this.showToast(`Downloaded ${t}`)}extractCurrentNumbers(){var n;const e=document.getElementById("resultsArea");if(!e)return[];const t=(n=e.firstChild)==null?void 0:n.textContent;return t?t.split(",").map(s=>s.trim()).map(s=>parseFloat(s.replace(/,/g,""))).filter(s=>!isNaN(s)):[]}calculateStats(e){const t=Math.min(...e),n=Math.max(...e),s=e.reduce((r,a)=>r+a,0)/e.length,o=Math.sqrt(e.reduce((r,a)=>r+Math.pow(a-s,2),0)/(e.length-1));return{min:t,max:n,mean:s,stdDev:o}}showError(e){const t=document.getElementById("resultsArea");t&&(t.innerHTML=`<span class="error-message">${e}</span>`)}showToast(e){const t=document.querySelector(".generator-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class gy{constructor(){M(this,"id","json-compare");M(this,"name","JSON Compare");M(this,"description","Compare and find differences between JSON objects");M(this,"seoMetadata",{title:"Free Online JSON Comparison Tool",description:"Compare two JSON objects and find differences instantly. Visual diff viewer, structural comparison, and value matching for JSON data.",keywords:["json compare","json diff","json difference checker","compare json online","json comparison tool","json structure compare"]})}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEditor(),this.addStyles())}setupEditor(){const e=document.getElementById("leftEditor"),t=document.getElementById("rightEditor"),n=document.getElementById("leftError"),s=document.getElementById("rightError"),o=document.getElementById("diffResults"),r=document.getElementById("diffStats");if(!e||!t||!n||!s||!o||!r)return;const a={name:"John Doe",age:30,hobbies:["reading","gaming"],address:{street:"123 Main St",city:"Boston"}},l={name:"John Doe",age:31,hobbies:["reading","gaming"],address:{street:"123 Main St",city:"Boston"}};e.value=JSON.stringify(a,null,2),t.value=JSON.stringify(l,null,2);const c=()=>{try{const d=JSON.parse(e.value),h=JSON.parse(t.value),f=document.getElementById("ignoreWhitespace").checked,g=document.getElementById("ignoreCase").checked,y=document.getElementById("ignoreOrder").checked,v=this.compareJson(d,h,{ignoreWhitespace:f,ignoreCase:g,ignoreOrder:y});this.displayDifferences(v)}catch(d){o.innerHTML=`<div class="error-message">Error: ${d.message}</div>`,r.textContent=""}},u=(d,h)=>{const f=document.getElementById(h);if(!f)return;const g=d.value.split(`
`).length;f.innerHTML=Array.from({length:g},(y,v)=>`<div class="line-number">${v+1}</div>`).join("")};[e,t].forEach((d,h)=>{const f=h===0?"leftLineNumbers":"rightLineNumbers",g=h===0?n:s;d.addEventListener("input",()=>{u(d,f);try{d.value.trim()&&(JSON.parse(d.value),g.textContent="",g.className="error-display",c())}catch(v){g.textContent=v.message,g.className="error-display error"}}),d.addEventListener("scroll",()=>{const v=document.getElementById(f);v&&(v.scrollTop=d.scrollTop)}),d.addEventListener("keydown",v=>{if(v.key==="Tab"){v.preventDefault();const p=d.selectionStart,E=d.selectionEnd;d.value=d.value.substring(0,p)+"  "+d.value.substring(E),d.selectionStart=d.selectionEnd=p+2,u(d,f)}});const y=d.closest(".editor-column");if(y){const v=y.querySelector(".format-btn"),p=y.querySelector(".clear-btn");v==null||v.addEventListener("click",()=>{try{const E=JSON.parse(d.value);d.value=JSON.stringify(E,null,2),u(d,f),g.textContent="",g.className="error-display"}catch(E){g.textContent=E.message,g.className="error-display error"}}),p==null||p.addEventListener("click",()=>{d.value="",u(d,f),g.textContent="",g.className="error-display"})}}),["ignoreWhitespace","ignoreCase","ignoreOrder"].forEach(d=>{const h=document.getElementById(d);h==null||h.addEventListener("change",c)}),u(e,"leftLineNumbers"),u(t,"rightLineNumbers"),c()}compareJson(e,t,n){const s=[],o=n.path||[],r=a=>{if(typeof a=="string"){let l=n.ignoreWhitespace?a.trim():a;return n.ignoreCase?l.toLowerCase():l}return a};if(Array.isArray(e))Array.isArray(t)?e.length!==t.length?s.push({path:o.join("."),type:"array_length",left:e.length,right:t.length}):n.ignoreOrder||e.forEach((a,l)=>{s.push(...this.compareJson(a,t[l],{...n,path:[...o,l.toString()]}))}):s.push({path:o.join("."),type:"type_mismatch",left:"array",right:typeof t});else if(typeof e=="object"&&e!==null)typeof t!="object"||t===null?s.push({path:o.join("."),type:"type_mismatch",left:"object",right:typeof t}):new Set([...Object.keys(e),...Object.keys(t)]).forEach(l=>{l in e?l in t?s.push(...this.compareJson(e[l],t[l],{...n,path:[...o,l]})):s.push({path:[...o,l].join("."),type:"key_missing_in_right",left:e[l]}):s.push({path:[...o,l].join("."),type:"key_missing_in_left",right:t[l]})});else{const a=r(e),l=r(t);a!==l&&s.push({path:o.join(".")||"root",type:"value_mismatch",left:e,right:t})}return s}displayDifferences(e){const t=document.getElementById("diffResults"),n=document.getElementById("diffStats");if(!t||!n)return;if(e.length===0){t.innerHTML='<div class="success-message">✓ JSONs are equivalent</div>',n.textContent="No differences found";return}const s=e.reduce((o,r)=>(o[r.type]=(o[r.type]||0)+1,o),{});n.innerHTML=Object.entries(s).map(([o,r])=>`<span class="stat-item ${o}">${this.formatDiffType(o)}: ${r}</span>`).join(" "),t.innerHTML="",this.highlightDifferences(e)}highlightDifferences(e){const t=document.getElementById("leftEditor"),n=document.getElementById("rightEditor");if(!t||!n)return;const s=(a,l)=>{const c=a.parentElement;if(!c)return;c.querySelectorAll(".highlight-overlay").forEach(d=>d.remove());const u=document.createElement("div");return u.className="highlight-overlay",u.style.left="2rem",c.appendChild(u),u},o=s(t,"left"),r=s(n,"right");!o||!r||(e.forEach(a=>{const l=a.path.split(".");try{const c=JSON.parse(t.value),u=JSON.parse(n.value),d=this.findAffectedLines(t.value,l),h=this.findAffectedLines(n.value,l);d.forEach(f=>{const g=document.createElement("div");g.className=`highlight-marker ${a.type}`,g.style.top=`${(f-.6)*20}px`,g.style.width="100%",g.style.height="20px",o.appendChild(g)}),h.forEach(f=>{const g=document.createElement("div");g.className=`highlight-marker ${a.type}`,g.style.top=`${(f-.6)*20}px`,g.style.width="100%",g.style.height="20px",r.appendChild(g)})}catch(c){console.error("Error highlighting differences:",c)}}),t.addEventListener("scroll",()=>{o&&(o.style.top=`${-t.scrollTop}px`)}),n.addEventListener("scroll",()=>{r&&(r.style.top=`${-n.scrollTop}px`)}))}findAffectedLines(e,t){const n=[];let s=JSON.parse(e),o=[],r=1;const a=l=>{if(!(!l||typeof l!="object"))for(const c in l){const d=[...o,c].join(".");r=(e.slice(0,e.indexOf(`"${c}"`)).match(/\n/g)||[]).length+1,t.join(".").startsWith(d)&&n.push(r),l[c]&&typeof l[c]=="object"&&(o.push(c),a(l[c]),o.pop())}};return a(s),[...new Set(n)]}formatDiffType(e){return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `;const s=document.getElementById(e.id);s&&s.appendChild(t)}}class yy{constructor(){M(this,"id","password-generator");M(this,"name","Password Generator");M(this,"description","Generate secure passwords with custom options");M(this,"seoMetadata",{title:"Free Online Password Generator Tool",description:"Generate strong, secure passwords instantly with customizable options. Create passwords that meet specific requirements for length and complexity.",keywords:["password generator","secure password","random password","strong password generator","password creator"]});M(this,"lastSettings",{length:16,uppercase:!0,lowercase:!0,numbers:!0,symbols:!0})}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      
      <div class="password-container">
        <div class="password-output">
          <input type="text" id="passwordOutput" readonly>
          <button id="copyPassword" class="button">Copy</button>
        </div>

        <div class="password-options">
          <div class="option-group">
            <label for="passwordLength">Length:</label>
            <input type="number" id="passwordLength" value="${this.lastSettings.length}" min="8" max="64">
          </div>

          <div class="checkbox-group">
            <label>
              <input type="checkbox" id="uppercase" ${this.lastSettings.uppercase?"checked":""}>
              Uppercase (A-Z)
            </label>

            <label>
              <input type="checkbox" id="lowercase" ${this.lastSettings.lowercase?"checked":""}>
              Lowercase (a-z)
            </label>

            <label>
              <input type="checkbox" id="numbers" ${this.lastSettings.numbers?"checked":""}>
              Numbers (0-9)
            </label>

            <label>
              <input type="checkbox" id="symbols" ${this.lastSettings.symbols?"checked":""}>
              Symbols (!@#$%^&*)
            </label>
          </div>

          <button id="generatePassword" class="button primary">Generate Password</button>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles(),this.generatePassword())}setupEventListeners(){const e=document.getElementById("generatePassword"),t=document.getElementById("copyPassword"),n=document.getElementById("passwordLength"),s=["uppercase","lowercase","numbers","symbols"];e==null||e.addEventListener("click",()=>this.generatePassword()),t==null||t.addEventListener("click",()=>{const o=document.getElementById("passwordOutput");navigator.clipboard.writeText(o.value).then(()=>this.showToast("Password copied to clipboard")).catch(()=>this.showToast("Failed to copy password"))}),n==null||n.addEventListener("input",()=>{let o=parseInt(n.value);o<8&&(n.value="8"),o>64&&(n.value="64"),this.lastSettings.length=parseInt(n.value)}),s.forEach(o=>{const r=document.getElementById(o);r==null||r.addEventListener("change",()=>{this.lastSettings[o]=r.checked,this.generatePassword()})})}generatePassword(){var r;const e={uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",lowercase:"abcdefghijklmnopqrstuvwxyz",numbers:"0123456789",symbols:"!@#$%^&*()_+-=[]{}|;:,.<>?"};let t="",n="";if(Object.keys(e).forEach(a=>{const l=document.getElementById(a);l!=null&&l.checked&&(t+=e[a])}),!t){this.showToast("Please select at least one character type");return}const s=parseInt(((r=document.getElementById("passwordLength"))==null?void 0:r.value)||"16");for(let a=0;a<s;a++){const l=crypto.getRandomValues(new Uint32Array(1))[0]%t.length;n+=t[l]}const o=document.getElementById("passwordOutput");o&&(o.value=n)}showToast(e){const t=document.querySelector(".password-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .password-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 600px;
        margin: 0 auto;
        position: relative;
      }

      .password-output {
        display: flex;
        gap: 1rem;
      }

      .password-output input {
        flex: 1;
        padding: 0.75rem;
        font-family: monospace;
        font-size: 1.1rem;
        border: 2px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        color: var(--text);
      }

      .password-options {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.5rem;
        border: 2px solid var(--border);
        border-radius: 8px;
      }

      .option-group {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .option-group input[type="number"] {
        width: 80px;
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        color: var(--text);
      }

      .checkbox-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .checkbox-group label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        background: var(--primary);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        opacity: 0;
        transition: all 0.3s ease;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }

      @media (max-width: 600px) {
        .password-output {
          flex-direction: column;
        }
      }
    `,document.head.appendChild(e)}}class vy{constructor(){M(this,"id","timezone-converter");M(this,"name","Time Zone Converter");M(this,"description","Convert times between different time zones easily");M(this,"seoMetadata",{title:"Free Online Time Zone Converter Tool",description:"Convert times between different time zones instantly. Easy to use time zone calculator with support for daylight saving time.",keywords:["time zone converter","timezone calculator","time converter","world time","timezone tool","time difference calculator"]});M(this,"timeZones",Intl.supportedValuesOf("timeZone"))}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="timezone-container">
        <div class="converter-section">
          <div class="time-input">
            <div class="input-group">
              <label for="sourceTime">Time</label>
              <input type="datetime-local" id="sourceTime" class="time-control">
            </div>
            <div class="input-group">
              <label for="sourceZone">From Time Zone</label>
              <select id="sourceZone" class="zone-select">
                ${this.timeZones.map(t=>`<option value="${t}">${this.formatTimeZone(t)}</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="swap-button">
            <button id="swapZones" class="button" title="Swap time zones">
              ↑↓
            </button>
          </div>

          <div class="time-output">
            <div class="input-group">
              <label for="targetTime">Converted Time</label>
              <input type="datetime-local" id="targetTime" class="time-control" readonly>
            </div>
            <div class="input-group">
              <label for="targetZone">To Time Zone</label>
              <select id="targetZone" class="zone-select">
                ${this.timeZones.map(t=>`<option value="${t}">${this.formatTimeZone(t)}</option>`).join("")}
              </select>
            </div>
          </div>
        </div>

        <div class="info-section">
          <div class="time-info">
            <h3>Time Zone Information</h3>
            <div id="timeInfo" class="info-content"></div>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles(),this.initializeWithCurrentTime())}formatTimeZone(e){const n=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"long"}).format(new Date).split(" ").pop();return`${e.replace("_"," ")} (${n})`}setupEventListeners(){const e=document.getElementById("sourceTime"),t=document.getElementById("sourceZone"),n=document.getElementById("targetZone"),s=document.getElementById("swapZones");t.value=Intl.DateTimeFormat().resolvedOptions().timeZone,n.value="UTC";const o=()=>{if(!e.value)return;const r=new Date(e.value),a=this.convertTime(r,t.value,n.value),l=document.getElementById("targetTime");l.value=a.toISOString().slice(0,16),this.updateTimeInfo(r,t.value,n.value)};e.addEventListener("input",o),t.addEventListener("change",o),n.addEventListener("change",o),s==null||s.addEventListener("click",()=>{const r=t.value;t.value=n.value,n.value=r,o()})}initializeWithCurrentTime(){const e=document.getElementById("sourceTime"),t=new Date;e.value=t.toISOString().slice(0,16),e.dispatchEvent(new Event("input"))}convertTime(e,t,n){const s=new Date(e.toLocaleString("en-US",{timeZone:t})),r=new Date(s.toLocaleString("en-US",{timeZone:n})).getTime()-s.getTime();return new Date(e.getTime()+r)}updateTimeInfo(e,t,n){const s=document.getElementById("timeInfo");if(!s)return;const o=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"long",hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"long",day:"numeric"}),r=new Intl.DateTimeFormat("en-US",{timeZone:n,timeZoneName:"long",hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"long",day:"numeric"}),a=o.format(e),l=r.format(e);s.innerHTML=`
      <div class="info-row">
        <strong>From:</strong> ${a}
      </div>
      <div class="info-row">
        <strong>To:</strong> ${l}
      </div>
      <div class="info-row time-difference">
        ${this.calculateTimeDifference(t,n)}
      </div>
    `}calculateTimeDifference(e,t){const n=new Date,s=new Date(n.toLocaleString("en-US",{timeZone:e})),r=(new Date(n.toLocaleString("en-US",{timeZone:t})).getTime()-s.getTime())/(1e3*60*60),a=Math.abs(r),l=Math.floor(a),c=Math.round((a-l)*60);return`Time difference: ${r>=0?"+":"-"}${l}:${c.toString().padStart(2,"0")} hours`}addStyles(){const e=document.createElement("style");e.textContent=`
      .timezone-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .converter-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .time-input,
      .time-output {
        display: flex;
        gap: 1rem;
      }

      .input-group {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .time-control,
      .zone-select {
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 1rem;
        width: 100%;
      }

      .swap-button {
        display: flex;
        justify-content: center;
        padding: 0.5rem;
      }

      .swap-button button {
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
      }

      .info-section {
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .time-info h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .info-content {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .info-row {
        line-height: 1.4;
      }

      .time-difference {
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        border-top: 1px solid var(--border);
        color: var(--primary);
        font-weight: 500;
      }

      @media (max-width: 600px) {
        .time-input,
        .time-output {
          flex-direction: column;
        }
      }
    `,document.head.appendChild(e)}}class xy{constructor(){M(this,"id","length-converter");M(this,"name","Length Converter");M(this,"description","Convert between different units of length and distance");M(this,"seoMetadata",{title:"Free Online Length Unit Converter Tool",description:"Convert between different units of length and distance including meters, kilometers, miles, feet, inches, and more. Easy to use and no installation required.",keywords:["length converter","distance converter","unit converter","meter converter","feet to meters","inches to cm","metric converter"]});M(this,"units",{meter:{name:"Meters",abbreviation:"m",toBase:e=>e,fromBase:e=>e},kilometer:{name:"Kilometers",abbreviation:"km",toBase:e=>e*1e3,fromBase:e=>e/1e3},centimeter:{name:"Centimeters",abbreviation:"cm",toBase:e=>e/100,fromBase:e=>e*100},millimeter:{name:"Millimeters",abbreviation:"mm",toBase:e=>e/1e3,fromBase:e=>e*1e3},mile:{name:"Miles",abbreviation:"mi",toBase:e=>e*1609.344,fromBase:e=>e/1609.344},yard:{name:"Yards",abbreviation:"yd",toBase:e=>e*.9144,fromBase:e=>e/.9144},foot:{name:"Feet",abbreviation:"ft",toBase:e=>e*.3048,fromBase:e=>e/.3048},inch:{name:"Inches",abbreviation:"in",toBase:e=>e*.0254,fromBase:e=>e/.0254},nauticalMile:{name:"Nautical Miles",abbreviation:"nmi",toBase:e=>e*1852,fromBase:e=>e/1852}});M(this,"lastInput","");M(this,"lastFromUnit","meter");M(this,"lastToUnit","kilometer")}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="converter-container">
        <div class="converter-section">
          <div class="input-group">
            <input 
              type="number" 
              id="fromValue" 
              class="number-input" 
              value="1" 
              step="any"
              placeholder="Enter value..."
            >
            <select id="fromUnit" class="unit-select">
              ${Object.entries(this.units).map(([t,n])=>`<option value="${t}">${n.name} (${n.abbreviation})</option>`).join("")}
            </select>
          </div>

          <button id="swapUnits" class="swap-button" title="Swap units">
            ⇅
          </button>

          <div class="input-group">
            <input 
              type="number" 
              id="toValue" 
              class="number-input" 
              readonly 
              placeholder="Result..."
            >
            <select id="toUnit" class="unit-select">
              ${Object.entries(this.units).map(([t,n])=>`<option value="${t}" ${t==="kilometer"?"selected":""}>
                  ${n.name} (${n.abbreviation})
                </option>`).join("")}
            </select>
          </div>
        </div>

        <div class="common-conversions">
          <h3>Common Conversions</h3>
          <div class="conversion-grid">
            <div class="conversion-item" data-from="foot" data-to="meter">
              <div class="conversion-value" id="footToMeter">1 ft = 0.3048 m</div>
              <div class="conversion-label">Feet to Meters</div>
            </div>
            <div class="conversion-item" data-from="mile" data-to="kilometer">
              <div class="conversion-value" id="mileToKm">1 mi = 1.60934 km</div>
              <div class="conversion-label">Miles to Kilometers</div>
            </div>
            <div class="conversion-item" data-from="inch" data-to="centimeter">
              <div class="conversion-value" id="inchToCm">1 in = 2.54 cm</div>
              <div class="conversion-label">Inches to Centimeters</div>
            </div>
            <div class="conversion-item" data-from="yard" data-to="meter">
              <div class="conversion-value" id="yardToMeter">1 yd = 0.9144 m</div>
              <div class="conversion-label">Yards to Meters</div>
            </div>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles(),this.convert(),this.updateCommonConversions())}setupEventListeners(){const e=document.getElementById("fromValue"),t=document.getElementById("fromUnit"),n=document.getElementById("toUnit"),s=document.getElementById("swapUnits");!e||!t||!n||!s||(t.value=this.lastFromUnit,n.value=this.lastToUnit,e.addEventListener("input",()=>{this.lastInput=e.value,this.convert()}),t.addEventListener("change",()=>{this.lastFromUnit=t.value,this.convert()}),n.addEventListener("change",()=>{this.lastToUnit=n.value,this.convert()}),s.addEventListener("click",()=>{const o=t.value;t.value=n.value,n.value=o,this.lastFromUnit=t.value,this.lastToUnit=n.value,this.convert()}),document.querySelectorAll(".conversion-item").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.from,a=o.dataset.to;r&&a&&(t.value=r,n.value=a,this.lastFromUnit=r,this.lastToUnit=a,this.convert())})}))}convert(){const e=document.getElementById("fromValue"),t=document.getElementById("fromUnit"),n=document.getElementById("toUnit"),s=document.getElementById("toValue");if(!e||!t||!n||!s)return;const o=parseFloat(e.value);if(isNaN(o)){s.value="";return}const r=this.units[t.value],a=this.units[n.value],l=r.toBase(o),c=a.fromBase(l);s.value=this.formatNumber(c)}updateCommonConversions(){Object.keys(this.units).forEach(e=>{Object.keys(this.units).forEach(t=>{const n=document.querySelector(`[data-from="${e}"][data-to="${t}"]`);if(n){const s=this.units[e].toBase(1),o=this.units[t].fromBase(s),r=this.formatNumber(o),a=n.querySelector(".conversion-value");a&&(a.textContent=`1 ${this.units[e].abbreviation} = ${r} ${this.units[t].abbreviation}`)}})})}formatNumber(e){if(Math.abs(e)>=1e9||Math.abs(e)<1e-9&&e!==0)return e.toExponential(6);let t;const n=Math.abs(e);return n>=100?t=4:n>=10?t=5:n>=1?t=6:t=7,Number(e.toPrecision(t)).toString()}addStyles(){const e=document.createElement("style");e.textContent=`
      .converter-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .converter-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .input-group {
        display: flex;
        gap: 1rem;
      }

      .number-input {
        flex: 1;
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 1rem;
        min-width: 0;
      }

      .unit-select {
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 1rem;
        min-width: 200px;
      }

      .swap-button {
        align-self: center;
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        cursor: pointer;
        transition: all 0.2s;
      }

      .swap-button:hover {
        border-color: var(--primary);
        color: var(--primary);
      }

      .common-conversions {
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .common-conversions h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .conversion-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .conversion-item {
        padding: 1rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .conversion-item:hover {
        border-color: var(--primary);
      }

      .conversion-value {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      .conversion-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
      }

      @media (max-width: 600px) {
        .input-group {
          flex-direction: column;
        }

        .unit-select {
          width: 100%;
          min-width: 0;
        }
      }
    `,document.head.appendChild(e)}}class wy{constructor(){M(this,"id","mass-converter");M(this,"name","Weight & Mass Converter");M(this,"description","Convert between different units of weight and mass");M(this,"seoMetadata",{title:"Free Online Weight and Mass Unit Converter Tool",description:"Convert between different units of weight and mass including kilograms, pounds, ounces, stones, and more. Simple and accurate conversions.",keywords:["weight converter","mass converter","kg to lbs","pounds to kilos","ounce converter","stone calculator","unit converter"]});M(this,"units",{kilogram:{name:"Kilograms",abbreviation:"kg",toBase:e=>e,fromBase:e=>e},gram:{name:"Grams",abbreviation:"g",toBase:e=>e/1e3,fromBase:e=>e*1e3},milligram:{name:"Milligrams",abbreviation:"mg",toBase:e=>e/1e6,fromBase:e=>e*1e6},metricTon:{name:"Metric Tons",abbreviation:"t",toBase:e=>e*1e3,fromBase:e=>e/1e3},pound:{name:"Pounds",abbreviation:"lb",toBase:e=>e*.45359237,fromBase:e=>e/.45359237},ounce:{name:"Ounces",abbreviation:"oz",toBase:e=>e*.02834952,fromBase:e=>e/.02834952},stone:{name:"Stones",abbreviation:"st",toBase:e=>e*6.35029318,fromBase:e=>e/6.35029318},imperialTon:{name:"Imperial Tons",abbreviation:"imp t",toBase:e=>e*1016.047,fromBase:e=>e/1016.047},usTon:{name:"US Tons",abbreviation:"US t",toBase:e=>e*907.18474,fromBase:e=>e/907.18474},carat:{name:"Carats",abbreviation:"ct",toBase:e=>e*2e-4,fromBase:e=>e/2e-4}});M(this,"lastInput","");M(this,"lastFromUnit","kilogram");M(this,"lastToUnit","pound")}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="converter-container">
        <div class="converter-section">
          <div class="input-group">
            <input 
              type="number" 
              id="fromValue" 
              class="number-input" 
              value="1" 
              step="any"
              placeholder="Enter value..."
            >
            <select id="fromUnit" class="unit-select">
              ${Object.entries(this.units).map(([t,n])=>`<option value="${t}">${n.name} (${n.abbreviation})</option>`).join("")}
            </select>
          </div>

          <button id="swapUnits" class="swap-button" title="Swap units">
            ⇅
          </button>

          <div class="input-group">
            <input 
              type="number" 
              id="toValue" 
              class="number-input" 
              readonly 
              placeholder="Result..."
            >
            <select id="toUnit" class="unit-select">
              ${Object.entries(this.units).map(([t,n])=>`<option value="${t}" ${t==="pound"?"selected":""}>
                  ${n.name} (${n.abbreviation})
                </option>`).join("")}
            </select>
          </div>
        </div>

        <div class="common-conversions">
          <h3>Common Conversions</h3>
          <div class="conversion-grid">
            <div class="conversion-item" data-from="kilogram" data-to="pound">
              <div class="conversion-value" id="kgToLb">1 kg = 2.20462 lb</div>
              <div class="conversion-label">Kilograms to Pounds</div>
            </div>
            <div class="conversion-item" data-from="pound" data-to="kilogram">
              <div class="conversion-value" id="lbToKg">1 lb = 0.453592 kg</div>
              <div class="conversion-label">Pounds to Kilograms</div>
            </div>
            <div class="conversion-item" data-from="ounce" data-to="gram">
              <div class="conversion-value" id="ozToG">1 oz = 28.3495 g</div>
              <div class="conversion-label">Ounces to Grams</div>
            </div>
            <div class="conversion-item" data-from="stone" data-to="kilogram">
              <div class="conversion-value" id="stToKg">1 st = 6.35029 kg</div>
              <div class="conversion-label">Stones to Kilograms</div>
            </div>
          </div>
        </div>

        <div class="info-section">
          <h3>Unit Information</h3>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-title">Metric System</div>
              <p>The metric system uses kilograms (kg) as its base unit for mass, with other units being derived through factors of 10 (e.g., grams, milligrams).</p>
            </div>
            <div class="info-item">
              <div class="info-title">Imperial/US System</div>
              <p>The imperial system commonly uses pounds (lb) and ounces (oz), with 16 ounces in a pound. A stone (st) equals 14 pounds and is commonly used in the UK.</p>
            </div>
            <div class="info-item">
              <div class="info-title">Weight vs Mass</div>
              <p>While often used interchangeably, mass is a measure of matter in an object, while weight is the force of gravity on that mass. These conversions assume standard gravity.</p>
            </div>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles(),this.convert(),this.updateCommonConversions())}setupEventListeners(){const e=document.getElementById("fromValue"),t=document.getElementById("fromUnit"),n=document.getElementById("toUnit"),s=document.getElementById("swapUnits");!e||!t||!n||!s||(t.value=this.lastFromUnit,n.value=this.lastToUnit,e.addEventListener("input",()=>{this.lastInput=e.value,this.convert()}),t.addEventListener("change",()=>{this.lastFromUnit=t.value,this.convert()}),n.addEventListener("change",()=>{this.lastToUnit=n.value,this.convert()}),s.addEventListener("click",()=>{const o=t.value;t.value=n.value,n.value=o,this.lastFromUnit=t.value,this.lastToUnit=n.value,this.convert()}),document.querySelectorAll(".conversion-item").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.from,a=o.dataset.to;r&&a&&(t.value=r,n.value=a,this.lastFromUnit=r,this.lastToUnit=a,this.convert())})}))}convert(){const e=document.getElementById("fromValue"),t=document.getElementById("fromUnit"),n=document.getElementById("toUnit"),s=document.getElementById("toValue");if(!e||!t||!n||!s)return;const o=parseFloat(e.value);if(isNaN(o)){s.value="";return}const r=this.units[t.value],a=this.units[n.value],l=r.toBase(o),c=a.fromBase(l);s.value=this.formatNumber(c)}updateCommonConversions(){Object.keys(this.units).forEach(e=>{Object.keys(this.units).forEach(t=>{const n=document.querySelector(`[data-from="${e}"][data-to="${t}"]`);if(n){const s=this.units[e].toBase(1),o=this.units[t].fromBase(s),r=this.formatNumber(o),a=n.querySelector(".conversion-value");a&&(a.textContent=`1 ${this.units[e].abbreviation} = ${r} ${this.units[t].abbreviation}`)}})})}formatNumber(e){if(Math.abs(e)>=1e9||Math.abs(e)<1e-9&&e!==0)return e.toExponential(6);let t;const n=Math.abs(e);return n>=100?t=4:n>=10?t=5:n>=1?t=6:t=7,Number(e.toPrecision(t)).toString()}addStyles(){const e=document.createElement("style");e.textContent=`
      .converter-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .converter-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .input-group {
        display: flex;
        gap: 1rem;
      }

      .number-input {
        flex: 1;
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 1rem;
        min-width: 0;
      }

      .unit-select {
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 1rem;
        min-width: 200px;
      }

      .swap-button {
        align-self: center;
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        cursor: pointer;
        transition: all 0.2s;
      }

      .swap-button:hover {
        border-color: var(--primary);
        color: var(--primary);
      }

      .common-conversions {
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .common-conversions h3,
      .info-section h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .conversion-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .conversion-item {
        padding: 1rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
      }
.conversion-item:hover {
        border-color: var(--primary);
      }

      .conversion-value {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      .conversion-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
      }

      .info-section {
        background: var(--background);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .info-item {
        padding: 1rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
      }

      .info-title {
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: var(--primary);
      }

      .info-item p {
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.5;
        color: var(--text-secondary);
      }

      @media (max-width: 600px) {
        .input-group {
          flex-direction: column;
        }

        .unit-select {
          width: 100%;
          min-width: 0;
        }

        .info-grid {
          grid-template-columns: 1fr;
        }
      }
    `,document.head.appendChild(e)}}const Gn=[new uh,new dh,new Cg,new Ag,new Fg,new Gg,new uy,new dy,new hy,new fy,new py,new my,new gy,new yy,new vy,new xy,new wy];function tc(i){const e=Gn.find(t=>t.id===i);return e&&by.injectSEOMetadata(e),e}function ky(){const i=document.querySelector(".tools-nav"),e=document.getElementById("toolSearch"),t=document.getElementById("toolContent");function n(l){i&&(i.innerHTML="",l.forEach(c=>{const u=document.createElement("div");u.className="tool-item",u.dataset.toolId=c.id,u.innerHTML=`<div class="tool-name">${c.name}</div>`,u.addEventListener("click",d=>{d.preventDefault(),s(c.id)}),i.appendChild(u)}))}function s(l){var u;const c=tc(l);c&&t&&(window.location.hash=l,document.querySelectorAll(".tool-item").forEach(d=>d.classList.remove("active")),(u=document.querySelector(`[data-tool-id="${l}"]`))==null||u.classList.add("active"),t.innerHTML="",c.render())}e.addEventListener("input",l=>{var h;const c=l.target.value.toLowerCase(),u=Gn.filter(f=>f.name.toLowerCase().includes(c)||f.description.toLowerCase().includes(c));n(u);const d=window.location.hash.slice(1);d&&((h=document.querySelector(`[data-tool-id="${d}"]`))==null||h.classList.add("active"))}),window.addEventListener("hashchange",()=>{const l=window.location.hash.slice(1);l?o(l):r()});function o(l){const c=tc(l);c?s(c.id):r()}function r(){Gn.length>0&&s(Gn[0].id)}n(Gn);const a=window.location.hash.slice(1);a?o(a):r()}document.addEventListener("DOMContentLoaded",ky);
