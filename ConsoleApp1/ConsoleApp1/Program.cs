using System.Security.Cryptography;

byte[] hashValue = new byte[256];
using (SHA256 mysha256 = SHA256.Create())
{
    hashValue = mysha256.ComputeHash(File.ReadAllBytes("sha.txt"));
    File.WriteAllBytes("hash.txt", hashValue);

}
