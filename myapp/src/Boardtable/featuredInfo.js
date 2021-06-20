import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">฿47,891,546</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowUpward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Room</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">700</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>


      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"></span>
          <span className="featuredMoneyRate">
           <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>

      </div>
    </div>
  );
}


/*<div className="featuredItem">
<span className="featuredTitle">Cost</span>
<div className="featuredMoneyContainer">
  <span className="featuredMoney">$2,225</span>
  <span className="featuredMoneyRate">
    +2.4 <ArrowUpward className="featuredIcon"/>
  </span>
</div>
<span className="featuredSub">Compared to last month</span>

</div>*/