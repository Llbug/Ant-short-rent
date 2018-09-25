 	function Scroll() {
 		if(window.pageYoffset){
				//return Top = window.pageYoffset;
				return{
					top:window.pageYoffset,
					left:window.pageXoffset
				}
			}
			else if( document.compatMode === 'CSS1Compat'){          // document.compatMode === 'CSS1Compat' 判断是严格模式还是怪异模式                 严格模式是document.documentElement.scrollTop，怪异模式：document.body.scrollTop
				//return Top = document.documentElement.scrollTop;
			return{
				top:document.documentElement.scrollTop,
				left:document.documentElement.scrollLeft
			}
			} else
			{
				return {
					top:document.body.scrollTop,
					left:document.body.scrollLeft
				}
			}
		}