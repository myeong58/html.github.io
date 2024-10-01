const apiUrl = 'https://infuser.odcloud.kr/oas/docs?namespace=15000735/v1';

$.ajax({
    method: "GET",
    url: 'https://infuser.odcloud.kr/oas/docs?namespace=15000735/v1',
    data: { query: "어린왕자", target:"title" , size:40 },
    headers:{Authorization: "r%2FHiP9gqC%2F0opG8bz1u5My0p0hPPz59XdNRNXkHy6VobOm2FEJ9lx0y%2BRvns%2F0%2BxeYjJBkNvyX0mXK%2Bf5TA2rg%3D%3D"}
  })
    .done(function(msg) {
        console.log(msg);
        console.log(msg.documents[1].title );
        console.log(msg.documents[1].thumbnail );

      // for문 (8개)
        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $("div").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $("div").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
              $("div").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

              var str=msg.documents[i].contents;
              var str2=str.substring(0,60);

              $("div").eq(i).append("<p>"+str2+"</p>");
              $("div").eq(i).append("<button>"+"click"+"</button>");  

        }
    });



// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('네트워크 오류!');
//         }
//         return response.json();
//     })
//     .then(data => {
//         const container = document.getElementById('dataContainer');
//         const htmlContent = data.map(item => `
//             <div>
//                 <h3>${item['도서 제목']}</h3>
//                 <p>저자: ${item['저자']}</p>
//                 <p>출판사: ${item['출판사']}</p>
//                 <p>대출 가능: ${item['대출가능여부']}</p>
//             </div>
//         `).join('');
//         container.innerHTML = htmlContent;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });



