export default function News() {
  return (
    <div className="mt-20">
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center">أحدث الأخبار في بورسعيد</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* بطاقة الأخبار هنا */}
        </div>
      </section>
    </div>
  );
}

// web scripting
// const puppeteer = require('puppeteer');

// async function fetchNews() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.portsaid.gov.eg/'); // رابط الموقع

//   const newsItems = await page.evaluate(() => {
//     const newsElements = document.querySelectorAll('.news-class');
//     const items = [];
//     newsElements.forEach(element => {
//       const title = element.querySelector('h2').innerText;
//       const description = element.querySelector('p').innerText;
//       const link = element.querySelector('a').href;
//       items.push({ title, description, link });
//     });
//     return items;
//   });

//   console.log(newsItems);

//   await browser.close();
// }

// fetchNews();

   //API ....

// import { useEffect, useState } from 'react';

// const News = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const response = await fetch(`https://newsapi.org/v2/everything?q=PortSaid&apiKey=YOUR_API_KEY`);
//       const data = await response.json();
//       setArticles(data.articles);
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div>
//       {articles.map((article, index) => (
//         <div key={index} className="news-item">
//           <h3>{article.title}</h3>
//           <p>{article.description}</p>
//           <a href={article.url} target="_blank" rel="noopener noreferrer">اقرأ المزيد</a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default News;
