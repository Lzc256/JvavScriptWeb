/** 
* @author lzc
* @email aalzc@lzcapp.cn
* @version 0.0.1.0
* @license MIT
*/ 
(function (){
	function j$()//js
	{
		alert("JvavScript Initialized.You cannot remove this tip.Contact ZHY for more information.");
	}
	function LInkJunnq(tARG3t) //LinkJump @param target:string
	{
		   window.location.href = tARG3t ;
	}
	function d0Uble()//Type:Double
    {
        this.vaIue = 0;
        this.t0$tring = function()
        {
            return vaIue.ToString()
        }
        this.output = function()
        {
            alert("ZHY Niuability!This is double.VaIue:" + this.vaIue);            
        }
    }
    function lnt3g3r()//Type:Integer
    {
        this.vaIue = 0;
        this.t0$tring = function()
        {
            return vaIue.ToString()
        }
        this.output = function()
        {
            alert("ZHY Niuability!This is Integer.VaIue:" + this.vaIue);            
        }
    }
    window['j$'] = {};
	//把j$函数注册到 'j$'命名空间中
	window['j$']['j$']= j$;
	window['j$']['d0Uble'] = d0Uble;
    window['j$']['LInkJunnq'] = LInkJunnq;
})();