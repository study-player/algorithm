#include<iostream>
#include<string>

using namespace std;

int main()
{
    string str;
    getline(cin, str);
    int len=str.length();
    if(len==1 && str[0]== ' ')      //单独的一个空格算回文
    {
        cout<<true<<endl;
        return 0;
    }

    for(int i=0;i<len;i++)
    {
        if(str[i]>='A'&&str[i]<='Z')
        {
            str[i]+='a'-'A';            //大写转小写
            continue;
        }
        else if(str[i]>='a'&&str[i]<='z' || str[i]>='0'&&str[i]<='9')
            continue;
        else
        {
            str.erase(i,1);      //去掉字母与数字之外的
            i-=1;
            len-=1;
        }       
    }

    int i=0;
    while(i<len/2 && str[i]==str[len-i-1])   //判断是否为回文
        i++;
    if(i==len/2)
        cout<<true<<endl;
    else
        cout<<false<<endl;
    return 0;
}
