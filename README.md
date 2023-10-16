<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/matfaisall/ankasa-ticket" target="_blank">
    <img src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460788/ankasa-ticket/logo-ticket_ptrqwr.png" alt="Ankasa Ticket" width="150px">
  </a>

  <h3 align="center">Ankasa Ticket</h3>

  <p align="center">
    <a href="https://ankasa-ticket.vercel.app/" target="_blank">Demo Web</a>
    -
    <a href="https://github.com/matfaisall/ankasa-ticket/issues" target="_blank">Report Bug</a>
    -
    <a href="https://github.com/matfaisall/ankasa-ticket/issues" target="_blank">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About Us</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#tryapps">Try This Application</a></li>
      </ul>
    </li>
    <li><a href="#screenshoots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**Ankasa Ticket** is a web application that enables users to book airplane tickets with multiple domestic and international airlines.

### Built With

This app was built with some technologies below:

- [Next JS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node JS](https://nodejs.org/en)
- [React Barcode](https://www.npmjs.com/package/react-barcode)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Axios](https://axios-http.com/docs/intro)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

- [NodeJs v18.00^](https://nodejs.org/en/download/)


### Installation

If you want to run this project locally, I recommend you to configure the [back-end](https://github.com/matfaisall/bookflight) first before configuring this repo front-end.

- Clone the repo

```
git clone https://github.com/matfaisall/ankasa-ticket.git
```

- Go to repo

```
cd ankasa-ticket
```

- Install module

```
npm install
```

- Setup .env
```
NEXT_PUBLIC_FLIGHT_API=[URL_API]
```

- Type `npm run dev` To Start the local web

## Try Our Web Application
<a href="https://ankasa-ticket.vercel.app/" target="_blank">Launch to our App</a>

If you want to try our web application, you can use the following account :

Login
```
email     : ankasa@gmail.com
password  : Ankasa10!
```

## Screenshoots

<p align="center" display=flex>
<!-- table for register recruiter and register worker -->
<table>
<tr>
  <td align='center'><b>Login Ankasa Ticket</b></td>
  <td align='center'><b>Register Ankasa Ticket</b></td>
</tr>
<tr>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460790/ankasa-ticket/login_s802iv.png" alt="Login Ankasa Ticket" width=100%>
  </td>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460790/ankasa-ticket/register_dehwt4.png" alt="Register Ankasa Ticket" width=100%>
  </td>
</tr>
</table>

<!-- table for landing page and edit profile worker -->
<table>
<tr>
  <td align='center'><b>Landing Page</b></td>
  <td align='center'><b>Search Ticket</b></td>
</tr>
<tr>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697462431/ankasa-ticket/landing-page_racxit.png" alt="Landing page" width=100%>
  </td>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460791/ankasa-ticket/search-ticket_xgtw7s.png" alt="Search Ticket" width=100%>
  </td>
</tr>
</table>


<!-- table for hire talent and detail talent -->
<table>
<tr>
  <td align='center'><b>Form Passanger</b></td>
  <td align='center'><b>Pay The Ticket</b></td>
</tr>
<tr>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460792/ankasa-ticket/form_passanger_ume3yz.png" alt="Form Passanger" width=100%>
  </td>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460791/ankasa-ticket/pay_the_ticket_ohjkce.png" alt="Pay The Ticket" width=100%>
  </td>
</tr>
</table>

<!--  -->
<table>
<tr>
  <td align='center'><b>Change Status Ticket</b></td>
  <td align='center'><b>Booking Pass</b></td>
</tr>
<tr>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460790/ankasa-ticket/change_status_ticket_hj0tm5.png" alt="Change Status Ticket" width=100%>
  </td>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460790/ankasa-ticket/bookingpass_p8ucjf.png" alt="Booking Pass" width=100%>
  </td>
</tr>
</table>

<table>
<tr>
  <td align='center'><b>Profile</b></td>
</tr>
<tr>
  <td>
    <image src="https://res.cloudinary.com/dmx0spvee/image/upload/v1697460789/ankasa-ticket/profile_njjwcv.png" alt="Profile Page" width=100%>
  </td>
</tr>
</table>

<!-- end screenshoots -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Add your Changes (`git add .`)
4. Commit your Changes (`git commit -m 'Add some NewFeature'`)
5. Push to the Branch (`git push origin feature/NewFeature`)
6. Open a Pull Request on Github


## Related Project

:books: [`Backend Ankasa Ticket`](https://github.com/matfaisall/bookflight)

:books: [`Frontend Ankasa Ticket`](https://github.com/matfaisall/ankasa-ticket)

:globe_with_meridians: [`Web Service`]()

:computer: [`Demo Ankasa Ticket`](https://ankasa-ticket.vercel.app/)


## Contact

<p>Contributors names and contact info</p>

* AUTHOR
  
<table>
  <tr >
    <td align="left">
      <a href="https://github.com/matfaisall">
          <img width="100" src="https://avatars.githubusercontent.com/u/88364541?v=4" alt="Muhammad Faisal"> <br/>
          <sub><b>Muhammad Faisal</b></sub> <br/>
          <sub>Lead Frontend | Frontend Web Developer</sub>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.linkedin.com/in/matfaisall/" target="_blank">[LinkedIn Account]</a>
    </td>
  </tr>
</table>


## License

Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">Back to Top</a>)</p>