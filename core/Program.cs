// using System;
// using System.Threading.Tasks;

public static class C
{
    public static int Add(int a, int b) => a + b;
}

namespace Benchmark
{
    public class Program
    {
        // public static void Main(string[] args)
        // {
        //     Program.Sum(1, 2);
        //     Console.WriteLine(Program.Sum(1, 2));
        // }

        public static int Sum(int a, int b)
        {
            return a + b;
        }


        // public static int Benchmark()
        // {
        //     long c = 0;
        //     for (var i = 0; i < 500; i++)
        //     {
        //         c += _Benchmark();
        //     }
        //     return (int)c;
        // }

        // private static long _Benchmark()
        // {
        //     var watch = System.Diagnostics.Stopwatch.StartNew();
        //     // the code that you want to measure comes here
        //     for (long i = 0; i < 1000000; i++)
        //     {
        //         //if (count % 2 == 0)
        //         //{
        //         //    count = count * 3;
        //         //}
        //         //else
        //         //{
        //         //    count = count / 2;
        //         //}
        //     }
        //     watch.Stop();
        //     return watch.ElapsedMilliseconds;

        // }


        //public static long Benchmark()
        //{
        //    var watch = System.Diagnostics.Stopwatch.StartNew();
        //    // the code that you want to measure comes here
        //    for (long i = 0; i < 1000000000; i++)
        //    {
        //        //if (count % 2 == 0)
        //        //{
        //        //    count = count * 3;
        //        //}
        //        //else
        //        //{
        //        //    count = count / 2;
        //        //}
        //    }
        //    watch.Stop();
        //    return watch.ElapsedMilliseconds;
        //}
    }
}
