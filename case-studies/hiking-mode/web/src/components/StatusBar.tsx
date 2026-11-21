export function StatusBar() {
  return (
    <div className="status" aria-hidden="true">
      <span>9:41</span>
      <span className="status__signal">
        <span className="status__dot" />
        LTE
      </span>
    </div>
  )
}
