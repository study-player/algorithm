#include <iostream>
#include <string>

using namespace std;

int fibonacii(int a)
{
    if(a==1 || a==2)
        return 1;
    else
        return fibonacii(a)+fibonacii(a-1);
}

int main()
{
    string nums;
    cin>>nums;

    int len = nums.length();
    int *dp=new int[len];
    dp[0]=1;
    for(int i= 1; i < len; i++)
    {
        // dp[i]=dp[i-1]+dp[i-2];
        dp[i] = (nums[i - 1] == '0') ? 0 : dp[i - 1];
        if(i > 1 && (nums[i - 2] == '1' || (nums[i - 2] == '2' && nums[i - 1] <= '6')))
        {
            dp[i] += dp[i - 2];
        }
    }
    cout<<dp[len - 1]<<endl;
    delete []dp;
    system("pause");
    return 0;
}
