// 1，已知较少数据的匹配
function laiyuan(id) {
    switch (id) {
        case 1:
            return '传感器';
        case 2:
            return '文件鉴定器';
        case 3:
            return '威胁情报';
        case 4:
            return '关联规则';
        case 5:
            return '工业安全引擎';
        default:
            return '未知'
    }
}


// 2，两个按钮的手风琴展开折叠  ？？？？ 资产


// 3，单个按钮做变换操作
$("#zhedie").click(function () {
    if ($("#zhedie_img").attr("src") == "/images/zhedie.png") {
        $("#zhedie_img").attr("src", "/images/zhankai.png")
    } else {
        $("#zhedie_img").attr("src", "/images/zhedie.png")
    }
    $(".zhedie").stop().slideToggle(500);
    if ($(".font_kz").text() == "展开") {
        $("#rest").css("display", "inline");
        $(".font_kz").text("收起");
    } else {
        $("#rest").css("display", "none");
        $(".font_kz").text("展开");
    }
});

// 4，map函数做匹配操作
var map_temp = new Map();
findTypes_origin.forEach(function (v) {
    map_temp.set(v.id, v.name);
});
console.log(map_temp.get(268566528));


// 5，更换key,并且加key和value
r = R.list;
var keyMap = {
    "username": "name",
};
for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    for (var key in obj) {
        var newKey = keyMap[key];
        if (newKey) {
            obj[newKey] = obj[key];
            delete obj[key];
        }
    }
    r[i].value = r[i].name;
}
console.log(r);


// 6， 通知责任人清空，区别于remove  删除本元素
$(".cardContent").empty();    //删除子元素

// 7，数组操作
for (var i = 0; i < selectId.length; i++) {
    duserid.push(selectId[i].id);
}
duserid = duserid.join(',');  //Join方法是将数组转化成字符串形式。

8, //判断含有误报或者不处置
var data = [
    {state: '不知道', id: 1},
    {state: '不知道', id: 1},
    {state: '不知道', id: 1},
    {state: '不知道', id: 1},
];
var result_a = data.some(item => {
    if (item.state == '误报' || item.state == '不处置') {
        return true
    }
})

// 9,  判断全为处置中  则true
let result_b = data.every(item => item.state == '处置中')

// 10,截取n到m位
var startTime = asd_time.substring(0, 19);

// 11， // 正常时间转换为时间戳   需要一定正常时间的格式
var startTime='2019-11-08 00:00:00';
var timestrap_s = (new Date(startTime)).getTime();
console.log(timestrap_s);  157 314 240 0000

// 13  JavaScript为unicode编码转换为中文
findTypes = eval("'" + findTypes + "'");

// 14  使用 JSON.stringify() 方法将 JavaScript 对象/数组转换为json字符串。
let arr = [1, 2, 3];
JSON.stringify(arr);//'[1,2,3]'
typeof JSON.stringify(arr);//string

let string = '[1,2,3]';
console.log(JSON.parse(string))//[1,2,3]
console.log(typeof JSON.parse(string))//object
var pa = JSON.stringify({
    "params": ra
});
console.log(pa);
let arr = [1, 2, 3];
JSON.stringify(arr);//'[1,2,3]'
arr.toString();//1,2,3

// 15 数组操作
var ra = [];
for (var i = 0; i < data_list.length; i++) {
    var obj = {};
    obj.id = data_list[i].id;
    obj.state = new_state;
    ra.push(obj);
}

// 16  eq选择器
var chu_level = $(".z");
//console.log(chu_level);
for (var i = 0; i < chu_level.length; i++) {
    if (chu_level[i].innerText == '低危') {
        chu_level.eq(i).css("background", "#00b3ca").text("低危");
    }
    if (chu_level[i].innerText == '中危') {
        chu_level.eq(i).css("background", "#fec11b").text("中危");
    }
    if (chu_level[i].innerText == '高危') {

        chu_level.eq(i).css("background", "#ff773b").text("高危");
    }
    if (chu_level[i].innerText == '危急') {
        chu_level.eq(i).css("background", "#fa3d4a").text("危急");
    }
}

// 17  jq 易错操作
$("#sms").attr("checked", false);  //赋值
if ($("#email").prop("checked") == false && $("#sms").prop("checked") == false) {
}  //判断

// 18  split 和Join方法都识别空格位，Split方法是将字符串转成数组形式，Join方法是将数组转化成字符串形式。
const hjArr = ['hj', 'ai', 'qd']
//没有分隔符
const str5 = hjArr.join()
//字符串按 &隔开
const str6 = hjArr.join('&')
//打印 'hj,ai,qd'
console.log(str5)
//打印 'hj&ai&qd'
console.log(str6)


var abc = d.duserid;  //20,3 string
abc = abc.split(','); //[20,3]
abc = abc.map(Number);  // 数组里的字符串转换成数字

// 数组里的字符串转换成数字或者把数字转换成字符串
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String);  //结果： ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var a = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
a.map(Number);  //结果：[1, 2, 3, 4, 5, 6, 7, 8, 9]

// 19  对象某key的value和某数组对象的ID的valau相等，就给该数组对象加一个key，并把该数组对象发到新的数组里面
for (var s in data_select) {
    for (var x in r) {
        if (data_select[s] === r[x].id) {
            r[x].selected = "selected";
            data_vice.push(r[x]);
        }
    }
}

// 20
// 获取实时时间
function getNowTime() {
    var myDate = new Date();
    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours();       //获取当前小时数(0-23)
    var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    if (m < 10) m = '0' + m;
    var s = myDate.getSeconds();
    if (s < 10) s = '0' + s;
    var nowhour = h + ':' + m + ":" + s;
    $(".time").text(year + "年" + month + "月" + date + "日" + nowhour)
}
getNowTime();
window.setInterval(getNowTime, 1000);

// 21 获取近30天
var thrityMonth = [];
for (var i = 0; i < 30; i++) {
    thrityMonth.unshift(new Date(new Date()
        .setDate(new Date().getDate() - i)).toLocaleDateString())
}

// 22  正则表达式的验证写法格式
var yanma_reg = /^(254|252|248|240|224|192|128|0)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(254|252|248|240|224|192|128|0))$/;//掩码
var mask = $(".wgym").val();//mask
if (yanma_reg.test(mask)) {

}



//24
var host = window.location.host;  //获取当前域名

//25
var showColor = -1;   //做标记索引，与前一个索引比较
// 取随机颜色值
var colors = ["#c39a87", "#2199a3", "#a49f47", "#f44336b5", "#36aa80"];

// 取随机颜色函数
function setColor() {
    var m = Math.floor(Math.random() * colors.length);
    if (showColor == m) {
        setColor();
    } else {
        showColor = m;
        console.log(colors[m]);
    }
}

   //26 时间戳（13位）转正常时间   157 079 185 6000》2019-10-11 19:05:02
//参数时间搓必须为number 和13位()  前端、java默认13位，安卓、ios默认10位，安卓或ios*1000就可以了
function formatDateTime(inputTime) {
	let date = new Date(inputTime*1);    //*或者/
    //console.log(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};
console.log(formatDateTime((1470781856000)));
//27  创建元素 的绑定事件 和 选择器gt的使用
$("#socket").on("mouseenter", "tr", function () {
    $(this).addClass("hold")
});
$(".to__led-number :gt(1)").hide();

//28 定时器的区别
window.setTimeout(yincan, 5000);   //只执行一次，5s后执行  setTimeout

var timeaddfun = window.setInterval(time_add, 1000);  //只执行无数次，没1s执行一次  setInterval

window.setTimeout(function () {
    clearInterval(timeaddfun);
}, 17000);

//29
$('body').mousemove(function (e) {
    e = e || window.event;
    xx = e.pageX || e.clientX + document.body.scroolLeft;
    // yy = e.pageY || e.clientY + document.body.scrollTop;
    yy = e.clientY;   //设置或获取鼠标指针位置相对于当前窗口的 y 坐标，其中客户区域不包括窗口自身的控件和滚动条。 （可见区域）
    // console.log("y"+yy);
    if (yy < 5) {
        $(".tou").stop().animate({marginTop: '0'}, 500, "linear");
    }
    if (yy > 200) {
        $(".tou").stop().animate({marginTop: '-60px'}, 500, "linear");
    }
});

//30 // 随机数
function randomData() {
    return Math.round(Math.random() * 1000);
}

//31
function gji_add() {
    var s = Number($("#gji").text()) + 10;
    $("#gji").text(s);
    // console.log( s)
}

window.setInterval(gji_add, 2000);

//32
resultData = result.data;
console.log(resultData);
for (var x in resultData) {
    htmls += '<option value = "' + resultData[x].id + '">' + resultData[x].name + '</option>'
}
$("#proNos").html(htmls);

//33  iframe的写法格式
<iframe src="http://192.168.111.13:8082/zabbix/index.php" id="iframe" name="tag" width="100%"
        height="100%" scrolling="yes" frameBorder="0">
</iframe>

//34 获取对象的key数组和value数组    //删除对象某属性

delete form_checkbox.system_users;  //删除对象某属性
console.log(form_checkbox);
var actions_value = [];
var actions_key = [];
//for (let i in form_checkbox) {
//    actions_value.push(form_checkbox[i]); //value
//    actions_key.push(i); //key
//}
var actions_value=Object.values(R.data)  //value
var actions_key = Object.keys(R.data);  //key
//35  ？？
local_assetlist.unshift(data);
for (let i = 0; i < local_assetlist.length; i++) {
    if (local_assetlist[i].hostname === data.hostname) {
        local_assetlist.splice(i, 1)
    }
}

//36
//a['111']和a[111]两种写法都是一样的，没有什么区别，此用法与数组用下标访问是相同的。
//请注意，如果使用方括号运算符，键名不为数值的时候，必须放在引号里面，否则会被当作变量处理。但是，数字键可以不加引号，因为会被当作字符串处理。


//37  axios 异步请求
async function getToken() {
    await axios({})
}

)

//38
// 置灰操作
$(".zhihui").each(function () {
    if ($(this).attr('href') == "javascript:void(0);") {
        $(this).css('cursor', ' not-allowed');
    }
});

//39  树数据 pid转children
var data = [
    {
        checked: false,
        id: 1,
        name: "ALL",
        open: true
    },
    {
        checked: false,
        id: 97,
        name: "b",
        open: true,
        pid: 1
    },
    {
        checked: false,
        id: 98,
        name: "qq",
        open: true,
        pid: 1
    },
    {
        checked: false,
        id: 100,
        name: "大师傅士大夫",
        open: true,
        pid: 98
    },
    {
        checked: false,
        id: 101,
        name: "321",
        open: true,
        pid: 100
    }
]

function getChildren(pid, data) {
    let leafs = [];
    data.forEach((item) => {
        if (item.pid == pid) {
            let leaf = {title: item.name, id: item.id, pid: item.pid, children: [], spread: true};
            leaf.children = getChildren(leaf.id, data);
            leafs.push(leaf);
        }
    })
    return leafs;
}

let treedata = [];
data.forEach((item) => {
    if (item.pid == null) {
        let leafs = getChildren(item.id, data);
        treedata.push({title: item.name, id: item.id, children: leafs, spread: true});

        return false;
    }
});
console.log(treedata);

//40
//$(this)下选择class  ==》》$(this).find('div')

//41  将UTC时间(2018-07-03T10:18:58.000Z)转换为北京时间
//utc时间肯定是字符串形式
function formatUTC(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0, T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
    var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06
    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp / 1000;
    // 增加8个小时，北京时间比utc时间多八个时区
    var timestamp = timestamp + 8 * 60 * 60;
    // 时间戳转为时间
    var beijing_datetime = new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    return beijing_datetime;
}

console.log(formatUTC('2018-07-03T10:18:58.000Z')) >>> >> 2018 / 7 / 3下午6:18:58


//42  当内容container足够多、可以撑开一屏的时候，底部footer紧跟在内容container后边；而内容container不够多、不足以撑开一屏到浏览器底部，底部footer仍然在浏览器底部。

< body >
< div
class
= "container" > container < /div>
<div class="footer">footer</div>
< /body>


html, body
{
    height: 100 %;
    margin: 0;
}
.
container
{
    //viewpoint height，视窗高度，1vh=视窗高度的1%
    min - height
:
    calc(100
    vh - 50
    px
)
    ;
}
.
footer
{
    height: 50
    px;
}


//43 css控制文字模糊
*
{
    color: transparent;
    text - shadow
:
    #111
    0
    0
    5
    px;
}

//44 js通过value找到key; js通过对象的属性值找到属性名；

function findKey(obj, value, compare = (a, b) => a === b) {

    return Object.keys(obj).find(k => compare(obj[k], value))
}

var nameMap = {

    'Afghanistan': '阿富汗',

    'Angola': '安哥拉',
    'Albania': '阿尔巴尼亚'，
       'Argentina'
:
'阿根廷',
    'Armenia'
:
'亚美尼亚',
}

findKey(nameMap, '阿富汗')；  //返回结果为：Afghanistan

//45  js交换对象的key和value
var geoCoordMap = [];
for (let k in geoCoordMap) {
    let value = geoCoordMap[k]; //将原来的value赋值给一个变量
    geoCoordMap[value] = k; // 为cluster_info赋新key，不能直接使用cluster_info = {cluster_info[k] : k},会报语法错误
    delete geoCoordMap[k]; // 删除原来的属性
}
console.log(geoCoordMap);

//46 push()和concat()区别
1，push()
是在原数组的基础上修改的，执行push()
方法后原数组的值也会变；concat()
是先把原数组复制到一个新的数组，然后在新数组上进行操作，所以不会改变原数组的值。

2，如果参数不是数组，不管参数个数有多少个，push()
和concat()
都会直接把参数添加到数组后；如果参数是一个数组，push()
就会直接把数组添加到原数组后，而concat()
会把数组里的值取出来添加到原数组后。
array.push([6, 7]);    //参数为数组
console.log(array);   //[1, 2, 3, 4, 5, 6, Array(2)]

var array2 = array.concat([6, 7]);    //参数为数组
console.log(array);    //[1, 2, 3, 4, 5]
console.log(array2);   //[1, 2, 3, 4, 5, 6, 7]


//47   参考链接https://blog.csdn.net/u013253924/article/details/81772820
//json对象传参数
axios({
    method: "post",
    url: "",
    // headers:{},
    data: {
        username: "admin",
        password: "admin"
    }
}).then((res) => {
    console.log(res);
    token = res.data.token;
}).catch((err) => {
    console.log(err)
});

//form data传参数
import Qs from 'qs'

axios({
    method: "post",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {      //在请求之前对data传参进行格式转换
        data = Qs.stringify(data)
        return data
    }],
    url: "",
    data: {
        username: "admin",
        password: "admin"
    }
}).then((res) => {
    console.log(res);
    token = res.data.token;
}).catch((err) => {
    console.log(err)
});


//48  解决echarts 图标隐藏显示的问题（100px）.
onclick: function () {
    $("#ChinaMap").hide();
    $("#earth").show();
    earth.resize();//关键步骤
    earth.setOption(option, true);
}

//49 字符串按照某个字符截取前面部分和后面部分
String
b = "8618523825157-10655599";
String
b1 = b.substring(0, b.indexOf("-"));
String
b2 = b.substring(b.indexOf("-") + 1);
System.out.println(b1);//8618523825157
System.out.println(b2);//10655599
//50 截取两个字符串之间的内容
// 、js截取两个字符串之间的内容：
var str = "aaabbbcccdddeeefff";
str = str.match(/aaa(\S*)fff/)[1];
alert(str);//结果bbbcccdddeee
// 、js截取某个字符串前面的内容：
var str = "aaabbbcccdddeeefff";
tr = str.match(/(\S*)fff/)[1];
alert(str);//结果aaabbbcccddd
// 、js截取某个字符串后面的内容：
var str = "aaabbbcccdddeeefff";
str = str.match(/aaa(\S*)/)[1];
alert(str);//结果bbbcccdddeeefff




//52 找到指定项的索引
let fge = arr.indexOf('00');  //

//53   // JS格式化Thu May 12 2017 08:00:00 GMT+0800 (中国标准时间)转换  "2019-11-12 05:00:00" 配合checkTime函数
//时间参数肯定是字符串形式
   function data_value(date) {
    var date = new Date(date);
    return  date_value=date.getFullYear() + '-' + checkTime(date.getMonth() + 1) + '-' + checkTime(date.getDate()) + ' ' + checkTime(date.getHours()) + ':' + checkTime(date.getMinutes()) + ':' + checkTime(date.getSeconds());
   }
   function checkTime(i){
       if (i<10){
           i="0" + i
       }
       return i;
    }
    console.log(data_value('Thu May 12 2017 08:00:00 GMT+0800 (中国标准时间)'));
   
   
   //运用一下
   let result=['Thu May 12 2017 08:00:00 GMT+0800 (中国标准时间)'];
   let zx = [];
	for (let i = 0; i < result.length; i++) {
        zx[i]=data_value(result[i])
	}
    console.log(zx);

//54循环对象
 var scaleData = [];
                        for (let i in R.data) {
                            let o = {name: i, value: R.data[i]};
                            scaleData.push(o);
                        }
						
		//55 获取近4天的24小时时间  数组96个元素  96=24*4
   var thrityMonth = [];
        for(var i = 0;i<4;i++){
            thrityMonth.unshift(new Date(new Date()
                .setDate(new Date().getDate()-i)).toLocaleDateString())
        }
        // console.log(thrityMonth);
        for(var i=thrityMonth.length;i>=1;i--){
            thrityMonth.splice(i, 0, thrityMonth[i-1]+" 00:00", thrityMonth[i-1]+" 01:00",thrityMonth[i-1]+" 02:00",thrityMonth[i-1]+" 03:00",thrityMonth[i-1]+" 04:00",thrityMonth[i-1]+" 05:00",thrityMonth[i-1]+" 06:00",thrityMonth[i-1]+" 07:00",thrityMonth[i-1]+" 08:00",thrityMonth[i-1]+" 09:00",thrityMonth[i-1]+" 10:00",thrityMonth[i-1]+" 11:00",thrityMonth[i-1]+" 12:00",thrityMonth[i-1]+" 13:00",thrityMonth[i-1]+" 14:00",thrityMonth[i-1]+" 15:00",thrityMonth[i-1]+" 16:00",thrityMonth[i-1]+" 17:00",thrityMonth[i-1]+" 18:00",thrityMonth[i-1]+" 19:00",thrityMonth[i-1]+" 20:00",thrityMonth[i-1]+" 21:00",thrityMonth[i-1]+" 22:00",thrityMonth[i-1]+" 23:00",thrityMonth[i-1]+" 24:00");
        }
        for(var i=0;i<thrityMonth.length;i++){
            if(thrityMonth[i].length<11){
                thrityMonth.splice(i, 1);
            }
        }
        // console.log(thrityMonth);		
//55  echarts 鼠标进入和离开.  mouseover mouseout
 couputer.on('mouseover', function (params){});
 couputer.on('mouseout', function (params){});
 
 //56获取当前的时间戳
   let now=Date.parse(new Date());
   
 //57 字符串转对象
  let df='{null:0,"zxc":1}'; //是字符串
  df=df.replace(/null/g,'"null"'); // 这样只能替换所有/xx/g  字符串中的key都要打引号才能转     区别df=df.replace("null",'"null"');  这样只能替换第一个
  df=JSON.parse(df); //字符串转对象
  console.log(df);  //是对象
  
  //58 字符串转数字 强制转换
   var s =  Number($("#shebeishu").text())+1;
   
  //59 定时器循坏增加
   function show(){
            function links_data(){
                for (let i=0;i<links_dat.length;i++){
                    (links_dat[i].con)=(links_dat[i].con)+5
                }
                return links_dat
            }
            show1(links_data());
        }
      window.setInterval(show, 5000);
	  
	  
	//60 // 遍历一个对象组合成一个新对象数组
    let colums = [];
    for (let key in obj) {
        colums.push({title:key,dataIndex:obj[key],align:'center'})
    }
    console.log(colums);
	
	
	
//	61、for 循环

let arr = [1,2,3];
for (let i=0; i<arr.length; i++){
 console.log(i,arr[i])
}
// 0 1
// 1 2
// 2 3
//for 循环是 Js 中最常用的一个循环工具，经常用于数组的循环遍历。

//62、for in 循环

let obj = {name:'zhou',age:'**'}
for(let i in obj){
 console.log(i,obj[i])
}
// name zhou
// age **
//for in 循环主要用于遍历普通对象，i 代表对象的 key 值，obj[i] 代表对应的 value,当用它来遍历数组时候，多数情况下也能达到同样的效果，但是你不要这么做，这是有风险的，因为 i 输出为字符串形式，而不是数组需要的数字下标，这意味着在某些情况下，会发生字符串运算，导致数据错误，比如：'52'+1 = '521' 而不是我们需要的 53。

//另外 for in 循环的时候，不仅遍历自身的属性，还会找到 prototype 上去，所以最好在循环体内加一个判断，就用 obj[i].hasOwnProperty(i)，这样就避免遍历出太多不需要的属性。

//63、while 循环

//同样的遍历 cars 数组，先用 for 循环方法
let cars=["BMW","Volvo","Saab","Ford"];
let i=0;
for (;cars[i];)
{
console.log(cars[i])
i++;
};
// BMW
// Volvo
// Saab
// Ford

//然后是 while 循环方法
cars=["BMW","Volvo","Saab","Ford"];
var i=0;
while (cars[i])
{
console.log(cars[i] + "<br>")
i++;
};
//我们发现，它们可以实现同样的效果，事实上它们底层的处理是一样的，不过 for 循环可以把定义、条件判断、自增自减操作放到一个条件里执行，代码看起来方便一些，仅此而已。

//64、do while 循环

let i = 3;
do{
 console.log(i)
 i--;
}
while(i>0)
// 3
// 2
// 1
//do while 循环是 while 循环的一个变体，它首先执行一次操作，然后才进行条件判断，是 true 的话再继续执行操作，是 false 的话循环结束。

//65、Array forEach 循环

let arr = [1,2,3];
arr.forEach(function(i,index){
 console.log(i,index)
})
// 1 0
// 2 1
// 3 2

//forEach循环，循环数组中每一个元素并采取操作， 没有返回值， 可以不用知道数组长度,他有三个参数，只有第一个是必需的，代表当前下标下的 value。

//另外请注意，forEach 循环在所有元素调用完毕之前是不能停止的，它没有 break 语句，如果你必须要停止，可以尝试 try catch 语句，就是在要强制退出的时候，抛出一个 error 给 catch 捕捉到，然后在 catch 里面 return，这样就能中止循环了，如果你经常用这个方法，最好自定义一个这样的 forEach 函数在你的库里。

//66、Array map()方法

let arr = [1,2,3];
let tt = arr.map(function(i){
 console.log(i)
 return i*2;
})
// [2,4,6]
//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
//注意：map 和 forEach 方法都是只能用来遍历数组，不能用来遍历普通对象。

//67、Array filter() 方法

let arr = [1,2,3];
let tt = arr.filter(function(i){
 return i>1;
})
// [2,3]
//filter 方法是 Array 对象内置方法，它会返回通过过滤的元素，不改变原来的数组。

//68、Array some() 方法

let arr = [1,2,3];
let tt = arr.some(function(i){
 return i>1;
})
// true
//some() 方法用于检测数组中的元素是否满足指定条件（函数提供）,返回 boolean 值，不改变原数组。

//69、Array every() 方法

let arr = [1,2,3];
let tt = arr.some(function(i){
 return i>1;
})
// 检测数组中元素是否都大于1
// false

//every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供），返回 boolean 值，不改变原数组。

//70、Array reduce()方法

let arr = [1,2,3];
let ad = arr.reduce(function(i,j){
 return i+j;
})
// 6
//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

//71、Array reduceRight()方法

let arr = [1,2,3];
let ad = arr.reduceRight(function(i,j){
 return i+j;
})
// 6
//reduceRight()方法,和 reduce() 功能是一样的，它是从数组的末尾处向前开始计算。

//72、for of 循环

let arr = ['name','age'];
for(let i of arr){
 console.log(i)
}
// name
// age
//for of 循环是 Es6 中新增的语句，用来替代 for in 和 forEach，它允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代(Iterable data)的数据结构,注意它的兼容性。



//73  2019121510>"2019/12/15 10:00" 指定位置插入字符串
   let arr_hour=Object.keys(R);
            let pattern = /(\d{4})(\d{2})(\d{2})(\d{2})/;
            for (let i=0;i<arr_hour.length;i++){
                arr_hour[i]= arr_hour[i]+':00';
                arr_hour[i]= arr_hour[i].replace(pattern, '$1/$2/$3 $4');
            }
            //console.log(arr_hour)  2019121510>"2019/12/15 10:00"
			
			
//74  把所有的a替换为b（所有的空格替换为不空格）
 dates1=dates1.replace(new RegExp(" ","gm"),"");
 
 
 //75     //离开页面的事件  (关闭，跳转)
        window.onbeforeunload=function(e){
            var e = window.event||e;
            // localStorage.setItem("si",'');
            // localStorage.setItem("di",'');
        }
		
		
//76 // 数据分组  每组多少个，被分组的数据  （一个数组arr中有60个元素，现在要分成每个数组20个）》》》spArray（20，arr）=[Array(20), Array(20), Array(20)]=[[], [], []]
    spArray = (N,Q)=> {
        let R = [],F;
        for (F = 0;F < Q.length;) {
            R.push(Q.slice(F,F += N))
        }
        return R
    }
 let series_data=spArray(48,series_data1);
 console.log(series_data);
 
 
 //77// 获取两个数之间的随机整数
    function getRandomNumberByRange(start, end) {
        return Math.floor(Math.random() * (end - start) + start)
    }
//78   $(".num1").text()获取到的是string  然后相加要转换成number  num=Number(num);
	window.setInterval(function () {
        var num1=($(".num1").text());
        var num2=($(".num2").text());
        var num3=($(".num3").text());
        var num4=($(".num4").text());
        var num5=($(".num5").text());
        var num6=($(".num6").text());
        var num=num1+num2+num3+num4+num5+num6;
        num=Number(num);
        num=num+getRandomNumberByRange(0,9);
        // console.log(num);
        num=num+"";  //截取前要把number转换成string
        $(".num1").text(num.substring(0,1));
        $(".num2").text(num.substring(1,2))
        $(".num3").text(num.substring(2,3))
        $(".num4").text(num.substring(3,4))
        $(".num5").text(num.substring(4,5))
        $(".num6").text(num.substring(5,6))
    },1000)
	
	
	//79    // 关闭浏览器右键
        $(document).bind("contextmenu",function(e){
            return false;
        });
		
	//80  /*css去掉hover事件*/
	#asset_situation .ant-table-tbody{
    pointer-events:none;
}


//81  //获取范围内的随机数
function randNum(minnum , maxnum){
    return Math.floor(minnum + Math.random() * (maxnum - minnum));
}
//例如，生成0-9的随机数(包括0和9)randNum(0,10)

//82 改变 svg图片的颜色，编辑器打开，就行。


//83  jq 选择器的使用技巧。如：$("#"+i) ,可写在循坏里。

//树的扁平数据转child
 // 扁平数据转child
    fommat=({arrayList, pidStr = 'pid', idStr = 'id', childrenStr = 'children'}) =>{
        let listOjb = {}; // 用来储存{key: obj}格式的对象
        let treeList = []; // 用来储存最终树形结构数据的数组
        // 将数据变换成{key: obj}格式，方便下面处理数据
        for (let i = 0; i < arrayList.length; i++) {
            listOjb[arrayList[i][idStr]] = arrayList[i]
        }
        // 根据pid来将数据进行格式化
        for (let j = 0; j < arrayList.length; j++) {
            // 判断父级是否存在
            let haveParent = listOjb[arrayList[j][pidStr]]
            if (haveParent) {
                // 如果有没有父级children字段，就创建一个children字段
                !haveParent[childrenStr] && (haveParent[childrenStr] = [])
                // 在父级里插入子项
                haveParent[childrenStr].push(arrayList[j])
            } else {
                // 如果没有父级直接插入到最外层
                treeList.push(arrayList[j])
            }
        }
        return treeList
    }
	
	//调用得到返回值tree_Data（child数据）
	 let tree_Data= this.fommat({
        arrayList: a, //数据
        pidStr: 'pid'//数据中的pid
    });


//82 改变对象的key，区别于改变数组对象的key
			let R=response.data.data;
            let keyMap = {1: '低级', 2: '中级',3:'高级'};
            let objs= Object.keys(R).reduce((newData, key) => {
                let newKey = keyMap[key] || key
                newData[newKey] = R[key]
                return newData
            }, {});
            console.log(objs); //得到的objs任然是对象
//83 // 前n分钟的时间
    front_minutes=(s)=>{
        var date = new Date();
        var seperator1 = "";
        var seperator2 = "";
        //前十分钟时间
        var minutes=parseInt(s);

        var   interTimes=minutes*60*1000;

        var interTimes=parseInt(interTimes);
        date=new   Date(Date.parse(date)-interTimes);

        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (hour >= 0 && hour <= 9) {
            hour = "0" + hour;
        }
        if (minutes >= 0 && minutes <= 9) {
            minutes = "0" + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
            seconds = "0" + seconds;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + "" + hour + seperator2 + minutes
            + seperator2 + seconds;
        return currentdate;
    }
	
	this.front_minutes(1);//前一分钟的时间
	
	//84//前一个小时的时间  传参格式不同，返回的结果不同
    frontOneHour= (fmt) =>{
        var currentTime = new Date(new Date().getTime())
        console.log(currentTime) // Wed Jun 20 2018 16:12:12 GMT+0800 (中国标准时间)
        var o = {
            'M+': currentTime.getMonth() + 1, // 月份
            'd+': currentTime.getDate(), // 日
            'h+': currentTime.getHours(), // 小时
            'm+': currentTime.getMinutes(), // 分
            's+': currentTime.getSeconds(), // 秒
            'q+': Math.floor((currentTime.getMonth() + 3) / 3), // 季度
            'S': currentTime.getMilliseconds() // 毫秒
        }
        console.log(0)
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (currentTime.getFullYear() + '').substr(4 - RegExp.$1.length))
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
        return fmt
    }
	
	frontOneHour('yyyyMMddhhmmss'); >>>>20200119174800
	frontOneHour('yyyy-MM-dd hh:mm:ss'); >>>>2020-01-19 17:48:00
	
	//85 // 反转数组
    reverse_arr=(arr)=>{
        for(var i=0;i<arr.length/2;i++){
            var temp = arr[i];
            arr[i]=arr[arr.length-1-i];
            arr[arr.length-1-i]=temp;
        }
        return arr
    }
	
	//86 给长数字添加千位分隔符
function thousandBitSeparator(num) {
  return num && (num
    .toString().indexOf('.') != -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
      return $1 + ",";
    }) : num.toString().replace(/(\d)(?=(\d{3}))/g, function($0, $1) {
      return $1 + ",";
    }));
}
console.log(thousandBitSeparator(1000));
console.log(thousandBitSeparator(-1234567.9012));


	//87判断字符串串中是否有某字符
(value.indexOf("-") != -1)  有返回true，没有则返回false