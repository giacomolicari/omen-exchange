import React from 'react'

interface Props {
  size?: string
}

export const IconCloudflare = (props: Props) => {
  const { size = '24' } = props
  return (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M-6.10352e-05 12C-6.10352e-05 5.37258 5.37252 0 11.9999 0C18.6274 0 23.9999 5.37258 23.9999 12C23.9999 18.6274 18.6274 24 11.9999 24C5.37252 24 -6.10352e-05 18.6274 -6.10352e-05 12Z"
        fill="#FAAD3F"
      />
      <path
        d="M15.0062 15.2112C15.1062 14.8753 15.0656 14.5674 14.9031 14.3404C14.7531 14.1289 14.5031 14.0076 14.1968 13.992L8.42181 13.9205L8.33431 13.8708L8.31869 13.7681C8.34056 13.7121 8.39369 13.6717 8.45619 13.6655L14.2781 13.5908C14.9687 13.5566 15.7187 13.003 15.9812 12.3219L16.3124 11.4604L16.3218 11.3484C15.9468 9.65961 14.4343 8.39999 12.6218 8.39999C10.9531 8.39999 9.53744 9.473 9.03119 10.9596C8.70306 10.7171 8.28744 10.5864 7.83431 10.63C7.03119 10.7077 6.38744 11.3484 6.30931 12.1477C6.29056 12.353 6.30306 12.5552 6.34994 12.7387C5.04369 12.776 3.99994 13.8428 3.99994 15.1521C3.99994 15.2672 4.00931 15.3823 4.02494 15.5036C4.03431 15.5565 4.08119 15.6 4.13744 15.6H14.7906C14.8531 15.6 14.9062 15.5596 14.9281 15.5005L15.0062 15.2112ZM16.8437 11.5226C16.7906 11.5226 16.7374 11.5226 16.6843 11.5319L16.5968 11.5972L16.3718 12.3779C16.2718 12.7138 16.3093 13.0217 16.4749 13.2518C16.6249 13.4633 16.8781 13.5815 17.1843 13.5971L18.4124 13.6717L18.5031 13.7184L18.5156 13.8179C18.4968 13.8739 18.4406 13.9205 18.3812 13.9205L17.0999 13.9952C16.4031 14.0263 15.6593 14.583 15.3968 15.2641L15.3062 15.5036C15.2843 15.5502 15.3187 15.5969 15.3718 15.5969H19.7718C19.8218 15.5969 19.8687 15.5627 19.8843 15.5129C19.9593 15.2392 19.9999 14.9562 19.9999 14.6638C19.9999 12.9377 18.5843 11.5288 16.8437 11.5288V11.5226Z"
        fill="white"
      />
    </svg>
  )
}