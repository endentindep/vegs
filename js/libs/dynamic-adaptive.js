!function(){var e,t,n=document.querySelectorAll("[data-da]");document.documentElement.clientWidth;let i={};for(const l of n){let e=null,t,n;var o=l.getAttribute("data-da")?l.getAttribute("data-da").split(" "):null;if(o){for(const s of o)(s.includes("max")||s.includes("min"))&&(isFinite(s.replace("min",""))||isFinite(s.replace("max","")))||isFinite(s)?n=s.includes("max")||isFinite(s)?window.matchMedia(`(max-width:${s.replace("max","")}px)`):window.matchMedia(`(min-width:${s.replace("min","")}px)`):s.startsWith(".")?t=s:s.includes("#")&&(e=s.replaceAll("#",""));i.hasOwnProperty(l.parentElement.classList)?i[l.parentElement.classList].push({elem:l,to:document.querySelector(t),width:n,parent:l.parentElement,pos:e,sib:l.nextSibling}):i[l.parentElement.classList]=[{elem:l,to:document.querySelector(t),width:n,parent:l.parentElement,pos:e,sib:l.nextSibling}]}}for(e in i)1!==i[e].length&&i[e].sort((e,t)=>e.pos-t.pos);for(const r in i)for(const a of i[r])a.width.matches&&(a.pos&&a.pos<=a.to.childElementCount-1?a.pos<=0?a.to.prepend(a.elem):a.pos<=a.to.childElementCount-1&&(t=a.to.children[a.pos]).parentElement.insertBefore(a.elem,t):a.to.append(a.elem)),a.width.onchange=()=>{var e;a.width.matches?a.pos&&a.pos<=a.to.childElementCount-1?a.pos<=0?a.to.prepend(a.elem):a.pos<=a.to.childElementCount-1&&(e=a.to.children[a.pos]).parentElement.insertBefore(a.elem,e):a.to.append(a.elem):a.sib?a.parent.insertBefore(a.elem,function e(t,n){if(t.parent.contains(t.sib))return t.sib;for(const i of n)if(t.sib===i.elem)return e(i,n)}(a,i[r])):a.parent.append(a.elem)}}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy9keW5hbWljLWFkYXB0aXZlLmpzIiwic291cmNlcyI6WyJsaWJzL2R5bmFtaWMtYWRhcHRpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRhXScpO1xyXG5cdGxldCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHRsZXQgbGlzdCA9IHt9O1xyXG5cdGZvciAoY29uc3QgaSBvZiBlbGVtcykge1xyXG5cdFx0bGV0IHBvcyA9IG51bGw7XHJcblx0XHRsZXQgdG87XHJcblx0XHRsZXQgZGlzcFdpZHRoO1xyXG5cdFx0Y29uc3QgZGF0YSA9IGkuZ2V0QXR0cmlidXRlKCdkYXRhLWRhJykgPyBpLmdldEF0dHJpYnV0ZSgnZGF0YS1kYScpLnNwbGl0KCcgJykgOiBudWxsXHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRmb3IgKGNvbnN0IHQgb2YgZGF0YSkge1xyXG5cdFx0XHRcdGlmICgoKHQuaW5jbHVkZXMoJ21heCcpIHx8IHQuaW5jbHVkZXMoJ21pbicpKSkgJiYgKGlzRmluaXRlKHQucmVwbGFjZSgnbWluJywgJycpKSB8fCBpc0Zpbml0ZSh0LnJlcGxhY2UoJ21heCcsICcnKSkpIHx8XHJcblx0XHRcdFx0XHRpc0Zpbml0ZSh0KVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0aWYgKHQuaW5jbHVkZXMoJ21heCcpIHx8IGlzRmluaXRlKHQpKSB7XHJcblx0XHRcdFx0XHRcdGRpc3BXaWR0aCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiR7dC5yZXBsYWNlKCdtYXgnLCAnJyl9cHgpYClcclxuXHRcdFx0XHRcdH0gZWxzZSBkaXNwV2lkdGggPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDoke3QucmVwbGFjZSgnbWluJywgJycpfXB4KWApXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0LnN0YXJ0c1dpdGgoJy4nKSkge1xyXG5cdFx0XHRcdFx0dG8gPSB0O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodC5pbmNsdWRlcygnIycpKSB7XHJcblx0XHRcdFx0XHRwb3MgPSB0LnJlcGxhY2VBbGwoJyMnLCAnJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChsaXN0Lmhhc093blByb3BlcnR5KGkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QpKSB7XHJcblx0XHRcdFx0bGlzdFtpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0XS5wdXNoKHtcclxuXHRcdFx0XHRcdCdlbGVtJzogaSxcclxuXHRcdFx0XHRcdCd0byc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG8pLFxyXG5cdFx0XHRcdFx0J3dpZHRoJzogZGlzcFdpZHRoLFxyXG5cdFx0XHRcdFx0J3BhcmVudCc6IGkucGFyZW50RWxlbWVudCxcclxuXHRcdFx0XHRcdCdwb3MnOiBwb3MsXHJcblx0XHRcdFx0XHQnc2liJzogaS5uZXh0U2libGluZ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxpc3RbaS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdF0gPSBbe1xyXG5cdFx0XHRcdFx0J2VsZW0nOiBpLFxyXG5cdFx0XHRcdFx0J3RvJzogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0byksXHJcblx0XHRcdFx0XHQnd2lkdGgnOiBkaXNwV2lkdGgsXHJcblx0XHRcdFx0XHQncGFyZW50JzogaS5wYXJlbnRFbGVtZW50LFxyXG5cdFx0XHRcdFx0J3Bvcyc6IHBvcyxcclxuXHRcdFx0XHRcdCdzaWInOiBpLm5leHRTaWJsaW5nXHJcblx0XHRcdFx0fV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Zm9yIChsZXQgaSBpbiBsaXN0KSB7XHJcblx0XHRpZiAobGlzdFtpXS5sZW5ndGggIT09IDEpIHtcclxuXHRcdFx0bGlzdFtpXS5zb3J0KChhLCBiKSA9PiBhLnBvcyAtIGIucG9zKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gZmluZChlbGVtLCBhcnIpIHtcclxuXHRcdGlmIChlbGVtLnBhcmVudC5jb250YWlucyhlbGVtLnNpYikpIHtcclxuXHRcdFx0cmV0dXJuIGVsZW0uc2liO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yIChjb25zdCBpIG9mIGFycikge1xyXG5cdFx0XHRcdGlmIChlbGVtLnNpYiA9PT0gaS5lbGVtKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmluZChpLCBhcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmb3IgKGNvbnN0IGFyciBpbiBsaXN0KSB7XHJcblx0XHRmb3IgKGNvbnN0IGkgb2YgbGlzdFthcnJdKSB7XHJcblx0XHRcdGlmIChpLndpZHRoLm1hdGNoZXMpIHtcclxuXHRcdFx0XHRpZiAoaS5wb3MgJiYgaS5wb3MgPD0gaS50by5jaGlsZEVsZW1lbnRDb3VudCAtIDEpIHtcclxuXHRcdFx0XHRcdGlmIChpLnBvcyA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdGkudG8ucHJlcGVuZChpLmVsZW0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChpLnBvcyA8PSBpLnRvLmNoaWxkRWxlbWVudENvdW50IC0gMSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByZWYgPSBpLnRvLmNoaWxkcmVuW2kucG9zXTtcclxuXHRcdFx0XHRcdFx0cmVmLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGkuZWxlbSwgcmVmKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaS50by5hcHBlbmQoaS5lbGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpLndpZHRoLm9uY2hhbmdlID0gKCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpLndpZHRoLm1hdGNoZXMpIHtcclxuXHRcdFx0XHRcdGlmIChpLnBvcyAmJiBpLnBvcyA8PSBpLnRvLmNoaWxkRWxlbWVudENvdW50IC0gMSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoaS5wb3MgPD0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGkudG8ucHJlcGVuZChpLmVsZW0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGkucG9zIDw9IGkudG8uY2hpbGRFbGVtZW50Q291bnQgLSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgcmVmID0gaS50by5jaGlsZHJlbltpLnBvc107XHJcblx0XHRcdFx0XHRcdFx0cmVmLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGkuZWxlbSwgcmVmKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGkudG8uYXBwZW5kKGkuZWxlbSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChpLnNpYikge1xyXG5cdFx0XHRcdFx0XHRpLnBhcmVudC5pbnNlcnRCZWZvcmUoaS5lbGVtLCBmaW5kKGksIGxpc3RbYXJyXSkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aS5wYXJlbnQuYXBwZW5kKGkuZWxlbSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pKCkiXSwibmFtZXMiOlsiaSIsInJlZiIsImVsZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJsZXQiLCJsaXN0IiwicG9zIiwidG8iLCJkaXNwV2lkdGgiLCJkYXRhIiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJ0IiwiaW5jbHVkZXMiLCJpc0Zpbml0ZSIsInJlcGxhY2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwic3RhcnRzV2l0aCIsInJlcGxhY2VBbGwiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJwdXNoIiwiZWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWR0aCIsInBhcmVudCIsInNpYiIsIm5leHRTaWJsaW5nIiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwiYXJyIiwibWF0Y2hlcyIsImNoaWxkRWxlbWVudENvdW50IiwicHJlcGVuZCIsImNoaWxkcmVuIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kIiwib25jaGFuZ2UiLCJmaW5kIiwiY29udGFpbnMiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsV0FDQyxJQTJDU0EsRUF1QkVDLEVBbEVMQyxFQUFRQyxTQUFTQyxpQkFBaUIsV0FBVyxFQUN2Q0QsU0FBU0UsZ0JBQWdCQyxZQUNyQ0MsSUFBSUMsRUFBTyxHQUNYLElBQUssTUFBTVIsS0FBS0UsRUFBTyxDQUN0QkssSUFBSUUsRUFBTSxLQUNOQyxFQUNBQyxFQUNKLElBQU1DLEVBQU9aLEVBQUVhLGFBQWEsU0FBUyxFQUFJYixFQUFFYSxhQUFhLFNBQVMsRUFBRUMsTUFBTSxHQUFHLEVBQUksS0FDaEYsR0FBSUYsRUFBTSxDQUNULElBQUssTUFBTUcsS0FBS0gsR0FDVEcsRUFBRUMsU0FBUyxLQUFLLEdBQUtELEVBQUVDLFNBQVMsS0FBSyxLQUFRQyxTQUFTRixFQUFFRyxRQUFRLE1BQU8sRUFBRSxDQUFDLEdBQUtELFNBQVNGLEVBQUVHLFFBQVEsTUFBTyxFQUFFLENBQUMsSUFDakhELFNBQVNGLENBQUMsRUFHVEosRUFER0ksRUFBRUMsU0FBUyxLQUFLLEdBQUtDLFNBQVNGLENBQUMsRUFDdEJJLE9BQU9DLHlCQUF5QkwsRUFBRUcsUUFBUSxNQUFPLEVBQUUsTUFBTSxFQUNuREMsT0FBT0MseUJBQXlCTCxFQUFFRyxRQUFRLE1BQU8sRUFBRSxNQUFNLEVBQ2xFSCxFQUFFTSxXQUFXLEdBQUcsRUFDMUJYLEVBQUtLLEVBQ0tBLEVBQUVDLFNBQVMsR0FBRyxJQUN4QlAsRUFBTU0sRUFBRU8sV0FBVyxJQUFLLEVBQUUsR0FHeEJkLEVBQUtlLGVBQWV2QixFQUFFd0IsY0FBY0MsU0FBUyxFQUNoRGpCLEVBQUtSLEVBQUV3QixjQUFjQyxXQUFXQyxLQUFLLENBQ3BDQyxLQUFRM0IsRUFDUlUsR0FBTVAsU0FBU3lCLGNBQWNsQixDQUFFLEVBQy9CbUIsTUFBU2xCLEVBQ1RtQixPQUFVOUIsRUFBRXdCLGNBQ1pmLElBQU9BLEVBQ1BzQixJQUFPL0IsRUFBRWdDLFdBQ1YsQ0FBQyxFQUVEeEIsRUFBS1IsRUFBRXdCLGNBQWNDLFdBQWEsQ0FBQyxDQUNsQ0UsS0FBUTNCLEVBQ1JVLEdBQU1QLFNBQVN5QixjQUFjbEIsQ0FBRSxFQUMvQm1CLE1BQVNsQixFQUNUbUIsT0FBVTlCLEVBQUV3QixjQUNaZixJQUFPQSxFQUNQc0IsSUFBTy9CLEVBQUVnQyxXQUNWLEVBRUYsQ0FDRCxDQUNBLElBQVNoQyxLQUFLUSxFQUNVLElBQW5CQSxFQUFLUixHQUFHaUMsUUFDWHpCLEVBQUtSLEdBQUdrQyxLQUFLLENBQUNDLEVBQUdDLElBQU1ELEVBQUUxQixJQUFNMkIsRUFBRTNCLEdBQUcsRUFjdEMsSUFBSyxNQUFNNEIsS0FBTzdCLEVBQ2pCLElBQUssTUFBTVIsS0FBS1EsRUFBSzZCLEdBQ2hCckMsRUFBRTZCLE1BQU1TLFVBQ1B0QyxFQUFFUyxLQUFPVCxFQUFFUyxLQUFPVCxFQUFFVSxHQUFHNkIsa0JBQW9CLEVBQzFDdkMsRUFBRVMsS0FBTyxFQUNaVCxFQUFFVSxHQUFHOEIsUUFBUXhDLEVBQUUyQixJQUFJLEVBQ1QzQixFQUFFUyxLQUFPVCxFQUFFVSxHQUFHNkIsa0JBQW9CLElBQ3RDdEMsRUFBTUQsRUFBRVUsR0FBRytCLFNBQVN6QyxFQUFFUyxNQUN4QmUsY0FBY2tCLGFBQWExQyxFQUFFMkIsS0FBTTFCLENBQUcsRUFFckNELEVBQUVVLEdBQUdpQyxPQUFPM0MsRUFBRTJCLElBQUksR0FFMUIzQixFQUFFNkIsTUFBTWUsU0FBVyxLQUNsQixJQUtTM0MsRUFMTEQsRUFBRTZCLE1BQU1TLFFBQ1B0QyxFQUFFUyxLQUFPVCxFQUFFUyxLQUFPVCxFQUFFVSxHQUFHNkIsa0JBQW9CLEVBQzFDdkMsRUFBRVMsS0FBTyxFQUNaVCxFQUFFVSxHQUFHOEIsUUFBUXhDLEVBQUUyQixJQUFJLEVBQ1QzQixFQUFFUyxLQUFPVCxFQUFFVSxHQUFHNkIsa0JBQW9CLElBQ3RDdEMsRUFBTUQsRUFBRVUsR0FBRytCLFNBQVN6QyxFQUFFUyxNQUN4QmUsY0FBY2tCLGFBQWExQyxFQUFFMkIsS0FBTTFCLENBQUcsRUFFckNELEVBQUVVLEdBQUdpQyxPQUFPM0MsRUFBRTJCLElBQUksRUFFckIzQixFQUFFK0IsSUFDTC9CLEVBQUU4QixPQUFPWSxhQUFhMUMsRUFBRTJCLEtBbkM3QixTQUFTa0IsRUFBS2xCLEVBQU1VLEdBQ25CLEdBQUlWLEVBQUtHLE9BQU9nQixTQUFTbkIsRUFBS0ksR0FBRyxFQUNoQyxPQUFPSixFQUFLSSxJQUVaLElBQUssTUFBTS9CLEtBQUtxQyxFQUNmLEdBQUlWLEVBQUtJLE1BQVEvQixFQUFFMkIsS0FDbEIsT0FBT2tCLEVBQUs3QyxFQUFHcUMsQ0FBRyxDQUl0QixFQXlCd0NyQyxFQUFHUSxFQUFLNkIsRUFBSSxDQUFDLEVBRWhEckMsRUFBRThCLE9BQU9hLE9BQU8zQyxFQUFFMkIsSUFBSSxDQUd6QixDQUdGLEVBQUUifQ==