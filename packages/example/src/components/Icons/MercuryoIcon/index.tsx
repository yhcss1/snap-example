import { CSSProperties } from 'styled-components';

const MercuryoIcon = ({
  size = 64,
  style,
  onClick,
}: {
  size?: number;
  style?: CSSProperties;
  onClick?: () => void;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 64 64'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
      onClick={onClick}>

      <g clipPath='url(#clip0_4277_27502)'>
        <path d='M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z' fill='#232323'/>
        <path d='M51.4437 29.2084C49.7192 29.2108 48.0112 28.8731 46.4174 28.2148C44.8236 27.5565 43.3751 26.5905 42.1549 25.372C40.9347 24.1534 39.9667 22.7063 39.3063 21.1134C38.6458 19.5204 38.3059 17.8129 38.3059 16.0884H36.0303C36.0303 17.9551 35.6392 19.7684 34.8748 21.4395C33.3404 19.6347 31.5705 18.0442 29.6126 16.7107C26.057 14.3818 22.7859 13.8484 20.3859 15.2351C19.0549 16.0584 18.0739 17.3432 17.6303 18.844C15.9059 18.9507 14.4837 19.5373 13.4526 20.5684C11.497 22.524 11.1414 25.8307 12.4926 29.8662C14.1357 34.3061 16.7611 38.3171 20.1726 41.5995C23.8348 45.244 27.9948 47.964 31.9059 49.2618C33.3281 49.7773 34.8392 50.044 36.3503 50.0795C38.377 50.0795 40.0126 49.4929 41.1859 48.3195L41.257 48.2484L41.2392 48.2307C42.7859 46.5773 43.5326 43.9107 43.3192 40.4795C43.2126 38.7907 42.8926 36.9951 42.377 35.1462C44.8202 32.814 48.066 31.5093 51.4437 31.5018V29.2084ZM20.9548 16.2307C22.9637 15.0929 25.8081 15.5907 28.9548 17.6884C30.8214 18.9151 32.6348 20.5684 34.3059 22.5773C33.7548 23.5551 33.0614 24.4795 32.2614 25.2973C29.4736 22.824 26.2395 20.9052 22.7326 19.644C21.4881 19.1995 20.1726 18.9329 18.857 18.8618C19.2296 17.7678 19.9713 16.8376 20.9548 16.2307ZM21.0081 40.764C17.7239 37.6167 15.1902 33.7705 13.5948 29.5107C12.3859 25.9195 12.6348 23.0395 14.2703 21.404C15.017 20.6395 16.0481 20.1773 17.2926 20.0351C17.0416 21.3227 16.9639 22.638 17.0614 23.9462C17.5025 28.6646 19.0035 33.2225 21.4526 37.2795C23.6588 41.2527 26.6896 44.7078 30.3414 47.4129C27.1948 45.9907 23.9414 43.6795 21.0081 40.764ZM39.4259 48.1951C37.417 49.3507 34.5726 48.8351 31.4259 46.7373C27.7234 44.0966 24.6613 40.6578 22.4659 36.6751C19.977 32.3551 18.4659 27.804 18.217 23.8751C18.1103 22.5773 18.217 21.2618 18.5014 19.964C19.8232 20.0192 21.1293 20.2709 22.377 20.7107C25.3459 21.6884 28.4748 23.5551 31.4081 26.0618C29.0298 28.0946 26.0034 29.2105 22.8748 29.2084V31.5018C26.3608 31.5018 29.7042 32.8854 32.1709 35.3487C34.6375 37.812 36.0256 41.1536 36.0303 44.6395H38.3059C38.3104 41.5259 39.4191 38.5148 41.4348 36.1418C41.8259 37.6707 42.0748 39.1284 42.1459 40.5329C42.4126 44.3195 41.4348 47.0395 39.4259 48.1773V48.1951Z' fill='white'/>
        <path d='M32 64C40.4869 64 48.6263 60.6286 54.6274 54.6274C60.6286 48.6263 64 40.4869 64 32C64 23.5131 60.6286 15.3737 54.6274 9.37258C48.6263 3.37142 40.4869 0 32 0C23.5131 0 15.3737 3.37142 9.37258 9.37258C3.37142 15.3737 0 23.5131 0 32C0 40.4869 3.37142 48.6263 9.37258 54.6274C15.3737 60.6286 23.5131 64 32 64Z' fill='#232323'/>
        <path d='M49.249 43.3244C48.9112 37.8667 46.8312 31.5555 43.3823 25.5644C39.9334 19.5911 35.5245 14.6489 30.9378 11.6267C26.209 8.49777 21.8356 7.80443 18.6356 9.65332C16.8595 10.7453 15.5491 12.4546 14.9556 14.4533C12.8732 14.5072 10.8845 15.3306 9.3734 16.7644C6.76007 19.3955 6.29784 23.8044 8.0934 29.1733C9.83562 34.3644 13.4801 39.9289 18.3512 44.8178C23.2401 49.6889 28.7867 53.3333 33.9956 55.0578C35.8978 55.7333 37.9067 56.1067 39.9512 56.1422C42.6534 56.1422 44.8223 55.36 46.3867 53.7955L46.4756 53.7067L46.4578 53.6889C48.5378 51.4844 49.5156 47.9111 49.249 43.3244ZM44.0401 53.6355C41.3734 55.1644 37.569 54.4889 33.3556 51.6978C28.9823 48.8178 24.7334 44.0533 21.3912 38.2755C18.0667 32.4978 16.0578 26.4355 15.7378 21.2089C15.6134 19.4489 15.7378 17.6889 16.1112 15.9822C17.889 16.0533 19.6134 16.3911 21.2667 16.9778C26.2445 18.6311 31.5956 22.1333 36.3067 26.8444C37.1601 27.7155 37.9956 28.6044 38.7601 29.5111L38.849 29.6L40.0223 28.6044L39.9156 28.4978C39.1156 27.5555 38.2623 26.6489 37.3734 25.76C32.5023 20.8889 26.9556 17.2267 21.7467 15.5022C20.0765 14.9245 18.3368 14.5718 16.5734 14.4533C17.0901 13.013 18.0804 11.7907 19.3823 10.9867C22.049 9.43999 25.8534 10.1333 30.0667 12.9067C34.4401 15.8044 38.689 20.5689 42.0312 26.3467C45.3556 32.1244 47.3645 38.1867 47.6845 43.4133C48.0045 48.4622 46.7067 52.0889 44.0401 53.6355ZM14.1912 21.28C14.529 26.7555 16.609 33.0667 20.0578 39.04C23.0005 44.3589 27.0502 48.9845 31.9334 52.6044C27.2745 50.4131 23.0473 47.4023 19.4534 43.7155C14.7245 39.0044 11.2223 33.6711 9.56895 28.6933C7.96895 23.8933 8.28895 20.0533 10.4578 17.8844C11.5627 16.8329 12.9917 16.1873 14.5112 16.0533C14.1734 17.7778 14.0667 19.5378 14.1912 21.2978V21.28Z' fill='white'/>
        <path d='M42.5455 10.7905H39.5055C39.4914 15.4335 37.6395 19.882 34.3547 23.1635C31.07 26.4449 26.6196 28.2923 21.9766 28.3016V31.3594C26.6226 31.3688 31.0757 33.2186 34.361 36.5039C37.6463 39.7892 39.4961 44.2422 39.5055 48.8883H42.5455C42.5548 44.2422 44.4047 39.7892 47.6899 36.5039C50.9752 33.2186 55.4283 31.3688 60.0743 31.3594V28.3016C55.4299 28.2969 50.9768 26.4511 47.691 23.1686C44.4052 19.8862 42.5549 15.435 42.5455 10.7905Z' fill='white'/>
      </g>
      <defs>
        <clipPath id='clip0_4277_27502'>
          <rect width='64' height='64' fill='white'/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default MercuryoIcon;
