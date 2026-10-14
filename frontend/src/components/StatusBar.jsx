function StatusBar() {
  return (
    <div className="status-bar">
      <span>9:41</span>
      <div className="status-bar-icons">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 22h20V2z"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <rect x="5" y="8.5" width="10" height="7" rx="1" fill="currentColor"/>
          <rect x="21" y="9" width="2" height="6" rx="1" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}

export default StatusBar;
