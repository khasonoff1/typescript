import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import useAuth from "../../zustand/auth";
import Universal from "../../types/universal";
import "./login.scss";
import Loader from "../../components/Shared/Loader";

const LoginPage = () => {
  const navigate = useNavigate();

  const { handleSubmit } = useForm<Universal>({
    mode: "onTouched",
  });

  const { login, loading } = useAuth();

  const submit = (values: object) => {
    login(values, navigate);
  };
  return (
    <Fragment>
      {loading ? <Loader /> : null}
      <div className="loginpage">
        <div className="loginpage__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="370"
            height="424"
            fill="none"
          >
            <path
              fill="url(#login_img_svg__a)"
              d="m145.819 177.111 105.146-60.846c9.413-5.46 21.207 1.348 21.207 12.198v212.002a24.026 24.026 0 0 1-12.042 20.849l-105.146 60.775c-9.414 5.425-21.172-1.348-21.172-12.198V197.96c-.035-8.581 4.547-16.523 12.007-20.849Z"
            ></path>
            <path
              fill="#000"
              d="m237.75 109.139-9.839-5.673 7.637-15.353c-1.35-1.915-2.38-4.149-3.055-6.666l-12.148 5.46V71.093l12.042-8.475c.71-3.474 1.776-7.02 3.161-10.566l-7.602-6.56 9.556-16.488 9.484 3.298c2.38-2.978 4.938-5.673 7.602-8.013l1.314-14.644 13.712-7.908 1.314 13.226c2.558-.673 5.009-.886 7.318-.673L287.766 0l9.839 5.673-7.637 15.353c1.35 1.915 2.38 4.149 3.055 6.666l12.149-5.46v15.814l-12.042 8.475c-.711 3.439-1.776 7.02-3.162 10.566l7.602 6.56-9.556 16.488-9.484-3.298c-2.38 2.978-4.938 5.673-7.602 8.013l-1.314 14.645-13.712 7.907-1.314-13.226c-2.558.674-5.009.886-7.318.674l-9.52 14.289Zm-8.916-5.957 8.668 5 9.378-14.077.213.035c2.415.249 5.008 0 7.708-.744l.391-.107 1.314 12.978 12.433-7.162 1.314-14.574.107-.106c2.7-2.376 5.328-5.141 7.779-8.19l.142-.213 9.414 3.262 8.951-15.496-7.53-6.488.106-.248c1.421-3.653 2.522-7.305 3.233-10.815l.035-.142 11.971-8.439v-14.36l-11.9 5.354-.106-.39c-.711-2.695-1.776-5.07-3.197-7.02l-.142-.178 7.53-15.14-8.667-5-9.378 14.077-.213-.036c-2.416-.248-5.009 0-7.673.745l-.391.106-1.314-12.977-12.433 7.162-1.314 14.573-.107.107c-2.699 2.375-5.328 5.141-7.779 8.19l-.142.213-9.414-3.262-8.951 15.495 7.531 6.489-.107.248c-1.421 3.652-2.522 7.304-3.232 10.815l-.036.141-11.971 8.44v14.36l11.9-5.354.107.39c.71 2.695 1.776 5.07 3.197 7.02l.142.178-7.567 15.14Zm25.79-24.82c-1.777 0-3.446-.426-4.903-1.277-3.552-2.056-5.506-6.311-5.506-12.055 0-11.666 8.242-25.885 18.366-31.735 4.973-2.872 9.662-3.298 13.214-1.277 3.552 2.021 5.506 6.312 5.506 12.056 0 11.666-8.241 25.884-18.365 31.735-2.949 1.702-5.755 2.553-8.312 2.553Zm16.233-46.875c-2.415 0-5.115.815-7.921 2.446-9.911 5.709-18.01 19.68-18.01 31.096 0 5.461 1.812 9.539 5.151 11.453 3.303 1.915 7.744 1.454 12.504-1.276 9.91-5.709 18.009-19.68 18.009-31.097 0-5.46-1.811-9.538-5.15-11.452-1.386-.78-2.913-1.17-4.583-1.17ZM295.829 163.211l-9.839-5.673 7.637-15.353c-1.35-1.915-2.38-4.149-3.055-6.666l-12.149 5.46v-15.814l12.042-8.474c.711-3.475 1.777-7.021 3.162-10.567l-7.602-6.56 9.556-16.487 9.484 3.297c2.38-2.978 4.938-5.673 7.602-8.013l1.314-14.644 13.712-7.907 1.314 13.225c2.558-.673 5.009-.886 7.318-.673l9.52-14.29 9.839 5.673-7.637 15.354c1.35 1.914 2.38 4.148 3.055 6.666l12.149-5.46v15.813l-12.043 8.475a62.395 62.395 0 0 1-3.161 10.566l7.602 6.56-9.556 16.488-9.484-3.298c-2.416 2.979-4.938 5.674-7.602 8.014l-1.314 14.644-13.712 7.907-1.314-13.226c-2.558.674-5.009.887-7.318.674l-9.52 14.289Zm-8.88-5.957 8.667 5 9.378-14.077.213.036c2.416.248 5.009 0 7.708-.745l.391-.106 1.315 12.977 12.432-7.162 1.315-14.573.106-.107c2.7-2.375 5.329-5.141 7.78-8.191l.142-.212 9.413 3.262 8.952-15.495-7.531-6.489.107-.248c1.42-3.652 2.522-7.304 3.232-10.815l.036-.142 11.971-8.439v-14.36l-11.9 5.354-.107-.39c-.71-2.695-1.776-5.07-3.197-7.02l-.142-.178 7.531-15.14-8.668-5-9.378 14.077-.213-.035c-2.415-.249-5.008 0-7.673.744l-.39.106-1.315-12.977-12.432 7.162-1.315 14.573-.106.107c-2.7 2.376-5.329 5.141-7.78 8.19l-.142.213-9.413-3.262-8.952 15.495 7.531 6.489-.107.248c-1.421 3.652-2.522 7.305-3.232 10.815l-.036.142-11.971 8.439v14.36l11.865-5.354.106.39c.711 2.695 1.776 5.07 3.197 7.021l.142.177-7.53 15.14Zm25.789-24.82c-1.776 0-3.446-.426-4.902-1.277-3.552-2.056-5.506-6.311-5.506-12.055 0-11.666 8.241-25.884 18.365-31.735 4.973-2.872 9.662-3.297 13.214-1.276 3.552 2.056 5.506 6.311 5.506 12.055 0 11.666-8.241 25.884-18.365 31.735-2.948 1.702-5.755 2.553-8.312 2.553Zm16.234-46.875c-2.416 0-5.116.815-7.922 2.446-9.911 5.71-18.01 19.679-18.01 31.097 0 5.46 1.812 9.538 5.151 11.453 3.304 1.914 7.744 1.453 12.504-1.277 9.911-5.708 18.01-19.679 18.01-31.096 0-5.46-1.812-9.538-5.151-11.453-1.385-.78-2.913-1.17-4.582-1.17Z"
            ></path>
            <path
              fill="#AF99C9"
              d="M311.921 41.415v-15.07l-12.007 5.426c-.71-2.802-1.847-5.177-3.232-7.127l7.566-15.247-9.236-5.319-9.449 14.183c-2.415-.248-5.044 0-7.815.78l-1.314-13.084-13.072 7.553-1.314 14.609a64.185 64.185 0 0 0-7.815 8.261l-9.449-3.297-9.236 15.991 7.566 6.524c-1.421 3.617-2.522 7.27-3.232 10.886l-12.007 8.439v15.07l12.007-5.426c.71 2.801 1.811 5.177 3.232 7.127l-7.566 15.247 9.236 5.319 9.449-14.183c2.415.248 5.044 0 7.815-.78l1.314 13.084 13.072-7.553 1.314-14.609a64.185 64.185 0 0 0 7.815-8.261l9.449 3.297 9.236-15.991-7.566-6.524c1.421-3.617 2.522-7.27 3.232-10.886l12.007-8.439Zm-42.058 37.656c-10.053 5.78-18.188 1.1-18.188-10.46 0-11.559 8.135-25.636 18.188-31.415 10.052-5.78 18.187-1.1 18.187 10.46-.036 11.559-8.17 25.636-18.187 31.415ZM370 95.525v-15.07l-12.007 5.425c-.71-2.801-1.847-5.177-3.232-7.127l7.566-15.247-9.236-5.319-9.449 14.184c-2.415-.249-5.044 0-7.815.78l-1.314-13.084-13.072 7.552-1.315 14.609a64.253 64.253 0 0 0-7.814 8.262l-9.449-3.298-9.236 15.991 7.566 6.525c-1.421 3.616-2.522 7.268-3.232 10.885l-12.007 8.439v15.07l12.007-5.425c.71 2.801 1.811 5.176 3.232 7.127l-7.566 15.246 9.236 5.319 9.449-14.183c2.415.248 5.044 0 7.814-.78l1.315 13.084 13.072-7.553 1.314-14.608a64.175 64.175 0 0 0 7.815-8.262l9.449 3.298 9.236-15.992-7.566-6.524c1.421-3.617 2.522-7.269 3.232-10.886L370 95.525Zm-42.059 37.656c-10.052 5.779-18.187 1.099-18.187-10.46 0-11.56 8.135-25.636 18.187-31.416 10.053-5.78 18.188-1.1 18.188 10.46 0 11.559-8.135 25.601-18.188 31.416Z"
            ></path>
            <path
              fill="#fff"
              d="M202.974 164.843c14.564-8.403 26.358-1.595 26.358 15.176 0 16.772-11.794 37.196-26.358 45.564-14.564 8.403-26.357 1.595-26.357-15.176 0-16.772 11.793-37.16 26.357-45.564Z"
            ></path>
            <path
              fill="#00DFBF"
              d="M202.974 178.069c4.725-2.73 8.561-.532 8.561 4.929 0 5.46-3.836 12.055-8.561 14.786-4.724 2.73-8.561.531-8.561-4.929 0-5.461 3.837-12.056 8.561-14.786Z"
            ></path>
            <path
              fill="#000"
              d="M202.974 178.069c4.725-2.73 8.561-.532 8.561 4.929 0 5.46-3.836 12.055-8.561 14.786-4.724 2.73-8.561.531-8.561-4.929 0-5.461 3.837-12.056 8.561-14.786ZM219.634 207.073c0-8.935-6.287-12.552-14.067-8.084l-4.866 2.801c-7.744 4.468-14.067 15.353-14.067 24.289v2.411c4.476 1.489 10.124.673 16.269-2.872 6.323-3.652 12.113-9.574 16.66-16.453v-2.092h.071Z"
            ></path>
            <path
              fill="#00DFBF"
              d="m151.964 262.637 33.924-19.538c1.563-.886 2.806-.177 2.806 1.632v1.134c0 1.773-1.243 3.971-2.806 4.858l-33.924 19.537c-1.563.887-2.806.177-2.806-1.631v-1.135c0-1.808 1.243-3.971 2.806-4.857Z"
            ></path>
            <path
              fill="#fff"
              d="m151.964 262.637 33.924-19.538c1.563-.886 2.806-.177 2.806 1.632v1.134c0 1.773-1.243 3.971-2.806 4.858l-33.924 19.537c-1.563.887-2.806.177-2.806-1.631v-1.135c0-1.808 1.243-3.971 2.806-4.857Z"
            ></path>
            <path
              fill="#00DFBF"
              d="m150.543 286.216 102.624-59.144c.782-.461 1.421-.071 1.421.815v11.95c0 .886-.639 1.985-1.421 2.446l-102.624 59.144c-.781.461-1.42.071-1.42-.816v-11.949c.035-.922.639-1.986 1.42-2.446Z"
            ></path>
            <path
              fill="#fff"
              d="m150.543 286.216 102.624-59.144c.782-.461 1.421-.071 1.421.815v11.95c0 .886-.639 1.985-1.421 2.446l-102.624 59.144c-.781.461-1.42.071-1.42-.816v-11.949c.035-.922.639-1.986 1.42-2.446Z"
            ></path>
            <path
              fill="#00DFBF"
              d="m151.964 315.787 33.924-19.537c1.563-.887 2.806-.177 2.806 1.631v1.135c0 1.773-1.243 3.971-2.806 4.857l-33.924 19.538c-1.563.886-2.806.177-2.806-1.632v-1.134c0-1.773 1.243-3.971 2.806-4.858Z"
            ></path>
            <path
              fill="#fff"
              d="m151.964 315.787 33.924-19.537c1.563-.887 2.806-.177 2.806 1.631v1.135c0 1.773-1.243 3.971-2.806 4.857l-33.924 19.538c-1.563.886-2.806.177-2.806-1.632v-1.134c0-1.773 1.243-3.971 2.806-4.858Z"
            ></path>
            <path
              fill="#00DFBF"
              d="m150.543 339.401 102.624-59.144c.782-.46 1.421-.07 1.421.816v11.949c0 .887-.639 1.986-1.421 2.447l-102.624 59.143c-.781.461-1.42.071-1.42-.815v-11.949c.035-.922.639-2.021 1.42-2.447Z"
            ></path>
            <path
              fill="#fff"
              d="m150.543 339.401 102.624-59.144c.782-.46 1.421-.07 1.421.816v11.949c0 .887-.639 1.986-1.421 2.447l-102.624 59.143c-.781.461-1.42.071-1.42-.815v-11.949c.035-.922.639-2.021 1.42-2.447ZM191.501 360.358l40.495-23.331c1.563-.886 2.806-.177 2.806 1.631v12.517c0 1.773-1.243 3.971-2.806 4.858l-40.495 23.331c-1.563.886-2.807.177-2.807-1.631v-12.517c0-1.773 1.244-3.971 2.807-4.858Z"
            ></path>
            <path
              fill="#000"
              d="M8.596 258.735c-1.527 0-2.912-.354-4.156-1.064C1.598 256.04 0 252.743 0 248.488c0-8.155 5.648-17.8 12.859-21.948l128.306-73.965c3.872-2.234 7.638-2.553 10.586-.851 2.842 1.631 4.44 4.928 4.44 9.183 0 8.155-5.648 17.8-12.859 21.949L15.026 256.82c-2.238 1.277-4.405 1.915-6.43 1.915ZM147.63 151.334c-1.882 0-3.942.602-6.074 1.843L13.25 227.142C6.216 231.184.746 240.545.746 248.488c0 4.007 1.456 7.056 4.085 8.581a7.69 7.69 0 0 0 3.8.993c1.919 0 3.944-.603 6.075-1.844l128.307-73.965c7.033-4.042 12.503-13.403 12.503-21.346 0-4.007-1.456-7.056-4.085-8.581a7.685 7.685 0 0 0-3.801-.992ZM8.596 191.614c-1.527 0-2.912-.354-4.156-1.064-2.842-1.631-4.44-4.928-4.44-9.183 0-8.155 5.648-17.8 12.859-21.949l128.306-73.965c3.872-2.233 7.638-2.552 10.586-.85 2.842 1.63 4.44 4.928 4.44 9.183 0 8.155-5.648 17.8-12.859 21.948l-128.306 73.93c-2.238 1.276-4.405 1.95-6.43 1.95ZM147.631 84.213c-1.883 0-3.943.602-6.075 1.843L13.25 159.986C6.216 164.028.746 173.389.746 181.331c0 4.007 1.456 7.056 4.085 8.581a7.69 7.69 0 0 0 3.8.993c1.92 0 3.944-.603 6.075-1.844l128.307-73.965c7.033-4.042 12.503-13.403 12.503-21.345 0-4.007-1.456-7.056-4.085-8.581-1.136-.638-2.415-.957-3.8-.957Z"
            ></path>
            <path
              fill="#C3E0A0"
              d="M158.713 155.553c-2.806-1.632-6.429-1.312-10.23.851L20.177 230.368c-7.105 4.114-12.682 13.616-12.682 21.63 0 4.148 1.528 7.304 4.263 8.9a8.017 8.017 0 0 0 3.978 1.028c1.954 0 4.085-.638 6.252-1.879l128.307-73.965c7.104-4.113 12.681-13.616 12.681-21.63 0-4.148-1.527-7.304-4.263-8.899ZM11.722 193.776a8.008 8.008 0 0 0 3.979 1.029c1.953 0 4.085-.638 6.252-1.88l128.306-73.964c7.105-4.114 12.682-13.616 12.682-21.63 0-4.148-1.528-7.304-4.263-8.9-2.806-1.63-6.43-1.311-10.231.851l-128.27 73.93c-7.105 4.113-12.682 13.616-12.682 21.629 0 4.184 1.492 7.34 4.227 8.935Z"
            ></path>
            <path
              fill="#fff"
              d="M143.545 174.629c0 2.837 2.061 3.972 4.583 2.518 2.522-1.454 4.582-4.929 4.582-7.765 0-2.837-2.06-3.972-4.582-2.518-2.522 1.454-4.583 4.929-4.583 7.765ZM129.195 182.891c0 2.837 2.06 3.971 4.546 2.518 2.522-1.454 4.583-4.929 4.583-7.766 0-2.836-2.061-3.971-4.583-2.517-2.486 1.454-4.546 4.928-4.546 7.765ZM114.843 191.153c0 2.836 2.061 3.971 4.583 2.517 2.522-1.454 4.582-4.928 4.582-7.765 0-2.837-2.06-3.971-4.582-2.518-2.522 1.454-4.583 4.929-4.583 7.766ZM100.492 199.45c0 2.836 2.061 3.971 4.547 2.517 2.522-1.454 4.583-4.929 4.583-7.765 0-2.837-2.061-3.971-4.583-2.518-2.522 1.454-4.547 4.929-4.547 7.766ZM86.141 207.711c0 2.837 2.06 3.972 4.583 2.518 2.522-1.454 4.582-4.929 4.582-7.765 0-2.837-2.06-3.972-4.582-2.518-2.558 1.454-4.583 4.929-4.583 7.765ZM71.79 216.008c0 2.837 2.06 3.971 4.583 2.518 2.522-1.454 4.547-4.929 4.547-7.766 0-2.836-2.06-3.971-4.547-2.517-2.558 1.418-4.583 4.893-4.583 7.765ZM118.183 123.641c0 .603.284.745.888.39l.639-.355.284 1.702c-.177.213-.461.461-.852.745-.391.284-.746.532-1.03.674-.711.39-1.244.496-1.67.319-.391-.213-.604-.674-.604-1.454v-10.354l2.345-1.347v9.68ZM127.099 112.79c.568-.035.994.248 1.279.745.248.532.39 1.383.39 2.517 0 1.135-.142 2.128-.39 2.979a5.52 5.52 0 0 1-1.279 2.198c-.569.638-1.386 1.241-2.38 1.808-.995.568-1.776.851-2.38.887-.569.035-.995-.213-1.279-.745-.284-.532-.391-1.347-.391-2.517 0-1.135.142-2.128.391-2.979a5.285 5.285 0 0 1 1.279-2.198c.568-.638 1.385-1.241 2.38-1.808 1.03-.568 1.811-.851 2.38-.887Zm-3.339 3.652a2.43 2.43 0 0 0-.462 1.064c-.107.425-.142 1.028-.142 1.737 0 .71.035 1.241.142 1.561.106.319.249.496.462.531.213.036.533-.071.959-.319.426-.248.746-.496.959-.78.213-.283.391-.638.462-1.064.106-.425.142-.992.142-1.737 0-.745-.036-1.276-.142-1.596-.107-.319-.249-.496-.462-.531-.213-.036-.533.071-.959.319-.391.283-.711.532-.959.815ZM138.359 107.366l-.959.709c.107.248.178.638.178 1.17 0 .709-.107 1.312-.355 1.844a4.612 4.612 0 0 1-1.173 1.56c-.532.496-1.278.993-2.202 1.525-.462.283-.924.496-1.385.709a1.092 1.092 0 0 0-.107.461c0 .177.036.283.142.354.107.071.249.071.426-.035l2.842-1.241c.817-.355 1.386-.426 1.741-.213.355.213.533.745.533 1.56 0 .78-.142 1.419-.391 1.986a4.78 4.78 0 0 1-1.279 1.595c-.568.497-1.421 1.029-2.451 1.632-1.101.638-1.954 1.028-2.522 1.205-.604.177-1.03.142-1.243-.106-.249-.248-.356-.709-.356-1.383 0-.461.107-.887.285-1.277.177-.39.497-.851.959-1.347-.284-.142-.462-.461-.462-.957 0-.284.071-.639.178-.993.106-.355.284-.674.532-.922-.39 0-.71-.106-.888-.39-.177-.284-.284-.709-.284-1.312 0-.709.107-1.347.355-1.879a4.612 4.612 0 0 1 1.173-1.56c.532-.497 1.278-1.029 2.202-1.561.888-.496 1.599-.815 2.096-.922l2.522-1.418-.107 1.206Zm-2.628 9.183c-.071-.071-.178-.071-.356 0-.177.036-.426.178-.817.319l-1.989.887a5.337 5.337 0 0 0-.391.709 1.8 1.8 0 0 0-.106.603c0 .283.035.496.142.567.107.071.284.071.533-.035a9.578 9.578 0 0 0 1.172-.603c.533-.319.959-.567 1.208-.745.248-.212.426-.39.533-.603a1.5 1.5 0 0 0 .177-.709c0-.177-.035-.319-.106-.39Zm-.675-4.999c.213-.284.319-.639.319-1.099 0-.461-.106-.674-.319-.71-.213-.035-.604.107-1.208.461-.568.319-.995.639-1.208.922-.213.284-.319.638-.319 1.099 0 .426.106.674.319.71.213.035.604-.107 1.208-.426.568-.354.959-.638 1.208-.957ZM142.089 100.912v.957c0 .532-.213.887-.675 1.17l-1.066.603c-.461.248-.674.142-.674-.39v-.957c0-.532.213-.887.674-1.17l1.066-.603c.462-.248.675-.142.675.39Zm-.036 12.02-2.344 1.348v-8.865l2.344-1.347v8.864ZM151.147 99.28c.391.214.569.71.569 1.526v6.666l-2.345 1.347v-5.851c0-.39-.071-.638-.177-.709-.107-.071-.32-.035-.604.107-.32.177-.64.425-.959.744-.32.319-.746.745-1.244 1.348v6.063l-2.38 1.347v-8.864l1.919-1.099.177 1.205c1.137-1.702 2.238-2.836 3.375-3.475.746-.46 1.279-.567 1.669-.354ZM18.152 177.963c0-.709.462-1.525 1.101-2.021.036-.036.284-.178.675-.426v-2.588c0-1.17.96-2.66 2.131-3.333.604-.355.427-.249 1.03-.603 1.208-.674 2.096-.248 2.096.886v2.589c.249-.142.427-.248.462-.248.817-.461 1.279-.036 1.314.531v5.603c-.142 1.808-1.456 3.9-3.09 4.999-.249.178-1.954 1.135-1.99 1.17-.568.319-1.03.568-1.633.639-.888.106-1.563-.284-1.883-1.029-.213-.496-.213-.957-.177-1.418-.036-.071-.036-4.716-.036-4.751Zm6.465-7.73c0-.851-.746-1.064-1.563-.603-.604.355-.426.248-1.03.603-.853.496-1.563 1.56-1.563 2.411v2.588c.07-.035.142-.106.248-.141 1.208-.71 2.878-1.667 3.908-2.27v-2.588Zm-5.932 12.233c0 .425 0 .815.142 1.205.248.639.817.958 1.563.851.746-.071 1.35-.496 2.7-1.312.355-.212.497-.283.674-.39 1.386-.922 2.451-2.694 2.594-4.184.035-.248.035-5.212 0-5.496-.036-.354-.32-.531-.782-.283 0 0-.178.106-.426.248-3.766 2.163-3.872 2.234-4.973 2.872-.462.284-.817.461-.888.532-.285.213-.64.674-.64 1.135.036.177.036 4.538.036 4.822Z"
            ></path>
            <path
              fill="#fff"
              d="M21.456 178.351c.106-.39.355-.78.639-1.028.178-.142.213-.142.568-.354.071-.036.142-.071.178-.107.355-.177.64-.142.781.142.107.177.107.355.072.532l-.285.142.285-.071v1.525c0 .496-.285 1.063-.675 1.418-.143.106-.214.177-.356.248-.142.071-.213.106-.32.177-.426.249-.71.178-.887-.106-.072-.177-.072-.248-.072-.816 0-1.347 0-1.382.072-1.702Zm.532 1.986c.107.248.356.036.64-.106.177-.107.213-.107.284-.178a.754.754 0 0 0 .284-.602v-1.525c0-.213 0-.284-.035-.39-.036-.071-.143-.177-.32-.071-.036.035-.107.036-.142.071-.32.213-.355.177-.426.248a.851.851 0 0 0-.25.426c-.035.106-.035.141-.035.319-.035 1.808-.07 1.737 0 1.808ZM18.152 245.582c0-.709.462-1.525 1.101-2.021.036-.036.284-.178.675-.426v-2.588c0-1.17.96-2.66 2.131-3.333.604-.355.427-.248 1.03-.603 1.208-.674 2.096-.248 2.096.886v2.589c.249-.142.427-.248.462-.248.817-.461 1.279-.036 1.314.532v5.602c-.142 1.808-1.456 3.9-3.09 4.999-.249.178-1.954 1.135-1.99 1.17-.568.32-1.03.568-1.633.639-.888.106-1.563-.284-1.883-1.029-.213-.496-.213-.957-.177-1.418-.036-.106-.036-4.751-.036-4.751Zm6.465-7.73c0-.851-.746-1.064-1.563-.603-.604.355-.426.248-1.03.603-.853.496-1.563 1.56-1.563 2.411v2.589c.07-.036.142-.107.248-.142 1.208-.709 2.878-1.667 3.908-2.27v-2.588Zm-5.932 12.233c0 .425 0 .815.142 1.206.248.638.817.957 1.563.85.746-.07 1.35-.496 2.7-1.311.355-.213.497-.284.674-.39 1.386-.922 2.451-2.695 2.594-4.185.035-.248.035-5.212 0-5.495-.036-.355-.32-.532-.782-.284 0 0-.178.106-.426.248-3.766 2.163-3.872 2.234-4.973 2.872-.462.284-.817.461-.888.532-.285.213-.64.674-.64 1.135.036.142.036 4.538.036 4.822Z"
            ></path>
            <path
              fill="#fff"
              d="M21.456 245.973c.106-.39.355-.78.639-1.029.178-.142.213-.142.568-.354.071-.036.142-.071.178-.107.355-.177.64-.141.781.142.107.177.107.355.072.532l-.285.142.285-.071v1.525c0 .496-.285 1.063-.675 1.418-.143.106-.214.177-.356.248a2.72 2.72 0 0 0-.32.177c-.426.249-.71.178-.887-.106-.072-.177-.072-.248-.072-.815 0-1.383 0-1.383.072-1.702Zm.532 1.985c.107.248.356.036.64-.106.177-.107.213-.107.284-.177a.758.758 0 0 0 .284-.603v-1.525c0-.213 0-.284-.035-.39-.036-.071-.143-.177-.32-.071-.036.036-.107.036-.142.071-.32.213-.355.177-.426.248a.851.851 0 0 0-.25.426c-.035.106-.035.142-.035.319-.035 1.808-.07 1.702 0 1.808Z"
            ></path>
            <path
              fill="#000"
              d="M280.804 414.715c-1.528 0-3.02-.39-4.405-1.206-2.771-1.595-4.405-4.432-4.405-7.623v-64.781c0-6.135 3.304-11.879 8.632-14.964l6.678-3.864V288.45c0-14.644 9.343-31.522 21.243-38.436 6.109-3.546 12.184-4.078 17.086-1.49 5.506 2.908 8.667 9.361 8.667 17.765v28.827l8.632-5c2.238-1.276 4.902-1.312 7.14 0 2.238 1.277 3.552 3.582 3.552 6.17v68.079c0 5.886-3.161 11.417-8.276 14.36l-60.104 34.749a8.42 8.42 0 0 1-4.44 1.241Zm38.151-167.042c-3.198 0-6.608.993-10.053 3.014-11.723 6.773-20.887 23.402-20.887 37.798v34.217l-7.034 4.078c-5.115 2.943-8.276 8.439-8.276 14.36v64.781c0 2.943 1.527 5.567 4.049 7.021 2.558 1.454 5.577 1.454 8.099 0l60.104-34.749a15.893 15.893 0 0 0 7.921-13.757v-68.079a6.426 6.426 0 0 0-3.197-5.567c-2.025-1.17-4.404-1.17-6.429 0l-.178-.319.178.319-9.698 5.602V266.36c0-8.12-3.019-14.361-8.277-17.127-1.918-1.063-4.049-1.56-6.322-1.56Zm-22.344 70.065v-29.997c0-11.063 7.353-24.644 16.092-29.714 1.705-.993 3.303-1.56 4.76-1.702 1.243-.142 2.38.071 3.339.567 2.664 1.383 4.191 5.106 4.191 10.177v34.252l-.177.106-28.205 16.311Zm21.598-60.739c-.214 0-.427 0-.675.035-1.35.142-2.878.674-4.476 1.631-8.526 4.929-15.737 18.261-15.737 29.076v28.791l26.962-15.601v-33.862c0-4.787-1.386-8.262-3.801-9.538-.675-.355-1.421-.532-2.273-.532Z"
            ></path>
            <path
              fill="#C3E0A0"
              d="m350.214 293.983-9.165 5.283v-29.43c0-8.262-3.09-14.609-8.454-17.445-4.795-2.518-10.728-1.986-16.731 1.489-11.793 6.843-21.065 23.579-21.065 38.117v34.039l-6.855 3.972a16.938 16.938 0 0 0-8.455 14.644v64.781c0 6.524 7.069 10.566 12.717 7.304l60.104-34.748a16.253 16.253 0 0 0 8.099-14.042v-68.078c-.036-5.248-5.684-8.475-10.195-5.886Zm-46.143-2.695c0-10.921 7.282-24.395 15.914-29.395 1.669-.957 3.197-1.524 4.618-1.666 1.172-.107 2.237.071 3.161.532 2.522 1.347 3.979 4.928 3.979 9.857v34.075l-27.672 15.991v-29.394Z"
            ></path>
            <path
              fill="#000"
              d="M325.881 355.643c4.476-3.546 7.744-9.326 7.744-14.219 0-5.957-4.831-8.332-10.799-5.319-5.967 3.014-10.798 10.248-10.798 16.205 0 4.893 3.268 7.375 7.744 6.418l-1.137 3.758-4.156 13.758 8.347-4.184 8.348-4.184-4.156-9.574-1.137-2.659Z"
            ></path>
            <path
              fill="#AF99C9"
              d="M90.688 335.217c4.227-2.411 7.638-8.262 7.602-13.084 0-4.822-3.41-6.772-7.637-4.361-4.192 2.411-7.638 8.297-7.602 13.084.035 4.822 3.446 6.772 7.637 4.361Zm0-11.63c1.421-.816 2.558-.142 2.558 1.454 0 1.631-1.137 3.581-2.558 4.361-1.42.816-2.557.177-2.557-1.454.035-1.595 1.172-3.581 2.557-4.361ZM90.688 299.121c4.227-2.411 7.638-8.261 7.602-13.083 0-4.823-3.41-6.773-7.637-4.362-4.192 2.411-7.638 8.297-7.602 13.084.035 4.822 3.446 6.773 7.637 4.361Zm0-11.665c1.421-.816 2.558-.142 2.558 1.454 0 1.631-1.137 3.581-2.558 4.361-1.42.815-2.557.177-2.557-1.454 0-1.595 1.172-3.546 2.557-4.361ZM90.688 353.869c-4.191 2.411-7.637 8.297-7.601 13.084 0 4.822 3.41 6.772 7.637 4.361 4.227-2.411 7.637-8.261 7.602-13.084 0-4.786-3.41-6.772-7.638-4.361Zm0 11.666c-1.42.815-2.557.177-2.557-1.454 0-1.596 1.136-3.581 2.557-4.361 1.421-.816 2.558-.142 2.558 1.453 0 1.596-1.137 3.546-2.558 4.362Z"
            ></path>
            <path
              fill="#AF99C9"
              d="M109.196 261.04c0-2.34-1.67-3.262-3.695-2.092l-29.625 16.949c-2.06 1.17-3.695 4.007-3.695 6.347v110.664c0 2.34 1.634 3.297 3.695 2.127l29.625-16.949c2.061-1.17 3.695-4.007 3.695-6.347V261.04Zm-18.508 16.204c6.323-3.616 11.474-.673 11.474 6.56 0 7.269-5.15 16.133-11.474 19.75-6.323 3.617-11.473.674-11.473-6.595 0-7.234 5.15-16.098 11.473-19.715Zm0 36.096c6.323-3.616 11.474-.673 11.474 6.56 0 7.269-5.15 16.098-11.474 19.75-6.323 3.617-11.473.674-11.473-6.595 0-7.234 5.15-16.063 11.473-19.715Zm0 62.441c-6.323 3.617-11.473.674-11.473-6.595 0-7.233 5.15-16.098 11.473-19.714 6.323-3.617 11.474-.674 11.474 6.559.036 7.269-5.115 16.098-11.474 19.75Z"
            ></path>
            <path
              fill="#C3E0A0"
              d="M347.94 173.53c1.848-1.064 3.34-.213 3.34 1.915l.071 25.317c0 2.127-1.492 4.68-3.304 5.744l-54.242 31.274c-1.848 1.063-3.34.212-3.34-1.915l-.071-25.317c0-2.127 1.492-4.68 3.34-5.744l54.206-31.274Zm-46.534 47.124c1.812-1.064 3.304-3.617 3.304-5.674 0-2.092-1.492-2.943-3.304-1.879-1.811 1.064-3.303 3.617-3.303 5.709 0 2.056 1.492 2.872 3.303 1.844Zm37.299-21.523c1.811-1.064 3.303-3.617 3.303-5.674 0-2.092-1.492-2.943-3.303-1.879-1.812 1.064-3.304 3.617-3.304 5.709 0 2.056 1.492 2.907 3.304 1.844Zm-24.759 14.289c1.811-1.064 3.303-3.616 3.303-5.673 0-2.092-1.492-2.943-3.303-1.879-1.812 1.063-3.304 3.616-3.268 5.708-.036 2.057 1.456 2.908 3.268 1.844Zm12.255-7.056c1.812-1.064 3.303-3.617 3.268-5.673 0-2.092-1.492-2.943-3.304-1.879-1.811 1.063-3.303 3.616-3.303 5.708.035 2.057 1.492 2.908 3.339 1.844Z"
            ></path>
            <path
              fill="#AF99C9"
              d="M162.976 57.902c-7.282 3.155-13.143 12.729-13.143 21.345 0 8.652 5.897 13.084 13.143 9.928 7.282-3.155 13.143-12.729 13.143-21.345 0-8.652-5.896-13.084-13.143-9.928Zm7.282 8.58-8.347 14.042c-.214.319-.462.602-.746.709 0 0-.036.035-.071.035-.462.071-.888-.248-1.066-.46l-4.05-4.114c-.355-.39-.284-1.17.142-1.808.462-.638 1.102-.851 1.457-.461l3.303 3.368 7.531-12.658c.391-.674 1.243-.85 1.67-.567.71.425.568 1.24.177 1.915Z"
            ></path>
            <path
              fill="url(#login_img_svg__b)"
              d="M162.976 125.451c-7.282 3.155-13.143 12.729-13.143 21.345 0 8.652 5.897 13.084 13.143 9.928 7.282-3.155 13.143-12.729 13.143-21.345 0-8.652-5.896-13.084-13.143-9.928Zm6.004 17.126c.426.248.426.922 0 1.524a1.94 1.94 0 0 1-.746.603c-.285.106-.533.106-.746 0l-3.801-2.305-3.801 5.319a1.936 1.936 0 0 1-.746.603.914.914 0 0 1-.746 0c-.426-.248-.426-.922 0-1.525l3.801-5.319-3.801-2.304c-.426-.249-.426-.922 0-1.525.426-.567 1.101-.851 1.527-.603l3.801 2.305 3.801-5.319c.426-.567 1.101-.851 1.528-.602.426.248.426.921 0 1.524l-3.801 5.319 3.73 2.305Z"
            ></path>
            <defs>
              <linearGradient
                id="login_img_svg__a"
                x1="133.765"
                x2="272.152"
                y1="269.178"
                y2="269.178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA910"></stop>
                <stop offset="1" stopColor="#F48B00"></stop>
              </linearGradient>
              <linearGradient
                id="login_img_svg__b"
                x1="149.81"
                x2="176.131"
                y1="141.094"
                y2="141.094"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA910"></stop>
                <stop offset="1" stopColor="#F48B00"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="loginpage__right">
          <form onSubmit={handleSubmit(submit)} className="loginpage__form">
            <p className="loginpage__title">Login</p>
            <input
              className="loginpage__input"
              type="text"
              placeholder="Username"
            />
            <input
              className="loginpage__input"
              type="text"
              placeholder="Password"
            />
            <button type="submit" className="loginpage__btn">
              submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
