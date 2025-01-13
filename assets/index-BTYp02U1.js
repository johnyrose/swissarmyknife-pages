var kh=Object.defineProperty;var Eh=(i,e,t)=>e in i?kh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var L=(i,e,t)=>Eh(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Co(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Wt=Co();function ld(i){Wt=i}const ti={exec:()=>null};function ne(i,e=""){let t=typeof i=="string"?i:i.source;const n={replace:(s,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(Ne.caret,"$1"),t=t.replace(s,o),n},getRegex:()=>new RegExp(t,e)};return n}const Ne={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},Sh=/^(?:[ \t]*(?:\n|$))+/,Th=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,_h=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,xi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ch=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,cd=/(?:[*+-]|\d{1,9}[.)])/,dd=ne(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,cd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Io=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ih=/^[^\n]+/,Mo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Mh=ne(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Mo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ah=ne(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,cd).getRegex(),Is="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ao=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Lh=ne("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ao).replace("tag",Is).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ud=ne(Io).replace("hr",xi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Is).getRegex(),Nh=ne(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ud).getRegex(),Lo={blockquote:Nh,code:Th,def:Mh,fences:_h,heading:Ch,hr:xi,html:Lh,lheading:dd,list:Ah,newline:Sh,paragraph:ud,table:ti,text:Ih},Ma=ne("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",xi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Is).getRegex(),Dh={...Lo,table:Ma,paragraph:ne(Io).replace("hr",xi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ma).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Is).getRegex()},Oh={...Lo,html:ne(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ao).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ti,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ne(Io).replace("hr",xi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",dd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Bh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Rh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,hd=/^( {2,}|\\)\n(?!\s*$)/,Ph=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ms=/[\p{P}\p{S}]/u,No=/[\s\p{P}\p{S}]/u,fd=/[^\s\p{P}\p{S}]/u,Fh=ne(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,No).getRegex(),$h=/(?!~)[\p{P}\p{S}]/u,zh=/(?!~)[\s\p{P}\p{S}]/u,Uh=/(?:[^\s\p{P}\p{S}]|~)/u,jh=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Hh=ne(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,"u").replace(/punct/g,Ms).getRegex(),pd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",qh=ne(pd,"gu").replace(/notPunctSpace/g,fd).replace(/punctSpace/g,No).replace(/punct/g,Ms).getRegex(),Vh=ne(pd,"gu").replace(/notPunctSpace/g,Uh).replace(/punctSpace/g,zh).replace(/punct/g,$h).getRegex(),Kh=ne("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,fd).replace(/punctSpace/g,No).replace(/punct/g,Ms).getRegex(),Wh=ne(/\\(punct)/,"gu").replace(/punct/g,Ms).getRegex(),Gh=ne(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Yh=ne(Ao).replace("(?:-->|$)","-->").getRegex(),Jh=ne("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Yh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ds=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Xh=ne(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ds).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),md=ne(/^!?\[(label)\]\[(ref)\]/).replace("label",ds).replace("ref",Mo).getRegex(),gd=ne(/^!?\[(ref)\](?:\[\])?/).replace("ref",Mo).getRegex(),Qh=ne("reflink|nolink(?!\\()","g").replace("reflink",md).replace("nolink",gd).getRegex(),Do={_backpedal:ti,anyPunctuation:Wh,autolink:Gh,blockSkip:jh,br:hd,code:Rh,del:ti,emStrongLDelim:Hh,emStrongRDelimAst:qh,emStrongRDelimUnd:Kh,escape:Bh,link:Xh,nolink:gd,punctuation:Fh,reflink:md,reflinkSearch:Qh,tag:Jh,text:Ph,url:ti},Zh={...Do,link:ne(/^!?\[(label)\]\((.*?)\)/).replace("label",ds).getRegex(),reflink:ne(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ds).getRegex()},io={...Do,emStrongRDelimAst:Vh,url:ne(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ef={...io,br:ne(hd).replace("{2,}","*").getRegex(),text:ne(io.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Di={normal:Lo,gfm:Dh,pedantic:Oh},Bn={normal:Do,gfm:io,breaks:ef,pedantic:Zh},tf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Aa=i=>tf[i];function at(i,e){if(e){if(Ne.escapeTest.test(i))return i.replace(Ne.escapeReplace,Aa)}else if(Ne.escapeTestNoEncode.test(i))return i.replace(Ne.escapeReplaceNoEncode,Aa);return i}function La(i){try{i=encodeURI(i).replace(Ne.percentDecode,"%")}catch{return null}return i}function Na(i,e){var r;const t=i.replace(Ne.findPipe,(o,a,l)=>{let c=!1,d=a;for(;--d>=0&&l[d]==="\\";)c=!c;return c?"|":" |"}),n=t.split(Ne.splitPipe);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!((r=n.at(-1))!=null&&r.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(Ne.slashPipe,"|");return n}function Rn(i,e,t){const n=i.length;if(n===0)return"";let s=0;for(;s<n&&(i.charAt(n-s-1)===e&&!t);)s++;return i.slice(0,n-s)}function nf(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return-1}function Da(i,e,t,n,s){const r=e.href,o=e.title||null,a=i[1].replace(s.other.outputLinkReplace,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:r,title:o,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:r,title:o,text:a}}function sf(i,e,t){const n=i.match(t.other.indentCodeCompensation);if(n===null)return e;const s=n[1];return e.split(`
`).map(r=>{const o=r.match(t.other.beginningSpace);if(o===null)return r;const[a]=o;return a.length>=s.length?r.slice(s.length):r}).join(`
`)}class us{constructor(e){L(this,"options");L(this,"rules");L(this,"lexer");this.options=e||Wt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Rn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=sf(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const s=Rn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Rn(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Rn(t[0],`
`).split(`
`),s="",r="";const o=[];for(;n.length>0;){let a=!1;const l=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);const d=l.join(`
`),u=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${d}`:d,r=r?`${r}
${u}`:u;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=h,n.length===0)break;const f=o.at(-1);if((f==null?void 0:f.type)==="code")break;if((f==null?void 0:f.type)==="blockquote"){const b=f,g=b.raw+`
`+n.join(`
`),w=this.blockquote(g);o[o.length-1]=w,s=s.substring(0,s.length-b.raw.length)+w.raw,r=r.substring(0,r.length-b.text.length)+w.text;break}else if((f==null?void 0:f.type)==="list"){const b=f,g=b.raw+`
`+n.join(`
`),w=this.list(g);o[o.length-1]=w,s=s.substring(0,s.length-f.raw.length)+w.raw,r=r.substring(0,r.length-b.raw.length)+w.raw,n=g.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const o=this.rules.other.listItemRegex(n);let a=!1;for(;e;){let c=!1,d="",u="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;d=t[0],e=e.substring(d.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,E=>" ".repeat(3*E.length)),f=e.split(`
`,1)[0],b=!h.trim(),g=0;if(this.options.pedantic?(g=2,u=h.trimStart()):b?g=t[1].length+1:(g=t[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=h.slice(g),g+=t[1].length),b&&this.rules.other.blankLine.test(f)&&(d+=f+`
`,e=e.substring(f.length+1),c=!0),!c){const E=this.rules.other.nextBulletRegex(g),x=this.rules.other.hrRegex(g),m=this.rules.other.fencesBeginRegex(g),_=this.rules.other.headingBeginRegex(g),A=this.rules.other.htmlBeginRegex(g);for(;e;){const N=e.split(`
`,1)[0];let M;if(f=N,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),M=f):M=f.replace(this.rules.other.tabCharGlobal,"    "),m.test(f)||_.test(f)||A.test(f)||E.test(f)||x.test(f))break;if(M.search(this.rules.other.nonSpaceChar)>=g||!f.trim())u+=`
`+M.slice(g);else{if(b||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||m.test(h)||_.test(h)||x.test(h))break;u+=`
`+f}!b&&!f.trim()&&(b=!0),d+=N+`
`,e=e.substring(N.length+1),h=M.slice(g)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(a=!0));let w=null,p;this.options.gfm&&(w=this.rules.other.listIsTask.exec(u),w&&(p=w[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:d,task:!!w,checked:p,loose:!1,text:u,tokens:[]}),r.raw+=d}const l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){const d=r.items[c].tokens.filter(h=>h.type==="space"),u=d.length>0&&d.some(h=>this.rules.other.anyLine.test(h.raw));r.loose=u}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){var a;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=Na(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(a=t[3])!=null&&a.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const l of s)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(const l of r)o.rows.push(Na(l,o.header.length).map((c,d)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[d]})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const o=Rn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=nf(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Da(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Da(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...s[0]].length-1;let a,l,c=o,d=0;const u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+o);(s=u.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){d+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+d);const h=[...s[0]][0].length,f=e.slice(0,o+s.index+h+l);if(Math.min(o,l)%2){const g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}const b=f.slice(2,-2);return{type:"strong",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}}class je{constructor(e){L(this,"tokens");L(this,"options");L(this,"state");L(this,"tokenizer");L(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Wt,this.options.tokenizer=this.options.tokenizer||new us,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:Ne,block:Di.normal,inline:Bn.normal};this.options.pedantic?(t.block=Di.pedantic,t.inline=Bn.pedantic):this.options.gfm&&(t.block=Di.gfm,this.options.breaks?t.inline=Bn.breaks:t.inline=Bn.gfm),this.tokenizer.rules=t}static get rules(){return{block:Di,inline:Bn}}static lex(e,t){return new je(t).lex(e)}static lexInline(e,t){return new je(t).inlineTokens(e)}lex(e){e=e.replace(Ne.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){var s,r,o;for(this.options.pedantic&&(e=e.replace(Ne.tabCharGlobal,"    ").replace(Ne.spaceLine,""));e;){let a;if((r=(s=this.options.extensions)==null?void 0:s.block)!=null&&r.some(c=>(a=c.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const c=t.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let l=e;if((o=this.options.extensions)!=null&&o.startBlock){let c=1/0;const d=e.slice(1);let u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},d),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){const c=t.at(-1);n&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a),n=l.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var a,l,c;let n=e,s=null;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,s.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r=!1,o="";for(;e;){r||(o=""),r=!1;let d;if((l=(a=this.options.extensions)==null?void 0:a.inline)!=null&&l.some(h=>(d=h.call({lexer:this},e,t))?(e=e.substring(d.raw.length),t.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);const h=t.at(-1);d.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=d.raw,h.text+=d.text):t.push(d);continue}if(d=this.tokenizer.emStrong(e,n,o)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.del(e)){e=e.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),t.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),t.push(d);continue}let u=e;if((c=this.options.extensions)!=null&&c.startInline){let h=1/0;const f=e.slice(1);let b;this.options.extensions.startInline.forEach(g=>{b=g.call({lexer:this},f),typeof b=="number"&&b>=0&&(h=Math.min(h,b))}),h<1/0&&h>=0&&(u=e.substring(0,h+1))}if(d=this.tokenizer.inlineText(u)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(o=d.raw.slice(-1)),r=!0;const h=t.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=d.raw,h.text+=d.text):t.push(d);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}}class hs{constructor(e){L(this,"options");L(this,"parser");this.options=e||Wt}space(e){return""}code({text:e,lang:t,escaped:n}){var o;const s=(o=(t||"").match(Ne.notSpaceStart))==null?void 0:o[0],r=e.replace(Ne.endingNewline,"")+`
`;return s?'<pre><code class="language-'+at(s)+'">'+(n?r:at(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:at(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let s="";for(let a=0;a<e.items.length;a++){const l=e.items[a];s+=this.listitem(l)}const r=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(e){var n;let t="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+at(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){const o=e.rows[r];n="";for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${at(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=La(e);if(r===null)return s;e=r;let o='<a href="'+e+'"';return t&&(o+=' title="'+at(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n}){const s=La(e);if(s===null)return at(n);e=s;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${at(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:at(e.text)}}class Oo{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class He{constructor(e){L(this,"options");L(this,"renderer");L(this,"textRenderer");this.options=e||Wt,this.options.renderer=this.options.renderer||new hs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Oo}static parse(e,t){return new He(t).parse(e)}static parseInline(e,t){return new He(t).parseInline(e)}parse(e,t=!0){var s,r;let n="";for(let o=0;o<e.length;o++){const a=e[o];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[a.type]){const c=a,d=this.options.extensions.renderers[c.type].call({parser:this},c);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){n+=d||"";continue}}const l=a;switch(l.type){case"space":{n+=this.renderer.space(l);continue}case"hr":{n+=this.renderer.hr(l);continue}case"heading":{n+=this.renderer.heading(l);continue}case"code":{n+=this.renderer.code(l);continue}case"table":{n+=this.renderer.table(l);continue}case"blockquote":{n+=this.renderer.blockquote(l);continue}case"list":{n+=this.renderer.list(l);continue}case"html":{n+=this.renderer.html(l);continue}case"paragraph":{n+=this.renderer.paragraph(l);continue}case"text":{let c=l,d=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],d+=`
`+this.renderer.text(c);t?n+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):n+=d;continue}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,t=this.renderer){var s,r;let n="";for(let o=0;o<e.length;o++){const a=e[o];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){n+=c||"";continue}}const l=a;switch(l.type){case"escape":{n+=t.text(l);break}case"html":{n+=t.html(l);break}case"link":{n+=t.link(l);break}case"image":{n+=t.image(l);break}case"strong":{n+=t.strong(l);break}case"em":{n+=t.em(l);break}case"codespan":{n+=t.codespan(l);break}case"br":{n+=t.br(l);break}case"del":{n+=t.del(l);break}case"text":{n+=t.text(l);break}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}}class ni{constructor(e){L(this,"options");L(this,"block");this.options=e||Wt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?je.lex:je.lexInline}provideParser(){return this.block?He.parse:He.parseInline}}L(ni,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class rf{constructor(...e){L(this,"defaults",Co());L(this,"options",this.setOptions);L(this,"parse",this.parseMarkdown(!0));L(this,"parseInline",this.parseMarkdown(!1));L(this,"Parser",He);L(this,"Renderer",hs);L(this,"TextRenderer",Oo);L(this,"Lexer",je);L(this,"Tokenizer",us);L(this,"Hooks",ni);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=o;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=o;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=t.renderers[r.name];o?t.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new hs(this.defaults);for(const o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const a=o,l=n.renderer[a],c=r[a];r[a]=(...d)=>{let u=l.apply(r,d);return u===!1&&(u=c.apply(r,d)),u||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new us(this.defaults);for(const o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=n.tokenizer[a],c=r[a];r[a]=(...d)=>{let u=l.apply(r,d);return u===!1&&(u=c.apply(r,d)),u}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new ni;for(const o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const a=o,l=n.hooks[a],c=r[a];ni.passThroughHooks.has(o)?r[a]=d=>{if(this.defaults.async)return Promise.resolve(l.call(r,d)).then(h=>c.call(r,h));const u=l.call(r,d);return c.call(r,u)}:r[a]=(...d)=>{let u=l.apply(r,d);return u===!1&&(u=c.apply(r,d)),u}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),r&&(l=l.concat(r.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return je.lex(e,t??this.defaults)}parser(e,t){return He.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{const r={...s},o={...this.defaults,...r},a=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const l=o.hooks?o.hooks.provideLexer():e?je.lex:je.lexInline,c=o.hooks?o.hooks.provideParser():e?He.parse:He.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(d=>l(d,o)).then(d=>o.hooks?o.hooks.processAllTokens(d):d).then(d=>o.walkTokens?Promise.all(this.walkTokens(d,o.walkTokens)).then(()=>d):d).then(d=>c(d,o)).then(d=>o.hooks?o.hooks.postprocess(d):d).catch(a);try{o.hooks&&(n=o.hooks.preprocess(n));let d=l(n,o);o.hooks&&(d=o.hooks.processAllTokens(d)),o.walkTokens&&this.walkTokens(d,o.walkTokens);let u=c(d,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(d){return a(d)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+at(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}}const qt=new rf;function Z(i,e){return qt.parse(i,e)}Z.options=Z.setOptions=function(i){return qt.setOptions(i),Z.defaults=qt.defaults,ld(Z.defaults),Z};Z.getDefaults=Co;Z.defaults=Wt;Z.use=function(...i){return qt.use(...i),Z.defaults=qt.defaults,ld(Z.defaults),Z};Z.walkTokens=function(i,e){return qt.walkTokens(i,e)};Z.parseInline=qt.parseInline;Z.Parser=He;Z.parser=He.parse;Z.Renderer=hs;Z.TextRenderer=Oo;Z.Lexer=je;Z.lexer=je.lex;Z.Tokenizer=us;Z.Hooks=ni;Z.parse=Z;Z.options;Z.setOptions;Z.use;Z.walkTokens;Z.parseInline;He.parse;je.lex;/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */const{entries:bd,setPrototypeOf:Oa,isFrozen:of,getPrototypeOf:af,getOwnPropertyDescriptor:lf}=Object;let{freeze:De,seal:We,create:yd}=Object,{apply:so,construct:ro}=typeof Reflect<"u"&&Reflect;De||(De=function(e){return e});We||(We=function(e){return e});so||(so=function(e,t,n){return e.apply(t,n)});ro||(ro=function(e,t){return new e(...t)});const Oi=ze(Array.prototype.forEach),Ba=ze(Array.prototype.pop),Pn=ze(Array.prototype.push),is=ze(String.prototype.toLowerCase),tr=ze(String.prototype.toString),Ra=ze(String.prototype.match),Fn=ze(String.prototype.replace),cf=ze(String.prototype.indexOf),df=ze(String.prototype.trim),Xe=ze(Object.prototype.hasOwnProperty),Ae=ze(RegExp.prototype.test),$n=uf(TypeError);function ze(i){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return so(i,e,n)}}function uf(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ro(i,t)}}function W(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:is;Oa&&Oa(i,null);let n=e.length;for(;n--;){let s=e[n];if(typeof s=="string"){const r=t(s);r!==s&&(of(e)||(e[n]=r),s=r)}i[s]=!0}return i}function hf(i){for(let e=0;e<i.length;e++)Xe(i,e)||(i[e]=null);return i}function Dt(i){const e=yd(null);for(const[t,n]of bd(i))Xe(i,t)&&(Array.isArray(n)?e[t]=hf(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=Dt(n):e[t]=n);return e}function zn(i,e){for(;i!==null;){const n=lf(i,e);if(n){if(n.get)return ze(n.get);if(typeof n.value=="function")return ze(n.value)}i=af(i)}function t(){return null}return t}const Pa=De(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),nr=De(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ir=De(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ff=De(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),sr=De(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),pf=De(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Fa=De(["#text"]),$a=De(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),rr=De(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),za=De(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Bi=De(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),mf=We(/\{\{[\w\W]*|[\w\W]*\}\}/gm),gf=We(/<%[\w\W]*|[\w\W]*%>/gm),bf=We(/\$\{[\w\W]*}/gm),yf=We(/^data-[\-\w.\u00B7-\uFFFF]+$/),vf=We(/^aria-[\-\w]+$/),vd=We(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),wf=We(/^(?:\w+script|data):/i),xf=We(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wd=We(/^html$/i),kf=We(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ua=Object.freeze({__proto__:null,ARIA_ATTR:vf,ATTR_WHITESPACE:xf,CUSTOM_ELEMENT:kf,DATA_ATTR:yf,DOCTYPE_NAME:wd,ERB_EXPR:gf,IS_ALLOWED_URI:vd,IS_SCRIPT_OR_DATA:wf,MUSTACHE_EXPR:mf,TMPLIT_EXPR:bf});const Un={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ef=function(){return typeof window>"u"?null:window},Sf=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(n=t.getAttribute(s));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},ja=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function xd(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ef();const e=q=>xd(q);if(e.version="3.2.3",e.removed=[],!i||!i.document||i.document.nodeType!==Un.document)return e.isSupported=!1,e;let{document:t}=i;const n=t,s=n.currentScript,{DocumentFragment:r,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:c,NamedNodeMap:d=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:u,DOMParser:h,trustedTypes:f}=i,b=l.prototype,g=zn(b,"cloneNode"),w=zn(b,"remove"),p=zn(b,"nextSibling"),E=zn(b,"childNodes"),x=zn(b,"parentNode");if(typeof o=="function"){const q=t.createElement("template");q.content&&q.content.ownerDocument&&(t=q.content.ownerDocument)}let m,_="";const{implementation:A,createNodeIterator:N,createDocumentFragment:M,getElementsByTagName:k}=t,{importNode:F}=n;let R=ja();e.isSupported=typeof bd=="function"&&typeof x=="function"&&A&&A.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:y,ERB_EXPR:T,TMPLIT_EXPR:I,DATA_ATTR:C,ARIA_ATTR:U,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:$,CUSTOM_ELEMENT:j}=Ua;let{IS_ALLOWED_URI:X}=Ua,K=null;const me=W({},[...Pa,...nr,...ir,...sr,...Fa]);let ee=null;const Ie=W({},[...$a,...rr,...za,...Bi]);let Y=Object.seal(yd(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),be=null,S=null,v=!0,P=!0,O=!1,Q=!0,se=!1,ce=!0,he=!1,ye=!1,nt=!1,oe=!1,Oe=!1,Zt=!1,Ln=!0,en=!1;const Ci="user-content-";let Ys=!0,Nn=!1,tn={},nn=null;const fa=W({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let pa=null;const ma=W({},["audio","video","img","source","image","track"]);let Js=null;const ga=W({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ii="http://www.w3.org/1998/Math/MathML",Mi="http://www.w3.org/2000/svg",ft="http://www.w3.org/1999/xhtml";let sn=ft,Xs=!1,Qs=null;const mh=W({},[Ii,Mi,ft],tr);let Ai=W({},["mi","mo","mn","ms","mtext"]),Li=W({},["annotation-xml"]);const gh=W({},["title","style","font","a","script"]);let Dn=null;const bh=["application/xhtml+xml","text/html"],yh="text/html";let ve=null,rn=null;const vh=t.createElement("form"),ba=function(D){return D instanceof RegExp||D instanceof Function},Zs=function(){let D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(rn&&rn===D)){if((!D||typeof D!="object")&&(D={}),D=Dt(D),Dn=bh.indexOf(D.PARSER_MEDIA_TYPE)===-1?yh:D.PARSER_MEDIA_TYPE,ve=Dn==="application/xhtml+xml"?tr:is,K=Xe(D,"ALLOWED_TAGS")?W({},D.ALLOWED_TAGS,ve):me,ee=Xe(D,"ALLOWED_ATTR")?W({},D.ALLOWED_ATTR,ve):Ie,Qs=Xe(D,"ALLOWED_NAMESPACES")?W({},D.ALLOWED_NAMESPACES,tr):mh,Js=Xe(D,"ADD_URI_SAFE_ATTR")?W(Dt(ga),D.ADD_URI_SAFE_ATTR,ve):ga,pa=Xe(D,"ADD_DATA_URI_TAGS")?W(Dt(ma),D.ADD_DATA_URI_TAGS,ve):ma,nn=Xe(D,"FORBID_CONTENTS")?W({},D.FORBID_CONTENTS,ve):fa,be=Xe(D,"FORBID_TAGS")?W({},D.FORBID_TAGS,ve):{},S=Xe(D,"FORBID_ATTR")?W({},D.FORBID_ATTR,ve):{},tn=Xe(D,"USE_PROFILES")?D.USE_PROFILES:!1,v=D.ALLOW_ARIA_ATTR!==!1,P=D.ALLOW_DATA_ATTR!==!1,O=D.ALLOW_UNKNOWN_PROTOCOLS||!1,Q=D.ALLOW_SELF_CLOSE_IN_ATTR!==!1,se=D.SAFE_FOR_TEMPLATES||!1,ce=D.SAFE_FOR_XML!==!1,he=D.WHOLE_DOCUMENT||!1,oe=D.RETURN_DOM||!1,Oe=D.RETURN_DOM_FRAGMENT||!1,Zt=D.RETURN_TRUSTED_TYPE||!1,nt=D.FORCE_BODY||!1,Ln=D.SANITIZE_DOM!==!1,en=D.SANITIZE_NAMED_PROPS||!1,Ys=D.KEEP_CONTENT!==!1,Nn=D.IN_PLACE||!1,X=D.ALLOWED_URI_REGEXP||vd,sn=D.NAMESPACE||ft,Ai=D.MATHML_TEXT_INTEGRATION_POINTS||Ai,Li=D.HTML_INTEGRATION_POINTS||Li,Y=D.CUSTOM_ELEMENT_HANDLING||{},D.CUSTOM_ELEMENT_HANDLING&&ba(D.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Y.tagNameCheck=D.CUSTOM_ELEMENT_HANDLING.tagNameCheck),D.CUSTOM_ELEMENT_HANDLING&&ba(D.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Y.attributeNameCheck=D.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),D.CUSTOM_ELEMENT_HANDLING&&typeof D.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Y.allowCustomizedBuiltInElements=D.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),se&&(P=!1),Oe&&(oe=!0),tn&&(K=W({},Fa),ee=[],tn.html===!0&&(W(K,Pa),W(ee,$a)),tn.svg===!0&&(W(K,nr),W(ee,rr),W(ee,Bi)),tn.svgFilters===!0&&(W(K,ir),W(ee,rr),W(ee,Bi)),tn.mathMl===!0&&(W(K,sr),W(ee,za),W(ee,Bi))),D.ADD_TAGS&&(K===me&&(K=Dt(K)),W(K,D.ADD_TAGS,ve)),D.ADD_ATTR&&(ee===Ie&&(ee=Dt(ee)),W(ee,D.ADD_ATTR,ve)),D.ADD_URI_SAFE_ATTR&&W(Js,D.ADD_URI_SAFE_ATTR,ve),D.FORBID_CONTENTS&&(nn===fa&&(nn=Dt(nn)),W(nn,D.FORBID_CONTENTS,ve)),Ys&&(K["#text"]=!0),he&&W(K,["html","head","body"]),K.table&&(W(K,["tbody"]),delete be.tbody),D.TRUSTED_TYPES_POLICY){if(typeof D.TRUSTED_TYPES_POLICY.createHTML!="function")throw $n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof D.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw $n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=D.TRUSTED_TYPES_POLICY,_=m.createHTML("")}else m===void 0&&(m=Sf(f,s)),m!==null&&typeof _=="string"&&(_=m.createHTML(""));De&&De(D),rn=D}},ya=W({},[...nr,...ir,...ff]),va=W({},[...sr,...pf]),wh=function(D){let z=x(D);(!z||!z.tagName)&&(z={namespaceURI:sn,tagName:"template"});const H=is(D.tagName),ae=is(z.tagName);return Qs[D.namespaceURI]?D.namespaceURI===Mi?z.namespaceURI===ft?H==="svg":z.namespaceURI===Ii?H==="svg"&&(ae==="annotation-xml"||Ai[ae]):!!ya[H]:D.namespaceURI===Ii?z.namespaceURI===ft?H==="math":z.namespaceURI===Mi?H==="math"&&Li[ae]:!!va[H]:D.namespaceURI===ft?z.namespaceURI===Mi&&!Li[ae]||z.namespaceURI===Ii&&!Ai[ae]?!1:!va[H]&&(gh[H]||!ya[H]):!!(Dn==="application/xhtml+xml"&&Qs[D.namespaceURI]):!1},it=function(D){Pn(e.removed,{element:D});try{x(D).removeChild(D)}catch{w(D)}},Ni=function(D,z){try{Pn(e.removed,{attribute:z.getAttributeNode(D),from:z})}catch{Pn(e.removed,{attribute:null,from:z})}if(z.removeAttribute(D),D==="is")if(oe||Oe)try{it(z)}catch{}else try{z.setAttribute(D,"")}catch{}},wa=function(D){let z=null,H=null;if(nt)D="<remove></remove>"+D;else{const xe=Ra(D,/^[\r\n\t ]+/);H=xe&&xe[0]}Dn==="application/xhtml+xml"&&sn===ft&&(D='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+D+"</body></html>");const ae=m?m.createHTML(D):D;if(sn===ft)try{z=new h().parseFromString(ae,Dn)}catch{}if(!z||!z.documentElement){z=A.createDocument(sn,"template",null);try{z.documentElement.innerHTML=Xs?_:ae}catch{}}const Ee=z.body||z.documentElement;return D&&H&&Ee.insertBefore(t.createTextNode(H),Ee.childNodes[0]||null),sn===ft?k.call(z,he?"html":"body")[0]:he?z.documentElement:Ee},xa=function(D){return N.call(D.ownerDocument||D,D,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},er=function(D){return D instanceof u&&(typeof D.nodeName!="string"||typeof D.textContent!="string"||typeof D.removeChild!="function"||!(D.attributes instanceof d)||typeof D.removeAttribute!="function"||typeof D.setAttribute!="function"||typeof D.namespaceURI!="string"||typeof D.insertBefore!="function"||typeof D.hasChildNodes!="function")},ka=function(D){return typeof a=="function"&&D instanceof a};function pt(q,D,z){Oi(q,H=>{H.call(e,D,z,rn)})}const Ea=function(D){let z=null;if(pt(R.beforeSanitizeElements,D,null),er(D))return it(D),!0;const H=ve(D.nodeName);if(pt(R.uponSanitizeElement,D,{tagName:H,allowedTags:K}),D.hasChildNodes()&&!ka(D.firstElementChild)&&Ae(/<[/\w]/g,D.innerHTML)&&Ae(/<[/\w]/g,D.textContent)||D.nodeType===Un.progressingInstruction||ce&&D.nodeType===Un.comment&&Ae(/<[/\w]/g,D.data))return it(D),!0;if(!K[H]||be[H]){if(!be[H]&&Ta(H)&&(Y.tagNameCheck instanceof RegExp&&Ae(Y.tagNameCheck,H)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(H)))return!1;if(Ys&&!nn[H]){const ae=x(D)||D.parentNode,Ee=E(D)||D.childNodes;if(Ee&&ae){const xe=Ee.length;for(let Be=xe-1;Be>=0;--Be){const st=g(Ee[Be],!0);st.__removalCount=(D.__removalCount||0)+1,ae.insertBefore(st,p(D))}}}return it(D),!0}return D instanceof l&&!wh(D)||(H==="noscript"||H==="noembed"||H==="noframes")&&Ae(/<\/no(script|embed|frames)/i,D.innerHTML)?(it(D),!0):(se&&D.nodeType===Un.text&&(z=D.textContent,Oi([y,T,I],ae=>{z=Fn(z,ae," ")}),D.textContent!==z&&(Pn(e.removed,{element:D.cloneNode()}),D.textContent=z)),pt(R.afterSanitizeElements,D,null),!1)},Sa=function(D,z,H){if(Ln&&(z==="id"||z==="name")&&(H in t||H in vh))return!1;if(!(P&&!S[z]&&Ae(C,z))){if(!(v&&Ae(U,z))){if(!ee[z]||S[z]){if(!(Ta(D)&&(Y.tagNameCheck instanceof RegExp&&Ae(Y.tagNameCheck,D)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(D))&&(Y.attributeNameCheck instanceof RegExp&&Ae(Y.attributeNameCheck,z)||Y.attributeNameCheck instanceof Function&&Y.attributeNameCheck(z))||z==="is"&&Y.allowCustomizedBuiltInElements&&(Y.tagNameCheck instanceof RegExp&&Ae(Y.tagNameCheck,H)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(H))))return!1}else if(!Js[z]){if(!Ae(X,Fn(H,$,""))){if(!((z==="src"||z==="xlink:href"||z==="href")&&D!=="script"&&cf(H,"data:")===0&&pa[D])){if(!(O&&!Ae(B,Fn(H,$,"")))){if(H)return!1}}}}}}return!0},Ta=function(D){return D!=="annotation-xml"&&Ra(D,j)},_a=function(D){pt(R.beforeSanitizeAttributes,D,null);const{attributes:z}=D;if(!z||er(D))return;const H={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee,forceKeepAttr:void 0};let ae=z.length;for(;ae--;){const Ee=z[ae],{name:xe,namespaceURI:Be,value:st}=Ee,On=ve(xe);let Me=xe==="value"?st:df(st);if(H.attrName=On,H.attrValue=Me,H.keepAttr=!0,H.forceKeepAttr=void 0,pt(R.uponSanitizeAttribute,D,H),Me=H.attrValue,en&&(On==="id"||On==="name")&&(Ni(xe,D),Me=Ci+Me),ce&&Ae(/((--!?|])>)|<\/(style|title)/i,Me)){Ni(xe,D);continue}if(H.forceKeepAttr||(Ni(xe,D),!H.keepAttr))continue;if(!Q&&Ae(/\/>/i,Me)){Ni(xe,D);continue}se&&Oi([y,T,I],Ia=>{Me=Fn(Me,Ia," ")});const Ca=ve(D.nodeName);if(Sa(Ca,On,Me)){if(m&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!Be)switch(f.getAttributeType(Ca,On)){case"TrustedHTML":{Me=m.createHTML(Me);break}case"TrustedScriptURL":{Me=m.createScriptURL(Me);break}}try{Be?D.setAttributeNS(Be,xe,Me):D.setAttribute(xe,Me),er(D)?it(D):Ba(e.removed)}catch{}}}pt(R.afterSanitizeAttributes,D,null)},xh=function q(D){let z=null;const H=xa(D);for(pt(R.beforeSanitizeShadowDOM,D,null);z=H.nextNode();)pt(R.uponSanitizeShadowNode,z,null),Ea(z),_a(z),z.content instanceof r&&q(z.content);pt(R.afterSanitizeShadowDOM,D,null)};return e.sanitize=function(q){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},z=null,H=null,ae=null,Ee=null;if(Xs=!q,Xs&&(q="<!-->"),typeof q!="string"&&!ka(q))if(typeof q.toString=="function"){if(q=q.toString(),typeof q!="string")throw $n("dirty is not a string, aborting")}else throw $n("toString is not a function");if(!e.isSupported)return q;if(ye||Zs(D),e.removed=[],typeof q=="string"&&(Nn=!1),Nn){if(q.nodeName){const st=ve(q.nodeName);if(!K[st]||be[st])throw $n("root node is forbidden and cannot be sanitized in-place")}}else if(q instanceof a)z=wa("<!---->"),H=z.ownerDocument.importNode(q,!0),H.nodeType===Un.element&&H.nodeName==="BODY"||H.nodeName==="HTML"?z=H:z.appendChild(H);else{if(!oe&&!se&&!he&&q.indexOf("<")===-1)return m&&Zt?m.createHTML(q):q;if(z=wa(q),!z)return oe?null:Zt?_:""}z&&nt&&it(z.firstChild);const xe=xa(Nn?q:z);for(;ae=xe.nextNode();)Ea(ae),_a(ae),ae.content instanceof r&&xh(ae.content);if(Nn)return q;if(oe){if(Oe)for(Ee=M.call(z.ownerDocument);z.firstChild;)Ee.appendChild(z.firstChild);else Ee=z;return(ee.shadowroot||ee.shadowrootmode)&&(Ee=F.call(n,Ee,!0)),Ee}let Be=he?z.outerHTML:z.innerHTML;return he&&K["!doctype"]&&z.ownerDocument&&z.ownerDocument.doctype&&z.ownerDocument.doctype.name&&Ae(wd,z.ownerDocument.doctype.name)&&(Be="<!DOCTYPE "+z.ownerDocument.doctype.name+`>
`+Be),se&&Oi([y,T,I],st=>{Be=Fn(Be,st," ")}),m&&Zt?m.createHTML(Be):Be},e.setConfig=function(){let q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Zs(q),ye=!0},e.clearConfig=function(){rn=null,ye=!1},e.isValidAttribute=function(q,D,z){rn||Zs({});const H=ve(q),ae=ve(D);return Sa(H,ae,z)},e.addHook=function(q,D){typeof D=="function"&&Pn(R[q],D)},e.removeHook=function(q){return Ba(R[q])},e.removeHooks=function(q){R[q]=[]},e.removeAllHooks=function(){R=ja()},e}var Tf=xd();Z.setOptions({breaks:!0,gfm:!0,headerIds:!1});class _f{constructor(){L(this,"id","markdown-editor");L(this,"name","Markdown Editor");L(this,"description","Live Markdown editor with preview");L(this,"seoMetadata",{title:"Free Online Markdown Editor with Live Preview",description:"Write and preview Markdown in real-time with this free online editor. Supports GitHub Flavored Markdown, instant preview, and easy export options.",keywords:["markdown editor","markdown preview","markdown to html","online markdown","live markdown editor","github markdown"]});L(this,"defaultText",`# Welcome to the Markdown Editor

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

The preview updates in real-time`);L(this,"lastContent","");L(this,"lineNumbers",null);L(this,"editor",null)}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
`).length,t=Array(e).fill(0).map((n,s)=>`<div class="line-number">${s+1}</div>`).join("");this.lineNumbers.innerHTML=t}updatePreview(){if(!this.editor)return;const e=document.getElementById("preview");if(!e)return;const t=this.editor.value,n=Tf.sanitize(Z(t));e.innerHTML=n}setupButtons(){const e=document.getElementById("copyHtml"),t=document.getElementById("copyMd"),n=document.getElementById("downloadMd"),s=document.getElementById("resetContent");!e||!t||!n||!s||!this.editor||(e.addEventListener("click",()=>{const r=document.getElementById("preview");r&&navigator.clipboard.writeText(r.innerHTML).then(()=>this.showToast("HTML copied to clipboard!")).catch(()=>this.showToast("Failed to copy HTML"))}),t.addEventListener("click",()=>{navigator.clipboard.writeText(this.editor.value).then(()=>this.showToast("Markdown copied to clipboard!")).catch(()=>this.showToast("Failed to copy Markdown"))}),n.addEventListener("click",()=>{const r=this.editor.value,o=new Blob([r],{type:"text/markdown"}),a=URL.createObjectURL(o),l=document.createElement("a");l.href=a,l.download="document.md",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a),this.showToast("Markdown file downloaded!")}),s.addEventListener("click",()=>{this.editor.value=this.defaultText,this.lastContent=this.defaultText,this.updateLineNumbers(),this.updatePreview(),this.showToast("Content reset to default")}))}showToast(e){const t=document.querySelector(".markdown-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class Cf{constructor(){L(this,"id","json-formatter");L(this,"name","JSON Formatter");L(this,"description","A powerful JSON formatter and validator with support for beautification, minification, and error detection.");L(this,"seoMetadata",{title:"Free Online JSON Formatter and Validator Tool",description:"Format, validate, and beautify your JSON data with this free online JSON formatting tool. Easy to use, instant results, and no installation required.",keywords:["json formatter","json validator","json beautifier","json parser","format json online","validate json"]});L(this,"defaultText",`{
  "example": {
    "number": 42,
    "string": "Hello World",
    "array": [1, 2, 3],
    "nested": {
      "boolean": true,
      "null": null
    }
  }
}`);L(this,"lastContent","")}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
 */function ki(i){return i+.5|0}const St=(i,e,t)=>Math.max(Math.min(i,t),e);function Jn(i){return St(ki(i*2.55),0,255)}function Tt(i){return St(ki(i*255),0,255)}function yt(i){return St(ki(i/2.55)/100,0,1)}function Ha(i){return St(ki(i*100),0,100)}const Ue={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},oo=[..."0123456789ABCDEF"],If=i=>oo[i&15],Mf=i=>oo[(i&240)>>4]+oo[i&15],Ri=i=>(i&240)>>4===(i&15),Af=i=>Ri(i.r)&&Ri(i.g)&&Ri(i.b)&&Ri(i.a);function Lf(i){var e=i.length,t;return i[0]==="#"&&(e===4||e===5?t={r:255&Ue[i[1]]*17,g:255&Ue[i[2]]*17,b:255&Ue[i[3]]*17,a:e===5?Ue[i[4]]*17:255}:(e===7||e===9)&&(t={r:Ue[i[1]]<<4|Ue[i[2]],g:Ue[i[3]]<<4|Ue[i[4]],b:Ue[i[5]]<<4|Ue[i[6]],a:e===9?Ue[i[7]]<<4|Ue[i[8]]:255})),t}const Nf=(i,e)=>i<255?e(i):"";function Df(i){var e=Af(i)?If:Mf;return i?"#"+e(i.r)+e(i.g)+e(i.b)+Nf(i.a,e):void 0}const Of=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function kd(i,e,t){const n=e*Math.min(t,1-t),s=(r,o=(r+i/30)%12)=>t-n*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function Bf(i,e,t){const n=(s,r=(s+i/60)%6)=>t-t*e*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function Rf(i,e,t){const n=kd(i,1,.5);let s;for(e+t>1&&(s=1/(e+t),e*=s,t*=s),s=0;s<3;s++)n[s]*=1-e-t,n[s]+=e;return n}function Pf(i,e,t,n,s){return i===s?(e-t)/n+(e<t?6:0):e===s?(t-i)/n+2:(i-e)/n+4}function Bo(i){const t=i.r/255,n=i.g/255,s=i.b/255,r=Math.max(t,n,s),o=Math.min(t,n,s),a=(r+o)/2;let l,c,d;return r!==o&&(d=r-o,c=a>.5?d/(2-r-o):d/(r+o),l=Pf(t,n,s,d,r),l=l*60+.5),[l|0,c||0,a]}function Ro(i,e,t,n){return(Array.isArray(e)?i(e[0],e[1],e[2]):i(e,t,n)).map(Tt)}function Po(i,e,t){return Ro(kd,i,e,t)}function Ff(i,e,t){return Ro(Rf,i,e,t)}function $f(i,e,t){return Ro(Bf,i,e,t)}function Ed(i){return(i%360+360)%360}function zf(i){const e=Of.exec(i);let t=255,n;if(!e)return;e[5]!==n&&(t=e[6]?Jn(+e[5]):Tt(+e[5]));const s=Ed(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?n=Ff(s,r,o):e[1]==="hsv"?n=$f(s,r,o):n=Po(s,r,o),{r:n[0],g:n[1],b:n[2],a:t}}function Uf(i,e){var t=Bo(i);t[0]=Ed(t[0]+e),t=Po(t),i.r=t[0],i.g=t[1],i.b=t[2]}function jf(i){if(!i)return;const e=Bo(i),t=e[0],n=Ha(e[1]),s=Ha(e[2]);return i.a<255?`hsla(${t}, ${n}%, ${s}%, ${yt(i.a)})`:`hsl(${t}, ${n}%, ${s}%)`}const qa={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Va={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Hf(){const i={},e=Object.keys(Va),t=Object.keys(qa);let n,s,r,o,a;for(n=0;n<e.length;n++){for(o=a=e[n],s=0;s<t.length;s++)r=t[s],a=a.replace(r,qa[r]);r=parseInt(Va[o],16),i[a]=[r>>16&255,r>>8&255,r&255]}return i}let Pi;function qf(i){Pi||(Pi=Hf(),Pi.transparent=[0,0,0,0]);const e=Pi[i.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Vf=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Kf(i){const e=Vf.exec(i);let t=255,n,s,r;if(e){if(e[7]!==n){const o=+e[7];t=e[8]?Jn(o):St(o*255,0,255)}return n=+e[1],s=+e[3],r=+e[5],n=255&(e[2]?Jn(n):St(n,0,255)),s=255&(e[4]?Jn(s):St(s,0,255)),r=255&(e[6]?Jn(r):St(r,0,255)),{r:n,g:s,b:r,a:t}}}function Wf(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${yt(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const or=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,on=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Gf(i,e,t){const n=on(yt(i.r)),s=on(yt(i.g)),r=on(yt(i.b));return{r:Tt(or(n+t*(on(yt(e.r))-n))),g:Tt(or(s+t*(on(yt(e.g))-s))),b:Tt(or(r+t*(on(yt(e.b))-r))),a:i.a+t*(e.a-i.a)}}function Fi(i,e,t){if(i){let n=Bo(i);n[e]=Math.max(0,Math.min(n[e]+n[e]*t,e===0?360:1)),n=Po(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function Sd(i,e){return i&&Object.assign(e||{},i)}function Ka(i){var e={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(e={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(e.a=Tt(i[3]))):(e=Sd(i,{r:0,g:0,b:0,a:1}),e.a=Tt(e.a)),e}function Yf(i){return i.charAt(0)==="r"?Kf(i):zf(i)}class hi{constructor(e){if(e instanceof hi)return e;const t=typeof e;let n;t==="object"?n=Ka(e):t==="string"&&(n=Lf(e)||qf(e)||Yf(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=Sd(this._rgb);return e&&(e.a=yt(e.a)),e}set rgb(e){this._rgb=Ka(e)}rgbString(){return this._valid?Wf(this._rgb):void 0}hexString(){return this._valid?Df(this._rgb):void 0}hslString(){return this._valid?jf(this._rgb):void 0}mix(e,t){if(e){const n=this.rgb,s=e.rgb;let r;const o=t===r?.5:t,a=2*o-1,l=n.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*s.r+.5,n.g=255&c*n.g+r*s.g+.5,n.b=255&c*n.b+r*s.b+.5,n.a=o*n.a+(1-o)*s.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=Gf(this._rgb,e._rgb,t)),this}clone(){return new hi(this.rgb)}alpha(e){return this._rgb.a=Tt(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=ki(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Fi(this._rgb,2,e),this}darken(e){return Fi(this._rgb,2,-e),this}saturate(e){return Fi(this._rgb,1,e),this}desaturate(e){return Fi(this._rgb,1,-e),this}rotate(e){return Uf(this._rgb,e),this}}/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function mt(){}const Jf=(()=>{let i=0;return()=>i++})();function fe(i){return i==null}function ge(i){if(Array.isArray&&Array.isArray(i))return!0;const e=Object.prototype.toString.call(i);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function J(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function Ce(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function rt(i,e){return Ce(i)?i:e}function G(i,e){return typeof i>"u"?e:i}const Xf=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*e:+i;function re(i,e,t){if(i&&typeof i.call=="function")return i.apply(t,e)}function te(i,e,t,n){let s,r,o;if(ge(i))for(r=i.length,s=0;s<r;s++)e.call(t,i[s],s);else if(J(i))for(o=Object.keys(i),r=o.length,s=0;s<r;s++)e.call(t,i[o[s]],o[s])}function fs(i,e){let t,n,s,r;if(!i||!e||i.length!==e.length)return!1;for(t=0,n=i.length;t<n;++t)if(s=i[t],r=e[t],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function ps(i){if(ge(i))return i.map(ps);if(J(i)){const e=Object.create(null),t=Object.keys(i),n=t.length;let s=0;for(;s<n;++s)e[t[s]]=ps(i[t[s]]);return e}return i}function Td(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Qf(i,e,t,n){if(!Td(i))return;const s=e[i],r=t[i];J(s)&&J(r)?fi(s,r,n):e[i]=ps(r)}function fi(i,e,t){const n=ge(e)?e:[e],s=n.length;if(!J(i))return i;t=t||{};const r=t.merger||Qf;let o;for(let a=0;a<s;++a){if(o=n[a],!J(o))continue;const l=Object.keys(o);for(let c=0,d=l.length;c<d;++c)r(l[c],i,o,t)}return i}function ii(i,e){return fi(i,e,{merger:Zf})}function Zf(i,e,t){if(!Td(i))return;const n=e[i],s=t[i];J(n)&&J(s)?ii(n,s):Object.prototype.hasOwnProperty.call(e,i)||(e[i]=ps(s))}const Wa={"":i=>i,x:i=>i.x,y:i=>i.y};function ep(i){const e=i.split("."),t=[];let n="";for(const s of e)n+=s,n.endsWith("\\")?n=n.slice(0,-1)+".":(t.push(n),n="");return t}function tp(i){const e=ep(i);return t=>{for(const n of e){if(n==="")break;t=t&&t[n]}return t}}function ms(i,e){return(Wa[e]||(Wa[e]=tp(e)))(i)}function Fo(i){return i.charAt(0).toUpperCase()+i.slice(1)}const gs=i=>typeof i<"u",Ct=i=>typeof i=="function",Ga=(i,e)=>{if(i.size!==e.size)return!1;for(const t of i)if(!e.has(t))return!1;return!0};function np(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const we=Math.PI,et=2*we,ip=et+we,bs=Number.POSITIVE_INFINITY,sp=we/180,Ze=we/2,At=we/4,Ya=we*2/3,ao=Math.log10,vn=Math.sign;function si(i,e,t){return Math.abs(i-e)<t}function Ja(i){const e=Math.round(i);i=si(i,e,i/1e3)?e:i;const t=Math.pow(10,Math.floor(ao(i))),n=i/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function rp(i){const e=[],t=Math.sqrt(i);let n;for(n=1;n<t;n++)i%n===0&&(e.push(n),e.push(i/n));return t===(t|0)&&e.push(t),e.sort((s,r)=>s-r).pop(),e}function pi(i){return!isNaN(parseFloat(i))&&isFinite(i)}function op(i,e){const t=Math.round(i);return t-e<=i&&t+e>=i}function ap(i,e,t){let n,s,r;for(n=0,s=i.length;n<s;n++)r=i[n][t],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function Pt(i){return i*(we/180)}function lp(i){return i*(180/we)}function Xa(i){if(!Ce(i))return;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}function cp(i,e){const t=e.x-i.x,n=e.y-i.y,s=Math.sqrt(t*t+n*n);let r=Math.atan2(n,t);return r<-.5*we&&(r+=et),{angle:r,distance:s}}function lo(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function dp(i,e){return(i-e+ip)%et-we}function dt(i){return(i%et+et)%et}function _d(i,e,t,n){const s=dt(i),r=dt(e),o=dt(t),a=dt(r-s),l=dt(o-s),c=dt(s-r),d=dt(s-o);return s===r||s===o||n&&r===o||a>l&&c<d}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function up(i){return qe(i,-32768,32767)}function dn(i,e,t,n=1e-6){return i>=Math.min(e,t)-n&&i<=Math.max(e,t)+n}function $o(i,e,t){t=t||(o=>i[o]<e);let n=i.length-1,s=0,r;for(;n-s>1;)r=s+n>>1,t(r)?s=r:n=r;return{lo:s,hi:n}}const Ft=(i,e,t,n)=>$o(i,t,n?s=>{const r=i[s][e];return r<t||r===t&&i[s+1][e]===t}:s=>i[s][e]<t),hp=(i,e,t)=>$o(i,t,n=>i[n][e]>=t);function fp(i,e,t){let n=0,s=i.length;for(;n<s&&i[n]<e;)n++;for(;s>n&&i[s-1]>t;)s--;return n>0||s<i.length?i.slice(n,s):i}const Cd=["push","pop","shift","splice","unshift"];function pp(i,e){if(i._chartjs){i._chartjs.listeners.push(e);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Cd.forEach(t=>{const n="_onData"+Fo(t),s=i[t];Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return i._chartjs.listeners.forEach(a=>{typeof a[n]=="function"&&a[n](...r)}),o}})})}function Qa(i,e){const t=i._chartjs;if(!t)return;const n=t.listeners,s=n.indexOf(e);s!==-1&&n.splice(s,1),!(n.length>0)&&(Cd.forEach(r=>{delete i[r]}),delete i._chartjs)}function mp(i){const e=new Set(i);return e.size===i.length?i:Array.from(e)}const Id=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function Md(i,e){let t=[],n=!1;return function(...s){t=s,n||(n=!0,Id.call(window,()=>{n=!1,i.apply(e,t)}))}}function gp(i,e){let t;return function(...n){return e?(clearTimeout(t),t=setTimeout(i,e,n)):i.apply(this,n),e}}const zo=i=>i==="start"?"left":i==="end"?"right":"center",Se=(i,e,t)=>i==="start"?e:i==="end"?t:(e+t)/2,bp=(i,e,t,n)=>i===(n?"left":"right")?t:i==="center"?(e+t)/2:e;function yp(i,e,t){const n=e.length;let s=0,r=n;if(i._sorted){const{iScale:o,_parsed:a}=i,l=o.axis,{min:c,max:d,minDefined:u,maxDefined:h}=o.getUserBounds();u&&(s=qe(Math.min(Ft(a,l,c).lo,t?n:Ft(e,l,o.getPixelForValue(c)).lo),0,n-1)),h?r=qe(Math.max(Ft(a,o.axis,d,!0).hi+1,t?0:Ft(e,l,o.getPixelForValue(d),!0).hi+1),s,n)-s:r=n-s}return{start:s,count:r}}function vp(i){const{xScale:e,yScale:t,_scaleRanges:n}=i,s={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!n)return i._scaleRanges=s,!0;const r=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==t.min||n.ymax!==t.max;return Object.assign(n,s),r}const $i=i=>i===0||i===1,Za=(i,e,t)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-e)*et/t)),el=(i,e,t)=>Math.pow(2,-10*i)*Math.sin((i-e)*et/t)+1,ri={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*Ze)+1,easeOutSine:i=>Math.sin(i*Ze),easeInOutSine:i=>-.5*(Math.cos(we*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>$i(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>$i(i)?i:Za(i,.075,.3),easeOutElastic:i=>$i(i)?i:el(i,.075,.3),easeInOutElastic(i){return $i(i)?i:i<.5?.5*Za(i*2,.1125,.45):.5+.5*el(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let e=1.70158;return(i/=.5)<1?.5*(i*i*(((e*=1.525)+1)*i-e)):.5*((i-=2)*i*(((e*=1.525)+1)*i+e)+2)},easeInBounce:i=>1-ri.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?ri.easeInBounce(i*2)*.5:ri.easeOutBounce(i*2-1)*.5+.5};function Uo(i){if(i&&typeof i=="object"){const e=i.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function tl(i){return Uo(i)?i:new hi(i)}function ar(i){return Uo(i)?i:new hi(i).saturate(.5).darken(.1).hexString()}const wp=["x","y","borderWidth","radius","tension"],xp=["color","borderColor","backgroundColor"];function kp(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),i.set("animations",{colors:{type:"color",properties:xp},numbers:{type:"number",properties:wp}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function Ep(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const nl=new Map;function Sp(i,e){e=e||{};const t=i+JSON.stringify(e);let n=nl.get(t);return n||(n=new Intl.NumberFormat(i,e),nl.set(t,n)),n}function Ad(i,e,t){return Sp(e,t).format(i)}const Ld={values(i){return ge(i)?i:""+i},numeric(i,e,t){if(i===0)return"0";const n=this.chart.options.locale;let s,r=i;if(t.length>1){const c=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=Tp(i,t)}const o=ao(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Ad(i,n,l)},logarithmic(i,e,t){if(i===0)return"0";const n=t[e].significand||i/Math.pow(10,Math.floor(ao(i)));return[1,2,3,5,10,15].includes(n)||e>.8*t.length?Ld.numeric.call(this,i,e,t):""}};function Tp(i,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&i!==Math.floor(i)&&(t=i-Math.floor(i)),t}var Nd={formatters:Ld};function _p(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Nd.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Vt=Object.create(null),co=Object.create(null);function oi(i,e){if(!e)return i;const t=e.split(".");for(let n=0,s=t.length;n<s;++n){const r=t[n];i=i[r]||(i[r]=Object.create(null))}return i}function lr(i,e,t){return typeof e=="string"?fi(oi(i,e),t):fi(oi(i,""),e)}class Cp{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,s)=>ar(s.backgroundColor),this.hoverBorderColor=(n,s)=>ar(s.borderColor),this.hoverColor=(n,s)=>ar(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return lr(this,e,t)}get(e){return oi(this,e)}describe(e,t){return lr(co,e,t)}override(e,t){return lr(Vt,e,t)}route(e,t,n,s){const r=oi(this,e),o=oi(this,n),a="_"+t;Object.defineProperties(r,{[a]:{value:r[t],writable:!0},[t]:{enumerable:!0,get(){const l=this[a],c=o[s];return J(l)?Object.assign({},c,l):G(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(t=>t(this))}}var pe=new Cp({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[kp,Ep,_p]);function Ip(i){return!i||fe(i.size)||fe(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function il(i,e,t,n,s){let r=e[s];return r||(r=e[s]=i.measureText(s).width,t.push(s)),r>n&&(n=r),n}function Lt(i,e,t){const n=i.currentDevicePixelRatio,s=t!==0?Math.max(t/2,.5):0;return Math.round((e-s)*n)/n+s}function sl(i,e){!e&&!i||(e=e||i.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,i.width,i.height),e.restore())}function uo(i,e,t,n){Dd(i,e,t,n,null)}function Dd(i,e,t,n,s){let r,o,a,l,c,d,u,h;const f=e.pointStyle,b=e.rotation,g=e.radius;let w=(b||0)*sp;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){i.save(),i.translate(t,n),i.rotate(w),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(g)||g<=0)){switch(i.beginPath(),f){default:s?i.ellipse(t,n,s/2,g,0,0,et):i.arc(t,n,g,0,et),i.closePath();break;case"triangle":d=s?s/2:g,i.moveTo(t+Math.sin(w)*d,n-Math.cos(w)*g),w+=Ya,i.lineTo(t+Math.sin(w)*d,n-Math.cos(w)*g),w+=Ya,i.lineTo(t+Math.sin(w)*d,n-Math.cos(w)*g),i.closePath();break;case"rectRounded":c=g*.516,l=g-c,o=Math.cos(w+At)*l,u=Math.cos(w+At)*(s?s/2-c:l),a=Math.sin(w+At)*l,h=Math.sin(w+At)*(s?s/2-c:l),i.arc(t-u,n-a,c,w-we,w-Ze),i.arc(t+h,n-o,c,w-Ze,w),i.arc(t+u,n+a,c,w,w+Ze),i.arc(t-h,n+o,c,w+Ze,w+we),i.closePath();break;case"rect":if(!b){l=Math.SQRT1_2*g,d=s?s/2:l,i.rect(t-d,n-l,2*d,2*l);break}w+=At;case"rectRot":u=Math.cos(w)*(s?s/2:g),o=Math.cos(w)*g,a=Math.sin(w)*g,h=Math.sin(w)*(s?s/2:g),i.moveTo(t-u,n-a),i.lineTo(t+h,n-o),i.lineTo(t+u,n+a),i.lineTo(t-h,n+o),i.closePath();break;case"crossRot":w+=At;case"cross":u=Math.cos(w)*(s?s/2:g),o=Math.cos(w)*g,a=Math.sin(w)*g,h=Math.sin(w)*(s?s/2:g),i.moveTo(t-u,n-a),i.lineTo(t+u,n+a),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o);break;case"star":u=Math.cos(w)*(s?s/2:g),o=Math.cos(w)*g,a=Math.sin(w)*g,h=Math.sin(w)*(s?s/2:g),i.moveTo(t-u,n-a),i.lineTo(t+u,n+a),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o),w+=At,u=Math.cos(w)*(s?s/2:g),o=Math.cos(w)*g,a=Math.sin(w)*g,h=Math.sin(w)*(s?s/2:g),i.moveTo(t-u,n-a),i.lineTo(t+u,n+a),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o);break;case"line":o=s?s/2:Math.cos(w)*g,a=Math.sin(w)*g,i.moveTo(t-o,n-a),i.lineTo(t+o,n+a);break;case"dash":i.moveTo(t,n),i.lineTo(t+Math.cos(w)*(s?s/2:g),n+Math.sin(w)*g);break;case!1:i.closePath();break}i.fill(),e.borderWidth>0&&i.stroke()}}function mi(i,e,t){return t=t||.5,!e||i&&i.x>e.left-t&&i.x<e.right+t&&i.y>e.top-t&&i.y<e.bottom+t}function As(i,e){i.save(),i.beginPath(),i.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),i.clip()}function Ls(i){i.restore()}function Mp(i,e,t,n,s){if(!e)return i.lineTo(t.x,t.y);if(s==="middle"){const r=(e.x+t.x)/2;i.lineTo(r,e.y),i.lineTo(r,t.y)}else s==="after"!=!!n?i.lineTo(e.x,t.y):i.lineTo(t.x,e.y);i.lineTo(t.x,t.y)}function Ap(i,e,t,n){if(!e)return i.lineTo(t.x,t.y);i.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?t.cp2x:t.cp1x,n?t.cp2y:t.cp1y,t.x,t.y)}function Lp(i,e){e.translation&&i.translate(e.translation[0],e.translation[1]),fe(e.rotation)||i.rotate(e.rotation),e.color&&(i.fillStyle=e.color),e.textAlign&&(i.textAlign=e.textAlign),e.textBaseline&&(i.textBaseline=e.textBaseline)}function Np(i,e,t,n,s){if(s.strikethrough||s.underline){const r=i.measureText(n),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=t-r.actualBoundingBoxAscent,c=t+r.actualBoundingBoxDescent,d=s.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=s.decorationWidth||2,i.moveTo(o,d),i.lineTo(a,d),i.stroke()}}function Dp(i,e){const t=i.fillStyle;i.fillStyle=e.color,i.fillRect(e.left,e.top,e.width,e.height),i.fillStyle=t}function gi(i,e,t,n,s,r={}){const o=ge(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(i.save(),i.font=s.string,Lp(i,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&Dp(i,r.backdrop),a&&(r.strokeColor&&(i.strokeStyle=r.strokeColor),fe(r.strokeWidth)||(i.lineWidth=r.strokeWidth),i.strokeText(c,t,n,r.maxWidth)),i.fillText(c,t,n,r.maxWidth),Np(i,t,n,c,r),n+=Number(s.lineHeight);i.restore()}function ho(i,e){const{x:t,y:n,w:s,h:r,radius:o}=e;i.arc(t+o.topLeft,n+o.topLeft,o.topLeft,1.5*we,we,!0),i.lineTo(t,n+r-o.bottomLeft),i.arc(t+o.bottomLeft,n+r-o.bottomLeft,o.bottomLeft,we,Ze,!0),i.lineTo(t+s-o.bottomRight,n+r),i.arc(t+s-o.bottomRight,n+r-o.bottomRight,o.bottomRight,Ze,0,!0),i.lineTo(t+s,n+o.topRight),i.arc(t+s-o.topRight,n+o.topRight,o.topRight,0,-Ze,!0),i.lineTo(t+o.topLeft,n)}const Op=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Bp=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Rp(i,e){const t=(""+i).match(Op);if(!t||t[1]==="normal")return e*1.2;switch(i=+t[2],t[3]){case"px":return i;case"%":i/=100;break}return e*i}const Pp=i=>+i||0;function Od(i,e){const t={},n=J(e),s=n?Object.keys(e):e,r=J(i)?n?o=>G(i[o],i[e[o]]):o=>i[o]:()=>i;for(const o of s)t[o]=Pp(r(o));return t}function Fp(i){return Od(i,{top:"y",right:"x",bottom:"y",left:"x"})}function ai(i){return Od(i,["topLeft","topRight","bottomLeft","bottomRight"])}function Ge(i){const e=Fp(i);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Te(i,e){i=i||{},e=e||pe.font;let t=G(i.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let n=G(i.style,e.style);n&&!(""+n).match(Bp)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const s={family:G(i.family,e.family),lineHeight:Rp(G(i.lineHeight,e.lineHeight),t),size:t,style:n,weight:G(i.weight,e.weight),string:""};return s.string=Ip(s),s}function zi(i,e,t,n){let s,r,o;for(s=0,r=i.length;s<r;++s)if(o=i[s],o!==void 0&&o!==void 0)return o}function $p(i,e,t){const{min:n,max:s}=i,r=Xf(e,(s-n)/2),o=(a,l)=>t&&a===0?0:a+l;return{min:o(n,-Math.abs(r)),max:o(s,r)}}function Gt(i,e){return Object.assign(Object.create(i),e)}function jo(i,e=[""],t,n,s=()=>i[0]){const r=t||i;typeof n>"u"&&(n=Fd("_fallback",i));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:r,_fallback:n,_getTarget:s,override:a=>jo([a,...i],e,r,n)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return Rd(a,l,()=>Wp(l,e,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return ol(a).includes(l)},ownKeys(a){return ol(a)},set(a,l,c){const d=a._storage||(a._storage=s());return a[l]=d[l]=c,delete a._keys,!0}})}function wn(i,e,t,n){const s={_cacheable:!1,_proxy:i,_context:e,_subProxy:t,_stack:new Set,_descriptors:Bd(i,n),setContext:r=>wn(i,r,t,n),override:r=>wn(i.override(r),e,t,n)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete i[o],!0},get(r,o,a){return Rd(r,o,()=>Up(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(r,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(r,o,a){return i[o]=a,delete r[o],!0}})}function Bd(i,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:n=e.indexable,_allKeys:s=e.allKeys}=i;return{allKeys:s,scriptable:t,indexable:n,isScriptable:Ct(t)?t:()=>t,isIndexable:Ct(n)?n:()=>n}}const zp=(i,e)=>i?i+Fo(e):e,Ho=(i,e)=>J(e)&&i!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Rd(i,e,t){if(Object.prototype.hasOwnProperty.call(i,e)||e==="constructor")return i[e];const n=t();return i[e]=n,n}function Up(i,e,t){const{_proxy:n,_context:s,_subProxy:r,_descriptors:o}=i;let a=n[e];return Ct(a)&&o.isScriptable(e)&&(a=jp(e,a,i,t)),ge(a)&&a.length&&(a=Hp(e,a,i,o.isIndexable)),Ho(e,a)&&(a=wn(a,s,r&&r[e],o)),a}function jp(i,e,t,n){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=t;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=e(r,o||n);return a.delete(i),Ho(i,l)&&(l=qo(s._scopes,s,i,l)),l}function Hp(i,e,t,n){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=t;if(typeof r.index<"u"&&n(i))return e[r.index%e.length];if(J(e[0])){const l=e,c=s._scopes.filter(d=>d!==l);e=[];for(const d of l){const u=qo(c,s,i,d);e.push(wn(u,r,o&&o[i],a))}}return e}function Pd(i,e,t){return Ct(i)?i(e,t):i}const qp=(i,e)=>i===!0?e:typeof i=="string"?ms(e,i):void 0;function Vp(i,e,t,n,s){for(const r of e){const o=qp(t,r);if(o){i.add(o);const a=Pd(o._fallback,t,s);if(typeof a<"u"&&a!==t&&a!==n)return a}else if(o===!1&&typeof n<"u"&&t!==n)return null}return!1}function qo(i,e,t,n){const s=e._rootScopes,r=Pd(e._fallback,t,n),o=[...i,...s],a=new Set;a.add(n);let l=rl(a,o,t,r||t,n);return l===null||typeof r<"u"&&r!==t&&(l=rl(a,o,r,l,n),l===null)?!1:jo(Array.from(a),[""],s,r,()=>Kp(e,t,n))}function rl(i,e,t,n,s){for(;t;)t=Vp(i,e,t,n,s);return t}function Kp(i,e,t){const n=i._getTarget();e in n||(n[e]={});const s=n[e];return ge(s)&&J(t)?t:s||{}}function Wp(i,e,t,n){let s;for(const r of e)if(s=Fd(zp(r,i),t),typeof s<"u")return Ho(i,s)?qo(t,n,i,s):s}function Fd(i,e){for(const t of e){if(!t)continue;const n=t[i];if(typeof n<"u")return n}}function ol(i){let e=i._keys;return e||(e=i._keys=Gp(i._scopes)),e}function Gp(i){const e=new Set;for(const t of i)for(const n of Object.keys(t).filter(s=>!s.startsWith("_")))e.add(n);return Array.from(e)}const Yp=Number.EPSILON||1e-14,xn=(i,e)=>e<i.length&&!i[e].skip&&i[e],$d=i=>i==="x"?"y":"x";function Jp(i,e,t,n){const s=i.skip?e:i,r=e,o=t.skip?e:t,a=lo(r,s),l=lo(o,r);let c=a/(a+l),d=l/(a+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const u=n*c,h=n*d;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+h*(o.x-s.x),y:r.y+h*(o.y-s.y)}}}function Xp(i,e,t){const n=i.length;let s,r,o,a,l,c=xn(i,0);for(let d=0;d<n-1;++d)if(l=c,c=xn(i,d+1),!(!l||!c)){if(si(e[d],0,Yp)){t[d]=t[d+1]=0;continue}s=t[d]/e[d],r=t[d+1]/e[d],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),t[d]=s*o*e[d],t[d+1]=r*o*e[d])}}function Qp(i,e,t="x"){const n=$d(t),s=i.length;let r,o,a,l=xn(i,0);for(let c=0;c<s;++c){if(o=a,a=l,l=xn(i,c+1),!a)continue;const d=a[t],u=a[n];o&&(r=(d-o[t])/3,a[`cp1${t}`]=d-r,a[`cp1${n}`]=u-r*e[c]),l&&(r=(l[t]-d)/3,a[`cp2${t}`]=d+r,a[`cp2${n}`]=u+r*e[c])}}function Zp(i,e="x"){const t=$d(e),n=i.length,s=Array(n).fill(0),r=Array(n);let o,a,l,c=xn(i,0);for(o=0;o<n;++o)if(a=l,l=c,c=xn(i,o+1),!!l){if(c){const d=c[e]-l[e];s[o]=d!==0?(c[t]-l[t])/d:0}r[o]=a?c?vn(s[o-1])!==vn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}Xp(i,s,r),Qp(i,r,e)}function Ui(i,e,t){return Math.max(Math.min(i,t),e)}function em(i,e){let t,n,s,r,o,a=mi(i[0],e);for(t=0,n=i.length;t<n;++t)o=r,r=a,a=t<n-1&&mi(i[t+1],e),r&&(s=i[t],o&&(s.cp1x=Ui(s.cp1x,e.left,e.right),s.cp1y=Ui(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=Ui(s.cp2x,e.left,e.right),s.cp2y=Ui(s.cp2y,e.top,e.bottom)))}function tm(i,e,t,n,s){let r,o,a,l;if(e.spanGaps&&(i=i.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")Zp(i,s);else{let c=n?i[i.length-1]:i[0];for(r=0,o=i.length;r<o;++r)a=i[r],l=Jp(c,a,i[Math.min(r+1,o-(n?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&em(i,t)}function Vo(){return typeof window<"u"&&typeof document<"u"}function Ko(i){let e=i.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function ys(i,e,t){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*e.parentNode[t])):n=i,n}const Ns=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function nm(i,e){return Ns(i).getPropertyValue(e)}const im=["top","right","bottom","left"];function jt(i,e,t){const n={};t=t?"-"+t:"";for(let s=0;s<4;s++){const r=im[s];n[r]=parseFloat(i[e+"-"+r+t])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const sm=(i,e,t)=>(i>0||e>0)&&(!t||!t.shadowRoot);function rm(i,e){const t=i.touches,n=t&&t.length?t[0]:i,{offsetX:s,offsetY:r}=n;let o=!1,a,l;if(sm(s,r,i.target))a=s,l=r;else{const c=e.getBoundingClientRect();a=n.clientX-c.left,l=n.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Ot(i,e){if("native"in i)return i;const{canvas:t,currentDevicePixelRatio:n}=e,s=Ns(t),r=s.boxSizing==="border-box",o=jt(s,"padding"),a=jt(s,"border","width"),{x:l,y:c,box:d}=rm(i,t),u=o.left+(d&&a.left),h=o.top+(d&&a.top);let{width:f,height:b}=e;return r&&(f-=o.width+a.width,b-=o.height+a.height),{x:Math.round((l-u)/f*t.width/n),y:Math.round((c-h)/b*t.height/n)}}function om(i,e,t){let n,s;if(e===void 0||t===void 0){const r=i&&Ko(i);if(!r)e=i.clientWidth,t=i.clientHeight;else{const o=r.getBoundingClientRect(),a=Ns(r),l=jt(a,"border","width"),c=jt(a,"padding");e=o.width-c.width-l.width,t=o.height-c.height-l.height,n=ys(a.maxWidth,r,"clientWidth"),s=ys(a.maxHeight,r,"clientHeight")}}return{width:e,height:t,maxWidth:n||bs,maxHeight:s||bs}}const ji=i=>Math.round(i*10)/10;function am(i,e,t,n){const s=Ns(i),r=jt(s,"margin"),o=ys(s.maxWidth,i,"clientWidth")||bs,a=ys(s.maxHeight,i,"clientHeight")||bs,l=om(i,e,t);let{width:c,height:d}=l;if(s.boxSizing==="content-box"){const h=jt(s,"border","width"),f=jt(s,"padding");c-=f.width+h.width,d-=f.height+h.height}return c=Math.max(0,c-r.width),d=Math.max(0,n?c/n:d-r.height),c=ji(Math.min(c,o,l.maxWidth)),d=ji(Math.min(d,a,l.maxHeight)),c&&!d&&(d=ji(c/2)),(e!==void 0||t!==void 0)&&n&&l.height&&d>l.height&&(d=l.height,c=ji(Math.floor(d*n))),{width:c,height:d}}function al(i,e,t){const n=e||1,s=Math.floor(i.height*n),r=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const o=i.canvas;return o.style&&(t||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==s||o.width!==r?(i.currentDevicePixelRatio=n,o.height=s,o.width=r,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const lm=function(){let i=!1;try{const e={get passive(){return i=!0,!1}};Vo()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return i}();function ll(i,e){const t=nm(i,e),n=t&&t.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Bt(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:i.y+t*(e.y-i.y)}}function cm(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:n==="middle"?t<.5?i.y:e.y:n==="after"?t<1?i.y:e.y:t>0?e.y:i.y}}function dm(i,e,t,n){const s={x:i.cp2x,y:i.cp2y},r={x:e.cp1x,y:e.cp1y},o=Bt(i,s,t),a=Bt(s,r,t),l=Bt(r,e,t),c=Bt(o,a,t),d=Bt(a,l,t);return Bt(c,d,t)}const um=function(i,e){return{x(t){return i+i+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,n){return t-n},leftForLtr(t,n){return t-n}}},hm=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,e){return i+e},leftForLtr(i,e){return i}}};function mn(i,e,t){return i?um(e,t):hm()}function zd(i,e){let t,n;(e==="ltr"||e==="rtl")&&(t=i.canvas.style,n=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),i.prevTextDirection=n)}function Ud(i,e){e!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",e[0],e[1]))}function jd(i){return i==="angle"?{between:_d,compare:dp,normalize:dt}:{between:dn,compare:(e,t)=>e-t,normalize:e=>e}}function cl({start:i,end:e,count:t,loop:n,style:s}){return{start:i%t,end:e%t,loop:n&&(e-i+1)%t===0,style:s}}function fm(i,e,t){const{property:n,start:s,end:r}=t,{between:o,normalize:a}=jd(n),l=e.length;let{start:c,end:d,loop:u}=i,h,f;if(u){for(c+=l,d+=l,h=0,f=l;h<f&&o(a(e[c%l][n]),s,r);++h)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:u,style:i.style}}function Hd(i,e,t){if(!t)return[i];const{property:n,start:s,end:r}=t,o=e.length,{compare:a,between:l,normalize:c}=jd(n),{start:d,end:u,loop:h,style:f}=fm(i,e,t),b=[];let g=!1,w=null,p,E,x;const m=()=>l(s,x,p)&&a(s,x)!==0,_=()=>a(r,p)===0||l(r,x,p),A=()=>g||m(),N=()=>!g||_();for(let M=d,k=d;M<=u;++M)E=e[M%o],!E.skip&&(p=c(E[n]),p!==x&&(g=l(p,s,r),w===null&&A()&&(w=a(p,s)===0?M:k),w!==null&&N()&&(b.push(cl({start:w,end:M,loop:h,count:o,style:f})),w=null),k=M,x=p));return w!==null&&b.push(cl({start:w,end:u,loop:h,count:o,style:f})),b}function qd(i,e){const t=[],n=i.segments;for(let s=0;s<n.length;s++){const r=Hd(n[s],i.points,e);r.length&&t.push(...r)}return t}function pm(i,e,t,n){let s=0,r=e-1;if(t&&!n)for(;s<e&&!i[s].skip;)s++;for(;s<e&&i[s].skip;)s++;for(s%=e,t&&(r+=s);r>s&&i[r%e].skip;)r--;return r%=e,{start:s,end:r}}function mm(i,e,t,n){const s=i.length,r=[];let o=e,a=i[e],l;for(l=e+1;l<=t;++l){const c=i[l%s];c.skip||c.stop?a.skip||(n=!1,r.push({start:e%s,end:(l-1)%s,loop:n}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&r.push({start:e%s,end:o%s,loop:n}),r}function gm(i,e){const t=i.points,n=i.options.spanGaps,s=t.length;if(!s)return[];const r=!!i._loop,{start:o,end:a}=pm(t,s,r,n);if(n===!0)return dl(i,[{start:o,end:a,loop:r}],t,e);const l=a<o?a+s:a,c=!!i._fullLoop&&o===0&&a===s-1;return dl(i,mm(t,o,l,c),t,e)}function dl(i,e,t,n){return!n||!n.setContext||!t?e:bm(i,e,t,n)}function bm(i,e,t,n){const s=i._chart.getContext(),r=ul(i.options),{_datasetIndex:o,options:{spanGaps:a}}=i,l=t.length,c=[];let d=r,u=e[0].start,h=u;function f(b,g,w,p){const E=a?-1:1;if(b!==g){for(b+=l;t[b%l].skip;)b-=E;for(;t[g%l].skip;)g+=E;b%l!==g%l&&(c.push({start:b%l,end:g%l,loop:w,style:p}),d=p,u=g%l)}}for(const b of e){u=a?u:b.start;let g=t[u%l],w;for(h=u+1;h<=b.end;h++){const p=t[h%l];w=ul(n.setContext(Gt(s,{type:"segment",p0:g,p1:p,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:o}))),ym(w,d)&&f(u,h-1,b.loop,d),g=p,d=w}u<h-1&&f(u,h-1,b.loop,d)}return c}function ul(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function ym(i,e){if(!e)return!1;const t=[],n=function(s,r){return Uo(r)?(t.includes(r)||t.push(r),t.indexOf(r)):r};return JSON.stringify(i,n)!==JSON.stringify(e,n)}/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class vm{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,s){const r=t.listeners[s],o=t.duration;r.forEach(a=>a({chart:e,initial:t.initial,numSteps:o,currentStep:Math.min(n-t.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Id.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,s)=>{if(!n.running||!n.items.length)return;const r=n.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,n,e,"progress")),r.length||(n.running=!1,this._notify(s,n,e,"complete"),n.initial=!1),t+=r.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((n,s)=>Math.max(n,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const n=t.items;let s=n.length-1;for(;s>=0;--s)n[s].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var gt=new vm;const hl="transparent",wm={boolean(i,e,t){return t>.5?e:i},color(i,e,t){const n=tl(i||hl),s=n.valid&&tl(e||hl);return s&&s.valid?s.mix(n,t).hexString():e},number(i,e,t){return i+(e-i)*t}};class xm{constructor(e,t,n,s){const r=t[n];s=zi([e.to,s,r,e.from]);const o=zi([e.from,r,s]);this._active=!0,this._fn=e.fn||wm[e.type||typeof o],this._easing=ri[e.easing]||ri.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);const s=this._target[this._prop],r=n-this._start,o=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=zi([e.to,t,s,e.from]),this._from=zi([e.from,s,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,n=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||t<n),!this._active){this._target[s]=a,this._notify(!0);return}if(t<0){this._target[s]=r;return}l=t/n%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){const t=e?"res":"rej",n=this._promises||[];for(let s=0;s<n.length;s++)n[s][t]()}}class Vd{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!J(e))return;const t=Object.keys(pe.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!J(r))return;const o={};for(const a of t)o[a]=r[a];(ge(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!n.has(a))&&n.set(a,o)})})}_animateOptions(e,t){const n=t.options,s=Em(e,n);if(!s)return[];const r=this._createAnimations(s,n);return n.$shared&&km(e.options.$animations,n).then(()=>{e.options=n},()=>{}),r}_createAnimations(e,t){const n=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(t),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,t));continue}const d=t[c];let u=r[c];const h=n.get(c);if(u)if(h&&u.active()){u.update(h,d,a);continue}else u.cancel();if(!h||!h.duration){e[c]=d;continue}r[c]=u=new xm(h,e,c,d),s.push(u)}return s}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const n=this._createAnimations(e,t);if(n.length)return gt.add(this._chart,n),!0}}function km(i,e){const t=[],n=Object.keys(e);for(let s=0;s<n.length;s++){const r=i[n[s]];r&&r.active()&&t.push(r.wait())}return Promise.all(t)}function Em(i,e){if(!e)return;let t=i.options;if(!t){i.options=e;return}return t.$shared&&(i.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function fl(i,e){const t=i&&i.options||{},n=t.reverse,s=t.min===void 0?e:0,r=t.max===void 0?e:0;return{start:n?r:s,end:n?s:r}}function Sm(i,e,t){if(t===!1)return!1;const n=fl(i,t),s=fl(e,t);return{top:s.end,right:n.end,bottom:s.start,left:n.start}}function Tm(i){let e,t,n,s;return J(i)?(e=i.top,t=i.right,n=i.bottom,s=i.left):e=t=n=s=i,{top:e,right:t,bottom:n,left:s,disabled:i===!1}}function Kd(i,e){const t=[],n=i._getSortedDatasetMetas(e);let s,r;for(s=0,r=n.length;s<r;++s)t.push(n[s].index);return t}function pl(i,e,t,n={}){const s=i.keys,r=n.mode==="single";let o,a,l,c;if(e===null)return;let d=!1;for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===t){if(d=!0,n.all)continue;break}c=i.values[l],Ce(c)&&(r||e===0||vn(e)===vn(c))&&(e+=c)}return!d&&!n.all?0:e}function _m(i,e){const{iScale:t,vScale:n}=e,s=t.axis==="x"?"x":"y",r=n.axis==="x"?"x":"y",o=Object.keys(i),a=new Array(o.length);let l,c,d;for(l=0,c=o.length;l<c;++l)d=o[l],a[l]={[s]:d,[r]:i[d]};return a}function cr(i,e){const t=i&&i.options.stacked;return t||t===void 0&&e.stack!==void 0}function Cm(i,e,t){return`${i.id}.${e.id}.${t.stack||t.type}`}function Im(i){const{min:e,max:t,minDefined:n,maxDefined:s}=i.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:s?t:Number.POSITIVE_INFINITY}}function Mm(i,e,t){const n=i[e]||(i[e]={});return n[t]||(n[t]={})}function ml(i,e,t,n){for(const s of e.getMatchingVisibleMetas(n).reverse()){const r=i[s.index];if(t&&r>0||!t&&r<0)return s.index}return null}function gl(i,e){const{chart:t,_cachedMeta:n}=i,s=t._stacks||(t._stacks={}),{iScale:r,vScale:o,index:a}=n,l=r.axis,c=o.axis,d=Cm(r,o,n),u=e.length;let h;for(let f=0;f<u;++f){const b=e[f],{[l]:g,[c]:w}=b,p=b._stacks||(b._stacks={});h=p[c]=Mm(s,d,g),h[a]=w,h._top=ml(h,o,!0,n.type),h._bottom=ml(h,o,!1,n.type);const E=h._visualValues||(h._visualValues={});E[a]=w}}function dr(i,e){const t=i.scales;return Object.keys(t).filter(n=>t[n].axis===e).shift()}function Am(i,e){return Gt(i,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Lm(i,e,t){return Gt(i,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function jn(i,e){const t=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){e=e||i._parsed;for(const s of e){const r=s._stacks;if(!r||r[n]===void 0||r[n][t]===void 0)return;delete r[n][t],r[n]._visualValues!==void 0&&r[n]._visualValues[t]!==void 0&&delete r[n]._visualValues[t]}}}const ur=i=>i==="reset"||i==="none",bl=(i,e)=>e?i:Object.assign({},i),Nm=(i,e,t)=>i&&!e.hidden&&e._stacked&&{keys:Kd(t,!0),values:null};class li{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=cr(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&jn(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,n=this.getDataset(),s=(u,h,f,b)=>u==="x"?h:u==="r"?b:f,r=t.xAxisID=G(n.xAxisID,dr(e,"x")),o=t.yAxisID=G(n.yAxisID,dr(e,"y")),a=t.rAxisID=G(n.rAxisID,dr(e,"r")),l=t.indexAxis,c=t.iAxisID=s(l,r,o,a),d=t.vAxisID=s(l,o,r,a);t.xScale=this.getScaleForId(r),t.yScale=this.getScaleForId(o),t.rScale=this.getScaleForId(a),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Qa(this._data,this),e._stacked&&jn(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),n=this._data;if(J(t)){const s=this._cachedMeta;this._data=_m(t,s)}else if(n!==t){if(n){Qa(n,this);const s=this._cachedMeta;jn(s),s._parsed=[]}t&&Object.isExtensible(t)&&pp(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,n=this.getDataset();let s=!1;this._dataCheck();const r=t._stacked;t._stacked=cr(t.vScale,t),t.stack!==n.stack&&(s=!0,jn(t),t.stack=n.stack),this._resyncElements(e),(s||r!==t._stacked)&&(gl(this,t._parsed),t._stacked=cr(t.vScale,t))}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:n,_data:s}=this,{iScale:r,_stacked:o}=n,a=r.axis;let l=e===0&&t===s.length?!0:n._sorted,c=e>0&&n._parsed[e-1],d,u,h;if(this._parsing===!1)n._parsed=s,n._sorted=!0,h=s;else{ge(s[e])?h=this.parseArrayData(n,s,e,t):J(s[e])?h=this.parseObjectData(n,s,e,t):h=this.parsePrimitiveData(n,s,e,t);const f=()=>u[a]===null||c&&u[a]<c[a];for(d=0;d<t;++d)n._parsed[d+e]=u=h[d],l&&(f()&&(l=!1),c=u);n._sorted=l}o&&gl(this,h)}parsePrimitiveData(e,t,n,s){const{iScale:r,vScale:o}=e,a=r.axis,l=o.axis,c=r.getLabels(),d=r===o,u=new Array(s);let h,f,b;for(h=0,f=s;h<f;++h)b=h+n,u[h]={[a]:d||r.parse(c[b],b),[l]:o.parse(t[b],b)};return u}parseArrayData(e,t,n,s){const{xScale:r,yScale:o}=e,a=new Array(s);let l,c,d,u;for(l=0,c=s;l<c;++l)d=l+n,u=t[d],a[l]={x:r.parse(u[0],d),y:o.parse(u[1],d)};return a}parseObjectData(e,t,n,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let d,u,h,f;for(d=0,u=s;d<u;++d)h=d+n,f=t[h],c[d]={x:r.parse(ms(f,a),h),y:o.parse(ms(f,l),h)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){const s=this.chart,r=this._cachedMeta,o=t[e.axis],a={keys:Kd(s,!0),values:t._stacks[e.axis]._visualValues};return pl(a,o,r.index,{mode:n})}updateRangeFromParsed(e,t,n,s){const r=n[t.axis];let o=r===null?NaN:r;const a=s&&n._stacks[t.axis];s&&a&&(s.values=a,o=pl(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,t){const n=this._cachedMeta,s=n._parsed,r=n._sorted&&e===n.iScale,o=s.length,a=this._getOtherScale(e),l=Nm(t,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:u}=Im(a);let h,f;function b(){f=s[h];const g=f[a.axis];return!Ce(f[e.axis])||d>g||u<g}for(h=0;h<o&&!(!b()&&(this.updateRangeFromParsed(c,e,f,l),r));++h);if(r){for(h=o-1;h>=0;--h)if(!b()){this.updateRangeFromParsed(c,e,f,l);break}}return c}getAllParsedValues(e){const t=this._cachedMeta._parsed,n=[];let s,r,o;for(s=0,r=t.length;s<r;++s)o=t[s][e.axis],Ce(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,n=t.iScale,s=t.vScale,r=this.getParsed(e);return{label:n?""+n.getLabelForValue(r[n.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=Tm(G(this.options.clip,Sm(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,n=this._cachedMeta,s=n.data||[],r=t.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let d;for(n.dataset&&n.dataset.draw(e,r,a,l),d=a;d<a+l;++d){const u=s[d];u.hidden||(u.active&&c?o.push(u):u.draw(e,r))}for(d=0;d<o.length;++d)o[d].draw(e,r)}getStyle(e,t){const n=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=Lm(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=Am(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!t,r.mode=n,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",n){const s=t==="active",r=this._cachedDataOpts,o=e+"-"+t,a=r[o],l=this.enableOptionSharing&&gs(n);if(a)return bl(a,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,e),u=s?[`${e}Hover`,"hover",e,""]:[e,""],h=c.getOptionScopes(this.getDataset(),d),f=Object.keys(pe.elements[e]),b=()=>this.getContext(n,s,t),g=c.resolveNamedOptions(h,f,b,u);return g.$shared&&(g.$shared=l,r[o]=Object.freeze(bl(g,l))),g}_resolveAnimations(e,t,n){const s=this.chart,r=this._cachedDataOpts,o=`animation-${t}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const d=this.chart.config,u=d.datasetAnimationScopeKeys(this._type,t),h=d.getOptionScopes(this.getDataset(),u);l=d.createResolver(h,this.getContext(e,n,t))}const c=new Vd(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||ur(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const n=this.resolveDataElementOptions(e,t),s=this._sharedOptions,r=this.getSharedOptions(n),o=this.includeOptions(t,r)||r!==s;return this.updateSharedOptions(r,t,n),{sharedOptions:r,includeOptions:o}}updateElement(e,t,n,s){ur(s)?Object.assign(e,n):this._resolveAnimations(t,s).update(e,n)}updateSharedOptions(e,t,n){e&&!ur(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,s){e.active=s;const r=this.getStyle(t,s);this._resolveAnimations(t,n,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,t,n){this._setStyle(e,n,"active",!1)}setHoverStyle(e,t,n){this._setStyle(e,n,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,n=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=n.length,r=t.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,t,n=!0){const s=this._cachedMeta,r=s.data,o=e+t;let a;const l=c=>{for(c.length+=t,a=c.length-1;a>=o;a--)c[a]=c[a-t]};for(l(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,t),n&&this.updateElements(r,e,t,"reset")}updateElements(e,t,n,s){}_removeElements(e,t){const n=this._cachedMeta;if(this._parsing){const s=n._parsed.splice(e,t);n._stacked&&jn(n,s)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,n,s]=e;this[t](n,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const n=arguments.length-2;n&&this._sync(["_insertElements",e,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}L(li,"defaults",{}),L(li,"datasetElementType",null),L(li,"dataElementType",null);class ci extends li{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:n,data:s=[],_dataset:r}=t,o=this.chart._animationsDisabled;let{start:a,count:l}=yp(t,s,o);this._drawStart=a,this._drawCount=l,vp(t)&&(a=0,l=s.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!r._decimated,n.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,t,n,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:u}=this._getSharedOptions(t,s),h=o.axis,f=a.axis,{spanGaps:b,segment:g}=this.options,w=pi(b)?b:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||r||s==="none",E=t+n,x=e.length;let m=t>0&&this.getParsed(t-1);for(let _=0;_<x;++_){const A=e[_],N=p?A:{};if(_<t||_>=E){N.skip=!0;continue}const M=this.getParsed(_),k=fe(M[f]),F=N[h]=o.getPixelForValue(M[h],_),R=N[f]=r||k?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,M,l):M[f],_);N.skip=isNaN(F)||isNaN(R)||k,N.stop=_>0&&Math.abs(M[h]-m[h])>w,g&&(N.parsed=M,N.raw=c.data[_]),u&&(N.options=d||this.resolveDataElementOptions(_,A.active?"active":s)),p||this.updateElement(A,_,N,s),m=M}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,s=e.data||[];if(!s.length)return n;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(n,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}L(ci,"id","line"),L(ci,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),L(ci,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Nt(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Wo{constructor(e){L(this,"options");this.options=e||{}}static override(e){Object.assign(Wo.prototype,e)}init(){}formats(){return Nt()}parse(){return Nt()}format(){return Nt()}add(){return Nt()}diff(){return Nt()}startOf(){return Nt()}endOf(){return Nt()}}var Dm={_date:Wo};function Om(i,e,t,n){const{controller:s,data:r,_sorted:o}=i,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const l=a._reversePixels?hp:Ft;if(n){if(s._sharedOptions){const c=r[0],d=typeof c.getRange=="function"&&c.getRange(e);if(d){const u=l(r,e,t-d),h=l(r,e,t+d);return{lo:u.lo,hi:h.hi}}}}else return l(r,e,t)}return{lo:0,hi:r.length-1}}function Ei(i,e,t,n,s){const r=i.getSortedVisibleDatasetMetas(),o=t[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:d}=r[a],{lo:u,hi:h}=Om(r[a],e,o,s);for(let f=u;f<=h;++f){const b=d[f];b.skip||n(b,c,f)}}}function Bm(i){const e=i.indexOf("x")!==-1,t=i.indexOf("y")!==-1;return function(n,s){const r=e?Math.abs(n.x-s.x):0,o=t?Math.abs(n.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function hr(i,e,t,n,s){const r=[];return!s&&!i.isPointInArea(e)||Ei(i,t,e,function(a,l,c){!s&&!mi(a,i.chartArea,0)||a.inRange(e.x,e.y,n)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function Rm(i,e,t,n){let s=[];function r(o,a,l){const{startAngle:c,endAngle:d}=o.getProps(["startAngle","endAngle"],n),{angle:u}=cp(o,{x:e.x,y:e.y});_d(u,c,d)&&s.push({element:o,datasetIndex:a,index:l})}return Ei(i,t,e,r),s}function Pm(i,e,t,n,s,r){let o=[];const a=Bm(t);let l=Number.POSITIVE_INFINITY;function c(d,u,h){const f=d.inRange(e.x,e.y,s);if(n&&!f)return;const b=d.getCenterPoint(s);if(!(!!r||i.isPointInArea(b))&&!f)return;const w=a(e,b);w<l?(o=[{element:d,datasetIndex:u,index:h}],l=w):w===l&&o.push({element:d,datasetIndex:u,index:h})}return Ei(i,t,e,c),o}function fr(i,e,t,n,s,r){return!r&&!i.isPointInArea(e)?[]:t==="r"&&!n?Rm(i,e,t,s):Pm(i,e,t,n,s,r)}function yl(i,e,t,n,s){const r=[],o=t==="x"?"inXRange":"inYRange";let a=!1;return Ei(i,t,e,(l,c,d)=>{l[o]&&l[o](e[t],s)&&(r.push({element:l,datasetIndex:c,index:d}),a=a||l.inRange(e.x,e.y,s))}),n&&!a?[]:r}var Fm={evaluateInteractionItems:Ei,modes:{index(i,e,t,n){const s=Ot(e,i),r=t.axis||"x",o=t.includeInvisible||!1,a=t.intersect?hr(i,s,r,n,o):fr(i,s,r,!1,n,o),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const d=a[0].index,u=c.data[d];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:d})}),l):[]},dataset(i,e,t,n){const s=Ot(e,i),r=t.axis||"xy",o=t.includeInvisible||!1;let a=t.intersect?hr(i,s,r,n,o):fr(i,s,r,!1,n,o);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let d=0;d<c.length;++d)a.push({element:c[d],datasetIndex:l,index:d})}return a},point(i,e,t,n){const s=Ot(e,i),r=t.axis||"xy",o=t.includeInvisible||!1;return hr(i,s,r,n,o)},nearest(i,e,t,n){const s=Ot(e,i),r=t.axis||"xy",o=t.includeInvisible||!1;return fr(i,s,r,t.intersect,n,o)},x(i,e,t,n){const s=Ot(e,i);return yl(i,s,"x",t.intersect,n)},y(i,e,t,n){const s=Ot(e,i);return yl(i,s,"y",t.intersect,n)}}};const Wd=["left","top","right","bottom"];function Hn(i,e){return i.filter(t=>t.pos===e)}function vl(i,e){return i.filter(t=>Wd.indexOf(t.pos)===-1&&t.box.axis===e)}function qn(i,e){return i.sort((t,n)=>{const s=e?n:t,r=e?t:n;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function $m(i){const e=[];let t,n,s,r,o,a;for(t=0,n=(i||[]).length;t<n;++t)s=i[t],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:t,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function zm(i){const e={};for(const t of i){const{stack:n,pos:s,stackWeight:r}=t;if(!n||!Wd.includes(s))continue;const o=e[n]||(e[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function Um(i,e){const t=zm(i),{vBoxMaxWidth:n,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=i.length;r<o;++r){a=i[r];const{fullSize:l}=a.box,c=t[a.stack],d=c&&a.stackWeight/c.weight;a.horizontal?(a.width=d?d*n:l&&e.availableWidth,a.height=s):(a.width=n,a.height=d?d*s:l&&e.availableHeight)}return t}function jm(i){const e=$m(i),t=qn(e.filter(c=>c.box.fullSize),!0),n=qn(Hn(e,"left"),!0),s=qn(Hn(e,"right")),r=qn(Hn(e,"top"),!0),o=qn(Hn(e,"bottom")),a=vl(e,"x"),l=vl(e,"y");return{fullSize:t,leftAndTop:n.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:Hn(e,"chartArea"),vertical:n.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function wl(i,e,t,n){return Math.max(i[t],e[t])+Math.max(i[n],e[n])}function Gd(i,e){i.top=Math.max(i.top,e.top),i.left=Math.max(i.left,e.left),i.bottom=Math.max(i.bottom,e.bottom),i.right=Math.max(i.right,e.right)}function Hm(i,e,t,n){const{pos:s,box:r}=t,o=i.maxPadding;if(!J(s)){t.size&&(i[s]-=t.size);const u=n[t.stack]||{size:0,count:1};u.size=Math.max(u.size,t.horizontal?r.height:r.width),t.size=u.size/u.count,i[s]+=t.size}r.getPadding&&Gd(o,r.getPadding());const a=Math.max(0,e.outerWidth-wl(o,i,"left","right")),l=Math.max(0,e.outerHeight-wl(o,i,"top","bottom")),c=a!==i.w,d=l!==i.h;return i.w=a,i.h=l,t.horizontal?{same:c,other:d}:{same:d,other:c}}function qm(i){const e=i.maxPadding;function t(n){const s=Math.max(e[n]-i[n],0);return i[n]+=s,s}i.y+=t("top"),i.x+=t("left"),t("right"),t("bottom")}function Vm(i,e){const t=e.maxPadding;function n(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],t[o])}),r}return n(i?["left","right"]:["top","bottom"])}function Xn(i,e,t,n){const s=[];let r,o,a,l,c,d;for(r=0,o=i.length,c=0;r<o;++r){a=i[r],l=a.box,l.update(a.width||e.w,a.height||e.h,Vm(a.horizontal,e));const{same:u,other:h}=Hm(e,t,a,n);c|=u&&s.length,d=d||h,l.fullSize||s.push(a)}return c&&Xn(s,e,t,n)||d}function Hi(i,e,t,n,s){i.top=t,i.left=e,i.right=e+n,i.bottom=t+s,i.width=n,i.height=s}function xl(i,e,t,n){const s=t.padding;let{x:r,y:o}=e;for(const a of i){const l=a.box,c=n[a.stack]||{count:1,placed:0,weight:1},d=a.stackWeight/c.weight||1;if(a.horizontal){const u=e.w*d,h=c.size||l.height;gs(c.start)&&(o=c.start),l.fullSize?Hi(l,s.left,o,t.outerWidth-s.right-s.left,h):Hi(l,e.left+c.placed,o,u,h),c.start=o,c.placed+=u,o=l.bottom}else{const u=e.h*d,h=c.size||l.width;gs(c.start)&&(r=c.start),l.fullSize?Hi(l,r,s.top,h,t.outerHeight-s.bottom-s.top):Hi(l,r,e.top+c.placed,h,u),c.start=r,c.placed+=u,r=l.right}}e.x=r,e.y=o}var Ve={addBox(i,e){i.boxes||(i.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},i.boxes.push(e)},removeBox(i,e){const t=i.boxes?i.boxes.indexOf(e):-1;t!==-1&&i.boxes.splice(t,1)},configure(i,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(i,e,t,n){if(!i)return;const s=Ge(i.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(t-s.height,0),a=jm(i.boxes),l=a.vertical,c=a.horizontal;te(i.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const d=l.reduce((g,w)=>w.box.options&&w.box.options.display===!1?g:g+1,0)||1,u=Object.freeze({outerWidth:e,outerHeight:t,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),h=Object.assign({},s);Gd(h,Ge(n));const f=Object.assign({maxPadding:h,w:r,h:o,x:s.left,y:s.top},s),b=Um(l.concat(c),u);Xn(a.fullSize,f,u,b),Xn(l,f,u,b),Xn(c,f,u,b)&&Xn(l,f,u,b),qm(f),xl(a.leftAndTop,f,u,b),f.x+=f.w,f.y+=f.h,xl(a.rightAndBottom,f,u,b),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},te(a.chartArea,g=>{const w=g.box;Object.assign(w,i.chartArea),w.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Yd{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,s){return t=Math.max(0,t||e.width),n=n||e.height,{width:t,height:Math.max(0,s?Math.floor(t/s):n)}}isAttached(e){return!0}updateConfig(e){}}class Km extends Yd{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const ss="$chartjs",Wm={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},kl=i=>i===null||i==="";function Gm(i,e){const t=i.style,n=i.getAttribute("height"),s=i.getAttribute("width");if(i[ss]={initial:{height:n,width:s,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",kl(s)){const r=ll(i,"width");r!==void 0&&(i.width=r)}if(kl(n))if(i.style.height==="")i.height=i.width/(e||2);else{const r=ll(i,"height");r!==void 0&&(i.height=r)}return i}const Jd=lm?{passive:!0}:!1;function Ym(i,e,t){i&&i.addEventListener(e,t,Jd)}function Jm(i,e,t){i&&i.canvas&&i.canvas.removeEventListener(e,t,Jd)}function Xm(i,e){const t=Wm[i.type]||i.type,{x:n,y:s}=Ot(i,e);return{type:t,chart:e,native:i,x:n!==void 0?n:null,y:s!==void 0?s:null}}function vs(i,e){for(const t of i)if(t===e||t.contains(e))return!0}function Qm(i,e,t){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||vs(a.addedNodes,n),o=o&&!vs(a.removedNodes,n);o&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}function Zm(i,e,t){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||vs(a.removedNodes,n),o=o&&!vs(a.addedNodes,n);o&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}const bi=new Map;let El=0;function Xd(){const i=window.devicePixelRatio;i!==El&&(El=i,bi.forEach((e,t)=>{t.currentDevicePixelRatio!==i&&e()}))}function eg(i,e){bi.size||window.addEventListener("resize",Xd),bi.set(i,e)}function tg(i){bi.delete(i),bi.size||window.removeEventListener("resize",Xd)}function ng(i,e,t){const n=i.canvas,s=n&&Ko(n);if(!s)return;const r=Md((a,l)=>{const c=s.clientWidth;t(a,l),c<s.clientWidth&&t()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||r(c,d)});return o.observe(s),eg(i,r),o}function pr(i,e,t){t&&t.disconnect(),e==="resize"&&tg(i)}function ig(i,e,t){const n=i.canvas,s=Md(r=>{i.ctx!==null&&t(Xm(r,i))},i);return Ym(n,e,s),s}class sg extends Yd{acquireContext(e,t){const n=e&&e.getContext&&e.getContext("2d");return n&&n.canvas===e?(Gm(e,t),n):null}releaseContext(e){const t=e.canvas;if(!t[ss])return!1;const n=t[ss].initial;["height","width"].forEach(r=>{const o=n[r];fe(o)?t.removeAttribute(r):t.setAttribute(r,o)});const s=n.style||{};return Object.keys(s).forEach(r=>{t.style[r]=s[r]}),t.width=t.width,delete t[ss],!0}addEventListener(e,t,n){this.removeEventListener(e,t);const s=e.$proxies||(e.$proxies={}),o={attach:Qm,detach:Zm,resize:ng}[t]||ig;s[t]=o(e,t,n)}removeEventListener(e,t){const n=e.$proxies||(e.$proxies={}),s=n[t];if(!s)return;({attach:pr,detach:pr,resize:pr}[t]||Jm)(e,t,s),n[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,s){return am(e,t,n,s)}isAttached(e){const t=e&&Ko(e);return!!(t&&t.isConnected)}}function rg(i){return!Vo()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Km:sg}class kt{constructor(){L(this,"x");L(this,"y");L(this,"active",!1);L(this,"options");L(this,"$animations")}tooltipPosition(e){const{x:t,y:n}=this.getProps(["x","y"],e);return{x:t,y:n}}hasValue(){return pi(this.x)&&pi(this.y)}getProps(e,t){const n=this.$animations;if(!t||!n)return this;const s={};return e.forEach(r=>{s[r]=n[r]&&n[r].active()?n[r]._to:this[r]}),s}}L(kt,"defaults",{}),L(kt,"defaultRoutes");function og(i,e){const t=i.options.ticks,n=ag(i),s=Math.min(t.maxTicksLimit||n,n),r=t.major.enabled?cg(e):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return dg(e,c,r,o/s),c;const d=lg(r,e,s);if(o>0){let u,h;const f=o>1?Math.round((l-a)/(o-1)):null;for(qi(e,c,d,fe(f)?0:a-f,a),u=0,h=o-1;u<h;u++)qi(e,c,d,r[u],r[u+1]);return qi(e,c,d,l,fe(f)?e.length:l+f),c}return qi(e,c,d),c}function ag(i){const e=i.options.offset,t=i._tickSize(),n=i._length/t+(e?0:1),s=i._maxLength/t;return Math.floor(Math.min(n,s))}function lg(i,e,t){const n=ug(i),s=e.length/t;if(!n)return Math.max(s,1);const r=rp(n);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function cg(i){const e=[];let t,n;for(t=0,n=i.length;t<n;t++)i[t].major&&e.push(t);return e}function dg(i,e,t,n){let s=0,r=t[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===r&&(e.push(i[o]),s++,r=t[s*n])}function qi(i,e,t,n,s){const r=G(n,0),o=Math.min(G(s,i.length),i.length);let a=0,l,c,d;for(t=Math.ceil(t),s&&(l=s-n,t=l/Math.floor(l/t)),d=r;d<0;)a++,d=Math.round(r+a*t);for(c=Math.max(r,0);c<o;c++)c===d&&(e.push(i[c]),a++,d=Math.round(r+a*t))}function ug(i){const e=i.length;let t,n;if(e<2)return!1;for(n=i[0],t=1;t<e;++t)if(i[t]-i[t-1]!==n)return!1;return n}const hg=i=>i==="left"?"right":i==="right"?"left":i,Sl=(i,e,t)=>e==="top"||e==="left"?i[e]+t:i[e]-t,Tl=(i,e)=>Math.min(e||i,i);function _l(i,e){const t=[],n=i.length/e,s=i.length;let r=0;for(;r<s;r+=n)t.push(i[Math.floor(r)]);return t}function fg(i,e,t){const n=i.ticks.length,s=Math.min(e,n-1),r=i._startPixel,o=i._endPixel,a=1e-6;let l=i.getPixelForTick(s),c;if(!(t&&(n===1?c=Math.max(l-r,o-l):e===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function pg(i,e){te(i,t=>{const n=t.gc,s=n.length/2;let r;if(s>e){for(r=0;r<s;++r)delete t.data[n[r]];n.splice(0,s)}})}function Vn(i){return i.drawTicks?i.tickLength:0}function Cl(i,e){if(!i.display)return 0;const t=Te(i.font,e),n=Ge(i.padding);return(ge(i.text)?i.text.length:1)*t.lineHeight+n.height}function mg(i,e){return Gt(i,{scale:e,type:"scale"})}function gg(i,e,t){return Gt(i,{tick:t,index:e,type:"tick"})}function bg(i,e,t){let n=zo(i);return(t&&e!=="right"||!t&&e==="right")&&(n=hg(n)),n}function yg(i,e,t,n){const{top:s,left:r,bottom:o,right:a,chart:l}=i,{chartArea:c,scales:d}=l;let u=0,h,f,b;const g=o-s,w=a-r;if(i.isHorizontal()){if(f=Se(n,r,a),J(t)){const p=Object.keys(t)[0],E=t[p];b=d[p].getPixelForValue(E)+g-e}else t==="center"?b=(c.bottom+c.top)/2+g-e:b=Sl(i,t,e);h=a-r}else{if(J(t)){const p=Object.keys(t)[0],E=t[p];f=d[p].getPixelForValue(E)-w+e}else t==="center"?f=(c.left+c.right)/2-w+e:f=Sl(i,t,e);b=Se(n,o,s),u=t==="left"?-Ze:Ze}return{titleX:f,titleY:b,maxWidth:h,rotation:u}}class Sn extends kt{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:s}=this;return e=rt(e,Number.POSITIVE_INFINITY),t=rt(t,Number.NEGATIVE_INFINITY),n=rt(n,Number.POSITIVE_INFINITY),s=rt(s,Number.NEGATIVE_INFINITY),{min:rt(e,n),max:rt(t,s),minDefined:Ce(e),maxDefined:Ce(t)}}getMinMax(e){let{min:t,max:n,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:t,max:n};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),s||(t=Math.min(t,o.min)),r||(n=Math.max(n,o.max));return t=r&&t>n?n:t,n=s&&t>n?t:n,{min:rt(t,rt(n,t)),max:rt(n,rt(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){re(this.options.beforeUpdate,[this])}update(e,t,n){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=$p(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?_l(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=og(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){re(this.options.afterUpdate,[this])}beforeSetDimensions(){re(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){re(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),re(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){re(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let n,s,r;for(n=0,s=e.length;n<s;n++)r=e[n],r.label=re(t.callback,[r.value,n,e],this)}afterTickToLabelConversion(){re(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){re(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,n=Tl(this.ticks.length,e.ticks.maxTicksLimit),s=t.minRotation||0,r=t.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!t.display||s>=r||n<=1||!this.isHorizontal()){this.labelRotation=s;return}const d=this._getLabelSizes(),u=d.widest.width,h=d.highest.height,f=qe(this.chart.width-u,0,this.maxWidth);a=e.offset?this.maxWidth/n:f/(n-1),u+6>a&&(a=f/(n-(e.offset?.5:1)),l=this.maxHeight-Vn(e.grid)-t.padding-Cl(e.title,this.chart.options.font),c=Math.sqrt(u*u+h*h),o=lp(Math.min(Math.asin(qe((d.highest.height+6)/a,-1,1)),Math.asin(qe(l/c,-1,1))-Math.asin(qe(h/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){re(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){re(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:n,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Cl(s,t.options.font);if(a?(e.width=this.maxWidth,e.height=Vn(r)+l):(e.height=this.maxHeight,e.width=Vn(r)+l),n.display&&this.ticks.length){const{first:c,last:d,widest:u,highest:h}=this._getLabelSizes(),f=n.padding*2,b=Pt(this.labelRotation),g=Math.cos(b),w=Math.sin(b);if(a){const p=n.mirror?0:w*u.width+g*h.height;e.height=Math.min(this.maxHeight,e.height+p+f)}else{const p=n.mirror?0:g*u.width+w*h.height;e.width=Math.min(this.maxWidth,e.width+p+f)}this._calculatePadding(c,d,w,g)}}this._handleMargins(),a?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,f=0;l?c?(h=s*e.width,f=n*t.height):(h=n*e.height,f=s*t.width):r==="start"?f=t.width:r==="end"?h=e.width:r!=="inner"&&(h=e.width/2,f=t.width/2),this.paddingLeft=Math.max((h-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let d=t.height/2,u=e.height/2;r==="start"?(d=0,u=e.height):r==="end"&&(d=t.height,u=0),this.paddingTop=d+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){re(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)fe(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let n=this.ticks;t<n.length&&(n=_l(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(t/Tl(t,n));let c=0,d=0,u,h,f,b,g,w,p,E,x,m,_;for(u=0;u<t;u+=l){if(b=e[u].label,g=this._resolveTickFontOptions(u),s.font=w=g.string,p=r[w]=r[w]||{data:{},gc:[]},E=g.lineHeight,x=m=0,!fe(b)&&!ge(b))x=il(s,p.data,p.gc,x,b),m=E;else if(ge(b))for(h=0,f=b.length;h<f;++h)_=b[h],!fe(_)&&!ge(_)&&(x=il(s,p.data,p.gc,x,_),m+=E);o.push(x),a.push(m),c=Math.max(x,c),d=Math.max(m,d)}pg(r,t);const A=o.indexOf(c),N=a.indexOf(d),M=k=>({width:o[k]||0,height:a[k]||0});return{first:M(0),last:M(t-1),widest:M(A),highest:M(N),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return up(this._alignToPixels?Lt(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const n=t[e];return n.$context||(n.$context=gg(this.getContext(),e,n))}return this.$context||(this.$context=mg(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=Pt(this.labelRotation),n=Math.abs(Math.cos(t)),s=Math.abs(Math.sin(t)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*n>a*s?a/n:l/s:l*s<a*n?l/n:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,n=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),h=Vn(r),f=[],b=a.setContext(this.getContext()),g=b.display?b.width:0,w=g/2,p=function(U){return Lt(n,U,g)};let E,x,m,_,A,N,M,k,F,R,y,T;if(o==="top")E=p(this.bottom),N=this.bottom-h,k=E-w,R=p(e.top)+w,T=e.bottom;else if(o==="bottom")E=p(this.top),R=e.top,T=p(e.bottom)-w,N=E+w,k=this.top+h;else if(o==="left")E=p(this.right),A=this.right-h,M=E-w,F=p(e.left)+w,y=e.right;else if(o==="right")E=p(this.left),F=e.left,y=p(e.right)-w,A=E+w,M=this.left+h;else if(t==="x"){if(o==="center")E=p((e.top+e.bottom)/2+.5);else if(J(o)){const U=Object.keys(o)[0],B=o[U];E=p(this.chart.scales[U].getPixelForValue(B))}R=e.top,T=e.bottom,N=E+w,k=N+h}else if(t==="y"){if(o==="center")E=p((e.left+e.right)/2);else if(J(o)){const U=Object.keys(o)[0],B=o[U];E=p(this.chart.scales[U].getPixelForValue(B))}A=E-w,M=A-h,F=e.left,y=e.right}const I=G(s.ticks.maxTicksLimit,u),C=Math.max(1,Math.ceil(u/I));for(x=0;x<u;x+=C){const U=this.getContext(x),B=r.setContext(U),$=a.setContext(U),j=B.lineWidth,X=B.color,K=$.dash||[],me=$.dashOffset,ee=B.tickWidth,Ie=B.tickColor,Y=B.tickBorderDash||[],be=B.tickBorderDashOffset;m=fg(this,x,l),m!==void 0&&(_=Lt(n,m,j),c?A=M=F=y=_:N=k=R=T=_,f.push({tx1:A,ty1:N,tx2:M,ty2:k,x1:F,y1:R,x2:y,y2:T,width:j,color:X,borderDash:K,borderDashOffset:me,tickWidth:ee,tickColor:Ie,tickBorderDash:Y,tickBorderDashOffset:be}))}return this._ticksLength=u,this._borderValue=E,f}_computeLabelItems(e){const t=this.axis,n=this.options,{position:s,ticks:r}=n,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:d,mirror:u}=r,h=Vn(n.grid),f=h+d,b=u?-d:f,g=-Pt(this.labelRotation),w=[];let p,E,x,m,_,A,N,M,k,F,R,y,T="middle";if(s==="top")A=this.bottom-b,N=this._getXAxisLabelAlignment();else if(s==="bottom")A=this.top+b,N=this._getXAxisLabelAlignment();else if(s==="left"){const C=this._getYAxisLabelAlignment(h);N=C.textAlign,_=C.x}else if(s==="right"){const C=this._getYAxisLabelAlignment(h);N=C.textAlign,_=C.x}else if(t==="x"){if(s==="center")A=(e.top+e.bottom)/2+f;else if(J(s)){const C=Object.keys(s)[0],U=s[C];A=this.chart.scales[C].getPixelForValue(U)+f}N=this._getXAxisLabelAlignment()}else if(t==="y"){if(s==="center")_=(e.left+e.right)/2-f;else if(J(s)){const C=Object.keys(s)[0],U=s[C];_=this.chart.scales[C].getPixelForValue(U)}N=this._getYAxisLabelAlignment(h).textAlign}t==="y"&&(l==="start"?T="top":l==="end"&&(T="bottom"));const I=this._getLabelSizes();for(p=0,E=a.length;p<E;++p){x=a[p],m=x.label;const C=r.setContext(this.getContext(p));M=this.getPixelForTick(p)+r.labelOffset,k=this._resolveTickFontOptions(p),F=k.lineHeight,R=ge(m)?m.length:1;const U=R/2,B=C.color,$=C.textStrokeColor,j=C.textStrokeWidth;let X=N;o?(_=M,N==="inner"&&(p===E-1?X=this.options.reverse?"left":"right":p===0?X=this.options.reverse?"right":"left":X="center"),s==="top"?c==="near"||g!==0?y=-R*F+F/2:c==="center"?y=-I.highest.height/2-U*F+F:y=-I.highest.height+F/2:c==="near"||g!==0?y=F/2:c==="center"?y=I.highest.height/2-U*F:y=I.highest.height-R*F,u&&(y*=-1),g!==0&&!C.showLabelBackdrop&&(_+=F/2*Math.sin(g))):(A=M,y=(1-R)*F/2);let K;if(C.showLabelBackdrop){const me=Ge(C.backdropPadding),ee=I.heights[p],Ie=I.widths[p];let Y=y-me.top,be=0-me.left;switch(T){case"middle":Y-=ee/2;break;case"bottom":Y-=ee;break}switch(N){case"center":be-=Ie/2;break;case"right":be-=Ie;break;case"inner":p===E-1?be-=Ie:p>0&&(be-=Ie/2);break}K={left:be,top:Y,width:Ie+me.width,height:ee+me.height,color:C.backdropColor}}w.push({label:m,font:k,textOffset:y,options:{rotation:g,color:B,strokeColor:$,strokeWidth:j,textAlign:X,textBaseline:T,translation:[_,A],backdrop:K}})}return w}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-Pt(this.labelRotation))return e==="top"?"left":"right";let s="center";return t.align==="start"?s="left":t.align==="end"?s="right":t.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:n,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,l=o.widest.width;let c,d;return t==="left"?s?(d=this.right+r,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-a,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d=this.left)):t==="right"?s?(d=this.left+r,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+a,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:n,top:s,width:r,height:o}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,s,r,o),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?t.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const t=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(l,c,d)=>{!d.width||!d.color||(n.save(),n.lineWidth=d.width,n.strokeStyle=d.color,n.setLineDash(d.borderDash||[]),n.lineDashOffset=d.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(t.display)for(r=0,o=s.length;r<o;++r){const l=s[r];t.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),t.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:n,grid:s}}=this,r=n.setContext(this.getContext()),o=n.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,u,h;this.isHorizontal()?(c=Lt(e,this.left,o)-o/2,d=Lt(e,this.right,a)+a/2,u=h=l):(u=Lt(e,this.top,o)-o/2,h=Lt(e,this.bottom,a)+a/2,c=d=l),t.save(),t.lineWidth=r.width,t.strokeStyle=r.color,t.beginPath(),t.moveTo(c,u),t.lineTo(d,h),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const n=this.ctx,s=this._computeLabelArea();s&&As(n,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,l=o.font,c=o.label,d=o.textOffset;gi(n,c,0,d,l,a)}s&&Ls(n)}drawTitle(){const{ctx:e,options:{position:t,title:n,reverse:s}}=this;if(!n.display)return;const r=Te(n.font),o=Ge(n.padding),a=n.align;let l=r.lineHeight/2;t==="bottom"||t==="center"||J(t)?(l+=o.bottom,ge(n.text)&&(l+=r.lineHeight*(n.text.length-1))):l+=o.top;const{titleX:c,titleY:d,maxWidth:u,rotation:h}=yg(this,l,t,a);gi(e,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:h,textAlign:bg(a,t,s),textBaseline:"middle",translation:[c,d]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,n=G(e.grid&&e.grid.z,-1),s=G(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Sn.prototype.draw?[{z:t,draw:r=>{this.draw(r)}}]:[{z:n,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:t,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[];let r,o;for(r=0,o=t.length;r<o;++r){const a=t[r];a[n]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return Te(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Vi{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let n;xg(t)&&(n=this.register(t));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,vg(e,o,n),this.override&&pe.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const t=this.items,n=e.id,s=this.scope;n in t&&delete t[n],s&&n in pe[s]&&(delete pe[s][n],this.override&&delete Vt[n])}}function vg(i,e,t){const n=fi(Object.create(null),[t?pe.get(t):{},pe.get(e),i.defaults]);pe.set(e,n),i.defaultRoutes&&wg(e,i.defaultRoutes),i.descriptors&&pe.describe(e,i.descriptors)}function wg(i,e){Object.keys(e).forEach(t=>{const n=t.split("."),s=n.pop(),r=[i].concat(n).join("."),o=e[t].split("."),a=o.pop(),l=o.join(".");pe.route(r,s,l,a)})}function xg(i){return"id"in i&&"defaults"in i}class kg{constructor(){this.controllers=new Vi(li,"datasets",!0),this.elements=new Vi(kt,"elements"),this.plugins=new Vi(Object,"plugins"),this.scales=new Vi(Sn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,n){[...t].forEach(s=>{const r=n||this._getRegistryForType(s);n||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):te(s,o=>{const a=n||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,t,n){const s=Fo(e);re(n["before"+s],[],n),t[e](n),re(n["after"+s],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){const s=t.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+n+".");return s}}var ct=new kg;class Eg{constructor(){this._init=[]}notify(e,t,n,s){t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,t,n);return t==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,t,n,s){s=s||{};for(const r of e){const o=r.plugin,a=o[n],l=[t,s,r.options];if(re(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){fe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const n=e&&e.config,s=G(n.options&&n.options.plugins,{}),r=Sg(n);return s===!1&&!t?[]:_g(e,r,s,t)}_notifyStateChanges(e){const t=this._oldCache||[],n=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(t,n),e,"stop"),this._notify(s(n,t),e,"start")}}function Sg(i){const e={},t=[],n=Object.keys(ct.plugins.items);for(let r=0;r<n.length;r++)t.push(ct.getPlugin(n[r]));const s=i.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];t.indexOf(o)===-1&&(t.push(o),e[o.id]=!0)}return{plugins:t,localIds:e}}function Tg(i,e){return!e&&i===!1?null:i===!0?{}:i}function _g(i,{plugins:e,localIds:t},n,s){const r=[],o=i.getContext();for(const a of e){const l=a.id,c=Tg(n[l],s);c!==null&&r.push({plugin:a,options:Cg(i.config,{plugin:a,local:t[l]},c,o)})}return r}function Cg(i,{plugin:e,local:t},n,s){const r=i.pluginScopeKeys(e),o=i.getOptionScopes(n,r);return t&&e.defaults&&o.push(e.defaults),i.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function fo(i,e){const t=pe.datasets[i]||{};return((e.datasets||{})[i]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function Ig(i,e){let t=i;return i==="_index_"?t=e:i==="_value_"&&(t=e==="x"?"y":"x"),t}function Mg(i,e){return i===e?"_index_":"_value_"}function Il(i){if(i==="x"||i==="y"||i==="r")return i}function Ag(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function po(i,...e){if(Il(i))return i;for(const t of e){const n=t.axis||Ag(t.position)||i.length>1&&Il(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Ml(i,e,t){if(t[e+"AxisID"]===i)return{axis:e}}function Lg(i,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(t.length)return Ml(i,"x",t[0])||Ml(i,"y",t[0])}return{}}function Ng(i,e){const t=Vt[i.type]||{scales:{}},n=e.scales||{},s=fo(i.type,e),r=Object.create(null);return Object.keys(n).forEach(o=>{const a=n[o];if(!J(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=po(o,a,Lg(o,i),pe.scales[a.type]),c=Mg(l,s),d=t.scales||{};r[o]=ii(Object.create(null),[{axis:l},a,d[l],d[c]])}),i.data.datasets.forEach(o=>{const a=o.type||i.type,l=o.indexAxis||fo(a,e),d=(Vt[a]||{}).scales||{};Object.keys(d).forEach(u=>{const h=Ig(u,l),f=o[h+"AxisID"]||h;r[f]=r[f]||Object.create(null),ii(r[f],[{axis:h},n[f],d[u]])})}),Object.keys(r).forEach(o=>{const a=r[o];ii(a,[pe.scales[a.type],pe.scale])}),r}function Qd(i){const e=i.options||(i.options={});e.plugins=G(e.plugins,{}),e.scales=Ng(i,e)}function Zd(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function Dg(i){return i=i||{},i.data=Zd(i.data),Qd(i),i}const Al=new Map,eu=new Set;function Ki(i,e){let t=Al.get(i);return t||(t=e(),Al.set(i,t),eu.add(t)),t}const Kn=(i,e,t)=>{const n=ms(e,t);n!==void 0&&i.add(n)};class Og{constructor(e){this._config=Dg(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Zd(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Qd(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Ki(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return Ki(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return Ki(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,n=this.type;return Ki(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const n=this._scopeCache;let s=n.get(e);return(!s||t)&&(s=new Map,n.set(e,s)),s}getOptionScopes(e,t,n){const{options:s,type:r}=this,o=this._cachedScopes(e,n),a=o.get(t);if(a)return a;const l=new Set;t.forEach(d=>{e&&(l.add(e),d.forEach(u=>Kn(l,e,u))),d.forEach(u=>Kn(l,s,u)),d.forEach(u=>Kn(l,Vt[r]||{},u)),d.forEach(u=>Kn(l,pe,u)),d.forEach(u=>Kn(l,co,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),eu.has(t)&&o.set(t,c),c}chartOptionScopes(){const{options:e,type:t}=this;return[e,Vt[t]||{},pe.datasets[t]||{},{type:t},pe,co]}resolveNamedOptions(e,t,n,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Ll(this._resolverCache,e,s);let l=o;if(Rg(o,t)){r.$shared=!1,n=Ct(n)?n():n;const c=this.createResolver(e,n,a);l=wn(o,n,c)}for(const c of t)r[c]=l[c];return r}createResolver(e,t,n=[""],s){const{resolver:r}=Ll(this._resolverCache,e,n);return J(t)?wn(r,t,void 0,s):r}}function Ll(i,e,t){let n=i.get(e);n||(n=new Map,i.set(e,n));const s=t.join();let r=n.get(s);return r||(r={resolver:jo(e,t),subPrefixes:t.filter(a=>!a.toLowerCase().includes("hover"))},n.set(s,r)),r}const Bg=i=>J(i)&&Object.getOwnPropertyNames(i).some(e=>Ct(i[e]));function Rg(i,e){const{isScriptable:t,isIndexable:n}=Bd(i);for(const s of e){const r=t(s),o=n(s),a=(o||r)&&i[s];if(r&&(Ct(a)||Bg(a))||o&&ge(a))return!0}return!1}var Pg="4.4.7";const Fg=["top","bottom","left","right","chartArea"];function Nl(i,e){return i==="top"||i==="bottom"||Fg.indexOf(i)===-1&&e==="x"}function Dl(i,e){return function(t,n){return t[i]===n[i]?t[e]-n[e]:t[i]-n[i]}}function Ol(i){const e=i.chart,t=e.options.animation;e.notifyPlugins("afterRender"),re(t&&t.onComplete,[i],e)}function $g(i){const e=i.chart,t=e.options.animation;re(t&&t.onProgress,[i],e)}function tu(i){return Vo()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const rs={},Bl=i=>{const e=tu(i);return Object.values(rs).filter(t=>t.canvas===e).pop()};function zg(i,e,t){const n=Object.keys(i);for(const s of n){const r=+s;if(r>=e){const o=i[s];delete i[s],(t>0||r>e)&&(i[r+t]=o)}}}function Ug(i,e,t,n){return!t||i.type==="mouseout"?null:n?e:i}function Wi(i,e,t){return i.options.clip?i[t]:e[t]}function jg(i,e){const{xScale:t,yScale:n}=i;return t&&n?{left:Wi(t,e,"left"),right:Wi(t,e,"right"),top:Wi(n,e,"top"),bottom:Wi(n,e,"bottom")}:e}class Qe{static register(...e){ct.add(...e),Rl()}static unregister(...e){ct.remove(...e),Rl()}constructor(e,t){const n=this.config=new Og(t),s=tu(e),r=Bl(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||rg(s)),this.platform.updateConfig(n);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,d=l&&l.width;if(this.id=Jf(),this.ctx=a,this.canvas=l,this.width=d,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Eg,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=gp(u=>this.update(u),o.resizeDelay||0),this._dataChanges=[],rs[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}gt.listen(this,"complete",Ol),gt.listen(this,"progress",$g),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:s,_aspectRatio:r}=this;return fe(e)?t&&r?r:s?n/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return ct}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():al(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sl(this.canvas,this.ctx),this}stop(){return gt.stop(this),this}resize(e,t){gt.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const n=this.options,s=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,t,r),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,al(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),re(n.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};te(t,(n,s)=>{n.id=s})}buildOrUpdateScales(){const e=this.options,t=e.scales,n=this.scales,s=Object.keys(n).reduce((o,a)=>(o[a]=!1,o),{});let r=[];t&&(r=r.concat(Object.keys(t).map(o=>{const a=t[o],l=po(o,a),c=l==="r",d=l==="x";return{options:a,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),te(r,o=>{const a=o.options,l=a.id,c=po(l,a),d=G(a.type,o.dtype);(a.position===void 0||Nl(a.position,c)!==Nl(o.dposition))&&(a.position=o.dposition),s[l]=!0;let u=null;if(l in n&&n[l].type===d)u=n[l];else{const h=ct.getScale(d);u=new h({id:l,type:d,ctx:this.ctx,chart:this}),n[u.id]=u}u.init(a,e)}),te(s,(o,a)=>{o||delete n[a]}),te(n,o=>{Ve.configure(this,o,o.options),Ve.addBox(this,o)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((s,r)=>s.index-r.index),n>t){for(let s=t;s<n;++s)this._destroyDatasetMeta(s);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Dl("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((n,s)=>{t.filter(r=>r===n._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let n,s;for(this._removeUnreferencedMetasets(),n=0,s=t.length;n<s;n++){const r=t[n];let o=this.getDatasetMeta(n);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=a,o.indexAxis=r.indexAxis||fo(a,this.options),o.order=r.order||0,o.index=n,o.label=""+r.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{const l=ct.getController(a),{datasetElementType:c,dataElementType:d}=pe.datasets[a];Object.assign(l,{dataElementType:ct.getElement(d),datasetElementType:c&&ct.getElement(c)}),o.controller=new l(this,n),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){te(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:u}=this.getDatasetMeta(c),h=!s&&r.indexOf(u)===-1;u.buildOrUpdateElements(h),o=Math.max(+u.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),s||te(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Dl("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){te(this.scales,e=>{Ve.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),n=new Set(e.events);(!Ga(t,n)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:n,start:s,count:r}of t){const o=n==="_removeElements"?-r:r;zg(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,n=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=n(0);for(let r=1;r<t;r++)if(!Ga(s,n(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Ve.update(this,this.width,this.height,e);const t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],te(this.boxes,s=>{n&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,n=this.data.datasets.length;t<n;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,Ct(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const n=this.getDatasetMeta(e),s={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(n.controller._update(t),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(gt.has(this)?this.attached&&!gt.running(this)&&gt.start(this):(this.draw(),Ol({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:n,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,n=[];let s,r;for(s=0,r=t.length;s<r;++s){const o=t[s];(!e||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,n=e._clip,s=!n.disabled,r=jg(e,this.chartArea),o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&As(t,{left:n.left===!1?0:r.left-n.left,right:n.right===!1?this.width:r.right+n.right,top:n.top===!1?0:r.top-n.top,bottom:n.bottom===!1?this.height:r.bottom+n.bottom}),e.controller.draw(),s&&Ls(t),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return mi(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,s){const r=Fm.modes[t];return typeof r=="function"?r(this,e,n,s):[]}getDatasetMeta(e){const t=this.data.datasets[e],n=this._metasets;let s=n.filter(r=>r&&r._dataset===t).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(s)),s}getContext(){return this.$context||(this.$context=Gt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const n=this.getDatasetMeta(e);return typeof n.hidden=="boolean"?!n.hidden:!t.hidden}setDatasetVisibility(e,t){const n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){const s=n?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);gs(t)?(r.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),o.update(r,{visible:n}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),gt.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),sl(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete rs[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,n=(r,o)=>{t.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};te(this.options.events,r=>n(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,n=(l,c)=>{t.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(t.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),n("resize",r),n("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),n("attach",a)},t.isAttached(this.canvas)?a():o()}unbindEvents(){te(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},te(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){const s=n?"set":"remove";let r,o,a,l;for(t==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],n=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!fs(n,t)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){const s=this.options.hover,r=(l,c)=>l.filter(d=>!c.some(u=>d.datasetIndex===u.datasetIndex&&d.index===u.index)),o=r(t,e),a=n?e:r(e,t);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,t){const n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",n,s)===!1)return;const r=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,s),(r||n.changed)&&this.render(),this}_handleEvent(e,t,n){const{_active:s=[],options:r}=this,o=t,a=this._getActiveElements(e,s,n,o),l=np(e),c=Ug(e,this._lastEvent,n,l);n&&(this._lastEvent=null,re(r.onHover,[e,a,this],this),l&&re(r.onClick,[e,a,this],this));const d=!fs(a,s);return(d||t)&&(this._active=a,this._updateHoverStyles(a,s,t)),this._lastEvent=c,d}_getActiveElements(e,t,n,s){if(e.type==="mouseout")return[];if(!n)return t;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}}L(Qe,"defaults",pe),L(Qe,"instances",rs),L(Qe,"overrides",Vt),L(Qe,"registry",ct),L(Qe,"version",Pg),L(Qe,"getChart",Bl);function Rl(){return te(Qe.instances,i=>i._plugins.invalidate())}function nu(i,e,t=e){i.lineCap=G(t.borderCapStyle,e.borderCapStyle),i.setLineDash(G(t.borderDash,e.borderDash)),i.lineDashOffset=G(t.borderDashOffset,e.borderDashOffset),i.lineJoin=G(t.borderJoinStyle,e.borderJoinStyle),i.lineWidth=G(t.borderWidth,e.borderWidth),i.strokeStyle=G(t.borderColor,e.borderColor)}function Hg(i,e,t){i.lineTo(t.x,t.y)}function qg(i){return i.stepped?Mp:i.tension||i.cubicInterpolationMode==="monotone"?Ap:Hg}function iu(i,e,t={}){const n=i.length,{start:s=0,end:r=n-1}=t,{start:o,end:a}=e,l=Math.max(s,o),c=Math.min(r,a),d=s<o&&r<o||s>a&&r>a;return{count:n,start:l,loop:e.loop,ilen:c<l&&!d?n+c-l:c-l}}function Vg(i,e,t,n){const{points:s,options:r}=e,{count:o,start:a,loop:l,ilen:c}=iu(s,t,n),d=qg(r);let{move:u=!0,reverse:h}=n||{},f,b,g;for(f=0;f<=c;++f)b=s[(a+(h?c-f:f))%o],!b.skip&&(u?(i.moveTo(b.x,b.y),u=!1):d(i,g,b,h,r.stepped),g=b);return l&&(b=s[(a+(h?c:0))%o],d(i,g,b,h,r.stepped)),!!l}function Kg(i,e,t,n){const s=e.points,{count:r,start:o,ilen:a}=iu(s,t,n),{move:l=!0,reverse:c}=n||{};let d=0,u=0,h,f,b,g,w,p;const E=m=>(o+(c?a-m:m))%r,x=()=>{g!==w&&(i.lineTo(d,w),i.lineTo(d,g),i.lineTo(d,p))};for(l&&(f=s[E(0)],i.moveTo(f.x,f.y)),h=0;h<=a;++h){if(f=s[E(h)],f.skip)continue;const m=f.x,_=f.y,A=m|0;A===b?(_<g?g=_:_>w&&(w=_),d=(u*d+m)/++u):(x(),i.lineTo(m,_),b=A,u=0,g=w=_),p=_}x()}function mo(i){const e=i.options,t=e.borderDash&&e.borderDash.length;return!i._decimated&&!i._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?Kg:Vg}function Wg(i){return i.stepped?cm:i.tension||i.cubicInterpolationMode==="monotone"?dm:Bt}function Gg(i,e,t,n){let s=e._path;s||(s=e._path=new Path2D,e.path(s,t,n)&&s.closePath()),nu(i,e.options),i.stroke(s)}function Yg(i,e,t,n){const{segments:s,options:r}=e,o=mo(e);for(const a of s)nu(i,r,a.style),i.beginPath(),o(i,e,a,{start:t,end:t+n-1})&&i.closePath(),i.stroke()}const Jg=typeof Path2D=="function";function Xg(i,e,t,n){Jg&&!e.options.segment?Gg(i,e,t,n):Yg(i,e,t,n)}class vt extends kt{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const s=n.spanGaps?this._loop:this._fullLoop;tm(this._points,n,e,s,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=gm(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){const n=this.options,s=e[t],r=this.points,o=qd(this,{property:t,start:s,end:s});if(!o.length)return;const a=[],l=Wg(n);let c,d;for(c=0,d=o.length;c<d;++c){const{start:u,end:h}=o[c],f=r[u],b=r[h];if(f===b){a.push(f);continue}const g=Math.abs((s-f[t])/(b[t]-f[t])),w=l(f,b,g,n.stepped);w[t]=e[t],a.push(w)}return a.length===1?a[0]:a}pathSegment(e,t,n){return mo(this)(e,this,t,n)}path(e,t,n){const s=this.segments,r=mo(this);let o=this._loop;t=t||0,n=n||this.points.length-t;for(const a of s)o&=r(e,this,a,{start:t,end:t+n-1});return!!o}draw(e,t,n,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),Xg(e,this,n,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}L(vt,"id","line"),L(vt,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),L(vt,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),L(vt,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Pl(i,e,t,n){const s=i.options,{[t]:r}=i.getProps([t],n);return Math.abs(e-r)<s.radius+s.hitRadius}class di extends kt{constructor(t){super();L(this,"parsed");L(this,"skip");L(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(t-o,2)+Math.pow(n-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(t,n){return Pl(this,t,"x",n)}inYRange(t,n){return Pl(this,t,"y",n)}getCenterPoint(t){const{x:n,y:s}=this.getProps(["x","y"],t);return{x:n,y:s}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const s=n&&t.borderWidth||0;return(n+s)*2}draw(t,n){const s=this.options;this.skip||s.radius<.1||!mi(this,n,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,uo(t,s,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}L(di,"id","point"),L(di,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),L(di,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Qg(i,e,t){const n=i.segments,s=i.points,r=e.points,o=[];for(const a of n){let{start:l,end:c}=a;c=Go(l,c,s);const d=go(t,s[l],s[c],a.loop);if(!e.segments){o.push({source:a,target:d,start:s[l],end:s[c]});continue}const u=qd(e,d);for(const h of u){const f=go(t,r[h.start],r[h.end],h.loop),b=Hd(a,s,f);for(const g of b)o.push({source:g,target:h,start:{[t]:Fl(d,f,"start",Math.max)},end:{[t]:Fl(d,f,"end",Math.min)}})}}return o}function go(i,e,t,n){if(n)return;let s=e[i],r=t[i];return i==="angle"&&(s=dt(s),r=dt(r)),{property:i,start:s,end:r}}function Zg(i,e){const{x:t=null,y:n=null}=i||{},s=e.points,r=[];return e.segments.forEach(({start:o,end:a})=>{a=Go(o,a,s);const l=s[o],c=s[a];n!==null?(r.push({x:l.x,y:n}),r.push({x:c.x,y:n})):t!==null&&(r.push({x:t,y:l.y}),r.push({x:t,y:c.y}))}),r}function Go(i,e,t){for(;e>i;e--){const n=t[e];if(!isNaN(n.x)&&!isNaN(n.y))break}return e}function Fl(i,e,t,n){return i&&e?n(i[t],e[t]):i?i[t]:e?e[t]:0}function su(i,e){let t=[],n=!1;return ge(i)?(n=!0,t=i):t=Zg(i,e),t.length?new vt({points:t,options:{tension:0},_loop:n,_fullLoop:n}):null}function $l(i){return i&&i.fill!==!1}function eb(i,e,t){let s=i[e].fill;const r=[e];let o;if(!t)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Ce(s))return s;if(o=i[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function tb(i,e,t){const n=rb(i);if(J(n))return isNaN(n.value)?!1:n;let s=parseFloat(n);return Ce(s)&&Math.floor(s)===s?nb(n[0],e,s,t):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function nb(i,e,t,n){return(i==="-"||i==="+")&&(t=e+t),t===e||t<0||t>=n?!1:t}function ib(i,e){let t=null;return i==="start"?t=e.bottom:i==="end"?t=e.top:J(i)?t=e.getPixelForValue(i.value):e.getBasePixel&&(t=e.getBasePixel()),t}function sb(i,e,t){let n;return i==="start"?n=t:i==="end"?n=e.options.reverse?e.min:e.max:J(i)?n=i.value:n=e.getBaseValue(),n}function rb(i){const e=i.options,t=e.fill;let n=G(t&&t.target,t);return n===void 0&&(n=!!e.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function ob(i){const{scale:e,index:t,line:n}=i,s=[],r=n.segments,o=n.points,a=ab(e,t);a.push(su({x:null,y:e.bottom},n));for(let l=0;l<r.length;l++){const c=r[l];for(let d=c.start;d<=c.end;d++)lb(s,o[d],a)}return new vt({points:s,options:{}})}function ab(i,e){const t=[],n=i.getMatchingVisibleMetas("line");for(let s=0;s<n.length;s++){const r=n[s];if(r.index===e)break;r.hidden||t.unshift(r.dataset)}return t}function lb(i,e,t){const n=[];for(let s=0;s<t.length;s++){const r=t[s],{first:o,last:a,point:l}=cb(r,e,"x");if(!(!l||o&&a)){if(o)n.unshift(l);else if(i.push(l),!a)break}}i.push(...n)}function cb(i,e,t){const n=i.interpolate(e,t);if(!n)return{};const s=n[t],r=i.segments,o=i.points;let a=!1,l=!1;for(let c=0;c<r.length;c++){const d=r[c],u=o[d.start][t],h=o[d.end][t];if(dn(s,u,h)){a=s===u,l=s===h;break}}return{first:a,last:l,point:n}}class ru{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){const{x:s,y:r,radius:o}=this;return t=t||{start:0,end:et},e.arc(s,r,o,t.end,t.start,!0),!n.bounds}interpolate(e){const{x:t,y:n,radius:s}=this,r=e.angle;return{x:t+Math.cos(r)*s,y:n+Math.sin(r)*s,angle:r}}}function db(i){const{chart:e,fill:t,line:n}=i;if(Ce(t))return ub(e,t);if(t==="stack")return ob(i);if(t==="shape")return!0;const s=hb(i);return s instanceof ru?s:su(s,n)}function ub(i,e){const t=i.getDatasetMeta(e);return t&&i.isDatasetVisible(e)?t.dataset:null}function hb(i){return(i.scale||{}).getPointPositionForValue?pb(i):fb(i)}function fb(i){const{scale:e={},fill:t}=i,n=ib(t,e);if(Ce(n)){const s=e.isHorizontal();return{x:s?n:null,y:s?null:n}}return null}function pb(i){const{scale:e,fill:t}=i,n=e.options,s=e.getLabels().length,r=n.reverse?e.max:e.min,o=sb(t,e,r),a=[];if(n.grid.circular){const l=e.getPointPositionForValue(0,r);return new ru({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(e.getPointPositionForValue(l,o));return a}function mr(i,e,t){const n=db(e),{line:s,scale:r,axis:o}=e,a=s.options,l=a.fill,c=a.backgroundColor,{above:d=c,below:u=c}=l||{};n&&s.points.length&&(As(i,t),mb(i,{line:s,target:n,above:d,below:u,area:t,scale:r,axis:o}),Ls(i))}function mb(i,e){const{line:t,target:n,above:s,below:r,area:o,scale:a}=e,l=t._loop?"angle":e.axis;i.save(),l==="x"&&r!==s&&(zl(i,n,o.top),Ul(i,{line:t,target:n,color:s,scale:a,property:l}),i.restore(),i.save(),zl(i,n,o.bottom)),Ul(i,{line:t,target:n,color:r,scale:a,property:l}),i.restore()}function zl(i,e,t){const{segments:n,points:s}=e;let r=!0,o=!1;i.beginPath();for(const a of n){const{start:l,end:c}=a,d=s[l],u=s[Go(l,c,s)];r?(i.moveTo(d.x,d.y),r=!1):(i.lineTo(d.x,t),i.lineTo(d.x,d.y)),o=!!e.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(u.x,t)}i.lineTo(e.first().x,t),i.closePath(),i.clip()}function Ul(i,e){const{line:t,target:n,property:s,color:r,scale:o}=e,a=Qg(t,n,s);for(const{source:l,target:c,start:d,end:u}of a){const{style:{backgroundColor:h=r}={}}=l,f=n!==!0;i.save(),i.fillStyle=h,gb(i,o,f&&go(s,d,u)),i.beginPath();const b=!!t.pathSegment(i,l);let g;if(f){b?i.closePath():jl(i,n,u,s);const w=!!n.pathSegment(i,c,{move:b,reverse:!0});g=b&&w,g||jl(i,n,d,s)}i.closePath(),i.fill(g?"evenodd":"nonzero"),i.restore()}}function gb(i,e,t){const{top:n,bottom:s}=e.chart.chartArea,{property:r,start:o,end:a}=t||{};r==="x"&&(i.beginPath(),i.rect(o,n,a-o,s-n),i.clip())}function jl(i,e,t,n){const s=e.interpolate(t,n);s&&i.lineTo(s.x,s.y)}var ou={id:"filler",afterDatasetsUpdate(i,e,t){const n=(i.data.datasets||[]).length,s=[];let r,o,a,l;for(o=0;o<n;++o)r=i.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof vt&&(l={visible:i.isDatasetVisible(o),index:o,fill:tb(a,o,n),chart:i,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<n;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=eb(s,o,t.propagate))},beforeDraw(i,e,t){const n=t.drawTime==="beforeDraw",s=i.getSortedVisibleDatasetMetas(),r=i.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),n&&a.fill&&mr(i.ctx,a,r))}},beforeDatasetsDraw(i,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s){const r=n[s].$filler;$l(r)&&mr(i.ctx,r,i.chartArea)}},beforeDatasetDraw(i,e,t){const n=e.meta.$filler;!$l(n)||t.drawTime!=="beforeDatasetDraw"||mr(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Hl=(i,e)=>{let{boxHeight:t=e,boxWidth:n=e}=i;return i.usePointStyle&&(t=Math.min(t,e),n=i.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:t,itemHeight:Math.max(e,t)}},bb=(i,e)=>i!==null&&e!==null&&i.datasetIndex===e.datasetIndex&&i.index===e.index;class ql extends kt{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=re(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(n=>e.filter(n,this.chart.data))),e.sort&&(t=t.sort((n,s)=>e.sort(n,s,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const n=e.labels,s=Te(n.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Hl(n,r);let c,d;t.font=s.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(o,r,a,l)+10):(d=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(d,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=s+a;let u=e;r.textAlign="left",r.textBaseline="middle";let h=-1,f=-d;return this.legendItems.forEach((b,g)=>{const w=n+t/2+r.measureText(b.text).width;(g===0||c[c.length-1]+w+2*a>o)&&(u+=d,c[c.length-(g>0?0:1)]=0,f+=d,h++),l[g]={left:0,top:f,row:h,width:w,height:s},c[c.length-1]+=w+a}),u}_fitCols(e,t,n,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=o-e;let u=a,h=0,f=0,b=0,g=0;return this.legendItems.forEach((w,p)=>{const{itemWidth:E,itemHeight:x}=yb(n,t,r,w,s);p>0&&f+x+2*a>d&&(u+=h+a,c.push({width:h,height:f}),b+=h+a,g++,h=f=0),l[p]={left:b,top:f,col:g,width:E,height:x},h=Math.max(h,E),f+=x+a}),u+=h,c.push({width:h,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:s},rtl:r}}=this,o=mn(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Se(n,this.left+s,this.right-this.lineWidths[a]);for(const c of t)a!==c.row&&(a=c.row,l=Se(n,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Se(n,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of t)c.col!==a&&(a=c.col,l=Se(n,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;As(e,this),this._draw(),Ls(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:n,ctx:s}=this,{align:r,labels:o}=e,a=pe.color,l=mn(e.rtl,this.left,this.width),c=Te(o.font),{padding:d}=o,u=c.size,h=u/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:b,boxHeight:g,itemHeight:w}=Hl(o,u),p=function(A,N,M){if(isNaN(b)||b<=0||isNaN(g)||g<0)return;s.save();const k=G(M.lineWidth,1);if(s.fillStyle=G(M.fillStyle,a),s.lineCap=G(M.lineCap,"butt"),s.lineDashOffset=G(M.lineDashOffset,0),s.lineJoin=G(M.lineJoin,"miter"),s.lineWidth=k,s.strokeStyle=G(M.strokeStyle,a),s.setLineDash(G(M.lineDash,[])),o.usePointStyle){const F={radius:g*Math.SQRT2/2,pointStyle:M.pointStyle,rotation:M.rotation,borderWidth:k},R=l.xPlus(A,b/2),y=N+h;Dd(s,F,R,y,o.pointStyleWidth&&b)}else{const F=N+Math.max((u-g)/2,0),R=l.leftForLtr(A,b),y=ai(M.borderRadius);s.beginPath(),Object.values(y).some(T=>T!==0)?ho(s,{x:R,y:F,w:b,h:g,radius:y}):s.rect(R,F,b,g),s.fill(),k!==0&&s.stroke()}s.restore()},E=function(A,N,M){gi(s,M.text,A,N+w/2,c,{strikethrough:M.hidden,textAlign:l.textAlign(M.textAlign)})},x=this.isHorizontal(),m=this._computeTitleHeight();x?f={x:Se(r,this.left+d,this.right-n[0]),y:this.top+d+m,line:0}:f={x:this.left+d,y:Se(r,this.top+m+d,this.bottom-t[0].height),line:0},zd(this.ctx,e.textDirection);const _=w+d;this.legendItems.forEach((A,N)=>{s.strokeStyle=A.fontColor,s.fillStyle=A.fontColor;const M=s.measureText(A.text).width,k=l.textAlign(A.textAlign||(A.textAlign=o.textAlign)),F=b+h+M;let R=f.x,y=f.y;l.setWidth(this.width),x?N>0&&R+F+d>this.right&&(y=f.y+=_,f.line++,R=f.x=Se(r,this.left+d,this.right-n[f.line])):N>0&&y+_>this.bottom&&(R=f.x=R+t[f.line].width+d,f.line++,y=f.y=Se(r,this.top+m+d,this.bottom-t[f.line].height));const T=l.x(R);if(p(T,y,A),R=bp(k,R+b+h,x?R+F:this.right,e.rtl),E(l.x(R),y,A),x)f.x+=F+d;else if(typeof A.text!="string"){const I=c.lineHeight;f.y+=au(A,I)+d}else f.y+=_}),Ud(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,n=Te(t.font),s=Ge(t.padding);if(!t.display)return;const r=mn(e.rtl,this.left,this.width),o=this.ctx,a=t.position,l=n.size/2,c=s.top+l;let d,u=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),d=this.top+c,u=Se(e.align,u,this.right-h);else{const b=this.columnSizes.reduce((g,w)=>Math.max(g,w.height),0);d=c+Se(e.align,this.top,this.bottom-b-e.labels.padding-this._computeTitleHeight())}const f=Se(a,u,u+h);o.textAlign=r.textAlign(zo(a)),o.textBaseline="middle",o.strokeStyle=t.color,o.fillStyle=t.color,o.font=n.string,gi(o,t.text,f,d,n)}_computeTitleHeight(){const e=this.options.title,t=Te(e.font),n=Ge(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,s,r;if(dn(e,this.left,this.right)&&dn(t,this.top,this.bottom)){for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(s=r[n],dn(e,s.left,s.left+s.width)&&dn(t,s.top,s.top+s.height))return this.legendItems[n]}return null}handleEvent(e){const t=this.options;if(!xb(e.type,t))return;const n=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=bb(s,n);s&&!r&&re(t.onLeave,[e,s,this],this),this._hoveredItem=n,n&&!r&&re(t.onHover,[e,n,this],this)}else n&&re(t.onClick,[e,n,this],this)}}function yb(i,e,t,n,s){const r=vb(n,i,e,t),o=wb(s,n,e.lineHeight);return{itemWidth:r,itemHeight:o}}function vb(i,e,t,n){let s=i.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+t.size/2+n.measureText(s).width}function wb(i,e,t){let n=i;return typeof e.text!="string"&&(n=au(e,t)),n}function au(i,e){const t=i.text?i.text.length:0;return e*t}function xb(i,e){return!!((i==="mousemove"||i==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(i==="click"||i==="mouseup"))}var lu={id:"legend",_element:ql,start(i,e,t){const n=i.legend=new ql({ctx:i.ctx,options:t,chart:i});Ve.configure(i,n,t),Ve.addBox(i,n)},stop(i){Ve.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,e,t){const n=i.legend;Ve.configure(i,n,t),n.options=t},afterUpdate(i){const e=i.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(i,e){e.replay||i.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,e,t){const n=e.datasetIndex,s=t.chart;s.isDatasetVisible(n)?(s.hide(n),e.hidden=!0):(s.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const e=i.data.datasets,{labels:{usePointStyle:t,pointStyle:n,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(t?0:void 0),d=Ge(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class cu extends kt{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const s=ge(n.text)?n.text.length:1;this._padding=Ge(n.padding);const r=s*Te(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:n,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,d,u;return this.isHorizontal()?(d=Se(a,n,r),u=t+e,c=r-n):(o.position==="left"?(d=n+e,u=Se(a,s,t),l=we*-.5):(d=r-e,u=Se(a,t,s),l=we*.5),c=s-t),{titleX:d,titleY:u,maxWidth:c,rotation:l}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const n=Te(t.font),r=n.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);gi(e,t.text,0,0,n,{color:t.color,maxWidth:l,rotation:c,textAlign:zo(t.align),textBaseline:"middle",translation:[o,a]})}}function kb(i,e){const t=new cu({ctx:i.ctx,options:e,chart:i});Ve.configure(i,t,e),Ve.addBox(i,t),i.titleBlock=t}var du={id:"title",_element:cu,start(i,e,t){kb(i,t)},stop(i){const e=i.titleBlock;Ve.removeBox(i,e),delete i.titleBlock},beforeUpdate(i,e,t){const n=i.titleBlock;Ve.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Qn={average(i){if(!i.length)return!1;let e,t,n=new Set,s=0,r=0;for(e=0,t=i.length;e<t;++e){const a=i[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();n.add(l.x),s+=l.y,++r}}return r===0||n.size===0?!1:{x:[...n].reduce((a,l)=>a+l)/n.size,y:s/r}},nearest(i,e){if(!i.length)return!1;let t=e.x,n=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=i.length;r<o;++r){const l=i[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=lo(e,c);d<s&&(s=d,a=l)}}if(a){const l=a.tooltipPosition();t=l.x,n=l.y}return{x:t,y:n}}};function lt(i,e){return e&&(ge(e)?Array.prototype.push.apply(i,e):i.push(e)),i}function bt(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function Eb(i,e){const{element:t,datasetIndex:n,index:s}=e,r=i.getDatasetMeta(n).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:i,label:o,parsed:r.getParsed(s),raw:i.data.datasets[n].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:n,element:t}}function Vl(i,e){const t=i.chart.ctx,{body:n,footer:s,title:r}=i,{boxWidth:o,boxHeight:a}=e,l=Te(e.bodyFont),c=Te(e.titleFont),d=Te(e.footerFont),u=r.length,h=s.length,f=n.length,b=Ge(e.padding);let g=b.height,w=0,p=n.reduce((m,_)=>m+_.before.length+_.lines.length+_.after.length,0);if(p+=i.beforeBody.length+i.afterBody.length,u&&(g+=u*c.lineHeight+(u-1)*e.titleSpacing+e.titleMarginBottom),p){const m=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;g+=f*m+(p-f)*l.lineHeight+(p-1)*e.bodySpacing}h&&(g+=e.footerMarginTop+h*d.lineHeight+(h-1)*e.footerSpacing);let E=0;const x=function(m){w=Math.max(w,t.measureText(m).width+E)};return t.save(),t.font=c.string,te(i.title,x),t.font=l.string,te(i.beforeBody.concat(i.afterBody),x),E=e.displayColors?o+2+e.boxPadding:0,te(n,m=>{te(m.before,x),te(m.lines,x),te(m.after,x)}),E=0,t.font=d.string,te(i.footer,x),t.restore(),w+=b.width,{width:w,height:g}}function Sb(i,e){const{y:t,height:n}=e;return t<n/2?"top":t>i.height-n/2?"bottom":"center"}function Tb(i,e,t,n){const{x:s,width:r}=n,o=t.caretSize+t.caretPadding;if(i==="left"&&s+r+o>e.width||i==="right"&&s-r-o<0)return!0}function _b(i,e,t,n){const{x:s,width:r}=t,{width:o,chartArea:{left:a,right:l}}=i;let c="center";return n==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),Tb(c,i,e,t)&&(c="center"),c}function Kl(i,e,t){const n=t.yAlign||e.yAlign||Sb(i,t);return{xAlign:t.xAlign||e.xAlign||_b(i,e,t,n),yAlign:n}}function Cb(i,e){let{x:t,width:n}=i;return e==="right"?t-=n:e==="center"&&(t-=n/2),t}function Ib(i,e,t){let{y:n,height:s}=i;return e==="top"?n+=t:e==="bottom"?n-=s+t:n-=s/2,n}function Wl(i,e,t,n){const{caretSize:s,caretPadding:r,cornerRadius:o}=i,{xAlign:a,yAlign:l}=t,c=s+r,{topLeft:d,topRight:u,bottomLeft:h,bottomRight:f}=ai(o);let b=Cb(e,a);const g=Ib(e,l,c);return l==="center"?a==="left"?b+=c:a==="right"&&(b-=c):a==="left"?b-=Math.max(d,h)+s:a==="right"&&(b+=Math.max(u,f)+s),{x:qe(b,0,n.width-e.width),y:qe(g,0,n.height-e.height)}}function Gi(i,e,t){const n=Ge(t.padding);return e==="center"?i.x+i.width/2:e==="right"?i.x+i.width-n.right:i.x+n.left}function Gl(i){return lt([],bt(i))}function Mb(i,e,t){return Gt(i,{tooltip:e,tooltipItems:t,type:"tooltip"})}function Yl(i,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?i.override(t):i}const uu={beforeTitle:mt,title(i){if(i.length>0){const e=i[0],t=e.chart.data.labels,n=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return t[e.dataIndex]}return""},afterTitle:mt,beforeBody:mt,beforeLabel:mt,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let e=i.dataset.label||"";e&&(e+=": ");const t=i.formattedValue;return fe(t)||(e+=t),e},labelColor(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:mt,afterBody:mt,beforeFooter:mt,footer:mt,afterFooter:mt};function Re(i,e,t,n){const s=i[e].call(t,n);return typeof s>"u"?uu[e].call(t,n):s}class bo extends kt{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,n=this.options.setContext(this.getContext()),s=n.enabled&&t.options.animation&&n.animations,r=new Vd(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=Mb(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:n}=t,s=Re(n,"beforeTitle",this,e),r=Re(n,"title",this,e),o=Re(n,"afterTitle",this,e);let a=[];return a=lt(a,bt(s)),a=lt(a,bt(r)),a=lt(a,bt(o)),a}getBeforeBody(e,t){return Gl(Re(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:n}=t,s=[];return te(e,r=>{const o={before:[],lines:[],after:[]},a=Yl(n,r);lt(o.before,bt(Re(a,"beforeLabel",this,r))),lt(o.lines,Re(a,"label",this,r)),lt(o.after,bt(Re(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,t){return Gl(Re(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:n}=t,s=Re(n,"beforeFooter",this,e),r=Re(n,"footer",this,e),o=Re(n,"afterFooter",this,e);let a=[];return a=lt(a,bt(s)),a=lt(a,bt(r)),a=lt(a,bt(o)),a}_createItems(e){const t=this._active,n=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=t.length;l<c;++l)a.push(Eb(this.chart,t[l]));return e.filter&&(a=a.filter((d,u,h)=>e.filter(d,u,h,n))),e.itemSort&&(a=a.sort((d,u)=>e.itemSort(d,u,n))),te(a,d=>{const u=Yl(e.callbacks,d);s.push(Re(u,"labelColor",this,d)),r.push(Re(u,"labelPointStyle",this,d)),o.push(Re(u,"labelTextColor",this,d))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,t){const n=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Qn[n.position].call(this,s,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const l=this._size=Vl(this,n),c=Object.assign({},a,l),d=Kl(this.chart,n,c),u=Wl(n,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,s){const r=this.getCaretPosition(e,n,s);t.lineTo(r.x1,r.y1),t.lineTo(r.x2,r.y2),t.lineTo(r.x3,r.y3)}getCaretPosition(e,t,n){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:u}=ai(a),{x:h,y:f}=e,{width:b,height:g}=t;let w,p,E,x,m,_;return r==="center"?(m=f+g/2,s==="left"?(w=h,p=w-o,x=m+o,_=m-o):(w=h+b,p=w+o,x=m-o,_=m+o),E=w):(s==="left"?p=h+Math.max(l,d)+o:s==="right"?p=h+b-Math.max(c,u)-o:p=this.caretX,r==="top"?(x=f,m=x-o,w=p-o,E=p+o):(x=f+g,m=x+o,w=p+o,E=p-o),_=x),{x1:w,x2:p,x3:E,y1:x,y2:m,y3:_}}drawTitle(e,t,n){const s=this.title,r=s.length;let o,a,l;if(r){const c=mn(n.rtl,this.x,this.width);for(e.x=Gi(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline="middle",o=Te(n.titleFont),a=n.titleSpacing,t.fillStyle=n.titleColor,t.font=o.string,l=0;l<r;++l)t.fillText(s[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===r&&(e.y+=n.titleMarginBottom-a)}}_drawColorBox(e,t,n,s,r){const o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=r,d=Te(r.bodyFont),u=Gi(this,"left",r),h=s.x(u),f=l<d.lineHeight?(d.lineHeight-l)/2:0,b=t.y+f;if(r.usePointStyle){const g={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},w=s.leftForLtr(h,c)+c/2,p=b+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,uo(e,g,w,p),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,uo(e,g,w,p)}else{e.lineWidth=J(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const g=s.leftForLtr(h,c),w=s.leftForLtr(s.xPlus(h,1),c-2),p=ai(o.borderRadius);Object.values(p).some(E=>E!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,ho(e,{x:g,y:b,w:c,h:l,radius:p}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),ho(e,{x:w,y:b+1,w:c-2,h:l-2,radius:p}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(g,b,c,l),e.strokeRect(g,b,c,l),e.fillStyle=o.backgroundColor,e.fillRect(w,b+1,c-2,l-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:d}=n,u=Te(n.bodyFont);let h=u.lineHeight,f=0;const b=mn(n.rtl,this.x,this.width),g=function(M){t.fillText(M,b.x(e.x+f),e.y+h/2),e.y+=h+r},w=b.textAlign(o);let p,E,x,m,_,A,N;for(t.textAlign=o,t.textBaseline="middle",t.font=u.string,e.x=Gi(this,w,n),t.fillStyle=n.bodyColor,te(this.beforeBody,g),f=a&&w!=="right"?o==="center"?c/2+d:c+2+d:0,m=0,A=s.length;m<A;++m){for(p=s[m],E=this.labelTextColors[m],t.fillStyle=E,te(p.before,g),x=p.lines,a&&x.length&&(this._drawColorBox(t,e,m,b,n),h=Math.max(u.lineHeight,l)),_=0,N=x.length;_<N;++_)g(x[_]),h=u.lineHeight;te(p.after,g)}f=0,h=u.lineHeight,te(this.afterBody,g),e.y-=r}drawFooter(e,t,n){const s=this.footer,r=s.length;let o,a;if(r){const l=mn(n.rtl,this.x,this.width);for(e.x=Gi(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=l.textAlign(n.footerAlign),t.textBaseline="middle",o=Te(n.footerFont),t.fillStyle=n.footerColor,t.font=o.string,a=0;a<r;++a)t.fillText(s[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+n.footerSpacing}}drawBackground(e,t,n,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:d}=n,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:b}=ai(s.cornerRadius);t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.beginPath(),t.moveTo(a+u,l),o==="top"&&this.drawCaret(e,t,n,s),t.lineTo(a+c-h,l),t.quadraticCurveTo(a+c,l,a+c,l+h),o==="center"&&r==="right"&&this.drawCaret(e,t,n,s),t.lineTo(a+c,l+d-b),t.quadraticCurveTo(a+c,l+d,a+c-b,l+d),o==="bottom"&&this.drawCaret(e,t,n,s),t.lineTo(a+f,l+d),t.quadraticCurveTo(a,l+d,a,l+d-f),o==="center"&&r==="left"&&this.drawCaret(e,t,n,s),t.lineTo(a,l+u),t.quadraticCurveTo(a,l,a+u,l),t.closePath(),t.fill(),s.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,n=this.$animations,s=n&&n.x,r=n&&n.y;if(s||r){const o=Qn[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Vl(this,e),l=Object.assign({},o,this._size),c=Kl(t,e,l),d=Wl(e,l,c,t);(s._to!==d.x||r._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(t);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=Ge(t.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&a&&(e.save(),e.globalAlpha=n,this.drawBackground(r,e,s,t),zd(e,t.textDirection),r.y+=o.top,this.drawTitle(r,e,t),this.drawBody(r,e,t),this.drawFooter(r,e,t),Ud(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const n=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!fs(n,s),o=this._positionChanged(s,t);(r||o)&&(this._active=s,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,t,n),a=this._positionChanged(o,e),l=t||!fs(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),l}_getActiveElements(e,t,n,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return t.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,r.mode,r,n);return r.reverse&&o.reverse(),o}_positionChanged(e,t){const{caretX:n,caretY:s,options:r}=this,o=Qn[r.position].call(this,e,t);return o!==!1&&(n!==o.x||s!==o.y)}}L(bo,"positioners",Qn);var hu={id:"tooltip",_element:bo,positioners:Qn,afterInit(i,e,t){t&&(i.tooltip=new bo({chart:i,options:t}))},beforeUpdate(i,e,t){i.tooltip&&i.tooltip.initialize(t)},reset(i,e,t){i.tooltip&&i.tooltip.initialize(t)},afterDraw(i){const e=i.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(i.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",t)}},afterEvent(i,e){if(i.tooltip){const t=e.replay;i.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,e)=>e.bodyFont.size,boxWidth:(i,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:uu},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const Ab=(i,e,t,n)=>(typeof e=="string"?(t=i.push(e)-1,n.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function Lb(i,e,t,n){const s=i.indexOf(e);if(s===-1)return Ab(i,e,t,n);const r=i.lastIndexOf(e);return s!==r?t:s}const Nb=(i,e)=>i===null?null:qe(Math.round(i),0,e);function Jl(i){const e=this.getLabels();return i>=0&&i<e.length?e[i]:i}class ws extends Sn{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const n=this.getLabels();for(const{index:s,label:r}of t)n[s]===r&&n.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(fe(e))return null;const n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:Lb(n,e,G(t,e),this._addedLabels),Nb(t,n.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:n,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(n=0),t||(s=this.getLabels().length-1)),this.min=n,this.max=s}buildTicks(){const e=this.min,t=this.max,n=this.options.offset,s=[];let r=this.getLabels();r=e===0&&t===r.length-1?r:r.slice(e,t+1),this._valueRange=Math.max(r.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=e;o<=t;o++)s.push({value:o});return s}getLabelForValue(e){return Jl.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}L(ws,"id","category"),L(ws,"defaults",{ticks:{callback:Jl}});function Db(i,e){const t=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:d,maxDigits:u,includeBounds:h}=i,f=r||1,b=d-1,{min:g,max:w}=e,p=!fe(o),E=!fe(a),x=!fe(c),m=(w-g)/(u+1);let _=Ja((w-g)/b/f)*f,A,N,M,k;if(_<1e-14&&!p&&!E)return[{value:g},{value:w}];k=Math.ceil(w/_)-Math.floor(g/_),k>b&&(_=Ja(k*_/b/f)*f),fe(l)||(A=Math.pow(10,l),_=Math.ceil(_*A)/A),s==="ticks"?(N=Math.floor(g/_)*_,M=Math.ceil(w/_)*_):(N=g,M=w),p&&E&&r&&op((a-o)/r,_/1e3)?(k=Math.round(Math.min((a-o)/_,d)),_=(a-o)/k,N=o,M=a):x?(N=p?o:N,M=E?a:M,k=c-1,_=(M-N)/k):(k=(M-N)/_,si(k,Math.round(k),_/1e3)?k=Math.round(k):k=Math.ceil(k));const F=Math.max(Xa(_),Xa(N));A=Math.pow(10,fe(l)?F:l),N=Math.round(N*A)/A,M=Math.round(M*A)/A;let R=0;for(p&&(h&&N!==o?(t.push({value:o}),N<o&&R++,si(Math.round((N+R*_)*A)/A,o,Xl(o,m,i))&&R++):N<o&&R++);R<k;++R){const y=Math.round((N+R*_)*A)/A;if(E&&y>a)break;t.push({value:y})}return E&&h&&M!==a?t.length&&si(t[t.length-1].value,a,Xl(a,m,i))?t[t.length-1].value=a:t.push({value:a}):(!E||M===a)&&t.push({value:M}),t}function Xl(i,e,{horizontal:t,minRotation:n}){const s=Pt(n),r=(t?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+i).length;return Math.min(e/r,o)}class Ob extends Sn{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return fe(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=t?s:l,a=l=>r=n?r:l;if(e){const l=vn(s),c=vn(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||o(s-l)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:n}=e,s;return n?(s=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),t=t||11),t&&(s=Math.min(t,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let n=this.getTickLimit();n=Math.max(2,n);const s={maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},r=this._range||this,o=Db(s,r);return e.bounds==="ticks"&&ap(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){const s=(n-t)/Math.max(e.length-1,1)/2;t-=s,n+=s}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Ad(e,this.chart.options.locale,this.options.ticks.format)}}class xs extends Ob{determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=Ce(e)?e:0,this.max=Ce(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,n=Pt(this.options.ticks.minRotation),s=(e?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}L(xs,"id","linear"),L(xs,"defaults",{ticks:{callback:Nd.formatters.numeric}});const Ds={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Fe=Object.keys(Ds);function Ql(i,e){return i-e}function Zl(i,e){if(fe(e))return null;const t=i._adapter,{parser:n,round:s,isoWeekday:r}=i._parseOpts;let o=e;return typeof n=="function"&&(o=n(o)),Ce(o)||(o=typeof n=="string"?t.parse(o,n):t.parse(o)),o===null?null:(s&&(o=s==="week"&&(pi(r)||r===!0)?t.startOf(o,"isoWeek",r):t.startOf(o,s)),+o)}function ec(i,e,t,n){const s=Fe.length;for(let r=Fe.indexOf(i);r<s-1;++r){const o=Ds[Fe[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((t-e)/(a*o.size))<=n)return Fe[r]}return Fe[s-1]}function Bb(i,e,t,n,s){for(let r=Fe.length-1;r>=Fe.indexOf(t);r--){const o=Fe[r];if(Ds[o].common&&i._adapter.diff(s,n,o)>=e-1)return o}return Fe[t?Fe.indexOf(t):0]}function Rb(i){for(let e=Fe.indexOf(i)+1,t=Fe.length;e<t;++e)if(Ds[Fe[e]].common)return Fe[e]}function tc(i,e,t){if(!t)i[e]=!0;else if(t.length){const{lo:n,hi:s}=$o(t,e),r=t[n]>=e?t[n]:t[s];i[r]=!0}}function Pb(i,e,t,n){const s=i._adapter,r=+s.startOf(e[0].value,n),o=e[e.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,n))l=t[a],l>=0&&(e[l].major=!0);return e}function nc(i,e,t){const n=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,n.push({value:a,major:!1});return r===0||!t?n:Pb(i,n,s,t)}class ks extends Sn{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const n=e.time||(e.time={}),s=this._adapter=new Dm._date(e.adapters.date);s.init(t),ii(n.displayFormats,s.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:Zl(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,n=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Ce(s)&&!isNaN(s)?s:+t.startOf(Date.now(),n),r=Ce(r)&&!isNaN(r)?r:+t.endOf(Date.now(),n)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){const e=this.options,t=e.time,n=e.ticks,s=n.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=fp(s,r,o);return this._unit=t.unit||(n.autoSkip?ec(t.minUnit,this.min,this.max,this._getLabelCapacity(r)):Bb(this,a.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:Rb(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),nc(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?t=1-s:t=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?n=r:n=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;t=qe(t,0,o),n=qe(n,0,o),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){const e=this._adapter,t=this.min,n=this.max,s=this.options,r=s.time,o=r.unit||ec(r.minUnit,t,n,this._getLabelCapacity(t)),a=G(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=pi(l)||l===!0,d={};let u=t,h,f;if(c&&(u=+e.startOf(u,"isoWeek",l)),u=+e.startOf(u,c?"day":o),e.diff(n,t,o)>1e5*a)throw new Error(t+" and "+n+" are too far apart with stepSize of "+a+" "+o);const b=s.ticks.source==="data"&&this.getDataTimestamps();for(h=u,f=0;h<n;h=+e.add(h,a,o),f++)tc(d,h,b);return(h===n||s.bounds==="ticks"||f===1)&&tc(d,h,b),Object.keys(d).sort(Ql).map(g=>+g)}getLabelForValue(e){const t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){const s=this.options.time.displayFormats,r=this._unit,o=t||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,t,n,s){const r=this.options,o=r.ticks.callback;if(o)return re(o,[e,t,n],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&a[l],u=c&&a[c],h=n[t],f=c&&u&&h&&h.major;return this._adapter.format(e,s||(f?u:d))}generateTickLabels(e){let t,n,s;for(t=0,n=e.length;t<n;++t)s=e[t],s.label=this._tickFormatFunction(s.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,n=this.ctx.measureText(e).width,s=Pt(this.isHorizontal()?t.maxRotation:t.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:n*r+a*o,h:n*o+a*r}}_getLabelCapacity(e){const t=this.options.time,n=t.displayFormats,s=n[t.unit]||n.millisecond,r=this._tickFormatFunction(e,0,nc(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,n=s.length;t<n;++t)e=e.concat(s[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,n;if(e.length)return e;const s=this.getLabels();for(t=0,n=s.length;t<n;++t)e.push(Zl(this,s[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return mp(e.sort(Ql))}}L(ks,"id","time"),L(ks,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Yi(i,e,t){let n=0,s=i.length-1,r,o,a,l;t?(e>=i[n].pos&&e<=i[s].pos&&({lo:n,hi:s}=Ft(i,"pos",e)),{pos:r,time:a}=i[n],{pos:o,time:l}=i[s]):(e>=i[n].time&&e<=i[s].time&&({lo:n,hi:s}=Ft(i,"time",e)),{time:r,pos:a}=i[n],{time:o,pos:l}=i[s]);const c=o-r;return c?a+(l-a)*(e-r)/c:a}class ic extends ks{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Yi(t,this.min),this._tableRange=Yi(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:n}=this,s=[],r=[];let o,a,l,c,d;for(o=0,a=e.length;o<a;++o)c=e[o],c>=t&&c<=n&&s.push(c);if(s.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(o=0,a=s.length;o<a;++o)d=s[o+1],l=s[o-1],c=s[o],Math.round((d+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const e=this.min,t=this.max;let n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((s,r)=>s-r)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),n=this.getLabelTimestamps();return t.length&&n.length?e=this.normalize(t.concat(n)):e=t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Yi(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Yi(this._table,n*this._tableRange+this._minPos,!0)}}L(ic,"id","timeseries"),L(ic,"defaults",ks.defaults);Qe.register(ci,vt,di,xs,ws,lu,du,hu,ou);class Fb{constructor(){L(this,"id","compound-interest-calculator");L(this,"name","Compound Interest Calculator");L(this,"description","Calculate compound interest with various compounding frequencies");L(this,"seoMetadata",{title:"Free Compound Interest Calculator Online",description:"Calculate compound interest easily with this free calculator. Features multiple compounding frequencies, detailed results, and investment growth projections.",keywords:["compound interest calculator","investment calculator","interest rate calculator","savings calculator","financial calculator","investment growth calculator"]});L(this,"chart",null)}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.addStyles(),this.setupCalculator())}setupCalculator(){const e=document.getElementById("calculateBtn"),t=document.getElementById("periodType"),n=document.getElementById("interestRatePeriod"),s=document.getElementById("timeSpanPeriod");!e||!t||!n||!s||(t.addEventListener("change",()=>{const r=t.value==="yearly";n.textContent=r?"Year":"Month",s.textContent=r?"Years":"Months";const o=document.getElementById("interestRate");if(o){const a=parseFloat(o.value);isNaN(a)||(r?o.value=(a*12).toFixed(1):o.value=(a/12).toFixed(1))}e.click()}),e.addEventListener("click",()=>{const r=parseFloat(document.getElementById("initialAmount").value),o=parseFloat(document.getElementById("periodicInvestment").value),a=parseFloat(document.getElementById("interestRate").value),l=t.value,c=parseInt(document.getElementById("timeSpan").value);this.calculateAndDisplayResults(r,o,a,l,c)}),e.click())}calculateAndDisplayResults(e,t,n,s,r){const o=s==="yearly",a=r,l=n/100;let c=e;const d=[{period:0,amount:c,contributions:e,interest:0}];let u=e;for(let h=1;h<=a;h++){const f=c*l;c=c+f+t,u+=t,d.push({period:o?h:h/12,amount:c,contributions:u,interest:c-u})}this.updateDisplay(d[d.length-1],d,o)}updateDisplay(e,t,n){const s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2});document.getElementById("finalAmount").textContent=s.format(e.amount),document.getElementById("initialInvestmentText").textContent=s.format(t[0].amount),document.getElementById("totalContributionsText").textContent=s.format(e.contributions),document.getElementById("totalInterestText").textContent=s.format(e.interest),this.updateChart(t,n)}updateChart(e,t){const n=document.getElementById("growthChart").getContext("2d");if(!n)return;this.chart&&this.chart.destroy();const s=t?"Year":"Month";this.chart=new Qe(n,{type:"line",data:{labels:e.map(r=>`${s} ${Math.floor(r.period)}`),datasets:[{label:"Total Amount",data:e.map(r=>r.amount),borderColor:"#646cff",backgroundColor:"#646cff33",fill:!0},{label:"Total Contributions",data:e.map(r=>r.contributions),borderColor:"#64ff7c",backgroundColor:"#64ff7c33",fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{title:{display:!0,text:"Investment Growth Over Time"},tooltip:{callbacks:{label:function(r){const o=r.raw;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(o)}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(r){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",notation:"compact"}).format(r)}}}}}})}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class $b{constructor(){L(this,"id","base64-tool");L(this,"name","Base64 Encoder/Decoder");L(this,"description","Convert text to Base64 and decode Base64 to text");L(this,"seoMetadata",{title:"Free Online Base64 Encoder and Decoder Tool",description:"Convert your text to Base64 and decode Base64 strings with this free online tool. Fast, secure, and works directly in your browser.",keywords:["base64 encoder","base64 decoder","base64 converter","text to base64","base64 to text","online base64"]});L(this,"lastInput","");L(this,"lastOutput","");L(this,"currentMode","encode")}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.getElementById("encodeMode"),t=document.getElementById("decodeMode"),n=document.getElementById("inputText"),s=document.getElementById("outputText"),r=document.getElementById("copyInput"),o=document.getElementById("copyOutput"),a=document.getElementById("clearAll"),l=document.getElementById("fileInput"),c=document.getElementById("inputLabel"),d=document.getElementById("outputLabel");!e||!t||!n||!s||!r||!o||!a||!l||!c||!d||(e.addEventListener("click",()=>{this.currentMode="encode",e.classList.add("active"),t.classList.remove("active"),c.textContent="Text to Encode",d.textContent="Base64 Output",this.processInput(n.value)}),t.addEventListener("click",()=>{this.currentMode="decode",t.classList.add("active"),e.classList.remove("active"),c.textContent="Base64 to Decode",d.textContent="Decoded Output",this.processInput(n.value)}),n.addEventListener("input",u=>{const h=u.target.value;this.processInput(h)}),r.addEventListener("click",()=>{navigator.clipboard.writeText(n.value).then(()=>this.showToast("Input copied to clipboard!")).catch(()=>this.showToast("Failed to copy input"))}),o.addEventListener("click",()=>{navigator.clipboard.writeText(s.value).then(()=>this.showToast("Output copied to clipboard!")).catch(()=>this.showToast("Failed to copy output"))}),a.addEventListener("click",()=>{n.value="",s.value="",this.lastInput="",this.lastOutput="",this.showToast("Content cleared")}),l.addEventListener("change",async u=>{var f;const h=(f=u.target.files)==null?void 0:f[0];if(h)try{const b=new FileReader;this.currentMode==="encode"?(h.type.startsWith("text/")||h.name.endsWith(".txt")?b.readAsText(h):b.readAsArrayBuffer(h),b.onload=()=>{let g="";if(typeof b.result=="string")g=b.result;else if(b.result instanceof ArrayBuffer){const w=new Uint8Array(b.result);g=String.fromCharCode(...w)}n.value=g,this.processInput(g)}):(b.readAsText(h),b.onload=()=>{typeof b.result=="string"&&(n.value=b.result,this.processInput(b.result))}),b.onerror=()=>{this.showToast("Error reading file")}}catch(b){this.showToast("Error processing file"),console.error("File processing error:",b)}}))}processInput(e){const t=document.getElementById("outputText");if(t&&e!==this.lastInput){this.lastInput=e;try{if(this.currentMode==="encode")this.lastOutput=btoa(e);else try{this.lastOutput=atob(e)}catch{const n=e.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"");this.lastOutput=atob(n)}t.value=this.lastOutput,this.clearError()}catch{e?this.showError(this.currentMode==="decode"?"Invalid Base64 string":"Text contains invalid characters"):(this.clearError(),t.value="")}}}showError(e){const t=document.getElementById("outputText");t&&(t.classList.add("error"),t.value=`Error: ${e}`)}clearError(){const e=document.getElementById("outputText");e&&e.classList.remove("error")}showToast(e){const t=document.querySelector(".base64-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}var zb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ub(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var gr={exports:{}};const jb={},Hb=Object.freeze(Object.defineProperty({__proto__:null,default:jb},Symbol.toStringTag,{value:"Module"})),Es=Ub(Hb);/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */var sc;function qb(){return sc||(sc=1,function(i){(function(){var e="input is invalid type",t="finalize already called",n=typeof window=="object",s=n?window:{};s.JS_MD5_NO_WINDOW&&(n=!1);var r=!n&&typeof self=="object",o=!s.JS_MD5_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;o?s=zb:r&&(s=self);var a=!s.JS_MD5_NO_COMMON_JS&&!0&&i.exports,l=!s.JS_MD5_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",c="0123456789abcdef".split(""),d=[128,32768,8388608,-2147483648],u=[0,8,16,24],h=["hex","array","digest","buffer","arrayBuffer","base64"],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),b=[],g;if(l){var w=new ArrayBuffer(68);g=new Uint8Array(w),b=new Uint32Array(w)}var p=Array.isArray;(s.JS_MD5_NO_NODE_JS||!p)&&(p=function(y){return Object.prototype.toString.call(y)==="[object Array]"});var E=ArrayBuffer.isView;l&&(s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW||!E)&&(E=function(y){return typeof y=="object"&&y.buffer&&y.buffer.constructor===ArrayBuffer});var x=function(y){var T=typeof y;if(T==="string")return[y,!0];if(T!=="object"||y===null)throw new Error(e);if(l&&y.constructor===ArrayBuffer)return[new Uint8Array(y),!1];if(!p(y)&&!E(y))throw new Error(e);return[y,!1]},m=function(y){return function(T){return new k(!0).update(T)[y]()}},_=function(){var y=m("hex");o&&(y=A(y)),y.create=function(){return new k},y.update=function(C){return y.create().update(C)};for(var T=0;T<h.length;++T){var I=h[T];y[I]=m(I)}return y},A=function(y){var T=Es,I=Es.Buffer,C;I.from&&!s.JS_MD5_NO_BUFFER_FROM?C=I.from:C=function(B){return new I(B)};var U=function(B){if(typeof B=="string")return T.createHash("md5").update(B,"utf8").digest("hex");if(B==null)throw new Error(e);return B.constructor===ArrayBuffer&&(B=new Uint8Array(B)),p(B)||E(B)||B.constructor===I?T.createHash("md5").update(C(B)).digest("hex"):y(B)};return U},N=function(y){return function(T,I){return new F(T,!0).update(I)[y]()}},M=function(){var y=N("hex");y.create=function(C){return new F(C)},y.update=function(C,U){return y.create(C).update(U)};for(var T=0;T<h.length;++T){var I=h[T];y[I]=N(I)}return y};function k(y){if(y)b[0]=b[16]=b[1]=b[2]=b[3]=b[4]=b[5]=b[6]=b[7]=b[8]=b[9]=b[10]=b[11]=b[12]=b[13]=b[14]=b[15]=0,this.blocks=b,this.buffer8=g;else if(l){var T=new ArrayBuffer(68);this.buffer8=new Uint8Array(T),this.blocks=new Uint32Array(T)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}k.prototype.update=function(y){if(this.finalized)throw new Error(t);var T=x(y);y=T[0];for(var I=T[1],C,U=0,B,$=y.length,j=this.blocks,X=this.buffer8;U<$;){if(this.hashed&&(this.hashed=!1,j[0]=j[16],j[16]=j[1]=j[2]=j[3]=j[4]=j[5]=j[6]=j[7]=j[8]=j[9]=j[10]=j[11]=j[12]=j[13]=j[14]=j[15]=0),I)if(l)for(B=this.start;U<$&&B<64;++U)C=y.charCodeAt(U),C<128?X[B++]=C:C<2048?(X[B++]=192|C>>>6,X[B++]=128|C&63):C<55296||C>=57344?(X[B++]=224|C>>>12,X[B++]=128|C>>>6&63,X[B++]=128|C&63):(C=65536+((C&1023)<<10|y.charCodeAt(++U)&1023),X[B++]=240|C>>>18,X[B++]=128|C>>>12&63,X[B++]=128|C>>>6&63,X[B++]=128|C&63);else for(B=this.start;U<$&&B<64;++U)C=y.charCodeAt(U),C<128?j[B>>>2]|=C<<u[B++&3]:C<2048?(j[B>>>2]|=(192|C>>>6)<<u[B++&3],j[B>>>2]|=(128|C&63)<<u[B++&3]):C<55296||C>=57344?(j[B>>>2]|=(224|C>>>12)<<u[B++&3],j[B>>>2]|=(128|C>>>6&63)<<u[B++&3],j[B>>>2]|=(128|C&63)<<u[B++&3]):(C=65536+((C&1023)<<10|y.charCodeAt(++U)&1023),j[B>>>2]|=(240|C>>>18)<<u[B++&3],j[B>>>2]|=(128|C>>>12&63)<<u[B++&3],j[B>>>2]|=(128|C>>>6&63)<<u[B++&3],j[B>>>2]|=(128|C&63)<<u[B++&3]);else if(l)for(B=this.start;U<$&&B<64;++U)X[B++]=y[U];else for(B=this.start;U<$&&B<64;++U)j[B>>>2]|=y[U]<<u[B++&3];this.lastByteIndex=B,this.bytes+=B-this.start,B>=64?(this.start=B-64,this.hash(),this.hashed=!0):this.start=B}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},k.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var y=this.blocks,T=this.lastByteIndex;y[T>>>2]|=d[T&3],T>=56&&(this.hashed||this.hash(),y[0]=y[16],y[16]=y[1]=y[2]=y[3]=y[4]=y[5]=y[6]=y[7]=y[8]=y[9]=y[10]=y[11]=y[12]=y[13]=y[14]=y[15]=0),y[14]=this.bytes<<3,y[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},k.prototype.hash=function(){var y,T,I,C,U,B,$=this.blocks;this.first?(y=$[0]-680876937,y=(y<<7|y>>>25)-271733879<<0,C=(-1732584194^y&2004318071)+$[1]-117830708,C=(C<<12|C>>>20)+y<<0,I=(-271733879^C&(y^-271733879))+$[2]-1126478375,I=(I<<17|I>>>15)+C<<0,T=(y^I&(C^y))+$[3]-1316259209,T=(T<<22|T>>>10)+I<<0):(y=this.h0,T=this.h1,I=this.h2,C=this.h3,y+=(C^T&(I^C))+$[0]-680876936,y=(y<<7|y>>>25)+T<<0,C+=(I^y&(T^I))+$[1]-389564586,C=(C<<12|C>>>20)+y<<0,I+=(T^C&(y^T))+$[2]+606105819,I=(I<<17|I>>>15)+C<<0,T+=(y^I&(C^y))+$[3]-1044525330,T=(T<<22|T>>>10)+I<<0),y+=(C^T&(I^C))+$[4]-176418897,y=(y<<7|y>>>25)+T<<0,C+=(I^y&(T^I))+$[5]+1200080426,C=(C<<12|C>>>20)+y<<0,I+=(T^C&(y^T))+$[6]-1473231341,I=(I<<17|I>>>15)+C<<0,T+=(y^I&(C^y))+$[7]-45705983,T=(T<<22|T>>>10)+I<<0,y+=(C^T&(I^C))+$[8]+1770035416,y=(y<<7|y>>>25)+T<<0,C+=(I^y&(T^I))+$[9]-1958414417,C=(C<<12|C>>>20)+y<<0,I+=(T^C&(y^T))+$[10]-42063,I=(I<<17|I>>>15)+C<<0,T+=(y^I&(C^y))+$[11]-1990404162,T=(T<<22|T>>>10)+I<<0,y+=(C^T&(I^C))+$[12]+1804603682,y=(y<<7|y>>>25)+T<<0,C+=(I^y&(T^I))+$[13]-40341101,C=(C<<12|C>>>20)+y<<0,I+=(T^C&(y^T))+$[14]-1502002290,I=(I<<17|I>>>15)+C<<0,T+=(y^I&(C^y))+$[15]+1236535329,T=(T<<22|T>>>10)+I<<0,y+=(I^C&(T^I))+$[1]-165796510,y=(y<<5|y>>>27)+T<<0,C+=(T^I&(y^T))+$[6]-1069501632,C=(C<<9|C>>>23)+y<<0,I+=(y^T&(C^y))+$[11]+643717713,I=(I<<14|I>>>18)+C<<0,T+=(C^y&(I^C))+$[0]-373897302,T=(T<<20|T>>>12)+I<<0,y+=(I^C&(T^I))+$[5]-701558691,y=(y<<5|y>>>27)+T<<0,C+=(T^I&(y^T))+$[10]+38016083,C=(C<<9|C>>>23)+y<<0,I+=(y^T&(C^y))+$[15]-660478335,I=(I<<14|I>>>18)+C<<0,T+=(C^y&(I^C))+$[4]-405537848,T=(T<<20|T>>>12)+I<<0,y+=(I^C&(T^I))+$[9]+568446438,y=(y<<5|y>>>27)+T<<0,C+=(T^I&(y^T))+$[14]-1019803690,C=(C<<9|C>>>23)+y<<0,I+=(y^T&(C^y))+$[3]-187363961,I=(I<<14|I>>>18)+C<<0,T+=(C^y&(I^C))+$[8]+1163531501,T=(T<<20|T>>>12)+I<<0,y+=(I^C&(T^I))+$[13]-1444681467,y=(y<<5|y>>>27)+T<<0,C+=(T^I&(y^T))+$[2]-51403784,C=(C<<9|C>>>23)+y<<0,I+=(y^T&(C^y))+$[7]+1735328473,I=(I<<14|I>>>18)+C<<0,T+=(C^y&(I^C))+$[12]-1926607734,T=(T<<20|T>>>12)+I<<0,U=T^I,y+=(U^C)+$[5]-378558,y=(y<<4|y>>>28)+T<<0,C+=(U^y)+$[8]-2022574463,C=(C<<11|C>>>21)+y<<0,B=C^y,I+=(B^T)+$[11]+1839030562,I=(I<<16|I>>>16)+C<<0,T+=(B^I)+$[14]-35309556,T=(T<<23|T>>>9)+I<<0,U=T^I,y+=(U^C)+$[1]-1530992060,y=(y<<4|y>>>28)+T<<0,C+=(U^y)+$[4]+1272893353,C=(C<<11|C>>>21)+y<<0,B=C^y,I+=(B^T)+$[7]-155497632,I=(I<<16|I>>>16)+C<<0,T+=(B^I)+$[10]-1094730640,T=(T<<23|T>>>9)+I<<0,U=T^I,y+=(U^C)+$[13]+681279174,y=(y<<4|y>>>28)+T<<0,C+=(U^y)+$[0]-358537222,C=(C<<11|C>>>21)+y<<0,B=C^y,I+=(B^T)+$[3]-722521979,I=(I<<16|I>>>16)+C<<0,T+=(B^I)+$[6]+76029189,T=(T<<23|T>>>9)+I<<0,U=T^I,y+=(U^C)+$[9]-640364487,y=(y<<4|y>>>28)+T<<0,C+=(U^y)+$[12]-421815835,C=(C<<11|C>>>21)+y<<0,B=C^y,I+=(B^T)+$[15]+530742520,I=(I<<16|I>>>16)+C<<0,T+=(B^I)+$[2]-995338651,T=(T<<23|T>>>9)+I<<0,y+=(I^(T|~C))+$[0]-198630844,y=(y<<6|y>>>26)+T<<0,C+=(T^(y|~I))+$[7]+1126891415,C=(C<<10|C>>>22)+y<<0,I+=(y^(C|~T))+$[14]-1416354905,I=(I<<15|I>>>17)+C<<0,T+=(C^(I|~y))+$[5]-57434055,T=(T<<21|T>>>11)+I<<0,y+=(I^(T|~C))+$[12]+1700485571,y=(y<<6|y>>>26)+T<<0,C+=(T^(y|~I))+$[3]-1894986606,C=(C<<10|C>>>22)+y<<0,I+=(y^(C|~T))+$[10]-1051523,I=(I<<15|I>>>17)+C<<0,T+=(C^(I|~y))+$[1]-2054922799,T=(T<<21|T>>>11)+I<<0,y+=(I^(T|~C))+$[8]+1873313359,y=(y<<6|y>>>26)+T<<0,C+=(T^(y|~I))+$[15]-30611744,C=(C<<10|C>>>22)+y<<0,I+=(y^(C|~T))+$[6]-1560198380,I=(I<<15|I>>>17)+C<<0,T+=(C^(I|~y))+$[13]+1309151649,T=(T<<21|T>>>11)+I<<0,y+=(I^(T|~C))+$[4]-145523070,y=(y<<6|y>>>26)+T<<0,C+=(T^(y|~I))+$[11]-1120210379,C=(C<<10|C>>>22)+y<<0,I+=(y^(C|~T))+$[2]+718787259,I=(I<<15|I>>>17)+C<<0,T+=(C^(I|~y))+$[9]-343485551,T=(T<<21|T>>>11)+I<<0,this.first?(this.h0=y+1732584193<<0,this.h1=T-271733879<<0,this.h2=I-1732584194<<0,this.h3=C+271733878<<0,this.first=!1):(this.h0=this.h0+y<<0,this.h1=this.h1+T<<0,this.h2=this.h2+I<<0,this.h3=this.h3+C<<0)},k.prototype.hex=function(){this.finalize();var y=this.h0,T=this.h1,I=this.h2,C=this.h3;return c[y>>>4&15]+c[y&15]+c[y>>>12&15]+c[y>>>8&15]+c[y>>>20&15]+c[y>>>16&15]+c[y>>>28&15]+c[y>>>24&15]+c[T>>>4&15]+c[T&15]+c[T>>>12&15]+c[T>>>8&15]+c[T>>>20&15]+c[T>>>16&15]+c[T>>>28&15]+c[T>>>24&15]+c[I>>>4&15]+c[I&15]+c[I>>>12&15]+c[I>>>8&15]+c[I>>>20&15]+c[I>>>16&15]+c[I>>>28&15]+c[I>>>24&15]+c[C>>>4&15]+c[C&15]+c[C>>>12&15]+c[C>>>8&15]+c[C>>>20&15]+c[C>>>16&15]+c[C>>>28&15]+c[C>>>24&15]},k.prototype.toString=k.prototype.hex,k.prototype.digest=function(){this.finalize();var y=this.h0,T=this.h1,I=this.h2,C=this.h3;return[y&255,y>>>8&255,y>>>16&255,y>>>24&255,T&255,T>>>8&255,T>>>16&255,T>>>24&255,I&255,I>>>8&255,I>>>16&255,I>>>24&255,C&255,C>>>8&255,C>>>16&255,C>>>24&255]},k.prototype.array=k.prototype.digest,k.prototype.arrayBuffer=function(){this.finalize();var y=new ArrayBuffer(16),T=new Uint32Array(y);return T[0]=this.h0,T[1]=this.h1,T[2]=this.h2,T[3]=this.h3,y},k.prototype.buffer=k.prototype.arrayBuffer,k.prototype.base64=function(){for(var y,T,I,C="",U=this.array(),B=0;B<15;)y=U[B++],T=U[B++],I=U[B++],C+=f[y>>>2]+f[(y<<4|T>>>4)&63]+f[(T<<2|I>>>6)&63]+f[I&63];return y=U[B],C+=f[y>>>2]+f[y<<4&63]+"==",C};function F(y,T){var I,C=x(y);if(y=C[0],C[1]){var U=[],B=y.length,$=0,j;for(I=0;I<B;++I)j=y.charCodeAt(I),j<128?U[$++]=j:j<2048?(U[$++]=192|j>>>6,U[$++]=128|j&63):j<55296||j>=57344?(U[$++]=224|j>>>12,U[$++]=128|j>>>6&63,U[$++]=128|j&63):(j=65536+((j&1023)<<10|y.charCodeAt(++I)&1023),U[$++]=240|j>>>18,U[$++]=128|j>>>12&63,U[$++]=128|j>>>6&63,U[$++]=128|j&63);y=U}y.length>64&&(y=new k(!0).update(y).array());var X=[],K=[];for(I=0;I<64;++I){var me=y[I]||0;X[I]=92^me,K[I]=54^me}k.call(this,T),this.update(K),this.oKeyPad=X,this.inner=!0,this.sharedMemory=T}F.prototype=new k,F.prototype.finalize=function(){if(k.prototype.finalize.call(this),this.inner){this.inner=!1;var y=this.array();k.call(this,this.sharedMemory),this.update(this.oKeyPad),this.update(y),k.prototype.finalize.call(this)}};var R=_();R.md5=R,R.md5.hmac=M(),a?i.exports=R:s.md5=R})()}(gr)),gr.exports}var Vb=qb();const Kb=fu(Vb);class Wb{constructor(){L(this,"id","hash-generator");L(this,"name","Hash Generator");L(this,"description","Generate various types of hash values from text");L(this,"seoMetadata",{title:"Online Hash Generator Tool - MD5, SHA-1, SHA-256, SHA-512",description:"Generate secure hash values using multiple algorithms including MD5, SHA-1, SHA-256, and SHA-512. Free online tool for all your hashing needs.",keywords:["hash generator","md5 generator","sha1 generator","sha256 generator","sha512 generator","online hash tool"]});L(this,"lastInput","");L(this,"supportedAlgorithms",[{name:"MD5",value:"md5"},{name:"SHA-1",value:"sha-1"},{name:"SHA-256",value:"sha-256"},{name:"SHA-384",value:"sha-384"},{name:"SHA-512",value:"sha-512"}])}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}async generateHash(e,t){try{if(t==="md5")return Kb(e);const n=new TextEncoder().encode(e),s=await crypto.subtle.digest(t,n);return Array.from(new Uint8Array(s)).map(a=>a.toString(16).padStart(2,"0")).join("")}catch(n){return console.error("Error generating hash:",n),"Error generating hash"}}setupHandlers(){const e=document.getElementById("inputText"),t=document.getElementById("hashAlgorithm"),n=document.getElementById("generateHash"),s=document.getElementById("copyHash"),r=document.getElementById("hashOutput");!e||!t||!n||!s||!r||(n.addEventListener("click",async()=>{if(!e.value.trim()){r.textContent="";return}const o=await this.generateHash(e.value,t.value);r.textContent=o}),s.addEventListener("click",()=>{const o=r.textContent;o&&navigator.clipboard.writeText(o).then(()=>this.showToast("Hash copied to clipboard!")).catch(()=>this.showToast("Failed to copy hash"))}))}formatFileSize(e){const t=["B","KB","MB","GB"];let n=e,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s++;return`${n.toFixed(2)} ${t[s]}`}showToast(e){const t=document.querySelector(".hash-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}const Gb="00000000-0000-0000-0000-000000000000",ke=[];for(let i=0;i<256;++i)ke.push((i+256).toString(16).slice(1));function pu(i,e=0){return(ke[i[e+0]]+ke[i[e+1]]+ke[i[e+2]]+ke[i[e+3]]+"-"+ke[i[e+4]]+ke[i[e+5]]+"-"+ke[i[e+6]]+ke[i[e+7]]+"-"+ke[i[e+8]]+ke[i[e+9]]+"-"+ke[i[e+10]]+ke[i[e+11]]+ke[i[e+12]]+ke[i[e+13]]+ke[i[e+14]]+ke[i[e+15]]).toLowerCase()}let br;const Yb=new Uint8Array(16);function yo(){if(!br){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");br=crypto.getRandomValues.bind(crypto)}return br(Yb)}const Wn={};function rc(i,e,t){var r;let n;const s=(i==null?void 0:i._v6)??!1;if(i){const o=Object.keys(i);o.length===1&&o[0]==="_v6"&&(i=void 0)}if(i)n=oc(i.random??((r=i.rng)==null?void 0:r.call(i))??yo(),i.msecs,i.nsecs,i.clockseq,i.node,e,t);else{const o=Date.now(),a=yo();Jb(Wn,o,a),n=oc(a,Wn.msecs,Wn.nsecs,s?void 0:Wn.clockseq,s?void 0:Wn.node,e,t)}return e?n:pu(n)}function Jb(i,e,t){return i.msecs??(i.msecs=-1/0),i.nsecs??(i.nsecs=0),e===i.msecs?(i.nsecs++,i.nsecs>=1e4&&(i.node=void 0,i.nsecs=0)):e>i.msecs?i.nsecs=0:e<i.msecs&&(i.node=void 0),i.node||(i.node=t.slice(10,16),i.node[0]|=1,i.clockseq=(t[8]<<8|t[9])&16383),i.msecs=e,i}function oc(i,e,t,n,s,r,o=0){r||(r=new Uint8Array(16),o=0),e??(e=Date.now()),t??(t=0),n??(n=(i[8]<<8|i[9])&16383),s??(s=i.slice(10,16)),e+=122192928e5;const a=((e&268435455)*1e4+t)%4294967296;r[o++]=a>>>24&255,r[o++]=a>>>16&255,r[o++]=a>>>8&255,r[o++]=a&255;const l=e/4294967296*1e4&268435455;r[o++]=l>>>8&255,r[o++]=l&255,r[o++]=l>>>24&15|16,r[o++]=l>>>16&255,r[o++]=n>>>8|128,r[o++]=n&255;for(let c=0;c<6;++c)r[o++]=s[c];return r}const Xb=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ac={randomUUID:Xb};function lc(i,e,t){if(ac.randomUUID&&!e&&!i)return ac.randomUUID();i=i||{};const n=i.random||(i.rng||yo)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,pu(n)}function Ht(i){var e=new Error(i);return e.source="ulid",e}var Os="0123456789ABCDEFGHJKMNPQRSTVWXYZ",gn=Os.length,vo=Math.pow(2,48)-1,wo=10,mu=16;function Qb(i){var e=Math.floor(i()*gn);return e===gn&&(e=gn-1),Os.charAt(e)}function Zb(i,e){if(isNaN(i))throw new Error(i+" must be a number");if(i>vo)throw Ht("cannot encode time greater than "+vo);if(i<0)throw Ht("time must be positive");if(Number.isInteger(i)===!1)throw Ht("time must be an integer");for(var t=void 0,n="";e>0;e--)t=i%gn,n=Os.charAt(t)+n,i=(i-t)/gn;return n}function ey(i,e){for(var t="";i>0;i--)t=Qb(e)+t;return t}function ty(i){if(i.length!==wo+mu)throw Ht("malformed ulid");var e=i.substr(0,wo).split("").reverse().reduce(function(t,n,s){var r=Os.indexOf(n);if(r===-1)throw Ht("invalid character found: "+n);return t+=r*Math.pow(gn,s)},0);if(e>vo)throw Ht("malformed ulid, timestamp too large");return e}function ny(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments[1];e||(e=typeof window<"u"?window:null);var t=e&&(e.crypto||e.msCrypto);if(t)return function(){var s=new Uint8Array(1);return t.getRandomValues(s),s[0]/255};try{var n=require("crypto");return function(){return n.randomBytes(1).readUInt8()/255}}catch{}if(i){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return function(){return Math.random()}}throw Ht("secure crypto unusable, insecure Math.random not allowed")}function iy(i){return i||(i=ny()),function(t){return isNaN(t)&&(t=Date.now()),Zb(t,wo)+ey(mu,i)}}var cc=iy();class sy{constructor(){L(this,"id","uuid-generator");L(this,"name","UUID Generator");L(this,"description","Generate random UUIDs/GUIDs");L(this,"seoMetadata",{title:"Free Online UUID/GUID Generator Tool",description:"Generate random UUID (Universally Unique Identifier) and GUID (Globally Unique Identifier) values instantly. Secure, random, and RFC 4122 compliant.",keywords:["uuid generator","guid generator","random uuid","uuid v4","unique identifier generator","online uuid tool"]});L(this,"supportedTypes",[{value:"uuidv4",name:"UUID v4 (Random)"},{value:"uuidv1",name:"UUID v1 (Time-based)"},{value:"ulid",name:"ULID (Sortable, Time-based)"},{value:"nil",name:"Nil UUID (Zero UUID)"}]);L(this,"lastSettings",{type:"uuidv4",quantity:1,uppercase:!1,includeDashes:!0,useCustomDate:!1,customDate:new Date().toISOString().slice(0,16)})}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("idType"),t=document.getElementById("useCustomDate"),n=document.getElementById("customDate"),s=document.getElementById("quantity"),r=document.getElementById("uppercase"),o=document.getElementById("includeDashes"),a=document.getElementById("generateBtn"),l=document.getElementById("copyAllBtn"),c=document.getElementById("clearBtn"),d=document.getElementById("outputList"),u=document.querySelector(".time-control");!e||!t||!n||!s||!r||!o||!a||!l||!c||!d||!u||(e.addEventListener("change",()=>{const h=["uuidv1","ulid"].includes(e.value);u.style.display=h?"flex":"none",this.lastSettings.type=e.value,this.updateIdInfo(e.value)}),this.updateIdInfo(e.value),t.addEventListener("change",()=>{n.disabled=!t.checked,this.lastSettings.useCustomDate=t.checked}),n.addEventListener("change",()=>{this.lastSettings.customDate=n.value}),r.addEventListener("change",()=>{this.lastSettings.uppercase=r.checked}),o.addEventListener("change",()=>{this.lastSettings.includeDashes=o.checked}),s.addEventListener("change",()=>{const h=parseInt(s.value);h<1&&(s.value="1"),h>100&&(s.value="100"),this.lastSettings.quantity=parseInt(s.value)}),a.addEventListener("click",()=>{var f;d.innerHTML="";const h=Math.min(Math.max(parseInt(s.value)||1,1),100);for(let b=0;b<h;b++){const{id:g,timestamp:w}=this.generateId({type:e.value,useCustomDate:t.checked,customDate:t.checked?new Date(n.value):void 0,uppercase:r.checked,includeDashes:o.checked}),p=document.createElement("div");p.className="id-item",p.innerHTML=`
          <div class="id-content">
            <span class="id-text">${g}</span>
            ${w?`<span class="id-timestamp">Generated at: ${w.toLocaleString()}</span>`:""}
          </div>
          <button class="copy-button" title="Copy ID">Copy</button>
        `,(f=p.querySelector(".copy-button"))==null||f.addEventListener("click",()=>{navigator.clipboard.writeText(g).then(()=>this.showToast("ID copied to clipboard")).catch(()=>this.showToast("Failed to copy ID"))}),d.appendChild(p),b===0&&this.updateIdInfo(e.value,w)}}),l.addEventListener("click",()=>{const h=Array.from(d.querySelectorAll(".id-text")).map(f=>f.textContent).filter(Boolean).join(`
`);h&&navigator.clipboard.writeText(h).then(()=>this.showToast("All IDs copied to clipboard")).catch(()=>this.showToast("Failed to copy IDs"))}),c.addEventListener("click",()=>{d.innerHTML="",this.updateIdInfo(e.value)}))}updateQuantityState(e,t,n){["uuidv1","ulid"].includes(e)&&t?(n.value="1",n.disabled=!0,n.title="Quantity is fixed to 1 when using custom timestamp (all IDs would be identical)"):(n.disabled=!1,n.title="Generate between 1 and 100 IDs")}generateId(e){let t,n;switch(e.type){case"uuidv4":t=lc();break;case"uuidv1":e.useCustomDate&&e.customDate?(t=rc({msecs:e.customDate.getTime()}),n=e.customDate):(t=rc(),n=new Date);break;case"ulid":e.useCustomDate&&e.customDate?(t=cc(e.customDate.getTime()),n=e.customDate):(t=cc(),n=new Date(ty(t)));break;case"nil":t=Gb;break;default:t=lc()}return e.includeDashes||(t=t.replace(/-/g,"")),e.uppercase&&(t=t.toUpperCase()),{id:t,timestamp:n}}updateIdInfo(e,t){const n=document.getElementById("idInfo");if(!n)return;const s=[];switch(e){case"uuidv4":s.push("UUID Version 4 (Random)"),s.push("• Generated using cryptographically strong random values"),s.push("• Suitable for most use cases"),s.push("• No timestamp or sortable component");break;case"uuidv1":s.push("UUID Version 1 (Time-based)"),s.push("• Contains timestamp and node identifier"),s.push("• Sortable by generation time"),t&&s.push(`• Timestamp: ${t.toLocaleString()}`);break;case"ulid":s.push("ULID (Universally Unique Lexicographically Sortable Identifier)"),s.push("• Timestamp + Random"),s.push("• Lexicographically sortable"),s.push("• Case insensitive"),s.push("• URL-safe (no special characters)"),t&&s.push(`• Timestamp: ${t.toLocaleString()}`);break;case"nil":s.push("Nil UUID (Zero UUID)"),s.push("• Special zero-value UUID"),s.push("• All bits set to zero"),s.push("• Used to represent null or undefined UUID");break}n.innerHTML=s.join(`
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
    `,document.head.appendChild(e)}}var yr={},vr={},Ji={exports:{}},dc;function ry(){return dc||(dc=1,function(i,e){var t=Es,n=t.Buffer;function s(o,a){for(var l in o)a[l]=o[l]}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?i.exports=t:(s(t,e),e.Buffer=r);function r(o,a,l){return n(o,a,l)}s(n,r),r.from=function(o,a,l){if(typeof o=="number")throw new TypeError("Argument must not be a number");return n(o,a,l)},r.alloc=function(o,a,l){if(typeof o!="number")throw new TypeError("Argument must be a number");var c=n(o);return a!==void 0?typeof l=="string"?c.fill(a,l):c.fill(a):c.fill(0),c},r.allocUnsafe=function(o){if(typeof o!="number")throw new TypeError("Argument must be a number");return n(o)},r.allocUnsafeSlow=function(o){if(typeof o!="number")throw new TypeError("Argument must be a number");return t.SlowBuffer(o)}}(Ji,Ji.exports)),Ji.exports}var uc;function oy(){if(uc)return vr;uc=1;var i=ry().Buffer,e=i.isEncoding||function(p){switch(p=""+p,p&&p.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function t(p){if(!p)return"utf8";for(var E;;)switch(p){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return p;default:if(E)return;p=(""+p).toLowerCase(),E=!0}}function n(p){var E=t(p);if(typeof E!="string"&&(i.isEncoding===e||!e(p)))throw new Error("Unknown encoding: "+p);return E||p}vr.StringDecoder=s;function s(p){this.encoding=n(p);var E;switch(this.encoding){case"utf16le":this.text=u,this.end=h,E=4;break;case"utf8":this.fillLast=l,E=4;break;case"base64":this.text=f,this.end=b,E=3;break;default:this.write=g,this.end=w;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(E)}s.prototype.write=function(p){if(p.length===0)return"";var E,x;if(this.lastNeed){if(E=this.fillLast(p),E===void 0)return"";x=this.lastNeed,this.lastNeed=0}else x=0;return x<p.length?E?E+this.text(p,x):this.text(p,x):E||""},s.prototype.end=d,s.prototype.text=c,s.prototype.fillLast=function(p){if(this.lastNeed<=p.length)return p.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);p.copy(this.lastChar,this.lastTotal-this.lastNeed,0,p.length),this.lastNeed-=p.length};function r(p){return p<=127?0:p>>5===6?2:p>>4===14?3:p>>3===30?4:p>>6===2?-1:-2}function o(p,E,x){var m=E.length-1;if(m<x)return 0;var _=r(E[m]);return _>=0?(_>0&&(p.lastNeed=_-1),_):--m<x||_===-2?0:(_=r(E[m]),_>=0?(_>0&&(p.lastNeed=_-2),_):--m<x||_===-2?0:(_=r(E[m]),_>=0?(_>0&&(_===2?_=0:p.lastNeed=_-3),_):0))}function a(p,E,x){if((E[0]&192)!==128)return p.lastNeed=0,"�";if(p.lastNeed>1&&E.length>1){if((E[1]&192)!==128)return p.lastNeed=1,"�";if(p.lastNeed>2&&E.length>2&&(E[2]&192)!==128)return p.lastNeed=2,"�"}}function l(p){var E=this.lastTotal-this.lastNeed,x=a(this,p);if(x!==void 0)return x;if(this.lastNeed<=p.length)return p.copy(this.lastChar,E,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);p.copy(this.lastChar,E,0,p.length),this.lastNeed-=p.length}function c(p,E){var x=o(this,p,E);if(!this.lastNeed)return p.toString("utf8",E);this.lastTotal=x;var m=p.length-(x-this.lastNeed);return p.copy(this.lastChar,0,m),p.toString("utf8",E,m)}function d(p){var E=p&&p.length?this.write(p):"";return this.lastNeed?E+"�":E}function u(p,E){if((p.length-E)%2===0){var x=p.toString("utf16le",E);if(x){var m=x.charCodeAt(x.length-1);if(m>=55296&&m<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=p[p.length-2],this.lastChar[1]=p[p.length-1],x.slice(0,-1)}return x}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=p[p.length-1],p.toString("utf16le",E,p.length-1)}function h(p){var E=p&&p.length?this.write(p):"";if(this.lastNeed){var x=this.lastTotal-this.lastNeed;return E+this.lastChar.toString("utf16le",0,x)}return E}function f(p,E){var x=(p.length-E)%3;return x===0?p.toString("base64",E):(this.lastNeed=3-x,this.lastTotal=3,x===1?this.lastChar[0]=p[p.length-1]:(this.lastChar[0]=p[p.length-2],this.lastChar[1]=p[p.length-1]),p.toString("base64",E,p.length-x))}function b(p){var E=p&&p.length?this.write(p):"";return this.lastNeed?E+this.lastChar.toString("base64",0,3-this.lastNeed):E}function g(p){return p.toString(this.encoding)}function w(p){return p&&p.length?this.write(p):""}return vr}var hc;function ay(){return hc||(hc=1,function(i){(function(e){e.parser=function(S,v){return new n(S,v)},e.SAXParser=n,e.SAXStream=d,e.createStream=c,e.MAX_BUFFER_LENGTH=64*1024;var t=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];e.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function n(S,v){if(!(this instanceof n))return new n(S,v);var P=this;r(P),P.q=P.c="",P.bufferCheckPosition=e.MAX_BUFFER_LENGTH,P.opt=v||{},P.opt.lowercase=P.opt.lowercase||P.opt.lowercasetags,P.looseCase=P.opt.lowercase?"toLowerCase":"toUpperCase",P.tags=[],P.closed=P.closedRoot=P.sawRoot=!1,P.tag=P.error=null,P.strict=!!S,P.noscript=!!(S||P.opt.noscript),P.state=k.BEGIN,P.strictEntities=P.opt.strictEntities,P.ENTITIES=P.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),P.attribList=[],P.opt.xmlns&&(P.ns=Object.create(g)),P.opt.unquotedAttributeValues===void 0&&(P.opt.unquotedAttributeValues=!S),P.trackPosition=P.opt.position!==!1,P.trackPosition&&(P.position=P.line=P.column=0),R(P,"onready")}Object.create||(Object.create=function(S){function v(){}v.prototype=S;var P=new v;return P}),Object.keys||(Object.keys=function(S){var v=[];for(var P in S)S.hasOwnProperty(P)&&v.push(P);return v});function s(S){for(var v=Math.max(e.MAX_BUFFER_LENGTH,10),P=0,O=0,Q=t.length;O<Q;O++){var se=S[t[O]].length;if(se>v)switch(t[O]){case"textNode":T(S);break;case"cdata":y(S,"oncdata",S.cdata),S.cdata="";break;case"script":y(S,"onscript",S.script),S.script="";break;default:C(S,"Max buffer length exceeded: "+t[O])}P=Math.max(P,se)}var ce=e.MAX_BUFFER_LENGTH-P;S.bufferCheckPosition=ce+S.position}function r(S){for(var v=0,P=t.length;v<P;v++)S[t[v]]=""}function o(S){T(S),S.cdata!==""&&(y(S,"oncdata",S.cdata),S.cdata=""),S.script!==""&&(y(S,"onscript",S.script),S.script="")}n.prototype={end:function(){U(this)},write:be,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){o(this)}};var a;try{a=Es.Stream}catch{a=function(){}}a||(a=function(){});var l=e.EVENTS.filter(function(S){return S!=="error"&&S!=="end"});function c(S,v){return new d(S,v)}function d(S,v){if(!(this instanceof d))return new d(S,v);a.apply(this),this._parser=new n(S,v),this.writable=!0,this.readable=!0;var P=this;this._parser.onend=function(){P.emit("end")},this._parser.onerror=function(O){P.emit("error",O),P._parser.error=null},this._decoder=null,l.forEach(function(O){Object.defineProperty(P,"on"+O,{get:function(){return P._parser["on"+O]},set:function(Q){if(!Q)return P.removeAllListeners(O),P._parser["on"+O]=Q,Q;P.on(O,Q)},enumerable:!0,configurable:!1})})}d.prototype=Object.create(a.prototype,{constructor:{value:d}}),d.prototype.write=function(S){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(S)){if(!this._decoder){var v=oy().StringDecoder;this._decoder=new v("utf8")}S=this._decoder.write(S)}return this._parser.write(S.toString()),this.emit("data",S),!0},d.prototype.end=function(S){return S&&S.length&&this.write(S),this._parser.end(),!0},d.prototype.on=function(S,v){var P=this;return!P._parser["on"+S]&&l.indexOf(S)!==-1&&(P._parser["on"+S]=function(){var O=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);O.splice(0,0,S),P.emit.apply(P,O)}),a.prototype.on.call(P,S,v)};var u="[CDATA[",h="DOCTYPE",f="http://www.w3.org/XML/1998/namespace",b="http://www.w3.org/2000/xmlns/",g={xml:f,xmlns:b},w=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,p=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,E=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,x=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function m(S){return S===" "||S===`
`||S==="\r"||S==="	"}function _(S){return S==='"'||S==="'"}function A(S){return S===">"||m(S)}function N(S,v){return S.test(v)}function M(S,v){return!N(S,v)}var k=0;e.STATE={BEGIN:k++,BEGIN_WHITESPACE:k++,TEXT:k++,TEXT_ENTITY:k++,OPEN_WAKA:k++,SGML_DECL:k++,SGML_DECL_QUOTED:k++,DOCTYPE:k++,DOCTYPE_QUOTED:k++,DOCTYPE_DTD:k++,DOCTYPE_DTD_QUOTED:k++,COMMENT_STARTING:k++,COMMENT:k++,COMMENT_ENDING:k++,COMMENT_ENDED:k++,CDATA:k++,CDATA_ENDING:k++,CDATA_ENDING_2:k++,PROC_INST:k++,PROC_INST_BODY:k++,PROC_INST_ENDING:k++,OPEN_TAG:k++,OPEN_TAG_SLASH:k++,ATTRIB:k++,ATTRIB_NAME:k++,ATTRIB_NAME_SAW_WHITE:k++,ATTRIB_VALUE:k++,ATTRIB_VALUE_QUOTED:k++,ATTRIB_VALUE_CLOSED:k++,ATTRIB_VALUE_UNQUOTED:k++,ATTRIB_VALUE_ENTITY_Q:k++,ATTRIB_VALUE_ENTITY_U:k++,CLOSE_TAG:k++,CLOSE_TAG_SAW_WHITE:k++,SCRIPT:k++,SCRIPT_ENDING:k++},e.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},e.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach(function(S){var v=e.ENTITIES[S],P=typeof v=="number"?String.fromCharCode(v):v;e.ENTITIES[S]=P});for(var F in e.STATE)e.STATE[e.STATE[F]]=F;k=e.STATE;function R(S,v,P){S[v]&&S[v](P)}function y(S,v,P){S.textNode&&T(S),R(S,v,P)}function T(S){S.textNode=I(S.opt,S.textNode),S.textNode&&R(S,"ontext",S.textNode),S.textNode=""}function I(S,v){return S.trim&&(v=v.trim()),S.normalize&&(v=v.replace(/\s+/g," ")),v}function C(S,v){return T(S),S.trackPosition&&(v+=`
Line: `+S.line+`
Column: `+S.column+`
Char: `+S.c),v=new Error(v),S.error=v,R(S,"onerror",v),S}function U(S){return S.sawRoot&&!S.closedRoot&&B(S,"Unclosed root tag"),S.state!==k.BEGIN&&S.state!==k.BEGIN_WHITESPACE&&S.state!==k.TEXT&&C(S,"Unexpected end"),T(S),S.c="",S.closed=!0,R(S,"onend"),n.call(S,S.strict,S.opt),S}function B(S,v){if(typeof S!="object"||!(S instanceof n))throw new Error("bad call to strictFail");S.strict&&C(S,v)}function $(S){S.strict||(S.tagName=S.tagName[S.looseCase]());var v=S.tags[S.tags.length-1]||S,P=S.tag={name:S.tagName,attributes:{}};S.opt.xmlns&&(P.ns=v.ns),S.attribList.length=0,y(S,"onopentagstart",P)}function j(S,v){var P=S.indexOf(":"),O=P<0?["",S]:S.split(":"),Q=O[0],se=O[1];return v&&S==="xmlns"&&(Q="xmlns",se=""),{prefix:Q,local:se}}function X(S){if(S.strict||(S.attribName=S.attribName[S.looseCase]()),S.attribList.indexOf(S.attribName)!==-1||S.tag.attributes.hasOwnProperty(S.attribName)){S.attribName=S.attribValue="";return}if(S.opt.xmlns){var v=j(S.attribName,!0),P=v.prefix,O=v.local;if(P==="xmlns")if(O==="xml"&&S.attribValue!==f)B(S,"xml: prefix must be bound to "+f+`
Actual: `+S.attribValue);else if(O==="xmlns"&&S.attribValue!==b)B(S,"xmlns: prefix must be bound to "+b+`
Actual: `+S.attribValue);else{var Q=S.tag,se=S.tags[S.tags.length-1]||S;Q.ns===se.ns&&(Q.ns=Object.create(se.ns)),Q.ns[O]=S.attribValue}S.attribList.push([S.attribName,S.attribValue])}else S.tag.attributes[S.attribName]=S.attribValue,y(S,"onattribute",{name:S.attribName,value:S.attribValue});S.attribName=S.attribValue=""}function K(S,v){if(S.opt.xmlns){var P=S.tag,O=j(S.tagName);P.prefix=O.prefix,P.local=O.local,P.uri=P.ns[O.prefix]||"",P.prefix&&!P.uri&&(B(S,"Unbound namespace prefix: "+JSON.stringify(S.tagName)),P.uri=O.prefix);var Q=S.tags[S.tags.length-1]||S;P.ns&&Q.ns!==P.ns&&Object.keys(P.ns).forEach(function(Ci){y(S,"onopennamespace",{prefix:Ci,uri:P.ns[Ci]})});for(var se=0,ce=S.attribList.length;se<ce;se++){var he=S.attribList[se],ye=he[0],nt=he[1],oe=j(ye,!0),Oe=oe.prefix,Zt=oe.local,Ln=Oe===""?"":P.ns[Oe]||"",en={name:ye,value:nt,prefix:Oe,local:Zt,uri:Ln};Oe&&Oe!=="xmlns"&&!Ln&&(B(S,"Unbound namespace prefix: "+JSON.stringify(Oe)),en.uri=Oe),S.tag.attributes[ye]=en,y(S,"onattribute",en)}S.attribList.length=0}S.tag.isSelfClosing=!!v,S.sawRoot=!0,S.tags.push(S.tag),y(S,"onopentag",S.tag),v||(!S.noscript&&S.tagName.toLowerCase()==="script"?S.state=k.SCRIPT:S.state=k.TEXT,S.tag=null,S.tagName=""),S.attribName=S.attribValue="",S.attribList.length=0}function me(S){if(!S.tagName){B(S,"Weird empty close tag."),S.textNode+="</>",S.state=k.TEXT;return}if(S.script){if(S.tagName!=="script"){S.script+="</"+S.tagName+">",S.tagName="",S.state=k.SCRIPT;return}y(S,"onscript",S.script),S.script=""}var v=S.tags.length,P=S.tagName;S.strict||(P=P[S.looseCase]());for(var O=P;v--;){var Q=S.tags[v];if(Q.name!==O)B(S,"Unexpected close tag");else break}if(v<0){B(S,"Unmatched closing tag: "+S.tagName),S.textNode+="</"+S.tagName+">",S.state=k.TEXT;return}S.tagName=P;for(var se=S.tags.length;se-- >v;){var ce=S.tag=S.tags.pop();S.tagName=S.tag.name,y(S,"onclosetag",S.tagName);var he={};for(var ye in ce.ns)he[ye]=ce.ns[ye];var nt=S.tags[S.tags.length-1]||S;S.opt.xmlns&&ce.ns!==nt.ns&&Object.keys(ce.ns).forEach(function(oe){var Oe=ce.ns[oe];y(S,"onclosenamespace",{prefix:oe,uri:Oe})})}v===0&&(S.closedRoot=!0),S.tagName=S.attribValue=S.attribName="",S.attribList.length=0,S.state=k.TEXT}function ee(S){var v=S.entity,P=v.toLowerCase(),O,Q="";return S.ENTITIES[v]?S.ENTITIES[v]:S.ENTITIES[P]?S.ENTITIES[P]:(v=P,v.charAt(0)==="#"&&(v.charAt(1)==="x"?(v=v.slice(2),O=parseInt(v,16),Q=O.toString(16)):(v=v.slice(1),O=parseInt(v,10),Q=O.toString(10))),v=v.replace(/^0+/,""),isNaN(O)||Q.toLowerCase()!==v?(B(S,"Invalid character entity"),"&"+S.entity+";"):String.fromCodePoint(O))}function Ie(S,v){v==="<"?(S.state=k.OPEN_WAKA,S.startTagPosition=S.position):m(v)||(B(S,"Non-whitespace before first tag."),S.textNode=v,S.state=k.TEXT)}function Y(S,v){var P="";return v<S.length&&(P=S.charAt(v)),P}function be(S){var v=this;if(this.error)throw this.error;if(v.closed)return C(v,"Cannot write after close. Assign an onready handler.");if(S===null)return U(v);typeof S=="object"&&(S=S.toString());for(var P=0,O="";O=Y(S,P++),v.c=O,!!O;)switch(v.trackPosition&&(v.position++,O===`
`?(v.line++,v.column=0):v.column++),v.state){case k.BEGIN:if(v.state=k.BEGIN_WHITESPACE,O==="\uFEFF")continue;Ie(v,O);continue;case k.BEGIN_WHITESPACE:Ie(v,O);continue;case k.TEXT:if(v.sawRoot&&!v.closedRoot){for(var Q=P-1;O&&O!=="<"&&O!=="&";)O=Y(S,P++),O&&v.trackPosition&&(v.position++,O===`
`?(v.line++,v.column=0):v.column++);v.textNode+=S.substring(Q,P-1)}O==="<"&&!(v.sawRoot&&v.closedRoot&&!v.strict)?(v.state=k.OPEN_WAKA,v.startTagPosition=v.position):(!m(O)&&(!v.sawRoot||v.closedRoot)&&B(v,"Text data outside of root node."),O==="&"?v.state=k.TEXT_ENTITY:v.textNode+=O);continue;case k.SCRIPT:O==="<"?v.state=k.SCRIPT_ENDING:v.script+=O;continue;case k.SCRIPT_ENDING:O==="/"?v.state=k.CLOSE_TAG:(v.script+="<"+O,v.state=k.SCRIPT);continue;case k.OPEN_WAKA:if(O==="!")v.state=k.SGML_DECL,v.sgmlDecl="";else if(!m(O))if(N(w,O))v.state=k.OPEN_TAG,v.tagName=O;else if(O==="/")v.state=k.CLOSE_TAG,v.tagName="";else if(O==="?")v.state=k.PROC_INST,v.procInstName=v.procInstBody="";else{if(B(v,"Unencoded <"),v.startTagPosition+1<v.position){var se=v.position-v.startTagPosition;O=new Array(se).join(" ")+O}v.textNode+="<"+O,v.state=k.TEXT}continue;case k.SGML_DECL:if(v.sgmlDecl+O==="--"){v.state=k.COMMENT,v.comment="",v.sgmlDecl="";continue}v.doctype&&v.doctype!==!0&&v.sgmlDecl?(v.state=k.DOCTYPE_DTD,v.doctype+="<!"+v.sgmlDecl+O,v.sgmlDecl=""):(v.sgmlDecl+O).toUpperCase()===u?(y(v,"onopencdata"),v.state=k.CDATA,v.sgmlDecl="",v.cdata=""):(v.sgmlDecl+O).toUpperCase()===h?(v.state=k.DOCTYPE,(v.doctype||v.sawRoot)&&B(v,"Inappropriately located doctype declaration"),v.doctype="",v.sgmlDecl=""):O===">"?(y(v,"onsgmldeclaration",v.sgmlDecl),v.sgmlDecl="",v.state=k.TEXT):(_(O)&&(v.state=k.SGML_DECL_QUOTED),v.sgmlDecl+=O);continue;case k.SGML_DECL_QUOTED:O===v.q&&(v.state=k.SGML_DECL,v.q=""),v.sgmlDecl+=O;continue;case k.DOCTYPE:O===">"?(v.state=k.TEXT,y(v,"ondoctype",v.doctype),v.doctype=!0):(v.doctype+=O,O==="["?v.state=k.DOCTYPE_DTD:_(O)&&(v.state=k.DOCTYPE_QUOTED,v.q=O));continue;case k.DOCTYPE_QUOTED:v.doctype+=O,O===v.q&&(v.q="",v.state=k.DOCTYPE);continue;case k.DOCTYPE_DTD:O==="]"?(v.doctype+=O,v.state=k.DOCTYPE):O==="<"?(v.state=k.OPEN_WAKA,v.startTagPosition=v.position):_(O)?(v.doctype+=O,v.state=k.DOCTYPE_DTD_QUOTED,v.q=O):v.doctype+=O;continue;case k.DOCTYPE_DTD_QUOTED:v.doctype+=O,O===v.q&&(v.state=k.DOCTYPE_DTD,v.q="");continue;case k.COMMENT:O==="-"?v.state=k.COMMENT_ENDING:v.comment+=O;continue;case k.COMMENT_ENDING:O==="-"?(v.state=k.COMMENT_ENDED,v.comment=I(v.opt,v.comment),v.comment&&y(v,"oncomment",v.comment),v.comment=""):(v.comment+="-"+O,v.state=k.COMMENT);continue;case k.COMMENT_ENDED:O!==">"?(B(v,"Malformed comment"),v.comment+="--"+O,v.state=k.COMMENT):v.doctype&&v.doctype!==!0?v.state=k.DOCTYPE_DTD:v.state=k.TEXT;continue;case k.CDATA:O==="]"?v.state=k.CDATA_ENDING:v.cdata+=O;continue;case k.CDATA_ENDING:O==="]"?v.state=k.CDATA_ENDING_2:(v.cdata+="]"+O,v.state=k.CDATA);continue;case k.CDATA_ENDING_2:O===">"?(v.cdata&&y(v,"oncdata",v.cdata),y(v,"onclosecdata"),v.cdata="",v.state=k.TEXT):O==="]"?v.cdata+="]":(v.cdata+="]]"+O,v.state=k.CDATA);continue;case k.PROC_INST:O==="?"?v.state=k.PROC_INST_ENDING:m(O)?v.state=k.PROC_INST_BODY:v.procInstName+=O;continue;case k.PROC_INST_BODY:if(!v.procInstBody&&m(O))continue;O==="?"?v.state=k.PROC_INST_ENDING:v.procInstBody+=O;continue;case k.PROC_INST_ENDING:O===">"?(y(v,"onprocessinginstruction",{name:v.procInstName,body:v.procInstBody}),v.procInstName=v.procInstBody="",v.state=k.TEXT):(v.procInstBody+="?"+O,v.state=k.PROC_INST_BODY);continue;case k.OPEN_TAG:N(p,O)?v.tagName+=O:($(v),O===">"?K(v):O==="/"?v.state=k.OPEN_TAG_SLASH:(m(O)||B(v,"Invalid character in tag name"),v.state=k.ATTRIB));continue;case k.OPEN_TAG_SLASH:O===">"?(K(v,!0),me(v)):(B(v,"Forward-slash in opening tag not followed by >"),v.state=k.ATTRIB);continue;case k.ATTRIB:if(m(O))continue;O===">"?K(v):O==="/"?v.state=k.OPEN_TAG_SLASH:N(w,O)?(v.attribName=O,v.attribValue="",v.state=k.ATTRIB_NAME):B(v,"Invalid attribute name");continue;case k.ATTRIB_NAME:O==="="?v.state=k.ATTRIB_VALUE:O===">"?(B(v,"Attribute without value"),v.attribValue=v.attribName,X(v),K(v)):m(O)?v.state=k.ATTRIB_NAME_SAW_WHITE:N(p,O)?v.attribName+=O:B(v,"Invalid attribute name");continue;case k.ATTRIB_NAME_SAW_WHITE:if(O==="=")v.state=k.ATTRIB_VALUE;else{if(m(O))continue;B(v,"Attribute without value"),v.tag.attributes[v.attribName]="",v.attribValue="",y(v,"onattribute",{name:v.attribName,value:""}),v.attribName="",O===">"?K(v):N(w,O)?(v.attribName=O,v.state=k.ATTRIB_NAME):(B(v,"Invalid attribute name"),v.state=k.ATTRIB)}continue;case k.ATTRIB_VALUE:if(m(O))continue;_(O)?(v.q=O,v.state=k.ATTRIB_VALUE_QUOTED):(v.opt.unquotedAttributeValues||C(v,"Unquoted attribute value"),v.state=k.ATTRIB_VALUE_UNQUOTED,v.attribValue=O);continue;case k.ATTRIB_VALUE_QUOTED:if(O!==v.q){O==="&"?v.state=k.ATTRIB_VALUE_ENTITY_Q:v.attribValue+=O;continue}X(v),v.q="",v.state=k.ATTRIB_VALUE_CLOSED;continue;case k.ATTRIB_VALUE_CLOSED:m(O)?v.state=k.ATTRIB:O===">"?K(v):O==="/"?v.state=k.OPEN_TAG_SLASH:N(w,O)?(B(v,"No whitespace between attributes"),v.attribName=O,v.attribValue="",v.state=k.ATTRIB_NAME):B(v,"Invalid attribute name");continue;case k.ATTRIB_VALUE_UNQUOTED:if(!A(O)){O==="&"?v.state=k.ATTRIB_VALUE_ENTITY_U:v.attribValue+=O;continue}X(v),O===">"?K(v):v.state=k.ATTRIB;continue;case k.CLOSE_TAG:if(v.tagName)O===">"?me(v):N(p,O)?v.tagName+=O:v.script?(v.script+="</"+v.tagName,v.tagName="",v.state=k.SCRIPT):(m(O)||B(v,"Invalid tagname in closing tag"),v.state=k.CLOSE_TAG_SAW_WHITE);else{if(m(O))continue;M(w,O)?v.script?(v.script+="</"+O,v.state=k.SCRIPT):B(v,"Invalid tagname in closing tag."):v.tagName=O}continue;case k.CLOSE_TAG_SAW_WHITE:if(m(O))continue;O===">"?me(v):B(v,"Invalid characters in closing tag");continue;case k.TEXT_ENTITY:case k.ATTRIB_VALUE_ENTITY_Q:case k.ATTRIB_VALUE_ENTITY_U:var ce,he;switch(v.state){case k.TEXT_ENTITY:ce=k.TEXT,he="textNode";break;case k.ATTRIB_VALUE_ENTITY_Q:ce=k.ATTRIB_VALUE_QUOTED,he="attribValue";break;case k.ATTRIB_VALUE_ENTITY_U:ce=k.ATTRIB_VALUE_UNQUOTED,he="attribValue";break}if(O===";"){var ye=ee(v);v.opt.unparsedEntities&&!Object.values(e.XML_ENTITIES).includes(ye)?(v.entity="",v.state=ce,v.write(ye)):(v[he]+=ye,v.entity="",v.state=ce)}else N(v.entity.length?x:E,O)?v.entity+=O:(B(v,"Invalid character in entity name"),v[he]+="&"+v.entity+O,v.entity="",v.state=ce);continue;default:throw new Error(v,"Unknown state: "+v.state)}return v.position>=v.bufferCheckPosition&&s(v),v}/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */String.fromCodePoint||function(){var S=String.fromCharCode,v=Math.floor,P=function(){var O=16384,Q=[],se,ce,he=-1,ye=arguments.length;if(!ye)return"";for(var nt="";++he<ye;){var oe=Number(arguments[he]);if(!isFinite(oe)||oe<0||oe>1114111||v(oe)!==oe)throw RangeError("Invalid code point: "+oe);oe<=65535?Q.push(oe):(oe-=65536,se=(oe>>10)+55296,ce=oe%1024+56320,Q.push(se,ce)),(he+1===ye||Q.length>O)&&(nt+=S.apply(null,Q),Q.length=0)}return nt};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:P,configurable:!0,writable:!0}):String.fromCodePoint=P}()})(i)}(yr)),yr}var wr,fc;function Yo(){return fc||(fc=1,wr={isArray:function(i){return Array.isArray?Array.isArray(i):Object.prototype.toString.call(i)==="[object Array]"}}),wr}var xr,pc;function Jo(){if(pc)return xr;pc=1;var i=Yo().isArray;return xr={copyOptions:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},ensureFlagExists:function(e,t){(!(e in t)||typeof t[e]!="boolean")&&(t[e]=!1)},ensureSpacesExists:function(e){(!("spaces"in e)||typeof e.spaces!="number"&&typeof e.spaces!="string")&&(e.spaces=0)},ensureAlwaysArrayExists:function(e){(!("alwaysArray"in e)||typeof e.alwaysArray!="boolean"&&!i(e.alwaysArray))&&(e.alwaysArray=!1)},ensureKeyExists:function(e,t){(!(e+"Key"in t)||typeof t[e+"Key"]!="string")&&(t[e+"Key"]=t.compact?"_"+e:e)},checkFnExists:function(e,t){return e+"Fn"in t}},xr}var kr,mc;function gu(){if(mc)return kr;mc=1;var i=ay(),e=Jo(),t=Yo().isArray,n,s;function r(p){return n=e.copyOptions(p),e.ensureFlagExists("ignoreDeclaration",n),e.ensureFlagExists("ignoreInstruction",n),e.ensureFlagExists("ignoreAttributes",n),e.ensureFlagExists("ignoreText",n),e.ensureFlagExists("ignoreComment",n),e.ensureFlagExists("ignoreCdata",n),e.ensureFlagExists("ignoreDoctype",n),e.ensureFlagExists("compact",n),e.ensureFlagExists("alwaysChildren",n),e.ensureFlagExists("addParent",n),e.ensureFlagExists("trim",n),e.ensureFlagExists("nativeType",n),e.ensureFlagExists("nativeTypeAttributes",n),e.ensureFlagExists("sanitize",n),e.ensureFlagExists("instructionHasAttributes",n),e.ensureFlagExists("captureSpacesBetweenElements",n),e.ensureAlwaysArrayExists(n),e.ensureKeyExists("declaration",n),e.ensureKeyExists("instruction",n),e.ensureKeyExists("attributes",n),e.ensureKeyExists("text",n),e.ensureKeyExists("comment",n),e.ensureKeyExists("cdata",n),e.ensureKeyExists("doctype",n),e.ensureKeyExists("type",n),e.ensureKeyExists("name",n),e.ensureKeyExists("elements",n),e.ensureKeyExists("parent",n),e.checkFnExists("doctype",n),e.checkFnExists("instruction",n),e.checkFnExists("cdata",n),e.checkFnExists("comment",n),e.checkFnExists("text",n),e.checkFnExists("instructionName",n),e.checkFnExists("elementName",n),e.checkFnExists("attributeName",n),e.checkFnExists("attributeValue",n),e.checkFnExists("attributes",n),n}function o(p){var E=Number(p);if(!isNaN(E))return E;var x=p.toLowerCase();return x==="true"?!0:x==="false"?!1:p}function a(p,E){var x;if(n.compact){if(!s[n[p+"Key"]]&&(t(n.alwaysArray)?n.alwaysArray.indexOf(n[p+"Key"])!==-1:n.alwaysArray)&&(s[n[p+"Key"]]=[]),s[n[p+"Key"]]&&!t(s[n[p+"Key"]])&&(s[n[p+"Key"]]=[s[n[p+"Key"]]]),p+"Fn"in n&&typeof E=="string"&&(E=n[p+"Fn"](E,s)),p==="instruction"&&("instructionFn"in n||"instructionNameFn"in n)){for(x in E)if(E.hasOwnProperty(x))if("instructionFn"in n)E[x]=n.instructionFn(E[x],x,s);else{var m=E[x];delete E[x],E[n.instructionNameFn(x,m,s)]=m}}t(s[n[p+"Key"]])?s[n[p+"Key"]].push(E):s[n[p+"Key"]]=E}else{s[n.elementsKey]||(s[n.elementsKey]=[]);var _={};if(_[n.typeKey]=p,p==="instruction"){for(x in E)if(E.hasOwnProperty(x))break;_[n.nameKey]="instructionNameFn"in n?n.instructionNameFn(x,E,s):x,n.instructionHasAttributes?(_[n.attributesKey]=E[x][n.attributesKey],"instructionFn"in n&&(_[n.attributesKey]=n.instructionFn(_[n.attributesKey],x,s))):("instructionFn"in n&&(E[x]=n.instructionFn(E[x],x,s)),_[n.instructionKey]=E[x])}else p+"Fn"in n&&(E=n[p+"Fn"](E,s)),_[n[p+"Key"]]=E;n.addParent&&(_[n.parentKey]=s),s[n.elementsKey].push(_)}}function l(p){if("attributesFn"in n&&p&&(p=n.attributesFn(p,s)),(n.trim||"attributeValueFn"in n||"attributeNameFn"in n||n.nativeTypeAttributes)&&p){var E;for(E in p)if(p.hasOwnProperty(E)&&(n.trim&&(p[E]=p[E].trim()),n.nativeTypeAttributes&&(p[E]=o(p[E])),"attributeValueFn"in n&&(p[E]=n.attributeValueFn(p[E],E,s)),"attributeNameFn"in n)){var x=p[E];delete p[E],p[n.attributeNameFn(E,p[E],s)]=x}}return p}function c(p){var E={};if(p.body&&(p.name.toLowerCase()==="xml"||n.instructionHasAttributes)){for(var x=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,m;(m=x.exec(p.body))!==null;)E[m[1]]=m[2]||m[3]||m[4];E=l(E)}if(p.name.toLowerCase()==="xml"){if(n.ignoreDeclaration)return;s[n.declarationKey]={},Object.keys(E).length&&(s[n.declarationKey][n.attributesKey]=E),n.addParent&&(s[n.declarationKey][n.parentKey]=s)}else{if(n.ignoreInstruction)return;n.trim&&(p.body=p.body.trim());var _={};n.instructionHasAttributes&&Object.keys(E).length?(_[p.name]={},_[p.name][n.attributesKey]=E):_[p.name]=p.body,a("instruction",_)}}function d(p,E){var x;if(typeof p=="object"&&(E=p.attributes,p=p.name),E=l(E),"elementNameFn"in n&&(p=n.elementNameFn(p,s)),n.compact){if(x={},!n.ignoreAttributes&&E&&Object.keys(E).length){x[n.attributesKey]={};var m;for(m in E)E.hasOwnProperty(m)&&(x[n.attributesKey][m]=E[m])}!(p in s)&&(t(n.alwaysArray)?n.alwaysArray.indexOf(p)!==-1:n.alwaysArray)&&(s[p]=[]),s[p]&&!t(s[p])&&(s[p]=[s[p]]),t(s[p])?s[p].push(x):s[p]=x}else s[n.elementsKey]||(s[n.elementsKey]=[]),x={},x[n.typeKey]="element",x[n.nameKey]=p,!n.ignoreAttributes&&E&&Object.keys(E).length&&(x[n.attributesKey]=E),n.alwaysChildren&&(x[n.elementsKey]=[]),s[n.elementsKey].push(x);x[n.parentKey]=s,s=x}function u(p){n.ignoreText||!p.trim()&&!n.captureSpacesBetweenElements||(n.trim&&(p=p.trim()),n.nativeType&&(p=o(p)),n.sanitize&&(p=p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),a("text",p))}function h(p){n.ignoreComment||(n.trim&&(p=p.trim()),a("comment",p))}function f(p){var E=s[n.parentKey];n.addParent||delete s[n.parentKey],s=E}function b(p){n.ignoreCdata||(n.trim&&(p=p.trim()),a("cdata",p))}function g(p){n.ignoreDoctype||(p=p.replace(/^ /,""),n.trim&&(p=p.trim()),a("doctype",p))}function w(p){p.note=p}return kr=function(p,E){var x=i.parser(!0,{}),m={};if(s=m,n=r(E),x.opt={strictEntities:!0},x.onopentag=d,x.ontext=u,x.oncomment=h,x.onclosetag=f,x.onerror=w,x.oncdata=b,x.ondoctype=g,x.onprocessinginstruction=c,x.write(p).close(),m[n.elementsKey]){var _=m[n.elementsKey];delete m[n.elementsKey],m[n.elementsKey]=_,delete m.text}return m},kr}var Er,gc;function ly(){if(gc)return Er;gc=1;var i=Jo(),e=gu();function t(n){var s=i.copyOptions(n);return i.ensureSpacesExists(s),s}return Er=function(n,s){var r,o,a,l;return r=t(s),o=e(n,r),l="compact"in r&&r.compact?"_parent":"parent","addParent"in r&&r.addParent?a=JSON.stringify(o,function(c,d){return c===l?"_":d},r.spaces):a=JSON.stringify(o,null,r.spaces),a.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")},Er}var Sr,bc;function bu(){if(bc)return Sr;bc=1;var i=Jo(),e=Yo().isArray,t,n;function s(x){var m=i.copyOptions(x);return i.ensureFlagExists("ignoreDeclaration",m),i.ensureFlagExists("ignoreInstruction",m),i.ensureFlagExists("ignoreAttributes",m),i.ensureFlagExists("ignoreText",m),i.ensureFlagExists("ignoreComment",m),i.ensureFlagExists("ignoreCdata",m),i.ensureFlagExists("ignoreDoctype",m),i.ensureFlagExists("compact",m),i.ensureFlagExists("indentText",m),i.ensureFlagExists("indentCdata",m),i.ensureFlagExists("indentAttributes",m),i.ensureFlagExists("indentInstruction",m),i.ensureFlagExists("fullTagEmptyElement",m),i.ensureFlagExists("noQuotesForNativeAttributes",m),i.ensureSpacesExists(m),typeof m.spaces=="number"&&(m.spaces=Array(m.spaces+1).join(" ")),i.ensureKeyExists("declaration",m),i.ensureKeyExists("instruction",m),i.ensureKeyExists("attributes",m),i.ensureKeyExists("text",m),i.ensureKeyExists("comment",m),i.ensureKeyExists("cdata",m),i.ensureKeyExists("doctype",m),i.ensureKeyExists("type",m),i.ensureKeyExists("name",m),i.ensureKeyExists("elements",m),i.checkFnExists("doctype",m),i.checkFnExists("instruction",m),i.checkFnExists("cdata",m),i.checkFnExists("comment",m),i.checkFnExists("text",m),i.checkFnExists("instructionName",m),i.checkFnExists("elementName",m),i.checkFnExists("attributeName",m),i.checkFnExists("attributeValue",m),i.checkFnExists("attributes",m),i.checkFnExists("fullTagEmptyElement",m),m}function r(x,m,_){return(!_&&x.spaces?`
`:"")+Array(m+1).join(x.spaces)}function o(x,m,_){if(m.ignoreAttributes)return"";"attributesFn"in m&&(x=m.attributesFn(x,n,t));var A,N,M,k,F=[];for(A in x)x.hasOwnProperty(A)&&x[A]!==null&&x[A]!==void 0&&(k=m.noQuotesForNativeAttributes&&typeof x[A]!="string"?"":'"',N=""+x[A],N=N.replace(/"/g,"&quot;"),M="attributeNameFn"in m?m.attributeNameFn(A,N,n,t):A,F.push(m.spaces&&m.indentAttributes?r(m,_+1,!1):" "),F.push(M+"="+k+("attributeValueFn"in m?m.attributeValueFn(N,A,n,t):N)+k));return x&&Object.keys(x).length&&m.spaces&&m.indentAttributes&&F.push(r(m,_,!1)),F.join("")}function a(x,m,_){return t=x,n="xml",m.ignoreDeclaration?"":"<?xml"+o(x[m.attributesKey],m,_)+"?>"}function l(x,m,_){if(m.ignoreInstruction)return"";var A;for(A in x)if(x.hasOwnProperty(A))break;var N="instructionNameFn"in m?m.instructionNameFn(A,x[A],n,t):A;if(typeof x[A]=="object")return t=x,n=N,"<?"+N+o(x[A][m.attributesKey],m,_)+"?>";var M=x[A]?x[A]:"";return"instructionFn"in m&&(M=m.instructionFn(M,A,n,t)),"<?"+N+(M?" "+M:"")+"?>"}function c(x,m){return m.ignoreComment?"":"<!--"+("commentFn"in m?m.commentFn(x,n,t):x)+"-->"}function d(x,m){return m.ignoreCdata?"":"<![CDATA["+("cdataFn"in m?m.cdataFn(x,n,t):x.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function u(x,m){return m.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in m?m.doctypeFn(x,n,t):x)+">"}function h(x,m){return m.ignoreText?"":(x=""+x,x=x.replace(/&amp;/g,"&"),x=x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in m?m.textFn(x,n,t):x)}function f(x,m){var _;if(x.elements&&x.elements.length)for(_=0;_<x.elements.length;++_)switch(x.elements[_][m.typeKey]){case"text":if(m.indentText)return!0;break;case"cdata":if(m.indentCdata)return!0;break;case"instruction":if(m.indentInstruction)return!0;break;case"doctype":case"comment":case"element":return!0;default:return!0}return!1}function b(x,m,_){t=x,n=x.name;var A=[],N="elementNameFn"in m?m.elementNameFn(x.name,x):x.name;A.push("<"+N),x[m.attributesKey]&&A.push(o(x[m.attributesKey],m,_));var M=x[m.elementsKey]&&x[m.elementsKey].length||x[m.attributesKey]&&x[m.attributesKey]["xml:space"]==="preserve";return M||("fullTagEmptyElementFn"in m?M=m.fullTagEmptyElementFn(x.name,x):M=m.fullTagEmptyElement),M?(A.push(">"),x[m.elementsKey]&&x[m.elementsKey].length&&(A.push(g(x[m.elementsKey],m,_+1)),t=x,n=x.name),A.push(m.spaces&&f(x,m)?`
`+Array(_+1).join(m.spaces):""),A.push("</"+N+">")):A.push("/>"),A.join("")}function g(x,m,_,A){return x.reduce(function(N,M){var k=r(m,_,A&&!N);switch(M.type){case"element":return N+k+b(M,m,_);case"comment":return N+k+c(M[m.commentKey],m);case"doctype":return N+k+u(M[m.doctypeKey],m);case"cdata":return N+(m.indentCdata?k:"")+d(M[m.cdataKey],m);case"text":return N+(m.indentText?k:"")+h(M[m.textKey],m);case"instruction":var F={};return F[M[m.nameKey]]=M[m.attributesKey]?M:M[m.instructionKey],N+(m.indentInstruction?k:"")+l(F,m,_)}},"")}function w(x,m,_){var A;for(A in x)if(x.hasOwnProperty(A))switch(A){case m.parentKey:case m.attributesKey:break;case m.textKey:if(m.indentText||_)return!0;break;case m.cdataKey:if(m.indentCdata||_)return!0;break;case m.instructionKey:if(m.indentInstruction||_)return!0;break;case m.doctypeKey:case m.commentKey:return!0;default:return!0}return!1}function p(x,m,_,A,N){t=x,n=m;var M="elementNameFn"in _?_.elementNameFn(m,x):m;if(typeof x>"u"||x===null||x==="")return"fullTagEmptyElementFn"in _&&_.fullTagEmptyElementFn(m,x)||_.fullTagEmptyElement?"<"+M+"></"+M+">":"<"+M+"/>";var k=[];if(m){if(k.push("<"+M),typeof x!="object")return k.push(">"+h(x,_)+"</"+M+">"),k.join("");x[_.attributesKey]&&k.push(o(x[_.attributesKey],_,A));var F=w(x,_,!0)||x[_.attributesKey]&&x[_.attributesKey]["xml:space"]==="preserve";if(F||("fullTagEmptyElementFn"in _?F=_.fullTagEmptyElementFn(m,x):F=_.fullTagEmptyElement),F)k.push(">");else return k.push("/>"),k.join("")}return k.push(E(x,_,A+1,!1)),t=x,n=m,m&&k.push((N?r(_,A,!1):"")+"</"+M+">"),k.join("")}function E(x,m,_,A){var N,M,k,F=[];for(M in x)if(x.hasOwnProperty(M))for(k=e(x[M])?x[M]:[x[M]],N=0;N<k.length;++N){switch(M){case m.declarationKey:F.push(a(k[N],m,_));break;case m.instructionKey:F.push((m.indentInstruction?r(m,_,A):"")+l(k[N],m,_));break;case m.attributesKey:case m.parentKey:break;case m.textKey:F.push((m.indentText?r(m,_,A):"")+h(k[N],m));break;case m.cdataKey:F.push((m.indentCdata?r(m,_,A):"")+d(k[N],m));break;case m.doctypeKey:F.push(r(m,_,A)+u(k[N],m));break;case m.commentKey:F.push(r(m,_,A)+c(k[N],m));break;default:F.push(r(m,_,A)+p(k[N],M,m,_,w(k[N],m)))}A=A&&!F.length}return F.join("")}return Sr=function(x,m){m=s(m);var _=[];return t=x,n="_root_",m.compact?_.push(E(x,m,0,!0)):(x[m.declarationKey]&&_.push(a(x[m.declarationKey],m,0)),x[m.elementsKey]&&x[m.elementsKey].length&&_.push(g(x[m.elementsKey],m,0,!_.length))),_.join("")},Sr}var Tr,yc;function cy(){if(yc)return Tr;yc=1;var i=bu();return Tr=function(e,t){e instanceof Buffer&&(e=e.toString());var n=null;if(typeof e=="string")try{n=JSON.parse(e)}catch{throw new Error("The JSON structure is invalid")}else n=e;return i(n,t)},Tr}var _r,vc;function dy(){if(vc)return _r;vc=1;var i=gu(),e=ly(),t=bu(),n=cy();return _r={xml2js:i,xml2json:e,js2xml:t,json2xml:n},_r}var wc=dy();const Xo=Symbol.for("yaml.alias"),xo=Symbol.for("yaml.document"),_t=Symbol.for("yaml.map"),yu=Symbol.for("yaml.pair"),ht=Symbol.for("yaml.scalar"),Tn=Symbol.for("yaml.seq"),Ye=Symbol.for("yaml.node.type"),Yt=i=>!!i&&typeof i=="object"&&i[Ye]===Xo,Jt=i=>!!i&&typeof i=="object"&&i[Ye]===xo,_n=i=>!!i&&typeof i=="object"&&i[Ye]===_t,le=i=>!!i&&typeof i=="object"&&i[Ye]===yu,ie=i=>!!i&&typeof i=="object"&&i[Ye]===ht,Cn=i=>!!i&&typeof i=="object"&&i[Ye]===Tn;function de(i){if(i&&typeof i=="object")switch(i[Ye]){case _t:case Tn:return!0}return!1}function ue(i){if(i&&typeof i=="object")switch(i[Ye]){case Xo:case _t:case ht:case Tn:return!0}return!1}const uy=i=>(ie(i)||de(i))&&!!i.anchor,Pe=Symbol("break visit"),vu=Symbol("skip children"),ut=Symbol("remove node");function It(i,e){const t=wu(e);Jt(i)?un(null,i.contents,t,Object.freeze([i]))===ut&&(i.contents=null):un(null,i,t,Object.freeze([]))}It.BREAK=Pe;It.SKIP=vu;It.REMOVE=ut;function un(i,e,t,n){const s=xu(i,e,t,n);if(ue(s)||le(s))return ku(i,n,s),un(i,s,t,n);if(typeof s!="symbol"){if(de(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const o=un(r,e.items[r],t,n);if(typeof o=="number")r=o-1;else{if(o===Pe)return Pe;o===ut&&(e.items.splice(r,1),r-=1)}}}else if(le(e)){n=Object.freeze(n.concat(e));const r=un("key",e.key,t,n);if(r===Pe)return Pe;r===ut&&(e.key=null);const o=un("value",e.value,t,n);if(o===Pe)return Pe;o===ut&&(e.value=null)}}return s}async function Bs(i,e){const t=wu(e);Jt(i)?await hn(null,i.contents,t,Object.freeze([i]))===ut&&(i.contents=null):await hn(null,i,t,Object.freeze([]))}Bs.BREAK=Pe;Bs.SKIP=vu;Bs.REMOVE=ut;async function hn(i,e,t,n){const s=await xu(i,e,t,n);if(ue(s)||le(s))return ku(i,n,s),hn(i,s,t,n);if(typeof s!="symbol"){if(de(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const o=await hn(r,e.items[r],t,n);if(typeof o=="number")r=o-1;else{if(o===Pe)return Pe;o===ut&&(e.items.splice(r,1),r-=1)}}}else if(le(e)){n=Object.freeze(n.concat(e));const r=await hn("key",e.key,t,n);if(r===Pe)return Pe;r===ut&&(e.key=null);const o=await hn("value",e.value,t,n);if(o===Pe)return Pe;o===ut&&(e.value=null)}}return s}function wu(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function xu(i,e,t,n){var s,r,o,a,l;if(typeof t=="function")return t(i,e,n);if(_n(e))return(s=t.Map)==null?void 0:s.call(t,i,e,n);if(Cn(e))return(r=t.Seq)==null?void 0:r.call(t,i,e,n);if(le(e))return(o=t.Pair)==null?void 0:o.call(t,i,e,n);if(ie(e))return(a=t.Scalar)==null?void 0:a.call(t,i,e,n);if(Yt(e))return(l=t.Alias)==null?void 0:l.call(t,i,e,n)}function ku(i,e,t){const n=e[e.length-1];if(de(n))n.items[i]=t;else if(le(n))i==="key"?n.key=t:n.value=t;else if(Jt(n))n.contents=t;else{const s=Yt(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const hy={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},fy=i=>i.replace(/[!,[\]{}]/g,e=>hy[e]);class Le{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Le.defaultYaml,e),this.tags=Object.assign({},Le.defaultTags,t)}clone(){const e=new Le(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Le(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Le.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Le.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:Le.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Le.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[r,o]=n;return this.tags[r]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=n;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const o=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,o),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const o=e.slice(2,-1);return o==="!"||o==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),o)}const[,n,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[n];if(r)try{return r+decodeURIComponent(s)}catch(o){return t(String(o)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+fy(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&ue(e.contents)){const r={};It(e.contents,(o,a)=>{ue(a)&&a.tag&&(r[a.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,o]of n)r==="!!"&&o==="tag:yaml.org,2002:"||(!e||s.some(a=>a.startsWith(o)))&&t.push(`%TAG ${r} ${o}`);return t.join(`
`)}}Le.defaultYaml={explicit:!1,version:"1.2"};Le.defaultTags={"!!":"tag:yaml.org,2002:"};function Eu(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(t)}return!0}function Su(i){const e=new Set;return It(i,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function Tu(i,e){for(let t=1;;++t){const n=`${i}${t}`;if(!e.has(n))return n}}function py(i,e){const t=[],n=new Map;let s=null;return{onAnchor:r=>{t.push(r),s||(s=Su(i));const o=Tu(e,s);return s.add(o),o},setAnchors:()=>{for(const r of t){const o=n.get(r);if(typeof o=="object"&&o.anchor&&(ie(o.node)||de(o.node)))o.node.anchor=o.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=r,a}}},sourceObjects:n}}function fn(i,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,r=n.length;s<r;++s){const o=n[s],a=fn(i,n,String(s),o);a===void 0?delete n[s]:a!==o&&(n[s]=a)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const r=n.get(s),o=fn(i,n,s,r);o===void 0?n.delete(s):o!==r&&n.set(s,o)}else if(n instanceof Set)for(const s of Array.from(n)){const r=fn(i,n,s,s);r===void 0?n.delete(s):r!==s&&(n.delete(s),n.add(r))}else for(const[s,r]of Object.entries(n)){const o=fn(i,n,s,r);o===void 0?delete n[s]:o!==r&&(n[s]=o)}return i.call(e,t,n)}function Ke(i,e,t){if(Array.isArray(i))return i.map((n,s)=>Ke(n,String(s),t));if(i&&typeof i.toJSON=="function"){if(!t||!uy(i))return i.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(i,n),t.onCreate=r=>{n.res=r,delete t.onCreate};const s=i.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof i=="bigint"&&!(t!=null&&t.keep)?Number(i):i}class Qo{constructor(e){Object.defineProperty(this,Ye,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:s,reviver:r}={}){if(!Jt(e))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},a=Ke(this,"",o);if(typeof s=="function")for(const{count:l,res:c}of o.anchors.values())s(c,l);return typeof r=="function"?fn(r,{"":a},"",a):a}}class Rs extends Qo{constructor(e){super(Xo),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let t;return It(e,{Node:(n,s)=>{if(s===this)return It.BREAK;s.anchor===this.source&&(t=s)}}),t}toJSON(e,t){if(!t)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:r}=t,o=this.resolve(s);if(!o){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=n.get(o);if(a||(Ke(o,null,t),a=n.get(o)),!a||a.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(r>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=os(s,o,n)),a.count*a.aliasCount>r)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(e,t,n){const s=`*${this.source}`;if(e){if(Eu(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function os(i,e,t){if(Yt(e)){const n=e.resolve(i),s=t&&n&&t.get(n);return s?s.count*s.aliasCount:0}else if(de(e)){let n=0;for(const s of e.items){const r=os(i,s,t);r>n&&(n=r)}return n}else if(le(e)){const n=os(i,e.key,t),s=os(i,e.value,t);return Math.max(n,s)}return 1}const _u=i=>!i||typeof i!="function"&&typeof i!="object";class V extends Qo{constructor(e){super(ht),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:Ke(this.value,e,t)}toString(){return String(this.value)}}V.BLOCK_FOLDED="BLOCK_FOLDED";V.BLOCK_LITERAL="BLOCK_LITERAL";V.PLAIN="PLAIN";V.QUOTE_DOUBLE="QUOTE_DOUBLE";V.QUOTE_SINGLE="QUOTE_SINGLE";const my="tag:yaml.org,2002:";function gy(i,e,t){if(e){const n=t.filter(r=>r.tag===e),s=n.find(r=>!r.format)??n[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(n=>{var s;return((s=n.identify)==null?void 0:s.call(n,i))&&!n.format})}function yi(i,e,t){var u,h,f;if(Jt(i)&&(i=i.contents),ue(i))return i;if(le(i)){const b=(h=(u=t.schema[_t]).createNode)==null?void 0:h.call(u,t.schema,null,t);return b.items.push(i),b}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:r,schema:o,sourceObjects:a}=t;let l;if(n&&i&&typeof i=="object"){if(l=a.get(i),l)return l.anchor||(l.anchor=s(i)),new Rs(l.anchor);l={anchor:null,node:null},a.set(i,l)}e!=null&&e.startsWith("!!")&&(e=my+e.slice(2));let c=gy(i,e,o.tags);if(!c){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const b=new V(i);return l&&(l.node=b),b}c=i instanceof Map?o[_t]:Symbol.iterator in Object(i)?o[Tn]:o[_t]}r&&(r(c),delete t.onTagObj);const d=c!=null&&c.createNode?c.createNode(t.schema,i,t):typeof((f=c==null?void 0:c.nodeClass)==null?void 0:f.from)=="function"?c.nodeClass.from(t.schema,i,t):new V(i);return e?d.tag=e:c.default||(d.tag=c.tag),l&&(l.node=d),d}function Ss(i,e,t){let n=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const o=[];o[r]=n,n=o}else n=new Map([[r,n]])}return yi(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const Zn=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class Cu extends Qo{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>ue(n)||le(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Zn(e))this.add(t);else{const[n,...s]=e,r=this.get(n,!0);if(de(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(n,Ss(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const s=this.get(t,!0);if(de(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...s]=e,r=this.get(n,!0);return s.length===0?!t&&ie(r)?r.value:r:de(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!le(t))return!1;const n=t.value;return n==null||e&&ie(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const s=this.get(t,!0);return de(s)?s.hasIn(n):!1}setIn(e,t){const[n,...s]=e;if(s.length===0)this.set(n,t);else{const r=this.get(n,!0);if(de(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(n,Ss(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}const by=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function wt(i,e){return/^\n+$/.test(i)?i.substring(1):e?i.replace(/^(?! *$)/gm,e):i}const $t=(i,e,t)=>i.endsWith(`
`)?wt(t,e):t.includes(`
`)?`
`+wt(t,e):(i.endsWith(" ")?"":" ")+t,Iu="flow",ko="block",as="quoted";function Ps(i,e,t="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:r=20,onFold:o,onOverflow:a}={}){if(!s||s<0)return i;s<r&&(r=0);const l=Math.max(1+r,1+s-e.length);if(i.length<=l)return i;const c=[],d={};let u=s-e.length;typeof n=="number"&&(n>s-Math.max(2,r)?c.push(0):u=s-n);let h,f,b=!1,g=-1,w=-1,p=-1;t===ko&&(g=xc(i,g,e.length),g!==-1&&(u=g+l));for(let x;x=i[g+=1];){if(t===as&&x==="\\"){switch(w=g,i[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}p=g}if(x===`
`)t===ko&&(g=xc(i,g,e.length)),u=g+e.length+l,h=void 0;else{if(x===" "&&f&&f!==" "&&f!==`
`&&f!=="	"){const m=i[g+1];m&&m!==" "&&m!==`
`&&m!=="	"&&(h=g)}if(g>=u)if(h)c.push(h),u=h+l,h=void 0;else if(t===as){for(;f===" "||f==="	";)f=x,x=i[g+=1],b=!0;const m=g>p+1?g-2:w-1;if(d[m])return i;c.push(m),d[m]=!0,u=m+l,h=void 0}else b=!0}f=x}if(b&&a&&a(),c.length===0)return i;o&&o();let E=i.slice(0,c[0]);for(let x=0;x<c.length;++x){const m=c[x],_=c[x+1]||i.length;m===0?E=`
${e}${i.slice(0,_)}`:(t===as&&d[m]&&(E+=`${i[m]}\\`),E+=`
${e}${i.slice(m+1,_)}`)}return E}function xc(i,e,t){let n=e,s=e+1,r=i[s];for(;r===" "||r==="	";)if(e<s+t)r=i[++e];else{do r=i[++e];while(r&&r!==`
`);n=e,s=e+1,r=i[s]}return n}const Fs=(i,e)=>({indentAtStart:e?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),$s=i=>/^(%|---|\.\.\.)/m.test(i);function yy(i,e,t){if(!e||e<0)return!1;const n=e-t,s=i.length;if(s<=n)return!1;for(let r=0,o=0;r<s;++r)if(i[r]===`
`){if(r-o>n)return!0;if(o=r+1,s-o<=n)return!1}return!0}function ui(i,e){const t=JSON.stringify(i);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||($s(i)?"  ":"");let o="",a=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(o+=t.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{o+=t.slice(a,l);const d=t.substr(l+2,4);switch(d){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:d.substr(0,2)==="00"?o+="\\x"+d.substr(2):o+=t.substr(l,6)}l+=5,a=l+1}break;case"n":if(n||t[l+2]==='"'||t.length<s)l+=1;else{for(o+=t.slice(a,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)o+=`
`,l+=2;o+=r,t[l+2]===" "&&(o+="\\"),l+=1,a=l+1}break;default:l+=1}return o=a?o+t.slice(a):t,n?o:Ps(o,r,as,Fs(e,!1))}function Eo(i,e){if(e.options.singleQuote===!1||e.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return ui(i,e);const t=e.indent||($s(i)?"  ":""),n="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:Ps(n,t,Iu,Fs(e,!1))}function pn(i,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=ui;else{const s=i.includes('"'),r=i.includes("'");s&&!r?n=Eo:r&&!s?n=ui:n=t?Eo:ui}return n(i,e)}let So;try{So=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{So=/\n+(?!\n|$)/g}function ls({comment:i,type:e,value:t},n,s,r){const{blockQuote:o,commentString:a,lineWidth:l}=n.options;if(!o||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return pn(t,n);const c=n.indent||(n.forceBlockIndent||$s(t)?"  ":""),d=o==="literal"?!0:o==="folded"||e===V.BLOCK_FOLDED?!1:e===V.BLOCK_LITERAL?!0:!yy(t,l,c.length);if(!t)return d?`|
`:`>
`;let u,h;for(h=t.length;h>0;--h){const _=t[h-1];if(_!==`
`&&_!=="	"&&_!==" ")break}let f=t.substring(h);const b=f.indexOf(`
`);b===-1?u="-":t===f||b!==f.length-1?(u="+",r&&r()):u="",f&&(t=t.slice(0,-f.length),f[f.length-1]===`
`&&(f=f.slice(0,-1)),f=f.replace(So,`$&${c}`));let g=!1,w,p=-1;for(w=0;w<t.length;++w){const _=t[w];if(_===" ")g=!0;else if(_===`
`)p=w;else break}let E=t.substring(0,p<w?p+1:w);E&&(t=t.substring(E.length),E=E.replace(/\n+/g,`$&${c}`));let m=(g?c?"2":"1":"")+u;if(i&&(m+=" "+a(i.replace(/ ?[\r\n]+/g," ")),s&&s()),!d){const _=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let A=!1;const N=Fs(n,!0);o!=="folded"&&e!==V.BLOCK_FOLDED&&(N.onOverflow=()=>{A=!0});const M=Ps(`${E}${_}${f}`,c,ko,N);if(!A)return`>${m}
${c}${M}`}return t=t.replace(/\n+/g,`$&${c}`),`|${m}
${c}${E}${t}${f}`}function vy(i,e,t,n){const{type:s,value:r}=i,{actualString:o,implicitKey:a,indent:l,indentStep:c,inFlow:d}=e;if(a&&r.includes(`
`)||d&&/[[\]{},]/.test(r))return pn(r,e);if(!r||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return a||d||!r.includes(`
`)?pn(r,e):ls(i,e,t,n);if(!a&&!d&&s!==V.PLAIN&&r.includes(`
`))return ls(i,e,t,n);if($s(r)){if(l==="")return e.forceBlockIndent=!0,ls(i,e,t,n);if(a&&l===c)return pn(r,e)}const u=r.replace(/\n+/g,`$&
${l}`);if(o){const h=g=>{var w;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((w=g.test)==null?void 0:w.test(u))},{compat:f,tags:b}=e.doc.schema;if(b.some(h)||f!=null&&f.some(h))return pn(r,e)}return a?u:Ps(u,l,Iu,Fs(e,!1))}function Si(i,e,t,n){const{implicitKey:s,inFlow:r}=e,o=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:a}=i;a!==V.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=V.QUOTE_DOUBLE);const l=d=>{switch(d){case V.BLOCK_FOLDED:case V.BLOCK_LITERAL:return s||r?pn(o.value,e):ls(o,e,t,n);case V.QUOTE_DOUBLE:return ui(o.value,e);case V.QUOTE_SINGLE:return Eo(o.value,e);case V.PLAIN:return vy(o,e,t,n);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:d,defaultStringType:u}=e.options,h=s&&d||u;if(c=l(h),c===null)throw new Error(`Unsupported default string type ${h}`)}return c}function Mu(i,e){const t=Object.assign({blockQuote:!0,commentString:by,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:i,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function wy(i,e){var s;if(e.tag){const r=i.filter(o=>o.tag===e.tag);if(r.length>0)return r.find(o=>o.format===e.format)??r[0]}let t,n;if(ie(e)){n=e.value;let r=i.filter(o=>{var a;return(a=o.identify)==null?void 0:a.call(o,n)});if(r.length>1){const o=r.filter(a=>a.test);o.length>0&&(r=o)}t=r.find(o=>o.format===e.format)??r.find(o=>!o.format)}else n=e,t=i.find(r=>r.nodeClass&&n instanceof r.nodeClass);if(!t){const r=((s=n==null?void 0:n.constructor)==null?void 0:s.name)??typeof n;throw new Error(`Tag not resolved for ${r} value`)}return t}function xy(i,e,{anchors:t,doc:n}){if(!n.directives)return"";const s=[],r=(ie(i)||de(i))&&i.anchor;r&&Eu(r)&&(t.add(r),s.push(`&${r}`));const o=i.tag?i.tag:e.default?null:e.tag;return o&&s.push(n.directives.tagString(o)),s.join(" ")}function kn(i,e,t,n){var l;if(le(i))return i.toString(e,t,n);if(Yt(i)){if(e.doc.directives)return i.toString(e);if((l=e.resolvedAliases)!=null&&l.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(i):e.resolvedAliases=new Set([i]),i=i.resolve(e.doc)}let s;const r=ue(i)?i:e.doc.createNode(i,{onTagObj:c=>s=c});s||(s=wy(e.doc.schema.tags,r));const o=xy(r,s,e);o.length>0&&(e.indentAtStart=(e.indentAtStart??0)+o.length+1);const a=typeof s.stringify=="function"?s.stringify(r,e,t,n):ie(r)?Si(r,e,t,n):r.toString(e,t,n);return o?ie(r)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${e.indent}${a}`:a}function ky({key:i,value:e},t,n,s){const{allNullValues:r,doc:o,indent:a,indentStep:l,options:{commentString:c,indentSeq:d,simpleKeys:u}}=t;let h=ue(i)&&i.comment||null;if(u){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(de(i)||!ue(i)&&typeof i=="object"){const N="With simple keys, collection cannot be used as a key value";throw new Error(N)}}let f=!u&&(!i||h&&e==null&&!t.inFlow||de(i)||(ie(i)?i.type===V.BLOCK_FOLDED||i.type===V.BLOCK_LITERAL:typeof i=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!f&&(u||!r),indent:a+l});let b=!1,g=!1,w=kn(i,t,()=>b=!0,()=>g=!0);if(!f&&!t.inFlow&&w.length>1024){if(u)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(t.inFlow){if(r||e==null)return b&&n&&n(),w===""?"?":f?`? ${w}`:w}else if(r&&!u||e==null&&f)return w=`? ${w}`,h&&!b?w+=$t(w,t.indent,c(h)):g&&s&&s(),w;b&&(h=null),f?(h&&(w+=$t(w,t.indent,c(h))),w=`? ${w}
${a}:`):(w=`${w}:`,h&&(w+=$t(w,t.indent,c(h))));let p,E,x;ue(e)?(p=!!e.spaceBefore,E=e.commentBefore,x=e.comment):(p=!1,E=null,x=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!f&&!h&&ie(e)&&(t.indentAtStart=w.length+1),g=!1,!d&&l.length>=2&&!t.inFlow&&!f&&Cn(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let m=!1;const _=kn(e,t,()=>m=!0,()=>g=!0);let A=" ";if(h||p||E){if(A=p?`
`:"",E){const N=c(E);A+=`
${wt(N,t.indent)}`}_===""&&!t.inFlow?A===`
`&&(A=`

`):A+=`
${t.indent}`}else if(!f&&de(e)){const N=_[0],M=_.indexOf(`
`),k=M!==-1,F=t.inFlow??e.flow??e.items.length===0;if(k||!F){let R=!1;if(k&&(N==="&"||N==="!")){let y=_.indexOf(" ");N==="&"&&y!==-1&&y<M&&_[y+1]==="!"&&(y=_.indexOf(" ",y+1)),(y===-1||M<y)&&(R=!0)}R||(A=`
${t.indent}`)}}else(_===""||_[0]===`
`)&&(A="");return w+=A+_,t.inFlow?m&&n&&n():x&&!m?w+=$t(w,t.indent,c(x)):g&&s&&s(),w}function Au(i,e){(i==="debug"||i==="warn")&&console.warn(e)}const Xi="<<",xt={identify:i=>i===Xi||typeof i=="symbol"&&i.description===Xi,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new V(Symbol(Xi)),{addToJSMap:Lu}),stringify:()=>Xi},Ey=(i,e)=>(xt.identify(e)||ie(e)&&(!e.type||e.type===V.PLAIN)&&xt.identify(e.value))&&(i==null?void 0:i.doc.schema.tags.some(t=>t.tag===xt.tag&&t.default));function Lu(i,e,t){if(t=i&&Yt(t)?t.resolve(i.doc):t,Cn(t))for(const n of t.items)Cr(i,e,n);else if(Array.isArray(t))for(const n of t)Cr(i,e,n);else Cr(i,e,t)}function Cr(i,e,t){const n=i&&Yt(t)?t.resolve(i.doc):t;if(!_n(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,i,Map);for(const[r,o]of s)e instanceof Map?e.has(r)||e.set(r,o):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function Nu(i,e,{key:t,value:n}){if(ue(t)&&t.addToJSMap)t.addToJSMap(i,e,n);else if(Ey(i,t))Lu(i,e,n);else{const s=Ke(t,"",i);if(e instanceof Map)e.set(s,Ke(n,s,i));else if(e instanceof Set)e.add(s);else{const r=Sy(t,s,i),o=Ke(n,r,i);r in e?Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[r]=o}}return e}function Sy(i,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(ue(i)&&(t!=null&&t.doc)){const n=Mu(t.doc,{});n.anchors=new Set;for(const r of t.anchors.keys())n.anchors.add(r.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=i.toString(n);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),Au(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function Zo(i,e,t){const n=yi(i,void 0,t),s=yi(e,void 0,t);return new _e(n,s)}class _e{constructor(e,t=null){Object.defineProperty(this,Ye,{value:yu}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return ue(t)&&(t=t.clone(e)),ue(n)&&(n=n.clone(e)),new _e(t,n)}toJSON(e,t){const n=t!=null&&t.mapAsMap?new Map:{};return Nu(t,n,this)}toString(e,t,n){return e!=null&&e.doc?ky(this,e,t,n):JSON.stringify(this)}}function Du(i,e,t){return(e.inFlow??i.flow?_y:Ty)(i,e,t)}function Ty({comment:i,items:e},t,{blockItemPrefix:n,flowChars:s,itemIndent:r,onChompKeep:o,onComment:a}){const{indent:l,options:{commentString:c}}=t,d=Object.assign({},t,{indent:r,type:null});let u=!1;const h=[];for(let b=0;b<e.length;++b){const g=e[b];let w=null;if(ue(g))!u&&g.spaceBefore&&h.push(""),Ts(t,h,g.commentBefore,u),g.comment&&(w=g.comment);else if(le(g)){const E=ue(g.key)?g.key:null;E&&(!u&&E.spaceBefore&&h.push(""),Ts(t,h,E.commentBefore,u))}u=!1;let p=kn(g,d,()=>w=null,()=>u=!0);w&&(p+=$t(p,r,c(w))),u&&w&&(u=!1),h.push(n+p)}let f;if(h.length===0)f=s.start+s.end;else{f=h[0];for(let b=1;b<h.length;++b){const g=h[b];f+=g?`
${l}${g}`:`
`}}return i?(f+=`
`+wt(c(i),l),a&&a()):u&&o&&o(),f}function _y({items:i},e,{flowChars:t,itemIndent:n}){const{indent:s,indentStep:r,flowCollectionPadding:o,options:{commentString:a}}=e;n+=r;const l=Object.assign({},e,{indent:n,inFlow:!0,type:null});let c=!1,d=0;const u=[];for(let b=0;b<i.length;++b){const g=i[b];let w=null;if(ue(g))g.spaceBefore&&u.push(""),Ts(e,u,g.commentBefore,!1),g.comment&&(w=g.comment);else if(le(g)){const E=ue(g.key)?g.key:null;E&&(E.spaceBefore&&u.push(""),Ts(e,u,E.commentBefore,!1),E.comment&&(c=!0));const x=ue(g.value)?g.value:null;x?(x.comment&&(w=x.comment),x.commentBefore&&(c=!0)):g.value==null&&(E!=null&&E.comment)&&(w=E.comment)}w&&(c=!0);let p=kn(g,l,()=>w=null);b<i.length-1&&(p+=","),w&&(p+=$t(p,n,a(w))),!c&&(u.length>d||p.includes(`
`))&&(c=!0),u.push(p),d=u.length}const{start:h,end:f}=t;if(u.length===0)return h+f;if(!c){const b=u.reduce((g,w)=>g+w.length+2,2);c=e.options.lineWidth>0&&b>e.options.lineWidth}if(c){let b=h;for(const g of u)b+=g?`
${r}${s}${g}`:`
`;return`${b}
${s}${f}`}else return`${h}${o}${u.join(" ")}${o}${f}`}function Ts({indent:i,options:{commentString:e}},t,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const r=wt(e(n),i);t.push(r.trimStart())}}function zt(i,e){const t=ie(e)?e.value:e;for(const n of i)if(le(n)&&(n.key===e||n.key===t||ie(n.key)&&n.key.value===t))return n}class $e extends Cu{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(_t,e),this.items=[]}static from(e,t,n){const{keepUndefined:s,replacer:r}=n,o=new this(e),a=(l,c)=>{if(typeof r=="function")c=r.call(t,l,c);else if(Array.isArray(r)&&!r.includes(l))return;(c!==void 0||s)&&o.items.push(Zo(l,c,n))};if(t instanceof Map)for(const[l,c]of t)a(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))a(l,t[l]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){var o;let n;le(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new _e(e,e==null?void 0:e.value):n=new _e(e.key,e.value);const s=zt(this.items,n.key),r=(o=this.schema)==null?void 0:o.sortMapEntries;if(s){if(!t)throw new Error(`Key ${n.key} already set`);ie(s.value)&&_u(n.value)?s.value.value=n.value:s.value=n.value}else if(r){const a=this.items.findIndex(l=>r(n,l)<0);a===-1?this.items.push(n):this.items.splice(a,0,n)}else this.items.push(n)}delete(e){const t=zt(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const n=zt(this.items,e),s=n==null?void 0:n.value;return(!t&&ie(s)?s.value:s)??void 0}has(e){return!!zt(this.items,e)}set(e,t){this.add(new _e(e,t),!0)}toJSON(e,t,n){const s=n?new n:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items)Nu(t,s,r);return s}toString(e,t,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!le(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Du(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const In={collection:"map",default:!0,nodeClass:$e,tag:"tag:yaml.org,2002:map",resolve(i,e){return _n(i)||e("Expected a mapping for this tag"),i},createNode:(i,e,t)=>$e.from(i,e,t)};class Mt extends Cu{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(Tn,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Qi(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Qi(e);if(typeof n!="number")return;const s=this.items[n];return!t&&ie(s)?s.value:s}has(e){const t=Qi(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Qi(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];ie(s)&&_u(t)?s.value=t:this.items[n]=t}toJSON(e,t){const n=[];t!=null&&t.onCreate&&t.onCreate(n);let s=0;for(const r of this.items)n.push(Ke(r,String(s++),t));return n}toString(e,t,n){return e?Du(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let a of t){if(typeof s=="function"){const l=t instanceof Set?a:String(o++);a=s.call(t,l,a)}r.items.push(yi(a,void 0,n))}}return r}}function Qi(i){let e=ie(i)?i.value:i;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Mn={collection:"seq",default:!0,nodeClass:Mt,tag:"tag:yaml.org,2002:seq",resolve(i,e){return Cn(i)||e("Expected a sequence for this tag"),i},createNode:(i,e,t)=>Mt.from(i,e,t)},zs={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,e,t,n){return e=Object.assign({actualString:!0},e),Si(i,e,t,n)}},Us={identify:i=>i==null,createNode:()=>new V(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new V(null),stringify:({source:i},e)=>typeof i=="string"&&Us.test.test(i)?i:e.options.nullStr},ea={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new V(i[0]==="t"||i[0]==="T"),stringify({source:i,value:e},t){if(i&&ea.test.test(i)){const n=i[0]==="t"||i[0]==="T";if(e===n)return i}return e?t.options.trueStr:t.options.falseStr}};function tt({format:i,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=JSON.stringify(n);if(!i&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(r)){let o=r.indexOf(".");o<0&&(o=r.length,r+=".");let a=e-(r.length-o-1);for(;a-- >0;)r+="0"}return r}const Ou={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:tt},Bu={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():tt(i)}},Ru={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const e=new V(parseFloat(i)),t=i.indexOf(".");return t!==-1&&i[i.length-1]==="0"&&(e.minFractionDigits=i.length-t-1),e},stringify:tt},js=i=>typeof i=="bigint"||Number.isInteger(i),ta=(i,e,t,{intAsBigInt:n})=>n?BigInt(i):parseInt(i.substring(e),t);function Pu(i,e,t){const{value:n}=i;return js(n)&&n>=0?t+n.toString(e):tt(i)}const Fu={identify:i=>js(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,e,t)=>ta(i,2,8,t),stringify:i=>Pu(i,8,"0o")},$u={identify:js,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,e,t)=>ta(i,0,10,t),stringify:tt},zu={identify:i=>js(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,e,t)=>ta(i,2,16,t),stringify:i=>Pu(i,16,"0x")},Cy=[In,Mn,zs,Us,ea,Fu,$u,zu,Ou,Bu,Ru];function kc(i){return typeof i=="bigint"||Number.isInteger(i)}const Zi=({value:i})=>JSON.stringify(i),Iy=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:Zi},{identify:i=>i==null,createNode:()=>new V(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Zi},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:Zi},{identify:kc,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,e,{intAsBigInt:t})=>t?BigInt(i):parseInt(i,10),stringify:({value:i})=>kc(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:Zi}],My={default:!0,tag:"",test:/^/,resolve(i,e){return e(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},Ay=[In,Mn].concat(Iy,My),na={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,e){if(typeof atob=="function"){const t=atob(i.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:e,value:t},n,s,r){const o=t;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e||(e=V.BLOCK_LITERAL),e!==V.QUOTE_DOUBLE){const l=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),c=Math.ceil(a.length/l),d=new Array(c);for(let u=0,h=0;u<c;++u,h+=l)d[u]=a.substr(h,l);a=d.join(e===V.BLOCK_LITERAL?`
`:" ")}return Si({comment:i,type:e,value:a},n,s,r)}};function Uu(i,e){if(Cn(i))for(let t=0;t<i.items.length;++t){let n=i.items[t];if(!le(n)){if(_n(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const s=n.items[0]||new _e(new V(null));if(n.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${n.commentBefore}
${s.key.commentBefore}`:n.commentBefore),n.comment){const r=s.value??s.key;r.comment=r.comment?`${n.comment}
${r.comment}`:n.comment}n=s}i.items[t]=le(n)?n:new _e(n)}}else e("Expected a sequence for this tag");return i}function ju(i,e,t){const{replacer:n}=t,s=new Mt(i);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof n=="function"&&(o=n.call(e,String(r++),o));let a,l;if(Array.isArray(o))if(o.length===2)a=o[0],l=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length===1)a=c[0],l=o[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=o;s.items.push(Zo(a,l,t))}return s}const ia={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Uu,createNode:ju};class bn extends Mt{constructor(){super(),this.add=$e.prototype.add.bind(this),this.delete=$e.prototype.delete.bind(this),this.get=$e.prototype.get.bind(this),this.has=$e.prototype.has.bind(this),this.set=$e.prototype.set.bind(this),this.tag=bn.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t!=null&&t.onCreate&&t.onCreate(n);for(const s of this.items){let r,o;if(le(s)?(r=Ke(s.key,"",t),o=Ke(s.value,r,t)):r=Ke(s,"",t),n.has(r))throw new Error("Ordered maps must not include duplicate keys");n.set(r,o)}return n}static from(e,t,n){const s=ju(e,t,n),r=new this;return r.items=s.items,r}}bn.tag="tag:yaml.org,2002:omap";const sa={collection:"seq",identify:i=>i instanceof Map,nodeClass:bn,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,e){const t=Uu(i,e),n=[];for(const{key:s}of t.items)ie(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new bn,t)},createNode:(i,e,t)=>bn.from(i,e,t)};function Hu({value:i,source:e},t){return e&&(i?qu:Vu).test.test(e)?e:i?t.options.trueStr:t.options.falseStr}const qu={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new V(!0),stringify:Hu},Vu={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new V(!1),stringify:Hu},Ly={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:tt},Ny={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():tt(i)}},Dy={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const e=new V(parseFloat(i.replace(/_/g,""))),t=i.indexOf(".");if(t!==-1){const n=i.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:tt},Ti=i=>typeof i=="bigint"||Number.isInteger(i);function Hs(i,e,t,{intAsBigInt:n}){const s=i[0];if((s==="-"||s==="+")&&(e+=1),i=i.substring(e).replace(/_/g,""),n){switch(t){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const o=BigInt(i);return s==="-"?BigInt(-1)*o:o}const r=parseInt(i,t);return s==="-"?-1*r:r}function ra(i,e,t){const{value:n}=i;if(Ti(n)){const s=n.toString(e);return n<0?"-"+t+s.substr(1):t+s}return tt(i)}const Oy={identify:Ti,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,e,t)=>Hs(i,2,2,t),stringify:i=>ra(i,2,"0b")},By={identify:Ti,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,e,t)=>Hs(i,1,8,t),stringify:i=>ra(i,8,"0")},Ry={identify:Ti,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,e,t)=>Hs(i,0,10,t),stringify:tt},Py={identify:Ti,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,e,t)=>Hs(i,2,16,t),stringify:i=>ra(i,16,"0x")};class yn extends $e{constructor(e){super(e),this.tag=yn.tag}add(e){let t;le(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new _e(e.key,null):t=new _e(e,null),zt(this.items,t.key)||this.items.push(t)}get(e,t){const n=zt(this.items,e);return!t&&le(n)?ie(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=zt(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new _e(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof s=="function"&&(o=s.call(t,o,o)),r.items.push(Zo(o,null,n));return r}}yn.tag="tag:yaml.org,2002:set";const oa={collection:"map",identify:i=>i instanceof Set,nodeClass:yn,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,e,t)=>yn.from(i,e,t),resolve(i,e){if(_n(i)){if(i.hasAllNullValues(!0))return Object.assign(new yn,i);e("Set items must all have null values")}else e("Expected a mapping for this tag");return i}};function aa(i,e){const t=i[0],n=t==="-"||t==="+"?i.substring(1):i,s=o=>e?BigInt(o):Number(o),r=n.replace(/_/g,"").split(":").reduce((o,a)=>o*s(60)+s(a),s(0));return t==="-"?s(-1)*r:r}function Ku(i){let{value:e}=i,t=o=>o;if(typeof e=="bigint")t=o=>BigInt(o);else if(isNaN(e)||!isFinite(e))return tt(i);let n="";e<0&&(n="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),n+r.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Wu={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,e,{intAsBigInt:t})=>aa(i,t),stringify:Ku},Gu={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>aa(i,!1),stringify:Ku},qs={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const e=i.match(qs.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,s,r,o,a]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,n-1,s,r||0,o||0,a||0,l);const d=e[8];if(d&&d!=="Z"){let u=aa(d,!1);Math.abs(u)<30&&(u*=60),c-=6e4*u}return new Date(c)},stringify:({value:i})=>i.toISOString().replace(/(T00:00:00)?\.000Z$/,"")},Ec=[In,Mn,zs,Us,qu,Vu,Oy,By,Ry,Py,Ly,Ny,Dy,na,xt,sa,ia,oa,Wu,Gu,qs],Sc=new Map([["core",Cy],["failsafe",[In,Mn,zs]],["json",Ay],["yaml11",Ec],["yaml-1.1",Ec]]),Tc={binary:na,bool:ea,float:Ru,floatExp:Bu,floatNaN:Ou,floatTime:Gu,int:$u,intHex:zu,intOct:Fu,intTime:Wu,map:In,merge:xt,null:Us,omap:sa,pairs:ia,seq:Mn,set:oa,timestamp:qs},Fy={"tag:yaml.org,2002:binary":na,"tag:yaml.org,2002:merge":xt,"tag:yaml.org,2002:omap":sa,"tag:yaml.org,2002:pairs":ia,"tag:yaml.org,2002:set":oa,"tag:yaml.org,2002:timestamp":qs};function Ir(i,e,t){const n=Sc.get(e);if(n&&!i)return t&&!n.includes(xt)?n.concat(xt):n.slice();let s=n;if(!s)if(Array.isArray(i))s=[];else{const r=Array.from(Sc.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(i))for(const r of i)s=s.concat(r);else typeof i=="function"&&(s=i(s.slice()));return t&&(s=s.concat(xt)),s.reduce((r,o)=>{const a=typeof o=="string"?Tc[o]:o;if(!a){const l=JSON.stringify(o),c=Object.keys(Tc).map(d=>JSON.stringify(d)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return r.includes(a)||r.push(a),r},[])}const $y=(i,e)=>i.key<e.key?-1:i.key>e.key?1:0;class Vs{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:s,schema:r,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(e)?Ir(e,"compat"):e?Ir(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?Fy:{},this.tags=Ir(t,this.name,n),this.toStringOptions=a??null,Object.defineProperty(this,_t,{value:In}),Object.defineProperty(this,ht,{value:zs}),Object.defineProperty(this,Tn,{value:Mn}),this.sortMapEntries=typeof o=="function"?o:o===!0?$y:null}clone(){const e=Object.create(Vs.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function zy(i,e){var l;const t=[];let n=e.directives===!0;if(e.directives!==!1&&i.directives){const c=i.directives.toString(i);c?(t.push(c),n=!0):i.directives.docStart&&(n=!0)}n&&t.push("---");const s=Mu(i,e),{commentString:r}=s.options;if(i.commentBefore){t.length!==1&&t.unshift("");const c=r(i.commentBefore);t.unshift(wt(c,""))}let o=!1,a=null;if(i.contents){if(ue(i.contents)){if(i.contents.spaceBefore&&n&&t.push(""),i.contents.commentBefore){const u=r(i.contents.commentBefore);t.push(wt(u,""))}s.forceBlockIndent=!!i.comment,a=i.contents.comment}const c=a?void 0:()=>o=!0;let d=kn(i.contents,s,()=>a=null,c);a&&(d+=$t(d,"",r(a))),(d[0]==="|"||d[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${d}`:t.push(d)}else t.push(kn(i.contents,s));if((l=i.directives)!=null&&l.docEnd)if(i.comment){const c=r(i.comment);c.includes(`
`)?(t.push("..."),t.push(wt(c,""))):t.push(`... ${c}`)}else t.push("...");else{let c=i.comment;c&&o&&(c=c.replace(/^\n+/,"")),c&&((!o||a)&&t[t.length-1]!==""&&t.push(""),t.push(wt(r(c),"")))}return t.join(`
`)+`
`}class An{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Ye,{value:xo});let s=null;typeof t=="function"||Array.isArray(t)?s=t:n===void 0&&t&&(n=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=r;let{version:o}=r;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new Le({version:o}),this.setSchema(o,n),this.contents=e===void 0?null:this.createNode(e,s,n)}clone(){const e=Object.create(An.prototype,{[Ye]:{value:xo}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=ue(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){an(this.contents)&&this.contents.add(e)}addIn(e,t){an(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=Su(this);e.anchor=!t||n.has(t)?Tu(t||"a",n):t}return new Rs(e.anchor)}createNode(e,t,n){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const w=E=>typeof E=="number"||E instanceof String||E instanceof Number,p=t.filter(w).map(String);p.length>0&&(t=t.concat(p)),s=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:o,flow:a,keepUndefined:l,onTagObj:c,tag:d}=n??{},{onAnchor:u,setAnchors:h,sourceObjects:f}=py(this,o||"a"),b={aliasDuplicateObjects:r??!0,keepUndefined:l??!1,onAnchor:u,onTagObj:c,replacer:s,schema:this.schema,sourceObjects:f},g=yi(e,d,b);return a&&de(g)&&(g.flow=!0),h(),g}createPair(e,t,n={}){const s=this.createNode(e,null,n),r=this.createNode(t,null,n);return new _e(s,r)}delete(e){return an(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Zn(e)?this.contents==null?!1:(this.contents=null,!0):an(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return de(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Zn(e)?!t&&ie(this.contents)?this.contents.value:this.contents:de(this.contents)?this.contents.getIn(e,t):void 0}has(e){return de(this.contents)?this.contents.has(e):!1}hasIn(e){return Zn(e)?this.contents!==void 0:de(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Ss(this.schema,[e],t):an(this.contents)&&this.contents.set(e,t)}setIn(e,t){Zn(e)?this.contents=t:this.contents==null?this.contents=Ss(this.schema,Array.from(e),t):an(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Le({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Le({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new Vs(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:s,onAnchor:r,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},l=Ke(this.contents,t??"",a);if(typeof r=="function")for(const{count:c,res:d}of a.anchors.values())r(d,c);return typeof o=="function"?fn(o,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return zy(this,e)}}function an(i){if(de(i))return!0;throw new Error("Expected a YAML collection as document contents")}class la extends Error{constructor(e,t,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=t}}class Ut extends la{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class Yu extends la{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const _s=(i,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:n,col:s}=t.linePos[0];t.message+=` at line ${n}, column ${s}`;let r=s-1,o=i.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&o.length>80){const a=Math.min(r-39,o.length-79);o="…"+o.substring(a),r-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),n>1&&/^ *$/.test(o.substring(0,r))){let a=i.substring(e.lineStarts[n-2],e.lineStarts[n-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const l=t.linePos[1];l&&l.line===n&&l.col>s&&(a=Math.max(1,Math.min(l.col-s,80-r)));const c=" ".repeat(r)+"^".repeat(a);t.message+=`:

${o}
${c}
`}};function En(i,{flow:e,indicator:t,next:n,offset:s,onError:r,parentIndent:o,startOnNewline:a}){let l=!1,c=a,d=a,u="",h="",f=!1,b=!1,g=null,w=null,p=null,E=null,x=null,m=null,_=null;for(const M of i)switch(b&&(M.type!=="space"&&M.type!=="newline"&&M.type!=="comma"&&r(M.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b=!1),g&&(c&&M.type!=="comment"&&M.type!=="newline"&&r(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),M.type){case"space":!e&&(t!=="doc-start"||(n==null?void 0:n.type)!=="flow-collection")&&M.source.includes("	")&&(g=M),d=!0;break;case"comment":{d||r(M,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const k=M.source.substring(1)||" ";u?u+=h+k:u=k,h="",c=!1;break}case"newline":c?u?u+=M.source:(!m||t!=="seq-item-ind")&&(l=!0):h+=M.source,c=!0,f=!0,(w||p)&&(E=M),d=!0;break;case"anchor":w&&r(M,"MULTIPLE_ANCHORS","A node can have at most one anchor"),M.source.endsWith(":")&&r(M.offset+M.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),w=M,_===null&&(_=M.offset),c=!1,d=!1,b=!0;break;case"tag":{p&&r(M,"MULTIPLE_TAGS","A node can have at most one tag"),p=M,_===null&&(_=M.offset),c=!1,d=!1,b=!0;break}case t:(w||p)&&r(M,"BAD_PROP_ORDER",`Anchors and tags must be after the ${M.source} indicator`),m&&r(M,"UNEXPECTED_TOKEN",`Unexpected ${M.source} in ${e??"collection"}`),m=M,c=t==="seq-item-ind"||t==="explicit-key-ind",d=!1;break;case"comma":if(e){x&&r(M,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),x=M,c=!1,d=!1;break}default:r(M,"UNEXPECTED_TOKEN",`Unexpected ${M.type} token`),c=!1,d=!1}const A=i[i.length-1],N=A?A.offset+A.source.length:s;return b&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(c&&g.indent<=o||(n==null?void 0:n.type)==="block-map"||(n==null?void 0:n.type)==="block-seq")&&r(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:x,found:m,spaceBefore:l,comment:u,hasNewline:f,anchor:w,tag:p,newlineAfterProp:E,end:N,start:_??N}}function vi(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const e of i.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of i.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(vi(e.key)||vi(e.value))return!0}return!1;default:return!0}}function To(i,e,t){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===i&&(n.source==="]"||n.source==="}")&&vi(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Ju(i,e,t){const{uniqueKeys:n}=i.options;if(n===!1)return!1;const s=typeof n=="function"?n:(r,o)=>r===o||ie(r)&&ie(o)&&r.value===o.value;return e.some(r=>s(r.key,t))}const _c="All mapping items must start at the same column";function Uy({composeNode:i,composeEmptyNode:e},t,n,s,r){var d;const o=(r==null?void 0:r.nodeClass)??$e,a=new o(t.schema);t.atRoot&&(t.atRoot=!1);let l=n.offset,c=null;for(const u of n.items){const{start:h,key:f,sep:b,value:g}=u,w=En(h,{indicator:"explicit-key-ind",next:f??(b==null?void 0:b[0]),offset:l,onError:s,parentIndent:n.indent,startOnNewline:!0}),p=!w.found;if(p){if(f&&(f.type==="block-seq"?s(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==n.indent&&s(l,"BAD_INDENT",_c)),!w.anchor&&!w.tag&&!b){c=w.end,w.comment&&(a.comment?a.comment+=`
`+w.comment:a.comment=w.comment);continue}(w.newlineAfterProp||vi(f))&&s(f??h[h.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((d=w.found)==null?void 0:d.indent)!==n.indent&&s(l,"BAD_INDENT",_c);t.atKey=!0;const E=w.end,x=f?i(t,f,w,s):e(t,E,h,null,w,s);t.schema.compat&&To(n.indent,f,s),t.atKey=!1,Ju(t,a.items,x)&&s(E,"DUPLICATE_KEY","Map keys must be unique");const m=En(b??[],{indicator:"map-value-ind",next:g,offset:x.range[2],onError:s,parentIndent:n.indent,startOnNewline:!f||f.type==="block-scalar"});if(l=m.end,m.found){p&&((g==null?void 0:g.type)==="block-map"&&!m.hasNewline&&s(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&w.start<m.found.offset-1024&&s(x.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const _=g?i(t,g,m,s):e(t,l,b,null,m,s);t.schema.compat&&To(n.indent,g,s),l=_.range[2];const A=new _e(x,_);t.options.keepSourceTokens&&(A.srcToken=u),a.items.push(A)}else{p&&s(x.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),m.comment&&(x.comment?x.comment+=`
`+m.comment:x.comment=m.comment);const _=new _e(x);t.options.keepSourceTokens&&(_.srcToken=u),a.items.push(_)}}return c&&c<l&&s(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[n.offset,l,c??l],a}function jy({composeNode:i,composeEmptyNode:e},t,n,s,r){const o=(r==null?void 0:r.nodeClass)??Mt,a=new o(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=n.offset,c=null;for(const{start:d,value:u}of n.items){const h=En(d,{indicator:"seq-item-ind",next:u,offset:l,onError:s,parentIndent:n.indent,startOnNewline:!0});if(!h.found)if(h.anchor||h.tag||u)u&&u.type==="block-seq"?s(h.end,"BAD_INDENT","All sequence items must start at the same column"):s(l,"MISSING_CHAR","Sequence item without - indicator");else{c=h.end,h.comment&&(a.comment=h.comment);continue}const f=u?i(t,u,h,s):e(t,h.end,d,null,h,s);t.schema.compat&&To(n.indent,u,s),l=f.range[2],a.items.push(f)}return a.range=[n.offset,l,c??l],a}function _i(i,e,t,n){let s="";if(i){let r=!1,o="";for(const a of i){const{source:l,type:c}=a;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&n(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const d=l.substring(1)||" ";s?s+=o+d:s=d,o="";break}case"newline":s&&(o+=l),r=!0;break;default:n(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:s,offset:e}}const Mr="Block collections are not allowed within flow collections",Ar=i=>i&&(i.type==="block-map"||i.type==="block-seq");function Hy({composeNode:i,composeEmptyNode:e},t,n,s,r){const o=n.start.source==="{",a=o?"flow map":"flow sequence",l=(r==null?void 0:r.nodeClass)??(o?$e:Mt),c=new l(t.schema);c.flow=!0;const d=t.atRoot;d&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let u=n.offset+n.start.source.length;for(let w=0;w<n.items.length;++w){const p=n.items[w],{start:E,key:x,sep:m,value:_}=p,A=En(E,{flow:a,indicator:"explicit-key-ind",next:x??(m==null?void 0:m[0]),offset:u,onError:s,parentIndent:n.indent,startOnNewline:!1});if(!A.found){if(!A.anchor&&!A.tag&&!m&&!_){w===0&&A.comma?s(A.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):w<n.items.length-1&&s(A.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),A.comment&&(c.comment?c.comment+=`
`+A.comment:c.comment=A.comment),u=A.end;continue}!o&&t.options.strict&&vi(x)&&s(x,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(w===0)A.comma&&s(A.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(A.comma||s(A.start,"MISSING_CHAR",`Missing , between ${a} items`),A.comment){let N="";e:for(const M of E)switch(M.type){case"comma":case"space":break;case"comment":N=M.source.substring(1);break e;default:break e}if(N){let M=c.items[c.items.length-1];le(M)&&(M=M.value??M.key),M.comment?M.comment+=`
`+N:M.comment=N,A.comment=A.comment.substring(N.length+1)}}if(!o&&!m&&!A.found){const N=_?i(t,_,A,s):e(t,A.end,m,null,A,s);c.items.push(N),u=N.range[2],Ar(_)&&s(N.range,"BLOCK_IN_FLOW",Mr)}else{t.atKey=!0;const N=A.end,M=x?i(t,x,A,s):e(t,N,E,null,A,s);Ar(x)&&s(M.range,"BLOCK_IN_FLOW",Mr),t.atKey=!1;const k=En(m??[],{flow:a,indicator:"map-value-ind",next:_,offset:M.range[2],onError:s,parentIndent:n.indent,startOnNewline:!1});if(k.found){if(!o&&!A.found&&t.options.strict){if(m)for(const y of m){if(y===k.found)break;if(y.type==="newline"){s(y,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}A.start<k.found.offset-1024&&s(k.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else _&&("source"in _&&_.source&&_.source[0]===":"?s(_,"MISSING_CHAR",`Missing space after : in ${a}`):s(k.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const F=_?i(t,_,k,s):k.found?e(t,k.end,m,null,k,s):null;F?Ar(_)&&s(F.range,"BLOCK_IN_FLOW",Mr):k.comment&&(M.comment?M.comment+=`
`+k.comment:M.comment=k.comment);const R=new _e(M,F);if(t.options.keepSourceTokens&&(R.srcToken=p),o){const y=c;Ju(t,y.items,M)&&s(N,"DUPLICATE_KEY","Map keys must be unique"),y.items.push(R)}else{const y=new $e(t.schema);y.flow=!0,y.items.push(R);const T=(F??M).range;y.range=[M.range[0],T[1],T[2]],c.items.push(y)}u=F?F.range[2]:k.end}}const h=o?"}":"]",[f,...b]=n.end;let g=u;if(f&&f.source===h)g=f.offset+f.source.length;else{const w=a[0].toUpperCase()+a.substring(1),p=d?`${w} must end with a ${h}`:`${w} in block collection must be sufficiently indented and end with a ${h}`;s(u,d?"MISSING_CHAR":"BAD_INDENT",p),f&&f.source.length!==1&&b.unshift(f)}if(b.length>0){const w=_i(b,g,t.options.strict,s);w.comment&&(c.comment?c.comment+=`
`+w.comment:c.comment=w.comment),c.range=[n.offset,g,w.offset]}else c.range=[n.offset,g,g];return c}function Lr(i,e,t,n,s,r){const o=t.type==="block-map"?Uy(i,e,t,n,r):t.type==="block-seq"?jy(i,e,t,n,r):Hy(i,e,t,n,r),a=o.constructor;return s==="!"||s===a.tagName?(o.tag=a.tagName,o):(s&&(o.tag=s),o)}function qy(i,e,t,n,s){var h;const r=n.tag,o=r?e.directives.tagName(r.source,f=>s(r,"TAG_RESOLVE_FAILED",f)):null;if(t.type==="block-seq"){const{anchor:f,newlineAfterProp:b}=n,g=f&&r?f.offset>r.offset?f:r:f??r;g&&(!b||b.offset<g.offset)&&s(g,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!o||o==="!"||o===$e.tagName&&a==="map"||o===Mt.tagName&&a==="seq")return Lr(i,e,t,s,o);let l=e.schema.tags.find(f=>f.tag===o&&f.collection===a);if(!l){const f=e.schema.knownTags[o];if(f&&f.collection===a)e.schema.tags.push(Object.assign({},f,{default:!1})),l=f;else return f!=null&&f.collection?s(r,"BAD_COLLECTION_TYPE",`${f.tag} used for ${a} collection, but expects ${f.collection}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),Lr(i,e,t,s,o)}const c=Lr(i,e,t,s,o,l),d=((h=l.resolve)==null?void 0:h.call(l,c,f=>s(r,"TAG_RESOLVE_FAILED",f),e.options))??c,u=ue(d)?d:new V(d);return u.range=c.range,u.tag=o,l!=null&&l.format&&(u.format=l.format),u}function Xu(i,e,t){const n=e.offset,s=Vy(e,i.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const r=s.mode===">"?V.BLOCK_FOLDED:V.BLOCK_LITERAL,o=e.source?Ky(e.source):[];let a=o.length;for(let g=o.length-1;g>=0;--g){const w=o[g][1];if(w===""||w==="\r")a=g;else break}if(a===0){const g=s.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let w=n+s.length;return e.source&&(w+=e.source.length),{value:g,type:r,comment:s.comment,range:[n,w,w]}}let l=e.indent+s.indent,c=e.offset+s.length,d=0;for(let g=0;g<a;++g){const[w,p]=o[g];if(p===""||p==="\r")s.indent===0&&w.length>l&&(l=w.length);else{w.length<l&&t(c+w.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(l=w.length),d=g,l===0&&!i.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=w.length+p.length+1}for(let g=o.length-1;g>=a;--g)o[g][0].length>l&&(a=g+1);let u="",h="",f=!1;for(let g=0;g<d;++g)u+=o[g][0].slice(l)+`
`;for(let g=d;g<a;++g){let[w,p]=o[g];c+=w.length+p.length+1;const E=p[p.length-1]==="\r";if(E&&(p=p.slice(0,-1)),p&&w.length<l){const m=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(c-p.length-(E?2:1),"BAD_INDENT",m),w=""}r===V.BLOCK_LITERAL?(u+=h+w.slice(l)+p,h=`
`):w.length>l||p[0]==="	"?(h===" "?h=`
`:!f&&h===`
`&&(h=`

`),u+=h+w.slice(l)+p,h=`
`,f=!0):p===""?h===`
`?u+=`
`:h=`
`:(u+=h+p,h=" ",f=!1)}switch(s.chomp){case"-":break;case"+":for(let g=a;g<o.length;++g)u+=`
`+o[g][0].slice(l);u[u.length-1]!==`
`&&(u+=`
`);break;default:u+=`
`}const b=n+s.length+e.source.length;return{value:u,type:r,comment:s.comment,range:[n,b,b]}}function Vy({offset:i,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let o=0,a="",l=-1;for(let h=1;h<s.length;++h){const f=s[h];if(!a&&(f==="-"||f==="+"))a=f;else{const b=Number(f);!o&&b?o=b:l===-1&&(l=i+h)}}l!==-1&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let c=!1,d="",u=s.length;for(let h=1;h<e.length;++h){const f=e[h];switch(f.type){case"space":c=!0;case"newline":u+=f.source.length;break;case"comment":t&&!c&&n(f,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),u+=f.source.length,d=f.source.substring(1);break;case"error":n(f,"UNEXPECTED_TOKEN",f.message),u+=f.source.length;break;default:{const b=`Unexpected token in block scalar header: ${f.type}`;n(f,"UNEXPECTED_TOKEN",b);const g=f.source;g&&typeof g=="string"&&(u+=g.length)}}}return{mode:r,indent:o,chomp:a,comment:d,length:u}}function Ky(i){const e=i.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),r=[n!=null&&n[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let o=1;o<e.length;o+=2)r.push([e[o],e[o+1]]);return r}function Qu(i,e,t){const{offset:n,type:s,source:r,end:o}=i;let a,l;const c=(h,f,b)=>t(n+h,f,b);switch(s){case"scalar":a=V.PLAIN,l=Wy(r,c);break;case"single-quoted-scalar":a=V.QUOTE_SINGLE,l=Gy(r,c);break;case"double-quoted-scalar":a=V.QUOTE_DOUBLE,l=Yy(r,c);break;default:return t(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const d=n+r.length,u=_i(o,d,e,t);return{value:l,type:a,comment:u.comment,range:[n,d,u.offset]}}function Wy(i,e){let t="";switch(i[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${i[0]}`;break}case"@":case"`":{t=`reserved character ${i[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Zu(i)}function Gy(i,e){return(i[i.length-1]!=="'"||i.length===1)&&e(i.length,"MISSING_CHAR","Missing closing 'quote"),Zu(i.slice(1,-1)).replace(/''/g,"'")}function Zu(i){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(i);if(!n)return i;let s=n[1],r=" ",o=e.lastIndex;for(t.lastIndex=o;n=t.exec(i);)n[1]===""?r===`
`?s+=r:r=`
`:(s+=r+n[1],r=" "),o=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,n=a.exec(i),s+r+((n==null?void 0:n[1])??"")}function Yy(i,e){let t="";for(let n=1;n<i.length-1;++n){const s=i[n];if(!(s==="\r"&&i[n+1]===`
`))if(s===`
`){const{fold:r,offset:o}=Jy(i,n);t+=r,n=o}else if(s==="\\"){let r=i[++n];const o=Xy[r];if(o)t+=o;else if(r===`
`)for(r=i[n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="\r"&&i[n+1]===`
`)for(r=i[++n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="x"||r==="u"||r==="U"){const a={x:2,u:4,U:8}[r];t+=Qy(i,n+1,a,e),n+=a}else{const a=i.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(s===" "||s==="	"){const r=n;let o=i[n+1];for(;o===" "||o==="	";)o=i[++n+1];o!==`
`&&!(o==="\r"&&i[n+2]===`
`)&&(t+=n>r?i.slice(r,n+1):s)}else t+=s}return(i[i.length-1]!=='"'||i.length===1)&&e(i.length,"MISSING_CHAR",'Missing closing "quote'),t}function Jy(i,e){let t="",n=i[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&i[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=i[e+1];return t||(t=" "),{fold:t,offset:e}}const Xy={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Qy(i,e,t,n){const s=i.substr(e,t),o=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(o)){const a=i.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(o)}function eh(i,e,t,n){const{value:s,type:r,comment:o,range:a}=e.type==="block-scalar"?Xu(i,e,n):Qu(e,i.options.strict,n),l=t?i.directives.tagName(t.source,u=>n(t,"TAG_RESOLVE_FAILED",u)):null;let c;i.options.stringKeys&&i.atKey?c=i.schema[ht]:l?c=Zy(i.schema,s,l,t,n):e.type==="scalar"?c=e0(i,s,e,n):c=i.schema[ht];let d;try{const u=c.resolve(s,h=>n(t??e,"TAG_RESOLVE_FAILED",h),i.options);d=ie(u)?u:new V(u)}catch(u){const h=u instanceof Error?u.message:String(u);n(t??e,"TAG_RESOLVE_FAILED",h),d=new V(s)}return d.range=a,d.source=s,r&&(d.type=r),l&&(d.tag=l),c.format&&(d.format=c.format),o&&(d.comment=o),d}function Zy(i,e,t,n,s){var a;if(t==="!")return i[ht];const r=[];for(const l of i.tags)if(!l.collection&&l.tag===t)if(l.default&&l.test)r.push(l);else return l;for(const l of r)if((a=l.test)!=null&&a.test(e))return l;const o=i.knownTags[t];return o&&!o.collection?(i.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),i[ht])}function e0({atKey:i,directives:e,schema:t},n,s,r){const o=t.tags.find(a=>{var l;return(a.default===!0||i&&a.default==="key")&&((l=a.test)==null?void 0:l.test(n))})||t[ht];if(t.compat){const a=t.compat.find(l=>{var c;return l.default&&((c=l.test)==null?void 0:c.test(n))})??t[ht];if(o.tag!==a.tag){const l=e.tagString(o.tag),c=e.tagString(a.tag),d=`Value may be parsed as either ${l} or ${c}`;r(s,"TAG_RESOLVE_FAILED",d,!0)}}return o}function t0(i,e,t){if(e){t===null&&(t=e.length);for(let n=t-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":i-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)i+=s.source.length,s=e[++n];break}}return i}const n0={composeNode:th,composeEmptyNode:ca};function th(i,e,t,n){const s=i.atKey,{spaceBefore:r,comment:o,anchor:a,tag:l}=t;let c,d=!0;switch(e.type){case"alias":c=i0(i,e,n),(a||l)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=eh(i,e,l,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=qy(n0,i,e,t,n),a&&(c.anchor=a.source.substring(1));break;default:{const u=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",u),c=ca(i,e.offset,void 0,null,t,n),d=!1}}return a&&c.anchor===""&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&i.options.stringKeys&&(!ie(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&n(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),o&&(e.type==="scalar"&&e.source===""?c.comment=o:c.commentBefore=o),i.options.keepSourceTokens&&d&&(c.srcToken=e),c}function ca(i,e,t,n,{spaceBefore:s,comment:r,anchor:o,tag:a,end:l},c){const d={type:"scalar",offset:t0(e,t,n),indent:-1,source:""},u=eh(i,d,a,c);return o&&(u.anchor=o.source.substring(1),u.anchor===""&&c(o,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(u.spaceBefore=!0),r&&(u.comment=r,u.range[2]=l),u}function i0({options:i},{offset:e,source:t,end:n},s){const r=new Rs(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=e+t.length,a=_i(n,o,i.strict,s);return r.range=[e,o,a.offset],a.comment&&(r.comment=a.comment),r}function s0(i,e,{offset:t,start:n,value:s,end:r},o){const a=Object.assign({_directives:e},i),l=new An(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},d=En(n,{indicator:"doc-start",next:s??(r==null?void 0:r[0]),offset:t,onError:o,parentIndent:0,startOnNewline:!0});d.found&&(l.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!d.hasNewline&&o(d.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=s?th(c,s,d,o):ca(c,d.end,n,null,d,o);const u=l.contents.range[2],h=_i(r,u,!1,o);return h.comment&&(l.comment=h.comment),l.range=[t,u,h.offset],l}function Gn(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:e,source:t}=i;return[e,e+(typeof t=="string"?t.length:1)]}function Cc(i){var s;let e="",t=!1,n=!1;for(let r=0;r<i.length;++r){const o=i[r];switch(o[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(o.substring(1)||" "),t=!0,n=!1;break;case"%":((s=i[r+1])==null?void 0:s[0])!=="#"&&(r+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class da{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,s,r)=>{const o=Gn(t);r?this.warnings.push(new Yu(o,n,s)):this.errors.push(new Ut(o,n,s))},this.directives=new Le({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:s}=Cc(this.prelude);if(n){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!r)e.commentBefore=n;else if(de(r)&&!r.flow&&r.items.length>0){let o=r.items[0];le(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${n}
${a}`:n}else{const o=r.commentBefore;r.commentBefore=o?`${n}
${o}`:n}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Cc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,s)=>{const r=Gn(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=s0(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Ut(Gn(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new Ut(Gn(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=_i(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new Ut(Gn(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new An(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}function r0(i,e=!0,t){if(i){const n=(s,r,o)=>{const a=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(t)t(a,r,o);else throw new Ut([a,a+1],r,o)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Qu(i,e,n);case"block-scalar":return Xu({options:{strict:e}},i,n)}}return null}function o0(i,e){const{implicitKey:t=!1,indent:n,inFlow:s=!1,offset:r=-1,type:o="PLAIN"}=e,a=Si({type:o,value:i},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),l=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(a[0]){case"|":case">":{const c=a.indexOf(`
`),d=a.substring(0,c),u=a.substring(c+1)+`
`,h=[{type:"block-scalar-header",offset:r,indent:n,source:d}];return nh(h,l)||h.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:r,indent:n,props:h,source:u}}case'"':return{type:"double-quoted-scalar",offset:r,indent:n,source:a,end:l};case"'":return{type:"single-quoted-scalar",offset:r,indent:n,source:a,end:l};default:return{type:"scalar",offset:r,indent:n,source:a,end:l}}}function a0(i,e,t={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:r=!1,type:o}=t,a="indent"in i?i.indent:null;if(n&&typeof a=="number"&&(a+=2),!o)switch(i.type){case"single-quoted-scalar":o="QUOTE_SINGLE";break;case"double-quoted-scalar":o="QUOTE_DOUBLE";break;case"block-scalar":{const c=i.props[0];if(c.type!=="block-scalar-header")throw new Error("Invalid block scalar header");o=c.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:o="PLAIN"}const l=Si({type:o,value:e},{implicitKey:s||a===null,indent:a!==null&&a>0?" ".repeat(a):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(l[0]){case"|":case">":l0(i,l);break;case'"':Nr(i,l,"double-quoted-scalar");break;case"'":Nr(i,l,"single-quoted-scalar");break;default:Nr(i,l,"scalar")}}function l0(i,e){const t=e.indexOf(`
`),n=e.substring(0,t),s=e.substring(t+1)+`
`;if(i.type==="block-scalar"){const r=i.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=n,i.source=s}else{const{offset:r}=i,o="indent"in i?i.indent:-1,a=[{type:"block-scalar-header",offset:r,indent:o,source:n}];nh(a,"end"in i?i.end:void 0)||a.push({type:"newline",offset:-1,indent:o,source:`
`});for(const l of Object.keys(i))l!=="type"&&l!=="offset"&&delete i[l];Object.assign(i,{type:"block-scalar",indent:o,props:a,source:s})}}function nh(i,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":i.push(t);break;case"newline":return i.push(t),!0}return!1}function Nr(i,e,t){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=t,i.source=e;break;case"block-scalar":{const n=i.props.slice(1);let s=e.length;i.props[0].type==="block-scalar-header"&&(s-=i.props[0].source.length);for(const r of n)r.offset+=s;delete i.props,Object.assign(i,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{const s={type:"newline",offset:i.offset+e.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:t,source:e,end:[s]});break}default:{const n="indent"in i?i.indent:-1,s="end"in i&&Array.isArray(i.end)?i.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(i))r!=="type"&&r!=="offset"&&delete i[r];Object.assign(i,{type:t,indent:n,source:e,end:s})}}}const c0=i=>"type"in i?Cs(i):cs(i);function Cs(i){switch(i.type){case"block-scalar":{let e="";for(const t of i.props)e+=Cs(t);return e+i.source}case"block-map":case"block-seq":{let e="";for(const t of i.items)e+=cs(t);return e}case"flow-collection":{let e=i.start.source;for(const t of i.items)e+=cs(t);for(const t of i.end)e+=t.source;return e}case"document":{let e=cs(i);if(i.end)for(const t of i.end)e+=t.source;return e}default:{let e=i.source;if("end"in i&&i.end)for(const t of i.end)e+=t.source;return e}}}function cs({start:i,key:e,sep:t,value:n}){let s="";for(const r of i)s+=r.source;if(e&&(s+=Cs(e)),t)for(const r of t)s+=r.source;return n&&(s+=Cs(n)),s}const _o=Symbol("break visit"),d0=Symbol("skip children"),ih=Symbol("remove item");function Kt(i,e){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),sh(Object.freeze([]),i,e)}Kt.BREAK=_o;Kt.SKIP=d0;Kt.REMOVE=ih;Kt.itemAtPath=(i,e)=>{let t=i;for(const[n,s]of e){const r=t==null?void 0:t[n];if(r&&"items"in r)t=r.items[s];else return}return t};Kt.parentCollection=(i,e)=>{const t=Kt.itemAtPath(i,e.slice(0,-1)),n=e[e.length-1][0],s=t==null?void 0:t[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function sh(i,e,t){let n=t(e,i);if(typeof n=="symbol")return n;for(const s of["key","value"]){const r=e[s];if(r&&"items"in r){for(let o=0;o<r.items.length;++o){const a=sh(Object.freeze(i.concat([[s,o]])),r.items[o],t);if(typeof a=="number")o=a-1;else{if(a===_o)return _o;a===ih&&(r.items.splice(o,1),o-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,i))}}return typeof n=="function"?n(e,i):n}const Ks="\uFEFF",Ws="",Gs="",wi="",u0=i=>!!i&&"items"in i,h0=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function f0(i){switch(i){case Ks:return"<BOM>";case Ws:return"<DOC>";case Gs:return"<FLOW_END>";case wi:return"<SCALAR>";default:return JSON.stringify(i)}}function rh(i){switch(i){case Ks:return"byte-order-mark";case Ws:return"doc-mode";case Gs:return"flow-error-end";case wi:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const p0=Object.freeze(Object.defineProperty({__proto__:null,BOM:Ks,DOCUMENT:Ws,FLOW_END:Gs,SCALAR:wi,createScalarToken:o0,isCollection:u0,isScalar:h0,prettyToken:f0,resolveAsScalar:r0,setScalarValue:a0,stringify:c0,tokenType:rh,visit:Kt},Symbol.toStringTag,{value:"Module"}));function Je(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Ic=new Set("0123456789ABCDEFabcdef"),m0=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),es=new Set(",[]{}"),g0=new Set(` ,[]{}
\r	`),Dr=i=>!i||g0.has(i);class oh{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Je(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Ks&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const r=e[n-1];if(r===" "||r==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Ws,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Je(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Je(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Je(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Dr),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Je(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Gs,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Dr),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||Je(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=n.indexOf(`
`,r)}s!==-1&&(t=s-(n[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Je(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const o=this.buffer[r+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(n=this.buffer[s];n===" ";)n=this.buffer[++s];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,o=this.buffer[r];o==="\r"&&(o=this.buffer[--r]);const a=r;for(;o===" ";)o=this.buffer[--r];if(o===`
`&&r>=this.pos&&r+1+t>a)e=r;else break}while(!0);return yield wi,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const r=this.buffer[n+1];if(Je(r)||e&&es.has(r))break;t=n}else if(Je(s)){let r=this.buffer[n+1];if(s==="\r"&&(r===`
`?(n+=1,s=`
`,r=this.buffer[n+1]):t=n),r==="#"||e&&es.has(r))break;if(s===`
`){const o=this.continueScalar(n+1);if(o===-1)break;n=Math.max(n,o-2)}}else{if(e&&es.has(s))break;t=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield wi,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Dr))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(Je(t)||e&&es.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Je(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(m0.has(t))t=this.buffer[++e];else if(t==="%"&&Ic.has(this.buffer[e+1])&&Ic.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class ah{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function Rt(i,e){for(let t=0;t<i.length;++t)if(i[t].type===e)return!0;return!1}function Mc(i){for(let e=0;e<i.length;++e)switch(i[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function lh(i){switch(i==null?void 0:i.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function ts(i){switch(i.type){case"document":return i.start;case"block-map":{const e=i.items[i.items.length-1];return e.sep??e.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function ln(i){var t;if(i.length===0)return[];let e=i.length;e:for(;--e>=0;)switch(i[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=i[++e])==null?void 0:t.type)==="space";);return i.splice(e,i.length)}function Ac(i){if(i.start.type==="flow-seq-start")for(const e of i.items)e.sep&&!e.value&&!Rt(e.start,"explicit-key-ind")&&!Rt(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,lh(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class ua{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new oh,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=rh(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Ac(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&Mc(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Mc(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=ts(this.peek(2)),n=ln(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,r=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let o=[];if(r&&t.sep&&!t.value){const a=[];for(let l=0;l<t.sep.length;++l){const c=t.sep[l];switch(c.type){case"newline":a.push(l);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(o=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Rt(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(lh(t.key)&&!Rt(t.sep,"newline")){const a=ln(t.start),l=t.key,c=t.sep;c.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:l,sep:c}]})}else o.length>0?t.sep=t.sep.concat(o,this.sourceToken):t.sep.push(this.sourceToken);else if(Rt(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=ln(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:o,key:null,sep:[this.sourceToken]}):Rt(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);r||t.value?(e.items.push({start:o,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){s&&a.type!=="block-seq"&&e.items.push({start:o}),this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Rt(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=ts(n),r=ln(s);Ac(e);const o=e.end.splice(1,e.end.length);o.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=ts(e),n=ln(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=ts(e),n=ln(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ch(i){const e=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||e&&new ah||null,prettyErrors:e}}function b0(i,e={}){const{lineCounter:t,prettyErrors:n}=ch(e),s=new ua(t==null?void 0:t.addNewLine),r=new da(e),o=Array.from(r.compose(s.parse(i)));if(n&&t)for(const a of o)a.errors.forEach(_s(i,t)),a.warnings.forEach(_s(i,t));return o.length>0?o:Object.assign([],{empty:!0},r.streamInfo())}function dh(i,e={}){const{lineCounter:t,prettyErrors:n}=ch(e),s=new ua(t==null?void 0:t.addNewLine),r=new da(e);let o=null;for(const a of r.compose(s.parse(i),!0,i.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new Ut(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(o.errors.forEach(_s(i,t)),o.warnings.forEach(_s(i,t))),o}function y0(i,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);const s=dh(i,t);if(!s)return null;if(s.warnings.forEach(r=>Au(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},t))}function v0(i,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const s=Math.round(t);t=s<1?void 0:s>8?{indent:8}:{indent:s}}if(i===void 0){const{keepUndefined:s}=t??e??{};if(!s)return}return Jt(i)&&!n?i.toString(t):new An(i,n,t).toString(t)}const Lc=Object.freeze(Object.defineProperty({__proto__:null,Alias:Rs,CST:p0,Composer:da,Document:An,Lexer:oh,LineCounter:ah,Pair:_e,Parser:ua,Scalar:V,Schema:Vs,YAMLError:la,YAMLMap:$e,YAMLParseError:Ut,YAMLSeq:Mt,YAMLWarning:Yu,isAlias:Yt,isCollection:de,isDocument:Jt,isMap:_n,isNode:ue,isPair:le,isScalar:ie,isSeq:Cn,parse:y0,parseAllDocuments:b0,parseDocument:dh,stringify:v0,visit:It,visitAsync:Bs},Symbol.toStringTag,{value:"Module"}));class w0{constructor(){L(this,"id","json-xml-yaml-converter");L(this,"name","JSON/XML/YAML Converter");L(this,"description","Convert between JSON, XML, and YAML formats");L(this,"seoMetadata",{title:"Free Online JSON, XML, and YAML Converter",description:"Convert between JSON, XML, and YAML formats easily. Validate, format, and transform your data with this free online conversion tool.",keywords:["json to xml converter","xml to json","yaml converter","json yaml converter","data format converter","xml yaml converter"]});L(this,"supportedFormats",["xml","json","yaml"])}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.getElementById("sourceInput"),t=document.getElementById("output"),n=document.getElementById("detectedFormat"),s=document.getElementById("targetFormat"),r=document.getElementById("sourceLineNumbers"),o=document.getElementById("outputLineNumbers"),a=(c,d)=>{const u=c.value.split(`
`).length;d.innerHTML=Array.from({length:u},(h,f)=>`<div class="line-number">${f+1}</div>`).join("")},l=()=>{const c=e.value,{format:d,data:u}=this.detectAndParse(c),h=s.value;a(e,r),d==="unknown"?(n.textContent="Unknown",n.style.color="red",t.value="Error: Could not detect input format."):(n.textContent=d.toUpperCase(),n.style.color="green",t.value=this.convert(u,d,h)),a(t,o)};e.addEventListener("input",l),e.addEventListener("scroll",()=>{r.scrollTop=e.scrollTop}),t.addEventListener("scroll",()=>{o.scrollTop=t.scrollTop}),s.addEventListener("change",l),l()}detectAndParse(e){try{return{format:"json",data:JSON.parse(e)}}catch{}try{return{format:"yaml",data:Lc.parse(e)}}catch{}try{return{format:"xml",data:wc.xml2js(e,{compact:!0})}}catch{}return{format:"unknown",data:null}}convert(e,t,n){try{switch(n){case"json":return JSON.stringify(e,null,2);case"yaml":return Lc.stringify(e);case"xml":return wc.js2xml(e,{compact:!0,spaces:2});default:return"Unsupported target format"}}catch(s){return`Error during conversion: ${s.message}`}}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class x0{constructor(){L(this,"id","jwt-decoder");L(this,"name","JWT Decoder");L(this,"description","Decode and verify JSON Web Tokens");L(this,"seoMetadata",{title:"Free JWT Decoder and Validator Online Tool",description:"Decode, verify and inspect JSON Web Tokens (JWT) instantly with this free online tool. Analyze header, payload, and signature of your JWTs.",keywords:["jwt decoder","jwt validator","json web token","decode jwt","verify jwt","jwt inspector"]});L(this,"lastInput","")}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,document.head.appendChild(e)}}class k0{constructor(){L(this,"id","base-converter");L(this,"name","Number Base Converter");L(this,"description","Convert numbers between different bases");L(this,"seoMetadata",{title:"Free Number Base Converter Online Tool",description:"Convert numbers between different bases (binary, decimal, hexadecimal, octal) with this free online calculator. Supports all common number systems.",keywords:["base converter","number base calculator","binary converter","hex converter","decimal converter","octal converter"]});L(this,"bases",[{value:2,name:"Binary",prefix:"0b"},{value:8,name:"Octal",prefix:"0o"},{value:10,name:"Decimal",prefix:""},{value:16,name:"Hexadecimal",prefix:"0x"}]);L(this,"lastValidInput","");L(this,"lastBase",10)}render(){const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("numberInput"),t=document.getElementById("inputBase"),n=document.getElementById("clearInput"),s=document.getElementById("errorDisplay");!e||!t||!n||!s||(e.addEventListener("input",()=>{const r=e.value.trim(),o=parseInt(t.value);try{if(r===""){this.clearResults(),s.textContent="";return}if(this.validateInput(r,o))this.lastValidInput=r,this.lastBase=o,this.updateResults(r,o),s.textContent="",e.classList.remove("error");else throw new Error(`Invalid ${this.getBaseName(o)} number`)}catch(a){s.textContent=a.message,e.classList.add("error")}}),t.addEventListener("change",()=>{const r=parseInt(t.value);e.placeholder=`Enter a ${this.getBaseName(r)} number...`,this.validateInput(e.value,r)?e.dispatchEvent(new Event("input")):(e.value="",this.clearResults())}),n.addEventListener("click",()=>{e.value="",this.clearResults(),s.textContent="",e.classList.remove("error")}),document.querySelectorAll(".copy-button").forEach(r=>{r.addEventListener("click",()=>{const o=parseInt(r.dataset.base||"10"),a=document.getElementById(`base${o}Result`);a&&a.textContent&&navigator.clipboard.writeText(a.textContent).then(()=>this.showToast(`${this.getBaseName(o)} value copied!`)).catch(()=>this.showToast("Failed to copy value"))})}))}validateInput(e,t){var r;if(!e)return!0;const n=((r=this.bases.find(o=>o.value===t))==null?void 0:r.prefix)||"";e=e.toLowerCase().replace(n,"");const s=this.getValidChars(t);return e.split("").every(o=>s.includes(o))}getValidChars(e){return"0123456789abcdef".split("").slice(0,e)}getBaseName(e){var t;return((t=this.bases.find(n=>n.value===e))==null?void 0:t.name)||"Unknown"}updateResults(e,t){var n;try{const s=((n=this.bases.find(o=>o.value===t))==null?void 0:n.prefix)||"";e=e.toLowerCase().replace(s,"");const r=parseInt(e,t);this.bases.forEach(o=>{const a=document.getElementById(`base${o.value}Result`),l=document.getElementById(`base${o.value}Bits`);if(a&&l){const c=r.toString(o.value);if(a.textContent=`${o.prefix}${c}`,o.value===2){const d=c.length,u=Math.ceil(d/8);l.textContent=`${d} bits (${u} bytes)`}else l.textContent=""}})}catch(s){console.error("Conversion error:",s)}}clearResults(){this.bases.forEach(e=>{const t=document.getElementById(`base${e.value}Result`),n=document.getElementById(`base${e.value}Bits`);t&&(t.textContent=""),n&&(n.textContent="")})}showToast(e){const t=document.querySelector(".converter-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class E0{constructor(){L(this,"id","image-resizer");L(this,"name","Image Resizer");L(this,"description","Resize and optimize your images online <br>Resizing is done entirely client-side and the images are not sent anywhere.");L(this,"seoMetadata",{title:"Free Online Image Resizer and Optimizer Tool",description:"Resize, compress, and optimize your images online for free. Easy-to-use tool that maintains image quality while reducing file size.",keywords:["image resizer","image optimizer","photo resizer","picture resize tool","compress images","resize photos online"]});L(this,"currentImage",null);L(this,"originalWidth",0);L(this,"originalHeight",0)}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupHandlers(),this.addStyles())}setupHandlers(){const e=document.querySelector(".upload-section"),t=document.querySelector(".controls-section"),n=document.getElementById("imageInput"),s=document.getElementById("widthInput"),r=document.getElementById("heightInput"),o=document.getElementById("maintainAspectRatio"),a=document.getElementById("previewCanvas"),l=document.getElementById("downloadBtn"),c=document.getElementById("resetBtn"),d=document.querySelectorAll(".quick-resize button"),u=document.getElementById("originalSize"),h=document.getElementById("newSize");if(!e||!t||!n||!s||!r||!o||!a||!l||!c||!u||!h)return;e.addEventListener("dragover",b=>{b.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>{e.classList.remove("drag-over")}),e.addEventListener("drop",b=>{var g;b.preventDefault(),e.classList.remove("drag-over"),(g=b.dataTransfer)!=null&&g.files.length&&(n.files=b.dataTransfer.files,f(b.dataTransfer.files[0]))}),n.addEventListener("change",()=>{var b;(b=n.files)!=null&&b.length&&f(n.files[0])});const f=b=>{if(!b.type.startsWith("image/")){this.showToast("Please select an image file");return}const g=new FileReader;g.onload=w=>{var E;const p=new Image;p.onload=()=>{this.currentImage=p,this.originalWidth=p.width,this.originalHeight=p.height,s.value=p.width.toString(),r.value=p.height.toString(),t.style.display="block",e.style.display="none",u.textContent=`${p.width}x${p.height}px`,this.updatePreview()},p.src=(E=w.target)==null?void 0:E.result},g.readAsDataURL(b)};s.addEventListener("input",()=>{if(o.checked&&this.originalWidth&&this.originalHeight){const b=this.originalHeight/this.originalWidth,g=parseInt(s.value)||0;r.value=Math.round(g*b).toString()}this.updatePreview()}),r.addEventListener("input",()=>{if(o.checked&&this.originalWidth&&this.originalHeight){const b=this.originalWidth/this.originalHeight,g=parseInt(r.value)||0;s.value=Math.round(g*b).toString()}this.updatePreview()}),d.forEach(b=>{b.addEventListener("click",()=>{const g=parseFloat(b.getAttribute("data-scale")||"1");s.value=Math.round(this.originalWidth*g).toString(),o.checked&&(r.value=Math.round(this.originalHeight*g).toString()),this.updatePreview()})}),l.addEventListener("click",()=>{if(!a)return;const b=document.createElement("a");b.download="resized-image.png",b.href=a.toDataURL("image/png"),document.body.appendChild(b),b.click(),document.body.removeChild(b),this.showToast("Image downloaded successfully!")}),c.addEventListener("click",()=>{t.style.display="none",e.style.display="block",this.currentImage=null,this.originalWidth=0,this.originalHeight=0,n.value="",a.width=0,a.height=0,u.textContent="-",h.textContent="-"})}updatePreview(){if(!this.currentImage)return;const e=document.getElementById("previewCanvas"),t=document.getElementById("newSize"),n=document.getElementById("widthInput"),s=document.getElementById("heightInput");if(!e||!t||!n||!s)return;const r=e.getContext("2d");if(!r)return;const o=parseInt(n.value)||this.originalWidth,a=parseInt(s.value)||this.originalHeight;e.width=o,e.height=a,r.clearRect(0,0,e.width,e.height),r.drawImage(this.currentImage,0,0,o,a),t.textContent=`${o}x${a}px`}showToast(e){const t=document.querySelector(".resizer-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class S0{constructor(){L(this,"id","mock-data-generator");L(this,"name","Mock Data Generator");L(this,"description","Generate realistic mock data for testing and development");L(this,"seoMetadata",{title:"Mock Data Generator Tool - Create Test Data Online",description:"Generate realistic mock data for testing and development. Create random names, addresses, emails, and more with this free online tool.",keywords:["mock data generator","test data generator","fake data generator","random data generator","sample data creator"]});L(this,"supportedTypes",[{value:"fullName",label:"Full Name"},{value:"firstName",label:"First Name"},{value:"lastName",label:"Last Name"},{value:"email",label:"Email Address"},{value:"phoneNumber",label:"Phone Number"},{value:"streetAddress",label:"Street Address"},{value:"city",label:"City"},{value:"state",label:"State"},{value:"zipCode",label:"ZIP Code"},{value:"country",label:"Country"},{value:"company",label:"Company Name"},{value:"jobTitle",label:"Job Title"},{value:"age",label:"Age"},{value:"date",label:"Date"},{value:"uuid",label:"UUID"},{value:"number",label:"Number"},{value:"boolean",label:"Boolean"}]);L(this,"firstNames",["James","Mary","John","Patricia","Robert","Jennifer","Michael","Linda","William","Elizabeth","David","Barbara","Richard","Susan","Joseph","Jessica","Thomas","Sarah","Charles","Karen","Emma","Olivia","Ava","Isabella","Sophia","Mia","Charlotte","Amelia","Harper","Evelyn","Liam","Noah","Oliver","Elijah","Benjamin","Lucas","Henry","Theodore","Jack","Alexander","Santiago","Sofia","Mateo","Isabella","Sebastian","Valentina","Diego","Camila","Gabriel","Victoria","Adrian","Lucia","Julian","Elena","Daniel","Mariana","Wei","Mei","Hiroshi","Yuki","Jin","Soo-jin","Ming","Li Wei","Kai","Sakura","Ravi","Priya","Amit","Deepa","Zhang","Ying","Jamal","Aaliyah","DeShawn","Imani","Malik","Zara","Xavier","Aisha","Marcus","Kiara","Darnell","Destiny","Tyrone","Shaniqua","Kwame","Ebony","Muhammad","Fatima","Ahmed","Amir","Hassan","Leila","Omar","Yasmin","Ali","Noor","Ibrahim","Zainab","Karim","Amira","Yusuf","Layla","Hans","Ingrid","Pierre","Sophie","Giovanni","Chiara","Klaus","Astrid","Lars","Helga","Franz","Margot","Paolo","Anastasia","Viktor","Natasha"]);L(this,"lastNames",["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Thompson","White","Harris","Clark","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Hill","Baker","Green","Adams","Nelson","Carter","Garcia","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Perez","Sanchez","Ramirez","Torres","Flores","Rivera","Morales","Ortiz","Cruz","Reyes","Gomez","Diaz","Vasquez","Ramos","Gutierrez","Chavez","Mendoza","Chen","Wang","Li","Liu","Yang","Huang","Wu","Zhou","Zhang","Zhu","Kim","Lee","Park","Choi","Jung","Kang","Nguyen","Tran","Pham","Patel","Singh","Kumar","Shah","Sharma","Suzuki","Tanaka","Sato","Watanabe","Washington","Jefferson","Banks","Freeman","Brooks","Jenkins","Howard","Powell","Coleman","Simmons","Fisher","Reynolds","Ferguson","Fields","Booker","Rhodes","Stevenson","Malone","Hamilton","Douglas","Winston","Al-Sayed","Khan","Ahmed","Hassan","Ali","Rahman","Malik","Hussein","Mahmoud","Aziz","Ibrahim","Mansour","Khoury","Sayegh","Nassar","Schmidt","Mueller","Fischer","Weber","Meyer","Wagner","Becker","Dubois","Lefebvre","Moreau","Laurent","Bernard","Russo","Conti","Ferrari","Ricci","Marino","Costa","Kowalski","Novak","Kovac"]);L(this,"cities",["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","San Francisco","Charlotte","Indianapolis","Seattle","Denver","Boston","Portland","Miami","Nashville","Atlanta","Detroit","Toronto","Vancouver","Montreal","Calgary","Ottawa","Mexico City","Guadalajara","London","Paris","Berlin","Madrid","Rome","Amsterdam","Brussels","Vienna","Stockholm","Copenhagen","Oslo","Dublin","Prague","Warsaw","Budapest","Barcelona","Munich","Milan","Hamburg","Lyon","Frankfurt","Zurich","Geneva","Tokyo","Shanghai","Beijing","Seoul","Mumbai","Delhi","Singapore","Hong Kong","Bangkok","Kuala Lumpur","Jakarta","Manila","Osaka","Taipei","Ho Chi Minh City","Dubai","Abu Dhabi","Doha","Istanbul","Tehran","Riyadh","Bangalore","Karachi","Sydney","Melbourne","Brisbane","Perth","Auckland","Wellington","Adelaide","São Paulo","Rio de Janeiro","Buenos Aires","Lima","Bogotá","Santiago","Caracas","Montevideo","Quito","La Paz","Asunción","Brasília","Cairo","Lagos","Johannesburg","Nairobi","Casablanca","Cape Town","Accra","Addis Ababa","Dar es Salaam","Algiers","Khartoum","Rabat"]);L(this,"states",["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);L(this,"countries",["United States","Canada","Mexico","Costa Rica","Panama","Jamaica","Dominican Republic","Cuba","Guatemala","Honduras","El Salvador","Brazil","Argentina","Chile","Colombia","Peru","Venezuela","Uruguay","Ecuador","Bolivia","Paraguay","United Kingdom","Germany","France","Italy","Spain","Netherlands","Belgium","Sweden","Norway","Denmark","Finland","Ireland","Portugal","Greece","Austria","Switzerland","Poland","Hungary","Czech Republic","Romania","Ukraine","Croatia","Serbia","China","Japan","South Korea","India","Indonesia","Malaysia","Singapore","Thailand","Vietnam","Philippines","Pakistan","Bangladesh","Sri Lanka","Nepal","Mongolia","Kazakhstan","Israel","Saudi Arabia","United Arab Emirates","Qatar","Turkey","Iran","Iraq","Jordan","Lebanon","Oman","South Africa","Egypt","Morocco","Kenya","Nigeria","Ghana","Ethiopia","Tanzania","Uganda","Rwanda","Senegal","Algeria","Tunisia","Australia","New Zealand","Fiji","Papua New Guinea","Solomon Islands","Vanuatu","Samoa"]);L(this,"companies",["Quantum Dynamics","Digital Nexus","TechSphere Solutions","InnovateX","CyberPeak Systems","DataFlow Technologies","CloudMind Computing","Artificial Intelligence Labs","Binary Solutions Group","FutureTech Industries","Neural Networks Inc","Quantum Computing Co","Digital Frontiers","Atlas Manufacturing","Global Industries Corp","Sterling Dynamics","Precision Engineering Ltd","Summit Industries","Titan Manufacturing","Nova Industrial Systems","Apex Production Group","MetalWorks International","Cornerstone Financial","Global Trust Bank","Prosperity Partners","Heritage Investment Group","Capital Dynamics","Wealth Architects","Strategic Finance Solutions","Pinnacle Banking Corp","Liberty Financial","Vital Sciences","BioGenetics Research","MediCore Solutions","Genesis Healthcare","Life Sciences Lab","Advanced Medical Systems","BioTech Innovations","Healthcare Dynamics","Pharmaceutical Pioneers","Stellar Entertainment","Global Media Group","Digital Content Corp","Creative Dynamics","Media Frontiers","Entertainment Fusion","Interactive Media Solutions","Content Creation Co","Digital Dreams Studios","Acme Corporation","Umbrella Corporation","Cyberdyne Systems","Wayne Enterprises","Stark Industries","Oscorp Industries","Weyland-Yutani Corp","InGen Technologies","Tyrell Corporation","Gekko & Co","Wonka Industries","Dunder Mifflin","Los Pollos Hermanos"]);L(this,"jobTitles",["Software Engineer","Data Scientist","Cloud Architect","DevOps Engineer","Machine Learning Engineer","Full Stack Developer","Mobile App Developer","Systems Administrator","Information Security Analyst","Database Administrator","UI/UX Designer","Product Manager","Scrum Master","IT Project Manager","Network Engineer","Blockchain Developer","AI Research Scientist","Quality Assurance Engineer","Site Reliability Engineer","Tech Lead","Chief Executive Officer","Chief Technology Officer","Chief Financial Officer","Chief Marketing Officer","Chief Operating Officer","Managing Director","Business Development Manager","Operations Director","Strategy Consultant","Marketing Manager","Sales Director","Account Executive","Brand Manager","Human Resources Manager","Recruitment Specialist","Financial Analyst","Investment Banker","Management Consultant","Risk Manager","Supply Chain Manager","Creative Director","Art Director","Graphic Designer","Content Strategist","Copywriter","Digital Marketing Specialist","Social Media Manager","Video Producer","Motion Designer","Brand Strategist","UX Researcher","Visual Designer","3D Artist","Game Designer","Content Creator","Medical Doctor","Registered Nurse","Pharmacist","Clinical Researcher","Physical Therapist","Healthcare Administrator","Biomedical Engineer","Psychiatrist","Dental Surgeon","Veterinarian","Nurse Practitioner","Research Scientist","Biotechnology Researcher","Environmental Scientist","Chemical Engineer","Quantum Physicist","Marine Biologist","Archaeologist","Aerospace Engineer","Materials Scientist","Data Analyst","University Professor","Educational Consultant","Academic Researcher","Curriculum Developer","Educational Technology Specialist","Dean of Students","Corporate Lawyer","Investment Manager","Financial Controller","Tax Consultant","Compliance Officer","Legal Counsel","Portfolio Manager","Actuary","Audit Manager","Wealth Management Advisor"]);L(this,"streetTypes",["Street","Avenue","Boulevard","Road","Lane","Drive","Way","Court","Circle","Place","Trail","Parkway","Highway","Terrace","Square","Alley","Loop","Path","Grove","Crescent","Ridge","Point","Heights","Crossing","Commons","Esplanade","Glen","Green","Landing","Meadow","Park","Plaza","Promenade","Run","Trace","Vale","Vista","Walk","Row"])}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addFieldRow(),this.addStyles())}setupEventListeners(){const e=document.getElementById("addField"),t=document.getElementById("generateBtn"),n=document.getElementById("exportFormat"),s=document.getElementById("copyOutput"),r=document.getElementById("downloadOutput");!e||!t||!n||!s||!r||(e.addEventListener("click",()=>this.addFieldRow()),t.addEventListener("click",()=>this.generateData()),n.addEventListener("change",()=>this.generateData()),s.addEventListener("click",()=>{const o=document.getElementById("outputDisplay");o!=null&&o.textContent&&navigator.clipboard.writeText(o.textContent).then(()=>this.showToast("Output copied to clipboard")).catch(()=>this.showToast("Failed to copy output"))}),r.addEventListener("click",()=>{var u;const o=(u=document.getElementById("outputDisplay"))==null?void 0:u.textContent;if(!o)return;const a=n.value,l=new Blob([o],{type:a==="json"?"application/json":a==="csv"?"text/csv":"text/plain"}),c=URL.createObjectURL(l),d=document.createElement("a");d.href=c,d.download=`mock-data.${a}`,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(c),this.showToast("File downloaded successfully")}))}addFieldRow(){const e=document.getElementById("fieldList");if(!e)return;const t=document.createElement("div");t.className="field-row",t.innerHTML=`
      <input type="text" class="field-name" placeholder="Field name">
      <select class="field-type">
        ${this.supportedTypes.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
      </select>
      <div class="field-options"></div>
      <button class="remove-field">×</button>
    `;const n=t.querySelector(".remove-field");n==null||n.addEventListener("click",()=>{t.remove(),e.children.length===0&&this.addFieldRow()}),e.appendChild(t)}generateData(){var l,c;const e=document.querySelectorAll(".field-row"),t=parseInt(((l=document.getElementById("recordCount"))==null?void 0:l.value)||"10"),n=(c=document.getElementById("exportFormat"))==null?void 0:c.value,s=document.getElementById("outputDisplay");if(!s)return;const r=Array.from(e).map(d=>{var u,h,f;return{name:((h=(u=d.querySelector(".field-name"))==null?void 0:u.value)==null?void 0:h.trim())||"",type:((f=d.querySelector(".field-type"))==null?void 0:f.value)||"text"}}).filter(d=>d.name!=="");if(r.length===0){s.textContent="Please add at least one field with a name.";return}const o=Array.from({length:t},()=>{const d={};return r.forEach(u=>{d[u.name]=this.generateFieldValue(u.type)}),d});let a;switch(n){case"json":a=JSON.stringify(o,null,2);break;case"csv":const d=r.map(h=>h.name).join(","),u=o.map(h=>r.map(f=>h[f.name]).join(","));a=[d,...u].join(`
`);break;case"raw":a=o.map(h=>Object.entries(h).map(([f,b])=>`${f}: ${b}`).join(`
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
    `,document.head.appendChild(e)}}class T0{constructor(){L(this,"id","random-number-generator");L(this,"name","Random Number Generator");L(this,"description","Generate random numbers with custom ranges, distributions, and options");L(this,"seoMetadata",{title:"Free Online Random Number Generator Tool",description:"Generate random numbers with custom ranges and distributions. Perfect for games, statistics, and random sampling. Cryptographically secure random number generation.",keywords:["random number generator","random number picker","number randomizer","random integer generator","random range generator","secure random numbers"]});L(this,"distributions",[{value:"uniform",label:"Uniform (Equal Probability)"},{value:"normal",label:"Normal (Bell Curve)"},{value:"exponential",label:"Exponential"}])}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("distribution"),t=document.getElementById("normalParams"),n=document.getElementById("exponentialParams"),s=document.getElementById("generateBtn"),r=document.getElementById("copyBtn"),o=document.getElementById("clearBtn"),a=document.getElementById("resultsArea");if(!e||!t||!n||!s||!r||!o||!a)return;e.addEventListener("change",()=>{t.style.display=e.value==="normal"?"flex":"none",n.style.display=e.value==="exponential"?"flex":"none"}),s.addEventListener("click",()=>{const d=parseFloat(document.getElementById("minValue").value),u=parseFloat(document.getElementById("maxValue").value),h=parseInt(document.getElementById("count").value),f=parseInt(document.getElementById("decimalPlaces").value),b=document.getElementById("allowDuplicates").checked,g=document.getElementById("sortResults").checked,w=e.value;try{const p=this.generateNumbers({min:d,max:u,count:h,decimalPlaces:f,allowDuplicates:b,sortResults:g,distribution:w,mean:parseFloat(document.getElementById("mean").value),stdDev:parseFloat(document.getElementById("stdDev").value),lambda:parseFloat(document.getElementById("lambda").value)});this.displayResults(p)}catch(p){this.showError(p.message)}}),r.addEventListener("click",()=>{const d=a.textContent;d&&navigator.clipboard.writeText(d).then(()=>this.showToast("Numbers copied to clipboard")).catch(()=>this.showToast("Failed to copy numbers"))}),o.addEventListener("click",()=>{a.innerHTML=""});const l=document.getElementById("downloadTxtBtn"),c=document.getElementById("downloadJsonBtn");l&&c&&(l.addEventListener("click",()=>{const d=this.extractCurrentNumbers();if(d.length===0)return;const u=d.join(`
`);this.downloadFile(u,"random-numbers.txt","text/plain")}),c.addEventListener("click",()=>{const d=this.extractCurrentNumbers();if(d.length===0)return;const u=JSON.stringify(d,null,4);this.downloadFile(u,"random-numbers.json","application/json")}))}generateNumbers(e){const{min:t,max:n,count:s,decimalPlaces:r,allowDuplicates:o,sortResults:a,distribution:l,mean:c=50,stdDev:d=10,lambda:u=1}=e;if(isNaN(t)||isNaN(n))throw new Error("Please enter valid minimum and maximum values");if(t>=n)throw new Error("Maximum value must be greater than minimum value");if(s<1||s>1e3)throw new Error("Number of values must be between 1 and 1000");if(r<0||r>10)throw new Error("Decimal places must be between 0 and 10");const h=Math.pow(10,-r),f=Math.floor((n-t)/h)+1;if(!o&&f<s)throw new Error(`Can't generate ${s} unique numbers in this range with ${r} decimal places`);const b=[],g=new Set;for(;b.length<s;){let w;switch(l){case"normal":if(d<=0)throw new Error("Standard deviation must be greater than 0");let p=0;do{const m=Math.random(),_=Math.random();w=Math.sqrt(-2*Math.log(m))*Math.cos(2*Math.PI*_)*d+c,p++}while((w<t||w>n)&&p<100);p>=100&&(w=t+Math.random()*(n-t));break;case"exponential":if(u<=0)throw new Error("Lambda must be greater than 0");const E=-Math.log(1-Math.random())/u,x=n-t;w=t+(1-Math.exp(-E))*x;break;default:w=t+Math.random()*(n-t);break}w=Number(w.toFixed(r)),o?b.push(w):g.has(w)||(b.push(w),g.add(w))}return a&&b.sort((w,p)=>w-p),b}displayResults(e){const t=document.getElementById("resultsArea");if(!t)return;const n=e.map(s=>Math.abs(s)>=1e6||Math.abs(s)<1e-4&&s!==0?s.toExponential(Math.min(15,Math.max(0,this.getSignificantDecimals(s)))):s.toLocaleString(void 0,{minimumFractionDigits:this.getDecimalPlaces(s),maximumFractionDigits:this.getDecimalPlaces(s)}));if(t.innerHTML=n.join(", "),e.length>1){const s=this.calculateStats(e);t.innerHTML+=`
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
    `,document.head.appendChild(e)}}class _0{constructor(){L(this,"id","json-compare");L(this,"name","JSON Compare");L(this,"description","Compare and find differences between JSON objects");L(this,"seoMetadata",{title:"Free Online JSON Comparison Tool",description:"Compare two JSON objects and find differences instantly. Visual diff viewer, structural comparison, and value matching for JSON data.",keywords:["json compare","json diff","json difference checker","compare json online","json comparison tool","json structure compare"]})}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEditor(),this.addStyles())}setupEditor(){const e=document.getElementById("leftEditor"),t=document.getElementById("rightEditor"),n=document.getElementById("leftError"),s=document.getElementById("rightError"),r=document.getElementById("diffResults"),o=document.getElementById("diffStats");if(!e||!t||!n||!s||!r||!o)return;const a={name:"John Doe",age:30,hobbies:["reading","gaming"],address:{street:"123 Main St",city:"Boston"}},l={name:"John Doe",age:31,hobbies:["reading","gaming"],address:{street:"123 Main St",city:"Boston"}};e.value=JSON.stringify(a,null,2),t.value=JSON.stringify(l,null,2);const c=()=>{try{const u=JSON.parse(e.value),h=JSON.parse(t.value),f=document.getElementById("ignoreWhitespace").checked,b=document.getElementById("ignoreCase").checked,g=document.getElementById("ignoreOrder").checked,w=this.compareJson(u,h,{ignoreWhitespace:f,ignoreCase:b,ignoreOrder:g});this.displayDifferences(w)}catch(u){r.innerHTML=`<div class="error-message">Error: ${u.message}</div>`,o.textContent=""}},d=(u,h)=>{const f=document.getElementById(h);if(!f)return;const b=u.value.split(`
`).length;f.innerHTML=Array.from({length:b},(g,w)=>`<div class="line-number">${w+1}</div>`).join("")};[e,t].forEach((u,h)=>{const f=h===0?"leftLineNumbers":"rightLineNumbers",b=h===0?n:s;u.addEventListener("input",()=>{d(u,f);try{u.value.trim()&&(JSON.parse(u.value),b.textContent="",b.className="error-display",c())}catch(w){b.textContent=w.message,b.className="error-display error"}}),u.addEventListener("scroll",()=>{const w=document.getElementById(f);w&&(w.scrollTop=u.scrollTop)}),u.addEventListener("keydown",w=>{if(w.key==="Tab"){w.preventDefault();const p=u.selectionStart,E=u.selectionEnd;u.value=u.value.substring(0,p)+"  "+u.value.substring(E),u.selectionStart=u.selectionEnd=p+2,d(u,f)}});const g=u.closest(".editor-column");if(g){const w=g.querySelector(".format-btn"),p=g.querySelector(".clear-btn");w==null||w.addEventListener("click",()=>{try{const E=JSON.parse(u.value);u.value=JSON.stringify(E,null,2),d(u,f),b.textContent="",b.className="error-display"}catch(E){b.textContent=E.message,b.className="error-display error"}}),p==null||p.addEventListener("click",()=>{u.value="",d(u,f),b.textContent="",b.className="error-display"})}}),["ignoreWhitespace","ignoreCase","ignoreOrder"].forEach(u=>{const h=document.getElementById(u);h==null||h.addEventListener("change",c)}),d(e,"leftLineNumbers"),d(t,"rightLineNumbers"),c()}compareJson(e,t,n){const s=[],r=n.path||[],o=a=>{if(typeof a=="string"){let l=n.ignoreWhitespace?a.trim():a;return n.ignoreCase?l.toLowerCase():l}return a};if(Array.isArray(e))Array.isArray(t)?e.length!==t.length?s.push({path:r.join("."),type:"array_length",left:e.length,right:t.length}):n.ignoreOrder||e.forEach((a,l)=>{s.push(...this.compareJson(a,t[l],{...n,path:[...r,l.toString()]}))}):s.push({path:r.join("."),type:"type_mismatch",left:"array",right:typeof t});else if(typeof e=="object"&&e!==null)typeof t!="object"||t===null?s.push({path:r.join("."),type:"type_mismatch",left:"object",right:typeof t}):new Set([...Object.keys(e),...Object.keys(t)]).forEach(l=>{l in e?l in t?s.push(...this.compareJson(e[l],t[l],{...n,path:[...r,l]})):s.push({path:[...r,l].join("."),type:"key_missing_in_right",left:e[l]}):s.push({path:[...r,l].join("."),type:"key_missing_in_left",right:t[l]})});else{const a=o(e),l=o(t);a!==l&&s.push({path:r.join(".")||"root",type:"value_mismatch",left:e,right:t})}return s}displayDifferences(e){var r,o;const t=document.getElementById("diffResults"),n=document.getElementById("diffStats");if(!t||!n)return;if(e.length===0){t.innerHTML='<div class="success-message">✓ JSONs are equivalent</div>',n.textContent="No differences found",t.classList.add("no-differences"),(r=t.closest(".output-section"))==null||r.classList.add("no-differences"),this.highlightDifferences(e);return}t.classList.remove("no-differences"),(o=t.closest(".output-section"))==null||o.classList.remove("no-differences");const s=e.reduce((a,l)=>(a[l.type]=(a[l.type]||0)+1,a),{});n.innerHTML=Object.entries(s).map(([a,l])=>`<span class="stat-item ${a}">${this.formatDiffType(a)}: ${l}</span>`).join(" "),t.innerHTML="",this.highlightDifferences(e)}highlightDifferences(e){const t=document.getElementById("leftEditor"),n=document.getElementById("rightEditor");if(!t||!n)return;const s=(a,l)=>{const c=a.parentElement;if(!c)return;c.querySelectorAll(".highlight-overlay").forEach(u=>u.remove());const d=document.createElement("div");return d.className="highlight-overlay",d.style.left="2rem",c.appendChild(d),d},r=s(t,"left"),o=s(n,"right");!r||!o||(e.forEach(a=>{const l=a.path.split(".");try{const c=JSON.parse(t.value),d=JSON.parse(n.value),u=this.findAffectedLines(t.value,l),h=this.findAffectedLines(n.value,l);u.forEach(f=>{const b=document.createElement("div");b.className=`highlight-marker ${a.type}`,b.style.top=`${(f-.6)*20}px`,b.style.width="100%",b.style.height="20px",r.appendChild(b)}),h.forEach(f=>{const b=document.createElement("div");b.className=`highlight-marker ${a.type}`,b.style.top=`${(f-.6)*20}px`,b.style.width="100%",b.style.height="20px",o.appendChild(b)})}catch(c){console.error("Error highlighting differences:",c)}}),t.addEventListener("scroll",()=>{r&&(r.style.top=`${-t.scrollTop}px`)}),n.addEventListener("scroll",()=>{o&&(o.style.top=`${-n.scrollTop}px`)}))}findAffectedLines(e,t){const n=[];let s=JSON.parse(e),r=[],o=1;const a=l=>{if(!(!l||typeof l!="object"))for(const c in l){const u=[...r,c].join(".");o=(e.slice(0,e.indexOf(`"${c}"`)).match(/\n/g)||[]).length+1,t.join(".").startsWith(u)&&n.push(o),l[c]&&typeof l[c]=="object"&&(r.push(c),a(l[c]),r.pop())}};return a(s),[...new Set(n)]}formatDiffType(e){return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class C0{static injectSEOMetadata(e){const t=document.createElement("div");t.style.display="none",t.setAttribute("aria-hidden","true");const n={"@context":"https://schema.org","@type":"SoftwareApplication",name:e.seoMetadata.title,description:e.seoMetadata.description,keywords:e.seoMetadata.keywords.join(", "),applicationCategory:"WebApplication"};t.innerHTML=`
      <div class="tool-seo-metadata">
        <h2>${e.seoMetadata.title}</h2>
        <p>${e.seoMetadata.description}</p>
        <meta name="keywords" content="${e.seoMetadata.keywords.join(", ")}">
      </div>
      <script type="application/ld+json">
        ${JSON.stringify(n)}
      <\/script>
    `;const s=document.getElementById(e.id);s&&s.appendChild(t)}}class I0{constructor(){L(this,"id","password-generator");L(this,"name","Password Generator");L(this,"description","Generate secure passwords with custom options");L(this,"seoMetadata",{title:"Free Online Password Generator Tool",description:"Generate strong, secure passwords instantly with customizable options. Create passwords that meet specific requirements for length and complexity.",keywords:["password generator","secure password","random password","strong password generator","password creator"]});L(this,"lastSettings",{length:16,uppercase:!0,lowercase:!0,numbers:!0,symbols:!0})}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles(),this.generatePassword())}setupEventListeners(){const e=document.getElementById("generatePassword"),t=document.getElementById("copyPassword"),n=document.getElementById("passwordLength"),s=["uppercase","lowercase","numbers","symbols"];e==null||e.addEventListener("click",()=>this.generatePassword()),t==null||t.addEventListener("click",()=>{const r=document.getElementById("passwordOutput");navigator.clipboard.writeText(r.value).then(()=>this.showToast("Password copied to clipboard")).catch(()=>this.showToast("Failed to copy password"))}),n==null||n.addEventListener("input",()=>{let r=parseInt(n.value);r<8&&(n.value="8"),r>64&&(n.value="64"),this.lastSettings.length=parseInt(n.value)}),s.forEach(r=>{const o=document.getElementById(r);o==null||o.addEventListener("change",()=>{this.lastSettings[r]=o.checked,this.generatePassword()})})}generatePassword(){var o;const e={uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",lowercase:"abcdefghijklmnopqrstuvwxyz",numbers:"0123456789",symbols:"!@#$%^&*()_+-=[]{}|;:,.<>?"};let t="",n="";if(Object.keys(e).forEach(a=>{const l=document.getElementById(a);l!=null&&l.checked&&(t+=e[a])}),!t){this.showToast("Please select at least one character type");return}const s=parseInt(((o=document.getElementById("passwordLength"))==null?void 0:o.value)||"16");for(let a=0;a<s;a++){const l=crypto.getRandomValues(new Uint32Array(1))[0]%t.length;n+=t[l]}const r=document.getElementById("passwordOutput");r&&(r.value=n)}showToast(e){const t=document.querySelector(".password-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class M0{constructor(){L(this,"id","timezone-converter");L(this,"name","Time Zone Converter");L(this,"description","Convert times between different time zones easily");L(this,"seoMetadata",{title:"Free Online Time Zone Converter Tool",description:"Convert times between different time zones instantly. Easy to use time zone calculator with support for daylight saving time.",keywords:["time zone converter","timezone calculator","time converter","world time","timezone tool","time difference calculator"]});L(this,"timeZones",Intl.supportedValuesOf("timeZone"))}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles(),this.initializeWithCurrentTime())}formatTimeZone(e){const n=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"long"}).format(new Date).split(" ").pop();return`${e.replace("_"," ")} (${n})`}setupEventListeners(){const e=document.getElementById("sourceTime"),t=document.getElementById("sourceZone"),n=document.getElementById("targetZone"),s=document.getElementById("swapZones");t.value=Intl.DateTimeFormat().resolvedOptions().timeZone,n.value="UTC";const r=()=>{if(!e.value)return;const o=new Date(e.value),a=this.convertTime(o,t.value,n.value),l=document.getElementById("targetTime");l.value=a.toISOString().slice(0,16),this.updateTimeInfo(o,t.value,n.value)};e.addEventListener("input",r),t.addEventListener("change",r),n.addEventListener("change",r),s==null||s.addEventListener("click",()=>{const o=t.value;t.value=n.value,n.value=o,r()})}initializeWithCurrentTime(){const e=document.getElementById("sourceTime"),t=new Date;e.value=t.toISOString().slice(0,16),e.dispatchEvent(new Event("input"))}convertTime(e,t,n){const s=new Date(e.toLocaleString("en-US",{timeZone:t})),o=new Date(s.toLocaleString("en-US",{timeZone:n})).getTime()-s.getTime();return new Date(e.getTime()+o)}updateTimeInfo(e,t,n){const s=document.getElementById("timeInfo");if(!s)return;const r=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"long",hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"long",day:"numeric"}),o=new Intl.DateTimeFormat("en-US",{timeZone:n,timeZoneName:"long",hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"long",day:"numeric"}),a=r.format(e),l=o.format(e);s.innerHTML=`
      <div class="info-row">
        <strong>From:</strong> ${a}
      </div>
      <div class="info-row">
        <strong>To:</strong> ${l}
      </div>
      <div class="info-row time-difference">
        ${this.calculateTimeDifference(t,n)}
      </div>
    `}calculateTimeDifference(e,t){const n=new Date,s=new Date(n.toLocaleString("en-US",{timeZone:e})),o=(new Date(n.toLocaleString("en-US",{timeZone:t})).getTime()-s.getTime())/(1e3*60*60),a=Math.abs(o),l=Math.floor(a),c=Math.round((a-l)*60);return`Time difference: ${o>=0?"+":"-"}${l}:${c.toString().padStart(2,"0")} hours`}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class A0{constructor(){L(this,"id","length-converter");L(this,"name","Length Converter");L(this,"description","Convert between different units of length and distance");L(this,"seoMetadata",{title:"Free Online Length Unit Converter Tool",description:"Convert between different units of length and distance including meters, kilometers, miles, feet, inches, and more. Easy to use and no installation required.",keywords:["length converter","distance converter","unit converter","meter converter","feet to meters","inches to cm","metric converter"]});L(this,"units",{meter:{name:"Meters",abbreviation:"m",toBase:e=>e,fromBase:e=>e},kilometer:{name:"Kilometers",abbreviation:"km",toBase:e=>e*1e3,fromBase:e=>e/1e3},centimeter:{name:"Centimeters",abbreviation:"cm",toBase:e=>e/100,fromBase:e=>e*100},millimeter:{name:"Millimeters",abbreviation:"mm",toBase:e=>e/1e3,fromBase:e=>e*1e3},mile:{name:"Miles",abbreviation:"mi",toBase:e=>e*1609.344,fromBase:e=>e/1609.344},yard:{name:"Yards",abbreviation:"yd",toBase:e=>e*.9144,fromBase:e=>e/.9144},foot:{name:"Feet",abbreviation:"ft",toBase:e=>e*.3048,fromBase:e=>e/.3048},inch:{name:"Inches",abbreviation:"in",toBase:e=>e*.0254,fromBase:e=>e/.0254},nauticalMile:{name:"Nautical Miles",abbreviation:"nmi",toBase:e=>e*1852,fromBase:e=>e/1852}});L(this,"lastInput","");L(this,"lastFromUnit","meter");L(this,"lastToUnit","kilometer")}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles(),this.convert(),this.updateCommonConversions())}setupEventListeners(){const e=document.getElementById("fromValue"),t=document.getElementById("fromUnit"),n=document.getElementById("toUnit"),s=document.getElementById("swapUnits");!e||!t||!n||!s||(t.value=this.lastFromUnit,n.value=this.lastToUnit,e.addEventListener("input",()=>{this.lastInput=e.value,this.convert()}),t.addEventListener("change",()=>{this.lastFromUnit=t.value,this.convert()}),n.addEventListener("change",()=>{this.lastToUnit=n.value,this.convert()}),s.addEventListener("click",()=>{const r=t.value;t.value=n.value,n.value=r,this.lastFromUnit=t.value,this.lastToUnit=n.value,this.convert()}),document.querySelectorAll(".conversion-item").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.from,a=r.dataset.to;o&&a&&(t.value=o,n.value=a,this.lastFromUnit=o,this.lastToUnit=a,this.convert())})}))}convert(){const e=document.getElementById("fromValue"),t=document.getElementById("fromUnit"),n=document.getElementById("toUnit"),s=document.getElementById("toValue");if(!e||!t||!n||!s)return;const r=parseFloat(e.value);if(isNaN(r)){s.value="";return}const o=this.units[t.value],a=this.units[n.value],l=o.toBase(r),c=a.fromBase(l);s.value=this.formatNumber(c)}updateCommonConversions(){Object.keys(this.units).forEach(e=>{Object.keys(this.units).forEach(t=>{const n=document.querySelector(`[data-from="${e}"][data-to="${t}"]`);if(n){const s=this.units[e].toBase(1),r=this.units[t].fromBase(s),o=this.formatNumber(r),a=n.querySelector(".conversion-value");a&&(a.textContent=`1 ${this.units[e].abbreviation} = ${o} ${this.units[t].abbreviation}`)}})})}formatNumber(e){if(Math.abs(e)>=1e9||Math.abs(e)<1e-9&&e!==0)return e.toExponential(6);let t;const n=Math.abs(e);return n>=100?t=4:n>=10?t=5:n>=1?t=6:t=7,Number(e.toPrecision(t)).toString()}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class L0{constructor(){L(this,"id","mass-converter");L(this,"name","Weight & Mass Converter");L(this,"description","Convert between different units of weight and mass");L(this,"seoMetadata",{title:"Free Online Weight and Mass Unit Converter Tool",description:"Convert between different units of weight and mass including kilograms, pounds, ounces, stones, and more. Simple and accurate conversions.",keywords:["weight converter","mass converter","kg to lbs","pounds to kilos","ounce converter","stone calculator","unit converter"]});L(this,"units",{kilogram:{name:"Kilograms",abbreviation:"kg",toBase:e=>e,fromBase:e=>e},gram:{name:"Grams",abbreviation:"g",toBase:e=>e/1e3,fromBase:e=>e*1e3},milligram:{name:"Milligrams",abbreviation:"mg",toBase:e=>e/1e6,fromBase:e=>e*1e6},metricTon:{name:"Metric Tons",abbreviation:"t",toBase:e=>e*1e3,fromBase:e=>e/1e3},pound:{name:"Pounds",abbreviation:"lb",toBase:e=>e*.45359237,fromBase:e=>e/.45359237},ounce:{name:"Ounces",abbreviation:"oz",toBase:e=>e*.02834952,fromBase:e=>e/.02834952},stone:{name:"Stones",abbreviation:"st",toBase:e=>e*6.35029318,fromBase:e=>e/6.35029318},imperialTon:{name:"Imperial Tons",abbreviation:"imp t",toBase:e=>e*1016.047,fromBase:e=>e/1016.047},usTon:{name:"US Tons",abbreviation:"US t",toBase:e=>e*907.18474,fromBase:e=>e/907.18474},carat:{name:"Carats",abbreviation:"ct",toBase:e=>e*2e-4,fromBase:e=>e/2e-4}});L(this,"lastInput","");L(this,"lastFromUnit","kilogram");L(this,"lastToUnit","pound")}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
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
    `,this.setupEventListeners(),this.addStyles(),this.convert(),this.updateCommonConversions())}setupEventListeners(){const e=document.getElementById("fromValue"),t=document.getElementById("fromUnit"),n=document.getElementById("toUnit"),s=document.getElementById("swapUnits");!e||!t||!n||!s||(t.value=this.lastFromUnit,n.value=this.lastToUnit,e.addEventListener("input",()=>{this.lastInput=e.value,this.convert()}),t.addEventListener("change",()=>{this.lastFromUnit=t.value,this.convert()}),n.addEventListener("change",()=>{this.lastToUnit=n.value,this.convert()}),s.addEventListener("click",()=>{const r=t.value;t.value=n.value,n.value=r,this.lastFromUnit=t.value,this.lastToUnit=n.value,this.convert()}),document.querySelectorAll(".conversion-item").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.from,a=r.dataset.to;o&&a&&(t.value=o,n.value=a,this.lastFromUnit=o,this.lastToUnit=a,this.convert())})}))}convert(){const e=document.getElementById("fromValue"),t=document.getElementById("fromUnit"),n=document.getElementById("toUnit"),s=document.getElementById("toValue");if(!e||!t||!n||!s)return;const r=parseFloat(e.value);if(isNaN(r)){s.value="";return}const o=this.units[t.value],a=this.units[n.value],l=o.toBase(r),c=a.fromBase(l);s.value=this.formatNumber(c)}updateCommonConversions(){Object.keys(this.units).forEach(e=>{Object.keys(this.units).forEach(t=>{const n=document.querySelector(`[data-from="${e}"][data-to="${t}"]`);if(n){const s=this.units[e].toBase(1),r=this.units[t].fromBase(s),o=this.formatNumber(r),a=n.querySelector(".conversion-value");a&&(a.textContent=`1 ${this.units[e].abbreviation} = ${o} ${this.units[t].abbreviation}`)}})})}formatNumber(e){if(Math.abs(e)>=1e9||Math.abs(e)<1e-9&&e!==0)return e.toExponential(6);let t;const n=Math.abs(e);return n>=100?t=4:n>=10?t=5:n>=1?t=6:t=7,Number(e.toPrecision(t)).toString()}addStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}var cn={},Or,Nc;function N0(){return Nc||(Nc=1,Or=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Or}var Br={},Et={},Dc;function Xt(){if(Dc)return Et;Dc=1;let i;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Et.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Et.getSymbolTotalCodewords=function(n){return e[n]},Et.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Et.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');i=n},Et.isKanjiModeEnabled=function(){return typeof i<"u"},Et.toSJIS=function(n){return i(n)},Et}var Rr={},Oc;function ha(){return Oc||(Oc=1,function(i){i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+t)}}i.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},i.from=function(n,s){if(i.isValid(n))return n;try{return e(n)}catch{return s}}}(Rr)),Rr}var Pr,Bc;function D0(){if(Bc)return Pr;Bc=1;function i(){this.buffer=[],this.length=0}return i.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Pr=i,Pr}var Fr,Rc;function O0(){if(Rc)return Fr;Rc=1;function i(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return i.prototype.set=function(e,t,n,s){const r=e*this.size+t;this.data[r]=n,s&&(this.reservedBit[r]=!0)},i.prototype.get=function(e,t){return this.data[e*this.size+t]},i.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},i.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Fr=i,Fr}var $r={},Pc;function B0(){return Pc||(Pc=1,function(i){const e=Xt().getSymbolSize;i.getRowColCoords=function(n){if(n===1)return[];const s=Math.floor(n/7)+2,r=e(n),o=r===145?26:Math.ceil((r-13)/(2*s-2))*2,a=[r-7];for(let l=1;l<s-1;l++)a[l]=a[l-1]-o;return a.push(6),a.reverse()},i.getPositions=function(n){const s=[],r=i.getRowColCoords(n),o=r.length;for(let a=0;a<o;a++)for(let l=0;l<o;l++)a===0&&l===0||a===0&&l===o-1||a===o-1&&l===0||s.push([r[a],r[l]]);return s}}($r)),$r}var zr={},Fc;function R0(){if(Fc)return zr;Fc=1;const i=Xt().getSymbolSize,e=7;return zr.getPositions=function(n){const s=i(n);return[[0,0],[s-e,0],[0,s-e]]},zr}var Ur={},$c;function P0(){return $c||($c=1,function(i){i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};i.isValid=function(s){return s!=null&&s!==""&&!isNaN(s)&&s>=0&&s<=7},i.from=function(s){return i.isValid(s)?parseInt(s,10):void 0},i.getPenaltyN1=function(s){const r=s.size;let o=0,a=0,l=0,c=null,d=null;for(let u=0;u<r;u++){a=l=0,c=d=null;for(let h=0;h<r;h++){let f=s.get(u,h);f===c?a++:(a>=5&&(o+=e.N1+(a-5)),c=f,a=1),f=s.get(h,u),f===d?l++:(l>=5&&(o+=e.N1+(l-5)),d=f,l=1)}a>=5&&(o+=e.N1+(a-5)),l>=5&&(o+=e.N1+(l-5))}return o},i.getPenaltyN2=function(s){const r=s.size;let o=0;for(let a=0;a<r-1;a++)for(let l=0;l<r-1;l++){const c=s.get(a,l)+s.get(a,l+1)+s.get(a+1,l)+s.get(a+1,l+1);(c===4||c===0)&&o++}return o*e.N2},i.getPenaltyN3=function(s){const r=s.size;let o=0,a=0,l=0;for(let c=0;c<r;c++){a=l=0;for(let d=0;d<r;d++)a=a<<1&2047|s.get(c,d),d>=10&&(a===1488||a===93)&&o++,l=l<<1&2047|s.get(d,c),d>=10&&(l===1488||l===93)&&o++}return o*e.N3},i.getPenaltyN4=function(s){let r=0;const o=s.data.length;for(let l=0;l<o;l++)r+=s.data[l];return Math.abs(Math.ceil(r*100/o/5)-10)*e.N4};function t(n,s,r){switch(n){case i.Patterns.PATTERN000:return(s+r)%2===0;case i.Patterns.PATTERN001:return s%2===0;case i.Patterns.PATTERN010:return r%3===0;case i.Patterns.PATTERN011:return(s+r)%3===0;case i.Patterns.PATTERN100:return(Math.floor(s/2)+Math.floor(r/3))%2===0;case i.Patterns.PATTERN101:return s*r%2+s*r%3===0;case i.Patterns.PATTERN110:return(s*r%2+s*r%3)%2===0;case i.Patterns.PATTERN111:return(s*r%3+(s+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}i.applyMask=function(s,r){const o=r.size;for(let a=0;a<o;a++)for(let l=0;l<o;l++)r.isReserved(l,a)||r.xor(l,a,t(s,l,a))},i.getBestMask=function(s,r){const o=Object.keys(i.Patterns).length;let a=0,l=1/0;for(let c=0;c<o;c++){r(c),i.applyMask(c,s);const d=i.getPenaltyN1(s)+i.getPenaltyN2(s)+i.getPenaltyN3(s)+i.getPenaltyN4(s);i.applyMask(c,s),d<l&&(l=d,a=c)}return a}}(Ur)),Ur}var ns={},zc;function uh(){if(zc)return ns;zc=1;const i=ha(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ns.getBlocksCount=function(s,r){switch(r){case i.L:return e[(s-1)*4+0];case i.M:return e[(s-1)*4+1];case i.Q:return e[(s-1)*4+2];case i.H:return e[(s-1)*4+3];default:return}},ns.getTotalCodewordsCount=function(s,r){switch(r){case i.L:return t[(s-1)*4+0];case i.M:return t[(s-1)*4+1];case i.Q:return t[(s-1)*4+2];case i.H:return t[(s-1)*4+3];default:return}},ns}var jr={},Yn={},Uc;function F0(){if(Uc)return Yn;Uc=1;const i=new Uint8Array(512),e=new Uint8Array(256);return function(){let n=1;for(let s=0;s<255;s++)i[s]=n,e[n]=s,n<<=1,n&256&&(n^=285);for(let s=255;s<512;s++)i[s]=i[s-255]}(),Yn.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Yn.exp=function(n){return i[n]},Yn.mul=function(n,s){return n===0||s===0?0:i[e[n]+e[s]]},Yn}var jc;function $0(){return jc||(jc=1,function(i){const e=F0();i.mul=function(n,s){const r=new Uint8Array(n.length+s.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<s.length;a++)r[o+a]^=e.mul(n[o],s[a]);return r},i.mod=function(n,s){let r=new Uint8Array(n);for(;r.length-s.length>=0;){const o=r[0];for(let l=0;l<s.length;l++)r[l]^=e.mul(s[l],o);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},i.generateECPolynomial=function(n){let s=new Uint8Array([1]);for(let r=0;r<n;r++)s=i.mul(s,new Uint8Array([1,e.exp(r)]));return s}}(jr)),jr}var Hr,Hc;function z0(){if(Hc)return Hr;Hc=1;const i=$0();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=i.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const s=new Uint8Array(n.length+this.degree);s.set(n);const r=i.mod(s,this.genPoly),o=this.degree-r.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(r,o),a}return r},Hr=e,Hr}var qr={},Vr={},Kr={},qc;function hh(){return qc||(qc=1,Kr.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Kr}var ot={},Vc;function fh(){if(Vc)return ot;Vc=1;const i="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;ot.KANJI=new RegExp(t,"g"),ot.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),ot.BYTE=new RegExp(n,"g"),ot.NUMERIC=new RegExp(i,"g"),ot.ALPHANUMERIC=new RegExp(e,"g");const s=new RegExp("^"+t+"$"),r=new RegExp("^"+i+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return ot.testKanji=function(l){return s.test(l)},ot.testNumeric=function(l){return r.test(l)},ot.testAlphanumeric=function(l){return o.test(l)},ot}var Kc;function Qt(){return Kc||(Kc=1,function(i){const e=hh(),t=fh();i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(r,o){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?r.ccBits[0]:o<27?r.ccBits[1]:r.ccBits[2]},i.getBestModeForData=function(r){return t.testNumeric(r)?i.NUMERIC:t.testAlphanumeric(r)?i.ALPHANUMERIC:t.testKanji(r)?i.KANJI:i.BYTE},i.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},i.isValid=function(r){return r&&r.bit&&r.ccBits};function n(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+s)}}i.from=function(r,o){if(i.isValid(r))return r;try{return n(r)}catch{return o}}}(Vr)),Vr}var Wc;function U0(){return Wc||(Wc=1,function(i){const e=Xt(),t=uh(),n=ha(),s=Qt(),r=hh(),o=7973,a=e.getBCHDigit(o);function l(h,f,b){for(let g=1;g<=40;g++)if(f<=i.getCapacity(g,b,h))return g}function c(h,f){return s.getCharCountIndicator(h,f)+4}function d(h,f){let b=0;return h.forEach(function(g){const w=c(g.mode,f);b+=w+g.getBitsLength()}),b}function u(h,f){for(let b=1;b<=40;b++)if(d(h,b)<=i.getCapacity(b,f,s.MIXED))return b}i.from=function(f,b){return r.isValid(f)?parseInt(f,10):b},i.getCapacity=function(f,b,g){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof g>"u"&&(g=s.BYTE);const w=e.getSymbolTotalCodewords(f),p=t.getTotalCodewordsCount(f,b),E=(w-p)*8;if(g===s.MIXED)return E;const x=E-c(g,f);switch(g){case s.NUMERIC:return Math.floor(x/10*3);case s.ALPHANUMERIC:return Math.floor(x/11*2);case s.KANJI:return Math.floor(x/13);case s.BYTE:default:return Math.floor(x/8)}},i.getBestVersionForData=function(f,b){let g;const w=n.from(b,n.M);if(Array.isArray(f)){if(f.length>1)return u(f,w);if(f.length===0)return 1;g=f[0]}else g=f;return l(g.mode,g.getLength(),w)},i.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let b=f<<12;for(;e.getBCHDigit(b)-a>=0;)b^=o<<e.getBCHDigit(b)-a;return f<<12|b}}(qr)),qr}var Wr={},Gc;function j0(){if(Gc)return Wr;Gc=1;const i=Xt(),e=1335,t=21522,n=i.getBCHDigit(e);return Wr.getEncodedBits=function(r,o){const a=r.bit<<3|o;let l=a<<10;for(;i.getBCHDigit(l)-n>=0;)l^=e<<i.getBCHDigit(l)-n;return(a<<10|l)^t},Wr}var Gr={},Yr,Yc;function H0(){if(Yc)return Yr;Yc=1;const i=Qt();function e(t){this.mode=i.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let s,r,o;for(s=0;s+3<=this.data.length;s+=3)r=this.data.substr(s,3),o=parseInt(r,10),n.put(o,10);const a=this.data.length-s;a>0&&(r=this.data.substr(s),o=parseInt(r,10),n.put(o,a*3+1))},Yr=e,Yr}var Jr,Jc;function q0(){if(Jc)return Jr;Jc=1;const i=Qt(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=i.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(s){return 11*Math.floor(s/2)+6*(s%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(s){let r;for(r=0;r+2<=this.data.length;r+=2){let o=e.indexOf(this.data[r])*45;o+=e.indexOf(this.data[r+1]),s.put(o,11)}this.data.length%2&&s.put(e.indexOf(this.data[r]),6)},Jr=t,Jr}var Xr,Xc;function V0(){if(Xc)return Xr;Xc=1;const i=Qt();function e(t){this.mode=i.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,s=this.data.length;n<s;n++)t.put(this.data[n],8)},Xr=e,Xr}var Qr,Qc;function K0(){if(Qc)return Qr;Qc=1;const i=Qt(),e=Xt();function t(n){this.mode=i.KANJI,this.data=n}return t.getBitsLength=function(s){return s*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let s;for(s=0;s<this.data.length;s++){let r=e.toSJIS(this.data[s]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[s]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),n.put(r,13)}},Qr=t,Qr}var Zr={exports:{}},Zc;function W0(){return Zc||(Zc=1,function(i){var e={single_source_shortest_paths:function(t,n,s){var r={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var l,c,d,u,h,f,b,g,w;!a.empty();){l=a.pop(),c=l.value,u=l.cost,h=t[c]||{};for(d in h)h.hasOwnProperty(d)&&(f=h[d],b=u+f,g=o[d],w=typeof o[d]>"u",(w||g>b)&&(o[d]=b,a.push(d,b),r[d]=c))}if(typeof s<"u"&&typeof o[s]>"u"){var p=["Could not find a path from ",n," to ",s,"."].join("");throw new Error(p)}return r},extract_shortest_path_from_predecessor_list:function(t,n){for(var s=[],r=n;r;)s.push(r),t[r],r=t[r];return s.reverse(),s},find_path:function(t,n,s){var r=e.single_source_shortest_paths(t,n,s);return e.extract_shortest_path_from_predecessor_list(r,s)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,s={},r;t=t||{};for(r in n)n.hasOwnProperty(r)&&(s[r]=n[r]);return s.queue=[],s.sorter=t.sorter||n.default_sorter,s},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var s={value:t,cost:n};this.queue.push(s),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};i.exports=e}(Zr)),Zr.exports}var ed;function G0(){return ed||(ed=1,function(i){const e=Qt(),t=H0(),n=q0(),s=V0(),r=K0(),o=fh(),a=Xt(),l=W0();function c(p){return unescape(encodeURIComponent(p)).length}function d(p,E,x){const m=[];let _;for(;(_=p.exec(x))!==null;)m.push({data:_[0],index:_.index,mode:E,length:_[0].length});return m}function u(p){const E=d(o.NUMERIC,e.NUMERIC,p),x=d(o.ALPHANUMERIC,e.ALPHANUMERIC,p);let m,_;return a.isKanjiModeEnabled()?(m=d(o.BYTE,e.BYTE,p),_=d(o.KANJI,e.KANJI,p)):(m=d(o.BYTE_KANJI,e.BYTE,p),_=[]),E.concat(x,m,_).sort(function(N,M){return N.index-M.index}).map(function(N){return{data:N.data,mode:N.mode,length:N.length}})}function h(p,E){switch(E){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return r.getBitsLength(p);case e.BYTE:return s.getBitsLength(p)}}function f(p){return p.reduce(function(E,x){const m=E.length-1>=0?E[E.length-1]:null;return m&&m.mode===x.mode?(E[E.length-1].data+=x.data,E):(E.push(x),E)},[])}function b(p){const E=[];for(let x=0;x<p.length;x++){const m=p[x];switch(m.mode){case e.NUMERIC:E.push([m,{data:m.data,mode:e.ALPHANUMERIC,length:m.length},{data:m.data,mode:e.BYTE,length:m.length}]);break;case e.ALPHANUMERIC:E.push([m,{data:m.data,mode:e.BYTE,length:m.length}]);break;case e.KANJI:E.push([m,{data:m.data,mode:e.BYTE,length:c(m.data)}]);break;case e.BYTE:E.push([{data:m.data,mode:e.BYTE,length:c(m.data)}])}}return E}function g(p,E){const x={},m={start:{}};let _=["start"];for(let A=0;A<p.length;A++){const N=p[A],M=[];for(let k=0;k<N.length;k++){const F=N[k],R=""+A+k;M.push(R),x[R]={node:F,lastCount:0},m[R]={};for(let y=0;y<_.length;y++){const T=_[y];x[T]&&x[T].node.mode===F.mode?(m[T][R]=h(x[T].lastCount+F.length,F.mode)-h(x[T].lastCount,F.mode),x[T].lastCount+=F.length):(x[T]&&(x[T].lastCount=F.length),m[T][R]=h(F.length,F.mode)+4+e.getCharCountIndicator(F.mode,E))}}_=M}for(let A=0;A<_.length;A++)m[_[A]].end=0;return{map:m,table:x}}function w(p,E){let x;const m=e.getBestModeForData(p);if(x=e.from(E,m),x!==e.BYTE&&x.bit<m.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(m));switch(x===e.KANJI&&!a.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new r(p);case e.BYTE:return new s(p)}}i.fromArray=function(E){return E.reduce(function(x,m){return typeof m=="string"?x.push(w(m,null)):m.data&&x.push(w(m.data,m.mode)),x},[])},i.fromString=function(E,x){const m=u(E,a.isKanjiModeEnabled()),_=b(m),A=g(_,x),N=l.find_path(A.map,"start","end"),M=[];for(let k=1;k<N.length-1;k++)M.push(A.table[N[k]].node);return i.fromArray(f(M))},i.rawSplit=function(E){return i.fromArray(u(E,a.isKanjiModeEnabled()))}}(Gr)),Gr}var td;function Y0(){if(td)return Br;td=1;const i=Xt(),e=ha(),t=D0(),n=O0(),s=B0(),r=R0(),o=P0(),a=uh(),l=z0(),c=U0(),d=j0(),u=Qt(),h=G0();function f(A,N){const M=A.size,k=r.getPositions(N);for(let F=0;F<k.length;F++){const R=k[F][0],y=k[F][1];for(let T=-1;T<=7;T++)if(!(R+T<=-1||M<=R+T))for(let I=-1;I<=7;I++)y+I<=-1||M<=y+I||(T>=0&&T<=6&&(I===0||I===6)||I>=0&&I<=6&&(T===0||T===6)||T>=2&&T<=4&&I>=2&&I<=4?A.set(R+T,y+I,!0,!0):A.set(R+T,y+I,!1,!0))}}function b(A){const N=A.size;for(let M=8;M<N-8;M++){const k=M%2===0;A.set(M,6,k,!0),A.set(6,M,k,!0)}}function g(A,N){const M=s.getPositions(N);for(let k=0;k<M.length;k++){const F=M[k][0],R=M[k][1];for(let y=-2;y<=2;y++)for(let T=-2;T<=2;T++)y===-2||y===2||T===-2||T===2||y===0&&T===0?A.set(F+y,R+T,!0,!0):A.set(F+y,R+T,!1,!0)}}function w(A,N){const M=A.size,k=c.getEncodedBits(N);let F,R,y;for(let T=0;T<18;T++)F=Math.floor(T/3),R=T%3+M-8-3,y=(k>>T&1)===1,A.set(F,R,y,!0),A.set(R,F,y,!0)}function p(A,N,M){const k=A.size,F=d.getEncodedBits(N,M);let R,y;for(R=0;R<15;R++)y=(F>>R&1)===1,R<6?A.set(R,8,y,!0):R<8?A.set(R+1,8,y,!0):A.set(k-15+R,8,y,!0),R<8?A.set(8,k-R-1,y,!0):R<9?A.set(8,15-R-1+1,y,!0):A.set(8,15-R-1,y,!0);A.set(k-8,8,1,!0)}function E(A,N){const M=A.size;let k=-1,F=M-1,R=7,y=0;for(let T=M-1;T>0;T-=2)for(T===6&&T--;;){for(let I=0;I<2;I++)if(!A.isReserved(F,T-I)){let C=!1;y<N.length&&(C=(N[y]>>>R&1)===1),A.set(F,T-I,C),R--,R===-1&&(y++,R=7)}if(F+=k,F<0||M<=F){F-=k,k=-k;break}}}function x(A,N,M){const k=new t;M.forEach(function(I){k.put(I.mode.bit,4),k.put(I.getLength(),u.getCharCountIndicator(I.mode,A)),I.write(k)});const F=i.getSymbolTotalCodewords(A),R=a.getTotalCodewordsCount(A,N),y=(F-R)*8;for(k.getLengthInBits()+4<=y&&k.put(0,4);k.getLengthInBits()%8!==0;)k.putBit(0);const T=(y-k.getLengthInBits())/8;for(let I=0;I<T;I++)k.put(I%2?17:236,8);return m(k,A,N)}function m(A,N,M){const k=i.getSymbolTotalCodewords(N),F=a.getTotalCodewordsCount(N,M),R=k-F,y=a.getBlocksCount(N,M),T=k%y,I=y-T,C=Math.floor(k/y),U=Math.floor(R/y),B=U+1,$=C-U,j=new l($);let X=0;const K=new Array(y),me=new Array(y);let ee=0;const Ie=new Uint8Array(A.buffer);for(let P=0;P<y;P++){const O=P<I?U:B;K[P]=Ie.slice(X,X+O),me[P]=j.encode(K[P]),X+=O,ee=Math.max(ee,O)}const Y=new Uint8Array(k);let be=0,S,v;for(S=0;S<ee;S++)for(v=0;v<y;v++)S<K[v].length&&(Y[be++]=K[v][S]);for(S=0;S<$;S++)for(v=0;v<y;v++)Y[be++]=me[v][S];return Y}function _(A,N,M,k){let F;if(Array.isArray(A))F=h.fromArray(A);else if(typeof A=="string"){let C=N;if(!C){const U=h.rawSplit(A);C=c.getBestVersionForData(U,M)}F=h.fromString(A,C||40)}else throw new Error("Invalid data");const R=c.getBestVersionForData(F,M);if(!R)throw new Error("The amount of data is too big to be stored in a QR Code");if(!N)N=R;else if(N<R)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+R+`.
`);const y=x(N,M,F),T=i.getSymbolSize(N),I=new n(T);return f(I,N),b(I),g(I,N),p(I,M,0),N>=7&&w(I,N),E(I,y),isNaN(k)&&(k=o.getBestMask(I,p.bind(null,I,M))),o.applyMask(k,I),p(I,M,k),{modules:I,version:N,errorCorrectionLevel:M,maskPattern:k,segments:F}}return Br.create=function(N,M){if(typeof N>"u"||N==="")throw new Error("No input text");let k=e.M,F,R;return typeof M<"u"&&(k=e.from(M.errorCorrectionLevel,e.M),F=c.from(M.version),R=o.from(M.maskPattern),M.toSJISFunc&&i.setToSJISFunction(M.toSJISFunc)),_(N,F,k,R)},Br}var eo={},to={},nd;function ph(){return nd||(nd=1,function(i){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const s=parseInt(n.join(""),16);return{r:s>>24&255,g:s>>16&255,b:s>>8&255,a:s&255,hex:"#"+n.slice(0,6).join("")}}i.getOptions=function(n){n||(n={}),n.color||(n.color={});const s=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:r,scale:r?4:o,margin:s,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},i.getScale=function(n,s){return s.width&&s.width>=n+s.margin*2?s.width/(n+s.margin*2):s.scale},i.getImageWidth=function(n,s){const r=i.getScale(n,s);return Math.floor((n+s.margin*2)*r)},i.qrToImageData=function(n,s,r){const o=s.modules.size,a=s.modules.data,l=i.getScale(o,r),c=Math.floor((o+r.margin*2)*l),d=r.margin*l,u=[r.color.light,r.color.dark];for(let h=0;h<c;h++)for(let f=0;f<c;f++){let b=(h*c+f)*4,g=r.color.light;if(h>=d&&f>=d&&h<c-d&&f<c-d){const w=Math.floor((h-d)/l),p=Math.floor((f-d)/l);g=u[a[w*o+p]?1:0]}n[b++]=g.r,n[b++]=g.g,n[b++]=g.b,n[b]=g.a}}}(to)),to}var id;function J0(){return id||(id=1,function(i){const e=ph();function t(s,r,o){s.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=o,r.width=o,r.style.height=o+"px",r.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}i.render=function(r,o,a){let l=a,c=o;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),o||(c=n()),l=e.getOptions(l);const d=e.getImageWidth(r.modules.size,l),u=c.getContext("2d"),h=u.createImageData(d,d);return e.qrToImageData(h.data,r,l),t(u,c,d),u.putImageData(h,0,0),c},i.renderToDataURL=function(r,o,a){let l=a;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),l||(l={});const c=i.render(r,o,l),d=l.type||"image/png",u=l.rendererOpts||{};return c.toDataURL(d,u.quality)}}(eo)),eo}var no={},sd;function X0(){if(sd)return no;sd=1;const i=ph();function e(s,r){const o=s.a/255,a=r+'="'+s.hex+'"';return o<1?a+" "+r+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(s,r,o){let a=s+r;return typeof o<"u"&&(a+=" "+o),a}function n(s,r,o){let a="",l=0,c=!1,d=0;for(let u=0;u<s.length;u++){const h=Math.floor(u%r),f=Math.floor(u/r);!h&&!c&&(c=!0),s[u]?(d++,u>0&&h>0&&s[u-1]||(a+=c?t("M",h+o,.5+f+o):t("m",l,0),l=0,c=!1),h+1<r&&s[u+1]||(a+=t("h",d),d=0)):l++}return a}return no.render=function(r,o,a){const l=i.getOptions(o),c=r.modules.size,d=r.modules.data,u=c+l.margin*2,h=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",f="<path "+e(l.color.dark,"stroke")+' d="'+n(d,c,l.margin)+'"/>',b='viewBox="0 0 '+u+" "+u+'"',w='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+b+' shape-rendering="crispEdges">'+h+f+`</svg>
`;return typeof a=="function"&&a(null,w),w},no}var rd;function Q0(){if(rd)return cn;rd=1;const i=N0(),e=Y0(),t=J0(),n=X0();function s(r,o,a,l,c){const d=[].slice.call(arguments,1),u=d.length,h=typeof d[u-1]=="function";if(!h&&!i())throw new Error("Callback required as last argument");if(h){if(u<2)throw new Error("Too few arguments provided");u===2?(c=a,a=o,o=l=void 0):u===3&&(o.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=a,a=o,o=void 0))}else{if(u<1)throw new Error("Too few arguments provided");return u===1?(a=o,o=l=void 0):u===2&&!o.getContext&&(l=a,a=o,o=void 0),new Promise(function(f,b){try{const g=e.create(a,l);f(r(g,o,l))}catch(g){b(g)}})}try{const f=e.create(a,l);c(null,r(f,o,l))}catch(f){c(f)}}return cn.create=e.create,cn.toCanvas=s.bind(null,t.render),cn.toDataURL=s.bind(null,t.renderToDataURL),cn.toString=s.bind(null,function(r,o,a){return n.render(r,a)}),cn}var Z0=Q0();const od=fu(Z0);class ev{constructor(){L(this,"id","qr-code-generator");L(this,"name","QR Code Generator");L(this,"description","Generate customizable QR codes for text, URLs, and more");L(this,"seoMetadata",{title:"Free Online QR Code Generator Tool",description:"Create customizable QR codes for URLs, text, and contact information. Download your QR codes in PNG format.",keywords:["qr code generator","qr code creator","qr maker","qr code download","custom qr code"]});L(this,"defaultText","https://example.com");L(this,"lastInput",this.defaultText);L(this,"qrCanvas",null);L(this,"presetButtons",[{name:"URL",content:"https://example.com"},{name:"Email",content:"mailto:example@example.com"},{name:"Phone",content:"tel:+1234567890"},{name:"Wi-Fi",content:"WIFI:T:WPA;S:NetworkName;P:Password;;"},{name:"vCard",content:`BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN:John Doe
TITLE:Developer
TEL:+1234567890
EMAIL:john@example.com
END:VCARD`}])}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="qr-container">
        <div class="input-section">
          <div class="text-input-group">
            <label for="qrContent">Content for QR Code</label>
            <textarea 
              id="qrContent" 
              rows="4" 
              placeholder="Enter text or URL for QR code..."
            >${this.defaultText}</textarea>
          </div>

          <div class="preset-buttons">
            <label>Quick Presets:</label>
            <div class="button-group">
              ${this.presetButtons.map(t=>`
                <button class="preset-button" data-content="${t.content}">
                  ${t.name}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="options-group">
            <div class="option">
              <label for="errorCorrection">Error Correction:</label>
              <select id="errorCorrection">
                <option value="L">Low (7%)</option>
                <option value="M" selected>Medium (15%)</option>
                <option value="Q">Quartile (25%)</option>
                <option value="H">High (30%)</option>
              </select>
            </div>
            
            <div class="option">
              <label for="qrSize">QR Code Size:</label>
              <input 
                type="number" 
                id="qrSize" 
                value="256" 
                min="128" 
                max="1024" 
                step="32"
              >
            </div>

            <div class="option">
              <label for="darkColor">Dark Color:</label>
              <input type="color" id="darkColor" value="#000000">
            </div>

            <div class="option">
              <label for="lightColor">Light Color:</label>
              <input type="color" id="lightColor" value="#ffffff">
            </div>
          </div>
        </div>

        <div class="output-section">
          <div class="qr-preview">
            <canvas id="qrCanvas"></canvas>
          </div>
          <div class="download-options">
            <button id="downloadPng" class="button">Download PNG</button>
            <button id="downloadSvg" class="button">Download SVG</button>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles(),this.generateQRCode())}setupEventListeners(){const e=document.getElementById("qrContent"),t=document.getElementById("errorCorrection"),n=document.getElementById("qrSize"),s=document.getElementById("darkColor"),r=document.getElementById("lightColor"),o=document.getElementById("downloadPng"),a=document.getElementById("downloadSvg");!e||!t||!n||!s||!r||!o||!a||(e.addEventListener("input",()=>{this.lastInput=e.value,this.generateQRCode()}),[t,n,s,r].forEach(l=>{l.addEventListener("change",()=>this.generateQRCode())}),document.querySelectorAll(".preset-button").forEach(l=>{l.addEventListener("click",()=>{const c=l.dataset.content;c&&(e.value=c,this.lastInput=c,this.generateQRCode())})}),o.addEventListener("click",()=>{if(!this.qrCanvas)return;const l=document.createElement("a");l.download="qrcode.png",l.href=this.qrCanvas.toDataURL("image/png"),document.body.appendChild(l),l.click(),document.body.removeChild(l),this.showToast("QR code downloaded as PNG")}),a.addEventListener("click",()=>{this.qrCanvas&&od.toString(this.lastInput,{type:"svg",errorCorrectionLevel:t.value,width:parseInt(n.value),margin:4,color:{dark:s.value,light:r.value}}).then(l=>{const c=new Blob([l],{type:"image/svg+xml"}),d=URL.createObjectURL(c),u=document.createElement("a");u.download="qrcode.svg",u.href=d,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(d),this.showToast("QR code downloaded as SVG")}).catch(()=>this.showToast("Failed to generate SVG"))}))}async generateQRCode(){const e=document.getElementById("qrContent"),t=document.getElementById("errorCorrection"),n=document.getElementById("qrSize"),s=document.getElementById("darkColor"),r=document.getElementById("lightColor"),o=document.getElementById("qrCanvas");if(!(!e||!t||!n||!s||!r||!o))try{this.qrCanvas=o,await od.toCanvas(o,e.value||" ",{width:parseInt(n.value),margin:4,errorCorrectionLevel:t.value,color:{dark:s.value,light:r.value}})}catch(a){this.showToast("Error generating QR code"),console.error("QR code generation error:",a)}}showToast(e){const t=document.querySelector(".qr-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .qr-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      @media (min-width: 768px) {
        .qr-container {
          flex-direction: row;
          align-items: flex-start;
        }

        .input-section,
        .output-section {
          flex: 1;
        }
      }

      .input-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .text-input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .text-input-group textarea {
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 1rem;
        resize: vertical;
        min-height: 100px;
      }

      .preset-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .preset-button {
        padding: 0.5rem 1rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.2s;
      }

      .preset-button:hover {
        border-color: var(--primary);
        color: var(--primary);
      }

      .options-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        padding: 1rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
      }

      .option {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .option select,
      .option input[type="number"] {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 0.9rem;
      }

      .option input[type="color"] {
        width: 100%;
        height: 40px;
        padding: 0;
        border: 1px solid var(--border);
        border-radius: 4px;
        cursor: pointer;
      }

      .output-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        position: sticky;
        top: 1rem;
      }

      .qr-preview {
        padding: 2rem;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #qrCanvas {
        max-width: 100%;
        height: auto;
      }

      .download-options {
        display: flex;
        gap: 1rem;
      }

      .download-options button {
        flex: 1;
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
        .options-group {
          grid-template-columns: 1fr;
        }

        .download-options {
          flex-direction: column;
        }
      }
    `,document.head.appendChild(e)}}class tv{constructor(){L(this,"id","url-tool");L(this,"name","URL Parser");L(this,"description","Parse and analyze URL components and query parameters.");L(this,"seoMetadata",{title:"Free Online URL Parser, Encoder and Decoder Tool",description:"Parse URLs, encode/decode URL components, and analyze query parameters. Supports URLSearchParams and comprehensive URL manipulation.",keywords:["url parser","url encoder","url decoder","query string parser","url analyzer","url components"]});L(this,"defaultUrl","https://user:pass@example.com:8080/path/page?name=value&key=123#section")}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="url-tool-container">
        <div class="input-section">
          <div class="input-group">
            <label for="urlInput">Enter URL:</label>
            <div class="url-input-wrapper">
              <input 
                type="text" 
                id="urlInput" 
                class="url-input" 
                value="${this.defaultUrl}"
                placeholder="Enter a URL to analyze..."
              >
              <button id="parseUrl" class="button">Parse URL</button>
              <button id="clearUrl" class="button">Clear</button>
            </div>
          </div>
          
          <div class="preset-buttons">
            <label>Example URLs:</label>
            <div class="button-group">
              <button class="preset-button" data-url="https://example.com/path?param=value#hash">Simple URL</button>
              <button class="preset-button" data-url="https://user:pass@api.example.com:8080/v1/resource?key=value&page=1">Complex URL</button>
              <button class="preset-button" data-url="https://example.com/path?q=Special Characters!@#$%">Special Characters</button>
            </div>
          </div>
        </div>

        <div class="components-section">
          <h3>URL Components</h3>
          <div class="components-grid" id="urlComponents"></div>
        </div>

        <div class="query-params-section">
          <h3>Query Parameters</h3>
          <div class="query-table-wrapper">
            <table class="query-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Decoded Value</th>
                  <th>Encoded Value</th>
                </tr>
              </thead>
              <tbody id="queryParams"></tbody>
            </table>
          </div>
        </div>

      </div>
    `,this.setupEventListeners(),this.addStyles(),this.parseURL(this.defaultUrl))}parseURL(e){try{const t=new URL(e),n=this.getURLComponents(t);this.displayComponents(n),this.displayQueryParams(t.searchParams)}catch{this.showError("Invalid URL format")}}getURLComponents(e){return{protocol:e.protocol,username:e.username,password:e.password,hostname:e.hostname,port:e.port,pathname:e.pathname,search:e.search,hash:e.hash}}displayComponents(e){const t=document.getElementById("urlComponents");t&&(t.innerHTML="",Object.entries(e).forEach(([n,s])=>{const r=document.createElement("div");r.className="component-item",r.innerHTML=`
        <div class="component-label">${n}</div>
        <div class="component-value" title="${s||"(empty)"}">
          ${s||'<span class="empty-value">(empty)</span>'}
        </div>
      `,t.appendChild(r)}))}displayQueryParams(e){const t=document.getElementById("queryParams");if(t){if(t.innerHTML="",!Array.from(e).length){t.innerHTML=`
        <tr>
          <td colspan="4" class="no-params">No query parameters found</td>
        </tr>
      `;return}e.forEach((n,s)=>{const r=document.createElement("tr");r.innerHTML=`
        <td>${s}</td>
        <td>${n}</td>
        <td>${decodeURIComponent(n)}</td>
        <td>${encodeURIComponent(n)}</td>
      `,t.appendChild(r)})}}encodeText(e,t){try{return t==="uri"?encodeURI(e):encodeURIComponent(e)}catch{return this.showError("Error encoding text"),""}}decodeText(e,t){try{return t==="uri"?decodeURI(e):decodeURIComponent(e)}catch{return this.showError("Error decoding text"),""}}showError(e){const t=document.querySelector(".url-tool-container");if(!t)return;const n=document.createElement("div");n.className="toast error",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},3e3)}setupEventListeners(){const e=document.getElementById("urlInput"),t=document.getElementById("parseUrl"),n=document.getElementById("clearUrl"),s=document.getElementById("encodeInput"),r=document.getElementById("decodeInput"),o=document.getElementById("encodeText"),a=document.getElementById("decodeText"),l=document.getElementById("encodeResult"),c=document.getElementById("decodeResult");t==null||t.addEventListener("click",()=>{e.value.trim()&&this.parseURL(e.value.trim())}),e==null||e.addEventListener("keypress",d=>{d.key==="Enter"&&e.value.trim()&&this.parseURL(e.value.trim())}),n==null||n.addEventListener("click",()=>{e.value="",e.focus()}),document.querySelectorAll(".preset-button").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.url;u&&e&&(e.value=u,this.parseURL(u))})}),o==null||o.addEventListener("click",()=>{var h;if(!(s!=null&&s.value)||!l)return;const d=(h=document.querySelector('input[name="encodeMode"]:checked'))==null?void 0:h.value,u=this.encodeText(s.value,d);l.textContent=u,l.setAttribute("title","Click to copy"),l.classList.add("has-result")}),a==null||a.addEventListener("click",()=>{var h;if(!(r!=null&&r.value)||!c)return;const d=(h=document.querySelector('input[name="encodeMode"]:checked'))==null?void 0:h.value,u=this.decodeText(r.value,d);c.textContent=u,c.setAttribute("title","Click to copy"),c.classList.add("has-result")}),[l,c].forEach(d=>{d==null||d.addEventListener("click",()=>{d.textContent&&navigator.clipboard.writeText(d.textContent).then(()=>this.showCopiedToast()).catch(()=>this.showError("Failed to copy text"))})})}showCopiedToast(){const e=document.querySelector(".url-tool-container");if(!e)return;const t=document.createElement("div");t.className="toast success",t.textContent="Copied to clipboard",e.appendChild(t),t.offsetHeight,t.classList.add("show"),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .url-tool-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
        padding: 1rem;
      }

      .input-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .url-input-wrapper {
        display: flex;
        gap: 0.5rem;
      }

      .url-input {
        flex: 1;
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
      }

      .preset-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .preset-button {
        padding: 0.5rem 1rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text);
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.2s;
      }

      .preset-button:hover {
        border-color: var(--primary);
        color: var(--primary);
      }

      .components-section,
      .query-params-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .components-section h3,
      .query-params-section h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .components-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .component-item {
        padding: 1rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
      }

      .component-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
      }

      .component-value {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        word-break: break-all;
      }

      .empty-value {
        color: var(--text-secondary);
        font-style: italic;
      }

      .query-table-wrapper {
        overflow-x: auto;
      }

      .query-table {
        width: 100%;
border-collapse: collapse;
        margin: 1rem 0;
      }

      .query-table th,
      .query-table td {
        padding: 0.75rem;
        border: 1px solid var(--border);
        text-align: left;
      }

      .query-table th {
        background: var(--sidebar-bg);
        font-weight: 500;
      }

      .query-table td {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        word-break: break-all;
      }

      .no-params {
        text-align: center;
        color: var(--text-secondary);
        font-style: italic;
      }

      .encoder-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .encode-decode-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 1rem;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .encode-input-wrapper,
      .decode-input-wrapper {
        display: flex;
        gap: 0.5rem;
      }

      .encode-input-wrapper input,
      .decode-input-wrapper input {
        flex: 1;
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
      }

      .result-display {
        min-height: 2.5rem;
        padding: 0.75rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        word-break: break-all;
        cursor: pointer;
        transition: all 0.2s;
      }

      .result-display.has-result:hover {
        border-color: var(--primary);
        background: var(--background);
      }

      .encoding-options {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border);
      }

      .encoding-options label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
      }

      .encoding-options input[type="radio"] {
        margin: 0;
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        z-index: 1000;
        color: white;
      }

      .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }

      .toast.error {
        background: #f44336;
      }

      .toast.success {
        background: var(--primary);
      }

      @media (max-width: 768px) {
        .url-input-wrapper,
        .encode-input-wrapper,
        .decode-input-wrapper {
          flex-direction: column;
        }

        .button-group {
          flex-direction: column;
        }

        .encoding-options {
          flex-direction: column;
        }

        .query-table {
          min-width: 600px;
        }
      }
    `,document.head.appendChild(e)}}class nv{constructor(){L(this,"id","coffee-recommender");L(this,"name","Simple Coffee Bean Recommender");L(this,"description","A simple tool to find perfect coffee beans based on your preferences and brewing method");L(this,"seoMetadata",{title:"Coffee Bean Recommender Tool",description:"Get personalized coffee bean recommendations based on your taste preferences and brewing method. Find the perfect coffee for your palate.",keywords:["coffee recommender","coffee beans","coffee guide","coffee finder","coffee recommendations"]});L(this,"brewMethods",[{id:"espresso",name:"Espresso Machine"},{id:"moka",name:"Moka Pot"},{id:"drip",name:"Drip Coffee Maker"},{id:"french",name:"French Press"},{id:"pour",name:"Pour Over"},{id:"aeropress",name:"AeroPress"},{id:"cold",name:"Cold Brew"}]);L(this,"coffeeBeans",[{name:"Ethiopian Yirgacheffe",region:"Ethiopia",description:"Light to medium roast with bright acidity, floral notes, and citrus undertones. Known for its clean, distinctive flavor profile.",roastLevels:["Light","Medium"],flavorProfile:{fruity:4,nutty:2,chocolate:1,caramel:1,floral:5,spicy:1,earthy:2,citrus:4},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress"],characteristics:["Bright","Complex","Floral","Tea-like"]},{name:"Colombian Supremo",region:"Colombia",description:"Medium roast with balanced acidity, caramel sweetness, and subtle nutty notes. Very versatile and approachable.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:4,chocolate:3,caramel:4,floral:2,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["espresso","drip","french","pour","moka","aeropress"],characteristics:["Balanced","Sweet","Clean"]},{name:"Sumatra Mandheling",region:"Indonesia",description:"Dark roast with full body, low acidity, and intense earthy flavors with hints of spice and chocolate.",roastLevels:["Medium-Dark","Dark"],flavorProfile:{fruity:1,nutty:3,chocolate:4,caramel:2,floral:1,spicy:4,earthy:5,citrus:1},beginnerFriendly:!1,brewMethods:["french","espresso","moka"],characteristics:["Full-bodied","Earthy","Complex","Bold"]},{name:"Guatemala Antigua",region:"Guatemala",description:"Medium roast with complex flavor, featuring chocolate notes, subtle spiciness, and light fruit undertones.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:4,caramel:3,floral:2,spicy:3,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["pour","drip","french","espresso"],characteristics:["Complex","Balanced","Smooth"]},{name:"Kenya AA",region:"Kenya",description:"Medium roast with bright acidity, wine-like body, and intense fruit and berry notes.",roastLevels:["Light","Medium"],flavorProfile:{fruity:5,nutty:1,chocolate:2,caramel:2,floral:3,spicy:2,earthy:1,citrus:4},beginnerFriendly:!1,brewMethods:["pour","drip","aeropress"],characteristics:["Complex","Bright","Wine-like","Fruity"]},{name:"Brazil Santos",region:"Brazil",description:"Medium roast with low acidity, nutty flavor, and hints of chocolate and caramel. Very smooth.",roastLevels:["Medium"],flavorProfile:{fruity:1,nutty:5,chocolate:4,caramel:4,floral:1,spicy:1,earthy:2,citrus:1},beginnerFriendly:!0,brewMethods:["espresso","moka","drip","french"],characteristics:["Smooth","Sweet","Low-acid"]},{name:"Costa Rica Tarrazu",region:"Costa Rica",description:"Medium roast with bright acidity, clean flavor, and notes of citrus and honey.",roastLevels:["Light","Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:2,caramel:3,floral:3,spicy:1,earthy:1,citrus:4},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress"],characteristics:["Bright","Clean","Balanced"]},{name:"Indian Malabar",region:"India",description:"Dark roast with full body, very low acidity, and unique spicy, musty notes from monsoon processing.",roastLevels:["Medium-Dark","Dark"],flavorProfile:{fruity:1,nutty:3,chocolate:3,caramel:2,floral:1,spicy:5,earthy:4,citrus:1},beginnerFriendly:!1,brewMethods:["espresso","french","moka"],characteristics:["Full-bodied","Spicy","Unique","Low-acid"]},{name:"Jamaica Blue Mountain",region:"Jamaica",description:"Medium roast with smooth, clean flavor profile, featuring subtle floral notes, mild sweetness, and virtually no bitterness.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:2,caramel:3,floral:4,spicy:1,earthy:1,citrus:3},beginnerFriendly:!0,brewMethods:["drip","pour","french","aeropress"],characteristics:["Smooth","Balanced","Clean","Premium"]},{name:"Panama Geisha",region:"Panama",description:"Light roast with exceptional floral aromatics, jasmine notes, and elegant citrus acidity. Known for its tea-like body and complex flavor profile.",roastLevels:["Light"],flavorProfile:{fruity:4,nutty:1,chocolate:1,caramel:2,floral:5,spicy:1,earthy:1,citrus:4},beginnerFriendly:!1,brewMethods:["pour","drip"],characteristics:["Complex","Delicate","Floral","Premium"]},{name:"Yemen Mocha",region:"Yemen",description:"Light to medium roast with distinctive wine-like acidity, complex spice notes, and dried fruit undertones. Historic variety with unique character.",roastLevels:["Light","Medium"],flavorProfile:{fruity:4,nutty:2,chocolate:3,caramel:2,floral:3,spicy:4,earthy:2,citrus:3},beginnerFriendly:!1,brewMethods:["pour","french","moka"],characteristics:["Complex","Wine-like","Exotic","Historic"]},{name:"Vietnamese Robusta",region:"Vietnam",description:"Dark roast with bold, strong flavor, high caffeine content, and distinctive earthy notes. Perfect for traditional Vietnamese coffee.",roastLevels:["Medium-Dark","Dark"],flavorProfile:{fruity:1,nutty:3,chocolate:4,caramel:2,floral:1,spicy:2,earthy:5,citrus:1},beginnerFriendly:!1,brewMethods:["french","espresso","cold"],characteristics:["Bold","Strong","Rich","High-caffeine"]},{name:"Hawaiian Kona",region:"Hawaii",description:"Medium roast with smooth, mild flavor, medium body, and sweet notes of honey and fruit. Grown in volcanic soil.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:2,caramel:4,floral:2,spicy:1,earthy:2,citrus:3},beginnerFriendly:!0,brewMethods:["drip","pour","aeropress","french"],characteristics:["Smooth","Sweet","Mild","Premium"]},{name:"Mexico Altura",region:"Mexico",description:"Light to medium roast with mild, smooth flavor profile featuring subtle notes of nuts and chocolate with light citrus brightness.",roastLevels:["Light","Medium"],flavorProfile:{fruity:2,nutty:4,chocolate:3,caramel:3,floral:2,spicy:1,earthy:2,citrus:3},beginnerFriendly:!0,brewMethods:["drip","pour","french","aeropress"],characteristics:["Mild","Smooth","Well-balanced"]},{name:"Rwanda Bourbon",region:"Rwanda",description:"Medium roast with bright citrus notes, complex fruit flavors, and distinctive orange blossom aroma.",roastLevels:["Medium"],flavorProfile:{fruity:4,nutty:2,chocolate:2,caramel:2,floral:4,spicy:1,earthy:1,citrus:5},beginnerFriendly:!1,brewMethods:["pour","drip","aeropress"],characteristics:["Bright","Complex","Floral","Citrusy"]},{name:"Sulawesi Toraja",region:"Indonesia",description:"Dark roast with full body, rich earthy tones, and hints of dark chocolate and spices. Less acidic than other Indonesian coffees.",roastLevels:["Medium-Dark","Dark"],flavorProfile:{fruity:1,nutty:3,chocolate:5,caramel:2,floral:1,spicy:4,earthy:4,citrus:1},beginnerFriendly:!1,brewMethods:["french","espresso","moka"],characteristics:["Full-bodied","Rich","Complex","Earthy"]},{name:"El Salvador Pacamara",region:"El Salvador",description:"Medium roast with unique flavor profile combining chocolate sweetness with bright citrus notes and buttery mouthfeel.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:3,chocolate:4,caramel:3,floral:2,spicy:1,earthy:2,citrus:4},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress","espresso"],characteristics:["Unique","Complex","Sweet","Bright"]},{name:"Tanzania Peaberry",region:"Tanzania",description:"Medium roast with bright acidity, medium body, and wine-like complexity with hints of black currant and citrus.",roastLevels:["Medium"],flavorProfile:{fruity:4,nutty:2,chocolate:2,caramel:2,floral:3,spicy:2,earthy:1,citrus:4},beginnerFriendly:!1,brewMethods:["pour","drip","aeropress"],characteristics:["Wine-like","Bright","Complex","Fruity"]},{name:"Burundi Bourbon",region:"Burundi",description:"Light to medium roast with bright acidity, creamy body, and notes of red fruit, citrus, and honey.",roastLevels:["Light","Medium"],flavorProfile:{fruity:4,nutty:2,chocolate:2,caramel:3,floral:3,spicy:1,earthy:1,citrus:4},beginnerFriendly:!1,brewMethods:["pour","drip","aeropress"],characteristics:["Bright","Complex","Creamy","Fruity"]},{name:"Myanmar Jade Shan",region:"Myanmar",description:"Medium roast with unique flavor profile combining chocolate notes with subtle spices and mild fruit undertones.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:4,caramel:3,floral:2,spicy:3,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","french","pour"],characteristics:["Balanced","Unique","Smooth","Exotic"]},{name:"Peru Chanchamayo",region:"Peru",description:"Medium roast with gentle acidity, medium body, and pleasant notes of nuts, flowers, and subtle fruit.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:4,chocolate:2,caramel:3,floral:3,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","pour","french","aeropress"],characteristics:["Gentle","Balanced","Floral","Nutty"]},{name:"Ethiopian Sidamo",region:"Ethiopia",description:"Medium roast with wine-like acidity, full body, and pronounced blueberry and dark fruit notes. A classic Ethiopian coffee.",roastLevels:["Medium","Medium-Dark"],flavorProfile:{fruity:5,nutty:1,chocolate:2,caramel:2,floral:3,spicy:1,earthy:2,citrus:3},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress"],characteristics:["Wine-like","Fruity","Full-bodied","Berry-notes"]},{name:"Ethiopian Guji",region:"Ethiopia",description:"Light to medium roast with bright acidity, delicate floral notes, and distinct bergamot and jasmine flavors.",roastLevels:["Light","Medium"],flavorProfile:{fruity:4,nutty:1,chocolate:1,caramel:2,floral:5,spicy:1,earthy:1,citrus:4},beginnerFriendly:!1,brewMethods:["pour","drip","aeropress"],characteristics:["Floral","Bright","Tea-like","Complex"]},{name:"Ethiopian Harrar",region:"Ethiopia",description:"Medium-dark roast with wild berry notes, wine-like characteristics, and a heavy body. Known for its distinctive fruity edge.",roastLevels:["Medium","Medium-Dark"],flavorProfile:{fruity:5,nutty:2,chocolate:3,caramel:2,floral:2,spicy:2,earthy:3,citrus:2},beginnerFriendly:!1,brewMethods:["french","moka","espresso"],characteristics:["Wild","Berry-notes","Full-bodied","Complex"]},{name:"Brazil Cerrado",region:"Brazil",description:"Medium roast with smooth body, low acidity, and pronounced notes of chocolate and nuts. Very approachable flavor profile.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:5,chocolate:4,caramel:3,floral:1,spicy:1,earthy:2,citrus:1},beginnerFriendly:!0,brewMethods:["espresso","drip","french","moka"],characteristics:["Smooth","Nutty","Chocolatey","Low-acid"]},{name:"Brazil Yellow Bourbon",region:"Brazil",description:"Medium roast with sweet caramel notes, mild citrus acidity, and a creamy body. Well-balanced and versatile.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:3,caramel:4,floral:2,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["espresso","pour","drip","french"],characteristics:["Sweet","Balanced","Creamy","Versatile"]},{name:"Brazil Mogiana",region:"Brazil",description:"Medium to dark roast with full body, rich chocolate notes, and subtle fruit undertones. Perfect for espresso blends.",roastLevels:["Medium","Dark"],flavorProfile:{fruity:2,nutty:4,chocolate:5,caramel:3,floral:1,spicy:1,earthy:3,citrus:1},beginnerFriendly:!0,brewMethods:["espresso","moka","french"],characteristics:["Rich","Chocolatey","Full-bodied","Smooth"]},{name:"Colombia Huila",region:"Colombia",description:"Medium roast with bright acidity, caramel sweetness, and citrus notes. Well-balanced and clean finish.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:3,chocolate:2,caramel:4,floral:2,spicy:1,earthy:1,citrus:3},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress","french"],characteristics:["Bright","Sweet","Clean","Balanced"]},{name:"Colombia Medellin",region:"Colombia",description:"Medium roast with smooth body, balanced acidity, and notes of chocolate and caramel. Very consistent flavor.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:4,caramel:4,floral:1,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","french","espresso","moka"],characteristics:["Smooth","Balanced","Classic","Versatile"]},{name:"Guatemala Huehuetenango",region:"Guatemala",description:"Medium roast with bright acidity, full body, and distinctive notes of apple and citrus with chocolate finish.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:4,caramel:3,floral:2,spicy:2,earthy:2,citrus:3},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress","french"],characteristics:["Complex","Bright","Full-bodied","Balanced"]},{name:"Honduras SHG",region:"Honduras",description:"Medium roast with sweet caramel notes, mild fruit tones, and balanced acidity. Very approachable.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:3,caramel:4,floral:2,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","pour","french","aeropress"],characteristics:["Sweet","Balanced","Clean","Approachable"]},{name:"Costa Rica La Minita",region:"Costa Rica",description:"Medium roast with bright citrus acidity, clean flavor, and hints of honey and chocolate.",roastLevels:["Light","Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:3,caramel:3,floral:2,spicy:1,earthy:1,citrus:4},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress"],characteristics:["Clean","Bright","Sweet","Well-balanced"]},{name:"India Mysore",region:"India",description:"Medium-dark roast with full body, low acidity, and rich spicy notes with subtle earthiness.",roastLevels:["Medium","Dark"],flavorProfile:{fruity:1,nutty:3,chocolate:3,caramel:2,floral:1,spicy:4,earthy:4,citrus:1},beginnerFriendly:!1,brewMethods:["french","moka","espresso"],characteristics:["Full-bodied","Spicy","Complex","Rich"]},{name:"Mexico Chiapas",region:"Mexico",description:"Light to medium roast with light body, mild acidity, and subtle notes of nuts and cocoa.",roastLevels:["Light","Medium"],flavorProfile:{fruity:2,nutty:4,chocolate:3,caramel:2,floral:2,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","pour","french"],characteristics:["Mild","Smooth","Light-bodied","Approachable"]},{name:"Java Estate",region:"Indonesia",description:"Medium-dark roast with heavy body, earthy undertones, and subtle hints of spice and chocolate.",roastLevels:["Medium-Dark","Dark"],flavorProfile:{fruity:1,nutty:2,chocolate:4,caramel:2,floral:1,spicy:3,earthy:4,citrus:1},beginnerFriendly:!1,brewMethods:["french","espresso","moka"],characteristics:["Full-bodied","Earthy","Rich","Bold"]},{name:"Vietnam Arabica",region:"Vietnam",description:"Medium-dark roast with bold flavor, low acidity, and notes of chocolate and nuts. Perfect for Vietnamese-style coffee.",roastLevels:["Medium-Dark","Dark"],flavorProfile:{fruity:1,nutty:4,chocolate:4,caramel:2,floral:1,spicy:2,earthy:3,citrus:1},beginnerFriendly:!0,brewMethods:["drip","french","cold"],characteristics:["Bold","Strong","Low-acid","Rich"]},{name:"El Salvador SHG",region:"El Salvador",description:"Medium roast with balanced flavor, smooth body, and notes of chocolate and honey with mild citrus.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:4,caramel:3,floral:2,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress","french"],characteristics:["Balanced","Smooth","Sweet","Clean"]},{name:"Nicaragua Matagalpa",region:"Nicaragua",description:"Medium roast with balanced acidity, creamy body, and notes of chocolate and caramel with subtle fruit.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:4,caramel:4,floral:1,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","pour","french","espresso"],characteristics:["Creamy","Balanced","Sweet","Versatile"]},{name:"Peru Organic",region:"Peru",description:"Medium roast with mild acidity, medium body, and pleasant notes of nuts and chocolate with subtle floral hints.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:4,chocolate:3,caramel:3,floral:2,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","pour","french","aeropress"],characteristics:["Mild","Balanced","Clean","Approachable"]},{name:"Rwanda Kivu",region:"Rwanda",description:"Medium roast with bright citrus notes, medium body, and pleasant orange blossom and caramel flavors.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:2,caramel:3,floral:3,spicy:1,earthy:1,citrus:4},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress"],characteristics:["Bright","Clean","Floral","Sweet"]},{name:"PNG Highlands",region:"Papua New Guinea",description:"Medium roast with balanced acidity, full body, and complex flavors of dark chocolate and tropical fruit.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:4,caramel:2,floral:2,spicy:2,earthy:3,citrus:3},beginnerFriendly:!1,brewMethods:["french","drip","pour"],characteristics:["Complex","Full-bodied","Exotic","Balanced"]},{name:"Classic Italian Espresso Blend",region:"Multi-region",description:"Dark roast blend typically combining Brazilian and Central American beans, crafted specifically for espresso with rich crema.",roastLevels:["Dark"],flavorProfile:{fruity:1,nutty:3,chocolate:5,caramel:3,floral:1,spicy:2,earthy:3,citrus:1},beginnerFriendly:!0,brewMethods:["espresso","moka"],characteristics:["Rich","Bold","Traditional","Creamy"]},{name:"Breakfast Blend",region:"Multi-region",description:"Light to medium roast blend combining Central and South American beans, creating a bright, clean cup perfect for morning brewing.",roastLevels:["Light","Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:2,caramel:3,floral:2,spicy:1,earthy:1,citrus:3},beginnerFriendly:!0,brewMethods:["drip","pour","french","aeropress"],characteristics:["Bright","Clean","Light","Approachable"]},{name:"Brazil Peaberry",region:"Brazil",description:"Medium roast featuring a sweeter, more concentrated flavor than regular beans, with pronounced notes of chocolate and nuts.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:4,chocolate:4,caramel:3,floral:1,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["espresso","drip","french","pour"],characteristics:["Sweet","Concentrated","Smooth","Rich"]},{name:"Colombia Nariño",region:"Colombia",description:"Medium roast with bright acidity, full body, and complex flavor profile featuring caramel sweetness and citrus notes.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:3,caramel:4,floral:2,spicy:1,earthy:1,citrus:4},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress"],characteristics:["Bright","Complex","Sweet","Balanced"]},{name:"House Blend",region:"Multi-region",description:"Medium roast combining South and Central American beans for a well-balanced, approachable coffee suitable for any time of day.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:3,caramel:3,floral:2,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","pour","french","aeropress","espresso"],characteristics:["Balanced","Versatile","Smooth","Approachable"]},{name:"Ethiopian Limu",region:"Ethiopia",description:"Light to medium roast with sweet floral notes, wine-like qualities, and a clean, bright finish.",roastLevels:["Light","Medium"],flavorProfile:{fruity:4,nutty:1,chocolate:2,caramel:2,floral:4,spicy:1,earthy:1,citrus:3},beginnerFriendly:!1,brewMethods:["pour","drip","aeropress"],characteristics:["Floral","Wine-like","Clean","Bright"]},{name:"French Roast Blend",region:"Multi-region",description:"Dark roast blend with intense, bold flavor, low acidity, and smoky notes. Popular choice for those who enjoy strong coffee.",roastLevels:["Dark"],flavorProfile:{fruity:1,nutty:2,chocolate:4,caramel:2,floral:1,spicy:3,earthy:4,citrus:1},beginnerFriendly:!0,brewMethods:["french","espresso","moka","drip"],characteristics:["Bold","Smoky","Intense","Low-acid"]},{name:"Bali Blue Moon",region:"Indonesia",description:"Medium-dark roast with smooth, clean flavor profile, hints of chocolate, and subtle earthiness. Less intense than other Indonesian coffees.",roastLevels:["Medium-Dark"],flavorProfile:{fruity:2,nutty:3,chocolate:4,caramel:2,floral:1,spicy:2,earthy:3,citrus:1},beginnerFriendly:!0,brewMethods:["french","drip","espresso"],characteristics:["Smooth","Clean","Balanced","Mild"]},{name:"Guatemala Atitlan",region:"Guatemala",description:"Medium roast with full body, complex acidity, and rich flavor with notes of chocolate and subtle spice.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:4,caramel:3,floral:2,spicy:3,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["pour","drip","french","espresso"],characteristics:["Complex","Full-bodied","Rich","Balanced"]},{name:"Colombian Decaf",region:"Colombia",description:"Medium roast decaffeinated coffee maintaining the classic Colombian profile with caramel sweetness and mild fruit notes.",roastLevels:["Medium"],flavorProfile:{fruity:2,nutty:3,chocolate:3,caramel:4,floral:1,spicy:1,earthy:2,citrus:2},beginnerFriendly:!0,brewMethods:["drip","pour","french","espresso"],characteristics:["Smooth","Sweet","Balanced","Decaf"]},{name:"Cold Brew Blend",region:"Multi-region",description:"Medium-dark roast blend specifically designed for cold brewing, featuring smooth, low-acid profile with chocolate and caramel notes.",roastLevels:["Medium-Dark"],flavorProfile:{fruity:2,nutty:3,chocolate:4,caramel:4,floral:1,spicy:1,earthy:2,citrus:1},beginnerFriendly:!0,brewMethods:["cold"],characteristics:["Smooth","Sweet","Low-acid","Rich"]},{name:"Costa Rica Tres Rios",region:"Costa Rica",description:"Medium roast with bright citrus acidity, clean flavor, and pronounced honey sweetness with chocolate undertones.",roastLevels:["Medium"],flavorProfile:{fruity:3,nutty:2,chocolate:3,caramel:3,floral:2,spicy:1,earthy:1,citrus:4},beginnerFriendly:!0,brewMethods:["pour","drip","aeropress"],characteristics:["Bright","Clean","Sweet","Balanced"]}])}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="coffee-recommender-container">
        <div class="preferences-section">
          <h3>Your Coffee Preferences</h3>
          
          <div class="experience-level">
            <label>Experience Level:</label>
            <div class="radio-group">
              <label>
                <input type="radio" name="experience" value="beginner" checked>
                Beginner
              </label>
              <label>
                <input type="radio" name="experience" value="intermediate">
                Intermediate
              </label>
              <label>
                <input type="radio" name="experience" value="advanced">
                Advanced
              </label>
            </div>
          </div>

          <div class="brewing-methods">
            <label>Brewing Methods:</label>
            <div class="checkbox-group">
              ${this.brewMethods.map(t=>`
                <label>
                  <input type="checkbox" name="brewMethod" value="${t.id}">
                  ${t.name}
                </label>
              `).join("")}
            </div>
          </div>

          <div class="flavor-preferences">
            <label>Flavor Preferences:</label>
            <div class="flavor-sliders">
              <div class="flavor-slider">
                <label>Fruity</label>
                <input type="range" min="1" max="5" value="3" class="slider" data-flavor="fruity">
                <span class="slider-value">3</span>
              </div>
              <div class="flavor-slider">
                <label>Nutty</label>
                <input type="range" min="1" max="5" value="3" class="slider" data-flavor="nutty">
                <span class="slider-value">3</span>
              </div>
              <div class="flavor-slider">
                <label>Chocolate</label>
                <input type="range" min="1" max="5" value="3" class="slider" data-flavor="chocolate">
                <span class="slider-value">3</span>
              </div>
              <div class="flavor-slider">
                <label>Caramel</label>
                <input type="range" min="1" max="5" value="3" class="slider" data-flavor="caramel">
                <span class="slider-value">3</span>
              </div>
              <div class="flavor-slider">
                <label>Floral</label>
                <input type="range" min="1" max="5" value="3" class="slider" data-flavor="floral">
                <span class="slider-value">3</span>
              </div>
              <div class="flavor-slider">
                <label>Spicy</label>
                <input type="range" min="1" max="5" value="3" class="slider" data-flavor="spicy">
                <span class="slider-value">3</span>
              </div>
              <div class="flavor-slider">
                <label>Earthy</label>
                <input type="range" min="1" max="5" value="3" class="slider" data-flavor="earthy">
                <span class="slider-value">3</span>
              </div>
              <div class="flavor-slider">
                <label>Citrus</label>
                <input type="range" min="1" max="5" value="3" class="slider" data-flavor="citrus">
                <span class="slider-value">3</span>
              </div>
            </div>
          </div>

          <button id="findCoffee" class="button find-button">Find My Coffee</button>
        </div>

        <div class="recommendations-section" id="recommendationsSection" style="display: none;">
          <h3>Recommended Coffee Beans</h3>
          <div class="recommendations-list" id="recommendationsList"></div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles())}calculateMatch(e,t){let n=0;(t.experience==="beginner"&&e.beginnerFriendly||t.experience==="intermediate"||t.experience==="advanced"&&!e.beginnerFriendly)&&(n+=20),t.brewMethods.some(a=>e.brewMethods.includes(a))&&(n+=30);let r=0,o=0;return Object.entries(t.flavors).forEach(([a,l])=>{const c=e.flavorProfile[a],d=Math.abs(l-c);r+=(5-d)/5,o++}),n+=r/o*50,Math.round(n)}getRecommendations(){var r;const e=(r=document.querySelector('input[name="experience"]:checked'))==null?void 0:r.value,t=Array.from(document.querySelectorAll('input[name="brewMethod"]:checked')).map(o=>o.value),n={};document.querySelectorAll(".flavor-slider input").forEach(o=>{const a=o;n[a.dataset.flavor||""]=parseInt(a.value)});const s=this.coffeeBeans.map(o=>({bean:o,score:this.calculateMatch(o,{experience:e,brewMethods:t,flavors:n})})).filter(o=>o.score>50).sort((o,a)=>a.score-o.score).slice(0,5);this.displayRecommendations(s)}displayRecommendations(e){const t=document.getElementById("recommendationsSection"),n=document.getElementById("recommendationsList");!t||!n||(t.style.display="block",n.innerHTML=e.length?e.map(({bean:s,score:r})=>`
    <div class="recommendation-card">
      <div class="recommendation-header">
        <h4>${s.name}</h4>
        <div class="match-score">
          <span class="match-label">Match:</span>
          <div class="score-bar">
            <div class="score-fill" style="width: ${r}%"></div>
          </div>
          <span class="score-value">${r}%</span>
        </div>
      </div>
      
      <div class="recommendation-details">
        <div class="bean-info">
          <p class="region"><strong>Region:</strong> ${s.region}</p>
          <p class="roast"><strong>Roast Levels:</strong> ${s.roastLevels.join(", ")}</p>
          <p class="description">${s.description}</p>
        </div>

        <div class="flavor-chart">
          ${Object.entries(s.flavorProfile).map(([o,a])=>`
            <div class="flavor-bar">
              <span class="flavor-label">${o}</span>
              <div class="bar-container">
                <div class="bar-fill" style="width: ${a/5*100}%"></div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="characteristics">
          <strong>Key Characteristics:</strong>
          <div class="tags">
            ${s.characteristics.map(o=>`<span class="tag">${o}</span>`).join("")}
          </div>
        </div>

        <div class="brew-methods">
          <strong>Recommended Brewing Methods:</strong>
          <div class="tags">
            ${s.brewMethods.map(o=>{var l;return`<span class="tag">${(l=this.brewMethods.find(c=>c.id===o))==null?void 0:l.name}</span>`}).join("")}
          </div>
        </div>

        <button class="search-button" onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(s.name+" coffee beans")}', '_blank')">
          Find Online
        </button>
      </div>
    </div>
  `).join(""):'<p class="no-matches">No matching coffee beans found. Try adjusting your preferences.</p>')}setupEventListeners(){const e=document.getElementById("findCoffee"),t=document.querySelectorAll(".flavor-slider input");document.querySelectorAll('input[name="brewMethod"]'),e==null||e.addEventListener("click",()=>{if(!document.querySelectorAll('input[name="brewMethod"]:checked').length){this.showToast("Please select at least one brewing method");return}this.getRecommendations()}),t.forEach(n=>{n.addEventListener("input",s=>{const r=s.target,o=r.nextElementSibling;o&&(o.textContent=r.value)})})}showToast(e){const t=document.querySelector(".coffee-recommender-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},3e3)}addStyles(){const e=document.createElement("style");e.textContent=`
    .coffee-recommender-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      padding: 1rem;
    }

    .preferences-section {
      background: var(--background);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.5rem;
    }

    .preferences-section h3,
    .recommendations-section h3 {
      margin: 0 0 1.5rem 0;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .experience-level,
    .brewing-methods,
    .flavor-preferences {
      margin-bottom: 2rem;
    }

    .radio-group,
    .checkbox-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 0.5rem;
    }

    .radio-group label,
    .checkbox-group label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .flavor-sliders {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .flavor-slider {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: var(--border);
      outline: none;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--primary);
      cursor: pointer;
    }

    .slider-value {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }

    .find-button {
      width: 100%;
      margin-top: 1rem;
      padding: 1rem;
      font-size: 1.1rem;
    }

    .recommendations-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .recommendation-card {
      background: var(--background);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.5rem;
    }

    .recommendation-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border);
    }

    .recommendation-header h4 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .match-score {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .score-bar {
      width: 100px;
      height: 8px;
      background: var(--border);
      border-radius: 4px;
      overflow: hidden;
    }

    .score-fill {
      height: 100%;
      background: var(--primary);
      border-radius: 4px;
      transition: width 0.3s;
    }

    .score-value {
      font-weight: 500;
      color: var(--primary);
    }

    .recommendation-details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .bean-info p {
      margin: 0.5rem 0;
    }

    .flavor-chart {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }

    .flavor-bar {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .flavor-label {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }

    .bar-container {
      height: 6px;
      background: var(--border);
      border-radius: 3px;
      overflow: hidden;
    }

    .bar-fill {
      height: 100%;
      background: var(--primary);
      border-radius: 3px;
      transition: width 0.3s;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .tag {
      padding: 0.25rem 0.75rem;
      background: var(--sidebar-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      font-size: 0.9rem;
    }

    .search-button {
      align-self: flex-end;
      padding: 0.5rem 1rem;
      background: var(--primary);
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .search-button:hover {
      opacity: 0.9;
    }

    .no-matches {
      text-align: center;
      color: var(--text-secondary);
      font-style: italic;
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
      transition: transform 0.3s, opacity 0.3s;
    }

    .toast.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }

    @media (max-width: 768px) {
      .recommendation-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .search-button {
        width: 100%;
      }
    }
  `,document.head.appendChild(e)}}class iv{constructor(){L(this,"id","fire-calculator");L(this,"name","FIRE Calculator");L(this,"description","Calculate your path to Financial Independence using the 4% Rule and other FIRE metrics");L(this,"seoMetadata",{title:"FIRE (Financial Independence) Calculator - 4% Rule",description:"Calculate your path to Financial Independence and Early Retirement (FIRE) using the 4% Rule. Plan your savings rate, investment returns, and time to financial freedom.",keywords:["FIRE calculator","financial independence","early retirement","4% rule","retirement calculator","FI calculator","savings rate calculator"]})}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="fire-calculator-container">
        <div class="inputs-section">
          <div class="input-group basic-info">
            <h3>Current Financial Situation</h3>
            <div class="input-row">
              <div class="field-group">
                <label for="currentAge">Current Age</label>
                <input type="number" id="currentAge" min="0" max="100" value="30">
              </div>
              <div class="field-group">
                <label for="currentSavings">Current Savings ($)</label>
                <input type="number" id="currentSavings" min="0" value="100000">
              </div>
            </div>
            <div class="input-row">
              <div class="field-group">
                <label for="annualIncome">Annual Income ($)</label>
                <input type="number" id="annualIncome" min="0" value="75000">
              </div>
              <div class="field-group">
                <label for="annualExpenses">Annual Expenses ($)</label>
                <input type="number" id="annualExpenses" min="0" value="45000">
              </div>
            </div>
          </div>

          <div class="input-group assumptions">
            <h3>Investment Assumptions</h3>
            <div class="input-row">
              <div class="field-group">
                <label for="expectedReturn">Expected Return Rate (%)</label>
                <input type="number" id="expectedReturn" min="0" max="30" step="0.1" value="7">
              </div>
              <div class="field-group">
                <label for="withdrawalRate">Withdrawal Rate (%)</label>
                <input type="number" id="withdrawalRate" min="0" max="10" step="0.1" value="4">
              </div>
            </div>
            <div class="input-row">
              <div class="field-group">
                <label for="inflationRate">Expected Inflation Rate (%)</label>
                <input type="number" id="inflationRate" min="0" max="20" step="0.1" value="2.5">
              </div>
            </div>
          </div>

          <button id="calculateFire" class="button calculate-btn">Calculate FIRE Numbers</button>
        </div>

        <div class="results-section">
          <div class="key-metrics">
            <div class="metric-card">
              <h4>FIRE Number</h4>
              <div id="fireNumber" class="metric-value">$0</div>
              <div class="metric-description">Total savings needed for financial independence</div>
            </div>
            <div class="metric-card">
              <h4>Years to FIRE</h4>
              <div id="yearsToFire" class="metric-value">0</div>
              <div class="metric-description">Estimated years until financial independence</div>
            </div>
            <div class="metric-card">
              <h4>Savings Rate</h4>
              <div id="savingsRate" class="metric-value">0%</div>
              <div class="metric-description">Current savings rate as percentage of income</div>
            </div>
            <div class="metric-card">
              <h4>Safe Withdrawal</h4>
              <div id="safeWithdrawal" class="metric-value">$0/year</div>
              <div class="metric-description">Safe annual withdrawal amount in retirement</div>
            </div>
          </div>
        </div>

        <div class="info-section">
          <div class="info-card">
            <h3>About the 4% Rule</h3>
            <p>The 4% rule suggests that you can safely withdraw 4% of your investment portfolio each year in retirement with a high probability that your portfolio will last at least 30 years. This rule comes from the Trinity Study, which analyzed historical market data.</p>
          </div>
          <div class="info-card">
            <h3>Understanding FIRE Numbers</h3>
            <p>Your FIRE number is typically calculated by multiplying your annual expenses by 25 (equivalent to the inverse of the 4% withdrawal rate). This assumes your investment returns will outpace inflation over the long term.</p>
          </div>
          <div class="info-card">
            <h3>Important Considerations</h3>
            <ul>
              <li>Past performance doesn't guarantee future results</li>
              <li>Consider building in a safety margin</li>
              <li>Account for healthcare costs and other major expenses</li>
              <li>Review and adjust your plan periodically</li>
            </ul>
          </div>
        </div>
      </div>
    `,this.setupCalculator(),this.addStyles())}setupCalculator(){const e=document.getElementById("calculateBtn");["currentAge","currentSavings","annualIncome","annualExpenses","expectedReturn","withdrawalRate","inflationRate"].forEach(n=>{const s=document.getElementById(n);s&&(s.addEventListener("input",()=>this.validateInput(s)),s.addEventListener("change",()=>this.calculateResults()))}),e==null||e.addEventListener("click",()=>this.calculateResults()),this.calculateResults()}validateInput(e){const t=parseFloat(e.value),n=parseFloat(e.min),s=parseFloat(e.max);isNaN(t)?e.value=e.defaultValue:n!==void 0&&t<n?e.value=n.toString():s!==void 0&&t>s&&(e.value=s.toString())}calculateResults(){const e=parseFloat(document.getElementById("currentSavings").value)||0,t=parseFloat(document.getElementById("annualIncome").value)||0,n=parseFloat(document.getElementById("annualExpenses").value)||0,s=parseFloat(document.getElementById("expectedReturn").value)||7,r=parseFloat(document.getElementById("withdrawalRate").value)||4,o=parseFloat(document.getElementById("inflationRate").value)||2.5,a=t-n,l=a/t*100,c=n*100/r,d=(1+s/100)/(1+o/100)-1,u=Math.log(1+(c-e)*d/a)/Math.log(1+d),h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0});document.getElementById("fireNumber").textContent=h.format(c),document.getElementById("yearsToFire").textContent=Math.max(0,Math.round(u*10)/10).toString(),document.getElementById("savingsRate").textContent=Math.round(l)+"%",document.getElementById("safeWithdrawal").textContent=h.format(c*(r/100))+"/year",this.updateChart({currentSavings:e,annualSavings:a,realReturn:d,fireNumber:c,yearsToFire:u})}updateChart(e){const t=document.getElementById("wealthChart");if(!t)return;const n=Math.ceil(e.yearsToFire)+1,s=[];for(let d=0;d<=n;d++){const u=e.currentSavings*Math.pow(1+e.realReturn,d)+e.annualSavings*(Math.pow(1+e.realReturn,d)-1)/e.realReturn;s.push({year:d,savings:u,fireNumber:e.fireNumber})}t.innerHTML="";const r=t.clientWidth,o=300,a={top:20,right:20,bottom:30,left:60},l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("width",r.toString()),l.setAttribute("height",o.toString()),l.setAttribute("class","chart");const c=document.createElementNS("http://www.w3.org/2000/svg","g");c.setAttribute("transform",`translate(${a.left},${a.top})`),l.appendChild(c),t.appendChild(l)}addStyles(){const e=document.createElement("style");e.textContent=`
      .fire-calculator-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
      }

      .inputs-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .input-group {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .input-group h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .input-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .field-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .field-group input {
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--sidebar-bg);
        color: var(--text);
        font-size: 1rem;
      }

      .calculate-btn {
        align-self: flex-end;
        min-width: 200px;
      }

      .key-metrics {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .metric-card {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
      }

      .metric-card h4 {
        margin: 0;
        font-size: 1rem;
        color: var(--text-secondary);
      }

      .metric-value {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--primary);
        margin: 0.5rem 0;
      }

      .metric-description {
        font-size: 0.9rem;
        color: var(--text-secondary);
      }

      .charts-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .chart-container {
        height: 300px;
      }

      .info-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .info-card {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .info-card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .info-card p {
        margin: 0;
        line-height: 1.5;
        color: var(--text-secondary);
      }

      .info-card ul {
        margin: 0;
        padding-left: 1.5rem;
        }

      .info-card ul li {
        margin: 0.5rem 0;
        color: var(--text-secondary);
      }

      .chart {
        width: 100%;
        height: 100%;
      }

      .chart path.line {
        fill: none;
        stroke-width: 2;
      }

      .chart path.savings {
        stroke: var(--primary);
      }

      .chart path.fire-number {
        stroke: #f59e0b;
        stroke-dasharray: 5,5;
      }

      .chart .axis line,
      .chart .axis path {
        stroke: var(--border);
      }

      .chart .axis text {
        fill: var(--text-secondary);
        font-size: 12px;
      }

      @media (max-width: 768px) {
        .input-row {
          grid-template-columns: 1fr;
        }

        .calculate-btn {
          align-self: stretch;
          min-width: auto;
        }

        .key-metrics {
          grid-template-columns: 1fr;
        }
      }
    `,document.head.appendChild(e)}}Qe.register(ci,vt,di,xs,ws,lu,du,hu,ou);class sv{constructor(){L(this,"id","debt-calculator");L(this,"name","Debt Snowball/Avalanche Calculator");L(this,"description","Calculate your debt payoff schedule using either the snowball (smallest balance first) or avalanche (highest interest first) method. <br><br> Everything on this page is NOT financial advice! This can be a good guide but don't organize your life by a random website on the internet.");L(this,"seoMetadata",{title:"Free Debt Snowball and Avalanche Calculator",description:"Plan your debt payoff strategy using popular methods like debt snowball and debt avalanche. Compare different approaches and create a personalized payoff schedule.",keywords:["debt calculator","debt snowball","debt avalanche","debt payoff","loan calculator","debt repayment","financial calculator"]});L(this,"debts",[]);L(this,"paymentSchedule",[]);L(this,"monthlyBudget",0)}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="debt-calculator-container">
        <div class="input-section">
          <div class="monthly-budget-input">
            <label for="monthlyBudget">Total Monthly Payment Budget ($)</label>
            <input type="number" id="monthlyBudget" min="0" step="10" class="number-input" placeholder="Enter your monthly budget">
          </div>

          <div class="debts-section">
            <div class="debts-header">
              <h3>Your Debts</h3>
              <button id="addDebt" class="button">Add Debt</button>
            </div>
            <div id="debtsList" class="debts-list">
              <!-- Debt entries will be added here -->
            </div>
          </div>

          <div class="strategy-section">
            <div class="strategy-header">
              <h3>Payoff Strategy</h3>
              <select id="strategy" class="select-input">
                <option value="snowball">Snowball (Lowest Balance First)</option>
                <option value="avalanche">Avalanche (Highest Interest First)</option>
              </select>
            </div>
            <button id="calculateBtn" class="button calculate-btn">Calculate Payoff Plan</button>
          </div>
        </div>

        <div class="results-section" style="display: none;">
          <div class="results-header">
            <h3>Payoff Summary</h3>
            <div class="summary-stats">
              <div id="summaryStats" class="stats-grid"></div>
            </div>
          </div>

          <div class="payment-schedule">
            <h3>Monthly Payment Schedule</h3>
            <div class="schedule-container">
              <table class="schedule-table">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Payment</th>
                    <th>Interest</th>
                    <th>Principal</th>
                    <th>Remaining</th>
                  </tr>
                </thead>
                <tbody id="scheduleBody"></tbody>
              </table>
            </div>
          </div>

          <div class="chart-section">
            <canvas id="payoffChart"></canvas>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles(),this.addInitialDebt())}addInitialDebt(){document.getElementById("debtsList")&&this.addDebtEntry()}addDebtEntry(){const e=document.getElementById("debtsList");if(!e)return;const t="debt_"+Date.now(),n=document.createElement("div");n.className="debt-entry",n.dataset.debtId=t,n.innerHTML=`
      <div class="debt-inputs">
        <input type="text" class="text-input debt-name" placeholder="Debt name">
        <input type="number" class="number-input debt-balance" placeholder="Balance" min="0" step="100">
        <input type="number" class="number-input debt-rate" placeholder="Interest %" min="0" max="100" step="0.1">
        <input type="number" class="number-input debt-minimum" placeholder="Min. payment" min="0" step="10">
        <button class="remove-debt">×</button>
      </div>
    `,e.appendChild(n);const s=n.querySelector(".remove-debt");s&&s.addEventListener("click",()=>{document.querySelectorAll(".debt-entry").length>1?n.remove():this.showToast("You must have at least one debt entry")})}validateAndGetDebts(){const e=[],t=document.querySelectorAll(".debt-entry");let n=!0;return t.forEach(s=>{const r=s.querySelector(".debt-name"),o=s.querySelector(".debt-balance"),a=s.querySelector(".debt-rate"),l=s.querySelector(".debt-minimum"),c=r.value.trim(),d=parseFloat(o.value),u=parseFloat(a.value),h=parseFloat(l.value);if(!c||isNaN(d)||isNaN(u)||isNaN(h))return n=!1,this.showToast("Please fill in all debt fields with valid numbers"),null;e.push({id:s.dataset.debtId||"debt_"+Date.now(),name:c,balance:d,interestRate:u,minimumPayment:h})}),n?e:null}findSnowballDebtIndex(e){let t=-1,n=Number.POSITIVE_INFINITY,s=-1;return e.forEach((r,o)=>{r.balance>0&&(r.balance<n||r.balance===n&&r.interestRate>s)&&(n=r.balance,s=r.interestRate,t=o)}),t}findAvalancheDebtIndex(e){let t=-1,n=-1,s=Number.POSITIVE_INFINITY;return e.forEach((r,o)=>{r.balance>0&&(r.interestRate>n||r.interestRate===n&&r.balance<s)&&(n=r.interestRate,s=r.balance,t=o)}),t}calculatePayoffSchedule(e,t,n){const s=[],r=e.map(c=>({...c})),o=r.reduce((c,d)=>c+d.minimumPayment,0);if(t<o)return this.showToast("Monthly budget must be at least equal to total minimum payments"),[];let a=1,l=t-o;for(;r.some(c=>c.balance>0);){const c=[];let d=0,u=l;const h=n==="snowball"?this.findSnowballDebtIndex(r):this.findAvalancheDebtIndex(r);if(h===-1)break;const f=r[h];for(const g of r){if(g.balance<=0)continue;const w=g.interestRate/100/12,p=g.balance*w;let E=g.minimumPayment;g===f&&(E+=u);const x=g.balance+p;E>x&&(E=x);const m=E-p;g.balance=Math.max(0,g.balance-m),c.push({debtId:g.id,amount:E,remainingBalance:g.balance,interestPaid:p,principalPaid:m}),d+=E}const b=r.reduce((g,w)=>g+w.balance,0);s.push({month:a,payments:c,totalPaid:d,remainingTotal:b}),a++}return s}displayResults(e,t){const n=document.querySelector(".results-section"),s=document.getElementById("summaryStats"),r=document.getElementById("scheduleBody");if(!n||!s||!r)return;n.style.display="block";const o=e.length,a=e.reduce((d,u)=>d+u.totalPaid,0),l=e.reduce((d,u)=>d+u.payments.reduce((h,f)=>h+f.interestPaid,0),0),c=a-l;t.reduce((d,u)=>d+u.balance,0),s.innerHTML=`
      <div class="stat-item">
        <div class="stat-label">Months to Payoff</div>
        <div class="stat-value">${o}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Total Principal</div>
        <div class="stat-value">$${c.toFixed(2)}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Total Interest</div>
        <div class="stat-value">$${l.toFixed(2)}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Total Paid</div>
        <div class="stat-value">$${a.toFixed(2)}</div>
      </div>
    `,r.innerHTML=e.map(d=>`
      <tr>
        <td>${d.month}</td>
        <td>$${d.totalPaid.toFixed(2)}</td>
        <td>$${d.payments.reduce((u,h)=>u+h.interestPaid,0).toFixed(2)}</td>
        <td>$${d.payments.reduce((u,h)=>u+h.principalPaid,0).toFixed(2)}</td>
        <td>$${d.remainingTotal.toFixed(2)}</td>
      </tr>
    `).join(""),this.createPayoffChart(e)}createPayoffChart(e){const t=document.getElementById("payoffChart");if(!t)return;t.chart&&t.chart.destroy();const n=e.map(o=>o.month),s=e.map(o=>o.remainingTotal),r=e.map(o=>e.slice(0,e.indexOf(o)+1).reduce((a,l)=>a+l.totalPaid,0));t.chart=new Qe(t,{type:"line",data:{labels:n,datasets:[{label:"Remaining Balance",data:s,borderColor:"#f44336",backgroundColor:"#f4433622",fill:!0},{label:"Total Paid",data:r,borderColor:"#4caf50",backgroundColor:"#4caf5022",fill:!0}]},options:{responsive:!0,plugins:{title:{display:!0,text:"Debt Payoff Progress"}},scales:{y:{beginAtZero:!0,ticks:{callback:o=>"$"+o.toLocaleString()}}}}})}setupEventListeners(){const e=document.getElementById("addDebt"),t=document.getElementById("calculateBtn"),n=document.getElementById("monthlyBudget"),s=document.getElementById("strategy");!e||!t||!n||!s||(e.addEventListener("click",()=>this.addDebtEntry()),t.addEventListener("click",()=>{const r=parseFloat(n.value);if(isNaN(r)||r<=0){this.showToast("Please enter a valid monthly budget");return}const o=this.validateAndGetDebts();if(!o)return;const a=this.calculatePayoffSchedule(o,r,s.value);a.length>0&&this.displayResults(a,o)}))}showToast(e){const t=document.querySelector(".debt-calculator-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
    .debt-calculator-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      padding: 1rem;
      position: relative;
    }

    .input-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      background: var(--background);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--border);
    }

    .monthly-budget-input {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .debts-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .debts-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .debts-header h3,
    .strategy-header h3 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .debts-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .debt-entry {
      background: var(--sidebar-bg);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 1rem;
    }

    .debt-inputs {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr auto;
      gap: 1rem;
      align-items: center;
    }

    .text-input,
    .number-input,
    .select-input {
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--background);
      color: var(--text);
      font-size: 0.9rem;
    }

    .remove-debt {
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

    .remove-debt:hover {
      border-color: #f44336;
      color: #f44336;
    }

    .strategy-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .strategy-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .calculate-btn {
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
      margin-bottom: 2rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .stat-item {
      background: var(--sidebar-bg);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 1rem;
    }

    .stat-label {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
    }

    .stat-value {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--primary);
    }

    .payment-schedule {
      margin: 2rem 0;
    }

    .schedule-container {
      overflow-x: auto;
      margin-top: 1rem;
    }

    .schedule-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
    }

    .schedule-table th,
    .schedule-table td {
      padding: 0.75rem;
      text-align: right;
      border: 1px solid var(--border);
    }

    .schedule-table th {
      background: var(--sidebar-bg);
      font-weight: 500;
      text-align: center;
    }

    .schedule-table tr:nth-child(even) {
      background: var(--sidebar-bg);
    }

    .chart-section {
      margin-top: 2rem;
      padding: 1rem;
      background: var(--sidebar-bg);
      border: 1px solid var(--border);
      border-radius: 4px;
    }

    #payoffChart {
      width: 100% !important;
      height: 400px !important;
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
      .debt-inputs {
        grid-template-columns: 1fr;
      }

      .calculate-btn {
        align-self: stretch;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .schedule-table {
        min-width: 600px;
      }
    }
  `,document.head.appendChild(e)}}class rv{constructor(){L(this,"id","meeting-cost-calculator");L(this,"name","Meeting Cost Calculator");L(this,"description","Calculate meeting costs based on attendees salaries, roles, and duration");L(this,"seoMetadata",{title:"Meeting Cost Calculator - Track Meeting Expenses",description:"Calculate the cost of your meetings based on attendees salaries, roles, and duration. Get insights into meeting cost optimization.",keywords:["meeting cost calculator","meeting expense tracker","business cost calculator","meeting optimization","time management tool"]});L(this,"attendees",[]);L(this,"totalCost",0);L(this,"duration",60)}render(){document.title=this.seoMetadata.title;const e=document.getElementById("toolContent");e&&(e.innerHTML=`
      <div class="tool-header">
        <h1 class="tool-title">${this.name}</h1>
        <p class="tool-description">${this.description}</p>
      </div>
      <div class="meeting-calculator-container">
        <div class="attendees-section">
          <h3>Meeting Attendees</h3>
          <div class="attendee-controls">
            <button id="addAttendee" class="button">Add Attendee</button>
            <button id="clearAttendees" class="button">Clear All</button>
          </div>
          <div id="attendeesList" class="attendees-list">
            <!-- Attendees will be added here -->
          </div>
        </div>

        <div class="duration-section">
          <h3>Meeting Duration</h3>
          <div class="duration-inputs">
            <div class="duration-control">
              <label for="durationHours">Hours</label>
              <input 
                type="number" 
                id="durationHours" 
                class="duration-input" 
                value="1" 
                min="0" 
                max="24"
              >
            </div>
            <div class="duration-control">
              <label for="durationMinutes">Minutes</label>
              <input 
                type="number" 
                id="durationMinutes" 
                class="duration-input" 
                value="0" 
                min="0" 
                max="59"
              >
            </div>
          </div>
        </div>

        <div class="cost-section">
          <h3>Meeting Cost</h3>
          <div class="cost-display">
            <div id="costDisplay" class="cost-amount">$0.00</div>
          </div>
        </div>

        <div class="stats-section">
          <h3>Meeting Statistics</h3>
          <div id="meetingStats" class="stats-grid">
            <div class="stat-item">
              <div class="stat-label">Attendees</div>
              <div class="stat-value" id="attendeesCount">0</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Hourly Rate</div>
              <div class="stat-value" id="hourlyRate">$0.00</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Optimal Length</div>
              <div class="stat-value" id="optimalLength">0 min</div>
            </div>
          </div>
        </div>

        <div class="export-section">
          <div class="export-controls">
            <select id="exportFormat" class="select-input">
              <option value="json">Export as JSON</option>
              <option value="csv">Export as CSV</option>
            </select>
            <button id="exportReport" class="button">Export Report</button>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.addStyles())}setupEventListeners(){const e=document.getElementById("addAttendee"),t=document.getElementById("clearAttendees"),n=document.getElementById("exportReport"),s=document.getElementById("durationHours"),r=document.getElementById("durationMinutes");!e||!t||!n||!s||!r||(e.addEventListener("click",()=>this.addAttendeeRow()),t.addEventListener("click",()=>{this.attendees=[];const o=document.getElementById("attendeesList");o&&(o.innerHTML=""),this.updateStats()}),[s,r].forEach(o=>{o.addEventListener("input",()=>{const a=parseInt(s.value)||0,l=parseInt(r.value)||0;this.duration=a*60+l,this.updateStats()})}),n.addEventListener("click",()=>{const o=document.getElementById("exportFormat").value;this.exportReport(o)}))}addAttendeeRow(){const e=document.getElementById("attendeesList");if(!e)return;const t="attendee_"+Date.now(),n=document.createElement("div");n.className="attendee-row",n.dataset.id=t,n.innerHTML=`
      <input 
        type="text" 
        class="role-input" 
        placeholder="Role/Title"
        value=""
      >
      <div class="salary-input-group">
        <span class="currency-symbol">$</span>
        <input 
          type="number" 
          class="salary-input" 
          placeholder="Annual Salary"
          min="0" 
          step="1000"
          value=""
        >
      </div>
      <button class="remove-attendee">×</button>
    `;const s=n.querySelector(".remove-attendee"),r=n.querySelector(".role-input"),o=n.querySelector(".salary-input");s==null||s.addEventListener("click",()=>{this.attendees=this.attendees.filter(a=>a.id!==t),n.remove(),this.updateStats()}),[r,o].forEach(a=>{a&&a.addEventListener("input",()=>{const l=r.value,c=parseFloat(o.value)||0,d=this.attendees.findIndex(u=>u.id===t);d>=0?this.attendees[d]={id:t,role:l,salary:c}:this.attendees.push({id:t,role:l,salary:c}),this.updateStats()})}),e.appendChild(n)}calculateHourlyRate(){return this.attendees.reduce((e,t)=>{const n=t.salary/2080;return e+n},0)}calculateTotalCost(){return this.calculateHourlyRate()*(this.duration/60)}calculateOptimalLength(){return Math.min(15+this.attendees.length*5,60)}updateStats(){const e=this.getStats(),t={attendeesCount:document.getElementById("attendeesCount"),hourlyRate:document.getElementById("hourlyRate"),optimalLength:document.getElementById("optimalLength"),costDisplay:document.getElementById("costDisplay")};t.attendeesCount&&(t.attendeesCount.textContent=e.attendeesCount.toString()),t.hourlyRate&&(t.hourlyRate.textContent=this.formatMoney(e.hourlyRate)),t.optimalLength&&(t.optimalLength.textContent=`${e.optimalLength} min`),t.costDisplay&&(t.costDisplay.textContent=this.formatMoney(this.calculateTotalCost()))}getStats(){return{totalCost:this.calculateTotalCost(),hourlyRate:this.calculateHourlyRate(),optimalLength:this.calculateOptimalLength(),attendeesCount:this.attendees.length,duration:this.duration}}exportReport(e){if(this.attendees.length===0){this.showToast("Please add at least one attendee");return}const t=this.getStats(),n=Math.floor(this.duration/60),s=this.duration%60;if(e==="json"){const r={date:new Date().toLocaleDateString(),duration:{hours:n,minutes:s,total_minutes:this.duration},attendees:this.attendees.map(a=>({role:a.role,salary:this.formatMoney(a.salary)})),stats:{totalCost:this.formatMoney(t.totalCost),hourlyRate:this.formatMoney(t.hourlyRate),optimalLength:`${t.optimalLength} minutes`,attendeesCount:t.attendeesCount}},o=JSON.stringify(r,null,2);this.downloadFile(o,"meeting-report.json","application/json")}else{const r=[["Date",new Date().toLocaleDateString()],["Duration",`${n}h ${s}m (${this.duration} minutes)`],["Total Cost",this.formatMoney(t.totalCost)],["Hourly Rate",this.formatMoney(t.hourlyRate)],["Attendees Count",t.attendeesCount.toString()],["Optimal Length",`${t.optimalLength} minutes`],[],["Attendees"],["Role","Annual Salary"],...this.attendees.map(o=>[o.role,this.formatMoney(o.salary)])].map(o=>o.join(",")).join(`
`);this.downloadFile(r,"meeting-report.csv","text/csv")}this.showToast("Report exported successfully")}downloadFile(e,t,n){const s=new Blob([e],{type:n}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)}formatMoney(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(e)}showToast(e){const t=document.querySelector(".meeting-calculator-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=e,t.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},2e3)}addStyles(){const e=document.createElement("style");e.textContent=`
      .meeting-calculator-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
      }

      .attendees-section,
      .duration-section,
      .cost-section,
      .stats-section {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
      }

      .attendees-section h3,
      .duration-section h3,
      .cost-section h3,
      .stats-section h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .attendee-controls {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .attendees-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .attendee-row {
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 1rem;
        align-items: center;
        padding: 1rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
      }

      .role-input,
            .salary-input {

        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
background: var(--background);
        color: var(--text);
        font-size: 0.9rem;
        width: 100%;
      }

      .salary-input-group {
        position: relative;
        display: flex;
        align-items: center;
      }

      .currency-symbol {
        position: absolute;
        left: 0.5rem;
        color: var(--text-secondary);
      }

      .salary-input {
        padding-left: 1.5rem;
      }

      .remove-attendee {
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

      .remove-attendee:hover {
        border-color: #f44336;
        color: #f44336;
      }

      .duration-inputs {
        display: flex;
        gap: 2rem;
        justify-content: center;
      }

      .duration-control {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
      }

      .duration-input {
        width: 100px;
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        color: var(--text);
        font-size: 1.2rem;
        text-align: center;
      }

      .cost-section {
        text-align: center;
      }

      .cost-amount {
        font-size: 3rem;
        font-weight: 600;
        color: var(--primary);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .stat-item {
        padding: 1rem;
        background: var(--sidebar-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
      }

      .stat-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
      }

      .stat-value {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--primary);
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
      }

      .export-section {
        text-align: right;
        padding: 1rem;
      }

      .export-controls {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        align-items: center;
      }

      .select-input {
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--background);
        color: var(--text);
        font-size: 0.9rem;
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
        .attendee-row {
          grid-template-columns: 1fr;
        }

        .duration-inputs {
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .stats-grid {
          grid-template-columns: 1fr;
        }

        .export-controls {
          flex-direction: column;
        }

        .export-section {
          text-align: center;
        }
      }
    `,document.head.appendChild(e)}}const ei=[new _f,new Cf,new Fb,new iv,new nv,new $b,new Wb,new sy,new w0,new x0,new k0,new E0,new S0,new T0,new _0,new I0,new M0,new A0,new L0,new ev,new tv,new sv,new rv];function ad(i){const e=ei.find(t=>t.id===i);return e&&C0.injectSEOMetadata(e),e}function ov(){const i=document.querySelector(".tools-nav"),e=document.getElementById("toolSearch"),t=document.getElementById("toolContent");function n(l){i&&(i.innerHTML="",l.forEach(c=>{const d=document.createElement("div");d.className="tool-item",d.dataset.toolId=c.id,d.innerHTML=`<div class="tool-name">${c.name}</div>`,d.addEventListener("click",u=>{u.preventDefault(),s(c.id)}),i.appendChild(d)}))}function s(l){var d;const c=ad(l);c&&t&&(window.location.hash=l,document.querySelectorAll(".tool-item").forEach(u=>u.classList.remove("active")),(d=document.querySelector(`[data-tool-id="${l}"]`))==null||d.classList.add("active"),t.innerHTML="",c.render())}e.addEventListener("input",l=>{var h;const c=l.target.value.toLowerCase(),d=ei.filter(f=>f.name.toLowerCase().includes(c)||f.description.toLowerCase().includes(c));n(d);const u=window.location.hash.slice(1);u&&((h=document.querySelector(`[data-tool-id="${u}"]`))==null||h.classList.add("active"))}),window.addEventListener("hashchange",()=>{const l=window.location.hash.slice(1);l?r(l):o()});function r(l){const c=ad(l);c?s(c.id):o()}function o(){ei.length>0&&s(ei[0].id)}n(ei);const a=window.location.hash.slice(1);a?r(a):o()}document.addEventListener("DOMContentLoaded",ov);
