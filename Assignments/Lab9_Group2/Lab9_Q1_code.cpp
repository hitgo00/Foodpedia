#include<bits/stdc++.h>
using namespace std;

bool leap(int year)
{
    if(year % 400 == 0)     return true;
    if(year % 100 != 0 && year % 4 == 0)     return true;

    return false;
}

int main()
{
    int day,month,year;

    cout<<"Enter the date (dd mm yyyy): "<<endl;
    cin>>day>>month>>year;

    cout<<"Previous date is ";
    int mnum[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    if((day<1 || day>31) || (month<1 || month>13) || (year<1900 || year>2015))
    {
        cout<<"Invalid"<<endl;
        return 0;
    }

    bool lp = leap(year);

    if(!lp && day==29)
    {
        cout<<"Invalid"<<endl;
        return 0;
    }

    if(lp && day==1 && month==3)
    {
        cout<<"29/2/"<<year<<endl;
        return 0;
    }

    if(day == 1 && month == 1)
    {
        cout<<"31/12/"<<year-1<<endl;
    }
    else if(day==1)
    {
        cout<<mnum[month-2]<<"/"<<month-1<<"/"<<year<<endl;
    }
    else
    {
        cout<<day-1<<"/"<<month<<"/"<<year<<endl;
    }

    return 0;
}

