
const LocationsList = ({ onRegionClick }) => {
  const regions = [
    {name: 'بورفؤاد ', coords: [31, 249, 32, 270]},
    {name: 'منطقة الشرق', coords: [31, 249, 32, 270]},
    {name: 'منطقة العرب', coords: [31, 257, 32, 292]},
    {name: 'منطقة المناخ', coords: [31, 257, 32, 292]},
    {name: 'منطقة الضواحي', coords: [31, 257, 32, 292]},
    {name: 'منطقة الزهور', coords: [31, 257, 32, 292]},
  ];
  return (
    <ul className="space-y-14">
      {regions.map((region, index) => (
        <li key={index} onClick={() => onRegionClick(region)} className="cursor-pointer text-seaBlue ">
          {region.name}
        </li>
      ))}
    </ul>
  );
};
export default LocationsList;
