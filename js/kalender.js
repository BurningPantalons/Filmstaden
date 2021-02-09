let kalender

function createCalendar(value) {
  console.log(value);
  kalender = $(`
<div class="month">
  <ul>
    <li class="prev">&#10094;</li>
    <li class="next">&#10095;</li>
    <li>Feb<br><span style="font-size:18px">2021</span></li>
  </ul>
</div>

<ul class="weekdays">
  <li>Mån</li>
  <li>Tis</li>
  <li>Ons</li>
  <li>Tor</li>
  <li>Fre</li>
  <li>Lör</li>
  <li>Sön</li>
</ul>

<ul class="days">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span class="active">10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>`);
  
}

$('.kalender').append(kalender);