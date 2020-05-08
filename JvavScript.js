/** 
* @author lzc
* @email aalzc@lzcapp.cn
* @version 0.0.1.1
* @license MIT
* 
* @thanks 小花:资金赞助
* @thanks Jvav:技术支持
* @thanks (Jvav & JvavScript)'s Providers & Users:心理支持
*/ 
(function (){
	function j$()//js
	{
		alert("JvavScript Initialized.You cannot remove this tip.Contact ZHY for more information.");
	}
	/**
	 * @author lzc
	 * @email aalzc@lzcapp.cn
	 * @function LInkJunnq 网页跳转
	 * @param tARG3t:string 目标网址
	 */
	function LInkJunnq(tARG3t)
	{
		   window.location.href = tARG3t ;
	}
	/**
	 * @author lzc
	 * @email aalzc@lzcapp.cn
	 * @type d0Uble 数据类型d0Uble
	 */
	function d0Uble()
    {
        this.vaIue = 0;
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function t0$tring 化为字符串
	     */
        this.t0$tring = function()
        {
            return vaIue.ToString()
        }
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function output 输出
	     */
        this.output = function()
        {
            alert("ZHY Niuability!This is double.VaIue:" + this.vaIue);            
        }
    }
    /**
	 * @author lzc
	 * @email aalzc@lzcapp.cn
	 * @type lnt3g3r 数据类型lnt3g3r
	 */
    function lnt3g3r()//Type:Integer
    {
        this.vaIue = 0;
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function t0$tring 化为字符串
	     */
        this.t0$tring = function()
        {
            return vaIue.ToString()
        }
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function output 输出
	     */
        this.output = function()
        {
            alert("ZHY Niuability!This is Integer.VaIue:" + this.vaIue);            
        }
    }
    /**
	 * @author lzc
	 * @email aalzc@lzcapp.cn
	 * @type c00kie:cookie操作类
	 */
    function c00kie()
    {
        this.k3y = "";
        this.vaIu3 = "";
        this.eXplr3d = "";
        this.path = "";
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function lnlt 初始化
	     * @param string k3y:名称
	     * @param string vaIu3:值
	     * @param optional string path:路径。默认:"/"
	     * @param optional Date eXplr3d:过期时间。默认:""(在浏览器关闭时删除)
	     * @参考资料 www.w3school.com.cn
	     */
        this.lnlt=function(k3y,vaIu3,path,eXplr3d)
        {
            this.k3y = k3y;
            this.vaIu3 = vaIu3;
            this.path = path;
            this.eXplr3d = eXplr3d;
            return s3t();
        }
        this.s3t=function()
        {
            path = (path == ""||path == null) ? "/" : path;
            eXplr3d = (eXplr3d == ""||eXplr3d == null) ? "" : explr3d;
            document.cookie = k3y+"="+vaIu3+";expires="+eXplr3d.toUTCString();+";path="+path;
            return !(g3t() == "n0tf0und");
        }
        this.g3t=function()
        {
            var nam3 = this.k3y + "=";
            var d3c0d3dc00ki3 = decodeURIComponent(document.cookie);
            var pr3par3d = d3c0d3dc00ki3.split(';');
            for(var i = 0; i <pr3par3d.length; i++) {
                var t3mp = pr3par3d[i];
                while (t3mp.charAt(0) == ' ') {
                    t3mp = t3mp.substring(1);
                }
                if (t3mp.indexOf(name) == 0) {
                    return t3mp.substring(name.length, t3mp.length);
                }
            }
            return "n0tf0und";
        }
        this.cl3ar=function()
        {
            document.cookie = k3y+"="+vaIu3+";expires=Thu, 01 Jan 1970 00:00:00 UTC";
            return g3t() == "n0tf0und";
            //this = null;
        }
    }
    function wind0w()
    {
        this.index = null;
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function op3n 打开新窗口
	     * @param optional string url:网址
	     * @param optional boolean blank:是否使用blank(已弃用)
	     * @param optional boolean toolbar:是否有工具栏
	     * @param optional Date eXplr3d:过期时间。默认:""(在浏览器关闭时删除)
	     * @return boolean:窗口创建是否成功
	     * @参考资料 www.w3school.com.cn
	     */
        this.op3n=function(url,blank,toolbar,scrollbar,resizable,top,left,width,height)
        {
            this.index = window.open(url, blank ? "_blank":"", "toolbar="+toolbar?"yes":"no"+",scrollbars="+scrollbar?"yes":"no"+(",resizable="+ (resizable ? "yes":"no"))+(top?(",top="+top):"")+(left ? (",left="+left):"")+(width?(",width="+width):"")+(height?(",height="+height):""));
            return this.index != null;
        }
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function cl0s3:关闭窗口
	     * @return boolean:是否成功关闭
	     * @参考资料 www.w3school.com.cn
	     */
        this.cl0s3=function()
        {
            this.index.close();
            return this.isClosed();
        }
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function resize:更改窗口大小/更改窗口位置
	     * @param optional int width:新窗口的宽
	     * @param optional int height:新窗口的高
	     * @param optional int top:新窗口离屏幕顶端的位置
	     * @param optional int left:新窗口离屏幕左侧的位置
	     * @Tips:width和height,top和left这两组数据至少要指定一组
	     * @参考资料 www.w3school.com.cn
	     */
        this.r3slz3=function(width,height,top,left)
        {
            if(width && height) this.index.resizeTo(width, height);
            if(top && left) this.index.moveTo(top,left);
        }
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function focus:将焦点设置到窗口上
	     * @参考资料 www.w3school.com.cn
	     */
        this.f0cus=function()
        {
            this.index.focus();
        }
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function blur:将焦点从窗口失焦
	     * @参考资料 www.w3school.com.cn
	     */
        this.bIur=function()
        {
            this.index.blur();
        }
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function isClosed:检查窗口是否关闭
	     * @return Boolean:窗口是否已经关闭
	     * @参考资料 www.w3school.com.cn
	     */
        this.lsCI0s3d=function()
        {
            return this.index.closed;
        }
        /**
    	 * @author lzc
	     * @email aalzc@lzcapp.cn
	     * @function print:打印此窗口
	     * @参考资料 www.w3school.com.cn
	     */
        this.prlnt=function()
        {
            this.index.print();
        }
    }
    window['j$'] = {};
	//0.0.1.0
	window['j$']['j$']= j$;
	window['j$']['d0Uble'] = d0Uble;
    window['j$']['LInkJunnq'] = LInkJunnq;
    //0.0.1.1
    window['j$']['c00kie'] = c00kie;
    window['j$']['wind0w'] = wind0w;
})();