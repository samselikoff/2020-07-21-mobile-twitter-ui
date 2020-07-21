function Notifications() {
  return (
    <div className="flex border-b border-gray-200">
      <p className="w-1/2 py-3 text-sm font-bold text-center text-blue-500 border-b-2 border-blue-500">
        All
      </p>
      <p className="w-1/2 py-3 text-sm font-bold text-center text-gray-500">
        Mentions
      </p>
    </div>
  );
}

Notifications.headerTitle = "Notifications";

export default Notifications;
