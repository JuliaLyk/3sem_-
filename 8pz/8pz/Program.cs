using System.Security.Cryptography;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace lab8
{

    class program
    {
        public static async void FileStream(string text, string path)
        {
            using (FileStream fstream = new FileStream(path, FileMode.Create))
            {
                // преобразуем строку в байты
                byte[] buffer = Encoding.Default.GetBytes(text);
                // запись массива байтов в файл
                await fstream.WriteAsync(buffer, 0, buffer.Length);
            }
        }
        public static async void FileRead(string path)
        {
            using (FileStream fstream = File.OpenRead(path))
            {
                // выделяем массив для считывания данных из файла
                byte[] buffer = new byte[fstream.Length];
                // считываем данные
                await fstream.ReadAsync(buffer, 0, buffer.Length);
                // декодируем байты в строку
                string textFromFile = Encoding.Default.GetString(buffer);
                Console.WriteLine($"текст {path}: {textFromFile}");
            }
        }
        public static async void FileReadHash(string path)
        {
            using (FileStream fstream = File.OpenRead(path))
            {
                // выделяем массив для считывания данных из файла
                byte[] buffer = new byte[fstream.Length];
                // считываем данные
                await fstream.ReadAsync(buffer, 0, buffer.Length);
                // декодируем байты в строку
                byte[] chubber = new byte[fstream.Length];

                string textFromFile = Encoding.Default.GetString(buffer);
                Console.WriteLine($"текст {path}: {textFromFile}");
            }
        }

        static void Main()
        {
            Console.Write("Иссходные данные: ");
            string text = Console.ReadLine();
            FileStream(text, "sha.txt");
            FileRead("sha.txt");
            string hach;
            byte[] hashValue = new byte[256];
            using (SHA256 mysha256 = SHA256.Create())
            {
                hashValue = mysha256.ComputeHash(File.ReadAllBytes("sha.txt"));
                File.WriteAllBytes("hash.txt", hashValue);
                FileRead("hash.txt");


            }






        }
    }
}