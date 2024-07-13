import { StarFilled, StarOutlined } from "@ant-design/icons"
import SingleCodeField from "../../components/SingleCodeField"
// import { codeX } from "../../global/dummyCOde"

const codeX=`/*
* C#  Program to Generate Fibonacci Series
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace fibonaci
{
   class Program
   {
       static void Main(string[] args)
       {
           int i, count, f1 = 0, f2 = 1, f3 = 0;
           Console.Write("Enter the Limit : ");
           count = int.Parse(Console.ReadLine());
           Console.WriteLine(f1);
           Console.WriteLine(f2);
           for (i = 0; i <= count; i++)
           {
               f3 = f1 + f2;
               Console.WriteLine(f3);
               f1 = f2;
               f2 = f3;
           }
           Console.ReadLine();

       }
   }
}
/*
 * C#  Program to Generate Fibonacci Series
 */
 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
 
namespace fibonaci
{
    class Program
    {
        static void Main(string[] args)
        {
            int i, count, f1 = 0, f2 = 1, f3 = 0;
            Console.Write("Enter the Limit : ");
            count = int.Parse(Console.ReadLine());
            Console.WriteLine(f1);
            Console.WriteLine(f2);
            for (i = 0; i <= count; i++)
            {
                f3 = f1 + f2;
                Console.WriteLine(f3);
                f1 = f2;
                f2 = f3;
            }
            Console.ReadLine();
 
        }
    }
}
`


const SingleCodePage = () => {
    return (
        <div className="codeWrapper">

            <div className="codeLeft" style={{lineHeight:'5px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a',fontSize:'1.2rem' }}>Title : <span style={{ fontWeight: "bold" }}>Algorithm Code</span></p>
                <div style={{color:'red'}}><StarOutlined/>
                <StarFilled/></div>
                </div>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Course Code : <span style={{ fontWeight: "bold" }}>CSE332</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Language : <span style={{ fontWeight: "bold" }}>C++</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Created At : <span style={{ fontWeight: "bold" }}>12 December 2024</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Updated At : <span style={{ fontWeight: "bold" }}>12 December 2024</span></p>
                <SingleCodeField code={codeX}/>
            </div>
            <div className="codeRight">
                right
            </div>
        </div>
    )
}

export default SingleCodePage