function launchBrowser()
{
    var browserName=`Edge`

    if(browserName=='Chrome')
    {
        console.log(`BrowserName is Chrome`)
    }
    else if(browserName=='Firefox')
    {
        console.log(`BrowserName is Firefox`)
    }
    else
    {
        console.log(`BrowserName is Edge`)
    }
}
function runTests()
{
    var testType='smoke'
    switch(testType)
    {
     case 'sanity':
        console.log('Test type is sanity')  
        break;
     case 'regression':
        console.log('Test type is regression')  
        break;    
     case 'smoke':
        console.log('Test type is smoke')  
        break;
     default:
        console.log('Test tpe is functional')
    }
   
}

launchBrowser()
runTests()