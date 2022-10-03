/**
 * Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}”
are balanced in exp.
- Use a for .. of loop through the expression array
- push any left bracket onto a stack
- on a right bracket pop the stack and check that return value is a left bracket
- if not, then not balanced
- if stack empty at end then balanced, else not balanced


 */

/**
 * 
 */
"use strict";

const bracketStack=[];
function balanced( bracketStack){

  for(let element of exp) {
    if(element==="{"){
        bracketStack.push(element);
    }
//-on the right bracket opo the stack and check that return value is a left bracket
    if(element=="}"){
        const stackelement= bracketStack.pop();
        if(stackelement!== "{"){
            return false;
        }
    }
    if(stackelement===0)
  }
  //-if stack empty at end then ballanced , else not balanced

  return null;
        
        
    }
  

