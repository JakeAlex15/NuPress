import React, { Component } from 'react';
import Footer from './Footer';
import Title from './Title';

export default class PodcastList extends Component {
    render() {
        return (
          <div className="col-sm-14">
            <div class="card text-center">
              <div class="card-header">
               <strong>Nucamp Press Podcasts</strong>
              </div>
              <div class="card-body">
                <h5 class="card-title">The Animal Farm Podcast</h5>
                <img src="img/AF.jpg" />
                <p class="card-text">Presented By: George Orwell</p>
                <a href="/AnimalFarm" class="btn btn-primary">Play Now!</a>
              </div>
            </div>
            <div class="card text-center">
              <div class="card-header" />
              <div class="card-body">
                <h5 class="card-title">The Shack Podcast</h5>
                <img src="img/TS.jpg" />
                <p class="card-text">Presented By: William P. Young</p>
                  <a href="/TheShack" class="btn btn-success">Play Now!</a>
              </div>
            </div>
            <div class="card text-center">
              <div class="card-header" />
              <div class="card-body">
                <h5 class="card-title">Stephen King Daily Podcast</h5>
                <img src="img/SKC.jpg" height= "300" width= "185" />
                <p class="card-text">Presented By: Stephen King </p>
                <a href="/StephenKing" class="btn btn-danger">Play Now!</a>
              </div>
            </div>
            <div class="card text-center">
              <div class="card-header" />
              <div class="card-body">
                <h5 class="card-title">The Art of War Podcast</h5>
                <img src="img/AofW.jpg" />
                <p class="card-text">Presented By: Sun Tzu</p>
                <a href="/AofW" class="btn btn-warning">Play Now!</a>
              </div>
            </div>
            <Footer/>
        </div>
        );
    }
}
