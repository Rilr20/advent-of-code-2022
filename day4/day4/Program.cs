using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace day4
{
    internal class Program
    {

        static void Main(string[] args)
        {
            string filePath = Path.GetFullPath("..\\..\\input.txt");
            string[] fileContents = File.ReadAllLines(filePath);

            int InRangeCount = 0;
            string[] ranges = new string[2];
            bool result = false;
            foreach (String line in fileContents)
            {
                ranges = line.Split(',');
                result = formatter(ranges[0], ranges[1]);
                InRangeCount = result ? InRangeCount+=1 : InRangeCount;
            }
            Console.WriteLine(InRangeCount);
            Console.ReadLine();

        }
        static bool formatter(string range1, string  range2)
        {
            string[] range1Split = new string[2];
            string[] range2Split = new string[2];
            range1Split = range1.Split('-');
            range2Split = range2.Split('-');
            int[] convertedNumbers = new int[2];
            convertedNumbers[0] = Convert.ToInt32(range2Split[0]);
            convertedNumbers[1] = Convert.ToInt32(range2Split[1]);
            return InsideRange(Convert.ToInt32(range1Split[0]), Convert.ToInt32(range1Split[1]), convertedNumbers);
            
        }
        static bool InsideRange(int startPos, int EndPos, int[] range)
        {
            int[] createdRange = Enumerable.Range(startPos, EndPos-startPos+1).ToArray();
            int[] createdRange2 = Enumerable.Range(range[0], range[1]-range[0]+1).ToArray();
            return (createdRange.Contains(range[0]) && createdRange.Contains(range[1])
                    || createdRange2.Contains(startPos) && createdRange2.Contains(EndPos));
        }
    }
}
