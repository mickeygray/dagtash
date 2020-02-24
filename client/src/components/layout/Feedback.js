import React  from 'react'
import clientPicture1 from '../../images/Services/clientPicture1.jpg'
import clientPicture2 from '../../images/Services/clientPicture2.jpg'
import clientPicture3 from '../../images/Services/clientPicture3.jpg'
import clientPicture4 from '../../images/Services/clientPicture4.jpg'
import clientPicture5 from '../../images/Services/clientPicture5.jpg'
import FeedbackItem from '../layout/FeedbackItem'

const Feedback = () => {
    const feedbacks = [
        {key:1,
         body:'“GREAT JOB!!! Tax Advocate Group was able to release my wage garnishment,within days, This is a Fantastic company, If You have any tax issues , Please give them a call!!!!!”',   
         clientName: 'Jack Mills',
         clientPicture: clientPicture1
          },
          {key:2,
          body:'“I went to the Tax Advocate Group in order to finish my tax problem I had a few different people try to help with the IRS but really all they did was push paper around and keep my guessing on my next move. The Tax Advocate Group really went to work straightaway, got me a deal I could afford and made the whole thing an understandable process that I could live with”',   
          clientName: 'Rex Watson',
          clientPicture: clientPicture2,
          },
          {
            key:3,
            body:'“The Best!!! Excellent service and follow through. Very thoughtful staff and they will keep you updated with what is going on, and any situations that come up were handled immediately. They were able to do what I thought could never be done. Thank you Tax Advocate Group',   
            clientName: 'Cassie Ventura',
            clientPicture: clientPicture3,
           },
           {key:4,
            body:'““I had not filed my taxes in years and decided to call Tax Advocate Group. It was the best decision I ever made. Their very experienced staff of IRS Enrolled Agents, CPA’S and Attorneys are 2nd to none. They not only took care of my IRS problem, but gave peace of mind.”',   
            clientName: 'Decker Combs',
            clientPicture: clientPicture4,
           },
           {
            key:5,
            body:'“When you receive a letter in the mail that has IRS on it – you tend to lose a lot of sleep and sometimes don’t even open the envelope! I’ve had that experience and after making contact, I have to tell you, I slept better”',   
            clientName: 'Blanche Smith',
            clientPicture: clientPicture5,  
           }
    ]


        
    
   
    return (
        <div style={userStyle}>
          {feedbacks.map(feedback => (
              <FeedbackItem key={feedback.id} feedback={feedback}/>
          ))}  
        </div>
    );
}




const userStyle = {
display: 'grid',
gridTemplateColumns: 'repeat(3,1fr)',
gridGap: '1rem'
}

export default Feedback
