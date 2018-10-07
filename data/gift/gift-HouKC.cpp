
#include<iostream>
#include<stdlib.h>
#include<time.h>

using namespace std;

#define random(x) (rand()%x)

int removeFromA(int *p, int k, int len)     //从a中移除某个编号
{
    for(int i=k;i<len-1;i++)
        p[i]=p[i+1];
    return len-1;
}

int main()
{
    int n, temp, len;
    cin >> n;
    srand((int(time(0))));  //随机数初始化

    int *a = new int[n];    //存储编号为1到n的礼物，每项的值即编号
    int *b = new int[n];    //存储随机分配的礼物编号
    for(int i=0;i<n;i++)
        a[i]=i+1;
    len = n;                //len存储a中的编号个数
    for(int i=0;i<n;i++)
    {
        do{
            temp = random(len);
        }while(a[temp]==i+1);   //判断不是自己的礼物
        if(i==n-2)              //倒数第2项时要判断最后一个人会不会和最后一件礼物相同
        {
            if(temp==1 && a[0]==n-1)
            {
                b[i]=a[0];
                b[i+1]=a[1];
                break;
            }
            else if(temp==0 && a[1]==n-1)
            {
                b[i]=a[1];
                b[i+1]=a[0];
                break;
            }
        }
        b[i]=a[temp];
        len = removeFromA(a, temp, len);
    }

    for(int i=0;i<n;i++)
        cout<<i+1<<"-"<<b[i]<<endl;
    cout<<endl;

    delete[] a;
    delete[] b;
    return 0;
}
