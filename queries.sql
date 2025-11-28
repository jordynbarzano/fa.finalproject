select s.name, s.location, s.latitude, s.longitude, sy.year
from stadiums s
inner join stadium_years sy on s.id = sy.stadium_id
order by sy.year;