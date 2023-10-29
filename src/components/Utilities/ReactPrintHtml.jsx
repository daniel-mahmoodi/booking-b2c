import React from "react";
import Html from "react-pdf-html";
import { Document, Page } from "react-pdf";

const ReactPrintHtml = () => {
  const html = `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
      rel="stylesheet"
      type="text/css"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: Vazirmatn, sans-serif;
      }
      @media screen and (max-width: 700px) {
        .resp-header {
          flex-direction: column;
          align-items: center;
        }
        .resp-header .item2 {
          width: 100% !important;
        }
      }

      @media screen and (max-width: 500px) {
        .resp-header .details > div {
          width: 100% !important;
        }
      }
      @media screen and (max-width: 700px) {
        .descriptions > div {
          width: 100% !important;
        }
      }
      @media screen and (max-width: 700px) {
        .ticket > div {
          width: 100% !important;
        }

        .ticket > div:last-child img {
          max-width: 200px;
          margin: 10px 0;
        }
      }

      @media screen and (max-width: 500px) {
        .ticket > div:first-child > div {
          width: 100% !important;
        }
      }

      @media screen and (max-width: 700px) {
        .mohr > div {
          width: 100% !important;
        }
      }
    </style>
  </head>
  <body dir="rtl">
    <div style="max-width: 1000px; margin: 10px auto; padding: 0 10px">
     
      <div style="display: flex; flex-wrap: wrap" class="descriptions">
        <div style="width: 50%">
          <h2 style="font-size: 16px; color: darkblue">
            <img
              src="information-circle-outline.svg"
              alt=""
              style="width: 20px; position: relative; top: 5px"
            />
            توضیحات
          </h2>
          <p style="font-size: 14px; color: gray">این یک متن تستی است</p>
        </div>
        <div style="width: 50%">
          <h2 style="font-size: 16px; color: darkblue">
            <img
              src="shield-half-outline.svg"
              alt=""
              style="width: 20px; position: relative; top: 5px"
            />
            قوانین برنامه
          </h2>
          <p style="font-size: 14px; color: gray">این یک متن تستی است</p>
        </div>
      </div>
      <div style="margin-top: 10px">
        <style>
          .item::after {
            content: "";
            background-color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: block;
            position: absolute;
            top: calc(50% - 20px);
            left: -20px;
            border: 1px solid gray;
            z-index: 1;
          }
          .item::before {
            content: "";
            background-color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: block;
            position: absolute;
            top: calc(50% - 20px);
            right: -20px;
            border: 1px solid gray;
            z-index: 1;
          }
        </style>
        <div style="overflow: hidden">
          <div
            style="
              border: 1px solid gray;
              border-radius: 20px;
              background-color: rgb(243, 241, 241);
              position: relative;
              display: flex;
              flex-wrap: wrap;
            "
            class="item ticket"
          >
            <div
              style="
                width: calc(100% - 200px);
                padding: 0 30px;
                display: flex;
                flex-wrap: wrap;
                margin-top: 10px;
              "
            >
              <div
                style="
                  width: 50%;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  margin-bottom: 10px;
                "
              >
                <img
                  src="person-outline.svg"
                  alt=""
                  style="width: 20px; position: relative; top: -4px; left: 4px"
                />
                <span style="font-size: 16px; color: darkblue">نام مشتری:</span>
                <span style="font-size: 14px; margin-right: 4px; color: gray">شریعتمداری</span>
              </div>
              <div
                style="
                  width: 50%;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  margin-bottom: 10px;
                "
              >
                <img
                  src="phone-portrait-outline.svg"
                  alt=""
                  style="width: 20px; position: relative; top: -4px; left: 4px"
                />
                <span style="font-size: 16px; color: darkblue">تلفن همراه:</span>
                <span style="font-size: 14px; margin-right: 4px; color: gray">۰۹۱۰۰۹۶۶۶۸۸</span>
              </div>
              <div
                style="
                  width: 50%;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  margin-bottom: 10px;
                "
              >
                <img
                  src="calendar-outline.svg"
                  alt=""
                  style="width: 20px; position: relative; top: -4px; left: 4px"
                />
                <span style="font-size: 16px; color: darkblue">تاریخ اجرا:</span>
                <span style="font-size: 14px; margin-right: 4px; color: gray">۱۴۰۲/۰۷/۰۸</span>
              </div>
              <div
                style="
                  width: 50%;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  margin-bottom: 10px;
                "
              >
                <img
                  src="calendar-outline.svg"
                  alt=""
                  style="width: 20px; position: relative; top: -4px; left: 4px"
                />
                <span style="font-size: 16px; color: darkblue">زمان اجرا:</span>
                <span style="font-size: 14px; margin-right: 4px; color: gray">۲۱:۳۰ - ۲۲:۳۰</span>
              </div>
              <div
                style="
                  width: 50%;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  margin-bottom: 10px;
                "
              >
                <img
                  src="calendar-outline.svg"
                  alt=""
                  style="width: 20px; position: relative; top: -4px; left: 4px"
                />
                <span style="font-size: 16px; color: darkblue">تاریخ صدور:</span>
                <span style="font-size: 14px; margin-right: 4px; color: gray">۱۴۰۲/۰۷/۰۸</span>
              </div>
              <div
                style="
                  width: 50%;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  margin-bottom: 10px;
                "
              >
                <img
                  src="cart-outline.svg"
                  alt=""
                  style="width: 20px; position: relative; top: -4px; left: 4px"
                />
                <span style="font-size: 16px; color: darkblue">رفرنس:</span>
                <span style="font-size: 14px; margin-right: 4px; color: gray">۲۱:۳۰ - ۲۲:۳۰</span>
              </div>
            </div>
            <div
              style="
                background-color: white;
                width: 200px;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <img src="qr_code.png" alt="" style="display: inline-block; width: 80%" />
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 10px; display: flex; flex-wrap: wrap" class="mohr">
        <div
          style="
            background-color: rgb(241, 241, 241);
            width: 50%;
            height: 90px;
            border: 1px solid gray;
          "
        ></div>
        <div
          style="
            background-color: rgb(241, 241, 241);
            width: 50%;
            height: 90px;
            border: 1px solid gray;
          "
        ></div>
      </div>
      <div style="margin-top: 10px">
        <p>
          <img src="home-outline.svg" alt="" style="width: 20px; position: relative; top: 4px" />
          <span style="font-size: 16px; color: darkblue">صادر شده توسط: </span>
          <span style="color: rgb(119, 119, 119); font-size: 14px"
            >شرکت خدمات گردشگری و مسافرتی توشه آفرین کیش</span
          >
        </p>
        <p>
          <img src="person-outline.svg" alt="" style="width: 20px; position: relative; top: 4px" />
          <span style="font-size: 16px; color: darkblue">متصدی صدور: </span>
          <span style="color: rgb(119, 119, 119); font-size: 14px">شخص تستی</span>
        </p>
        <p>
          <img
            src="location-outline.svg"
            alt=""
            style="width: 20px; position: relative; top: 4px"
          />
          <span style="font-size: 16px; color: darkblue">آدرس: </span>
          <span style="color: rgb(119, 119, 119); font-size: 14px">کیش</span>
        </p>
        <p>
          <img src="call-outline.svg" alt="" style="width: 20px; position: relative; top: 4px" />
          <span style="font-size: 16px; color: darkblue">تلفن پشتیبانی: </span>
          <span style="color: rgb(119, 119, 119); font-size: 14px">۰۹۱۰۰۹۶۶۶۸۸</span>
        </p>
        <p style="text-align: center">برنامه <span>۱</span> صفحه <span>۱</span></p>
      </div>
    </div>
  </body>
</html>
     `;

  return (
    <Document>
      <Page>
        <Html>{html}</Html>
      </Page>
    </Document>
  );
};

export default ReactPrintHtml;
