type PhoneFrameProps = {
  src: string
  alt: string
}

export function PhoneFrame({ src, alt }: PhoneFrameProps) {
  return (
    <figure className="phone">
      <div className="phone__bezel">
        <div className="phone__notch" aria-hidden="true" />
        <img src={src} alt={alt} width={320} height={640} loading="lazy" />
      </div>
    </figure>
  )
}
