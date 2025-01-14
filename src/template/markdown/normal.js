export default `/*自定义样式，实时生效*/ 
 
/* 全局属性 
* 页边距 padding:30px; 
* 全文字体 font-family:optima-Regular; 
* 英文换行 word-break:break-all; 
*/ 
#nice { 
    line-height: 1.25; 
    font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light; 
    letter-spacing: 2px; 
    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%); 
    background-size: 20px 20px; 
    background-position: center center; 
} 
 
/* 段落，下方未标注标签参数均同此处 
  * 上边距 margin-top:5px; 
  * 下边距 margin-bottom:5px; 
  * 行高 line-height:26px; 
  * 词间距 word-spacing:3px; 
  * 字间距 letter-spacing:3px; 
  * 对齐 text-align:left; 
  * 颜色 color:#3e3e3e; 
  * 字体大小 font-size:16px; 
  * 首行缩进 text-indent:2em; 
  */ 
#nice p { 
    margin: 10px 0px; 
    letter-spacing: 2px; 
    font-size: 14px; 
    word-spacing: 2px; 
} 
 
/* 一级标题 */ 
#nice h1 { 
    font-size: 25px; 
} 
 
/* 一级标题内容 */ 
#nice h1 .content { 
    display: inline-block; 
    font-weight: bold; 
    color: #773098; 
} 
 
/* 一级标题修饰 请参考有实例的主题 */ 
#nice h1:after {} 
 
/* 二级标题 */ 
#nice h2 { 
    text-align: left; 
    margin: 20px 10px 0px 0px; 
} 
 
/* 二级标题内容 */ 
#nice h2 .content { 
    font-size: 18px; 
    font-weight: bold; 
    display: inline-block; 
    padding-left: 10px; 
    border-left: 5px solid #916dd5; 
} 
 
/* 二级标题修饰 请参考有实例的主题 */ 
#nice h2:after {} 
 
/* 三级标题 */ 
#nice h3 { 
    font-size: 16px; 
    font-weight: bold; 
    text-align: center; 
} 
 
/* 三级标题内容 */ 
#nice h3 .content { 
    border-bottom: 2px solid #d89cf6; 
} 
 
/* 三级标题修饰 请参考有实例的主题 */ 
#nice h3:after {} 
 
/* 无序列表整体样式 
  * list-style-type: square|circle|disc; 
  */ 
#nice ul { 
    font-size: 15px; 
    /*神奇逻辑，必须比li section的字体大才会在二级中生效*/ 
    list-style-type: circle; 
} 
 
 
/* 有序列表整体样式 
  * list-style-type: upper-roman|lower-greek|lower-alpha; 
  */ 
#nice ol { 
    font-size: 15px; 
} 
 
/* 列表内容，不要设置li 
  */ 
#nice li section { 
    font-size: 14px; 
    font-weight: normal; 
} 
 
/* 引用 
  * 左边缘颜色 border-left-color:black; 
  * 背景色 background:gray; 
  */ 
#nice .multiquote-1 { 
    border-left-color: #d89cf6; 
    background: #f4eeff; 
} 
 
/* 链接  
  * border-bottom: 1px solid #009688; 
  */ 
#nice a { 
    color: #916dd5; 
    font-weight: bolder; 
    border-bottom: 1px solid #916dd5; 
} 
 
#nice strong::before { 
    content: '「'; 
} 
 
/* 加粗 */ 
#nice strong { 
    color: #916dd5; 
    font-weight: bold; 
} 
 
#nice strong::after { 
    content: '」'; 
} 
 
/* 斜体 */ 
#nice em { 
    font-style: normal; 
    color: #916dd5; 
} 
 
/* 加粗斜体 */ 
#nice em strong { 
    color: #916dd5; 
} 
 
/* 删除线 */ 
#nice del { 
    color: #916dd5; 
} 
 
/* 分隔线 
  * 粗细、样式和颜色 
  */ 
#nice hr { 
    height: 1px; 
    padding: 0; 
    border: none; 
    border-top: 2px solid #d9b8fa; 
} 
 
/* 图片 
  * 宽度 width:80%; 
  * 居中 margin:0 auto; 
  * 居左 margin:0 0; 
  */ 
#nice img { 
    border-radius: 6px; 
    display: block; 
    margin: 20px auto; 
    object-fit: contain; 
    box-shadow: 2px 4px 7px #999; 
} 
 
/* 图片描述文字 */ 
#nice figcaption { 
    display: block; 
    font-size: 13px; 
} 
 
/* 行内代码 */ 
#nice p code, 
#nice li code { 
    color: #916dd5; 
    font-weight: bolder; 
    background: none; 
} 
 
/* 非微信代码块 
  * 代码块不换行 display:-webkit-box !important; 
  * 代码块换行 display:block; 
  */ 
#nice .code-snippet__fix { 
    background: #f7f7f7; 
    border-radius: 2px; 
} 
 
#nice pre code {} 
 
/* 
  * 表格内的单元格 
  * 字体大小 font-size: 16px; 
  * 边框 border: 1px solid #ccc; 
  * 内边距 padding: 5px 10px; 
  */ 
#nice table tr th, 
#nice table tr td { 
    font-size: 14px; 
} 
 
#nice .footnotes { 
    font-size: 14px; 
} 
 
/* 脚注文字 */ 
#nice .footnote-word { 
    font-weight: normal; 
    color: #916dd5; 
    font-weight: bold; 
} 
 
/* 脚注上标 */ 
#nice .footnote-ref { 
    font-weight: normal; 
    color: #916dd5; 
} 
 
/*脚注链接样式*/ 
#nice .footnote-item em { 
    font-size: 14px; 
    color: #916dd5; 
    display: block; 
} 
 
/* "参考资料"四个字  
  * 内容 content: "参考资料"; 
  */ 
#nice .footnotes-sep:before { 
    font-size: 20px; 
} 
 
/* 参考资料编号 */ 
#nice .footnote-num { 
    color: #916dd5; 
} 
 
/* 参考资料文字 */ 
#nice .footnote-item p { 
    color: #916dd5;    font-weight: bold; } 
 
/* 参考资料解释 */ 
#nice .footnote-item p em { 
    font-weight: normal; 
} 
 
/* 行间公式 
  * 最大宽度 max-width: 300% !important; 
  */ 
#nice .block-equation svg {} 
 
/* 行内公式 
  */ 
#nice .inline-equation svg {}`;
