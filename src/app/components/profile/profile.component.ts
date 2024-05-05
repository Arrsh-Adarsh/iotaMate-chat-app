import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { UserDetails } from '../../interfaces/userdetails';
import { PostComponent } from './post/post.component';
import { FriendsComponent } from './friends/friends.component';
import { FollowerComponent } from './follower/follower.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MaterialModule, PostComponent, FriendsComponent, FollowerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  currentUser!: UserDetails;

  ngOnInit(): void {
    this.currentUser = {
      userName: 'Adarsh',
      userEmail: 'adarsh@gmail.com',
      userFriendCount: 45,
      userId: 'adarshk',
      userPostCount: 99,
      userFollowCount: 23,
      userImageLink:
        'https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg',
      userBio: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
    };
  }
}
