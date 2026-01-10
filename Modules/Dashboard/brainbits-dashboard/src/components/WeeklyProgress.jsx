export default function WeeklyProgress() {
  return (
    <div className="bg-card rounded-xl p-6 border border-borderDark h-full">
      <h3 className="text-lg font-semibold">Weekly Progress</h3>
      <p className="text-sm text-textSecondary mb-6">
        Your learning journey this week
      </p>

      <div className="flex justify-between items-end h-48 text-xs text-textSecondary">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
          <div key={day} className="flex flex-col items-center gap-2">
            <div className="w-1 h-32 bg-borderDark rounded"></div>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
