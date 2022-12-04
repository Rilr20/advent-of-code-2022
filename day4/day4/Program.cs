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
            int part2Count = 0;
            string[] ranges;
            bool result;

            foreach (String line in fileContents)
            {
                ranges = line.Split(',');
                result = formatter(ranges[0], ranges[1]);
                InRangeCount = result ? InRangeCount += 1 : InRangeCount;

                result = overlaps(ranges[0], ranges[1]);
                part2Count = result ? part2Count += 1 : part2Count;
            }
            Console.WriteLine(InRangeCount + "\n");
            Console.WriteLine(part2Count);
            Console.ReadLine();
        }
        static bool formatter(string range1, string  range2)
        {
            string[] range1Split = new string[2];
            string[] range2Split = new string[2];
            int[] firstRangeArr = new int[2];
            int[] secondRangeArr = new int[2];

            range1Split = range1.Split('-');
            range2Split = range2.Split('-');

            firstRangeArr[0] = Convert.ToInt32(range1Split[0]);
            firstRangeArr[1] = Convert.ToInt32(range1Split[1]);

            secondRangeArr[0] = Convert.ToInt32(range2Split[0]);
            secondRangeArr[1] = Convert.ToInt32(range2Split[1]);
            return InsideRange(firstRangeArr, secondRangeArr);
        }
        static bool InsideRange(int[] range1, int[] range2)
        {
            return range1[0] <= range2[0] && range1[1] >= range2[1] ||
                    range2[0] <= range1[0] && range2[1] >= range1[1];
        }
        static bool overlaps(string firstRange, string secondRange)
        {
            string[] range1Split = new string[2];
            string[] range2Split = new string[2];
            int[] firstRangeArr = new int[2];
            int[] secondRangeArr = new int[2];

            range1Split = firstRange.Split('-');
            range2Split = secondRange.Split('-');
            
            firstRangeArr[0] = Convert.ToInt32(range1Split[0]);
            firstRangeArr[1] = Convert.ToInt32(range1Split[1]);
            
            secondRangeArr[0] = Convert.ToInt32(range2Split[0]);
            secondRangeArr[1] = Convert.ToInt32(range2Split[1]);

            return (firstRangeArr[1] >= secondRangeArr[0] && firstRangeArr[1] <= secondRangeArr[1]) ||
                    (secondRangeArr[1] >= firstRangeArr[0] && secondRangeArr[1] <= firstRangeArr[1]);
        }
    }
}
