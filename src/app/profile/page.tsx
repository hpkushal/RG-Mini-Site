export default function ProfilePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Profile</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Manage your personal information and settings.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl bg-gray-50 p-8 rounded-2xl ring-1 ring-gray-200">
          <div className="space-y-8">
            {/* Profile Information */}
            <div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Personal Information</h3>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        placeholder="John Doe"
                        disabled
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        placeholder="john.doe@example.com"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Risk Assessment */}
            <div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Risk Assessment</h3>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Your current risk level based on your gambling behavior:
                </p>
                <div className="mt-4 h-4 w-full rounded-full bg-gray-200">
                  <div
                    className="h-4 rounded-full bg-green-500"
                    style={{ width: '20%' }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-600">
                  <span>Low Risk</span>
                  <span>Moderate Risk</span>
                  <span>High Risk</span>
                </div>
              </div>
            </div>
            
            {/* Preferences */}
            <div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Preferences</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="notifications"
                      name="notifications"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="notifications" className="font-medium text-gray-900">
                      Email Notifications
                    </label>
                    <p className="text-gray-500">Receive email notifications about your risk level and recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="reminders"
                      name="reminders"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="reminders" className="font-medium text-gray-900">
                      Gambling Limit Reminders
                    </label>
                    <p className="text-gray-500">Get notifications when you're approaching your self-set gambling limits.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 