// import React from 'react'
// import {Day, Month, ScheduleComponent,ViewDirective,ViewsDirective, Week,Inject} from '@syncfusion/ej2-react-schedule'
// import './schedule.css'


// const data = [
//     {
//       Id: 1,
//       Subject: "Sales Presentation",
//       StartTime: new Date(2025, 1, 11, 10, 0),
//       EndTime: new Date(2025, 1, 11, 12, 30),
//       IsAllDay: false,
//     },
//     {
//       Id: 2,
//       Subject: "New Budget Report",
//       StartTime: new Date(2025, 1, 10, 10, 0),
//       EndTime: new Date(2025, 1, 10, 12, 30),
//       IsAllDay: true,
//       Status: "Completed",
//       Priority: "High",
//     },
//   ];
  
//   console.log(data);
  
// const schedule = () => {
//   return (
//     <div>
//         <ScheduleComponent
//         eventSettings={{
//             dataSource: data,
//         }}
//         >
//             <ViewsDirective>
//                 <ViewDirective option="Day"/>
//                 <ViewDirective option="Week"/>
//                 <ViewDirective option="Month"/>

//             </ViewsDirective>
//             <Inject services={[Day,Week,Month]}/>
//         </ScheduleComponent>
//     </div>
//   )
// }

// export default schedule