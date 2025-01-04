import React from 'react'
import CardComp from '../components/CardComp'
import '../assets/css/CardPage.css'
const PageCard = () => {
    let data=[{services:"web development" ,src:"https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E", des:'Our web development services are tailored to your specific requirements, ensuring that your online presence reflects your brand identity and values. Whether you need a custom website or an e-commerce platform, we have the expertise to bring your vision to life'},
        {services:"IT Consultancy:",src:"https://st3.depositphotos.com/1092019/13044/i/450/depositphotos_130447636-stock-photo-blue-consultancy-services-button-on.jpg" ,des:'Our web development services are tailored to your specific requirements, ensuring that your online presence reflects your brand identity and values. Whether you need a custom website or an e-commerce platform, we have the expertise to bring your vision to life',des:"Our IT consultancy services help you navigate the complex world of technology. From strategic planning to implementation, we provide expert guidance to ensure your IT infrastructure supports your business goals"},
        {services:"IT Services:",src:"https://cheekymunkey.co.uk/wp-content/uploads/2017/11/Business-IT-pic-1.jpg",des:"We offer a wide range of IT services to support your business operations. From network management to cybersecurity, our services are designed to keep your IT systems running smoothly and securely."},{
            services:"Data Science:",src:"https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",des:"“Unlock the power of your data with our data science services. From data analysis to predictive modeling, we help you turn raw data into actionable insights that drive informed decision-making"}]
  return (
    <div className='containor'>
        <CardComp services={data[0].services} src={data[0].src} des={data[0].des} ></CardComp>
        <CardComp services={data[1].services} src={data[1].src} des={data[1].des} ></CardComp>
        <CardComp services={data[2].services} src={data[2].src} des={data[2].des} ></CardComp>
        <CardComp services={data[3].services} src={data[3].src} des={data[3].des} ></CardComp>
        <CardComp services="web development" src="https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E" des="“Our web development services are tailored to your specific requirements, ensuring that your online presence reflects your brand identity and values. Whether you need a custom website or an e-commerce platform, we have the expertise to bring your vision to life."></CardComp>
        <CardComp services="web development" src="https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E" des="“Our web development services are tailored to your specific requirements, ensuring that your online presence reflects your brand identity and values. Whether you need a custom website or an e-commerce platform, we have the expertise to bring your vision to life."></CardComp>
    </div>
  )
}

export default PageCard